import React, { Component } from 'react'
import { Text, Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import CustomIcon from './CustomIcon'
import { mainFooterMenu } from '../utils/config'
import color from '../assets/styles/color'

class MainFooter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.goRoute = this.goRoute.bind(this)
	}

	// move to route
	goRoute(route) {
		this.props.route.navigate(route)
	}

	// render main footer menu
	get listMenu() {
		const item = mainFooterMenu.map((el, index) => {
			const active = this.props.route.state.routeName === el.name ? styles.active : ''
			return <View style={styles.grid} key={index}>
				<TouchableOpacity style={styles.btn} onPress={() => this.goRoute(el.name)}>
					<CustomIcon name={el.icon} style={[styles.icon, active]} />
					<Text style={[styles.text, active]}>{el.label}</Text>
				</TouchableOpacity>
			</View>
		})

		return item
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					{this.listMenu}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		height: 65,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	grid: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '25%',
		alignContent: 'center',
	},
	btn: {
		paddingTop: 7,
		paddingRight: 5,
		paddingBottom: 20,
		paddingLeft: 5,
	},
	text: {
		paddingTop: 5,
		textAlign: 'center',
		fontWeight: 'normal',
		fontSize: 13,
		color: '#707070',
	},
	icon: {
		alignContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 22,
		color: '#707070',
	},
	active: {
		color: color.primary,
		fontWeight: 'bold',
	}
});


export default MainFooter