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
      value: "en",
    },
    {
      key: "2",
      label: "Francais",
      value: "fr",
    },
    {
      key: "3",
      label: "Deutsch",
      value: "de",
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
    { label: t("link1"), key: "link1" }, // remember to pass the key prop which is required for mapping
    { label: t("link2"), key: "link2" },
    {
      label: t("link3"),
      key: "link3",
      children: [
        { label: t("sublink1"), key: "sublink1" },
        { label: t("sublink2"), key: "sublink2" },
      ],
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navTitle">
        <h1 className="title">{t("portfolio")}</h1>
        <div className="language-menu">
          <Dropdown overlay={languageMenu}>
            <Typography.Link>
              <Space>
                {itemName}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
      </div>
      <div className="navLink">
        <Menu mode="horizontal" items={linkItems} />
      </div>
    </div>
  );
};
