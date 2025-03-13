const input = document.querySelectorAll('.input')
const botao = document.querySelector('.btn-enviar')

botao.addEventListener('click', function(botao){
    botao.preventDefault()

    input.forEach(function(input){
        if(input.value){
            input.classList.remove('vazio')
            input.classList.add('preenchido')
            input.nextElementSibling.classList.remove('mostrar')
        }else{
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})