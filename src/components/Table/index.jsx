import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import styles from './styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Box, Button } from '@mui/material'
import { Link } from 'react-scroll'
import { Delete } from '@mui/icons-material'
import { successModal } from '../../factories/modals'



export default function CartContent({ to, rows }) {
	const [finalPrice, setFinalPrice] = useState(0)
	const [disabled, setDisabled] = useState(false)
	const { auth } = useAuth()


	useEffect(() => {
		let soma = 0
		rows.map((p, i) => {
			soma += p.total
			setFinalPrice(soma)
		})
	}, [rows])

	function handleDeleteItem(id) {
		setDisabled(true)
		api.deleteCartItem(auth, id)
			.then((result) => {
				successModal('Item deletado com sucesso')
			})
			.catch((error) => {
				console.log(error)
				setDisabled(false)
			})
	}
	
	return (
		<TableContainer component={Paper} sx={styles.insideStyles}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={styles.rowHead}>Produtos</TableCell>
						<TableCell align="center"sx={styles.rowHead}></TableCell>
						<TableCell align="center"sx={styles.rowHead}>Quantidade</TableCell>
						<TableCell align="center"sx={styles.rowHead}>Preço</TableCell>
						<TableCell align="center"sx={styles.rowHead}>Total</TableCell>
						<TableCell align="center"></TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row" sx={styles.rowBody}>
								{row.name}
							</TableCell>
							<TableCell align="left">
								<Box
									component="img"
									sx={{
										height: 50,
										width: 50,
									}}
									alt={row.name}
									src={row.picture}
								/>

							</TableCell>

							<TableCell align="center" sx={styles.rowBody}>{row.quantity}</TableCell>
							<TableCell align="center" sx={styles.rowBody}>R$ {((row.price)/100).toFixed(2)}</TableCell>
							<TableCell align="center" sx={styles.rowBody}>R$ {((row.total)/100).toFixed(2)}</TableCell>
							<TableCell align="center">
								<Delete
									onClick={() => {handleDeleteItem(row.productId)}}
									disabled={disabled}
									cursor='pointer'
								/>
							</TableCell>

						</TableRow>
					))}
					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell 
							align="center" 
							sx={{fontWeight: 700, fontSize: 20}}
						>R$ {(finalPrice/100).toFixed(2)}</TableCell>
					</TableRow>
				</TableBody>

			</Table>
			<Button 
				sx={styles.button}
			>
				<Link 
					activeClass='active' 
					className='test1' 
					to={to} 
					spy={true} 
					smooth={true}
					duration={1000} 
				>Finalizar Pedido</Link>
			</Button>
		</TableContainer>
	)
}