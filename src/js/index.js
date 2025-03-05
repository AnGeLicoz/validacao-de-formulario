const input = document.querySelectorAll('.input')

const campo = document.querySelectorAll('.campo-obrigatorio')

const botao = document.querySelector('.enviar')

function validar() {
    if (input[0].classList.contains('vazio')){
        campo[0].classList.add('ativado')
    } else {
        campo[0].classList.remove('ativado')
    }

    if (input[1].classList.contains('vazio')){
        campo[1].classList.add('ativado')
    } else {
        campo[1].classList.remove('ativado')
    }

    if (input[2].classList.contains('vazio')){
        campo[2].classList.add('ativado')
    } else {
        campo[2].classList.remove('ativado')
    }

    if (input[3].classList.contains('vazio')){
        campo[3].classList.add('ativado')
    } else {
        campo[3].classList.remove('ativado')
    }
}

botao.addEventListener('click', function () {
    input.forEach(
        function (input) {
            if (input.value !== '') {
                input.classList.remove('vazio');
                input.classList.add('preenchido');
            } else {
                input.classList.remove('preenchido');
                input.classList.add('vazio');
            }
        }
    )
    validar()
}
)