import Component from '@ember/component';

export default Component.extend({
  classNames: ['base-card'],
  show: true,
  actions: {
    toggleAccordion() {
      this.toggleProperty('show');
    }
  }
});
