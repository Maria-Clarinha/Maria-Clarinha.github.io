const personagem = document.getElementById('personagem');
const obstaculo = document.getElementById('obstaculo');
const placar = document.getElementById('placar');
var jogando = false;

function Pular() {
    personagem.classList.add('anima-pulo')
    setTimeout(() => {
        personagem.classList.remove('anima-pulo')
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!personagem.classList.contains('anima-pulo')) {
        Pular();
    }    
});

function IniciarJogo() {

    if(!jogando) {

        obstaculo.classList.add('anima-obstaculo')

        jogando = setInterval(() => {            

            placar.innerText++;
        
            const personagemTop = parseInt(window.getComputedStyle(personagem)
                .getPropertyValue('top'));
        
            const obstaculoLeft = parseInt(window.getComputedStyle(obstaculo)
                .getPropertyValue('left'));
        
            if (obstaculoLeft < 0) {
                obstaculo.style.display = 'none';
            } else {
                obstaculo.style.display = '';
            }
        
            if (obstaculoLeft < 50 && obstaculoLeft > 0 && personagemTop > 150) {                

                jogando = false;
                clearInterval(jogando)
                obstaculo.classList.remove('anima-obstaculo')

                alert("A sua pontuação foi de: " + (placar.innerText-1));

                location.reload();
            }
        }, 50);
    }    
}


