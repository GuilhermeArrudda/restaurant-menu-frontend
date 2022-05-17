import { Box, List, ListItem, Typography } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'

function Homepage() {
	const [showMenu, setShowMenu] = useState(false)

	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>
			{showMenu ? 
				<Box sx={styles.pageBlackout}>
					<Box sx={styles.page}>
						<List>
							<ListItem>Testando</ListItem>
							<ListItem>Testando</ListItem>
							<ListItem>Testando</ListItem>
							<ListItem>Testando</ListItem>
							<ListItem>Testando</ListItem>
						</List>
					</Box>
				</Box>: 
				<Box sx={styles.page}>
					<Typography sx={styles.title}>Trending</Typography>
					<List>
						<ListItem>Testando</ListItem>
						<ListItem>Testando</ListItem>
						<ListItem>Testando</ListItem>
						<ListItem>Testando</ListItem>
						<ListItem>Testando</ListItem>
					</List>
				</Box>
			}
		</>
	)
}
export default Homepage