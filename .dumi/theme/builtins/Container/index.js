import React from "react";
import "./index.less";
var Container = function Container(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-container markdown",
    "data-type": props.type
  }, /*#__PURE__*/React.createElement("h4", null, props.title || props.type.toUpperCase()), /*#__PURE__*/React.createElement("section", null, props.children));
};
export default Container;
