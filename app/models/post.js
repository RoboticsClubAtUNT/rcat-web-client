import DS from 'ember-data';

export default DS.Model.extend({
  "title": DS.attr('string'),
  "body": DS.attr('string'),
  "kind": DS.attr('string'),
  "created": DS.attr('date'),
  "updated": DS.attr('date'),
  "tags": DS.attr('string'),
  "isPrivate": DS.attr('boolean'),
  "isPublished": DS.attr('boolean'),
  "first": DS.attr('string'),
  "next": DS.attr('string'),
  "self": DS.attr('string'),
  "prev": DS.attr('string'),
  "last": DS.attr('string'),
  "related": DS.attr('string')
});
