import React from "react";
import "./TabsButton.css"

interface TabsButtonProps {
  onClick: () => void;
  iSelected: boolean;
  tabContent: React.ReactNode;
  children?: React.ReactNode;
}

const TabsButton: React.FC<TabsButtonProps> = ({ onClick, iSelected, tabContent, children }) => {
  return (
    <>
    <button className={iSelected ? "tab active" : "tab"} onClick={onClick}>
      {children}
    </button>
    {iSelected && <div className="tab-content">{tabContent}</div>}
    </>
  );
};

export default TabsButton;

