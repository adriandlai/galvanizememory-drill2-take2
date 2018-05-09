exports.up = function(knex, Promise) {
    return knex.schema.createTable('drinks_tb', (table) => {
      table.increments()
      table.text('name')
      table.text('roaster')
      table.integer('aroma')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('drinks_tb')
  };