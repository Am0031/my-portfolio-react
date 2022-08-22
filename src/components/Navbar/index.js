import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const linkItems = [
    { label: t("link1"), key: "link1" }, // remember to pass the key prop
    { label: t("link2"), key: "link2" }, // which is required
    {
      label: "sub menu",
      key: "submenu",
      children: [
        { label: "sublink 1", key: "submenu-link-1" },
        { label: "sublink 2", key: "submenu-link-2" },
      ],
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navTitle">
        <h1 className="title">{t("portfolio")}</h1>
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
