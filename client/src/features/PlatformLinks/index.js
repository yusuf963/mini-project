import { Fragment, useState, useEffect } from 'react';

import { Platform } from '../../components/Platform';
import { TabNav } from '../../components/TabNav';
import { platforms } from '../../data/platforms';
import { CATEGORIES } from '../../data/platforms';

import './styles.platformLinks.css';

const PlatformLinks = () => {
  const [filteredPlatforms, setFilteredPlatforms] = useState(platforms);
  const [activeTab, setActiveTab] = useState(CATEGORIES.HOME);

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

  return (
    <Fragment>
      <TabNav
        tabs={Object.values(CATEGORIES)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="platform-links">
        {filteredPlatforms.map((platform, index) => (
          <Platform
            key={platform._id}
            platform={platform}
            updateCategory={setActiveTab}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default PlatformLinks;
