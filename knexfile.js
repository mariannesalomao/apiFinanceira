module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'mariannesalomao',
      password: 'mari0828',
      database: 'financas'
    },
    migrations: {
      directory: 'src/migrations'
    }
  }
}
