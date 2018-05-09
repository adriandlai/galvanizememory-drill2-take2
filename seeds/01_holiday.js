const drinks = require('../holidaydrinks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "drinks_tb"; ALTER SEQUENCE drinks_tb_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('drinks_tb').insert(drinks)
    });
};
