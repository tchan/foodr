import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  elementId: 'restaurant-card',
  title: computed('restaurantName', function () {
    let restaurantName = this.get('restaurantName');
    return `You last visited ${restaurantName}`;
  }),
  restaurantName: computed.readOnly('restaurants.name'),
  actions: {
  }
});
