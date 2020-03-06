$(function() {

    var $v_label_1 = $('.v_label_1')
    var $v_label_2 = $('.v_label_2')
    var $input_27 = $('#input_27')
    var $input_30 = $('#input_30')
    var $mensaje_1 = $('.mensaje_1')
    var $mensaje_2 = $('.mensaje_2')

    $input_27.on('click', function(e) {
        console.log('llega?')
        $v_label_1.css({
            'left': '100px',
            'right': 'auto',
            'font-size': '12px',
            'position': 'absolute',
            'top': '5px',
            'transition': 'left 1s,right 2s',


        })
        $mensaje_1.css({
            'opacity': '0'
        })
        $mensaje_2.css({
            'opacity': '1'
        })
        $v_label_2.css({
            'left': '100px',
            'right': 'auto',
            'font-size': '15px',
            'position': 'absolute',
            'top': '5px',
            'transition': 'left 1s,right 2s',

        })
    })
    $input_27.on('click', function(e) {
            $v_label_1.css({
                'left': '105px',

            })
        })
        // $input_27.key('keyup', function(e) {
        //         $mensaje_1.css({
        //             'opacity': '0'
        //         })
        //     })
        // $input_27.key('keyup', function(e) {
        //     $mensaje_1.css({
        //         'opacity': '1'
        //     })
        // })


    $input_30.on('click', function(e) {
        $v_label_1.css({
            'left': '100px',
            'right': 'auto',
            'font-size': '15px',
            'position': 'absolute',
            'top': '5px',


        })
        $mensaje_1.css({
            'opacity': '1'
        })
        $mensaje_2.css({
            'opacity': '0'
        })

        $v_label_2.css({
            'left': '105px',
            'right': 'auto',
            'font-size': '12px',
            'position': 'absolute',
            'top': '5px',
            'transition': 'left 1s,right 2s',

        })

    })
    $input_27.on('click', function(e) {
        $v_label_2.css({
            'left': '100px',

        })
    })







    var $registerForm = $('#registration')
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                name: {
                    required: true
                },
                contraseña: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'El usuario es requerido'
                },
                contraseña: {
                    required: 'Ingrese su contraseña'
                }
            }
        })
    }


})