function showAlert() {
    let fullName=document.getElementById("full-name").value;
    let lastName=document.getElementById("last-name").value;
    let email=document.getElementById("email-address").value;
    if(fullName.length>0 && lastName.length>0 && email.length>0 && email.includes("@")) {
        alert("Success");
    }
}
