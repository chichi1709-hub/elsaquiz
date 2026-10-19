// Hoạt họa trang chủ "Elsa đi học các môn" (flat motion design, kiểu pose-to-pose, chu kỳ 16 giây):
//   vẫy 2 tay chào → xoay người sang dáng CẦM SÁCH (chữ A·B·C bay ra) → dáng KHỐI + THẺ SỐ 5 (số 1·2·3 nảy lên)
//   → dáng SOI KÍNH LÚP (kính lấp lánh, lá non bay lên) → bật nhảy dang tay cầm sao (sao & tim bung tỏa)
//   → đáp xuống, hôn gió (trái tim bay ra) → lặp lại.
// Mọi dáng là ảnh gốc trong assets/mascot/academy (đã tách nền); khung tím đứng yên, màu nền không đổi.
// Mọi chuyển động dùng Web Animations API cùng một chu kỳ T → Play / Pause / Restart điều khiển chung.
(()=>{
  const stage=document.getElementById("elsaStage");
  if(!stage||!stage.animate) return;
  const SEC=16,T=SEC*1000,o=s=>Math.min(1,Math.max(0,s/SEC));
  const pop="cubic-bezier(.34,1.56,.64,1)",io="ease-in-out";
  const COLORS=["#ffd54d","#ff7aa8","#9b69e8","#5ec8f2","#ff8a3d","#5fd39a"];
  const star=c=>`<svg viewBox="0 0 24 24"><path fill="${c}" d="M12 1.8l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.4 1.4-6.8L2.2 8.9l6.9-.8z"/></svg>`;
  const heart=c=>`<svg viewBox="0 0 24 24"><path fill="${c}" d="M12 21.2l-1.4-1.3C5.4 15.2 2 12.1 2 8.3 2 5.2 4.4 2.8 7.5 2.8c1.7 0 3.4.8 4.5 2.1 1.1-1.3 2.8-2.1 4.5-2.1 3.1 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.6z"/></svg>`;
  const sparkle=c=>`<svg viewBox="0 0 24 24"><path fill="${c}" d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0z"/></svg>`;
  const leaf=c=>`<svg viewBox="0 0 24 24"><path fill="${c}" d="M3 21C3 10 10 3 21 3c0 11-7 18-18 18z"/><path d="M4 20L16 8" stroke="#2f8f4e" stroke-width="1.6" fill="none"/></svg>`;
  const $=selector=>stage.querySelector(selector);
  const fx=$(".ea-fx"),subj=$(".ea-subj"),anims=[];
  // --u = 1% chiều rộng sân khấu → mọi hạt/chữ bay theo kích thước Elsa trên mọi màn hình.
  const unit=()=>stage.style.setProperty("--u",`${stage.clientWidth/100}px`);unit();
  if(window.ResizeObserver) new ResizeObserver(unit).observe(stage);
  const add=(el,frames)=>anims.push(el.animate(frames,{duration:T,iterations:Infinity,fill:"both"}));
  // Khung hình theo GIÂY: [[giây, {thuộc tính}], ...] → keyframes (offset 0..1); tự thêm khung 0 và 1 nếu thiếu.
  const track=(el,list)=>{
    const frames=list.map(([s,props])=>({...props,offset:o(s)}));
    if(frames[0].offset>0){const {easing,...first}=frames[0];frames.unshift({...first,offset:0})}
    if(frames[frames.length-1].offset<1){const {easing,...last}=frames[frames.length-1];frames.push({...last,offset:1})}
    add(el,frames);
  };
  const U=v=>`calc(var(--u) * ${v.toFixed(2)})`;
  const rot=deg=>({transform:`rotate(${deg}deg)`});
  const tf=(y=0,r=0,sx=1,sy=1)=>({transform:`translateY(${y}%) rotate(${r}deg) scale(${sx},${sy})`});
  let seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;   // cố định → mỗi lần Restart giống nhau

  // ───── Thời điểm các dáng (giây) ─────
  const POSES=[[".ea-pose-a",[[0,2.6],[13.2,SEC]]],[".ea-pose-lang",[[2.6,5.2]]],[".ea-pose-math",[[5.2,7.8]]],[".ea-pose-sci",[[7.8,10.5]]],[".ea-pose-jump",[[10.5,13.2]]]];
  POSES.forEach(([selector,ranges])=>{
    const list=[];
    ranges.forEach(([a,b])=>{
      if(a===0) list.push([0,{opacity:1}]); else list.push([a-.03,{opacity:0}],[a+.03,{opacity:1}]);
      if(b>=SEC) list.push([SEC,{opacity:1}]); else list.push([b-.03,{opacity:1}],[b+.03,{opacity:0}]);
    });
    if(list[0][0]>0) list.unshift([0,{opacity:0}]);
    track($(selector),list);
  });

  // ───── Toàn thân: nhún khi vẫy, "xoay người" (lật ngang) khi đổi dáng, nhảy, hôn gió ─────
  const turn=at=>[[at-.15,tf()],[at,{...tf(0,0,.04,1),easing:"ease-out"}],[at+.15,tf()]];
  track($(".ea-rig"),[
    [0,tf()],[.6,{...tf(-1.5),easing:io}],[1.2,{...tf(),easing:io}],[1.8,{...tf(-1.5),easing:io}],[2.4,{...tf(),easing:"ease-in"}],
    ...turn(2.6),[3.6,{...tf(-1),easing:io}],[4.6,{...tf(),easing:"ease-in"}],
    ...turn(5.2),[6.2,{...tf(-1),easing:io}],[7.2,{...tf(),easing:"ease-in"}],
    ...turn(7.8),[8.9,{...tf(-.6),easing:io}],[9.9,{...tf(),easing:io}],
    [10.3,{...tf(1.5,0,1.04,.94),easing:"ease-in"}],[10.75,{...tf(-7,0,.98,1.03),easing:pop}],[11.8,{...tf(-5),easing:io}],[12.7,{...tf(-7),easing:"ease-in"}],
    [13.15,{...tf(1,0,1.04,.95),easing:"ease-out"}],[13.45,{...tf(),easing:pop}],
    [13.85,{...tf(0,3,.98,.98),easing:"ease-out"}],[14.05,tf(0,3,.98,.98)],[14.35,{...tf(-2,-2,1.02,1.02),easing:pop}],[14.8,tf()],
    [15.4,{...tf(-1),easing:io}],[SEC,tf()]]);

  // ───── Dáng A: vẫy 2 tay (0–2,4s) và hôn gió (13,6–15s) ─────
  track($(".ea-hand-r"),[[0,rot(0)],[.4,{...rot(-18),easing:io}],[.8,{...rot(14),easing:io}],[1.2,{...rot(-18),easing:io}],[1.6,{...rot(14),easing:io}],
    [2,{...rot(-12),easing:io}],[2.4,{...rot(0),easing:io}],[13.6,rot(0)],[13.95,{...rot(-28),easing:"ease-out"}],[14.1,rot(-28)],
    [14.35,{...rot(18),easing:pop}],[14.8,{...rot(6),easing:io}],[15.2,rot(0)]]);
  const L0=10;   // góc khớp cẳng tay trái của bàn tay lật gương
  track($(".ea-hand-l"),[[0,rot(L0)],[.4,{...rot(L0+18),easing:io}],[.8,{...rot(L0-14),easing:io}],[1.2,{...rot(L0+18),easing:io}],[1.6,{...rot(L0-14),easing:io}],
    [2,{...rot(L0+12),easing:io}],[2.4,{...rot(L0),easing:io}],[13.9,rot(L0)],[14.2,{...rot(L0+6),easing:io}],[14.6,{...rot(L0-4),easing:pop}],[15,rot(L0)]]);
  stage.querySelectorAll(".ea-blush").forEach(el=>track(el,[[0,{opacity:0}],[13.6,{opacity:0}],[13.9,{opacity:1}],[14.7,{opacity:1}],[15.1,{opacity:0}]]));
  track($(".ea-kiss"),[[0,{opacity:0,transform:"translate(0,0) scale(0) rotate(0)"}],[14.25,{opacity:0,transform:"translate(0,0) scale(0) rotate(0)"}],
    [14.32,{opacity:1,transform:"translate(30%,-10%) scale(.5) rotate(0)"}],[14.6,{opacity:1,transform:"translate(140%,-80%) scale(1.1) rotate(-12deg)",easing:pop}],
    [15.1,{opacity:1,transform:"translate(260%,-240%) scale(.9) rotate(10deg)",easing:"ease-in"}],[15.4,{opacity:0,transform:"translate(320%,-310%) scale(.5) rotate(18deg)"}]]);

  // Một "token" (chữ/số/hình) bật ra từ điểm gốc (x%,y% của sân khấu) rồi bay tới (dx,dy) đơn vị --u.
  const token=(html,cls,x,y,dx,dy,start,life,spin=0)=>{
    const el=document.createElement("span");el.className=cls;el.innerHTML=html;el.style.left=`${x}%`;el.style.top=`${y}%`;subj.appendChild(el);
    const at=(px,py,s,r=0)=>`translate(-50%,-50%) translate(${U(px)},${U(py)}) scale(${s}) rotate(${r}deg)`;
    const k=f=>start+life*f;   // các mốc tỉ lệ theo thời gian sống → luôn tăng dần
    track(el,[[0,{opacity:0,transform:at(0,0,0)}],[start,{opacity:0,transform:at(0,0,0)}],
      [k(.05),{opacity:1,transform:at(dx*.35,dy*.35,.6,spin*.3)}],[k(.25),{opacity:1,transform:at(dx,dy,1.15,spin),easing:pop}],
      [k(.38),{opacity:1,transform:at(dx,dy,1,spin)}],[k(.8),{opacity:1,transform:at(dx,dy-3,1,spin*.6),easing:io}],
      [k(1),{opacity:0,transform:at(dx,dy-7,.7,spin*.4)}]]);
  };
  // ───── Dáng cầm sách (2,6–5,2s): chữ A · B · C bay ra từ trang sách ─────
  [["A","#ff5c7a",6,-24],["B","#3d9be9",17,-33],["C","#2fb36b",27,-21]].forEach(([ch,c,dx,dy],i)=>
    token(`<b style="color:${c}">${ch}</b>`,"ea-tok",66.7,38.5,dx,dy,3+i*.35,1.9-i*.35,(i-1)*-8));
  [[30,-4],[24,-40],[2,-12]].forEach(([dx,dy],i)=>token(sparkle(["#ffd54d","#ff7aa8","#5ec8f2"][i]),"ea-spark",66.7,38.5,dx,dy,3.3+i*.3,1.4,90));
  // ───── Dáng khối + thẻ số 5 (5,2–7,8s): số 1 · 2 · 3 nảy lên từ khối, thẻ số 5 được khoanh sáng ─────
  [["1","#ff8a3d",-14,-12],["2","#3d9be9",-12,-27],["3","#9b69e8",-6,-42]].forEach(([n,c,dx,dy],i)=>
    token(`<b style="color:${c}">${n}</b>`,"ea-tok",25.8,34,dx,dy,5.6+i*.35,1.9-i*.35,(i-1)*-8));
  const ring=document.createElement("span");ring.className="ea-pulse";ring.style.left="74.5%";ring.style.top="31.4%";subj.appendChild(ring);
  track(ring,[[0,{opacity:0,transform:"translate(-50%,-50%) scale(.6)"}],[6.5,{opacity:0,transform:"translate(-50%,-50%) scale(.6)"}],
    [6.55,{opacity:1,transform:"translate(-50%,-50%) scale(.7)"}],[7,{opacity:0,transform:"translate(-50%,-50%) scale(1.6)",easing:"ease-out"}],
    [7.05,{opacity:1,transform:"translate(-50%,-50%) scale(.7)"}],[7.5,{opacity:0,transform:"translate(-50%,-50%) scale(1.6)",easing:"ease-out"}]]);
  // ───── Dáng soi kính lúp (7,8–10,5s): kính lấp lánh, lá non bay lên từ mầm cây ─────
  [[-3,-5,8.2],[4,2,8.9],[-1,-2,9.6]].forEach(([dx,dy,s])=>token(sparkle("#ffffff"),"ea-spark lens",28.4,47.6,dx,dy,s,.7,90));
  [[-8,-16],[3,-22],[12,-14]].forEach(([dx,dy],i)=>token(leaf(["#7fd36b","#5fbf5a","#a5e07b"][i]),"ea-spark",26.7,69,dx,dy,8.4+i*.4,1.4,(i-1)*40));
  token(sparkle("#ffd54d"),"ea-spark",26.7,66,0,-30,9.3,1,90);

  // ───── Bật nhảy (10,5s): vòng sóng + sao, tim, lấp lánh bung tỏa quanh Elsa ─────
  const BURST=10.55;
  track($(".ea-ring"),[[0,{opacity:0,transform:"scale(.2)"}],[BURST,{opacity:0,transform:"scale(.2)"}],[BURST+.08,{opacity:.9,transform:"scale(.3)"}],
    [BURST+1.6,{opacity:0,transform:"scale(1.6)",easing:"ease-out"}]]);
  for(let i=0;i<22;i++){
    const el=document.createElement("span");el.className="ea-p";
    const kind=i%3,color=COLORS[i%COLORS.length],size=18+Math.round(rnd()*18);
    el.style.setProperty("--s",`${size}px`);el.innerHTML=kind===0?star(color):kind===1?heart(color):sparkle(color);fx.appendChild(el);
    const angle=(i/22)*Math.PI*2+rnd()*.3,dist=50+rnd()*16,spin=(rnd()*2-1)*220;
    const dx=Math.cos(angle)*dist,dy=Math.sin(angle)*dist*1.15,start=BURST+rnd()*.25;
    const at=(x,y,s,r)=>`translate(-50%,-50%) translate(${U(x)},${U(y)}) scale(${s}) rotate(${r}deg)`;
    track(el,[[0,{opacity:0,transform:at(0,0,0,0)}],[start,{opacity:0,transform:at(0,-8,.2,0)}],[start+.08,{opacity:1,transform:at(0,-8,.4,0),easing:"cubic-bezier(.2,.8,.2,1)"}],
      [start+1.1,{opacity:1,transform:at(dx*.9,dy*.9-8,1,spin),easing:"ease-out"}],[start+2.2,{opacity:.95,transform:at(dx,dy-6,.9,spin*1.3),easing:"ease-in"}],
      [start+2.7,{opacity:0,transform:at(dx,dy+2,.4,spin*1.5)}]]);
  }
  for(let i=0;i<8;i++){
    const el=document.createElement("span");el.className="ea-p";
    const size=14+Math.round(rnd()*14),color=i%2?"#ff7aa8":"#ffb3cd";
    el.style.setProperty("--s",`${size}px`);el.innerHTML=i%4===3?star("#ffd54d"):heart(color);fx.appendChild(el);
    const x=(rnd()*2-1)*38,start=11.2+i*.22,sway=(rnd()*2-1)*6;
    const at=(px,py,s)=>`translate(-50%,-50%) translate(${U(px)},${U(py)}) scale(${s})`;
    track(el,[[0,{opacity:0,transform:at(x,40,.4)}],[start,{opacity:0,transform:at(x,40,.4)}],[start+.35,{opacity:1,transform:at(x+sway,22,1),easing:io}],
      [start+1.6,{opacity:0,transform:at(x-sway,-48,.7)}]]);
  }

  // ───── Điều khiển Play / Pause / Restart ─────
  const buttons=[...document.querySelectorAll("[data-ea]")];
  const setState=playing=>{
    stage.dataset.state=playing?"playing":"paused";
    buttons.forEach(b=>{if(b.dataset.ea==="play") b.setAttribute("aria-pressed",String(playing));if(b.dataset.ea==="pause") b.setAttribute("aria-pressed",String(!playing))});
  };
  const play=()=>{anims.forEach(a=>a.play());setState(true)};
  const pause=()=>{anims.forEach(a=>a.pause());setState(false)};
  const restart=()=>{anims.forEach(a=>{a.currentTime=0;a.play()});setState(true)};
  buttons.forEach(button=>button.addEventListener("click",()=>({play,pause,restart})[button.dataset.ea]()));
  // Người dùng chọn giảm chuyển động → dừng ở khung đầu (bấm Play để xem).
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches){anims.forEach(a=>{a.currentTime=0;a.pause()});setState(false)}
  else setState(true);
  window.elsaAnim={play,pause,restart,animations:anims};
})();
