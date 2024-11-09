let form = document.getElementById('form');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confim-password');



// check required feild
function checkRequiredField(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ""){
            showError(input , `${getFieldName(input)} Cannot Be Empty.`);
        }else{
            showSuccess(input);
        }
    });
}


// show error
function showError(input , massage){
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector('small').innerHTML = massage;
}

// show success
function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Get The Field Name
function getFieldName(input){
    return input.id[0].toUpperCase() + input.id.slice(1);
}

// check length
function checkLength(input , min , max){
    if(input.value.length < min){
        showError(input , `${getFieldName(input)} must be more then ${min} characters`);
    }else if(input.value.length > max ){
        showError(input , `${getFieldName(input)} must be less then ${max} characters`);
    }else{
        showSuccess(input);
    }
}
// validate email
function checkEmail(input){
    const emailCheckReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailCheckReg.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid')
    }
}

// password match check
function passwordmatchCheck(input1,input2){
    if(input1.value !== input2.value){
        showError(input2 , 'Password Do Not Match ');
    }

}
// submit btn add event listener
form.addEventListener('submit' , function(event){

    event.preventDefault(); // stop reloading

    // check required feild
    checkRequiredField([userName,email,password,confirmPassword]);

    // check input lenth
    checkLength(userName, 3, 8);
    checkLength(password, 6 , 25);

    // password match check
    passwordmatchCheck(password,confirmPassword);

    // email check
    checkEmail(email);
});

