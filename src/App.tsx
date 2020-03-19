import React, { lazy, Suspense } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

import client from './apollo';
const Home = lazy(() => import('screens/Home'));
const Infos = lazy(() => import('screens/Infos'));

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Route path='/' exact component={Home} />
          <Route path='/:id' exact component={Infos} />
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
