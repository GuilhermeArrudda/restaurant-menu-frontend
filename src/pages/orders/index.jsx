import { Box } from '@mui/material'
import { useState } from 'react'
import OptionsMenu from '../../components/Menu/Menu'
import styles from './styles'

function Account() {
	const [showMenu, setShowMenu] = useState(false)

	function toggleDrawer() {
		setShowMenu(!showMenu)
	}

	return (
		<Box sx={styles.page}>
			<OptionsMenu toggleDrawer={toggleDrawer} showMenu={showMenu}/>
			<Box sx={styles.parallax}>
				<Box sx={styles.insideStyles}>ACCOUNT EM CONSTRUÇÃO</Box>
			</Box>
		</Box>
	)
}
export default Account