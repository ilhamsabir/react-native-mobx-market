import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import {
	Button,
} from 'native-base'

import { mainCategory } from '../utils/config'
import CustomIcon from './CustomIcon'

class MainCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	get listMenu() {
		const list = mainCategory.map((el, index) => {
			return <View style={styles.grid} key={index}>
				<TouchableOpacity style={styles.btn}>
					<CustomIcon name={el.icon} style={[styles.icon, { color: el.color }]} />
					<Text style={styles.text}>{el.label}</Text>
				</TouchableOpacity>
			</View>
		})
		return list
	}

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.content}>
					{this.listMenu}
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	main: {
		marginTop: 10,
		height: 200
	},
	content: {
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	grid: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '33%',
		height: 90,
		alignContent: 'center',
	},
	btn: {
		backgroundColor: '#fff',
		height: 90,
		paddingTop: 7,
		paddingRight: 7,
		paddingBottom: 10,
		paddingLeft: 7,
	},
	text: {
		paddingTop: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 10,
	},
	icon: {
		alignContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 35
	}


});


export default MainCategory