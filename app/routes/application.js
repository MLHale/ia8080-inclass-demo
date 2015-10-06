import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition){
		var auth = this.controllerFor('auth');
		if(!auth.get('isAuthenticated')){
			if(transition.targetName != 'auth'){
				transition.abort();
				this.transitionTo('auth');
			}
		}
	}
});
