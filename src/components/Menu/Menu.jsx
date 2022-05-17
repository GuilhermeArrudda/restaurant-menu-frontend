import { styled, useTheme } from '@mui/material/styles'
import { AppBar as MuiAppBar, Box, CssBaseline, Divider, Drawer as MuiDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight, Menu, Instagram, Facebook, WhatsApp, Person, ShoppingCart, ShoppingBasket, Login, ThumbUp, Logout } from '@mui/icons-material'

const drawerWidth = 280

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
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
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
		marginLeft: drawerWidth,
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
	const userOptions = [
		{icon: <Login/>, name: 'Login', path: 'login'},
		{icon: <Person/>, name: 'Meus Dados', path: 'account'},
		{icon: <ShoppingCart/>, name: 'Carrinho', path: 'cart'},
		{icon: <ShoppingBasket/>, name: 'Meus Pedidos', path: 'orders'},
		{icon: <ThumbUp/>, name:'Avaliação e Comentários', path: 'avaliations'},
		{icon: <Logout/>, name: 'Encerrar Sessão', path: 'logout'}
	]
	const socials = [
		{icon: <WhatsApp/>, name: 'Whatsapp', path: 'whatsapp'},
		{icon: <Facebook/>, name: 'Facebook', path: 'facebook'},
		{icon: <Instagram/>, name: 'Instagram', path: 'instagram'}
	]

	return (
		<Box sx={{ display: 'flex'}}>
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
					<Typography variant="h6" noWrap component="div">
            Barraca
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" showMenu={showMenu}>
				<DrawerHeader>
					<IconButton onClick={toggleDrawer}>
						Opções do Menu
						{theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{userOptions.map((o) => (
						<ListItem
							key={o.name}
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon>{o.icon}</ListItemIcon>
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
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon>{s.icon}</ListItemIcon>
								<ListItemText primary={s.name}/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	)
}
