import { useRouteMeta } from "dumi";
import React from "react";
import "./index.less";
var Features = function Features() {
  var _frontmatter$features;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  return Boolean((_frontmatter$features = frontmatter.features) === null || _frontmatter$features === void 0 ? void 0 : _frontmatter$features.length) ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-features"
    // auto render 2 or 3 cols by feature count
    ,
    "data-cols": [3, 2].find(function (n) {
      return frontmatter.features.length % n === 0;
    }) || 3
  }, frontmatter.features.map(function (_ref) {
    var title = _ref.title,
      description = _ref.description,
      emoji = _ref.emoji,
      icon = _ref.icon,
      details = _ref.details;
    return /*#__PURE__*/React.createElement("div", {
      key: title,
      className: "dumi-vite-features-item"
    }, emoji || icon && /*#__PURE__*/React.createElement("i", null, emoji || icon), title && /*#__PURE__*/React.createElement("h2", null, title), description || details && /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: description || details
      }
    }));
  })) : null;
};
export default Features;
