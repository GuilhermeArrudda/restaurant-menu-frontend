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
		'@media (max-width: 750px)': {
			width: '300px',
			height: '25px',
			fontSize: '30px'
		}

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
		'&:hover': { opacity: '0.8', background: '#01603b' },
		'@media (max-width: 750px)': {
			width: '100px',
			height: '40px',
			fontSize: '12px'
		}
	},

	text: {
		width: '500px',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontSize: '25px',
		color: '#fff',
		'@media (max-width: 750px)': {
			width: '300px'
		}

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
		gap: '50px',
		'@media (max-width: 750px)': {
			gap: '25px'
		}
	},

	background: {
		alignSelf: 'start',
		marginLeft: '10%',
		width: '500px',
		height: '100%',
		paddingLeft: '15px',
		paddingRight: '15px',
		paddingTop: '200px',
		paddingBottom: '340px',
		background: '#8209277f',
		'@media (max-width: 750px)': {
			width: '300px',
			alignSelf: 'center',
		}
	}
}

export default styles