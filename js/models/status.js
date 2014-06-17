App.Status = DS.Model.extend({
	nameSv: 	DS.attr('string'),
	nameEn: 	DS.attr('string'),
	orders:		DS.hasMany("order")
});
