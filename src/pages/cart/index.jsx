import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
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

	let pageStyle

	showMenu ? pageStyle = styles.pageBlackout : pageStyle = styles.page

	const image3 = 'https://urbanarts.vteximg.com.br/arquivos/ids/4791689/quadro-barra-da-tijuca--calcadao-2.jpg?v=637202168330200000'

	const test = {
		height: '2500px'
	}

	return (
		<Box sx={pageStyle}>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>

			<Box sx={{width: '100%', paddingTop: '60px'}}>
				<Parallax bgImageStyle={test} bgImage={image3} strength={-200} style={{height: '2000px'}}>
					<Box sx={{height: '2000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
						<CartContent to={'test2'} rows={rows}/>

						<Element name='test2' className='element1'>
							<BasicTextFields rows={rows}/>
						</Element>
					</Box>
				</Parallax>
			</Box>

		</Box>
	)
}
export default Cart