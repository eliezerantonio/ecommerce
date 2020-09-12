'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
  up() {
    this.table('coupon_users', (table) => {
      // alter table
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('user_id').unsigned()

      table.timestamps()

      table.foreign('coupon_id')
        .references('id')
        .inTable('coupons')
        .onDelete('cascade')

      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')

      


    })
  }

  down() {
    this.table('coupon_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CouponUserSchema
