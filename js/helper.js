Ember.Handlebars.registerBoundHelper('trimString', function(passedString) {  
 	var theString = passedString.substring(0,30);
 	return new Handlebars.SafeString(theString+'...');
});


Ember.Handlebars.registerBoundHelper('getUserName', function(id) {  
	console.log(id);
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
	console.log(id);
	var location = App.locations.find(function(item) {
			console.log("item id " + item.id);
			console.log("id " + id);
			console.log(item);
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
	var status = App.statuses.find(function(item) {
			if (item.id === id.toString())  {
				return true;
			}
			else {
				return false;
			}
		});
 	return new Handlebars.SafeString(status.get("nameSv"));
});


function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}