import Ember from 'ember';

export default Ember.Component.extend({
	post: null,
	actions: {
		upvote: function(){
			var post = this.get('post');
			console.log(post.get('upvotes'))
			post.set('upvotes', post.get('upvotes')+1);
			console.log(post.get('upvotes'))
		}
	}
});
