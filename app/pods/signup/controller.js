import Ember from 'ember';

export default Ember.Controller.extend({
  isSubmitted: false,
  actions: {
    submitForm() {
      this.set('isSubmitted', true);
      Ember.$.ajax({
        type: "POST",
        url: (function() {
          var url = "";
          url += window.location.protocol + "//" + window.location.hostname
          if (window.location.port) {
            url += ":" + window.location.port;
          }
          url +=  "/api/v2/membership-requests";
          return url;
        })(),
        data: {
          "data": {
            "type": "membershipRequest",
            "attributes": {
              "name": this.get("name"),
              "euid": this.get("euid"),
              "email": this.get("email")
            }
          }
        },
        success: function(data) {
          console.log(data);
        }

      });
    }
  }

});
