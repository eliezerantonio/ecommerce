'use strict';
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = use('Model');
/** @type {import('@adonisjs/framework/src/Hash')} */

var Hash = use('Hash');

var User =
/*#__PURE__*/
function (_Model) {
  _inherits(User, _Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
  }

  _createClass(User, [{
    key: "tokens",

    /**
     * A relationship on tokens is required for auth to
     * work. Since features like `refreshTokens` or
     * `rememberToken` will be saved inside the
     * tokens table.
     *
     * @method tokens
     *
     * @return {Object}
     */
    value: function tokens() {
      return this.hasMany('App/Models/Token');
    }
  }, {
    key: "image",
    value: function image() {
      return this.belongsTo('app/Models/Image');
    }
  }, {
    key: "coupons",
    value: function coupons() {
      return this.belongsToMany('app/Models/Coupon');
    }
  }], [{
    key: "boot",
    value: function boot() {
      _get(_getPrototypeOf(User), "boot", this).call(this);
      /**
       * A hook to hash the user password before saving
       * it to the database.
       */


      this.addHook('beforeSave', function _callee(userInstance) {
        return regeneratorRuntime.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!userInstance.dirty.password) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return regeneratorRuntime.awrap(Hash.make(userInstance.password));

              case 3:
                userInstance.password = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        });
      });
    }
    /**
     * Oculta os campos definios d=no retorno, das queries no DB
     * * */

  }, {
    key: "hidden",
    get: function get() {
      return ['password'];
    }
  }, {
    key: "traits",
    get: function get() {
      return ['@provider:Adonis/Acl/HasRole', '@provider:Adonis/Acl/HasPermission'];
    }
  }]);

  return User;
}(Model);

module.exports = User;