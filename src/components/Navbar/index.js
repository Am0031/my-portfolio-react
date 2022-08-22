import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

export const Navbar = ({ handleSectionChange }) => {
  const [itemName, setItemName] = useState("English");

  const languageItems = [
    {
      key: "en",
      label: "English",
      value: "en",
    },
    {
      key: "fr",
      label: "Francais",
      value: "fr",
    },
    {
      key: "de",
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

  const sections = [
    { label: t("link1"), key: "about" }, // remember to pass the key prop which is required for mapping
    { label: t("link2"), key: "projects" },
    { label: t("link3"), key: "contact" },
    { label: t("link4"), key: "resume" },
  ];

  const [current, setCurrent] = useState("about");

  const onClickLinks = (e) => {
    setCurrent(e.key);
    handleSectionChange(e.key);
  };

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
        <Menu
          onClick={onClickLinks}
          selectedKeys={[current]}
          mode="horizontal"
          items={sections}
        />
      </div>
    </div>
  );
};
