import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import styles from './styles'

function Welcome({ to }) {

	return (
		<Box sx={styles.background}>
			<Box sx={styles.container}>
				<Typography sx={styles.title}>Bem vindos a Barraca do Gilvan!</Typography>
				<Typography sx={styles.text}>
					<span style={styles.underlineGreen}>
								Eeei! Você com certeza fez<span> </span>
					</span>
								algo<span> </span>
					<span style={styles.underlineRed}>
								pra merecer uma praia hoje. Que tal um refri bem gelado<span> </span>
					</span> 
								e <span> </span>
					<span style={styles.underlineGreen}>
								um aperitivo muito saboroso pra fazer seu dia feliz?
					</span>
				</Typography>
				<Button sx={styles.button}>
					<Link 
						activeClass='active' 
						className='menu' 
						to={to} 
						spy={true} 
						smooth={true} 
						duration={1000} 
					>Ver Cardápio</Link>
				</Button>
			</Box>
		</Box>
	)
}

export default Welcome