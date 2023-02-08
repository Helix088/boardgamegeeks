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

describe('Test the boardgames route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/boardgames');
    expect(response.status).toBe(200);
  });

});

describe('Test the reviews route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/reviews');
    expect(response.status).toBe(200);
  });
});

describe('Test the sessions route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/sessions');
    expect(response.status).toBe(200);
  });
});

describe('Test the users route', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});