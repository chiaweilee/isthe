import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useSiteData } from "dumi";
import React, { useEffect, useState } from "react";
import "./index.less";
var LS_RTL_KEY = "dumi:rtl";
var RtlSwitch = function RtlSwitch() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    rtl = _useState2[0],
    setRtl = _useState2[1];
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  useEffect(function () {
    if (localStorage.getItem(LS_RTL_KEY)) {
      setRtl(true);
      document.documentElement.setAttribute("data-direction", "rtl");
    }
  }, []);
  if (!themeConfig.rtl) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "dumi-vite-lang-switch",
    onClick: function onClick() {
      if (rtl) {
        document.documentElement.removeAttribute("data-direction");
        localStorage.removeItem(LS_RTL_KEY);
      } else {
        document.documentElement.setAttribute("data-direction", "rtl");
        localStorage.setItem(LS_RTL_KEY, "1");
      }
      setRtl(!rtl);
    }
  }, rtl ? "LTR" : "RTL");
};
export default RtlSwitch;
