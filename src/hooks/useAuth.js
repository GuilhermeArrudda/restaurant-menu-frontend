import { useContext } from 'react'
import AuthContext from '../contexts/authContext'

export default function useAuth() {
	const authContext = useContext(AuthContext)
	
	return authContext
}

