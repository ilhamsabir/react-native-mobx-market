import {
	observable,
	action,
	computed,
} from 'mobx';
import {
	fetchNewsOrg
} from '../api/api-news';


class MainStore {

	@observable news = []
	@observable list = [
		'Simon Mignolet',
		'Nathaniel Clyne',
		'Dejan Lovren',
		'Mama Sakho',
		'Emre Can'
	]

	// @action getNewsData = async () => {
	// 	try {
	// 		const response = await fetchNewsOrg()
	// 		if (response.data.status === 'ok') {
	// 			this.news = response.data.articles
	// 			console.log('res', this.news)
	// 		}
	// 	} catch (err) {

	// 	}
	// }


}

const store = new MainStore();

export default store;