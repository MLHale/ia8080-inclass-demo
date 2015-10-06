import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('forumpost');
	},
	setupcontroller: function(controller, model){
		controller.set('model', model);
		controller.set('posts', model);
	}
});
