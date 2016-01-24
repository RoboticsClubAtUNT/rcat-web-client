import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this.$('.hero-post-component').css({
      "background-image": "url(" + this.get('backgroundUrl') + ")"
    });
  }
});
