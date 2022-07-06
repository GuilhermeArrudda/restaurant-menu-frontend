const styles = {
	page: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		overflowX: 'hidden'
	},
	parallax: {
		backgroundImage: 'url(https://urbanarts.vteximg.com.br/arquivos/ids/4791689/quadro-barra-da-tijuca--calcadao-2.jpg?v=637202168330200000)',
		width: '100%',
		height: '100%',
		paddingBottom: '52px',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'space-around',
		'@media (max-width: 750px)': {
			paddingBottom: '70px'
		}
	}
}

export default styles