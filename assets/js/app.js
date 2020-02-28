$(function() {

    var $v_label = $('.v_label')
    var $input_27 = $('#input_27')
    var $input_30 = $('#input_30')




    $input_27.on('click', function(e) {
        console.log('llega?')
        $v_label.css({
            'left': '100px',
            'right': 'auto',
            'position': 'absolute',
            'top': '5px',
            'transition': 'left 2s,right 2s'

        })
    })
    $input_27.on('click', function(e) {
        $v_label.css({
            'left': '105px',
            'right': '310px'



        })
    })


})