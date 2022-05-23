import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Cart from './pages/cart'
import Account from './pages/account'
import Orders from './pages/orders'
import Assessments from './pages/assessments'


function PagesRoutes () {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage/>}/>
				<Route path='/sign-up' element={<SignUp/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/account' element={<Account/>}/>
				<Route path='/orders' element={<Orders/>}/>
				<Route path='/Assessments' element={<Assessments/>}/>

			</Routes>
		</BrowserRouter>
	)
}

export default PagesRoutes