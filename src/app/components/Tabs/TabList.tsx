import React, { ReactNode, ElementType } from 'react';

interface TabListProps {
  children: ReactNode;
  buttons: ReactNode;
  ButtonsContainer?: ElementType; // Allows any HTML element or custom component
}

const TabList: React.FC<TabListProps> = ({
  children,
  buttons,
  ButtonsContainer = "menu"
}) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default TabList;
