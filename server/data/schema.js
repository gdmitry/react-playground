/* eslint-disable no-underscore-dangle */

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType,
} = require('graphql');

const SpecialtyType = new GraphQLEnumType({
  name: 'Specialty',
  values: {
    Water: { value: 0 },
    Gym: { value: 1 },
    Boxing: { value: 2 },
    Spa: { value: 3 },
    Fight: { value: 4 },
    Bath: { value: 5 },
  },
});

const GymType = new GraphQLObjectType({
  name: 'Gym',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => obj._id,
    },
    name: { type: GraphQLString },
  },
});

const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => obj._id,
    },
    name: { type: GraphQLString },
    specialty: { type: SpecialtyType },
    gymId: { type: GraphQLID },
    gym: {
      type: GymType,
      resolve: (_, args, { db }) =>
        db.collection('gyms').findOne({ id: _.gymId }),
    },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    allTrainers: {
      type: new GraphQLList(TrainerType),
      resolve: (_, args, { db }) =>
        db
          .collection('trainers')
          .find()
          .toArray(),
    },
    allGyms: {
      type: new GraphQLList(GymType),
      resolve: (_, args, { db }) =>
        db
          .collection('gyms')
          .find()
          .toArray(),
    },
  },
});

module.exports.schema = new GraphQLSchema({
  query: RootQueryType,
});
