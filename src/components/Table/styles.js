const styles = {
	insideStyles: {
		width: '70vw',
		height: '500px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#ffffffe9',
		marginBottom: '200px'
		
	},

	rowHead: {
		fontWeight: 700,
		fontFamily: 'Raleway',
		fontSize: 25
	},

	rowBody: {
		fontFamily: 'Raleway',
		fontSize: 20
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
}

export default styles