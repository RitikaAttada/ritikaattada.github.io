const home = document.getElementById('home');
const home_f = document.getElementById('home-f');
const about = document.getElementById('about');
const about_f = document.getElementById('about-f');
const skills = document.getElementById('skills');
const skills_f = document.getElementById('skills-f');
const projects = document.getElementById('projects');
const projects_f = document.getElementById('projects-f');
const github = document.getElementById('github');
const github_f = document.getElementById('github-f');
const insta = document.getElementById('insta');
const insta_f = document.getElementById('insta-f');
const linkedin = document.getElementById('linkedin');
const linkedin_f = document.getElementById('linkedin-f');
const linkedin_connect = document.getElementById('linkedin-connect');
const home_section = document.getElementById('home-section');
const about_section = document.getElementById('about-section');
const skills_section = document.getElementById('skills-section');
const projects_section = document.getElementById('projects-section');
const resume = document.getElementById('resume');
const learn = document.getElementById('learn');
const work = document.getElementById('work');
const view = document.getElementById('view');

home.addEventListener('click', ()=>{
    home_section.scrollIntoView({behavior: 'smooth'});
});
home_f.addEventListener('click', ()=>{
    home_section.scrollIntoView({behavior: 'smooth'});
});
about.addEventListener('click', ()=>{
   about_section.scrollIntoView({behavior: 'smooth'});
});
about_f.addEventListener('click', ()=>{
    window.open('/About/about.html');
});
skills.addEventListener('click', ()=>{
    skills_section.scrollIntoView({behavior: 'smooth'});
});
skills_f.addEventListener('click', ()=>{
    skills_section.scrollIntoView({behavior: 'smooth'});
});
projects.addEventListener('click', ()=>{
   window.open("/Projects/projects.html");
});
projects_f.addEventListener('click', ()=>{
    window.open("/Projects/projects.html");
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
linkedin_connect.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/ritika-attada-5078162a5/");
});
github.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
github_f.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
work.addEventListener('click', ()=>{
    window.open("/Projects/projects.html");
});
view.addEventListener('click', ()=>{
    window.open("/Projects/projects.html");
});
resume.addEventListener('click', ()=>{
    window.open("/resume/RITIKA ATTADA RESUME.pdf");
});
learn.addEventListener('click', ()=>{
    window.open('/About/about.html');
});