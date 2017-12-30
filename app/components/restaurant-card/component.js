import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  elementId: 'restaurant-card',
  title: computed('restaurantName', function () {
    let restaurantName = this.get('restaurantName');
    return `You last visited ${restaurantName}`;
  }),
  restaurantName: computed('restaurants', function() {
    let restaurant = this.get('restaurants').objectAt(0);
    return restaurant.get('name');
  }),
  actions: {
  }
});
