import Swal from 'sweetalert2'

function errorModal (text, icon) {
	Swal.fire({
		icon: icon || 'error',
		title: 'Fail',
		width: '200px',
		height: '200px',
		html: text
	})
}

function successModal(text, icon) {
	Swal.fire({
		icon: icon || 'success',
		text,
		width: '200px',
		height: '200px',
		timer: 1500
	})
}


export {
	errorModal,
	successModal,
}