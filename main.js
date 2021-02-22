const first_name = document.getElementById('firstName');
const mid_name = document.getElementById('middleInitial');
const last_name = document.getElementById('lastName');
const email_input = document.getElementById('email_input');
const form = document.getElementById('myForm')
const error1 = document.getElementById('errormsg_fname');
const error2 = document.getElementById('errormsg_midname');
const error3 = document.getElementById('errormsg_lname');
const error4 = document.getElementById('errormsg_email');

form.addEventListener('submit', (e) => {
	e.preventDefault();


  if(first_name.value.trim().length == 0 || first_name.value == null){
    document.getElementById('errormsg_fname').style.color = "red";
    error1.innerText = 'First Name is required';
    document.getElementById("firstName").style.borderColor="red";
  }else {
    error1.innerText = '';
    document.getElementById("firstName").style.borderColor="grey";
  }

  if(mid_name.value.trim().length == 0 || mid_name.value == null){
    document.getElementById('errormsg_midname').style.color = "red";
    error2.innerText = 'Middle Initial is required';
    document.getElementById("middleInitial").style.borderColor="red";
  }else {
    error2.innerText = '';
    document.getElementById("middleInitial").style.borderColor="grey";
  }

  if(last_name.value.trim().length == 0 || last_name.value == null){
    document.getElementById('errormsg_lname').style.color = "red";
    error3.innerText = 'Last Name is required';
    document.getElementById("lastName").style.borderColor="red"
  }else {
    error3.innerText = '';
    document.getElementById("lastName").style.borderColor="grey"
  }

 if(email_input.value.trim().length == 0 || email_input.value == null){
   document.getElementById('errormsg_email').style.color = "red";
    error4.innerText = 'Email is required';
    document.getElementById('email_input').style.borderColor="red";
  }else {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email_input.value)){
      error4.innerText = '';
      document.getElementById('email_input').style.borderColor="grey";
    }else {
      document.getElementById('errormsg_email').style.color = "red";
      error4.innerText = 'Invalid email format';
      document.getElementById('email_input').style.borderColor="red";
      document.getElementById('email_input').value = '';
    }
  }

  if (first_name.value.trim().length > 0 && first_name.value != null && mid_name.value.trim().length > 0 && mid_name.value != null && last_name.value.trim().length > 0 && last_name.value != null && email_input.value.trim().length > 0 && email_input.value != null){
    alert('Success!');
  }




});

form.addEventListener('reset', (e) => {
  document.getElementById('firstName').innerHTML = '';
  document.getElementById('middleInitial').innerHTML = '';
  document.getElementById('lastName').innerHTML = '';
  document.getElementById('email_input').innerHTML = '';
  document.getElementById('errormsg_fname').innerHTML = '';
  document.getElementById('errormsg_midname').innerHTML = '';
  document.getElementById('errormsg_lname').innerHTML = '';
  document.getElementById('errormsg_email').innerHTML = '';
  document.getElementById("firstName").style.borderColor="grey"
  document.getElementById("middleInitial").style.borderColor="grey"
  document.getElementById("lastName").style.borderColor="grey"
  document.getElementById("email_input").style.borderColor="grey"
});
