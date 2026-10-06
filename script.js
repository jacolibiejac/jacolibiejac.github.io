
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}
  })
},{threshold:.08});
document.querySelectorAll('.card,.stack-grid>div,.time').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';
  el.style.transition='opacity .55s ease, transform .55s ease';
  observer.observe(el);
});
const style=document.createElement('style');
style.textContent='.show{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
