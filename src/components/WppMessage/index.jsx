import { Button, OutlinedInput } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { successModal } from '../../factories/modals'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import styles from './styles'
import { animateScroll } from 'react-scroll'

export default function BasicTextFields({ rows }) {
	const [disabled, setDisabled] = useState(false)
	const { auth } = useAuth()
	let navigate = useNavigate()

	function handleSubmitOrder() {
		const id = rows[0].sessionId
		setDisabled(true)
		api.deleteShoppingSession(auth, id)
			.then((result) => {
				successModal('Pedido enviado com sucesso')
				navigate('/')
			})
			.catch((error) => {
				console.log(error)
				setDisabled(false)
			})
	}

	function toTop() {
		animateScroll.scrollToTop()
	}

	return (
		<Box
			component="form"
			sx={styles.insideStyles}
		>
			<OutlinedInput 
				id="outlined-basic" 
				placeholder='Observações no pedido (opcional)'
				variant="standard" 
				sx={styles.input}
				multiline 
				rows={15}
			/>
			<Button 
				sx={styles.button}
				onClick={() => {handleSubmitOrder(), toTop()}}
				disabled={disabled}
			>Enviar Pedido</Button>
		</Box>
	)
}