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


  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-6\">\n\n			<div class=\"panel panel-primary\">\n			  <div class=\"panel-heading\">Order - ");
  stack1 = helpers._triageMustache.call(depth0, "model.order_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <div class=\"status pull-right\"> \n				<div class=\"btn-group\">\n				  <button type=\"button\" class=\"btn btn-default btn-xs\">GM</button>\n				  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n				    <span class=\"caret\"></span>\n				    <span class=\"sr-only\">Toggle Dropdown</span>\n				  </button>\n				  <ul class=\"dropdown-menu\" role=\"menu\">\n				    <li><a href=\"#\">Peddan</a></li>\n				    <li><a href=\"#\">Handels</a></li>\n				    <li><a href=\"#\">Human</a></li>\n				    <li><a href=\"#\">Nått annat</a></li>\n				  </ul>\n				</div>\n				<div class=\"btn-group\">\n				  <button type=\"button\" class=\"btn btn-default btn-xs\">Läst</button>\n				  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n				    <span class=\"caret\"></span>\n				    <span class=\"sr-only\">Toggle Dropdown</span>\n				  </button>\n				  <ul class=\"dropdown-menu\" role=\"menu\">\n				    <li><a href=\"#\">Väntar på svar</a></li>\n				    <li><a href=\"#\">Levererad</a></li>\n				    <li><a href=\"#\">Stängd</a></li>\n				    <li><a href=\"#\">Makulerad</a></li>\n				  </ul>\n				</div>\n\n			  </div></div>\n					<table class=\"table table-striped table-bordered table-condensed\">\n						<tr>\n							<th>Titel: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Författare: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n\n						<tr>\n							<th>Leveransbibliotek: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.delivery_place", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n\n						<tr>\n							<th>ISSN / ISBN: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.issn_isbn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Ordertyp: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.order_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Volym: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.publication_year", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Publikations-år: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.publication_year", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Nummer (issue): </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.issue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Sidor: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.pages", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Journal titel: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.journal_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Kopia (om lån ej möjligt): </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.photocopies_if_loan_not_possible", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Utanför skandinavien: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.order_outside_scandinavia", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>E-post konfirmation: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.email_confirmation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Bäst-före-datum: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.not_valid_after", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n						<tr>\n							<th>Prioritet: </th>\n							<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.delivery_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						</tr>\n					</table>\n			</div> <!-- end panel --> \n\n\n			<div class=\"panel panel-primary\">\n				<div class=\"panel-heading\">Kund</div>\n				<table class=\"table table-striped table-bordered table-condensed\">\n					<tr>\n						<th>Namn: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>company1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>company2: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>company3: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.company3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Telefon: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.phone_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>E-post: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.email_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Lånekortsnummer: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.library_card_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Kundtyp: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.customer_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Kommentar: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.comments", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Formulärspråk: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.form_lang", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Fakturanamn: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>Fakturaaddress: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>invoicing_postal_address1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_postal_address1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n					<tr>\n						<th>invoicing_postal_address1: </th>\n						<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.invoicing_postal_address2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					</tr>\n		\n				</table>\n			</div> <!-- end panel -->\n\n\n		</div>\n		<div class=\"col-xs-6\">\n			<div class=\"row\">\n				<section id=\"feedback\">\n						<div class=\"col-xs-12\">\n							<h3><i class=\"fa fa-letter\"><i class=\"fa fa-envelope-o\"></i>  Kommunikation</h3>\n						</div>\n						<form class=\"form col-xs-12\">\n							<div class=\"form-group\">\n								<select class=\"form-control\">\n								  <option>Handläggare (xljoha)</option>\n								  <option>Beställare (");
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
  data.buffer.push("\n					<tr>\n\n		    			<td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "fjarrinpost", "item.order_id", options) : helperMissing.call(depth0, "link-to", "fjarrinpost", "item.order_id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </td>\n		    			<td>");
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
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.order_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
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

  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-12\">	\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ToolbarView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n		</div>\n	</div>\n	<div id=\"order-list\" class=\"row\">\n		<div class=\"col-xs-12\">\n\n		    <table class=\"table table-striped table-condensed\">\n		    	<tr>\n			    	<th>Ordernummer</th>\n			    	<th>Låntagare</th>\n			    	<th>Typ</th>\n			    	<th>Titel</th>\n			    	<th>Leveransbibliotek</th>\n			    	<th>Bibliotek</th>\n			    	<th>Slutdatum</th>\n			    	<th></th>\n		    	</tr>\n		    	");
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
  


  data.buffer.push("\n<header class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-xs-9\">\n			<h2><i class=\"fa fa-play-circle\"></i> fjärr<span>kontroll</span> </h2>\n		</div>\n		<div class=\"col-xs-3\">\n			<nav id=\"admin-menu\">\n				<div class=\"btn-group\">\n					<button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-female\"></i> xljoha</button>\n				  	<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n						<span class=\"caret\"></span>\n				    	<span class=\"sr-only\">Toggle Dropdown</span>\n				  	</button>\n				  <ul class=\"dropdown-menu\" role=\"menu\">\n				    <li><a href=\"#\"><i class=\"fa fa-cog\"></i> inställningar</a></li>\n				    <li><a href=\"#\"><i class=\"fa fa-unlock\"></i> logga ut</a></li>\n				  </ul>\n				</div>\n			</div>\n			<div id=\"logo\">\n				<div class=\"logo swe light text-below\"></div>\n			</div>\n		</div>\n\n		</div>\n	</div>\n</header>\n");
  
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
  


  data.buffer.push("\n<nav class=\"navbar navbar-default container\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">IN <i class=\"fa fa-arrow-circle-left\"></i></a></li>\n        <li><a href=\"#\">UT <i class=\"fa fa-arrow-circle-right\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i> Statistik </a></li>\n        <li><a href=\"#\"><i class=\"fa fa-question-circle\"></i> Hjälp  </a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>");
  
});

Ember.TEMPLATES["toolbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"toolbar\">	\n	");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("form-control"),
    'content': ("filter2.locations"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name_sv"),
    'value': ("filter2.currentLocation.id")
  },hashTypes:{'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMyOrders", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-sm filter4.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >Mina Ordrar <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter4.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleLoan", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-sm filter1.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "filter1.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter1.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCopy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fixed :btn :btn-sm filter3.active:btn-primary:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "filter3.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-check filter3.active:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></button>	\n</div>");
  return buffer;
  
});