import { BeachAccess, LocalDrink, RestaurantMenu as RestaurantMenuIcon, SportsBar } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import ProductsFromMenu from '../caroussel'
import styles from './styles'

function RestaurantMenu () {
	return(
		<Box sx={styles.container}>
			<Box sx={styles.box}>
				<Box sx={styles.wrapper}>
					<Button sx={styles.buttonRed}><LocalDrink sx={{color: '#000'}}/></Button>
					<Typography sx={styles.title}>Refrigerantes</Typography>
				</Box>
				<Box sx={styles.wrapper}>
					<Button sx={styles.buttonGreen}><SportsBar sx={{color: '#000'}}/></Button>
					<Typography sx={styles.title}>Alcoólicas</Typography>
				</Box>
				<Box sx={styles.wrapper}>
					<Button sx={styles.buttonRed}><RestaurantMenuIcon sx={{color: '#000'}}/></Button>
					<Typography sx={styles.title}>Porções</Typography>
				</Box>
				<Box sx={styles.wrapper}>
					<Button sx={styles.buttonGreen}><BeachAccess sx={{color: '#000'}}/></Button>
					<Typography sx={styles.title}>Aluguéis</Typography>
				</Box>
			</Box>

			<Box sx={styles.cardapio}>
				<ProductsFromMenu/>
			</Box>

		</Box>
	)
}

export default RestaurantMenu