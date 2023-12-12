// criar constantes 

const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.inputs')
const span = document.querySelectorAll('.span-required')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//validar todos os campos antes de enviar
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    validarNome()
    validarEmail()
    validarSenha()
    senhasIguais()
})


//criar função validar nome
function validarNome(){
    if (campos[0].value.length < 5){
        verErro(0)
    }else{
        verAcerto(0)
    }
}

// criar função de erro

function verErro(index){
    campos[index].style.border = '2px solid #e63636'
    span[index].style.display = 'block'
}

function verAcerto(index){
    campos[index].style.border = '2px solid green'
    span[index].style.display = ''
}

//Função que valida e-mail

function validarEmail(){
    if(emailregex.test(campos[1].value)){
        verAcerto(1)
    }else{
        verErro(1)
    }
}

function validarSenha() {
    if(campos[2].value.length < 6){
        verErro(2)
    }else{
        verAcerto(2)
        senhasIguais()
    }
}

function senhasIguais(){
    if(campos[2].value == campos[3].value && campos[3].value.length >=6){
        verAcerto(3)
    }else{
        verErro(3)
    }
}