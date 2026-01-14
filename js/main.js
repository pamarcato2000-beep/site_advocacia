// ==========================================
// CONTROLE DE NAVEGAÇÃO E RESPONSIVIDADE
// ==========================================

// Seleção de elementos do Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Função para abrir/fechar menu mobile
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        if (!mobileMenu.classList.contains('hidden') && window.gsap) {
            gsap.from("#mobile-menu a", {
                opacity: 0,
                y: 10,
                stagger: 0.1,
                duration: 0.4
            });
        }
    });
}

// Fechar menu ao clicar em um link (âncora)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Alterar Navbar no Scroll (Efeito de transparência/tamanho)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('nav-active');
        nav.classList.replace('py-6', 'py-3');
    } else {
        nav.classList.remove('nav-active');
        nav.classList.replace('py-3', 'py-6');
    }
});

// ==========================================
// REDIRECIONAMENTO WHATSAPP (UTILITY)
// ==========================================
// Função caso queira logar cliques nos botões de conversão
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Usuário clicou para contato via WhatsApp");
    });
});