// const { Environment, Network, RecordSource, Store } = require('relay-runtime');

export async function fetchGraphQL(text, variables = null) {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return response.json();
}

// const store = new Store(new RecordSource());
// const network = Network.create((operation, variables) =>
//   fetch('/graphql', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   }).then(response => response.json()),
// );

// const environment = new Environment({
//   network,
//   store,
// });

// export default environment;
