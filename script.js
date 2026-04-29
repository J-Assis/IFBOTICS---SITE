document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Suave para os links da Navbar
    document.querySelectorAll('.nav-links a, .btn-contact').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Efeito de Revelação (Reveal) ao rolar a página
    // Usa a API Intersection Observer para performance
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Para de observar após revelar
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Efeito Dinâmico na Navbar ao rolar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 4. Efeito de Parallax suave no objeto flutuante (Foto 1 Style)
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.floating-glow');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
        
        glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

});
