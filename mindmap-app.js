// Mục "🧠 Mind Map": danh sách mindmap (ảnh) + trình xem phóng to/thu nhỏ.
// Thêm mindmap mới: đặt ảnh vào assets/mindmaps/ rồi thêm 1 dòng vào MINDMAPS.
(()=>{
  const MINDMAPS=[
    {id:"science-u2m1-lesson2",subject:"🐾 Science",title:"Lesson 2: Functions of Animal Structures",
     subtitle:"Unit 2 Module 1 · Mind Map 1 + 2 · Class Diary 01–13/10/2026",date:"13/10/2026",
     src:"assets/mindmaps/science-u2m1-lesson2.webp",thumb:"assets/mindmaps/science-u2m1-lesson2-thumb.webp"}
  ];
  const $=s=>document.querySelector(s);
  const view=$("#mindmapView"),stage=$("#mmStage"),image=$("#mmImage"),label=$("#mmZoom");
  let scale=1,fitScale=1,current=null;

  function renderList(){
    $("#mmList").innerHTML=MINDMAPS.map(m=>`<button class="mm-card" type="button" data-mm="${m.id}">
      <img src="${m.thumb}" alt="" loading="lazy"><span class="mm-meta"><small>${m.subject} · ${m.date}</small><b>${m.title}</b><span>${m.subtitle}</span></span></button>`).join("");
    document.querySelectorAll("[data-mm]").forEach(b=>b.addEventListener("click",()=>openMap(b.dataset.mm)));
  }
  function setScale(next,cx,cy){
    const rect=stage.getBoundingClientRect();
    cx=cx??rect.width/2;cy=cy??rect.height/2;
    const ox=(stage.scrollLeft+cx)/scale,oy=(stage.scrollTop+cy)/scale;
    scale=Math.min(4,Math.max(fitScale*0.5,next));
    image.style.width=`${image.naturalWidth*scale}px`;
    stage.scrollLeft=ox*scale-cx;stage.scrollTop=oy*scale-cy;
    label.textContent=`${Math.round(scale/fitScale*100)}%`;
  }
  function fit(){
    fitScale=Math.min(stage.clientWidth/image.naturalWidth,stage.clientHeight/image.naturalHeight);
    scale=fitScale;image.style.width=`${image.naturalWidth*scale}px`;stage.scrollLeft=0;stage.scrollTop=0;label.textContent="100%";
  }
  function openMap(id){
    current=MINDMAPS.find(m=>m.id===id);if(!current) return;
    $("#mmList").hidden=true;$("#mmViewer").hidden=false;
    $("#mmTitle").textContent=`${current.subject} · ${current.title}`;
    $("#mmOpen").href=current.src;
    image.onload=()=>fit();image.src=current.src;if(image.complete&&image.naturalWidth) fit();
    window.scrollTo({top:0});
  }
  function backToList(){$("#mmViewer").hidden=true;$("#mmList").hidden=false}
  function show(){
    if(typeof setActiveTopTab==="function") setActiveTopTab("mindmap");
    ["homeView","catalogView","quizView","historyView"].forEach(id=>{const el=document.getElementById(id);if(el) el.hidden=true});
    view.hidden=false;$("#subjectLabel").textContent="Mind Map";$("#miniFill").style.width="0";
    renderList();backToList();window.scrollTo({top:0});
  }

  $("#mindmapBtn").addEventListener("click",show);
  $("#mmBack").addEventListener("click",backToList);
  $("#mmIn").addEventListener("click",()=>setScale(scale*1.25));
  $("#mmOut").addEventListener("click",()=>setScale(scale/1.25));
  $("#mmFit").addEventListener("click",fit);
  $("#mmReal").addEventListener("click",()=>setScale(1));
  window.addEventListener("resize",()=>{if(!$("#mmViewer").hidden&&image.naturalWidth) fit()});
  // Ctrl/⌘ + lăn chuột để phóng to tại vị trí con trỏ; nhấp đúp để phóng to 2x / quay lại vừa màn hình.
  stage.addEventListener("wheel",e=>{if(!e.ctrlKey&&!e.metaKey) return;e.preventDefault();const r=stage.getBoundingClientRect();setScale(scale*(e.deltaY<0?1.15:1/1.15),e.clientX-r.left,e.clientY-r.top)},{passive:false});
  stage.addEventListener("dblclick",e=>{const r=stage.getBoundingClientRect();scale>fitScale*1.05?fit():setScale(fitScale*2.2,e.clientX-r.left,e.clientY-r.top)});
  // Kéo chuột để di chuyển ảnh.
  let drag=null;
  stage.addEventListener("mousedown",e=>{drag={x:e.clientX,y:e.clientY,l:stage.scrollLeft,t:stage.scrollTop};stage.classList.add("dragging")});
  window.addEventListener("mousemove",e=>{if(!drag) return;stage.scrollLeft=drag.l-(e.clientX-drag.x);stage.scrollTop=drag.t-(e.clientY-drag.y)});
  window.addEventListener("mouseup",()=>{drag=null;stage.classList.remove("dragging")});
  // Chụm 2 ngón (iPad/điện thoại) để phóng to/thu nhỏ.
  let pinch=null;
  const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);
  stage.addEventListener("touchstart",e=>{if(e.touches.length===2){const r=stage.getBoundingClientRect();pinch={d:dist(e.touches),s:scale,cx:(e.touches[0].clientX+e.touches[1].clientX)/2-r.left,cy:(e.touches[0].clientY+e.touches[1].clientY)/2-r.top}}},{passive:true});
  stage.addEventListener("touchmove",e=>{if(pinch&&e.touches.length===2){e.preventDefault();setScale(pinch.s*dist(e.touches)/pinch.d,pinch.cx,pinch.cy)}},{passive:false});
  stage.addEventListener("touchend",e=>{if(e.touches.length<2) pinch=null});
  window.mindmapApi={MINDMAPS,show,openMap,setScale,fit,get scale(){return scale},get fitScale(){return fitScale}};
})();
