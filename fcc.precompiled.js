(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fcc'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"completed") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li>\n        <h3>\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":18}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"topic") || (depth0 != null ? lookupProperty(depth0,"topic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topic","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":28}}}) : helper)))
    + " &bull;<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"certification") || (depth0 != null ? lookupProperty(depth0,"certification") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"certification","hash":{},"data":data,"loc":{"start":{"line":6,"column":44},"end":{"line":6,"column":61}}}) : helper)))
    + "\">Certification</a>\n        </h3>\n        <ul class=\"projects\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":14,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"homepage") || (depth0 != null ? lookupProperty(depth0,"homepage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"homepage","hash":{},"data":data,"loc":{"start":{"line":11,"column":25},"end":{"line":11,"column":37}}}) : helper)))
    + "\">FCC"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_id") || (depth0 != null ? lookupProperty(depth0,"project_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_id","hash":{},"data":data,"loc":{"start":{"line":11,"column":42},"end":{"line":11,"column":56}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"project_title") || (depth0 != null ? lookupProperty(depth0,"project_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_title","hash":{},"data":data,"loc":{"start":{"line":11,"column":59},"end":{"line":11,"column":76}}}) : helper)))
    + "</a>\n                &bull;<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"source") || (depth0 != null ? lookupProperty(depth0,"source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":41}}}) : helper)))
    + "\" class=\"source-link\">Source</a>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class='topics'>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"certifications") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
})();