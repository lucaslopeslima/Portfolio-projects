var lista = []
var ns 


function sortear(){
    let np = 75
    ns = Math.round(Math.random() * np)
    if (lista.indexOf(ns) != -1 || ns == 0){
        sortear()
    }
    document.getElementById('d').innerHTML = ns
    lista.push(ns)
console.log(ns)

} 

var cartela = []
 
function criarCartela(){
    while (cartela.length < 24){
        let numero = Math.round(Math.random() * 75)
            if (cartela.indexOf(numero) != -1 || numero == 0){
                criarCartela()
            } 
        cartela.push(numero)
    }
    
}





var espaco1 = cartela[0]
var espaco2 = cartela[1]
var espaco3 = cartela[2]
var espaco4 = cartela[3]
var espaco5 = cartela[4]
var espaco6 = cartela[5]
var espaco7 = cartela[6]
var espaco8 = cartela[7]
var espaco9 = cartela[8]
var espaco10 = cartela[9]
var espaco11 = cartela[10]
var espaco12 = cartela[11]
var espaco13 = ''
var espaco14 = cartela[12]
var espaco15 = cartela[13]
var espaco16 = cartela[14]
var espaco17 = cartela[15]
var espaco18 = cartela[16]
var espaco19 = cartela[17]
var espaco20 = cartela[18]
var espaco21 = cartela[19]
var espaco22 = cartela[20]
var espaco23 = cartela[21]
var espaco24 = cartela[22]
var espaco25 = cartela[23]

document.querySelector('.espaco0').innerHTML = espaco1
document.querySelector('.espaco1').innerHTML = espaco2
document.querySelector('.espaco2').innerHTML = espaco3
document.querySelector('.espaco3').innerHTML = espaco4
document.querySelector('.espaco4').innerHTML = espaco5
document.querySelector('.espaco5').innerHTML = espaco6
document.querySelector('.espaco6').innerHTML = espaco7
document.querySelector('.espaco7').innerHTML = espaco8
document.querySelector('.espaco8').innerHTML = espaco9
document.querySelector('.espaco9').innerHTML = espaco10
document.querySelector('.espaco10').innerHTML = espaco11
document.querySelector('.espaco11').innerHTML = espaco12
document.querySelector('.espaco12').innerHTML = espaco13
document.querySelector('.espaco13').innerHTML = espaco14
document.querySelector('.espaco14').innerHTML = espaco15
document.querySelector('.espaco15').innerHTML = espaco16
document.querySelector('.espaco16').innerHTML = espaco17
document.querySelector('.espaco17').innerHTML = espaco18
document.querySelector('.espaco18').innerHTML = espaco19
document.querySelector('.espaco19').innerHTML = espaco20
document.querySelector('.espaco20').innerHTML = espaco21
document.querySelector('.espaco21').innerHTML = espaco22
document.querySelector('.espaco22').innerHTML = espaco23
document.querySelector('.espaco23').innerHTML = espaco24
document.querySelector('.espaco24').innerHTML = espaco25


 

