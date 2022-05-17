import { TailSpin } from 'react-loader-spinner'
import { Container } from '@mui/material'
import styles from './styles'

function Loader() {
	return (
		<Container sx={styles.container}>
			<TailSpin color='#19d272' height='90' width='90' />
		</Container>
	)
}

export default Loader