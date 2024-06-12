import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import "./TabsButton.css";

interface TabsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iSelected: boolean;
  tabContent: ReactNode;
}

const TabsButton: React.FC<TabsButtonProps> = ({ children, iSelected, tabContent, ...props }) => {
  return (
    <li className="tab-container">
      <button className={iSelected ? "tab active" : "tab"} {...props}>
        {children}
      </button>
      <span className={iSelected ? "" : "not-selected"} {...props}>
        {tabContent}
      </span>
    </li>
  );
}

export default TabsButton;

