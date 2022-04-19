function logar(){
    var login = document.getElementById('emaillogin').value
    var senha = document.getElementById('passwordlogin').value

    if(login == "admin" && senha == "admin"){

        location.href = "../dashboard.html"
    }else{
        alert("Usuario e senha predefinido no código: admin")
    }
}