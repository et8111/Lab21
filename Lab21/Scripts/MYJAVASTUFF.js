function validate() {

    if (document.theForm.firstName.value == "") {
        alert("Please provide your first name!");
        document.theForm.firstName.focus();
        return false;
    }

    if (document.theForm.lastName.value == "") {
        alert("Please provide your last name!");
        document.theForm.lastName.focus();
        return false;
    }

    if (document.theForm.email.value == "") {
        alert("Please provide your Email!");
        document.theForm.email.focus();
        return false;
    }
    var tempPhone = document.theForm.phone.value;
    if (tempPhone.length != 10)
    {
        alert("Phone# sucks");
        document.theForm.phone.focus();
        return false;
    }

    if (document.theForm.pass.value == "") {
        alert("need that pass...");
        document.theForm.pass.focus();
        return false;
    }
    if (document.theForm.pass2.value != document.theForm.pass.value) {
        alert("Passwords dont match");
        document.theForm.pass2.focus();
        return false;
    }

    return (true);
}

function test() {
    document.getElementsByTagName("h2")[0].innerHTML = "test";
}