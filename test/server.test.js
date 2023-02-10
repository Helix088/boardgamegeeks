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

const oidc = {
  user: {
    nickname: "swordgeo1094",
    email: "swordgeo1094@yahoo.com"
  }
};
  
const secretKey = process.env.SECRET;
const token = jwt.sign(userInfo, secretKey);


describe('Test the reviews route', () => {
  // get
  // it('should return 200 status code', async () => {
  //   const response = await request(app).get('/reviews');
  //   expect(response.status).toBe(200);
  // });

  //post
  it('should return 201 status code for POST', async () => {

    const newReview = {
      boardgame: "5",
      // username: "geo.c.blanchard",
      rating: '2.5',
      reviewText: "This game was awful!",
    };
    //req.body
    

    const response = await request(app)
      .post("/reviews")
      .set("Authorization", `Bearer ${token}`)
      // .set('Cookie', [`user=${JSON.stringify(userInfo)}`])
      // .set("oidc", { user: { email: "test@email.com", nickname: "testusername" } })

      .send(newReview);
    // console.log(response);
    expect(response.status).toBe(201);
  });
});

// console.log(token);


// describe('Test the root path', () => {
//   it('should return 200 status code', async () => {
//     const response = await request(app).get('/');
//     expect(response.status).toBe(200);
//   });
// });

// describe('Test the boardgames route', () => {
//   // get
//   // it('should return 200 status code', async () => {
//   //   const response = await request(app).get('/boardgames');
//   //   expect(response.status).toBe(200);
//   // });

//   // post
//   it('should return 201 status code for POST', async () => {
//     const newgame = {
//       name: 'Monopoly',
//       description: 'hateful',
//       numberOfPlayers: '2-6',
//       playingTime: '90',
//       category1: 'boring'
//     };

//     const response = await request(app)
//     // .post('/boardgames', {headers: {Authorization: `Bearer ${token}`}})
//     .post('/boardgames')

//     .set('Authorization', `Bearer ${token}`)

//     .send(newgame);
//     // console.log(response)
//     expect(response.status).toBe(201);
//   });


// });

// describe('Test the delete boardgames endpoint', () => {
//   // delete
//   it('should return 200 status code for DELETE', async() => {
//     const id = "63e566077ece47f70bb45e52";

//     const response = await request(app)
//     .delete(`/boardgames/${id}`)
//     .set('Authorization', `Bearer ${token}`);
    
//     // console.log(`Delete response: ${response}`);
    
//     expect(response.status).toBe(200);
//   });
// });

// describe('Test the patch boardgames endpoint', () => {
//   // patch
//   it('should return 204 status code for PATCH', async() => {
//     const id = "63e564ee9a880c099bb405da";

//     const newcontent = {
//       name: 'Splendor'
//     };

//     const response = await request(app)
//     .patch(`/boardgames/${id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .send(newcontent);
    
//     // console.log(`Delete response: ${response}`);
    
//     expect(response.status).toBe(204);
//   });
// });




// describe('Test the sessions route', () => {
//   it('should return 200 status code', async () => {
//     const response = await request(app).get('/sessions');
//     expect(response.status).toBe(200);
//   });
// });

// describe('Test the users route', () => {
//   it('should return 200 status code', async () => {
//     const response = await request(app).get('/users');
//     expect(response.status).toBe(200);
//   });
// });