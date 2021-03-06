'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up() {
    this.create('order_items', (table) => {
      // alter table
      table.increments()
      table.integer('product_id').unsigned()
      table.integer('quantity').unsigned()
      table.decimal('subtotal', 12, 2)
      table.integer('order_id').unsigned()

      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
      table.foreign('order_id').references('id').inTable('orders').onDelete('cascade')

    })
  }

  down() {
    this.table('order_items', (table) => {
      // reverse alternations
    })
  }
}

module.exports = OrderItemSchema
