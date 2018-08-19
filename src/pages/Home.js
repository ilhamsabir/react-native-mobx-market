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

import { StyleSheet, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react/custom';
import MainHeader from '../components/MainHeader';
import SubMainHeader from '../components/SubMainHeader';
import Slider from '../components/Slider';
import MainCategory from '../components/MainCategory';
import MainFooter from '../components/MainFooter';
import PopularProducts from '../components/PopularProducts';


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
		console.log('data', this.props.navigation.state.routeName)
	}

	render() {
		return (
			<Container>
				<MainHeader nav={this.props.navigation} />
				<ScrollView>
					<SubMainHeader />
					<Slider />
					<MainCategory />
					<PopularProducts />
				</ScrollView>
				<MainFooter
					route={this.props.navigation}
				/>
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
});


export default Home