const styles = {
	title: {
		color: '#fff',
		width: '500px',
		height: '50px',
		borderRadius: '20px',
		textTransform: 'none',
		fontFamily: 'Raleway',
		fontWeight: '700',
		fontSize: '50px',
		marginBottom: '60px',
	},

	button: {
		background: '#820928',
		color: '#fff',
		width: '120px',
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

	text: {
		width: '500px',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontSize: '25px',
		color: '#fff',

	},

	underlineGreen: {
		textDecorationLine: 'underline',
		textDecorationColor: '#01603b',
		textDecorationThickness: '3px',
	},

	underlineRed: {
		textDecorationLine: 'underline',
		textDecorationColor: '#820928',
		textDecorationThickness: '3px',
	},

	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',
		height: '1000px',
		gap: '50px',
		transform: 'translate(-60%,-40%)',
		width: '500px',
		marginLeft: '280px',
		paddingLeft: '15px',
		paddingTop: '300px',
		position: 'relative',
		top: 500,
	},

	background: {
		position: 'relative',
		transform: 'translate(-60%,-40%)',
		width: '500px',
		height: '1650px',
		paddingLeft: '15px',
		paddingTop: '300px',
		background: '#8209277f'
	}
}

export default styles