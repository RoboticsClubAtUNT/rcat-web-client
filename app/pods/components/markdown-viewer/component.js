import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    var self = this;
    this.$('img').wrap('<a href="' + self.$('img').attr('src') + '"></a>');
    this.$('a').attr('target', '_blank');
  }
});
