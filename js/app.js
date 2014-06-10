var App = Ember.Application.create({  
	rootElement: $('#app'),
	  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});







App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'http://130.241.16.49:3009'
});

/*App.ApplicationAdapter = DS.FixtureAdapter.extend();*/

/*App.ApplicationAdapter = DS.LSAdapter.extend({
});*/






App.Router.map(function() {
  // put your routes here
   	this.resource("fjarrinposts", { path: "/fjarrinposts"}, function() {
	
   	});
   	this.route("fjarrinpost", { path: "/fjarrinpost/:id"});
   	this.route("fjarrut");
});


App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		App.currentUser = "xanjoo";
		App.defaultLocation = '3'
		App.locations = this.store.find('location');
	}	
});

App.FjarrinpostsController = Ember.Controller.extend({

	filter : {
		currentLocation: App.defaultLocation,
		mediaType: [],
		user: null
	},
	
	filter1: {
		active : false, 
		name: "Lån",
		id: 1
	},
	filter2: {
	  locations: null,
	  currentLocation: {
	  	id:1
	  }
	},

	filter3: {
		active: false,
		name: "Kopia",
		id:2
	},

	//copy: false, //2
	filter4: {
		active: false,
		user: null,
		name: "Mina ordrar"
	},

	init: function() {
		this.set("filter4.user", App.currentUser);
		this.set("filter.currentLocation", App.defaultLocation);
		this.set("filter2.currentLocation.id", App.defaultLocation);
		this.set("filter2.locations", App.locations);
	},

	triggerFilter : function() {
		this.filter.mediaType = [];
		if (this.get("filter1.active")) {
			this.filter.mediaType.push(this.get("filter1.id"));
		}
		else {
			var index = this.filter.mediaType.indexOf(this.get("filter1.id"));
			this.filter.mediaType.splice(index,1);
		}

		if (this.get("filter3.active")) {
			this.filter.mediaType.push(this.get("filter3.id"));
		}

		if (this.filter2.currentLocation.id) {
			this.set("filter.currentLocation",this.filter2.currentLocation.id);
		}
		else {
			this.set("filter.currentLocation",this.filter2.currentLocation.id);	
		}

		if (this.get("filter4.active")) {
			this.set("filter.user", this.get("filter4.user"));
		}
		else {
			this.set("filter.user", null);
		}


		this.transitionToRoute("index");
		console.log("currentLocation: " + this.filter.currentLocation + " mediatypes: " + this.filter.mediaType + " user: " + this.filter.user)
	}.observes('filter1.active', 'filter2.currentLocation.id', 'filter3.active', 'filter4.active'),
	

	actions: {
		toggleLoan: function() {
			if (this.get("filter1.active") === true) {
				this.set("filter1.active", false);
			} 
			else {
				this.set("filter1.active", true);
			}
		},

		toggleCopy: function() {
			if (this.get("filter3.active") === true) {
				this.set("filter3.active", false);
			} 
			else {
				this.set("filter3.active", true);
			}
		},

		toggleMyOrders: function() {
			if (this.get("filter4.active") === true) {
				this.set("filter4.active", false);
			} 
			else {
				this.set("filter4.active", true);
			}
		}

	}
});


App.FjarrinpostController = Ember.ObjectController.extend({
	locations: {},
	isEditing: false,
	init: function() {
		this.locations = App.locations;
		this.set("isEditing", false);
	},

	locationChanged: function() {
		this.get("model").save();
	}.observes('model.locationId'),

	actions: {
		enterEditMode: function() {
			this.set("isEditing", true);
		},
		saveOrder: function() {
			this.get("model").save(); /// check promise from server... then continue.. 
			this.set("isEditing", false);
		},
		resetOrder: function() {
			this.get("model").rollback();
			this.set("isEditing", false);
		}
	}


});


App.FjarrinpostRoute = Ember.Route.extend({
	model: function(param) {
		return this.store.find("order", param.id);
	}

});

App.IndexRoute = Ember.Route.extend({
  	model: function() {
		this.transitionTo('fjarrinposts');
  	}
});

App.FjarrinpostsRoute = Ember.Route.extend({
	model: function() {
		if (this.controllerFor("fjarrinposts")) {
			var filter = this.controllerFor("fjarrinposts").get("filter");
		}

		var result =  this.store.find('order', filter);	
		return result;
	}
});




App.ToolbarView = Ember.View.extend({
	templateName: 'toolbar'
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


