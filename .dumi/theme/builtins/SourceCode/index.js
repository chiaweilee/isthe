import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "./dracula-theme";
import "prismjs/themes/prism-coy.css";
import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.less";

/**
 * define DSL which can be highlighted as similar language
 */
var SIMILAR_DSL = {
  acss: "css",
  axml: "markup"
};
var SourceCode = function SourceCode(_ref) {
  var children = _ref.children,
    lang = _ref.lang;
  var timer = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCopied = _useState2[0],
    setIsCopied = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-source-code"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: children,
    onCopy: function onCopy() {
      setIsCopied(true);
      clearTimeout(timer.current);
      timer.current = window.setTimeout(function () {
        return setIsCopied(false);
      }, 2000);
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-vite-source-code-copy",
    "data-copied": isCopied || undefined
  }, isCopied ? /*#__PURE__*/React.createElement(CheckOutlined, null) : /*#__PURE__*/React.createElement(CopyOutlined, null))), /*#__PURE__*/React.createElement(Highlight, _extends({}, defaultProps, {
    code: children.trim(),
    language: SIMILAR_DSL[lang] || lang,
    theme: theme
  }), function (_ref2) {
    var className = _ref2.className,
      style = _ref2.style,
      tokens = _ref2.tokens,
      getLineProps = _ref2.getLineProps,
      getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/React.createElement("pre", {
      className: className,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React.createElement("div", _extends({
        key: String(i)
      }, getLineProps({
        line: line,
        key: i
      })), line.map(function (token, key) {
        return /*#__PURE__*/React.createElement("span", _extends({
          key: String(i)
        }, getTokenProps({
          token: token,
          key: key
        })));
      }));
    }));
  }));
};
export default SourceCode;
