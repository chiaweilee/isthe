import { Link, useLocale, useSiteData } from "dumi";
import React from "react";
import DefaultLogo from "dumi/theme/slots/DefaultLogo";
import "./index.less";
var Logo = function Logo() {
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  var locale = useLocale();
  return /*#__PURE__*/React.createElement(Link, {
    className: "dumi-vite-logo",
    to: "base" in locale ? locale.base : "/"
  }, themeConfig.logo ? /*#__PURE__*/React.createElement("img", {
    src: themeConfig.logo,
    alt: themeConfig.name
  }) : /*#__PURE__*/React.createElement(DefaultLogo, null));
};
export default Logo;
