const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm_password')
const allId = ['username', 'email', 'password', 'confirm_password']

form.addEventListener('submit', function(e){
	// console.log(e)
	e.preventDefault()
	// add class of error and success
	checkInputs()
})

allId.forEach( function(id) {

	const eachInput = document.getElementById(`${id}`)
	// Validate Confirm Password when user is making an entry 
	// const tryArray = []
	// const ohk = tryArray.push(eachInput)
	// console.log(tryArray);
	// let mapVal = tryArray.map(function (e) {
	// 	// console.log(e);
	// 	return e
	// })
	// console.log(mapVal);
	// console.log(eachInput)

	eachInput.addEventListener('input', function(){
		// Username
		if (eachInput.value.trim() === '') {
			// console.log('Hi')
			checkError(eachInput, `${labelContent(eachInput)} cannot be empty`)
		}else {
			checkSuccess(eachInput)
		}
		// Match password characters 
		if (id === 'password' || id === 'confirm_password') {
			// console.log('hi')
			if (eachInput.value.trim().length < 7) {
				// console.log('heloo')
				checkError(eachInput, `${labelContent(eachInput)} must be more than 8 characters`)
			}
		}
			
		// validate email
		if (id === 'email') {
			// console.log('hi')
			if (!validEmail(eachInput.value.trim())) {
				// console.log('heloo')
				checkError(eachInput, `${labelContent(eachInput)} Invalid email`)
			}
		}	
	})
});


// Functions
function checkInputs(){
	const usernameValue = username.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()
	const confirm_passwordValue = confirm_password.value.trim()
	
	// Username
	if (usernameValue === '') {
		// console.log('Hi')
		checkError(username, `${labelContent(username)} cannot be empty`)
	}else {
		checkSuccess(username)
	}

	// Email
	if (emailValue === '') {
		// console.log('Hi')
		checkError(email, `${labelContent(email)} cannot be empty`)
	}
	else if (!validEmail(emailValue)) {
		checkError(email, `invalid ${labelContent(email)}`)
	}
	else {
		checkSuccess(email)
	}

	// Password
	if (passwordValue === '') {
		// console.log('Hi')
		checkError(password, `${labelContent(password)} cannot be empty`)
	}//else if (!passwordValue.length > 7) {
	// 	checkError(password, `${labelContent(password)} field must be atleast 8 characters`)
	// }
	else {
		checkSuccess(password)
	}

	// Confirm password
	if (confirm_passwordValue === '') {
		checkError(confirm_password, `${labelContent(confirm_password)} cannot be empty`)
	}//else if (!passwordValue <= 8) {
	// 	checkError(password, `${labelContent(password)} field must be atleast 8 characters`)
	// }
	else if (confirm_passwordValue !== passwordValue) {
		checkError(confirm_password, `${labelContent(password)} do not match`)
	}
	else{
		checkSuccess(confirm_password)
	}
}

function checkError(inputClass, errorMessage){
	// className is used in place of classList cos it is overriden
	inputClass.parentElement.className = 'form-control error'
	// console.log(username.nextElementSibling.nextElementSibling.nextElementSibling)
	inputClass.nextElementSibling.nextElementSibling.nextElementSibling.textContent = errorMessage 
}
function checkSuccess(inputClass){
	inputClass.parentElement.className = 'form-control success'
}
function validEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
function labelContent(label){
	return label.previousElementSibling.textContent
}