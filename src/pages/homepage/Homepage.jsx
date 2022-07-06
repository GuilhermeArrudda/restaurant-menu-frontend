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

	return (
		<Box sx={styles.page}>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>
			<Box sx={styles.parallax}>
				<Welcome to='menu'/>
				<Element name='menu' className='element' style={{ width: '100%', margin: 0 }}>
					<RestaurantMenu/>
				</Element>
			</Box>
		</Box>
	)
}
export default Homepage