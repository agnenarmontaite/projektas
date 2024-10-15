// slider

function changex(){
    // document.getElementById("resultx").innerHTML = document.getElementById("x-slider").value
    document.getElementById("resultx").value = document.getElementById("x-slider").value 
    calculate()
}
function changey(){
    // document.getElementById("resulty").innerHTML = document.getElementById("y-slider").value
    document.getElementById("resulty").value = document.getElementById("y-slider").value 
    calculate()
}

function xy() {
    document.getElementById("x-slider").value = document.getElementById("resultx").value
    document.getElementById("y-slider").value = document.getElementById("resulty").value
}

function skaiciuoti() {
    changex()
    changey()
    document.getElementById('rezultatas').style.display = 'block'
    document.getElementById('hide').style.display = 'none'
    tapetuKaina()
    type()
}

// rulonu kiekis
function calculate() {
    let x = Number(document.getElementById('x-slider').value)
    let y = Number(document.getElementById('y-slider').value)
    let plotis = 50
    let aukstis = 180
    let rulonoPlotas = plotis * aukstis
    let sienosPlotas = x * y
    let rulonuKiekis = Math.ceil(sienosPlotas / rulonoPlotas)
    if (x == 1 && y == 1){
        document.getElementById('results').innerHTML = 'Nurodykite sienos matmenis'
    } else {
    document.getElementById('results').innerHTML = 'Jums reikalingas rulonų kiekis yra: ' + rulonuKiekis
    }
    return  rulonuKiekis
}
// tipo pasirinkimas
function type() {
    let tapetas = document.getElementById('tapetai').value
    if(tapetas == 'popieriniai') {
        document.getElementById('vienas').style.display = 'block'
        document.getElementById('du').style.display = 'none'
         document.getElementById('trys').style.display = 'none'
    } else if (tapetas == 'naturalus') {
        document.getElementById('du').style.display = 'block'
        document.getElementById('vienas').style.display = 'none'
        document.getElementById('trys').style.display = 'none'
    } else {
        document.getElementById('trys').style.display = 'block'
        document.getElementById('du').style.display = 'none'
        document.getElementById('vienas').style.display = 'none'
    }
}

// tapetu kaina
function tapetuKaina() {
    let tapetas = document.getElementById('tapetai').value
    let popierinis = 5
    let naturalus = 10
    let kaina = 0
    if(tapetas == 'popieriniai') {
        kaina = calculate() * popierinis
        document.getElementById('kaina').innerHTML = 'Užsakymo suma: ' + kaina + ' EUR'
    } else if (tapetas == 'naturalus') {
        kaina = calculate() * naturalus
        document.getElementById('kaina').innerHTML = 'Užsakymo suma: ' + kaina + ' EUR'
    } else {
        document.getElementById('kaina').innerHTML = 'Nepasirinktas tapetų tipas'
    }
    
}

// pradeti is naujo
function reload() {
    document.getElementById('tapetai').value = 'else'
    type() 
    document.getElementById("x-slider").value = 1
    document.getElementById("y-slider").value = 1
    document.getElementById("resultx").value = 1
    document.getElementById("resulty").value = 1
    document.getElementById('rezultatas').style.display = 'none'
    document.getElementById('hide').style.display = 'block'

  }