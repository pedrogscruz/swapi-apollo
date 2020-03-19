import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

const client = new ApolloClient({
	cache,
	uri: 'https://swapi.graph.cool',
	clientState: {
		cache
	}
});

export default client;