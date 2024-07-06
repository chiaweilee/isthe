import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ReactComponent as IconDown } from "@ant-design/icons-svg/inline-svg/outlined/down.svg";
import { history, Link, useIntl, useLocale, useLocation, useSiteData } from "dumi";
import React, { useEffect, useState } from "react";
import "./index.less";
function getTargetLocalePath(_ref) {
  var pathname = _ref.pathname,
    current = _ref.current,
    target = _ref.target;
  var clearPath = "base" in current ? pathname.replace(current.base.replace(/\/$/, ""), "") : pathname.replace(new RegExp("".concat(current.suffix, "$")), "");
  return "base" in target ? "".concat(target.base).concat(clearPath).replace(/^\/\//, "/") : "".concat(clearPath).concat(target.suffix);
}
var SingleSwitch = function SingleSwitch(_ref2) {
  var locale = _ref2.locale,
    current = _ref2.current;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useState = useState(function () {
      return getTargetLocalePath({
        pathname: pathname,
        current: current,
        target: locale
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    path = _useState2[0],
    setPath = _useState2[1];
  useEffect(function () {
    setPath(getTargetLocalePath({
      pathname: pathname,
      current: current,
      target: locale
    }));
  }, [pathname, current.id, locale.id]);
  return /*#__PURE__*/React.createElement(Link, {
    className: "dumi-vite-lang-switch",
    to: path
  }, locale.name);
};
var LangSwitch = function LangSwitch() {
  var _useSiteData = useSiteData(),
    locales = _useSiteData.locales;
  var _useIntl = useIntl(),
    locale = _useIntl.locale;
  var current = useLocale();

  // do not render in single language
  if (locales.length <= 1) return null;
  return locales.length > 2 ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-lang-select"
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: locale,
    onChange: function onChange(ev) {
      history.push(getTargetLocalePath({
        pathname: history.location.pathname,
        current: current,
        target: locales.find(function (_ref3) {
          var id = _ref3.id;
          return id === ev.target.value;
        })
      }));
    }
  }, locales.map(function (item) {
    return /*#__PURE__*/React.createElement("option", {
      key: item.id,
      value: item.id
    }, item.name);
  })), /*#__PURE__*/React.createElement(IconDown, null)) :
  /*#__PURE__*/
  // single language switch
  React.createElement(SingleSwitch, {
    locale: locales.find(function (_ref4) {
      var id = _ref4.id;
      return id !== locale;
    }),
    current: current
  });
};
export default LangSwitch;
