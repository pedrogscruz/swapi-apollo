import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './apollo';
import Home from 'screens/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
