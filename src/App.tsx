import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>test</div>
    </ApolloProvider>
  );
}

export default App;
