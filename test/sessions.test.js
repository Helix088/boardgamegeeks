const request = require('supertest');
const app = require('../server.js');

describe('Test the sessions route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/sessions');
    expect(response.status).toBe(200);
  });
});