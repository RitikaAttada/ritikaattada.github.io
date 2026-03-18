// Helper — safely get element and add listener (prevents null crash)
function on(id, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
}

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
}

// --- Navbar & footer nav links ---
on('home',       () => scrollTo('home-section'));
on('home-f',     () => scrollTo('home-section'));

on('about',      () => scrollTo('about-section'));
on('about-f',    () => { window.open('About/about.html'); closeMenu(); });

on('skills',     () => scrollTo('skills-section'));
on('skills-f',   () => scrollTo('skills-section'));

on('projects',   () => { window.open('Projects/projects.html'); closeMenu(); });
on('projects-f', () => window.open('Projects/projects.html'));

// --- Social buttons ---
on('github',     () => { window.open('https://www.github.com/ritikaattada'); closeMenu(); });
on('github-f',   () => window.open('https://www.github.com/ritikaattada'));

on('linkedin',         () => { window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'); closeMenu(); });
on('linkedin-f',       () => window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'));
on('linkedin-connect', () => window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'));

on('insta-f',    () => window.open('https://www.instagram.com/ritika_attada/'));

on('leetcode-nav', () => { window.open('https://leetcode.com/u/Ritika_Attada2712/'); closeMenu(); });
on('leetcode-f',   () => window.open('https://leetcode.com/u/Ritika_Attada2712/'));

// --- Page buttons ---
on('work',   () => window.open('Projects/projects.html'));
on('view',   () => window.open('Projects/projects.html'));
on('resume', () => window.open('resume/RITIKA ATTADA RESUME.pdf'));
on('learn',  () => window.open('About/about.html'));
