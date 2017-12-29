import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    // return this.get('store').findRecord('user', 1);
    return RSVP.hash({
      user: this.get('store').findRecord('user', 1),
      orders: this.get('store').findAll('order'),
      restaurants: this.get('store').findAll('restaurant')
    })
  }
});
