import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  elementId: 'orders-liked-card',
  store: service(),

  likedOrders: computed.filterBy('restaurants.orders', 'liked', true),
  actions: {
    addFood(value) {
      let restaurant = this.get('restaurants');
      let foodOrder = this.get('store').createRecord('order', { name: value, liked: true });
      restaurant.get('orders').then((orders) => {
        orders.addObject(foodOrder);
        restaurant.save().then(() => {
          foodOrder.save();
          this.set('name', null);
        })
      })
    },

    deleteFood(order) {
      order.destroyRecord();
    }
  }
});
