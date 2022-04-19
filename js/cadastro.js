

function salvar() {
    var nome = document.getElementById("nome1").value
    var email = document.getElementById("email1").value
    var password = document.getElementById("emailconfirm").value
    var passwordconfirm = document.getElementById("password1").value
    var emailconfirm = document.getElementById("password2").value

    if (nome == "" || email == "" || password == "" || passwordconfirm == ""
        || emailconfirm == "") {
        alert('Preencha todos os campos!')
    } else {
      
        if (email != emailconfirm) {
              alert('Emails não coincidem')
        }

        if (password != passwordconfirm) {
              alert('senhas não coincidem ')
        }

        if(email == emailconfirm && password == passwordconfirm){
            alert("criado com sucesso")
        }
    }
}
function limpar() {
    document.getElementById("nome1").value = ""
    document.getElementById("email1").value = ""
    document.getElementById("emailconfirm").value = ""
    document.getElementById("password1").value = ""
    document.getElementById("password2").value = ""
}