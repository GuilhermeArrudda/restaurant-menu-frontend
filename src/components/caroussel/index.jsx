import Carousel from 'react-material-ui-carousel'
import { Button, Card, CardMedia, CardContent, Typography, CardActions, InputLabel, Box, FormControl, Select, MenuItem } from '@mui/material'
import { NavigateBefore, NavigateNext, ShoppingCart } from '@mui/icons-material'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import styles from './styles'
import useAuth from '../../hooks/useAuth'
import { successModal } from '../../factories/modals'


const image3 = 'https://urbanarts.vteximg.com.br/arquivos/ids/4791689/quadro-barra-da-tijuca--calcadao-2.jpg?v=637202168330200000'


function ProductsFromMenu(props) {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts()
	}, [])
	async function getProducts() {
		try {
			const { data } = await api.getProducts()
			setProducts(data)
		}
		catch (error) {
			console.log(error)
		}
	}

	return (
		<Carousel 
			sx={styles.carousel} 
			navButtonsAlwaysVisible={true} 
			NextIcon={<NavigateNext style={{ color: '#000', fontSize: '50px' }}/>}
			PrevIcon={<NavigateBefore style={{ color: '#000', fontSize: '50px', marginLeft: '50px' }}/>}
			navButtonsProps={{style:{background: 'none'}}}
			autoPlay={false} 
			indicatorContainerProps={{style:{display: 'none'}}}
			animation={'slide'}
			duration={1000}
		>
			{
				products.map( (p, i) => <Item key={i} p={p} /> )
			}
		</Carousel>
	)
}

function Item(props) {
	const { auth } = useAuth()
	const [disabled, setDisabled] = useState(false)
	const [quantity, setQuantity] = useState('')

	const handleChange = (event) => {
		setQuantity(event.target.value)
	}

	async function handleClick (id) {
		const body = {
			productId: id,
			quantity
		}
		setDisabled(true)
		try {
			await api.insertProduct(auth, body)
			successModal('Produto adicionado ao carrinho com sucesso')
			setDisabled(false)
		} catch ({ response }) {
			console.log(response)
			setDisabled(false)
		}
	}

	return (

		<Parallax bgImage={image3} strength={-200} style={styles.paper} key={props.p.id}>
			<Card sx={{width: '300px', height: '500px'}}>
				<CardMedia 
					height='350px'
					width='300px'
					image={props.p.picture}
					alt={props.p.name}
					component='img'
				/>
				<CardContent>
					<Typography variant='h5' component='div'>
						{props.p.name}
					</Typography>
					<Typography color='text.secondary'>
						R$ {((props.p.price)/100).toFixed(2)}
					</Typography>
				</CardContent>
				<CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Box sx={{ minWidth: 60 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Unids</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={quantity}
								label="Unids"
								onChange={handleChange}
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
								<MenuItem value={5}>5</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Button 
						size='small'
						sx={styles.button}
						onClick={() => {handleClick(props.p.id)}}
						disabled={disabled}
					>
						<ShoppingCart/>
					</Button>
				</CardActions>
			</Card>
		</Parallax>
	)
}

export default ProductsFromMenu