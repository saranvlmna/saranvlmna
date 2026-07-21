/*
 * DC runtime — auto-generated, do not edit.
 *
 * Boots the <x-dc> template against the Component class declared in the
 * <script type="text/x-dc" data-dc-script"> block. That script tag has a
 * type the browser doesn't recognize, so it never executes on its own —
 * this file reads its text, evaluates it with DCLogic in scope, and mounts
 * the resulting Component against the template.
 *
 * Template mini-language:
 *   {{ expr }}          text/attribute interpolation, evaluated against
 *                        the current scope (starts as { vals: renderVals() })
 *   <sc-for each="item in vals.list">...</sc-for>
 *   <sc-for each="item, i in vals.list">...</sc-for>
 *                        repeats its children once per array entry, with
 *                        `item` (and optional index) added to scope
 */
(function () {
  "use strict";

  function DCLogic(root) {
    this.root = root;
  }
  DCLogic.prototype.renderVals = function () {
    return {};
  };
  DCLogic.prototype.componentDidMount = function () {};

  function evalExpr(expr, scope) {
    var keys = Object.keys(scope);
    var vals = keys.map(function (k) {
      return scope[k];
    });
    var fn = new Function(keys.join(","), "return (" + expr + ");");
    return fn.apply(null, vals);
  }

  function interpolate(text, scope) {
    return text.replace(/\{\{([\s\S]+?)\}\}/g, function (_, expr) {
      var value = evalExpr(expr.trim(), scope);
      return value === null || value === undefined ? "" : String(value);
    });
  }

  var FOR_PATTERN = /^\s*(\w+)(?:\s*,\s*(\w+))?\s+in\s+(.+)$/;

  function processNode(node, scope) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.indexOf("{{") !== -1) {
        node.nodeValue = interpolate(node.nodeValue, scope);
      }
      return [node];
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return [node];
    }

    if (node.tagName.toLowerCase() === "sc-for") {
      var each = node.getAttribute("each") || "";
      var match = each.match(FOR_PATTERN);
      if (!match) {
        console.error("DC: bad <sc-for each> expression:", each);
        return [];
      }
      var itemName = match[1];
      var indexName = match[2];
      var listExpr = match[3];
      var list = evalExpr(listExpr, scope) || [];
      var templateChildren = Array.prototype.slice.call(node.childNodes);
      var out = [];
      list.forEach(function (item, idx) {
        var childScope = Object.assign({}, scope);
        childScope[itemName] = item;
        if (indexName) childScope[indexName] = idx;
        templateChildren.forEach(function (child) {
          out = out.concat(processNode(child.cloneNode(true), childScope));
        });
      });
      return out;
    }

    var attrs = Array.prototype.slice.call(node.attributes || []);
    attrs.forEach(function (attr) {
      if (attr.value.indexOf("{{") !== -1) {
        attr.value = interpolate(attr.value, scope);
      }
    });

    var newChildren = [];
    Array.prototype.slice.call(node.childNodes).forEach(function (child) {
      newChildren = newChildren.concat(processNode(child, scope));
    });
    while (node.firstChild) node.removeChild(node.firstChild);
    newChildren.forEach(function (child) {
      node.appendChild(child);
    });

    return [node];
  }

  function render(xdc, component) {
    var vals = component.renderVals();
    var topScope = { vals: vals };
    var processed = [];
    Array.prototype.slice.call(xdc.childNodes).forEach(function (child) {
      processed = processed.concat(processNode(child, topScope));
    });
    while (xdc.firstChild) xdc.removeChild(xdc.firstChild);
    processed.forEach(function (node) {
      xdc.appendChild(node);
    });
    xdc.style.display = "";
  }

  function boot() {
    var scriptEl = document.querySelector('script[data-dc-script]');
    var xdc = document.querySelector("x-dc");
    if (!scriptEl || !xdc) return;

    var factory = new Function("DCLogic", scriptEl.textContent + "\nreturn Component;");
    var ComponentClass = factory(DCLogic);
    var component = new ComponentClass(xdc);
    render(xdc, component);

    if (typeof component.componentDidMount === "function") {
      component.componentDidMount();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
