const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const checkSessiom = localStorage.getItem("sessiom");

checkLogget();

// LOGAR NO SISTEMA

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-imput").value;
    const password = document.getElementById("password-imput").value;
    const sessiom = document.getElementById("sessiom-check").checked;

    const account = getAcount(email);

        if(!account){
            alert("Ops! verifique o usuário ou a senha.");
            return;
        }

        if(account){
            if(account.password !== password){
            alert("Ops! verifique o usuário ou a senha.");
            return;
            }

            saveSessiom(email, sessiom);

            window.location.href = "home.html";
        }    
});

//CRIAR CONTA

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email-create-imput").value;
    const password = document.getElementById("password-create-imput").value;
    
    if(email.length <= 5){
        alert("Preencha o campo com e-mail valido");
        return;
    }

    if(password.length < 6){
        alert("preencha a senha com no minimo 6 dígitos");
        return;
    }

    saveAcount({
        login:email,
        password:password,
        transaction: []
    })

    myModal.hide();

    alert("Conta criada com sucesso");
});

function checkLogget(){
    if(checkSessiom){
        sessionStorage.setItem("logged", checkSessiom);
        logged = checkSessiom;
    }

    if(logged){
        saveSessiom(logged, checkSessiom);
        window.location.href = "home.html";
    }
}

function saveAcount(data){
    localStorage.setItem(data.login, JSON.stringify(data));     //disco/armazenamento da aplicação
}

function saveSessiom(data, saveSessiom) {
    if(saveSessiom){
        localStorage.setItem("sessiom", data);
    }

    sessionStorage.setItem("logget",data);
}

function getAcount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }
    return"";
}