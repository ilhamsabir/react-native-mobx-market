import {
	createStackNavigator
} from 'react-navigation';

import Home from '../pages/Home'
import User from '../pages/User'
import Search from '../pages/Search'


export const MainRoute = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null,
		}
	},
	User: {
		screen: User,
		navigationOptions: {
			header: null,
		}
	},
	Search: {
		screen: Search,
		navigationOptions: {
			header: null,
		}
	},

})