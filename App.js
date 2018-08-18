
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