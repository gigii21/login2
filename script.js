const loginform = document.getElementById("login-form");
const loginButtom = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButtom.addEventListener("click", (e)=>{
    e.preventDefault();
    let username = loginform.username.value;
    let password = loginform.password.value;
    if(username ==="user" && password ==="user"){

        alert("Login conectado com sucesso");
        location.reload();
        window.location.href="parallax/index.html";

    }else{
        loginErrorMsg.style.opacity = 1;
    }
});