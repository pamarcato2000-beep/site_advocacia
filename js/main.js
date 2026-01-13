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
        // Animação opcional: suave entrada do menu
        if (!mobileMenu.classList.contains('hidden')) {
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
        // Opcional: diminui o padding ao rolar para um look mais clean
        nav.classList.replace('py-4', 'py-2');
    } else {
        nav.classList.remove('nav-active');
        nav.classList.replace('py-2', 'py-4');
    }
});

// ==========================================
// LÓGICA DO FORMULÁRIO DE CONTATO
// ==========================================

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aqui você pode adicionar uma animação de "Enviando..." no botão
        const btn = form.querySelector('button');
        const btnText = btn.innerText;
        btn.innerText = "ENVIANDO...";
        btn.disabled = true;

        // Simulação de envio (Timeout para parecer real)
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
            btn.innerText = btnText;
            btn.disabled = false;
        }, 1500);
    });
}

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