function validate() {
    var flag = true;
    //first name
    if (document.theForm.firstName.value == "") {
        document.theForm.firstName.focus();
        document.theForm.firstName.setAttribute("class", "form-control is-invalid");
        document.getElementById("firstNameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("firstNameValidate").innerHTML = "Sorry, that first name is terrible. Try another?";
        flag = false;
    }
    else {
        document.theForm.firstName.setAttribute("class", "form-control is-valid");
        document.getElementById("firstNameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("firstNameValidate").innerHTML = "Successful!";
    }
    //last name
    if (document.theForm.lastName.value == "") {
        document.theForm.lastName.focus();
        document.theForm.lastName.setAttribute("class", "form-control is-invalid");
        document.getElementById("lastNameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("lastNameValidate").innerHTML = "Sorry, ive never heard of 'blank'. Try a little harder?";
        flag = false;
    }
    else {
        document.theForm.lastName.setAttribute("class", "form-control is-valid");
        document.getElementById("lastNameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("lastNameValidate").innerHTML = "Successful!";
    }
    //email
    if (document.theForm.email.value == "") {
        document.theForm.email.focus();
        document.theForm.email.setAttribute("class", "form-control is-invalid");
        document.getElementById("emailNameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("emailNameValidate").innerHTML = "Do i even have to say why...?";
        flag = false;
    } else {
        document.theForm.email.setAttribute("class", "form-control is-valid");
        document.getElementById("emailNameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("emailNameValidate").innerHTML = "Successful!";
    }
    //phone number
    if (document.theForm.phone.value.length != 10)
    {
        document.theForm.phone.focus();
        document.theForm.phone.setAttribute("class", "form-control is-invalid");
        document.getElementById("phoneNameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("phoneNameValidate").innerHTML = "I t S  j U s T  1 0  D i G i T s";
        flag = false;
    } else {
        document.theForm.phone.setAttribute("class", "form-control is-valid");
        document.getElementById("phoneNameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("phoneNameValidate").innerHTML = "Successful!";
    }
    //password 1
    if (document.theForm.pass.value == "") {
        document.theForm.pass.focus();
        document.theForm.pass.setAttribute("class", "form-control is-invalid");
        document.getElementById("passNameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("passNameValidate").innerHTML = "Hey everyone there password is !";
        flag = false;
    } else {
        document.theForm.pass.setAttribute("class", "form-control is-valid");
        document.getElementById("passNameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("passNameValidate").innerHTML = "Look at you go!";
    }
    //password 2
    if (document.theForm.pass2.value != document.theForm.pass.value || document.theForm.pass2.value == "") {
        document.theForm.pass2.focus();
        document.theForm.pass2.setAttribute("class", "form-control is-invalid");
        document.getElementById("pass2NameValidate").setAttribute("class", "invalid-feedback");
        document.getElementById("pass2NameValidate").innerHTML = "holding your hand at this point";
        flag = false;
    } else {
        document.theForm.pass2.setAttribute("class", "form-control is-valid");
        document.getElementById("pass2NameValidate").setAttribute("class", "valid-feedback");
        document.getElementById("pass2NameValidate").innerHTML = "Miracles DO happen!";
    }
        return (flag);
}
$(document).ready(function () {
    $("#pop1Background").slideDown(2000);
});