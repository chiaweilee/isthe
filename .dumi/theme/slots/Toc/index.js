import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Scrollspy as ScrollSpy } from "@makotot/ghostui/src/Scrollspy";
import { useLocation, useRouteMeta, useSiteData } from "dumi";
import React, { useEffect, useRef, useState } from "react";
import "./index.less";
var Toc = function Toc() {
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var meta = useRouteMeta();
  var _useSiteData = useSiteData(),
    loading = _useSiteData.loading;
  var prevIndexRef = useRef(0);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    sectionRefs = _useState2[0],
    setSectionRefs = _useState2[1];
  // only render h2 ~ h4
  var toc = meta.toc.filter(function (_ref) {
    var depth = _ref.depth;
    return depth > 1 && depth < 4;
  });
  useEffect(function () {
    // wait for page component ready (DOM ready)
    if (!loading) {
      // find all valid headings as ref elements
      var refs = toc.map(function (_ref2) {
        var id = _ref2.id;
        return {
          current: document.getElementById(id)
        };
      });
      setSectionRefs(refs);
    }
  }, [pathname, loading]);
  return sectionRefs.length ? /*#__PURE__*/React.createElement(ScrollSpy, {
    sectionRefs: sectionRefs
  }, function (_ref3) {
    var currentElementIndexInViewport = _ref3.currentElementIndexInViewport;
    // for keep prev item active when no item in viewport
    if (currentElementIndexInViewport > -1) prevIndexRef.current = currentElementIndexInViewport;
    return /*#__PURE__*/React.createElement("ul", {
      className: "dumi-vite-toc"
    }, toc.filter(function (_ref4) {
      var depth = _ref4.depth;
      return depth > 1 && depth < 4;
    }).map(function (item, i) {
      var link = "#".concat(encodeURIComponent(item.id));
      var activeIndex = currentElementIndexInViewport > -1 ? currentElementIndexInViewport : prevIndexRef.current;
      return /*#__PURE__*/React.createElement("li", {
        key: item.id,
        "data-depth": item.depth
      }, /*#__PURE__*/React.createElement("a", _extends({
        href: link,
        title: item.title
      }, activeIndex === i ? {
        className: "active"
      } : {}), item.title));
    }));
  }) : null;
};
export default Toc;
