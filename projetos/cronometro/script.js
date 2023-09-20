var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var iniciar = document.getElementById('iniciar');
var retomar = document.getElementById('retomar');
var pausar = document.getElementById('pausar');
var parar = document.getElementById('parar');

var interval = 00;
var horas = 00;
var minutos = 00;
var segundos = 00;
var isPaused = false;
retomar.style.display = "none";
pausar.style.display = "none";
parar.style.display = "none";


function start() {
    isPaused=false;
    var horas = 00;
    var minutos = 00;
    var segundos = 00;
    interval = setInterval(() => {
        if (!isPaused) {
            segundos += 1
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            if (minutos === 60) {
                horas++;
                minutos = 0;
            }
            hours.textContent = formatTime(horas);
            minutes.textContent = formatTime(minutos);
            seconds.textContent = formatTime(segundos);
        }
    }, 1000)
    iniciar.style.display = "none";
    pausar.style.display = "block";
    parar.style.display = "block";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function pause() {
    isPaused = true;
    pausar.style.display = "none";
    retomar.style.display = "block";
}

function resume() {
    isPaused = false;
    pausar.style.display = "block";
    retomar.style.display = "none";
}

function stop() {
    clearInterval(interval);
    isPaused=true;
    var horas = 00;
    var minutos = 00;
    var segundos = 00;
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    iniciar.style.display = "block";
    pausar.style.display = "none";
    parar.style.display = "none";
    retomar.style.display = "none";
}
