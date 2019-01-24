
// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	Container
} from 'native-base';


import { Provider } from 'mobx-react/native';
import { MainRoute } from './src/routes/Main';
import store from './src/store/store';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	componentDidMount() { }

	render() {
		return (
			<Provider store={store}>
				<Container>
					<MainRoute />
				</Container>
			</Provider>
		);
	}
}

export default App