import Ember from 'ember';

export default Ember.Component.extend({
  menuIsVisible: false,
  actions: {
    toggleMenu: function() {
      this.toggleProperty("menuIsVisible");
    }
  },
  didInsertElement() {
    var windowWidth = this.$(window).width();
    // switch to menu mode
    if (windowWidth <= 650) {
      this.set('windowIsSmall', true);
    } else {
      this.set('windowIsSmall', false);
    }
  }

});
