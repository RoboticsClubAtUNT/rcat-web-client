import Ember from 'ember';

export default Ember.Route.extend({
  didRender() {
    var windowWidth = Ember.$(window).width();
    // switch to menu mode
    if (windowWidth <= 650) {
      this.set('windowIsSmall', true);
    } else {
      this.set('windowIsSmall', false);
    }
    console.log(this.get('windowIsSmall'));
  }
});
