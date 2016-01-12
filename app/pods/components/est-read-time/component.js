import Ember from 'ember';

export default Ember.Component.extend({
  content: "",
  readTime: Ember.computed('content', function() {
    var content = this.get('content');
    var contentArray = content.split(" ");
    return Math.round(contentArray.length / 200);
  })
});
