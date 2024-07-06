import { Link, useRouteMeta } from "dumi";
import React from "react";
import DefaultLogo from "dumi/theme/slots/DefaultLogo";
import HeroTitle from "dumi/theme/slots/HeroTitle";
import "./index.less";
var Hero = function Hero() {
  var _actions;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  if (!("hero" in frontmatter)) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-main"
  }, frontmatter.hero.title && /*#__PURE__*/React.createElement(HeroTitle, null, frontmatter.hero.title), frontmatter.hero.description && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: frontmatter.hero.description
    }
  }), frontmatter.hero.text && /*#__PURE__*/React.createElement("p", {
    className: "dumi-vite-hero-text"
  }, frontmatter.hero.text), frontmatter.hero.tagline && /*#__PURE__*/React.createElement("p", {
    className: "dumi-vite-hero-tagline"
  }, frontmatter.hero.tagline), Boolean((_actions = frontmatter.hero.actions) === null || _actions === void 0 ? void 0 : _actions.length) && /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-actions"
  }, frontmatter.hero.actions.map(function (_ref) {
    var text = _ref.text,
      link = _ref.link;
    return /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? /*#__PURE__*/React.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noreferrer",
      key: text
    }, text) : /*#__PURE__*/React.createElement(Link, {
      key: text,
      to: link
    }, text);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-image-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-image-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-hero-image-src"
  }, frontmatter.hero.image ? /*#__PURE__*/React.createElement("img", {
    src: frontmatter.hero.image,
    alt: frontmatter.hero.title
  }) : /*#__PURE__*/React.createElement(DefaultLogo, null)))));
};
export default Hero;
