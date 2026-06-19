
const icons=["🎂","🎁","⭐","❤️","🎉","👑","🥳"];
const reels=[...document.querySelectorAll(".reel")];
const msg=document.getElementById("message");

function rand(a){return a[Math.floor(Math.random()*a.length)]}

document.getElementById("spin").onclick=()=>{
 let n=0;
 const t=setInterval(()=>{
   reels.forEach(r=>r.textContent=rand(icons));
   if(++n>25){
      clearInterval(t);
      reels.forEach(r=>r.textContent="🎂");
      msg.textContent="🎉 JACKPOT! HAPPY BIRTHDAY GRANDMA! 🎉";
      confetti(250);
   }
 },80);
};

for(let i=0;i<8;i++){
 let u=document.createElement("div");
 u.className="unicorn";u.textContent="🦄";u.style.fontSize="60px";
 u.style.left=(-100*i)+"px";u.style.top=(40+i*60)+"px";
 document.body.appendChild(u);
 animate(u,1+i*.2);
}
for(let i=0;i<8;i++){
 let c=document.createElement("div");
 c.className="cat";c.textContent="🐱";c.style.fontSize="55px";
 c.style.left=(-120*i)+"px";c.style.top=(100+i*70)+"px";
 document.body.appendChild(c);
 animate(c,1.5+i*.15,true);
}
function animate(el,s,spin=false){
 let x=-100*Math.random(),y=parseFloat(el.style.top),a=0;
 function f(){
   x+=s; if(x>innerWidth+80)x=-80;
   a+=0.1;
   el.style.left=x+"px";
   el.style.transform=`translateY(${Math.sin(a)*20}px) rotate(${spin?Math.sin(a)*20:0}deg)`;
   requestAnimationFrame(f);
 }f();
}

const trail=[];
document.addEventListener("mousemove",e=>{
 let d=document.createElement("div");
 d.textContent="🌈";
 d.style.position="fixed";d.style.left=e.clientX+"px";d.style.top=e.clientY+"px";
 d.style.pointerEvents="none";document.body.appendChild(d);
 trail.push(d);
 setTimeout(()=>d.remove(),700);
});

function confetti(n){
 for(let i=0;i<n;i++){
  let c=document.createElement("div");
  c.className="conf";c.textContent=rand(["🎉","✨","💖","🎈"]);
  c.style.left=Math.random()*innerWidth+"px";
  c.style.top="-20px";c.style.fontSize=(20+Math.random()*30)+"px";
  document.body.appendChild(c);
  let y=-20,v=2+Math.random()*5,x=parseFloat(c.style.left);
  (function fall(){
    y+=v;x+=Math.sin(y/20);
    c.style.top=y+"px";c.style.left=x+"px";
    if(y<innerHeight+50)requestAnimationFrame(fall); else c.remove();
  })();
 }
}

const cv=document.getElementById("fw"),ctx=cv.getContext("2d");
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();onresize=rs;
let parts=[];
setInterval(()=>{
 let x=Math.random()*cv.width,y=Math.random()*cv.height/2;
 for(let i=0;i<50;i++)parts.push({x,y,a:Math.random()*6.28,s:2+Math.random()*4,l:60});
},700);
(function draw(){
 ctx.clearRect(0,0,cv.width,cv.height);
 parts.forEach(p=>{
   p.x+=Math.cos(p.a)*p.s;p.y+=Math.sin(p.a)*p.s;p.l--;
   ctx.fillStyle=`hsl(${p.l*6},100%,60%)`;ctx.fillRect(p.x,p.y,3,3);
 });
 parts=parts.filter(p=>p.l>0);
 requestAnimationFrame(draw);
})();

document.getElementById("surprise").onclick=()=>{
 document.body.classList.add("finale");
 msg.innerHTML="❤️ WE LOVE YOU GRANDMA ❤️<br>🎂 HAPPY 72nd BIRTHDAY! 🎂";
 confetti(1200);
 let s=0;
 let shake=setInterval(()=>{
   s++;
   document.body.style.transform=`translate(${Math.random()*12-6}px,${Math.random()*12-6}px)`;
   if(s>80){clearInterval(shake);document.body.style.transform="";}
 },40);
 for(let i=0;i<60;i++){
  let b=document.createElement("div");
  b.className="balloon";b.textContent="🎈";b.style.fontSize="50px";
  b.style.left=Math.random()*innerWidth+"px";b.style.bottom="-60px";
  document.body.appendChild(b);
  let y=-60;
  (function up(){y+=4;b.style.bottom=y+"px";if(y<innerHeight+100)requestAnimationFrame(up);})();
 }
};
