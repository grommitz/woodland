import Ember from 'ember';

export default Ember.Service.extend({

  getOrders() {
    return [ {id:1, name:"Martin"}, {id:2, name:"Carl"} ];
  },
  getOrderById(id) {
    const orders = this.getOrders();
    return orders.findBy('id', id);
  }

});
