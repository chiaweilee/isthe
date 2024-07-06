import _extends from "@babel/runtime/helpers/esm/extends";
import { Link, useLocation, useNavData } from "dumi";
import React from "react";
import "./index.less";
var Navbar = function Navbar() {
  var nav = useNavData();
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  return /*#__PURE__*/React.createElement("ul", {
    className: "dumi-vite-navbar"
  }, nav.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.link
    }, /^(\w+:)\/\/|^(mailto|tel):/.test(item.link) ? /*#__PURE__*/React.createElement("a", {
      href: item.link,
      target: "_blank",
      rel: "noreferrer"
    }, item.title) : /*#__PURE__*/React.createElement(Link, _extends({
      to: item.link
    }, pathname.startsWith(item.activePath || item.link) ? {
      className: "active"
    } : {}), item.title));
  }));
};
export default Navbar;
