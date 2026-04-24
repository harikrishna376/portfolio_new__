// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// TYPING
const words = ["ML Engineer", "AI Builder", "Researcher"];
let i=0,j=0,cur="",del=false;

function type(){
  cur=words[i];
  document.getElementById("typing").textContent =
    del ? cur.substring(0,j--) : cur.substring(0,j++);

  if(!del && j===cur.length) del=true;
  else if(del && j===0){ del=false; i=(i+1)%words.length; }

  setTimeout(type,80);
}
type();

// PROJECT DATA
const data = [
  {
    title:"Market Mood AI",
    desc:"Real-time financial sentiment AI",
    link:"https://ai-market-sentinel-v2-hv58xxeqde9lngqjwxs9ed.streamlit.app/"
  },
  {
    title:"Virtual Try-On",
    desc:"GAN-based clothing system",
    link:"https://ai-virtual-tryon-engine.streamlit.app/"
  }
];

const grid = document.getElementById("projectGrid");

data.forEach(p=>{
  let card=document.createElement("div");
  card.className="card";
  card.innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p>`;
  card.onclick=()=>openModal(p);
  grid.appendChild(card);
});

// MODAL
function openModal(p){
  document.getElementById("modal").style.display="block";
  mTitle.textContent=p.title;
  mDesc.textContent=p.desc;
  mLink.href=p.link;
}
close.onclick=()=>modal.style.display="none";

// SCROLL REVEAL
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    let top=el.getBoundingClientRect().top;
    if(top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

// THEME
theme-toggle.onclick=()=>{
  document.body.classList.toggle("light");
};
