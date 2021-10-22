test('Devo conhecer as assertivas do Jest', () => {
  let number = null
  expect(number).toBeNull()

  number = 10
  expect(number).not.toBeNull()
  expect(number).toBe(10)
  expect(number).toEqual(10)
  expect(number).toBeGreaterThanOrEqual(10)
  expect(number).toBeLessThanOrEqual(10)
})

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Marianne', mail: 'marianne@mail.com' }
  expect(obj).toHaveProperty('name')
  expect(obj).toHaveProperty('name', 'Marianne')
  expect(obj.name).toBe('Marianne')

  // const obj2 = { name: 'Marianne', mail: 'marianne@mail.com' }
  // expect(obj).toBe(obj2)

})
