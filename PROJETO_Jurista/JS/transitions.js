import $ from 'jquery-3.6.0.min.js'

$(reSizeHeader(){
    var el = $('header.resize')
    var prop = $('header.resize').height()
    cont valor1 = 'calc(100% + 20px)'
    const valor2 = 'calc(30% + 20px)'
    if (prop = valor1){
        $('.resize').css('height','calc(50% + 20px)')
    } if (prop = valor2){
        $('.resize').css('height','calc(100% + 20px)')
    }
})