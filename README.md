# boardgamegeeks
This is a boardgame inventory API

## NOTES
George's current package list gets angry with itself; it's our choice whether we want to experiment with ripping things out, but "npm i --force" tends to do the trick"

The overall skeleton is mostly happy and ready to accept the controllers and later the swagger

OAuth is currently on so we may choose to comment out the relevant sections for easy .rest usage (specifically in the routes files)


## TO DO
Add whatever we think as necessary
Remove as things get done
Add notes for things in progress but incomplete during pushes (I guess?)

- Boardgames controller

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

- Reviews controller

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

- Sessions controller

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

- Users controller

-- GetAll
-- GetOne
-- Post
-- Put/Patch
-- Delete
{
  username (nickname field of /profiles)
  email (email field of /profiles)
}
(I think we specifically do not want passwords because after all, isn't that what OAuth is about?)


-Swagger gen

-GraphQL
(George's problem unless anyone decides to take a crack)