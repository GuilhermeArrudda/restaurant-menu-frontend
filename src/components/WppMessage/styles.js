const styles = {
	insideStyles: {
		width: '800px',
		height: '500px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: '#ffffffe9',		
		paddingTop: '15px',
		paddingBottom: '15px',
		borderRadius: 5
	},

	input: {
		fontFamily: 'Raleway',
		width: '800px',
		borderRadius: 5,
		marginBottom: '10px',
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