import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	Image,
	View,
	StatusBar,
	TextInput,
} from 'react-native'
import {
	Button,
} from 'native-base'
import CustomIcon from './CustomIcon'
import color from '../assets/styles/color'


class MainHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.moveToSearch = this.moveToSearch.bind(this)
	}

	// on touch seacrh redirect to search pages
	moveToSearch() {
		this.props.nav.navigate('Search')
	}

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.header}>
					<StatusBar backgroundColor={color.primary} />
					<View style={styles.colLeft}>
						<View style={styles.searchContent}>
							<CustomIcon name='loupe' style={styles.iconSearch} />
							<TextInput
								style={styles.search}
								underlineColorAndroid='transparent'
								placeholder="Search"
								onTouchStart={this.moveToSearch}
							/>
						</View>
					</View>
					<View style={styles.colRight}>
						<Button transparent style={styles.btn}>
							<CustomIcon name='alarm' style={styles.actionIcon} />
						</Button>
						<Button transparent style={styles.btnCart}>
							<CustomIcon name='cart' style={styles.actionIcon} />
						</Button>
					</View>
				</View >
			</View >
		);
	}
}

const styles = StyleSheet.create({
	main: {
		height: 50,
	},
	header: {
		backgroundColor: color.primary,
		flex: 1,
		flexDirection: 'row',
	},
	colLeft: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '75%',
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 20,
	},
	colRight: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '25%',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 3,
		flex: 1,
		flexDirection: 'row',
	},
	searchContent: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		borderWidth: 0,
		borderColor: '#ddd',
	},
	search: {
		width: '85%',
		height: 'auto',
		backgroundColor: '#fff',
		paddingTop: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		borderTopRightRadius: 3,
		borderBottomRightRadius: 3,

	},
	iconSearch: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '15%',
		paddingTop: 5,
		paddingRight: 2,
		paddingBottom: 2,
		paddingLeft: 5,
		backgroundColor: '#fff',
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3,
		fontSize: 18,
	},
	btn: {
		paddingTop: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		marginRight: 5,
		height: 30,
		borderWidth: 0,
		borderColor: '#ddd',
	},
	btnCart: {
		paddingTop: 6,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		marginRight: 5,
		height: 30,
	},
	actionIcon: {
		textAlign: 'center',
		fontSize: 22,
		color: '#fff'
	},
});


export default MainHeader