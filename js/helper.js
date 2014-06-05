Ember.Handlebars.registerBoundHelper('trimString', function(passedString) {  
 	var theString = passedString.substring(0,30);
 	return new Handlebars.SafeString(theString+'...');
});



function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}