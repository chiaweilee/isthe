import _typeof from "@babel/runtime/helpers/esm/typeof";
import { useLocation, useSiteData } from "dumi";
import Device from "dumi/theme/slots/Device";
import PreviewerActions from "dumi/theme/slots/PreviewerActions";
import React from "react";
import "./index.less";
var Previewer = function Previewer(props) {
  var _useLocation = useLocation(),
    hash = _useLocation.hash;
  var link = "#".concat(props.asset.id);
  var _useSiteData = useSiteData(),
    hd = _useSiteData.themeConfig.hd;
  var isH5 = !!hd;
  return /*#__PURE__*/React.createElement("div", {
    id: props.asset.id,
    className: "dumi-vite-previewer",
    "data-debug": props.debug,
    "data-active": hash === link || undefined,
    "data-h5": isH5
  }, !isH5 && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-previewer-demo",
    style: {
      background: props.background
    },
    "data-compact": props.compact || undefined,
    "data-transform": props.transform || undefined,
    "data-iframe": props.iframe || undefined
  }, props.iframe ? /*#__PURE__*/React.createElement("iframe", {
    style: ["string", "number"].includes(_typeof(props.iframe)) ? {
      height: Number(props.iframe)
    } : {},
    src: props.demoUrl
  }) : props.children), /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-previewer-meta",
    "data-h5": isH5
  }, (props.title || props.debug) && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-previewer-desc"
  }, /*#__PURE__*/React.createElement("h5", null, /*#__PURE__*/React.createElement("a", {
    href: link
  }, props.debug && /*#__PURE__*/React.createElement("strong", null, "DEV ONLY"), props.title)), props.description && /*#__PURE__*/React.createElement("div", {
    className: "markdown",
    dangerouslySetInnerHTML: {
      __html: props.description
    }
  })), !isH5 && /*#__PURE__*/React.createElement(PreviewerActions, props), isH5 && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-previewer-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-previewer-flex-actions"
  }, /*#__PURE__*/React.createElement(PreviewerActions, props)), /*#__PURE__*/React.createElement(Device, {
    url: props.demoUrl
  }))));
};
export default Previewer;
