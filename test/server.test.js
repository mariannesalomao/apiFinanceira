const supertest = require('supertest')
const request = supertest('http://www.google.com')

test('Deve responder na porta 3001', () => {
  // Acessando a url http://localhost:3001 e verifica se o status foi 200

  return request.get('/').then(res => expect(res.status).toBe(200))
})
