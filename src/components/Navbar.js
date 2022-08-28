import { useState } from "react";
import useWindowDimensions from "../utils/windowSize";
import { useNavigate } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography, Image } from "antd";
import { useTranslation } from "react-i18next";
import enFlag from "../images/en.png";
import frFlag from "../images/fr.png";
import deFlag from "../images/de.png";

export const Navbar = () => {
  const [itemName, setItemName] = useState("English");
  const [flagSrc, setFlagSrc] = useState(enFlag);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const changeLanguage = (key) => {
    i18n.changeLanguage(key);
  };

  const languageItems = [
    {
      key: "1",
      label: "English",
      value: "en",
      imgSrc: enFlag,
    },
    {
      key: "2",
      label: "Francais",
      value: "fr",
      imgSrc: frFlag,
    },
    {
      key: "3",
      label: "Deutsch",
      value: "de",
      imgSrc: deFlag,
    },
  ];

  const languageMenu = (
    <Menu
      selectable
      defaultSelectedKeys={["1"]}
      items={languageItems}
      onSelect={({ key }) => {
        setItemName(languageItems[key - 1].label);
        setFlagSrc(languageItems[key - 1].imgSrc);
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
        <h1 className="title portfolio-title">{t("portfolio")}</h1>
        <Image
          className="flag-image"
          width={30}
          src={flagSrc}
          preview={false}
        />

        <div className="language-menu">
          <Dropdown overlay={languageMenu} arrow={false}>
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
        {width > 420 && (
          <Menu
            onClick={onClickLinks}
            selectedKeys={[current]}
            mode="horizontal"
            items={sections}
            overflowedIndicator={<MenuOutlined />}
          />
        )}
        {width < 420 && (
          <Menu
            onClick={onClickLinks}
            selectedKeys={[current]}
            items={sections}
            style={{ width: width, textAlign: "center" }}
          />
        )}
      </div>
    </div>
  );
};
