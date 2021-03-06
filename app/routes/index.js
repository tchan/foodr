import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      // Just show the most recent place visited on the home page
      restaurants: this.get('store').query('restaurant', {
        limitToLast: 1
      }).then(function(data) {
        return data.get('firstObject');
      })
    })
  },
  actions: {
  }
});
