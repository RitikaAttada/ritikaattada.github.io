const home = document.getElementById('home');
const home_f = document.getElementById('home-f');
const about = document.getElementById('about');
const about_f = document.getElementById('about-f');
const github = document.getElementById('github');
const github_f = document.getElementById('github-f');
const insta = document.getElementById('insta');
const insta_f = document.getElementById('insta-f');
const linkedin = document.getElementById('linkedin');
const linkedin_f = document.getElementById('linkedin-f');
const ml_git = document.getElementById('ml-git');
const web = document.getElementById('web')
const ml = document.getElementById('ml');
const ws = document.getElementById('ws');
const ms = document.getElementById('ms');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');

home.addEventListener('click', ()=>{
    window.close();
    window.open("../index.html") ;
});
home_f.addEventListener('click', ()=>{
    window.close();
    window.open("../index.html") ;
});
about.addEventListener('click', ()=>{
    window.close();
    window.open("../About/about.html");
});
about_f.addEventListener('click', ()=>{
    window.close();
    window.open("../About/about.html");
});
github.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
github_f.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
insta.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/ritika_attada/');
});
insta_f.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/ritika_attada/');
});
linkedin.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/ritika-attada-5078162a5/");
});
linkedin_f.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/ritika-attada-5078162a5/");
});
web.addEventListener('click', ()=>{
    ws.scrollIntoView({behavior: 'smooth'});
});
ml.addEventListener('click', ()=>{
    ms.scrollIntoView({behavior: 'smooth'});
});
p1.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/emotion-tracker/");
});
p2.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Rock-paper-Scissors-Game/")
});
p3.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/simple-calculator/")
});
p4.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/budget-tracker/")
});
p5.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Hydrating-Timer/")
});
p6.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Todo-app/")
});
p7.addEventListener('click', ()=>{
    window.open("../index.html")
});
p8.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Youtube-Clone/")
});
p9.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Focus-Timer/")
});
p10.addEventListener('click', ()=>{
    window.open("https://ritikaattada.github.io/Text-Analyzer-/")
});
ml_git.addEventListener('click', ()=>{
    window.open("https://github.com/RitikaAttada/day10-of-ML")
});