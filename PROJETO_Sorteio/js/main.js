var lista = []
var ns 


/* function sortear(){
    let np = 75
    ns = Math.round(Math.random() * np)
    if (lista.indexOf(ns) != -1 || ns == 0){
        sortear()
    }
    document.getElementById('d').innerHTML = ns
    lista.push(ns)
console.log(ns)

}  */
function sortear(){
    let np = 75
    ns = Math.round(Math.random() * np)
    if (lista.indexOf(ns) != -1 || ns == 0){
        sortear()
    } else if (ns >= 1 && ns <=15){
    document.getElementById('d').innerHTML = `B - ${ns}`
    lista.push(ns)
    } else if (ns >= 16 && ns <=30){
        document.getElementById('d').innerHTML = `I - ${ns}`
        lista.push(ns)
    } else if (ns >= 31 && ns <=45){
        document.getElementById('d').innerHTML = `N - ${ns}`
        lista.push(ns)
    } else if (ns >= 46 && ns <=60){
        document.getElementById('d').innerHTML = `G - ${ns}`
        lista.push(ns)
    } else if (ns >= 61 && ns <=75){
        document.getElementById('d').innerHTML = `O - ${ns}`
        lista.push(ns)
    }
console.log(ns)

} 

/* var cartela = []
 
function criarCartela(){
    while (cartela.length < 24){
        let numero = Math.round(Math.random() * 75)
            if (cartela.indexOf(numero) != -1 || numero == 0){
                criarCartela()
            } 
        cartela.push(numero)
    }
    
} */



Math.round(Math.random() * (1 - 15) + 16)



var cartelaB = []
var cartelaI = []
var cartelaN = []
var cartelaG = []
var cartelaO = []
 
function criarCartelaB(){
    while (cartelaB.length < 5){
        let numero = Math.round(Math.random() * (15 - 1) + 1)
            if (cartelaB.indexOf(numero) != -1 || numero == 0){
                criarCartelaB()
            } 
        cartelaB.push(numero)
    }
    
}
function criarCartelaI(){
    while (cartelaI.length < 5){
        let numero = Math.round(Math.random() * (30 - 16) + 16)
            if (cartelaI.indexOf(numero) != -1 || numero == 0){
                criarCartelaI()
            } 
        cartelaI.push(numero)
    }
    
}
function criarCartelaN(){
    while (cartelaN.length < 5){
        let numero = Math.round(Math.random() * (45 - 31) + 31)
            if (cartelaN.indexOf(numero) != -1 || numero == 0){
                criarCartelaN()
            } 
        cartelaN.push(numero)
    }
    
}
function criarCartelaG(){
    while (cartelaG.length < 5){
        let numero = Math.round(Math.random() * (60 - 46) + 46)
            if (cartelaG.indexOf(numero) != -1 || numero == 0){
                criarCartelaG()
            } 
        cartelaG.push(numero)
    }
    
}
function criarCartelaO(){
    while (cartelaO.length < 5){
        let numero = Math.round(Math.random() * (75 - 61) + 61)
            if (cartelaO.indexOf(numero) != -1 || numero == 0){
                criarCartelaO()
            } 
        cartelaO.push(numero)
    }
    
}

criarCartelaB()
console.log(cartelaB)
criarCartelaI()
console.log(cartelaI)
criarCartelaN()
console.log(cartelaN)
criarCartelaG()
console.log(cartelaG)
criarCartelaO()
console.log(cartelaO)

var espaco1 = cartelaB[0]
var espaco2 = cartelaI[0]
var espaco3 = cartelaN[0]
var espaco4 = cartelaG[0]
var espaco5 = cartelaO[0]

var espaco6 = cartelaB[1]
var espaco7 = cartelaI[1]
var espaco8 = cartelaN[1]
var espaco9 = cartelaG[1]
var espaco10 = cartelaO[1]

var espaco11 = cartelaB[2]
var espaco12 = cartelaI[2]
var espaco13 = ''
var espaco14 = cartelaG[2]
var espaco15 = cartelaO[2]

var espaco16 = cartelaB[3]
var espaco17 = cartelaI[3]
var espaco18 = cartelaN[3]
var espaco19 = cartelaG[3]
var espaco20 = cartelaO[3]

