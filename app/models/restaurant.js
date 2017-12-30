import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  orders: DS.hasMany('order')
});
