import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    var windowHeight = this.$(window).height();
    // switch to menu mode
    this.$("#constitution-iframe").height(windowHeight - 100);
  }
});
