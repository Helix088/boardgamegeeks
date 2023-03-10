# boardgamegeeks
This is a boardgame inventory API

## NOTES
George's current package list gets angry with itself; it's our choice whether we want to experiment with ripping things out, but "npm i --force" tends to do the trick

The overall skeleton is mostly happy and ready to accept the controllers and later the swagger

OAuth is currently on so we may choose to comment out the relevant sections for easy .rest usage (specifically in the routes files)


## TO DO
Add whatever we think as necessary
Remove as things get done
Add notes for things in progress but incomplete during pushes (I guess?)

### Boardgames controller

-- GetAll
-- GetOne
-- Post
-- Put/Patch
-- Delete
{
  name
  description
  No. players
  Playing time
  weight
  category1
  category2 (optional?)
  designer1
  designer2 (optional?)
}

### Reviews controller

-- GetAll
-- GetOne
-- Post
-- Put/Patch
-- Delete
{
  boardgame (by id)
  user (by username) [maybe we pull the whole thing as array for email too?]
  reviewText
}

### Sessions controller

-- GetAll
-- GetOne
-- Post
-- Put/Patch
-- Delete
{
  boardgame (by id)
  user (by username)
  players [array]
  gametime
  victory (in a PvP game, who won, if PvE, win or lose)
  notes (optional)
}

### Users controller

--Find a way to get the Userlink stuff working

  The idea here is that when we post a new session or review, I think it'd be neat if it automatically added in the username of whoever added that data (as is, which one of us was loggin in doing the editing).
  Ideally right after the OAuth checks to see if we are logged in, it compares our oidc email and tries to find that person in our users collection. If it doesn't find that person, it creates that user!
  Then it goes on its merry way doing what it wants, but we don't add manually (the same way we don't add _id manually)
{
  username (nickname field of /profiles)
  email (email field of /profiles)
}
(I think we specifically do not want passwords because after all, isn't that what OAuth is about?)


### Swagger gen

### GraphQL
(George's problem unless anyone decides to take a crack)

express-graphql working with users

need to revisit to get mutations running

need to revisit for:
--boardgames
--reviews
--sessions

need to research apollo-graphql and consider tearing out express-graphql