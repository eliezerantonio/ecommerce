'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponOrderSchema extends Schema {
  up() {
    this.create('coupon_order', (table) => {
      // alter table
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('order_id').unsigned()
      table.decimal('discount', 12, 2).defaultTo(0.0)
      table.timestamps()

      table.foreign('coupon_id').references('id').inTable('coupons').onDelete('cascade')
      table.foreign('order_id').references('id').inTable('orders').onDelete('cascade')
    })
  }

  down() {
    this.table('coupon_order', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CouponOrderSchema
