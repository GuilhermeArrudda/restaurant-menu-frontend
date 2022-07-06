/* eslint-disable react/jsx-no-duplicate-props */
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
			<Table sx={styles.head}>
				<TableHead >
					<TableRow>
						<TableCell sx={styles.rowHead}>Produtos</TableCell>
						<TableCell align="center" sx={styles.rowHead} sx={styles.displayNone}></TableCell>
						<TableCell align="center" sx={styles.rowHead}>Qtde</TableCell>
						<TableCell align="center" sx={styles.rowHead}>Preço</TableCell>
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
							<TableCell align="left" sx={styles.displayNone}>
								<Box
									component="img"
									sx={{
										height: '50px',
										width: '50px',
									}}
									alt={row.name}
									src={row.picture}
								/>

							</TableCell>

							<TableCell align="center" sx={styles.rowBody}>{row.quantity}</TableCell>
							<TableCell align="center" sx={styles.rowBody}>R$ {((row.price)/100).toFixed(2)}</TableCell>
							<TableCell align="center">
								<Delete
									onClick={() => {handleDeleteItem(row.productId)}}
									disabled={disabled}
									cursor='pointer'
									sx={styles.delete}
								/>
							</TableCell>

						</TableRow>
					))}
					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center" sx={styles.rowBody}>SubTotal:</TableCell>
						<TableCell 
							align="center" 
							sx={styles.rowBottom}
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