import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  liked: DS.attr('boolean'),
  wantsToTry: DS.attr('boolean'),
  restaurant: DS.belongsTo('restaurant')
});
