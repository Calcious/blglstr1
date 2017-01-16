/**
 * Created by Calcious on 1/12/17.
 */
var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//add event listener on the form
//when the form submits, check if those values match
//event.preventDefault to prevent the form from being submitted if they don't match