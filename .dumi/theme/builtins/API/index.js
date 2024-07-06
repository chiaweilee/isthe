import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useAtomAssets, useIntl } from "dumi";
import React from "react";
import Table from "../Table";
var API = function API(_ref) {
  var _definition$propsConf;
  var id = _ref.id;
  var _useAtomAssets = useAtomAssets(),
    components = _useAtomAssets.components;
  var definition = components === null || components === void 0 ? void 0 : components[id];
  var intl = useIntl();
  return /*#__PURE__*/React.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: "api.component.name"
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: "api.component.description"
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: "api.component.type"
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: "api.component.default"
  })))), /*#__PURE__*/React.createElement("tbody", null, definition && (_definition$propsConf = definition.propsConfig) !== null && _definition$propsConf !== void 0 && _definition$propsConf.properties ? Object.entries(definition.propsConfig.properties).map(function (_ref2) {
    var _definition$propsConf2;
    var _ref3 = _slicedToArray(_ref2, 2),
      name = _ref3[0],
      prop = _ref3[1];
    return /*#__PURE__*/React.createElement("tr", {
      key: name
    }, /*#__PURE__*/React.createElement("td", null, name), /*#__PURE__*/React.createElement("td", null, prop.description || "--"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("code", null, prop.type)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("code", null, (_definition$propsConf2 = definition.propsConfig.required) !== null && _definition$propsConf2 !== void 0 && _definition$propsConf2.includes(name) ? intl.formatMessage({
      id: "api.component.required"
    }) : prop.default || "--")));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 4
  }, intl.formatMessage({
    id: "api.component.".concat(components ? "not.found" : "loading")
  }, {
    id: id
  }))))));
};
export default API;