var espaco21 = cartelaB[4]
var espaco22 = cartelaI[4]
var espaco23 = cartelaN[4]
var espaco24 = cartelaG[4]
var espaco25 = cartelaO[4]

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
        document.querySelector('.espaco0').style.background = 'white'
    }
}
function bg2(){
    if (document.querySelector('.espaco1').style.background != 'red'){
        document.querySelector('.espaco1').style.background = 'red'
        } else {
            document.querySelector('.espaco1').style.background = 'white'
        }
}
function bg3(){
    if (document.querySelector('.espaco2').style.background != 'red'){
        document.querySelector('.espaco2').style.background = 'red'
        } else {
            document.querySelector('.espaco2').style.background = 'white'
        }
}
function bg4(){
    if (document.querySelector('.espaco3').style.background != 'red'){
        document.querySelector('.espaco3').style.background = 'red'
        } else {
            document.querySelector('.espaco3').style.background = 'white'
        }
}
function bg5(){
    if (document.querySelector('.espaco4').style.background != 'red'){
        document.querySelector('.espaco4').style.background = 'red'
        } else {
            document.querySelector('.espaco4').style.background = 'white'
        }
}
function bg6(){
    if (document.querySelector('.espaco5').style.background != 'red'){
        document.querySelector('.espaco5').style.background = 'red'
        } else {
            document.querySelector('.espaco5').style.background = 'white'
        }
}
function bg7(){
    if (document.querySelector('.espaco6').style.background != 'red'){
        document.querySelector('.espaco6').style.background = 'red'
        } else {
            document.querySelector('.espaco6').style.background = 'white'
        }
}
function bg8(){
    if (document.querySelector('.espaco7').style.background != 'red'){
        document.querySelector('.espaco7').style.background = 'red'
        } else {
            document.querySelector('.espaco7').style.background = 'white'
        }
}
function bg9(){
    if (document.querySelector('.espaco8').style.background != 'red'){
        document.querySelector('.espaco8').style.background = 'red'
        } else {
            document.querySelector('.espaco8').style.background = 'white'
        }
}
function bg10(){
    if (document.querySelector('.espaco9').style.background != 'red'){
        document.querySelector('.espaco9').style.background = 'red'
        } else {
            document.querySelector('.espaco9').style.background = 'white'
        }
}
function bg11(){
    if (document.querySelector('.espaco10').style.background != 'red'){
        document.querySelector('.espaco10').style.background = 'red'
        } else {
            document.querySelector('.espaco10').style.background = 'white'
        }
}
function bg12(){
    if (document.querySelector('.espaco11').style.background != 'red'){
        document.querySelector('.espaco11').style.background = 'red'
        } else {
            document.querySelector('.espaco11').style.background = 'white'
        }
}
/* function bg13(){
    document.querySelector('.espaco12').style.background = 'red'
} */
function bg14(){
    if (document.querySelector('.espaco13').style.background != 'red'){
        document.querySelector('.espaco13').style.background = 'red'
        } else {
            document.querySelector('.espaco13').style.background = 'white'
        }
}
function bg15(){
    if (document.querySelector('.espaco14').style.background != 'red'){
        document.querySelector('.espaco14').style.background = 'red'
        } else {
            document.querySelector('.espaco14').style.background = 'white'
        }
}
function bg16(){
    if (document.querySelector('.espaco15').style.background != 'red'){
        document.querySelector('.espaco15').style.background = 'red'
        } else {
            document.querySelector('.espaco15').style.background = 'white'
        }
}
function bg17(){
    if (document.querySelector('.espaco16').style.background != 'red'){
        document.querySelector('.espaco16').style.background = 'red'
        } else {
            document.querySelector('.espaco16').style.background = 'white'
        }
}
function bg18(){
    if (document.querySelector('.espaco17').style.background != 'red'){
        document.querySelector('.espaco17').style.background = 'red'
        } else {
            document.querySelector('.espaco17').style.background = 'white'
        }
}
function bg19(){
    if (document.querySelector('.espaco18').style.background != 'red'){
        document.querySelector('.espaco18').style.background = 'red'
        } else {
            document.querySelector('.espaco18').style.background = 'white'
        }
}
function bg20(){
    if (document.querySelector('.espaco19').style.background != 'red'){
        document.querySelector('.espaco19').style.background = 'red'
        } else {
            document.querySelector('.espaco19').style.background = 'white'
        }
}
function bg21(){
    if (document.querySelector('.espaco20').style.background != 'red'){
        document.querySelector('.espaco20').style.background = 'red'
        } else {
            document.querySelector('.espaco20').style.background = 'white'
        }
}
function bg22(){
    if (document.querySelector('.espaco21').style.background != 'red'){
        document.querySelector('.espaco21').style.background = 'red'
        } else {
            document.querySelector('.espaco21').style.background = 'white'
        }
}
function bg23(){
    if (document.querySelector('.espaco22').style.background != 'red'){
        document.querySelector('.espaco22').style.background = 'red'
        } else {
            document.querySelector('.espaco22').style.background = 'white'
        }
}
function bg24(){
    if (document.querySelector('.espaco23').style.background != 'red'){
        document.querySelector('.espaco23').style.background = 'red'
        } else {
            document.querySelector('.espaco23').style.background = 'white'
        }
}
function bg25(){
    if (document.querySelector('.espaco24').style.background != 'red'){
        document.querySelector('.espaco24').style.background = 'red'
        } else {
            document.querySelector('.espaco24').style.background = 'white'
        }
}
 
