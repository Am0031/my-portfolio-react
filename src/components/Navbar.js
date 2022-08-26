import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [itemName, setItemName] = useState("English");
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (key) => {
    i18n.changeLanguage(key);
  };

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
        changeLanguage(languageItems[key - 1].value);
      }}
    />
  );

  const { t } = useTranslation();

  const sections = [
    { label: t("link1"), key: "about", path: "/" }, // remember to pass the key prop which is required for mapping
    { label: t("link2"), key: "projects", path: "/projects" },
    { label: t("link3"), key: "contact", path: "/contact" },
    { label: t("link4"), key: "resume", path: "/resume" },
  ];

  const [current, setCurrent] = useState("about");

  const onClickLinks = (e) => {
    setCurrent(e.key);
    navigate(`${e.keyPath}`, { replace: true });
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
