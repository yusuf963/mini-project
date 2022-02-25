import { Fragment, useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import PlatformLinks from "../../features/PlatformLinks";
import SearchInput from "../../components/SearchInput";
import { platforms } from "../../data/platforms";
import { CATEGORIES } from "../../data/platforms";

import "./styles.home.css";

export const HomePage = () => {
  const [filteredPlatforms, setFilteredPlatforms] = useState(platforms);
  const [activeTab, setActiveTab] = useState(CATEGORIES.HOME);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (activeTab === CATEGORIES.HOME) {
      setFilteredPlatforms(platforms);
      return;
    }
    const filtered = platforms.filter(
      (platform) => platform.category === activeTab
    );
    setFilteredPlatforms(filtered);
  }, [activeTab]);

  useEffect(() => {
    if (searchValue) {
      const filtered = platforms.filter(
        (platform) => 
          platform.name.toLowerCase().includes(searchValue.toLowerCase()) || 
            platform.description.toLowerCase().includes(searchValue.toLowerCase()) || 
              platform.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setActiveTab(CATEGORIES.HOME);
      setFilteredPlatforms(filtered);
    }
  }, [searchValue])

  return (
    <Fragment>
      <Header>
        <SearchInput value={searchValue} onValueChange={setSearchValue} />
      </Header>
      <main>
        <PlatformLinks
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filteredPlatforms={filteredPlatforms}
        />
      </main>
      <Footer />
    </Fragment>
  );
};
