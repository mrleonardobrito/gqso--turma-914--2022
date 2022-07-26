const request = require('supertest')
const app = require('../app')

test('teste divisão', async () => {
    const res = await request(app).get('/divisao/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 2})
})

test('teste soma', async () => {
    const res = await request(app).get('/soma/2/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({resultado: 3})
})

module.exports = { app }