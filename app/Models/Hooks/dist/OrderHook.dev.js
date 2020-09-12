'use strict';

var OrderHook = exports = module.exports = {};

OrderHook.method = function _callee(model) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(model.items().getSum('subtotal'));

        case 2:
          model.$sideLoaded.subtotal = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(model.items().getSum('quantity'));

        case 5:
          model.$sideLoaded.qty_items = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(model.discount().getSum('discount'));

        case 8:
          model.$sideLoaded.discount = _context.sent;
          model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

OrderHook.updateCollectionValues = function (async) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var model = _step.value;
      model = aa;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};