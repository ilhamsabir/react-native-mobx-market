import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button,
} from 'native-base'

import CustomIcon from './CustomIcon'

class SubMainHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.subheader}>
					<View style={styles.colLeft}>
						<View style={styles.walletContent}>
							<CustomIcon name='wallet-with-card-sticking-out' style={styles.walletIcon} />
							<Text style={styles.walletCurrency}> Rp. 0</Text>
						</View>
					</View>
					<View style={styles.colRight}>
						<Text> Add Balanced</Text>
					</View>
				</View >
			</View >
		);
	}
}

const styles = StyleSheet.create({
	main: {
		height: 40,
	},
	subheader: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ddd'
	},
	colLeft: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '70%',
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		alignContent: 'center',
	},
	colRight: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '30%',
		paddingTop: 10,
		paddingRight: 0,
		paddingBottom: 10,
		paddingLeft: 5,
		flex: 1,
		flexDirection: 'row',
	},
	walletContent: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center'
	},
	walletCurrency: {
		paddingTop: 2,
		paddingLeft: 10,
		fontWeight: 'bold',
	},
	walletIcon: {
		fontSize: 18,
		fontWeight: 'bold',
	}

});


export default SubMainHeader