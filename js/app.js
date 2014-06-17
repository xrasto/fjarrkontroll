var App = Ember.Application.create({  
	rootElement: $('#app'),
	  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});


App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'http://130.241.16.49:3009'
});



App.Router.map(function() {
  // put your routes here
   	this.resource("fjarrinposts", { path: "/fjarrinposts"}, function() {
	
   	});
   	this.route("fjarrinpost", { path: "/fjarrinpost/:id"});
   	this.route("fjarrut");
});


App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		App.currentUser = '6';
		App.defaultLocation = '1',
		App.defaultStatus = '1',
		App.locations = this.store.find('location');
		App.statuses = this.store.find('status');
		App.users = this.store.find("user");
	}	
});

App.FjarrinpostsController = Ember.Controller.extend({

	filter : {
		currentLocation: App.defaultLocation,
		mediaType: [],
		user: null,
		status: App.defaultStatus
	},
	



	folder : [],

	filter1: {
		active : false, 
		name: "Lån",
		id: 1
	},
	filter2: {
	  locations: null,
	  currentLocation: {
	  	id: App.defaultLocation
	  }
	},

	filter3: {
		active: false,
		name: "Kopia",
		id:2
	},

	filter4: {
		statuses: null,
		currentStatus: {
			id: App.defaultStatus
		}
	},



	init: function() {
		this.folder.pushObject(Ember.Object.create({id: 1, name: 'Alla ordrar' , active: true, user: null}));
		this.folder.pushObject(Ember.Object.create({id: 2, name: 'Mina ordrar', active: false, user: App.currentUser}));
		this.set("filter.currentLocation", App.defaultLocation);
		this.set("filter2.currentLocation.id", App.defaultLocation);
		this.set("filter4.currentStatus.id", App.defaultStatus);
		this.set("filter2.locations", App.locations);
		this.set("filter4.statuses", App.statuses);
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
		if (this.filter4.currentStatus.id) {
			this.set("filter.status", this.filter4.currentStatus.id);
		}


		this.transitionToRoute("index");
		console.log("currentLocation: " + this.filter.currentLocation + " mediatypes: " + this.filter.mediaType + " user: " + this.filter.user + "status: " + this.filter4.currentStatus.id);
	}.observes('folder.@each.active','filter1.active', 'filter2.currentLocation.id', 'filter3.active', 'filter4.currentStatus.id'),
	

	actions: {
		switchOwner: function() {
			alert("switchOwner");
		},

		removeOwner: function() {
			alert("removeOwner")
		},

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

		setFolder: function(id) {
			this.folder.forEach(function(item, index) {
				item.set("active",false)
			});

			var clickedFolder = this.folder.find(function(item, index) {
				if (item.id === id) {
					return item;
				}
			});
			this.filter.user = clickedFolder.get("user");
			clickedFolder.set("active", true);


		},

	}
});


App.FjarrinpostController = Ember.ObjectController.extend({
	locations: {},
	isEditingOrder: false,
	isEditingGlobalOrder: false,
	init: function() {
		this.locations = App.locations;
		this.set("isEditingOrder", false);
	},

	locationChanged: function() {
		this.get("model").save();
	}.observes('model.locationId'),

	actions: {
		enterGlobalEditMode: function() {
			this.set("isEditingGlobalOrder", true);
		},
		resetGlobalMetaData: function() {
			this.get("model").rollback();
			this.set("isEditingGlobalOrder", false);
		},
		saveGlobalOrderMetaData: function() {
			this.get("model").save();
			this.set("isEditingGlobalOrder",false);
		},
		enterEditMode: function() {
			this.set("isEditingOrder", true);
		},

		saveOrder: function() {
			this.get("model").save(); /// check promise from server... then continue.. 
			this.set("isEditingOrder", false);
		},
		resetOrder: function() {
			this.get("model").rollback();
			this.set("isEditingOrder", false);
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
	},
	afterModel: function(model) {
		console.log(model);
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


