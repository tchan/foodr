import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findRecord('user', 1);
  },
  actions: {
    didTransition() {
      this.controller.set('showSide', false);
    }
  }
});
