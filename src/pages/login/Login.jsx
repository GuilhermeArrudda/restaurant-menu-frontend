import { Box, Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OptionsMenu from '../../components/Menu/Menu'
import { styles } from './styles'
import api from '../../services/api'
import useAuth from '../../hooks/useAuth'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { errorModal, successModal } from '../../factories/modals'



function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const { login, auth } = useAuth()

	const [isLoading, setIsLoading] = useState(false)
	const [disabled, setDisabled] = useState(false)

	const [showMenu, setShowMenu] = useState(false)

	let navigate = useNavigate()

	useEffect(() => {
		if(auth){
			navigate('/')
			errorModal('Você já está logado', 'warning')
		}
	}, [navigate])

	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		setDisabled(true)
		const body = {
			email: email.toLowerCase(),
			password: password
		}

		try {
			const result = await api.login(body)
			login(result.data)
			successModal('Login realizado com sucesso')
			navigate('/')
		} catch ({ response }) {
			const status = response.status
			registerError(status)
			setIsLoading(false)
			setDisabled(false)
		}
	}

	function registerError(status) {
		const messageStatus = {
			401: 'Email e/ou senha incorretos!',
			422: 'Dados inválidos, por favor verifique email e senha!',
			0: 'Problemas com o servidor, sinto muito, tente novamente mais tarde 😢!'
		}

		if(status === 401) {
			errorModal(messageStatus[401])
		}
		if(status === 422) {
			errorModal(messageStatus[422])
		}
		if(status === 0) {
			errorModal(messageStatus[0])
		}
	}

	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	let pageStyle

	showMenu ? pageStyle = styles.pageBlackout : pageStyle = styles.page

	return (
		<Box>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>
			<Box sx={styles.page}>
				<Box sx={styles.boxForm}>
					<Box component='form' onSubmit={handleSubmit} sx={styles.form}>
						<Typography sx={styles.title}>Entre com o seu email</Typography>
						<Typography sx={styles.text}>Caso ainda não seja cadastrado, <Button
							sx={styles.button}
							size='small'
							onClick={() => navigate('/sign-up')}
						>clique aqui!
						</Button>
						</Typography>
						<OutlinedInput
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							sx={styles.input}
							disabled={disabled}
							required
						/>
						<OutlinedInput
							placeholder='Senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type={showPassword ? 'text' : 'password'}
							sx={styles.input}
							disabled={disabled}
							required
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										onClick={() => setShowPassword(!showPassword)}
										edge='end'
									>
										{showPassword ? <VisibilityOff/> : <Visibility/>}
									</IconButton>
								</InputAdornment>
							}
						/>
						<LoadingButton
							variant='outlined'
							type='submit'
							loading={isLoading}
							sx={styles.loadingButton}
							loadingIndicator='Loading...'
						>
								Entrar
						</LoadingButton>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Login