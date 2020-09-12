'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up() {
    this.table('categories', (table) => {
      // alter table
      table.increments()
      table.string('title', 100)
      table.string('description', 255)
      table.integer('image_id').unsigned()
      table.timestamps()

      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
    })
  }

  down() {
    this.table('categories', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CategorySchema
