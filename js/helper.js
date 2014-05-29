Ember.Handlebars.registerBoundHelper('trimString', function(passedString) {  
 	var theString = passedString.substring(0,30);
 	return new Handlebars.SafeString(theString+'...');
});