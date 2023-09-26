
// pega as variaveis e cria o iD
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const rosa = document.getElementById('turnrosa');

//isLampBroken define uma função
// ">" operador de comparação
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;//retorna um valor boolean 
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png';
        turnOn.src = './on/on.png';
        turnOff.src = './off/off.png'; // Atualiza a imagem do botão de desligar.
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png';
        turnOff.src = './off/off.png';
        turnOn.src = './on/on.png'; // Atualiza a imagem do botão de ligar.
    }
}

function lampRosa() {
    if (!isLampBroken()) {
        lamp.src = './img/coz.rosa.png';
        turnOn.src = './on/on.png';
        turnrosa.src = './coz.rosa/coz.rosa.png'; // Atualiza a imagem do botão de ligar.
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png'; //evento de alterar a lampada para quebrada
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnrosa.addEventListener('click', lampRosa); //evento de cada botão

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('mouseover', lampRosa);
lamp.addEventListener('dblclick', lampBroken); //ouvinte de evento a função que é chamada/ mais de um click
