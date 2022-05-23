import { Box, Button, Typography } from '@mui/material'
import { Parallax } from 'react-parallax'
import { Link } from 'react-scroll'
import styles from './styles'

function Welcome({ to }) {

	const image3 = 'https://urbanarts.vteximg.com.br/arquivos/ids/4791689/quadro-barra-da-tijuca--calcadao-2.jpg?v=637202168330200000'

	return (
		<Parallax bgImage={image3} strength={-200}>
			<Box sx={{ height: 920 }}>
				<Box sx={styles.background}>
					<Box sx={styles.container}>
						<Typography style={styles.title}>Bem vindos a Barraca do Gilvan!</Typography>
						<Typography sx={styles.text}>
							<span style={styles.underlineGreen}>
								Eeei! Você com certeza fez 
							</span>
								algo 
							<span style={styles.underlineRed}>
								pra merecer uma praia hoje. Que tal um refri bem gelado
							</span> 
								e 
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
			</Box>
		</Parallax>
	)
}

export default Welcome