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

function getProducts() {
	return axios.get(`${BASE_URL}/products`)
}

function getCart({token}) {
	const config = makeConfig(token)

	return axios.get(`${BASE_URL}/cart`, config)
}

function insertProduct({token}, id) {
	const config = makeConfig(token)

	return axios.post(`${BASE_URL}/cart`, id, config)
}

function deleteCartItem({token}, id) {
	const config = makeConfig(token)

	return axios.delete(`${BASE_URL}/cart/cartItem/${id}`, config)
}

function deleteShoppingSession({token}, id) {
	const config = makeConfig(token)

	return axios.delete(`${BASE_URL}/cart/shoppingSession/${id}`, config)
}


const api = {
	signUp,
	login,
	logout,
	getProducts,
	getCart,
	insertProduct,
	deleteCartItem,
	deleteShoppingSession
}

export default api