import Ember from 'ember';

export default Ember.Controller.extend({
  isSubmitted: false,
  actions: {
    submitForm() {
      this.set('isSubmitted', true);
      this.$.ajax({
        url: ""
      })
    }
  }

});
