import { Box } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'
import { Element } from 'react-scroll'
import RestaurantMenu from '../../components/RestaurantMenu'
import Welcome from '../../components/Welcome'
import { Parallax } from 'react-parallax'

function Homepage() {
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
			<Box sx={{width: '100%', paddingTop: '60px'}}>
				<Parallax bgImageStyle={test} bgImage={image3} strength={-200} style={{height: '2000px'}}>
					<Box sx={{height: '2000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
						<Welcome to='menu'/>
						<Element name='menu' className='element'>
							<RestaurantMenu/>
						</Element>
					</Box>
				</Parallax>
			</Box>
		</Box>
	)
}
export default Homepage