import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native'
import {
	Button,
} from 'native-base'

// import CustomIcon from './CustomIcon'

const image = 'https://s4.bukalapak.com/img/4604044732/s-136-136/2018_03_11T09_16_59_07_00.jpg'

class PopularProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	// get listMenu() {
	// 	const list = mainCategory.map((el, index) => {
	// 		return <View style={styles.grid} key={index}>
	// 			<TouchableOpacity style={styles.btn}>
	// 				<CustomIcon name={el.icon} style={[styles.icon, { color: el.color }]} />
	// 				<Text style={styles.text}>{el.label}</Text>
	// 			</TouchableOpacity>
	// 		</View>
	// 	})
	// 	return list
	// }

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.header}>
					<View style={styles.leftSide}>
						<Text style={styles.title}>Popular</Text>
					</View>
					<View style={styles.rightSide}>
						<Text>See more</Text>
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.grid}>
						<View style={styles.card}>
							<View style={styles.cardContent}>
								<View style={styles.imageContent}>
									<Image style={styles.image} source={{ uri: image }} />
								</View>
							</View>
						</View>
					</View>

					<View style={styles.grid}>
						<View style={styles.card}>
							<View style={styles.cardContent}>
								<Text>smore</Text>
							</View>
						</View>
					</View>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	main: {
		marginTop: 10,
		// height: 450,
		borderWidth: 0,
		borderColor: '#ddd',

	},
	header: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 0,
		paddingLeft: 20,
		height: 30,
		backgroundColor: '#fdfcfc',
	},
	leftSide: {
		width: '80%',
	},
	rightSide: {
		width: '20%',
	},
	title: {
		color: '#333',
		fontWeight: 'bold',
	},
	content: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#fdfcfc',
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	grid: {
		borderWidth: 0,
		borderColor: '#ddd',
		width: '50%',
		height: 500,
		alignContent: 'center',
		paddingTop: 10,
		paddingRight: 5,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	card: {
		height: 180,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 1 },
		// shadowOpacity: 0.8,
		// shadowRadius: 1,
		// elevation: 1,
	},
	cardContent: {
		borderWidth: 0.2,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		borderRadius: 3,
	},
	image: {
		width: 120,
		height: 90,
		flex: 1,
	},
	imageContent: {
		width: 120,
		height: 90
	},


});


export default PopularProducts