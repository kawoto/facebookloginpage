const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('mail');
const password = document.getElementById('pass');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const formValue = username.value.trim();
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	/*
	if(formValue === '') {
		setErrorFor(formname, 'form cannot be blank');
	} else {
		setSuccessFor(form);
	}
	if(fnameValue == '') {
		setErrorFor(fname, 'first name cannot be blank');
	}else if(!isfaname(fnameValue)){
     setErrorFor(fname 'not valid name')
	 else {
		setSuccessFor(fname);
	}
		if(lnameValue == '') {
		setErrorFor(lname, 'last name cannot be blank');
	}else if(!isname(lnameValue)){
     setErrorFor(lname 'not valid name')
	}
	 else {
		setSuccessFor(lname);
	}
	
	if(emailValue == '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue == '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(!ispass(passwordValue)){
     setErrorFor(password 'not valid name')
	 else {
		setSuccessFor(password);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isname(lname){
	return/^[a-zA-Z0-9]$/.test(lname);
}

function isfaname(fname){
	return/^[a-zA-Z0-9]$/.test(fname)
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


const create-account = document.querySelector('.create-account');
const close_btn = document.querySelector('.close');
const container = document.querySelector('.container');

create-account.addEventListener('click', () => {
    container.classList.toggle('visible')
});

close.addEventListener('click', () => {
	container.classList.remove('visible')
});