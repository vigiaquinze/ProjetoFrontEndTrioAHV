
// pega as variaveis e da um nome a elas
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const luz = document.getElementById('luz');
const rosa = document.getElementById('turnrosa');

//isLampBroken define uma função
// ">" operador de comparação
function isLampBroken() {
    return luz.src.indexOf('quebrada') > -1;//retorna um valor boolean 
}

function luzOn() {
    if (!isLampBroken()) {
        luz.src = './img/ligada.png';
        turnOn.src = './on/on.png';
        turnOff.src = './off/off.png'; // Atualiza a imagem do botão de desligar.
    }
}

function luzOff() {
    if (!isLampBroken()) {
        luz.src = './img/desligada.png';
        turnOff.src = './off/off.png';
        turnOn.src = './on/on.png'; // Atualiza a imagem do botão de ligar.
    }
}

function luzRosa() {
    if (!isLampBroken()) {
        luz.src = './img/coz.rosa.png';
        turnOn.src = './on/on.png';
        turnrosa.src = './coz.rosa/coz.rosa.png'; // Atualiza a imagem do botão de ligar.
    }
}

function lampBroken() {
    luz.src = './img/quebrada.png'; //evento de alterar a lampada para quebrada
}

turnOn.addEventListener('click', luzOn);
turnOff.addEventListener('click', luzOff);
turnrosa.addEventListener('click', luzRosa); //evento de cada botão

luz.addEventListener('mouseover', luzOn);
luz.addEventListener('mouseleave', luzOff);
luz.addEventListener('mouseover', luzRosa);
luz.addEventListener('dblclick', luzBroken); //ouvinte de evento a função que é chamada/ mais de um click
