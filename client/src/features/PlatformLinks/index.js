import { Fragment } from "react";

import { Platform } from "../../components/Platform";
import { TabNav } from "../../components/TabNav";
import { CATEGORIES } from "../../data/platforms";

import "./styles.platformLinks.css";

const PlatformLinks = ({ activeTab, setActiveTab, filteredPlatforms }) => {
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
