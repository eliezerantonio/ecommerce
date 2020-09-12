'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      // alter table
      table.increments()
      table.decimal('total', 12, 2).defaultTo(0.0)
      table.integer('user_id').unsigned()
      table.enu('status', ['pending', 'cancelled', 'paid', 'finished'])

      table.timestamps()
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })


  }

  down() {
    this.table('orders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = OrderSchema
