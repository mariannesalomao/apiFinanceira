module.exports = app => {

  /**
   *
   * @param filter
   * @returns { Knex.QueryBuilder<TRecord, TResult> }
   *
   * Sacada: Posso reaproveitar esse findAll
   * Colocando um parâmetro de filter e por default ele é vazio
   * Se eu passar o filter, ele é um find específico.
   * Se eu não passar nenhum filter, ele é um findAll
   */
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select()
  }

  const save = async (user) => {
    if (!user.name) return { error: 'Name is required' }
    if (!user.mail) return { error: 'Email is required' }
    if (!user.passwd) return { error: 'Password is required' }

    const userDb = await findAll({ mail: user.mail })

    if (userDb && userDb.length > 0) return { error: 'Already exists user with this email' }

    return app.db('users').insert(user, '*')
  }

  return { findAll, save }
}
