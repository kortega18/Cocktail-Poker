// Login Form
let loginForm = document.getElementsById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userCode = document.getElementsByName("pswd");
    if(userCode.values == "host000"){
        window.location = "rsvp.html";
    }
    else {
       console.log("Error"); 
    }
});