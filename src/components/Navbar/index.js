import { Menu } from "antd";

const items = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop
  { label: "item 2", key: "item-2" }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [{ label: "item 3", key: "submenu-item-1" }],
  },
];

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navTitle">
        <h1>My Portfolio</h1>
        <h1>Language select</h1>
      </div>
      <div className="navLink">
        <Menu mode="horizontal" items={items} />
      </div>
    </div>
  );
};
