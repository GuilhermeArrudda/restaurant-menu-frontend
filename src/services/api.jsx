import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(BASE_URL, 'aqui')

function makeConfig(token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	return config
}

function signUp(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

function login(body) {
	return axios.post(`${BASE_URL}/login`, body)
}

function logout({token}) {
	const config = makeConfig(token)

	return axios.post(`${BASE_URL}/logout`, {}, config)
}

const api = {
	signUp,
	login,
	logout
}

export default api