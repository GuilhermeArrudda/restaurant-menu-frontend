const styles = {
	carousel: {
		width: '100%',
		height: '650px',
	},
	
	paper: {
		width: '100%',
		background: '#00007d',
		height: '650px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	button: {
		background: '#820928',
		color: '#fff',
		width: '50px',
		height: '50px',
		borderRadius: '20px',
		textTransform: 'none',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontStyle: 'italic',
		fontSize: '16px',
		alignSelf: 'start',
		'&:hover': { opacity: '0.8', background: '#01603b' }
	},
}

export default styles