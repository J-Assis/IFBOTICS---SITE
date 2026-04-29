document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Suave para Links Internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset para a navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Observer para Reveal ao Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Comportamento da Navbar e Botão Voltar ao Topo
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Estilização Navbar
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Visibilidade Voltar ao Topo
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Clique Voltar ao Topo
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Sutil Micro-interação nos Cards da Equipe
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Pode adicionar lógica extra de som ou micro-mudança aqui
        });
    });
});
