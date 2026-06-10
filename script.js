const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

/* =========================
START STORY
========================= */

startBtn.addEventListener("click", () => {

startBtn.style.opacity = "0";

setTimeout(()=>{
startBtn.style.display = "none";
},500);

music.play();

startTimeline();

});

/* =========================
AUTO TIMELINE
========================= */

function scrollToSection(selector){

const el = document.querySelector(selector);

if(!el) return;

el.scrollIntoView({
behavior:"smooth",
block:"center"
});

}

function startTimeline(){

/* MEMORY 1 */
setTimeout(()=>{
scrollToSection("#memory1");
},2500);

/* MEMORY 2 */
setTimeout(()=>{
scrollToSection("#memory2");
},7500);

/* MEMORY 3 */
setTimeout(()=>{
scrollToSection("#memory3");
},12500);

/* MEMORY 4 */
setTimeout(()=>{
scrollToSection("#memory4");
},17500);

/* MEMORY 5 */
setTimeout(()=>{
scrollToSection("#memory5");
},22500);

/* MEMORY 6 */
setTimeout(()=>{
scrollToSection("#memory6");
},27500);

/* MEMORY 7 */
setTimeout(()=>{
scrollToSection("#memory7");
},32500);

/* MEMORY 8 */
setTimeout(()=>{
scrollToSection("#memory8");
},37500);

/* COUNTDOWN */
setTimeout(()=>{
showCountdown();
scrollToSection("#countdown");
},43000);

/* REVEAL */
setTimeout(()=>{
scrollToSection("#reveal");
burstPetals();
},47000);

/* LETTER */
setTimeout(()=>{
scrollToSection("#letter");
},62000);

/* ENDING */
setTimeout(()=>{
scrollToSection("#ending");
},85000);

}

/* =========================
COUNTDOWN
========================= */

function showCountdown(){

const three =
document.getElementById("three");

const two =
document.getElementById("two");

const one =
document.getElementById("one");

three.style.opacity="0";
two.style.opacity="0";
one.style.opacity="0";

setTimeout(()=>{
three.style.opacity="1";
},0);

setTimeout(()=>{
three.style.opacity="0";
two.style.opacity="1";
},1000);

setTimeout(()=>{
two.style.opacity="0";
one.style.opacity="1";
},2000);

setTimeout(()=>{
one.style.opacity="0";
},3000);

}

/* =========================
ROSE PETALS
========================= */

function createPetal(){

const petal =
document.createElement("img");

petal.src =
"images/petal.png";

petal.className =
"rose";

const zones = [

window.innerWidth*0.15,
window.innerWidth*0.35,
window.innerWidth*0.50,
window.innerWidth*0.65,
window.innerWidth*0.85

];

petal.style.left =
zones[
Math.floor(Math.random()*zones.length)
] + (Math.random()*120-60) + "px";

petal.style.animationDuration =
(6 + Math.random()*4)+"s";

petal.style.transform =
`rotate(${Math.random()*360}deg)`;

petal.style.filter =
"drop-shadow(0 0 12px rgba(255,0,60,.35))";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

/* MAWAR NORMAL */

setInterval(createPetal,55);

/* HUJAN MAWAR BESAR */

function burstPetals(){

for(let i=0;i<180;i++){

setTimeout(()=>{

createPetal();
petal.style.opacity =
0.4 + Math.random()*0.6;

petal.style.zIndex =
Math.floor(Math.random()*10);

},i*25);

}

}

/* =========================
LETTER TYPING
========================= */

const text = `

Haii Intan ❤️

Happy 18th Birthday Princess.

Aku mungkin bukan orang yang sempurna,
aku juga masih banyak kurangnya.

Tapi aku bersyukur karena dipertemukan dengan kamu.

Terima kasih untuk semua cerita,
semua tawa,
semua momen random,
dan semua kenangan yang kita buat bersama.

Hari ini kamu sudah 18 tahun.

Aku harap semua impianmu tercapai,
semua kesedihanmu berkurang,
dan semua hal baik datang ke hidupmu.

Tetap jadi Intan yang aku kenal,
yang kuat,
yang baik,
dan yang selalu berhasil membuat hariku lebih berwarna.

Semoga hari ini menjadi awal dari tahun terbaik dalam hidupmu.

Happy Birthday My Princess ❤️

Love,
Adly ❤️

`;

const target =
document.getElementById("typing-text");

let i = 0;

function typeWriter(){

if(i < text.length){

target.innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeWriter();

observer.disconnect();

}

});

});

if(target){
observer.observe(target);
}

/* =========================
MEMORY FADE
========================= */

const sections =
document.querySelectorAll(".memory-card");

const fadeObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(80px)";

card.style.transition=
"1s ease";

fadeObserver.observe(card);

});
