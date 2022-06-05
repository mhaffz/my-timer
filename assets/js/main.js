function relogioTimer () {
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    
    function getTimeSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeSeconds(segundos)
        }, 1000)
    }
    
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
        
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
            relogio.classList.remove('pausado');
        }
    });
}

function exit() {
    document.addEventListener('mouseout', function(e) {
        const elemento = e.target;

        if(elemento.classList.contains('iniciar')
        || elemento.classList.contains('pausar')
        || elemento.classList.contains('zerar')) {
            elemento.style.transition = 'all 0.7s'
        }
    });
}

relogioTimer();