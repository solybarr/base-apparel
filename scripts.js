function checkEmail() {
    var theEmail = document.getElementById("email").value;
    if ((theEmail.trim() === "") || (theEmail.trim() === "abc") ) {
        msg = "Please provide a valid email";
    }
    else {
        msg="Thank you";
    }
    //alert(msg);
    document.getElementById("error").innerHTML = msg;
}