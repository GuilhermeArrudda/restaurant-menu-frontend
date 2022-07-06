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

function SignUp() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const { auth } = useAuth()

	const [isLoading, setIsLoading] = useState(false)
	const [disabled, setDisabled] = useState(false)

	const [showMenu, setShowMenu] = useState(false)

	let navigate = useNavigate()

	useEffect(() => {
		if(auth){
			navigate('/')
			alert('Você já está logado')
		}
	}, [navigate])

	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		setDisabled(true)
		const body = {
			name: name,
			email: email.toLowerCase(),
			password: password
		}
		console.log(body)

		if(password !== confirmPassword) {
			errorModal('As senhas devem ser iguais')
			setDisabled(false)
			setIsLoading(false)
			return
		}

		try {
			await api.signUp(body)
			successModal('Cadastro realizado com sucesso')
			navigate('/login')
		} catch ({ response }) {
			const status = response.status
			registerError(status)
			setIsLoading(false)
			setDisabled(false)
		}
	}

	function registerError(status) {
		const messageStatus = {
			409: 'Este email já está cadastrado, caso tenha esquecido a senha entre em contato conosco!',
			422: 'Dados inválidos, por favor insira um email e senha válidos!',
			0: 'Problemas com o servidor, sinto muito, tente novamente mais tarde 😢!'
		}

		if(status === 409) {
			errorModal(messageStatus[409])
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

	return (
		<>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>
			<Box sx={styles.page}>
				<Box sx={styles.boxForm}>
					<Box component='form' onSubmit={handleSubmit} sx={styles.form}>
						<Typography sx={styles.title}>Cadastre-se com o seu email</Typography>
						<Typography sx={styles.text}>Já tem uma conta? Para se logar, <Button
							sx={styles.button}
							size='small'
							onClick={() => navigate('/login')}
						>clique aqui!
						</Button>
						</Typography>
						<OutlinedInput
							placeholder='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							sx={styles.input}
							disabled={disabled}
							required
						/>
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
						<OutlinedInput
							placeholder='Confirma sua senha'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
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
								Cadastrar
						</LoadingButton>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default SignUp