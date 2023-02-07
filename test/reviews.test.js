const request = require('supertest');
const app = require('../server.js');

describe('Test the reviews route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/reviews');
    expect(response.status).toBe(200);
  });
});