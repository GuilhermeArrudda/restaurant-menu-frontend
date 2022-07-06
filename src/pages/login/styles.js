import image from '../../assets/images/image.png'
const styles = {
	page: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '20px',
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		pt: '200px'
	},
	boxForm: {
		width: '660px',
		padding: '30px 20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginLeft: '5%',
		background: '#fff',
		boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
		borderRadius: '15px',
		'@media (max-width: 750px)': {
			width: '300px',
			marginLeft: '12%'
		}
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		width: '100%',
		background: '#fff',
		position: 'relative',
	},
	title: {
		fontFamily: 'Raleway',
		fontWeight: '700',
		fontSize: '30px'
	},
	text: {
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontSize: '16px'
	},
	input: {
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '24px',
		color: '#000',
		background: '#fff',
		borderRadius: '10px',
	},
	loadingButton: {
		background: '#e8f0fe',
		height: '40px',
		borderRadius: '10px',
		border: '0',
		color: '#000',
		fontFamily: 'Raleway',
		'&:hover': { opacity: '0.8', background: '#e8f0fe' }
	},
	button: {
		textTransform: 'none',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontStyle: 'italic',
		fontSize: '14px',
		'&:hover': { opacity: '0.8', background: '#e8f0fe' }
	},
}

export{
	styles
} 