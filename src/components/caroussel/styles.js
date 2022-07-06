const styles = {
	carousel: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'start',
	},

	card: {
		width: '300px', 
		height: '510px',
		borderRadius: '20px', 
		marginLeft: '100px',
		marginTop: '20px',
		'@media (max-width: 750px)': {
			marginTop: '20px',
			marginLeft: '0px'
		}
	},
	
	paper: {
		width: '100%',
		background: '#00007d',
		height: '690px',
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
		marginRight: '20px',
		padding: '20px',
		'&:hover': { opacity: '0.8', background: '#01603b' }
	},
}

export default styles