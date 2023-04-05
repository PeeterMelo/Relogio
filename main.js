function relogio() {
    const elementoRelogio = window.document.querySelector('.relogio');
    elementoRelogio
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart (2, '0');
    const formatoMinutos = minutos.toString().padStart (2, '0');
    const formatoSegundos = segundos.toString().padStart (2, '0');
    
    //exibição:

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;
}

setInterval(relogio, 1000);