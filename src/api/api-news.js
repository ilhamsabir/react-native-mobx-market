import axios from 'axios'

const apiKey = '253b472c28b243ecb95b5363dd572fe1'


export const fetchNewsOrg = () => {

	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

	const config = {
		url,
		method: 'get',
		// headers: {
		// 	'X-CSRF-TOKEN': CSRF_TOKEN,
		// },
	}

	return axios(config)
}

// post new project
// export const addNew = async data => {

// 	const url = `${BASEAPI}/api/user`

// 	const formData = new FormData()

// 	formData.append('name', data.name)
// 	formData.append('email', data.email)
// 	formData.append('password', data.password)
// 	formData.append('roles', data.roles)

// 	const config = {
// 		url,
// 		method: 'post',
// 		data: formData,
// 		headers: {
// 			'X-CSRF-TOKEN': CSRF_TOKEN,
// 			'Content-Type': 'multipart/form-data',
// 		},
// 	}

// 	return axios(config)
// }