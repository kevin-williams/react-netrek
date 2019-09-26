import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  resolvers: {
    Query: {
      stars: () => {
        console.log('lookup stars');
        return [{ra: 1, dec: 3, mag: 3.3, __typename: 'Star'}];
      },
    },
  },
});

client.writeData({
  data: {
    selectedHop: 'M13',
  },
});

export default client;
