import { startCase, camelCase } from "lodash";

import "./styles.tabNav.css";

export const TabNav = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="nav_styling" >
      <ul className="ul_styling" >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {startCase(camelCase(tab))}
          </li>
        ))}
      </ul>
    </nav>
  );
};
