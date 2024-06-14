import React from "react";

interface TabListProps {
  ButtonsContainer: React.ElementType;
  buttons: React.ReactNode;
  children?: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ ButtonsContainer, buttons, children }) => {
  return (
    <div className="tab-contaniner">
      <ButtonsContainer>{buttons}</ButtonsContainer>
      <div className="tab-content">{children}</div>
    </div>
  );
};

export default TabList;
