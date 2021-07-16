
function btnSubmit(){

    const getEmail = document.getElementById('email').value;
    
    if(getEmail !== ""){
        localStorage.setItem('email', getEmail);
        alert('Email cadastrado com sucesso');
    }
    else{
        alert('Para receber as ofertas, informe seu email!');
    }
    document.getElementById('email').value = '';
}

    
    


