function mudarImagem(caminhoNovaImg) {

        const principal = document.getElementById('imgDestaque');
        

        principal.style.opacity = '0';
        
        setTimeout(() => {
            principal.src = caminhoNovaImg;
            principal.style.opacity = '1';
        }, 200);
    }