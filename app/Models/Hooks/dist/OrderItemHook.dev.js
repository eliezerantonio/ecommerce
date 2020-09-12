'use strict';

var OrderItemHook = exports = module.exports = {};
var Product = use('App/Models/Product');

OrderItemHook.method = function _callee(model) {
  var product;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.find(model.product_id));

        case 2:
          product = _context.sent;
          model.subtotal = model.quantity * product.price;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};