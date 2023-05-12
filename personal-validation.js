// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  */
/*
const form = document.querySelector('#enquiry-form');
const userNameInput = document.querySelector('#FirstName');



form.addEventListener('sumbit', e => {
    e.preventDefault();
    validateInputs();
})

const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classListadd('success');
};
const validateInputs = () => {
    const userNameInput = FirstName.value.trim();
    if (userNameInput === '') {
        setError(FirstName, 'First Name is required');
    }
    else {
        setSuccess(FirstName);
    }
}


*/











var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var phoneError =document.getElementById('phone-error');


function validateName(){
    var name=document.getElementById('FirstName').value;
    if(name.length==0){
        nameError.innerHTML ='Name is required';
    return false;
    }
    
 
}


function validateEmail(){
    var email=document.getElementById('Email').value;
    if(!email.match(/^[A-Za]\._\-[0-9]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML ='enter valid email';
    return false;
    }
}
function validatephone(){
    var phone=document.getElementById('phoneNo').value;
    if(!phone.length==10 && !phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML ='enter valid phone number';
    return false;
    }
    

}
function valiadteForm(){
    if(validatephone()||validateEmail()||validateName()){
        return false;
    }
}
