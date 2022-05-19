import { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const persistedAuth = JSON.parse(localStorage.getItem('auth'))
	const [auth, setAuth] = useState(persistedAuth)

	const login = (authData) => {
		setAuth(authData)
		localStorage.setItem('auth', JSON.stringify(authData))
	}

	const logout = () => {
		localStorage.removeItem('auth')
	}

	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}