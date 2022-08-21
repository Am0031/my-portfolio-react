import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";

const linkItems = [
  { label: "link 1", key: "link-1" }, // remember to pass the key prop
  { label: "link 2", key: "link-2" }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [
      { label: "sublink 1", key: "submenu-link-1" },
      { label: "sublink 2", key: "submenu-link-2" },
    ],
  },
];

export const Navbar = () => {
  const [itemName, setItemName] = useState("English");

  const languageItems = [
    {
      key: "1",
      label: "English",
    },
    {
      key: "2",
      label: "Francais",
    },
    {
      key: "3",
      label: "Deutsch",
    },
  ];
  const languageMenu = (
    <Menu
      selectable
      defaultSelectedKeys={["1"]}
      items={languageItems}
      onSelect={({ key }) => {
        setItemName(languageItems[key - 1].label);
      }}
    />
  );

  return (
    <div className="navbar-container">
      <div className="navTitle">
        <h1 className="title">My Portfolio</h1>
        <Dropdown overlay={languageMenu}>
          <Typography.Link>
            <Space>
              {itemName}
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className="navLink">
        <Menu mode="horizontal" items={linkItems} />
      </div>
    </div>
  );
};
