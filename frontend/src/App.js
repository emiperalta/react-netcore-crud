import React from 'react';
import store from './actions/Store';
import { Provider } from 'react-redux';
import Candidates from './components/Candidates';

function App() {
  return (
    <Provider store={store}>
      <Candidates />
    </Provider>
  );
}

export default App;