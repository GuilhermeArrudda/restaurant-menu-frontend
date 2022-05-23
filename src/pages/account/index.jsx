import { Box } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'
import { Parallax } from 'react-parallax'

function Account() {
	const [showMenu, setShowMenu] = useState(false)

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

			<Box sx={{ paddingTop: '60px'}}>
				<Parallax bgImageStyle={test} bgImage={image3} strength={-200}>
					<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
						<Box sx={styles.insideStyles}>ACCOUNT EM CONSTRUÇÃO</Box>
					</Box>
				</Parallax>
			</Box>

		</Box>
	)
}
export default Account