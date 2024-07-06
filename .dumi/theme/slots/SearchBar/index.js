import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _navigator;
import { ReactComponent as IconSearch } from "@ant-design/icons-svg/inline-svg/outlined/search.svg";
import { useIntl, useSiteSearch } from "dumi";
import React, { useEffect, useRef, useState } from "react";
import SearchResult from "dumi/theme/slots/SearchResult";
import "./index.less";
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== "undefined" ? (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.platform : "");
var SearchBar = function SearchBar() {
  var intl = useIntl();
  var imeWaiting = useRef(false);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focusing = _useState2[0],
    setFocusing = _useState2[1];
  var input = useRef(null);
  var _useState3 = useState("⌘"),
    _useState4 = _slicedToArray(_useState3, 2),
    symbol = _useState4[0],
    setSymbol = _useState4[1];
  var _useSiteSearch = useSiteSearch(),
    keywords = _useSiteSearch.keywords,
    setKeywords = _useSiteSearch.setKeywords,
    result = _useSiteSearch.result,
    loading = _useSiteSearch.loading;
  useEffect(function () {
    // why put useEffect?
    // to avoid Text content mismatch between server & client in ssr
    if (!isAppleDevice) {
      setSymbol("Ctrl");
    }
    var handler = function handler(ev) {
      if ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === "k") {
        var _input$current;
        (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus();
        ev.preventDefault();
      }
    };
    document.addEventListener("keydown", handler);
    return function () {
      return document.removeEventListener("keydown", handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-search-bar"
  }, /*#__PURE__*/React.createElement(IconSearch, null), /*#__PURE__*/React.createElement("input", {
    onCompositionStart: function onCompositionStart() {
      return imeWaiting.current = true;
    },
    onCompositionEnd: function onCompositionEnd(ev) {
      imeWaiting.current = false;
      // special case: press Enter open IME panel will not trigger onChange
      setKeywords(ev.currentTarget.value);
    },
    onFocus: function onFocus() {
      return setFocusing(true);
    },
    onBlur: function onBlur() {
      // wait for item click
      setTimeout(function () {
        setFocusing(false);
      }, 1);
    },
    onKeyDown: function onKeyDown(ev) {
      if (["ArrowDown", "ArrowUp"].includes(ev.key)) ev.preventDefault();
      // esc to blur input
      if (ev.key === "Escape" && !imeWaiting.current) ev.currentTarget.blur();
    },
    onChange: function onChange(ev) {
      // wait for onCompositionEnd event be triggered
      setTimeout(function () {
        if (!imeWaiting.current) {
          setKeywords(ev.target.value);
        }
      }, 1);
    },
    placeholder: intl.formatMessage({
      id: "header.search.placeholder"
    }),
    ref: input
  }), /*#__PURE__*/React.createElement("span", {
    className: "dumi-vite-search-shortcut"
  }, symbol, " K"), keywords.trim() && focusing && (result.length || !loading) && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-search-popover"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SearchResult, {
    data: result,
    loading: loading
  }))));
};
export default SearchBar;
