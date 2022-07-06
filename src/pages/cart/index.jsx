import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Element } from 'react-scroll'
import OptionsMenu from '../../components/Menu/Menu'
import CartContent from '../../components/Table'
import BasicTextFields from '../../components/WppMessage'
import { successModal } from '../../factories/modals'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import styles from './styles'

function Cart() {
	const [showMenu, setShowMenu] = useState(false)
	const [cart, setCart] = useState([])
	const [rows, setRows] = useState([])
	const { auth } = useAuth()
	let navigate = useNavigate()

	useEffect(() => {
		getCart()
	}, [rows])
	async function getCart() {
		try {
			const { data } = await api.getCart(auth)
			if(!data){
				navigate('/')
				successModal('Pedido enviado com sucesso!')
			}
			setCart(data.cartItens)
		}
		catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {

		let list = []

		cart.map((i) => {
			let item = { 
				productId: i.productId,
				sessionId: i.shoppingSessionId,
				name: i.products.name, 
				picture: i.products.picture, 
				quantity: i.quantity, 
				price: i.products.price, 
				total: ((i.quantity) * (i.products.price))
			}
			list.push(item)
		})

		setRows(list)
	}, [cart])


	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	return (
		<Box sx={styles.page}>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>

			<Box sx={styles.parallax}>
				<CartContent to={'test2'} rows={rows}/>
				<Element name='test2' className='element1' style={styles.element}>
					<BasicTextFields rows={rows}/>
				</Element>
			</Box>

		</Box>
	)
}
export default Cart