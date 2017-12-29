import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      // Just show the most recent place visited on the home page
      user: this.get('store').findRecord('user', 1),
      orders: this.get('store').query('order', {
        limitToLast: 1
      }),
      restaurants: this.get('store').query('restaurant', {
        limitToLast: 1
      })
    })
  }
});
