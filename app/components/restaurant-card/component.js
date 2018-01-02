import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  elementId: 'restaurant-card',
  store: service(),
  title: computed('restaurantName', function () {
    let restaurantName = this.get('restaurantName');
    return `You last visited ${restaurantName}`;
  }),
  restaurantName: computed.readOnly('restaurants.name'),
  showNewForm: false,
  newRestaurantName: null,
  newRestaurantAddress: null,
  addRestaurant: task(function *() {
    let restaurant = this.get('store').createRecord('restaurant', {
      name: this.get('newRestaurantName'),
      address: this.get('newRestaurantAddress')
    });
    yield restaurant.save();
  }).drop(),
  actions: {
    showNewForm() {
      this.set('showNewForm', true);
    }
  }
});
