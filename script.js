document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}})});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const profileCaption=document.querySelector('.art-caption');
if(profileCaption){const label=profileCaption.querySelector('small');const name=profileCaption.querySelector('strong');if(label)label.textContent='GRAPHIC DESIGNER';if(name)name.textContent='Ashike Rasul Mahadi';}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.08;const y=(e.clientY-r.top-r.height/2)*.08;el.style.transform=`translate(${x}px,${y}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')})}
