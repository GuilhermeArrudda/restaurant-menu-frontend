import { styled, useTheme } from '@mui/material/styles'
import { AppBar as MuiAppBar, Box, CssBaseline, Divider, Drawer as MuiDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight, Menu, Instagram, Facebook, WhatsApp, Person, ShoppingCart, ShoppingBasket, Login, ThumbUp, Logout, BeachAccess } from '@mui/icons-material'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import { errorModal, successModal } from '../../factories/modals'
import { useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

const drawerWidth = 150

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(6)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(7)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	width: drawerWidth,
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'showMenu',
})(({ theme, showMenu }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(showMenu && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'showMenu' })(
	({ theme, showMenu }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(showMenu && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!showMenu && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
)

export default function OptionsMenu({ toggleDrawer, showMenu }) {
	const theme = useTheme()
	const { logout, auth } = useAuth()
	let navigate = useNavigate()
	const userOptions = [
		{icon: <BeachAccess/>, name: 'Início', path: '/'},
		{icon: <Login/>, name: 'Login', path: 'login'},
		{icon: <Person/>, name: 'Meus Dados', path: 'account'},
		{icon: <ShoppingCart/>, name: 'Carrinho', path: 'cart'},
		{icon: <ShoppingBasket/>, name: 'Meus Pedidos', path: 'orders'},
		{icon: <ThumbUp/>, name:'Avaliações', path: 'assessments'},
		{icon: <Logout/>, name: 'Logout', path: 'logout'}
	]
	const socials = [
		{icon: <WhatsApp/>, name: 'Whatsapp', path: 'whatsapp'},
		{icon: <Facebook/>, name: 'Facebook', path: 'facebook'},
		{icon: <Instagram/>, name: 'Instagram', path: 'instagram'}
	]

	const styles = showMenu ? 30 : 100

	function handleLogout() {
		!auth && errorModal('Você ainda não se logou', 'warning')
		api.logout(auth)
			.then(() => {
				logout()
				successModal('Você se deslogou com sucesso! Espero que tenha aproveitado a praia, volte sempre!')
				setTimeout(() => {
					window.location.reload()
				}, 1500)
			})
			.catch(({ response }) => {
				errorModal('Problemas com o servidor, sinto muito, tente novamente mais tarde 😢!')
			})
	}

	function handleClick(path) {
		switch (path) {
		case '/':
			navigate('/')
			break
		case 'login':
			navigate('/login')
			break	
		case 'logout':
			handleLogout()
			break
		case 'account':
			navigate('/account')
			break
		case 'cart':
			navigate('/cart')
			break
		case 'orders':
			navigate('/orders')
			break
		case 'assessments':
			navigate('/assessments')
			break
		case 'whatsapp':
			navigate('/whatsapp')
			break
		case 'facebook':
			navigate('/facebook')
			break
		case 'instagram':
			navigate('/instagram')
			break
		}
	}

	function toTop() {
		animateScroll.scrollToTop()
	}

	return (
		<Box sx={{ display: 'flex', height: '0' }}>
			<CssBaseline />
			<AppBar position="fixed" showMenu={showMenu} sx={{backgroundColor: '#000'}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						edge="start"
						sx={{
							marginRight: 5,
							...(showMenu && { display: 'none' }),
						}}
					>
						<Menu/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" showMenu={showMenu}>
				<DrawerHeader>
					<IconButton onClick={toggleDrawer} sx={{fontSize: 30}}>
						Menu
						{theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{userOptions.map((o) => (
						<ListItem
							key={o.name}
							onClick={() => {handleClick(o.path), toTop()}}
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon sx={{minWidth: styles}}>{o.icon}</ListItemIcon>
								<ListItemText primary={o.name}/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{socials.map((s) => (
						<ListItem
							key={s.name}
							onClick={() => handleClick(s.path)}
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon sx={{minWidth: styles}}>{s.icon}</ListItemIcon>
								<ListItemText primary={s.name}/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	)
}
