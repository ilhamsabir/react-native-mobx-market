import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Body,
	List,
	ListItem,
	Title,
	Button,
	Icon,
	Right,
	Grid,
	Col,
} from 'native-base';
import { StyleSheet, Text } from 'react-native';
import color from '../assets/styles/color'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,

		};

	}


	render() {
		return (
			<Container>
				<Header backgroundColor={color.primary}>
					<Body>
						<Title>Search</Title>
					</Body>
					<Right>
						<Button transparent style={styles.btn}>
							<Icon name='person' />
						</Button>
						<Button transparent style={styles.btn}>
							<Icon name='close' />
						</Button>
					</Right>
				</Header>
				<Content style={styles.content}>
					<Grid>
						<Col style={styles.col}>
							<Text>+ Add Favourite Food</Text>
						</Col>
					</Grid>
				</Content>
			</Container >
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		// color: 'white'
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
	}
});


export default Search