function bg1(){
    if (document.querySelector('.espaco0').style.background != 'red'){
    document.querySelector('.espaco0').style.background = 'red'
    } else {
        document.querySelector('.espaco0').style.background = '#eae5f0'
    }
}
function bg2(){
    if (document.querySelector('.espaco1').style.background != 'red'){
        document.querySelector('.espaco1').style.background = 'red'
        } else {
            document.querySelector('.espaco1').style.background = '#eae5f0'
        }
}
function bg3(){
    if (document.querySelector('.espaco2').style.background != 'red'){
        document.querySelector('.espaco2').style.background = 'red'
        } else {
            document.querySelector('.espaco2').style.background = '#eae5f0'
        }
}
function bg4(){
    if (document.querySelector('.espaco3').style.background != 'red'){
        document.querySelector('.espaco3').style.background = 'red'
        } else {
            document.querySelector('.espaco3').style.background = '#eae5f0'
        }
}
function bg5(){
    if (document.querySelector('.espaco4').style.background != 'red'){
        document.querySelector('.espaco4').style.background = 'red'
        } else {
            document.querySelector('.espaco4').style.background = '#eae5f0'
        }
}
function bg6(){
    if (document.querySelector('.espaco5').style.background != 'red'){
        document.querySelector('.espaco5').style.background = 'red'
        } else {
            document.querySelector('.espaco5').style.background = '#eae5f0'
        }
}
function bg7(){
    if (document.querySelector('.espaco6').style.background != 'red'){
        document.querySelector('.espaco6').style.background = 'red'
        } else {
            document.querySelector('.espaco6').style.background = '#eae5f0'
        }
}
function bg8(){
    if (document.querySelector('.espaco7').style.background != 'red'){
        document.querySelector('.espaco7').style.background = 'red'
        } else {
            document.querySelector('.espaco7').style.background = '#eae5f0'
        }
}
function bg9(){
    if (document.querySelector('.espaco8').style.background != 'red'){
        document.querySelector('.espaco8').style.background = 'red'
        } else {
            document.querySelector('.espaco8').style.background = '#eae5f0'
        }
}
function bg10(){
    if (document.querySelector('.espaco9').style.background != 'red'){
        document.querySelector('.espaco9').style.background = 'red'
        } else {
            document.querySelector('.espaco9').style.background = '#eae5f0'
        }
}
function bg11(){
    if (document.querySelector('.espaco10').style.background != 'red'){
        document.querySelector('.espaco10').style.background = 'red'
        } else {
            document.querySelector('.espaco10').style.background = '#eae5f0'
        }
}
function bg12(){
    if (document.querySelector('.espaco11').style.background != 'red'){
        document.querySelector('.espaco11').style.background = 'red'
        } else {
            document.querySelector('.espaco11').style.background = '#eae5f0'
        }
}
/* function bg13(){
    document.querySelector('.espaco12').style.background = 'red'
} */
function bg14(){
    if (document.querySelector('.espaco13').style.background != 'red'){
        document.querySelector('.espaco13').style.background = 'red'
        } else {
            document.querySelector('.espaco13').style.background = '#eae5f0'
        }
}
function bg15(){
    if (document.querySelector('.espaco14').style.background != 'red'){
        document.querySelector('.espaco14').style.background = 'red'
        } else {
            document.querySelector('.espaco14').style.background = '#eae5f0'
        }
}
function bg16(){
    if (document.querySelector('.espaco15').style.background != 'red'){
        document.querySelector('.espaco15').style.background = 'red'
        } else {
            document.querySelector('.espaco15').style.background = '#eae5f0'
        }
}
function bg17(){
    if (document.querySelector('.espaco16').style.background != 'red'){
        document.querySelector('.espaco16').style.background = 'red'
        } else {
            document.querySelector('.espaco16').style.background = '#eae5f0'
        }
}
function bg18(){
    if (document.querySelector('.espaco17').style.background != 'red'){
        document.querySelector('.espaco17').style.background = 'red'
        } else {
            document.querySelector('.espaco17').style.background = '#eae5f0'
        }
}
function bg19(){
    if (document.querySelector('.espaco18').style.background != 'red'){
        document.querySelector('.espaco18').style.background = 'red'
        } else {
            document.querySelector('.espaco18').style.background = '#eae5f0'
        }
}
function bg20(){
    if (document.querySelector('.espaco19').style.background != 'red'){
        document.querySelector('.espaco19').style.background = 'red'
        } else {
            document.querySelector('.espaco19').style.background = '#eae5f0'
        }
}
function bg21(){
    if (document.querySelector('.espaco20').style.background != 'red'){
        document.querySelector('.espaco20').style.background = 'red'
        } else {
            document.querySelector('.espaco20').style.background = '#eae5f0'
        }
}
function bg22(){
    if (document.querySelector('.espaco21').style.background != 'red'){
        document.querySelector('.espaco21').style.background = 'red'
        } else {
            document.querySelector('.espaco21').style.background = '#eae5f0'
        }
}
function bg23(){
    if (document.querySelector('.espaco22').style.background != 'red'){
        document.querySelector('.espaco22').style.background = 'red'
        } else {
            document.querySelector('.espaco22').style.background = '#eae5f0'
        }
}
function bg24(){
    if (document.querySelector('.espaco23').style.background != 'red'){
        document.querySelector('.espaco23').style.background = 'red'
        } else {
            document.querySelector('.espaco23').style.background = '#eae5f0'
        }
}
function bg25(){
    if (document.querySelector('.espaco24').style.background != 'red'){
        document.querySelector('.espaco24').style.background = 'red'
        } else {
            document.querySelector('.espaco24').style.background = '#eae5f0'
        }
}
 
