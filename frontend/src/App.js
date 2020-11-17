import React from 'react';
import store from './actions/Store';
import { Provider } from 'react-redux';
import Candidates from './components/Candidates';
import { Container } from '@material-ui/core';

function App() {
	return (
		<Provider store={store}>
			<Container maxWidth="md">
				<Candidates />
			</Container>
		</Provider>
	);
}

export default App;