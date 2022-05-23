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
		timer: 1500
	})
}

function warningModal(text, icon, cancelButtonText, confirmButtonText) {
	Swal.fire({
		icon: icon || 'warning',
		text,
		width: '300px',
		showCancelButton: true,
		cancelButtonText,
		cancelButtonColor: '#d33',
		showConfirmButton: true,
		confirmButtonText,
		confirmButtonColor: '#093800'
		
	})
}


export {
	errorModal,
	successModal,
	warningModal
}