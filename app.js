// Obtém os elementos DOM necessários 
let nextButton = document.getElementById('next'); 
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel'); 
let listHTML = document.querySelector('.carousel .list'); 
let seeMoreButtons = document.querySelectorAll('.seeMore'); 
let backButton = document.getElementById('back'); 
let loginButton = document.getElementById('login');

// Quando o botão "próximo" é clicado, mostra o próximo item
nextButton.onclick = function(){
    showSlider('next');
}

// Quando o botão "anterior" é clicado, mostra o item anterior
prevButton.onclick = function(){
    showSlider('prev');
}

// Variável de timeout para gerenciar o bloqueio de cliques
let unAcceppClick;

// Função para lidar com a transição do slide (próximo ou anterior)
const showSlider = (type) => {
    // Desabilita os eventos de ponteiro em ambos os botões para evitar múltiplos cliques
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    // Remove as classes 'next' e 'prev' para redefinir transições anteriores
    carousel.classList.remove('next', 'prev');

    // Obtém todos os itens do carrossel
    let items = document.querySelectorAll('.carousel .list .item');

   // Se o tipo for 'next', move o primeiro item para o final da lista
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next'); // Adiciona a classe 'next' para o efeito de transição
    }else{
        // Se o tipo for 'prev', move o último item para o início da lista
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev'); // Adiciona a classe 'prev' para o efeito de transição

    }

    // Limpa o timeout anterior
    clearTimeout(unAcceppClick);

    // Define um timeout para reabilitar os botões após 2 segundos
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto'; // Reabilita o botão "próximo"
        prevButton.style.pointerEvents = 'auto'; // Reabilita o botão "anterior"
    }, 2000);
}

// Adiciona ouvintes de eventos para cada botão "See More"
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        // Quando "See More" é clicado, remove as classes de transição e adiciona a classe 'showDetail'
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});

// Adiciona um ouvinte de evento para o botão "Back"
backButton.onclick = function(){
    // Quando "Back" é clicado, remove a classe 'showDetail' para voltar à visualização do carrossel
    carousel.classList.remove('showDetail');
}

// Quando o botão "Login" é clicado, redireciona para a página de login
loginButton.onclick= function () {
    location.href= 'login.html';

}
