function isValidEmail(email, password){
    var regEmail = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/gmi;
    if(email.lenght == 0 || password.lenght == 0){
        alert("Preencha os campos abaixo corretamente e tente novamente")
    }else{
        email.replace(regEmail, function(match){
            if(match === email){
                alert('Email válido');
            }else{      
                alert('Email inválido');    
            }
        });
    }
   
}
const email = document.querySelector("#email");
const password = document.querySelectorry("#password");
