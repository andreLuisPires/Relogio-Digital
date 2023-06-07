function reg() {
    const data = new Date();
    const tempo = data.toLocaleTimeString('pt-BR').split(':');

    const [horas, minutos, segundos] = tempo;

    document.querySelector('#horas').textContent = horas;
    document.querySelector('#minutos').textContent = minutos;
    document.querySelector('#segundos').textContent = segundos;
}

setInterval(reg, 500);