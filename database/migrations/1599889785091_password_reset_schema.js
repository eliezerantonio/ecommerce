'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordResetSchema extends Schema {
  up() {
    this.table('password_resets', (table) => {
      // alter table
      table.increments()
      table.string('email').noNullable()
      table.string('token').noNullable().unique()

      table.dateTime('expires_at')
      table.timestamps()

      table.foreign('email').references('id').inTable('users').onDelete('cascade')
    })
  }

  down() {
    this.table('password_resets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PasswordResetSchema
