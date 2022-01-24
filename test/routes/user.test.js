const request = require('supertest')
const app = require('../../src/app')

const mail = `${Date.now()}@mail.com`

test('Deve listar todos os usuários', () => {
  return request(app).get('/users').then(res => {
    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0) // Ao menos um registro deve retornar
  })
})

test('Deve inserir usuário com sucesso', () => {

  return request(app).post('/users')
    .send({ name: 'Marianne', mail, passwd: '12345'})
    .then(res => {
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Marianne')
  })
})

test('Não deve inserir usuário sem nome', () => {
  return request(app).post('/users')
    .send({ mail: 'marianneemail@email.com', passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Name is required')
    })
})

test('Não deve inserir usuário sem email', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'Olinda Silva', passwd: '123456' })
  expect(result.status).toBe(400)
  expect(result.body.error).toBe('Email is required')
})

test('Não deve inserir usuário sem senha', (done) => {
  request(app).post('/users').send({ name: 'Cruzalina', mail: 'fdp@email.com' })
    .then((res) => {
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Password is required')
      done()
    })
})

test('Não deve inserir usuário com email existente', () => {
  request(app).post('/users')
    .send({ name: 'Cruz', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Already exists user with this email')
    })
})
