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

on('home',       () => { window.location.href = '../index.html'; closeMenu(); });
on('projects',   () => { window.open('../Projects/projects.html'); closeMenu(); });
on('home-f',     () => window.location.href = '../index.html');
on('projects-f', () => window.open('../Projects/projects.html'));

on('github',   () => { window.open('https://www.github.com/ritikaattada'); closeMenu(); });
on('github-f', () => window.open('https://www.github.com/ritikaattada'));
on('insta',    () => { window.open('https://www.instagram.com/ritika_attada/'); closeMenu(); });
on('insta-f',  () => window.open('https://www.instagram.com/ritika_attada/'));
on('linkedin',   () => { window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'); closeMenu(); });
on('linkedin-f', () => window.open('https://www.linkedin.com/in/ritika-attada-5078162a5/'));

on('follow',     () => window.open('https://www.github.com/ritikaattada'));
on('view_more',  () => window.open('../Projects/projects.html'));
