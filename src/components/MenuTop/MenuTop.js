import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import "./MenuTop.scss";

function MenuTop() {
  const items = [
    {
      label: "Home",
      key: "1",
      icon: <Link to="/" />,
    },
    {
      label: "Ultimos lanzamientos",
      key: "2",
      icon: <Link to="/new-movies" />,
    },
    {
      label: "Populares",
      key: "3",
      icon: <Link to="/popular" />,
    },
    {
      label: "Buscador",
      key: "4",
      icon: <Link to="/search" />,
    },
  ];
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        items={items}
      ></Menu>
    </div>
  );
}

export default MenuTop;
