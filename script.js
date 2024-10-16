// Seleciona os elementos necessários
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');
const navLinks = document.querySelectorAll('.nav-responsive a');

// Função para alternar a visibilidade do menu
const toggleMenu = () => {
    navResponsive.classList.toggle('active');
};

// Adiciona o evento de clique ao menu hamburguer
menuHamburguer.addEventListener('click', toggleMenu);

// Adiciona eventos de clique aos links do menu para fechar o menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navResponsive.classList.remove('active');
    });
});
