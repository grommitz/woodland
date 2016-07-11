import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return [ {id:1, name:"Martin"}, {id:2, name:"Carl"} ].findBy('id', params.order_id);
  }
});
