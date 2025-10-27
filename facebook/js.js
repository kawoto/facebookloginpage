
var firstname = document.form["form"]["fname"].value
var lastname = document.form["form"]["lname"].value
var email = document.form["form"]["mail"].value
var password = document.form["form"]["pass"].value
var password = document.form["form"]["gn"].value
var password = document.form["form"]["bod"].value

form.addEventListener('submit', e=>{
	if(!isValid){
	e.preventDefault();
	 }
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	var usernameValue = username.value.trim();
	var emailValue = email.value.trim();
	var passwordValue = password.value.trim();
	var message =[];
	if(document.form.firstname.value === '') {
		message.push("please fill in your first name")
	}
		else if(document.form.lastname.value === '') {
		message.push("please fill in your last name")
	}
	
	
	else if(document.form.email.value === '') {
		message.push(email, 'Email cannot be blank');
	} 
	else if (!isEmail(emailValue)) {
		message.push(email, 'Not a valid email');
	}
	
	else if(document.form.password.value === '') {
		message.push(password, 'Password cannot be blank');
	}
	else if ( ( document.form.gender[0].checked == false )
    && ( document.form.gender[1].checked == false ) )
    {
        alert ( "Please choose your Gender: Male ,Female or costume" );
        valid = false;
    }
	else if (message.length > 0) {
		alert(message.join('/n'));
		return false;
	}
	
	

function setmessageFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	var regx=/^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+,([a-z]+)(.[a-z]+)? $/
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});