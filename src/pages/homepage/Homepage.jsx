import { Box } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'
import { Element } from 'react-scroll'
import RestaurantMenu from '../../components/RestaurantMenu'
import Welcome from '../../components/Welcome'

function Homepage() {
	const [showMenu, setShowMenu] = useState(false)

	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	let pageStyle

	showMenu ? pageStyle = styles.pageBlackout : pageStyle = styles.page

	return (
		<Box sx={pageStyle}>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>

			<Box sx={{position: 'absolute', overflowX: 'hidden', width: '100%', paddingTop: '60px'}}>
				<Welcome to='menu'/>
				<Element name='menu' className='element'>
					<RestaurantMenu/>
				</Element>
			</Box>
		</Box>
	)
}
export default Homepage