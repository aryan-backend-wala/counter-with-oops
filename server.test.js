const request = require('supertest');
const { app, startServer, stopServer } = require('./index');

describe('Counter API', () => {
  let server;

  beforeAll(() => {
    server = startServer(); // Start the server before tests
  });

  afterAll(() => {
    stopServer(); // Ensure the server is stopped after tests
  });

  test('GET /increment should increase value', async () => {
    const res = await request(app).get('/increment');
    expect(res.body.value).toBe(1);
  });

  test('GET /decrement should decrease value', async () => {
    const res = await request(app).get('/decrement');
    expect(res.body.value).toBe(0);
  });

  test('GET /reset should reset value to 0', async () => {
    await request(app).get('/increment');
    const res = await request(app).get('/reset');
    expect(res.body.value).toBe(0);
  });

  test('GET /value should return current value', async () => {
    const res = await request(app).get('/value');
    expect(res.body.value).toBe(0);
  });
});
