function checkEmail() {
    var theEmail = document.getElementById("email").value;

    var matchTest = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theEmail));

    if ((theEmail.trim() === "") || !matchTest ) {
        msg = "Please provide a valid email";
        document.getElementById("email").style.backgroundImage = "url('images/icon-error.svg')";
        document.getElementById("email").style.backgroundRepeat = "no-repeat";
        document.getElementById("email").style.backgroundPosition = "83%";
        document.getElementById("email").style.border = "0.1em solid #f96262";      
    }
    else {
        document.getElementById("email").style.background= "none";
        msg="Thank you";
    }
    //alert(msg);
    document.getElementById("error").innerHTML = msg;
    return;
}