import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  elementId: 'orders-disliked-card',
  store: service(),

  dislikedOrders: computed.filterBy('restaurants.orders', 'liked', false),
  addFood: task(function *(value) {
    let restaurant = this.get('restaurants');
    let foodOrder = this.get('store').createRecord('order', { name: value, liked: false });
    let orders = yield restaurant.get('orders');
    orders.addObject(foodOrder);
    yield restaurant.save();
    yield foodOrder.save();
    this.set('name', null);
  }).drop(),

  actions: {
    deleteFood(order) {
      order.destroyRecord();
    }
  }
});
