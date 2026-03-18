function on(id, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});
function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
}

on('home',    () => { window.location.href = '../index.html'; closeMenu(); });
on('about',   () => { window.open('../About/about.html'); closeMenu(); });
on('home-f',  () => window.location.href = '../index.html');
on('about-f', () => window.open('../About/about.html'));

on('github',   () => { window.open('https://www.github.com/ritikaattada'); closeMenu(); });
on('github-f', () => window.open('https://www.github.com/ritikaattada'));
on('insta',    () => { window.open('https://www.instagram.com/ritika_attada/'); closeMenu(); });
on('insta-f',  () => window.open('https://www.instagram.com/ritika_attada/'));
on('linkedin',   () => { window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'); closeMenu(); });
on('linkedin-f', () => window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'));

on('web', () => { document.getElementById('ws').scrollIntoView({ behavior: 'smooth' }); });
on('ml',  () => { document.getElementById('ms').scrollIntoView({ behavior: 'smooth' }); });
on('ml-git', () => window.open('https://github.com/RitikaAttada/day10-of-ML'));

// Project card links
const projectLinks = {
    p1: 'https://github.com/RitikaAttada',
    p2: 'https://github.com/RitikaAttada',
    p3: 'https://github.com/RitikaAttada',
    p4: 'https://github.com/RitikaAttada',
    p5: 'https://github.com/RitikaAttada',
    p6: 'https://github.com/RitikaAttada',
    p7: 'https://ritikaattada.github.io/',
    p8: 'https://github.com/RitikaAttada',
    p9: 'https://github.com/RitikaAttada',
    p10: 'https://ritikaattada.github.io/Text-Analyzer-/',
};
Object.entries(projectLinks).forEach(([id, url]) => {
    on(id, () => window.open(url));
});
