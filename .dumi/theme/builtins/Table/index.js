import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import throttle from "lodash.throttle";
import React, { useEffect, useRef, useState } from "react";
import "./index.less";
var Table = function Table(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var container = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    leftFolded = _useState2[0],
    setLeftFolded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    rightFolded = _useState4[0],
    setRightFolded = _useState4[1];

  // watch content scroll to render folded shadow
  useEffect(function () {
    var elm = container.current;
    if (elm) {
      var handler = throttle(function () {
        setLeftFolded(elm.scrollLeft > 0);
        setRightFolded(elm.scrollLeft < elm.scrollWidth - elm.offsetWidth);
      }, 100);
      handler();
      elm.addEventListener("scroll", handler);
      window.addEventListener("resize", handler);
      return function () {
        elm.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-table-content",
    ref: container,
    "data-left-folded": leftFolded || undefined,
    "data-right-folded": rightFolded || undefined
  }, /*#__PURE__*/React.createElement("table", props, children)));
};
export default Table;
