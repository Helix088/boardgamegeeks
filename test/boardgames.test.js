const request = require('supertest');
const app = require('../server.js');

describe('Test the boardgames route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/boardgames');
    expect(response.status).toBe(200);
  });
});