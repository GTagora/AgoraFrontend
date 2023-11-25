'use client'

import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling

interface NavbarProps {
  tabs: string[];
}

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`navbar-tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
          {activeTab === tab && <div className="underline"></div>}
        </div>
      ))}
    </div>
  );
};

export default Navbar;