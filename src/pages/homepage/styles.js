const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '20px',
		paddingBottom: '15px',
		paddingTop: '100px',
		'@media (max-width: 600px)': {
			paddingTop: '70px'
		}
	},
	pageBlackout: {
		height: '100vh',
		backgroundColor: '#0000007d',
		Zindex: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '20px',
		paddingBottom: '15px',
		paddingTop: '100px',
		'@@media (max-width: 600px)':{
			paddingTop: '70px'
		}
	}
}

export default styles