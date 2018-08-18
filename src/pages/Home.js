import React, { Component } from 'react';
import {
	Container,
	Content,
	Body,
	List,
	ListItem,
	Title,
	Button,
	Icon,
	Right,
	Left,
	Grid,
	Col,
	Card,
	CardItem,
	Thumbnail,
} from 'native-base';

import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { observer, inject } from 'mobx-react/custom';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fonts from '../../font.json';
import Carousel from 'react-native-snap-carousel';
import Header from '../components/Header';

// this for create custom icon
const CustomIcon = createIconSetFromFontello(fonts)
const sliderWidth = Dimensions.get('window').width;
const itemWidth = 290;
// const urlSlider = [
// 	{ url: 'https://s2.bukalapak.com/uploads/flash_banner/24113/mobile/s-960-390/Banner_Mobile_Copy-rush.jpg' },
// 	{ url: 'https://s3.bukalapak.com/uploads/flash_banner/84113/mobile/s-960-390/Banner_Mobile-payment.jpg' },
// 	{ url: 'https://s4.bukalapak.com/uploads/flash_banner/45113/mobile/s-960-390/960_x_390-0.jpg' }
// ]

@inject('store')
@observer
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: [],
		}
	}

	componentDidMount() {
		console.log('data', this.props)
	}

	_renderItem({ item, index }) {
		console.log('ca', item, index)
		return (
			<View style={styles.slide}>
				<Image source={{ uri: 'http://img10.jd.id/Indonesia/nHBfsgAAAQAAABwAGD3RYwAEEKk.png' }}
					style={styles.imgCarousel} />
			</View>
		);
	}

	render() {
		return (
			<Container>
				<Header nav={this.props.navigation}></Header>
				<Content style={styles.content}>
					<Grid>
						<Col style={styles.col}>
							<Carousel
								ref={(c) => { this._carousel = c; }}
								autoplay={true}
								autoplayInterval={8000}
								autoplayDelay={8000}
								data={this.state.entries}
								sliderWidth={sliderWidth}
								itemWidth={itemWidth}
								renderItem={this._renderItem} />
						</Col>
					</Grid>
					<Grid>
						<Col>
							<Title>test</Title>
						</Col>
					</Grid>
				</Content>
			</Container >
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#fff'
	},
	col: {
		height: 50,
		width: '100%',
	},
	content: {
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		height: 40,
	},
	slide: {
		width: itemWidth,
		height: 150,
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: 0,
		paddingLeft: 0,
	},
	imgCarousel: {
		width: null,
		height: 135,
		flex: 1,
		resizeMode: 'contain'
	},
});


export default Home