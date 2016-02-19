import Ember from 'ember';

export default Ember.Component.extend({
  content: "",
  readTime: Ember.computed('content', function() {
    var content = this.get('content');
    var contentArray = content.split(" ");
    var result = contentArray.length  / 60;
    return parseFloat(result.toString()).toFixed(1);
  })
});
