
module.exports = (app) => {
  const findAll = (req, res) => {

    // Sem db:
    // const users = [
    //   { name: 'Marianne', email: 'marianne@mail.com' }
    // ]
    // res.status(200).json(users)
    // Com db:
    // app.db('users').select().then(result => res.status(200).json(result))

    // Refatorando e ao invés de usar o db acima, agora usando services
    app.services.user.findAll().then(result => res.status(200).json(result))
  }

  const create = async (req, res) => {
    // Sem db
    // res.status(201).json(req.body)
    // Com db
    // const result = await app.db('users').insert(req.body, '*') // Retorne tudo
    // res.status(201).json(result[0])

    // Usando services
    const result = await app.services.user.save(req.body)

    if (result.error) return res.status(400).json(result)
    res.status(201).json(result[0])

  }

  return { findAll, create }
}
