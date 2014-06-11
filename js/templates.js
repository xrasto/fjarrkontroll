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
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n										");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("form-control"),
    'content': ("locations"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.label"),
    'value': ("model.locationId")
  },hashTypes:{'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n									");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										<button class=\"disabled btn btn-default\">Handläggande enhet: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "model.locationId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong></button>\n									");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n										<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveOrder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pull-right :btn :btn-danger :btn-md")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><i class=\"fa fa-floppy-o\"></i> Spara</button>\n										<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetOrder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pull-right :btn :btn-default :btn-md")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><i class=\"fa fa-trash-o\"></i> Stäng</button>\n									");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n										<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "enterEditMode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"pull-right btn btn-default btn-md\"><i class=\"fa fa-pencil-square-o\"></i> Edit</button>\n									");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.title")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.author")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.deliveryPlace")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.deliveryPlace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.issnIsbn")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.issnIsbn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.orderType")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.orderType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.volume")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.volume", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.publicationYear")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.publicationYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.issue")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.issue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.pages")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.pages", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.journalTitle")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.journalTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.photocopiesIfLoanNotPossible")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.photocopiesIfLoanNotPossible", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.orderOutsideScandinavia")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program55(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.orderOutsideScandinavia", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program57(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.emailConfirmation")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program59(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.emailConfirmation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program61(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.notValidAfter")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program63(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.notValidAfter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

function program65(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("form-control"),
    'type': ("text"),
    'value': ("model.deliveryType")
  },hashTypes:{'classNames': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n								");
  return buffer;
  }

function program67(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers._triageMustache.call(depth0, "model.deliveryType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-4\">\n			<div class=\"panel panel-primary\">\n				<div class=\"panel-heading\">Kund</div>\n				<table class=\"table table-striped table-bordered table-condensed\">\n					<tr>\n						<th>Namn: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>company1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>company2: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>company3: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Telefon: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.phone_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>E-post: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.email_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Lånekortsnummer: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.library_card_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Kundtyp: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.customer_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Kommentar: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.comments", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Formulärspråk: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.form_lang", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Fakturanamn: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>Fakturaaddress: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>invoicing_postal_address1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_postal_address1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n					<tr>\n						<th>invoicing_postal_address1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_postal_address2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						\n					</tr>\n		\n				</table>\n			</div> <!-- end panel -->\n		</div>\n		<div class=\"col-xs-4\">\n			<div class=\"panel panel-primary\">\n			  <div class=\"panel-heading\">\n			  Order - ");
  stack1 = helpers._triageMustache.call(depth0, "model.orderId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n			 </div>\n\n					<table class=\"table table-striped table-bordered table-condensed\">\n						<tr>\n							<td colspan=\"3\">\n								<form class=\"form-inline\" id=\"single-order-toolbar\">\n									\n									");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</form>\n							</td>\n						</tr>\n						<tr>\n							<th>Titel: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n							\n						</tr>\n						<tr>\n							<th>Författare: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n\n						<tr>\n							<th>Leveransbibliotek: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>ISSN / ISBN: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>Ordertyp: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n\n						</tr>\n						<tr>\n							<th>Volym: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n\n\n						</tr>\n						<tr>\n							<th>Publikations-år: </th>\n							<td>								\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(35, program35, data),fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>Nummer (issue): </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n\n						</tr>\n						<tr>\n							<th>Sidor: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(43, program43, data),fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n\n						</tr>\n						<tr>\n							<th>Journal titel: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(47, program47, data),fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>Kopia (om lån ej möjligt): </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(51, program51, data),fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>Utanför skandinavien: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(55, program55, data),fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>E-post konfirmation: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(59, program59, data),fn:self.program(57, program57, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						<tr>\n							<th>Bäst-före-datum: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(63, program63, data),fn:self.program(61, program61, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n				\n						</tr>\n						<tr>\n							<th>Prioritet: </th>\n							<td>\n								");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(67, program67, data),fn:self.program(65, program65, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							</td>\n						</tr>\n					</table>\n			</div> <!-- end panel --> \n\n\n		</div>\n		<div class=\"col-xs-4\">\n			<div class=\"row\">\n				<section id=\"feedback\">\n						<div class=\"col-xs-12\">\n							<h3><i class=\"fa fa-letter\"><i class=\"fa fa-envelope-o\"></i>  Kommunikation</h3>\n						</div>\n						<form class=\"form col-xs-12\">\n							<div class=\"form-group\">\n								<select class=\"form-control\">\n								  <option>Handläggare (xljoha)</option>\n								  <option>Beställare (");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</option>\n								</select>\n							</div>\n							<div class=\"form-group\">\n								<label class=\"sr-only\">Rubrik:</label><input class=\"form-control\" type=\"text\" placeholder=\"rubrik\"></input>\n							</div>\n							\n							<div class=\"form-group\">\n								<label class=\"sr-only\">Meddelande:</label>\n								<textarea rows=\"6\" class=\"form-control\" placeholder=\"Här skriver du ditt meddelande...\"></textarea>\n							</div>\n							<div class=\"form-group\">\n								<button class=\"btn btn-default pull-right\" type=\"submit\">Skicka</button>\n							</div>\n						</form>\n\n						<div id=\"feedback-thread\" class=\"col-xs-12\">\n							<ul class=\"media-list\">\n								<li class=\"media\">\n							        <a class=\"pull-left\" href=\"#\">\n							          <img class=\"media-object img-circle\" src=\"img/librarian.jpg\">\n							        </a>\n							        <div class=\"media-body\">\n							          <h4 class=\"media-heading\">Media heading <span class=\"badge\">2014-10-10 13:38</span></h4>\n							          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>  \n									</div>\n								</li>\n							</ul>\n						</div>\n				</section>\n			</div>\n			<div class=\"row\">\n				<section id=\"feedback\">\n						<div class=\"col-xs-12\">\n							<h3><i class=\"fa fa-letter\"><i class=\"fa fa-comment\"></i>  Anteckningar</h3>\n						</div>\n						<form class=\"form col-xs-12\">\n							<div class=\"form-group\">\n								<label class=\"sr-only\">Meddelande:</label>\n								<textarea rows=\"6\" class=\"form-control\" placeholder=\"Här skriver du din anteckning...\"></textarea>\n							</div>\n							<div class=\"form-group\">\n								<button class=\"btn btn-default pull-right\" type=\"submit\">Skicka</button>\n							</div>\n						</form>\n\n						<div id=\"feedback-thread\" class=\"col-xs-12\">\n							<ul class=\"media-list\">\n								<li class=\"media\">\n							        <a class=\"pull-left\" href=\"#\">\n							          <img class=\"media-object img-circle\" src=\"img/librarian.jpg\">\n							        </a>\n							        <div class=\"media-body\">\n							          <p><span class=\"badge\">2013-12-01 13:22</span> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n							          <!-- Nested media object -->\n							         </div>\n								</li>\n							</ul>\n						</div>\n				</section>\n			</div>\n			<div class=\"row\">\n				<section id=\"external-status\">\n\n				</section>\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["fjarrinposts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<tr>\n		    			<td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "fjarrinpost", "item.id", options) : helperMissing.call(depth0, "link-to", "fjarrinpost", "item.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.orderType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  data.buffer.push(escapeExpression((helper = helpers.trimString || (depth0 && depth0.trimString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "item.title", options) : helperMissing.call(depth0, "trimString", "item.title", options))));
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.deliveryPlace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n		    			<td>");
  stack1 = helpers._triageMustache.call(depth0, "item.formLibrary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						<td>Inkommen</td>\n						<td>\n							");
  stack1 = helpers['if'].call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</td>\n		    		</tr>\n		    	");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.orderId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								<div class=\"btn-group\">\n								  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n								    <i class=\"fa fa-male\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"caret\"></span>\n								  </button>\n								  <ul class=\"dropdown-menu\" role=\"menu\">\n								    <li><a href=\"#\"><i class=\"fa fa-male\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "item.owner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n								    <li><a href=\"#\">Släpp order</a></li>	\n								  </ul>\n								</div>\n							");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n								<a class=\"btn btn-xs btn-default\" href=\"#\">ta order</a> \n							");
  }

  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-12\">	\n\n		</div>\n	</div>\n	<div id=\"order-list\" class=\"row\">\n		<div class=\"col-xs-2\">\n\n			<ul class=\"nav\">\n				<li class=\"active\"><a href=\"#\">Alla ordrar <span class=\"badge\">102</span></a></li>\n				<li><a href=\"#\">Mina ordrar <span class=\"badge\">3</span></a></li>\n				<li><a href=\"#\">Arkiv <span class=\"badge\">3877</span></a></li>\n			</ul>\n\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ToolbarView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n		<!--\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMyOrders", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-md filter4.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >Alla <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter4.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>\n		 	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMyOrders", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-md filter4.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >Mina  <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter4.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	-->\n		</div>\n\n		<div class=\"col-xs-10\">\n			\n		    <table class=\"table table-striped table-condensed\">\n		    	<tr>\n			    	<th>Ordernummer</th>\n			    	<th>Låntagare</th>\n			    	<th>Typ</th>\n			    	<th>Titel</th>\n			    	<th>Leveransbibliotek</th>\n			    	<th>Bibliotek</th>\n			    	<th>Status</th>\n			    	<th></th>\n		    	</tr>\n		    	");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
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
  


  data.buffer.push("<footer class=\"container\">\n	<div id=\"footer\" class=\"row\">\n		<div class=\"col-xs-12\">\n			&copy; Göteborgs Universitetsbibliotek 2014 \n\n		</div>\n	</div>\n</footer>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<header>\n	<div class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-xs-9\">\n				<div id=\"brand\">\n					<div id=\"logo\">\n						<div class=\"logo ub swe dark text-to-right\"></div>\n					</div>\n					<div class=\"service-name\">\n						FJÄRRKONTROLL\n					</div>\n				</div>\n			</div>\n			<div class=\"col-xs-3\">\n			<!--	<nav id=\"admin-menu\">\n					<div class=\"btn-group\">\n						<button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-female\"></i> xljoha</button>\n					  	<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n							<span class=\"caret\"></span>\n					    	<span class=\"sr-only\">Toggle Dropdown</span>\n					  	</button>\n					  <ul class=\"dropdown-menu\" role=\"menu\">\n					    <li><a href=\"#\"><i class=\"fa fa-cog\"></i> inställningar</a></li>\n					    <li><a href=\"#\"><i class=\"fa fa-unlock\"></i> logga ut</a></li>\n					  </ul>\n					</div>\n				</nav>-->\n\n			</div>\n\n		</div>\n		</div>\n	</div>\n</header>\n");
  
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
  


  data.buffer.push("\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\"><i class=\"fa fa-arrow-circle-right\"></i> IN </a></li>\n        <li><a href=\"#\"><i class=\"fa fa-arrow-circle-left\"></i> UT </a></li>\n        <li><a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i> Statistik </a></li>\n        <li><a href=\"#\"><i class=\"fa fa-question-circle\"></i> Hjälp  </a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>");
  
});

Ember.TEMPLATES["toolbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"toolbar\">	\n	<h5>Enhet</h5>\n	");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("form-control"),
    'content': ("filter2.locations"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.nameSv"),
    'value': ("filter2.currentLocation.id")
  },hashTypes:{'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n	<h5>Status</h5>\n	");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("form-control"),
    'content': ("filter2.locations"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.nameSv"),
    'value': ("filter2.currentLocation.id")
  },hashTypes:{'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n	<h5>Typ</h5>\n	<div class=\"btn-group-vertical\">\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleLoan", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-md filter1.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "filter1.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter1.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCopy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-md filter3.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "filter3.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter3.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	\n	</div>\n</div>");
  return buffer;
  
});