const styles = {
	cardapio: {
		background: 'white',
		width: '100%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)'
	},

	buttonRed: {
		background: '#fff',
		width: '50px',
		height: '50px',
		borderRadius: '10px',
		boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
		'&:hover': { background: '#820928' }
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
		width: '200px', 
		display: 'flex', 
		flexDirection: 'column', 
		gap: '30px', 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	box: {
		height: 340, 
		width: '100%', 
		background: '#bcf0ff', 
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center', 
		gap: '20px'
	},

	container: {
		height: 990, 
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'end', 
		justifyContent: 'center', 
		position: 'relative', 
		width: '100%' 
	},

	title: {
		fontWeight: '500', 
		fontSize: '20px'
	}
}

export default styles