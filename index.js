function showAlert() {
    let fullName=document.getElementById("full-name").value;
    let lastName=document.getElementById("last-name").value;
    let email=document.getElementById("email-address").value;
    let reason=document.getElementById("reason-input").value;
    if(fullName.length>0 && lastName.length>0 && email.length>0 && email.includes("@") && reason.length>0) {
        alert("Success");
    }
}