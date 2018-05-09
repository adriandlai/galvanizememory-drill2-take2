module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/drill2db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
