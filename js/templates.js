Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.HeaderView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.MainMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FooterView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["fjarrinpost"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-8\">\n			<h1>Single post template</h1>\n			id: ");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div class=\"col-xs-4\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<h3>Gunda</h3>\n					<table class=\"table table-striped table-bordered\">\n						<tr>\n							<th>Titel:</th>\n							<td>Test Titel</td>\n						</tr>\n						<tr>\n							<th>ISBN:</th>\n							<td>23423423423434</td>\n						</tr>\n						<tr>\n							<th>Hylla:</th>\n							<td>Kvinn 300 14/42</td>\n						</tr>\n					</table>\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<h3>Libris</h3>\n					<table class=\"table table-striped table-bordered\">\n						<tr>\n							<th>Titel:</th>\n							<td>Test Titel</td>\n						</tr>\n						<tr>\n							<th>ISBN:</th>\n							<td>23423423423434</td>\n						</tr>\n						<tr>\n							<th>Hylla:</th>\n							<td>Kvinn 300 14/42</td>\n						</tr>\n					</table>\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<h3>Prisförslag</h3>\n					<table class=\"table table-striped table-bordered\">\n						<tr>\n							<th>Pris ink moms:</th>\n							<td>120:-</td>\n						</tr>\n						<tr>\n							<th>Leveranskostnad:</th>\n							<td>10:-</td>\n						</tr>\n						<tr>\n							<th>Summa:</th>\n							<td>130:-</td>\n						</tr>\n					</table>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["fjarrinposts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			    		<th>");
  stack1 = helpers._triageMustache.call(depth0, "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n			    	");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		    		<tr>\n		    			<td><a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "item.order_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a> </td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.order_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  data.buffer.push(escapeExpression((helper = helpers.trimString || (depth0 && depth0.trimString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "item.title", options) : helperMissing.call(depth0, "trimString", "item.title", options))));
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.delivery_place", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.form_library", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.not_valid_after", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						<td>\n							");
  stack1 = helpers['if'].call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</td>\n		    		</tr>\n		    	");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								<div class=\"btn-group\">\n								  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n								    <i class=\"fa fa-male\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"caret\"></span>\n								  </button>\n								  <ul class=\"dropdown-menu\" role=\"menu\">\n								    <li><a href=\"#\"><i class=\"fa fa-male\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n								    <li><a href=\"#\">Släpp order</a></li>\n								  </ul>\n								</div>\n							");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n								<a class=\"btn btn-xs btn-default\" href=\"#\">ta order</a> \n							");
  }

  data.buffer.push("<div class=\"container\">\n	<div id=\"order-list\" class=\"row\">\n		<div class=\"col-xs-12\">\n		    <table class=\"table table-striped\">\n		    	<tr>\n		    		");
  stack1 = helpers.each.call(depth0, "item", "in", "model.table-headings", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		    	</tr>\n		    	");
  stack1 = helpers.each.call(depth0, "item", "in", "model.table-items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		    </table>\n	    </div>\n	</div>\n </div><!-- end container -->");
  return buffer;
  
});

Ember.TEMPLATES["fjarrut"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<footer class=\"container\">\n	<div id=\"footer\" class=\"row\">\n		<div class=\"col-xs-12\">\n			&copy; Göteborgs Universitetsbibliotek 2014 \n\n		</div>\n	</div>\n	\n</footer>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<header class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-9\">\n			<h2><i class=\"fa fa-play-circle\"></i> fjärr<span>kontroll</span> </h2>\n		</div>\n		<div class=\"col-xs-3\">\n			<nav id=\"admin-menu\">\n				<div class=\"btn-group\">\n				  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n				    <i class=\"fa fa-male\"></i> xljoha <span class=\"caret\"></span>\n				  </button>\n				  <ul class=\"dropdown-menu\" role=\"menu\">\n				    <li><a href=\"#\"><i class=\"fa fa-cog\"></i> inställningar</a></li>\n				    <li><a href=\"#\"><i class=\"fa fa-unlock\"></i> logga ut</a></li>\n				  </ul>\n				</div>\n			</div>\n			<div id=\"logo\">\n				<div class=\"logo swe light text-below\"></div>\n			</div>\n		</div>\n\n		</div>\n	</div>\n</header>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["mainmenu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<nav class=\"navbar navbar-default container\" role=\"navigation\">\n\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">IN <i class=\"fa fa-arrow-circle-left\"></i></a></li>\n        <li><a href=\"#\">UT <i class=\"fa fa-arrow-circle-right\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i> Statistik </a></li>\n        <li><a href=\"#\"><i class=\"fa fa-question-circle\"></i> Hjälp  </a></li>\n		<li>\n\n		</li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>");
  
});