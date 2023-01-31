const {GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType} = require("graphql");
const User = require('./models/user')





const userType = new GraphQLObjectType({
  name: "user",
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});




const userInputType = new GraphQLInputObjectType({
  name: "userInput",
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});



const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {

    // get all
    users: {
      type: new GraphQLList(userType),
      resolve: async () => {
        try {
          return await User.find();
          //200 is generic success
          // res.status(200).json(users);
        } catch (err) {
            //500 means server error, not user error
          // res.status(500).json({message: err.message});
          throw new Error(err.message);
        }
      },
    },

    // get one
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          return await User.findById(args.id);
          // res.status(200).json(user);
        } catch (err) {
          //500 means server error, not user error
          // res.status(500).json({message: err.message});
          throw new Error(err.message);
        }
      }
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: userType,
      args: {
        user: {
          type: new GraphQLNonNull(userInputType),
        },
      },
      resolve: async (_, args) => {
        try {
          return await User.create(args.user)

        } catch (err) {
          //500 means server error, not user error
          // res.status(500).json({message: err.message});
          throw new Error(err.message);
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery, 
  mutation: rootMutation,
});