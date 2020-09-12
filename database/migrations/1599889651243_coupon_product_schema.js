'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponProductSchema extends Schema {
  up () {
    this.table('coupon_product', (table) => {
      // alter table
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('product_id').unsigned()

      table.timestamps()

      table.foreign('coupon_id')
        .references('id')
        .inTable('coupons')
        .onDelete('cascade')

      table.foreign('user_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')

    })
  }

  down () {
    this.table('coupon_product', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CouponProductSchema