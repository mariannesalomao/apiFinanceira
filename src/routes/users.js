
module.exports = (app) => {
  const findAll = (req, res) => {

    // Sem db:
    // const users = [
    //   { name: 'Marianne', email: 'marianne@mail.com' }
    // ]
    // res.status(200).json(users)

    // Com db:
    // app.db('users').select().then(result => res.status(200).json(result))

    // app.services.user.findAll()
  }

// atual
  const create = async (req, res) => {
    // Sem db
    // res.status(201).json(req.body)

    // Com db
    const result = await app.db('users').insert(req.body, '*') // Retorne tudo
    res.status(201).json(result[0])

  }

  return { findAll, create }
}
