import React, { Component } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const urlSlider = [
	{ url: 'https://s2.bukalapak.com/uploads/flash_banner/24113/mobile/s-960-390/Banner_Mobile_Copy-rush.jpg' },
	{ url: 'https://s3.bukalapak.com/uploads/flash_banner/84113/mobile/s-960-390/Banner_Mobile-payment.jpg' },
	{ url: 'https://s4.bukalapak.com/uploads/flash_banner/45113/mobile/s-960-390/960_x_390-0.jpg' }
]

const { width } = Dimensions.get('window')
const sliderStyle = {
	slider: width,
	item: width
}
class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: urlSlider,
		}
	}

	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Image style={styles.imgCarousel} source={{ uri: item.url }} />
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Carousel
						autoplay={true}
						autoplayInterval={8000}
						autoplayDelay={8000}
						firstItem={1}
						inactiveSlideScale={0.94}
						inactiveSlideOpacity={0.6}
						showsHorizontalScrollIndicator={false}
						snapOnAndroid={true}
						removeClippedSubviews={true}
						data={this.state.entries}
						renderItem={this._renderItem}
						sliderWidth={sliderStyle.slider}
						itemWidth={sliderStyle.item}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: 150,
		// flexDirection: 'row'
	},
	row: {
		flex: 1,
	},
	child: {
		height: 200,
		width,
		justifyContent: 'center'
	},
	imgCarousel: {
		width: null,
		height: 200,
		flex: 1,
		// resizeMode: 'contain',
		// justifyContent: 'center'
		// resizeMode: 'cover',
	},
	text: {
		fontSize: width * 0.5,
		textAlign: 'center'
	},
	slide: {
		width: width,
		height: 150,
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: 0,
		paddingLeft: 0,
	},
});


export default Slider