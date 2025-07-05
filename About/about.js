const home = document.getElementById('home');
const home_f = document.getElementById('home-f');
const projects = document.getElementById('projects');
const projects_f = document.getElementById('projects-f');
const github = document.getElementById('github');
const github_f = document.getElementById('github-f');
const insta = document.getElementById('insta');
const insta_f = document.getElementById('insta-f');
const linkedin = document.getElementById('linkedin');
const linkedin_f = document.getElementById('linkedin-f');
const linkedin_connect = document.getElementById('linkedin-connect');


home.addEventListener('click', ()=>{
    window.close();
    window.open("../index.html") ;
});
home_f.addEventListener('click', ()=>{
    window.close();
    window.open("../index.html") ;
});
projects.addEventListener('click', ()=>{
    window.close();
    window.open("../Projects/projects.html");
});
projects_f.addEventListener('click', ()=>{
    window.close();
    window.open("../Projects/projects.html");
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
github.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
github_f.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});

