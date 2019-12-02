const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const graphqlHTTP = require('express-graphql');
const schema = require('./data/schema').schema;

const MONGO_URL = 'mongodb://localhost:27017';
const dbName = 'inventory';

const setupGraphQL = (app) => 
MongoClient.connect(MONGO_URL, (err, client) => {
  assert.equal(null, err);
  const db = client.db(dbName);
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    context: { db },
    graphiql: true
  }));
});

module.exports = setupGraphQL;