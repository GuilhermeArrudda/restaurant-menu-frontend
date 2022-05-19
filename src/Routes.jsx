import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import SignUp from './pages/signUp/SignUp'

function PagesRoutes () {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage/>}/>
				<Route path='/sign-up' element={<SignUp/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default PagesRoutes