App = Ember.Application.create({  
	rootElement: $('#app'),
	  LOG_TRANSITIONS: true

});

App.Router.map(function() {
  // put your routes here
   	this.resource("fjarrinposts", { path: "/fjarrinposts"}, function() {
	
   	});
   	this.route("fjarrinpost", { path: "/fjarrinpost/:order_id"});

   	this.route("fjarrut");
});


App.FjarrinpostRoute = Ember.Route.extend({
	model: function(param) {
		return {"id":1, "owner": "xljoha", "order_type":'Lån',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":'Snabb',"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null};
	}
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
	this.transitionTo('fjarrinposts');
  }, 
});

App.FjarrinpostsRoute = Ember.Route.extend({
  model: function() {
    return {
    	"table-headings":  ['Ordernummer', 'Låntagare', 'Typ', 'Titel', 'Leverans', 'Bibliotek', 'Slutdatum', ''],
    	"table-items": [
			{"id":1, "owner": "xljoha", "order_type":'Kopia',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null},
			{"id":1, "owner": 'xljoha', "order_type":'Lån',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null},
			{"id":1, "owner": "xljoha", "order_type":'Kopia',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null},
			{"id":1, "owner": null, "order_type":'Lån',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"N/A","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null},
			{"id":1, "owner": "xljoha", "order_type":'Lån',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null},
			{"id":1, "owner": "xljoha", "order_type":'Kopia',"title":"About annoying and dirty tiny micro thingy things in the air","publication_year":"1940","volume":"2","issue":"1","pages":"22-23","journal_title":"Journal for med-geeks","issn_isbn":"1234-1234","reference_information":"","photocopies_if_loan_not_possible":true,"order_outside_scandinavia":true,"email_confirmation":true,"not_valid_after":"2014-05-20","delivery_type":2,"name":"Doktor Bill","company1":"Atma och allergienheten","company2":"Östra Sjukhuset","company3":"","phone_number":"","email_address":"bill@example.com","library_card_number":"5001242102","customer_type":"sahl","comments":"","form_lang":"sv","authors":"","order_id":"20140520-151559.1","form_library":"Gm","delivery_place":"Hämtas: Gm","invoicing_name":"","invoicing_address":"","invoicing_postal_address1":"","invoicing_postal_address2":"","order_path":"SFX","created_at":"2014-05-26T10:56:25.207Z","updated_at":"2014-05-26T10:56:25.207Z","user_id":null}
    	]
    }
  }
});



App.HeaderView = Ember.View.extend({
	templateName: 'header'
});

App.MainMenuView = Ember.View.extend({
	templateName: 'mainmenu'
});


App.FooterView = Ember.View.extend({
	templateName: 'footer'
});


