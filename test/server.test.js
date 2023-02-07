const request = require('supertest');
// const express = require('express');
// const app = express();
// const server = require('../server.js');
// server(app);


const app = require('../server.js');


describe('Test the root path', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
