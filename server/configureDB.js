const { MongoClient } = require('mongodb');
const assert = require('assert');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./data/schema.graphql');
const { dbName, MONGO_URL } = require('./config');

const setupGraphQL = app =>
  MongoClient.connect(
    MONGO_URL,
    { useUnifiedTopology: true },
    (err, client) => {
      assert.equal(null, err);
      const db = client.db(dbName);
      app.use(
        '/graphql',
        graphqlHTTP({
          schema,
          context: { db },
          graphiql: true,
        }),
      );
    },
  );

module.exports = setupGraphQL;
