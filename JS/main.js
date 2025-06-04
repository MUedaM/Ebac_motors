$(document).ready(function(){

    $('#carrossel-imagens').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0 0000 - 0000', {
        placeholder: '( _ _ )   _   _ _ _ _ -- _ _ _ _'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Este campo é obrigatorio.',
            telefone: 'Este campo é obrigatorio.',
            mensagem: 'Esta campo é obrigaotiro.'
        },
        submitHandles: function() {
            console.log(form)
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $('.lista-veiculo button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})