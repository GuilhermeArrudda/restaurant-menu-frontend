const styles = {
	insideStyles: {
		width: '70%',
		height: '500px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#ffffffe9',
		marginBottom: '200px',
		marginTop: '100px',
		overflowX: 'hidden',
		borderRadius: '15px',
		'@media (max-width: 750px)': {
			marginLeft: '12%',
			paddingLeft: '30px',
			paddingRight: '30px'
		}
	},

	head: {
		width: '100%',
		fontWeight: 700,
		fontFamily: 'Raleway',
		fontSize: '25px',
		'@media (max-width: 750px)': {
			width: '10%',
		}
	},

	rowHead: {
		fontWeight: 700,
		fontFamily: 'Raleway',
		fontSize: '25px',
		'@media (max-width: 750px)': {
			fontSize: '10px'
		}
	},

	rowBody: {
		fontFamily: 'Raleway',
		fontSize: '20px',
		'@media (max-width: 750px)': {
			fontSize: '10px'
		}
	},

	rowBottom: {
		fontWeight: 700,
		fontFamily: 'Raleway',
		fontSize: '25px',
		'@media (max-width: 750px)': {
			fontSize: '10px'
		}
	},

	delete: {
		'@media (max-width: 750px)': {
			fontSize: '20px'
		}
	},

	button: {
		background: '#820928',
		color: '#fff',
		width: '150px',
		height: '30px',
		borderRadius: '20px',
		textTransform: 'none',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontStyle: 'italic',
		fontSize: '16px',
		'&:hover': { opacity: '0.8', background: '#01603b' }
	},

	displayNone: {
		'@media (max-width: 750px)': {
			display: 'none'
		}
	}
}

export default styles