const request = require('supertest')
const app = require('../app')

test('teste soma', async () => {
    const res = await request(app).get('/soma/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 3})
})

test('teste subtração', async () => {
    const res = await request(app).get('/subtracao/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 1})
})

test('teste multiplicação', async () => {
    const res = await request(app).get('/multiplicacao/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 2})
})

test('teste divisão', async () => {
    const res = await request(app).get('/divisao/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 2})
})


module.exports = { app }