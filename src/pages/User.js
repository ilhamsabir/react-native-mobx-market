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

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			username: '',
			password: '',
		};
		this.toLoginScreen = this.toLoginScreen.bind(this)
		this.toUserScreen = this.toUserScreen.bind(this)
		this.toFoodScreen = this.toFoodScreen.bind(this)
	}

	toLoginScreen() {
		onSignOut().then(() => {
			this.props.navigation.navigate('Login')
		})
	}

	toUserScreen() {
		console.log('nav', this.props)

	}

	toFoodScreen() {

	}

	render() {
		var items = [
			'Simon Mignolet',
			'Nathaniel Clyne',
			'Dejan Lovren',
			'Mama Sakho',
			'Emre Can'
		];
		return (
			<Container>
				<Header>
					<Body>
						<Title>Users</Title>
					</Body>
					<Right>
						<Button transparent style={styles.btn} onPress={this.toUserScreen}>
							<Icon name='person' />
						</Button>
						<Button transparent style={styles.btn} onPress={this.toLoginScreen}>
							<Icon name='close' />
						</Button>
					</Right>
				</Header>
				<Content style={styles.content}>
					<Grid>
						<Col style={styles.col}>
							<Button block light onPress={this.toFoodScreen}>
								<Text>+ Add Favourite Food</Text>
							</Button>
						</Col>
					</Grid>
					<Grid>
						<Col>
							<List dataArray={items}
								renderRow={(item) =>
									<ListItem>
										<Text>{item}</Text>
									</ListItem>
								}>
							</List>
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


export default User