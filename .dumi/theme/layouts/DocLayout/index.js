import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ReactComponent as IconSidebar } from "@ant-design/icons-svg/inline-svg/outlined/align-left.svg";
import { Helmet, useIntl, useOutlet, useRouteMeta, useSidebarData } from "dumi";
import React, { useState } from "react";
import Content from "dumi/theme/slots/Content";
import Features from "dumi/theme/slots/Features";
import Footer from "dumi/theme/slots/Footer";
import Header from "dumi/theme/slots/Header";
import Hero from "dumi/theme/slots/Hero";
import Sidebar from "dumi/theme/slots/Sidebar";
import Toc from "dumi/theme/slots/Toc";
import "./index.less";
var DocLayout = function DocLayout() {
  var intl = useIntl();
  var outlet = useOutlet();
  var sidebar = useSidebarData();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showSidebar = _useState2[0],
    setShowSidebar = _useState2[1];
  var _useRouteMeta = useRouteMeta(),
    fm = _useRouteMeta.frontmatter;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-doc-layout",
    "data-mobile-sidebar-active": showSidebar || undefined,
    onClick: function onClick() {
      return setShowSidebar(false);
    }
  }, /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("html", {
    lang: intl.locale.replace(/-.+$/, "")
  }), fm.title && /*#__PURE__*/React.createElement("title", null, fm.title), fm.title && /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: fm.title
  }), fm.description && /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: fm.description
  }), fm.description && /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: fm.description
  }), fm.keywords && /*#__PURE__*/React.createElement("meta", {
    name: "keywords",
    content: fm.keywords.join(",")
  }), fm.keywords && /*#__PURE__*/React.createElement("meta", {
    property: "og:keywords",
    content: fm.keywords.join(",")
  })), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), sidebar && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-doc-layout-mobile-bar"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-vite-sidebar-btn",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      setShowSidebar(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement(IconSidebar, null), intl.formatMessage({
    id: "layout.sidebar.btn"
  }))), sidebar && /*#__PURE__*/React.createElement("aside", {
    className: "dumi-vite-doc-layout-aside"
  }, /*#__PURE__*/React.createElement(Sidebar, null)), /*#__PURE__*/React.createElement("main", {
    className: "dumi-vite-doc-layout-main"
  }, /*#__PURE__*/React.createElement(Content, null, outlet), /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-doc-layout-main-aside"
  }, fm.toc === "content" && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-doc-layout-toc-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-doc-layout-toc-title"
  }, "On this page"), /*#__PURE__*/React.createElement(Toc, null)))), !sidebar && /*#__PURE__*/React.createElement(Footer, null));
};
export default DocLayout;
