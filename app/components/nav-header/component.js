import Component from '@ember/component';

export default Component.extend({
  elementId: 'nav-header',

  actions: {
    toggleSettingsIcon() {
      this.toggleProperty('change');
    }
  }
});
