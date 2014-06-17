App.Task = DS.Model.extend({
	message: 	DS.attr('string'),
	userId: 	DS.belongsTo("user")
});
