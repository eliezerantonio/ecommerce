'use strict';
/** @type {import('@adonisjs/lucid/src/Schema')} */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Schema = use('Schema');

var PasswordResetSchema =
/*#__PURE__*/
function (_Schema) {
  _inherits(PasswordResetSchema, _Schema);

  function PasswordResetSchema() {
    _classCallCheck(this, PasswordResetSchema);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordResetSchema).apply(this, arguments));
  }

  _createClass(PasswordResetSchema, [{
    key: "up",
    value: function up() {
      this.create('password_resets', function (table) {
        // alter table
        table.increments();
        table.string('email').notNullable();
        table.string('token').notNullable().unique();
        table.dateTime('expires_at');
        table.timestamps();
        table.foreign('email').references('email').inTable('users').onDelete('cascade');
      });
    }
  }, {
    key: "down",
    value: function down() {
      this.table('password_resets', function (table) {// reverse alternations
      });
    }
  }]);

  return PasswordResetSchema;
}(Schema);

module.exports = PasswordResetSchema;