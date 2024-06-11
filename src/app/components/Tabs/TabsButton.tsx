import "./TabsButton.css";

function TabsButton({ children, iSelected, tabContent, ...props }) {
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
