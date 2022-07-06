const styles = {
	cardapio: {
		alignSelf: 'center',
		marginTop: '25px',
		background: '#ffffffe9',
		width: '500px',
		height: '550px',
		borderRadius: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'@media (max-width: 750px)': {
			width: '300px',
			marginLeft: '15%'
		} 

	},

	buttonRed: {
		background: '#fff',
		width: '10px',
		height: '50px',
		borderRadius: '10px',
		boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
		'&:hover': { background: '#820928' },
		'@media (max-width: 750px)': {
			width: '25px',
			height: '50px'
		} 
	},

	buttonGreen: {
		background: '#fff',
		width: '50px',
		height: '50px',
		borderRadius: '10px',
		boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
		'&:hover': { background: '#01603b' }
	},

	wrapper: {
		width: '20%',
		display: 'flex', 
		flexDirection: 'column', 
		gap: '15px', 
		justifyContent: 'center', 
		alignItems: 'center',
	},

	box: {
		height: '200px', 
		width: '100%', 
		background: '#ffffffe9', 
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center', 
		gap: '20px',
		paddingLeft: '10%',
		paddingRight: '5%',
		'@media (max-width: 500px)': {
			paddingLeft: '15%',
			paddingRight: '2%'
		} 
	},

	container: {
		height: '100%', 
		width: '100%',
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'end', 
		justifyContent: 'center', 
	},

	title: {
		fontWeight: '500', 
		fontSize: '20px',
		'@media (max-width: 750px)': {
			display: 'none',
		} 
	}
}

export default styles