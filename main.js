document.addEventListener('DOMContentLoaded', () => {
    // --- Interactive Gradient Logic ---
    const root = document.documentElement;
    window.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        root.style.setProperty('--cursor-x', `${x}%`);
        root.style.setProperty('--cursor-y', `${y}%`);
    });

    // --- FULLSCREEN MENU LOGIC ---
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    const toggleMenu = () => {
        const isActive = sidebar.classList.contains('is-active');

        burgerMenu.classList.toggle('is-active', !isActive);
        sidebar.classList.toggle('is-active', !isActive);

        // Prevent scrolling when menu is open
        body.style.overflow = isActive ? '' : 'hidden';
    };

    // We only need a 'click' listener now.
    // The CSS handles both mobile tap highlight and PC focus outline.
    burgerMenu.addEventListener('click', toggleMenu);


    // --- LAZY LOADING SCRIPT ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => observer.observe(el));
    }
    
    console.log("Tap highlight and focus outline fixed with CSS.");
});
