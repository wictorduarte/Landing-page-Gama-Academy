
//Limpar o localStorage sempre que a página for fechada ou atualizada

/*window.onbeforeunload = function(){
    localStorage.clear();
}
*/
function btnSubmit(){

    const getEmail = document.getElementById('email').value;
    
    if(getEmail !== ""){
        localStorage.setItem('email', getEmail);
        alert('Email cadastrado com sucesso');
    }
    else{
        alert('Para receber as ofertas, informe seu email!');
    }
    //altera o valor do email para vazio após atualização ou fechamento da página
    //document.getElementById('email').value = '';
}

    
    


