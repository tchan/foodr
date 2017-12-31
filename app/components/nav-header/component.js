import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  elementId: 'nav-header',
  router: service(),
  actions: {
    toggleSettingsIcon() {
      this.toggleProperty('showSide');
    }
  }
});
