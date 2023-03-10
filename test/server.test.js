const request = require('supertest');
const app = require('../server.js');
const jwt = require('jsonwebtoken');

const userInfo = {
  nickname: "swordgeo1094",
  name: "swordgeo1094@yahoo.com",
  picture: "https://s.gravatar.com/avatar/430b47bc7b67ad69159d8fd3e818c009?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsw.png",
  updated_at: "2023-02-08T19:26:11.850Z",
  email: "swordgeo1094@yahoo.com",
  email_verified: false,
  sub: "auth0|63cfee1d 293a9892122f6744",
  sid: "0lZ4zw516Kt-bT4oWOiKzQXwtpS3tYBV"
};
  
const secretKey = process.env.SECRET;
const token = jwt.sign(userInfo, secretKey);


// console.log(token);


describe('Test the root path', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});


// BOARDGAMES
describe('Test the boardgames route', () => {
  // get
  it('should return 200 status code for GET', async () => {
    const response = await request(app).get('/boardgames');
    expect(response.status).toBe(200);
  });

  // get one
  it('should return 200 status code for GET by Id', async () => {
    const id = "63dc3f3314bc97827b68f52e";
    
    const response = await request(app).get(`/boardgames/${id}`);
    expect(response.status).toBe(200);
  });

  // post
  it('should return 201 status code for POST', async () => {
    const newgame = {
      name: 'Monopoly',
      description: 'hateful',
      numberOfPlayers: '2-6',
      playingTime: '90',
      category1: 'boring'
    };

    const response = await request(app)
    // .post('/boardgames', {headers: {Authorization: `Bearer ${token}`}})
    .post('/boardgames')
    .set('Authorization', `Bearer ${token}`)
    .send(newgame);
    // console.log(response)
    expect(response.status).toBe(201);
  });

  // delete
  it('should return 200 status code for DELETE', async() => {
    const id = "63e7ed72f8c922a9702626de";

    const response = await request(app)
    .delete(`/boardgames/${id}`)
    .set('Authorization', `Bearer ${token}`);    
    // console.log(`Delete response: ${response}`);    
    expect(response.status).toBe(200);
  });

  // patch
  it('should return 204 status code for PATCH', async() => {
    const id = "63dee76bdd89d8f7b8e3a56d";

    const newcontent = {
      name: 'Coup'
    };

    const response = await request(app)
    .patch(`/boardgames/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newcontent);
    
    expect(response.status).toBe(204);
  });
});


// SESSIONS
describe('Test the sessions route', () => {
  // get
  it('should return 200 status code for GET', async () => {
    const response = await request(app).get('/sessions');
    expect(response.status).toBe(200);
  });  

  // get one
  it('should return 200 status code for GET by Id', async () => {
    const id = "63deede362db381eb31750e5";
    
    const response = await request(app).get(`/sessions/${id}`);
    expect(response.status).toBe(200);
  });

  // delete
  it('should return 200 status code for DELETE', async() => {
    const id = "63e7e96da1e7ad4932598473"

    const response = await request(app)
    .delete(`/sessions/${id}`)
    .set('Authorization', `Bearer ${token}`);    
    // console.log(`Delete response: ${response}`);    
    expect(response.status).toBe(200);
  });

  // patch
  it('should return 204 status code for PATCH', async() => {
    const id = "63e3f91655f991b44d18e179";

    const newcontent = {
      victory: 'We all lost.'
    };

    const response = await request(app)
    .patch(`/sessions/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newcontent);
    
    expect(response.status).toBe(204);
  });
});

// REVIEWS
describe('Test the reviews route', () => {
  // get
  it("should return 200 status code for GET", async () => {
    const response = await request(app).get("/reviews");
    expect(response.status).toBe(200);
  });

  // get one
  it('should return 200 status code for GET by Id', async () => {
    const id = "63deecc8ebe718c158aff5a5";
    
    const response = await request(app).get(`/reviews/${id}`);
    expect(response.status).toBe(200);
  });  

  // post
  // it("should add a new review to the database", async () => {
  //   const newReview = {
  //     boardgame: "88",
  //     username: "swordgeo1094",
  //     rating: "4.5",
  //     reviewText: "This game was fun!",
  //   };
  //   const response = await request(app)
  //     .post("/reviews")
  //     .set("Authorization", `Bearer ${token}`)
  //     .send(newReview);
  //   expect(response.status).toBe(201);
  //   expect(response.body).toHaveProperty("id");
  //   expect(response.body.boardgame).toBe(newReview.boardgame);
  //   expect(response.body.username).toBe(newReview.username);
  //   expect(response.body.rating).toBe(newReview.rating);
  //   expect(response.body.reviewText).toBe(newReview.reviewText);
  // });
    // it("should add a new review to the database", async () => {
    //   const newReview = {
    //     boardgame: "88",
    //     username: "swordgeo1094",
    //     rating: "4.5",
    //     reviewText: "This game was fun!",
    //   };
    //       const response = await request(app)
    //         .post("/reviews")
    //         .set("Authorization", `${stripped}`)
    //         .send(newReview);
    //       expect(response.status).toBe(201);
    //       expect(response.body).toHaveProperty("id");
    // });

  //delete
  it("should return 200 status code for DELETE", async () => {
    const id = "63e7e952a1e7ad493259846c";

    const response = await request(app)
      .delete(`/reviews/${id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  // patch
  it("should return 204 status code for PATCH", async () => {
    const id = "63deedc162db381eb31750e0";

    const newcontent = {
      rating: "3.4",
      reviewText: "This game was terrible!"
    };

    const response = await request(app)
      .patch(`/reviews/${id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(newcontent);

    expect(response.status).toBe(204);
  });
});

// USERS
describe('Test the users route', () => {
  // get
  it('should return 200 status code for GET', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });

  // get one
  it('should return 200 status code for GET by Id', async () => {
    const id = "63deeacf5f1e5e9d92a32277";
    
    const response = await request(app).get(`/users/${id}`);
    expect(response.status).toBe(200);
  });

  // post
  it('should return 201 status code for POST', async () => {
    const newuser = {
      username: 'col04002',
      email: 'col04002@byui.edu'
    };

    const response = await request(app)
    // .post('/users', {headers: {Authorization: `Bearer ${token}`}})
    .post('/users')
    .set('Authorization', `Bearer ${token}`)
    .send(newuser);
    // console.log(response)
    expect(response.status).toBe(201);
  });

  // delete
  it('should return 200 status code for DELETE', async() => {
    const id = "63e7ed73f8c922a9702626ef";

    const response = await request(app)
    .delete(`/users/${id}`)
    .set('Authorization', `Bearer ${token}`);    
    // console.log(`Delete response: ${response}`);    
    expect(response.status).toBe(200);
  });

  // patch
  it('should return 204 status code for PATCH', async() => {
    const id = "63df257a86dcaa4bb10e131e";

    const newcontent = {
      username: 'col'
    };

    const response = await request(app)
    .patch(`/users/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newcontent);
    
    expect(response.status).toBe(204);
  });
});