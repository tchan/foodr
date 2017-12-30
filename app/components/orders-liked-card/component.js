import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  elementId: 'orders-liked-card',
  store: service(),

  actions: {
    addFood(value) {
      let restaurant = this.get('restaurants');
      let foodOrder = this.get('store').createRecord('order', { name: value });
      restaurant.get('orders').then((orders) => {
        orders.addObject(foodOrder);
        restaurant.save().then(() => {
          foodOrder.save();
        })
      })
    },

    deleteFood(order) {
      order.destroyRecord();
    }
  }
});
