import Ember from 'ember';

export default Ember.Controller.extend({
	isAuthenticated: false,
	actions: {
		login: function(){
			this.set('isAuthenticated', true);
		}
	}
});
