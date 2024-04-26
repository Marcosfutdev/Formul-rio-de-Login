
const entrar = () =>{
    let nome = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#senha");
    if(nome.value.length > 0 && email.value.length > 0 && password.value.length > 0){
        alert("Cadastrando");
        alert("Cadastrado");
        console.log(`Você foi cadastrado como: Name: ${nome.value}, Email:${email.value}, Senha: ${password.value}`);
    }
    else
    {
        if(nome.value.length === 0){
            document.querySelector("#falta_name").innerHTML = 'Preencha este campo';
        }
        if(email.value.length === 0){
            document.querySelector("#falta_email").innerHTML ='Preencha este campo';
        }
        if(senha.value.length === 0){
            document.querySelector("#falta_senha").innerHTML = 'Preencha este campo';
        }
    }
}