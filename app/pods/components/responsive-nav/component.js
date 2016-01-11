import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var windowWidth = this.$(window).width();
    console.log("inserted the res-nav component");
  }
});
