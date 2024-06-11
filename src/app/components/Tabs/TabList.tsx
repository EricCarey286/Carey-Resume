export default function TabList({
  children,
  buttons,
  ButtonsContainer = "menu"
}) {
  //const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
