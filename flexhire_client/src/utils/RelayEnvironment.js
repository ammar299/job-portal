import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Define a function that fetches the results of queries from your Rails GraphQL endpoint
function fetchQuery(operation, variables) {
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text, // GraphQL text from the operation
            variables,
        }),
    }).then(response => response.json());
}

// Create an environment using this network layer
const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
