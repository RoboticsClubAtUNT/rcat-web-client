import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: "http://192.168.1.16:8080",
  namespace: "api/v2"
});
