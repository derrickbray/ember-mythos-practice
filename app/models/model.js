import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('email'),
  userName: DS.attr('string'),
  password: DS.attr('password'),
  isApproved: DS.attr('boolean'),
  isMod: DS.attr('boolean'),
  isAdmin: DS.attr('boolean'),
  isPublished: DS.attr('boolean')
});
