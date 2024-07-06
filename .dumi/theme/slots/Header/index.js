import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ReactComponent as IconClose } from "@ant-design/icons-svg/inline-svg/outlined/close.svg";
import { ReactComponent as IconMenu } from "@ant-design/icons-svg/inline-svg/outlined/menu.svg";
import { useSidebarData, useSiteData } from "dumi";
// import { useRouteMeta } from "dumi";
import React, { useState } from "react";
import Logo from "dumi/theme/slots/Logo";
import Navbar from "dumi/theme/slots/Navbar";
import SearchBar from "dumi/theme/slots/SearchBar";
import "./index.less";
var Header = function Header() {
  // const { frontmatter } = useRouteMeta();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMenu = _useState2[0],
    setShowMenu = _useState2[1];
  var sidebar = useSidebarData();
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-header ".concat(sidebar ? "dumi-vite-header-has-sidebar" : "")
    // data-static={Boolean(frontmatter.hero) || undefined}
    ,
    "data-mobile-active": showMenu || undefined,
    onClick: function onClick() {
      return setShowMenu(false);
    }
  }, sidebar ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-header-has-sidebar-bg"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-header-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "dumi-vite-header-left"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("section", {
    className: "dumi-vite-header-right"
  }, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-header-right-aside"
  }, /*#__PURE__*/React.createElement(Navbar, null))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-vite-header-menu-btn",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      setShowMenu(function (v) {
        return !v;
      });
    }
  }, showMenu ? /*#__PURE__*/React.createElement(IconClose, null) : /*#__PURE__*/React.createElement(IconMenu, null))));
};
export default Header;
