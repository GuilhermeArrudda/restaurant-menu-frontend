import { Box, List, ListItem, Typography } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'

function Homepage() {
	const [showMenu, setShowMenu] = useState(false)

	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	let pageStyle

	showMenu ? pageStyle = styles.pageBlackout : pageStyle = styles.page

	return (
		<>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>

			<Box sx={pageStyle}>
				<List>
					<ListItem>Testando</ListItem>
					<ListItem>Testando</ListItem>
					<ListItem>Testando</ListItem>
					<ListItem>Testando</ListItem>
					<ListItem>Testando</ListItem>
				</List>
			</Box>
		</>
	)
}
export default Homepage