const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const QuoteType = new GraphQLObjectType({
  name: 'Quote',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => obj._id
    },
    text: { type: GraphQLString },
    author: { type: GraphQLString }
  }
});

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    allQuotes: {
      type: new GraphQLList(QuoteType),
      resolve: (_, args, { db }) =>
        db.collection('quotes').find().toArray()
    }
  }
});

module.exports.schema = new GraphQLSchema({
  query: queryType
});
