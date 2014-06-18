Ember.Handlebars.registerBoundHelper('trimString', function(passedString) {  
 	var theString = passedString.substring(0,30);
 	return new Handlebars.SafeString(theString+'...');
});


Ember.Handlebars.registerBoundHelper('getUserName', function(id) {  
	var user = App.users.find(function(item) {
			if (item.get("id") === id.toString())  {
				return true;
			}
			else {
				return false;
			}
		});
 	return new Handlebars.SafeString(user.get("xkonto"));

});


Ember.Handlebars.registerBoundHelper('getLocationName', function(id) {  
	
	var location = App.locations.find(function(item) {
			if (item.get("id") === id.toString())  {
				return true;
			}
			else {
				return false;
			}
		});

 	return new Handlebars.SafeString(location.get("nameSv"));

});

Ember.Handlebars.registerBoundHelper('getStatusName', function(id) {  
	console.log("inkommen: " + id);

	if (id) {
		var status = App.statuses.find(function(item) {
				if (item.id === id.toString())  {
					return true;
				}
				else {
					return false;
				}
			});
	 	return new Handlebars.SafeString(status.get("nameSv"));
 	}
 	else return;
});


function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}