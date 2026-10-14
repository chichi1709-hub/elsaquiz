// Nạp trước mọi file quiz. Mỗi file trong quizzes/ gọi registerQuiz({...}) một lần cho mỗi bài.
//
// QUY TẮC (phụ huynh yêu cầu):
// 1. (13/10/2026) Mỗi bài/Part tối đa 30 câu (đếm như trên Danh sách: mỗi ý nhỏ của câu ghép là 1 câu khi
//    scoreByField). Bài dài hơn được TỰ CHIA thành nhiều Part: xáo trộn cố định (theo id bài) rồi chia đều,
//    đủ hết mọi câu; trong mỗi Part các câu giữ thứ tự gốc để tiêu đề nhóm và bài đọc vẫn đúng chỗ.
// 2. (14/10/2026) Bài quiz CHỈ CÓ TIẾNG ANH: mọi gợi ý/giải thích/ghi chú có tiếng Việt bị lọc bỏ tự động.
// 3. (14/10/2026) Thẻ REMEMBER trình bày theo từng Class Diary: "1. Class Diary 13/10/2026" + nội dung, …
//    Ghi chú viết dạng dòng "(dd/mm) nội dung" → tự gom theo ngày (mới nhất trước), bỏ phần ngày lẻ.
window.quizRegistry=window.quizRegistry||[];
window.QUIZ_PART_LIMIT=30;
(()=>{
  // ── Lọc tiếng Việt ──
  const VI=/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
  const english=text=>{
    if(!text||!VI.test(text)) return text;
    let out=String(text).replace(/\s*\([^()]*\)/g,m=>VI.test(m)?"":m);          // bỏ "(…tiếng Việt…)"
    // bỏ các đoạn tiếng Việt ngăn cách bởi "•" hoặc "·" (giữ nguyên dấu ngăn cách giữa các đoạn tiếng Anh)
    const pieces=out.split(/(\s+[•·]\s+)/);let kept="";
    for(let i=0;i<pieces.length;i+=2){if(VI.test(pieces[i])) continue;kept+=(kept&&i>0?pieces[i-1]:"")+pieces[i]}
    return VI.test(kept)?"":kept.trim();
  };
  // ── Thẻ REMEMBER: gom theo ngày Class Diary ──
  const YEAR="2026";
  const firstDate=text=>{const m=/(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?/.exec(text||"");return m?`${m[1].padStart(2,"0")}/${m[2].padStart(2,"0")}/${m[3]||YEAR}`:null};
  const dateKey=d=>{const [dd,mm,yy]=d.split("/");return `${yy}${mm}${dd}`};
  function noteDays(reading){
    if(Array.isArray(reading.days)) return reading.days;
    const lines=String(reading.text||"").split("\n").map(l=>l.trim()).filter(Boolean);
    let fallback=null;const days=new Map();
    for(const line of lines){
      if(line.startsWith("📅")){fallback=firstDate(line);continue}
      let date=fallback,body=line;
      const m=/^\(([^)]*)\)\s*(.*)$/.exec(line);
      if(m){
        date=firstDate(m[1])||fallback;body=m[2];
        const lesson=/\bL(\d+)\b/.exec(m[1]);if(lesson) body=`Lesson ${lesson[1]}: ${body}`;
      }
      body=english(body);if(!body||!date) continue;
      if(!days.has(date)) days.set(date,[]);
      days.get(date).push(body);
    }
    return [...days.entries()].sort((a,b)=>dateKey(b[0]).localeCompare(dateKey(a[0]))).map(([date,items])=>({date,items}));
  }
  function englishOnly(entry){
    const subject=entry.subject;
    const questions=subject.questions.map(item=>({...item,
      hint:VI.test(item.hint||"")?"":item.hint||"",explain:english(item.explain||""),text:english(item.text)||item.text,
      fields:item.fields?.map(f=>({...f,label:english(f.label)||f.label}))}));
    const readings=(subject.readings||[]).map(r=>{
      const title=String(r.title||"").replace(/^Ghi nhớ/,"Remember").replace(/\s+—\s+\d{1,2}\/\d{1,2}$/,"");
      const out={...r,title:english(title)||title,byline:english(r.byline||"")};
      if(r.mode==="notes") out.days=noteDays(r);
      if(r.mode==="bonus") out.byline="Links from the Class Diary";
      return out;
    });
    const groups=(subject.groups||[]).map(g=>({...g,title:english(g.title)||g.title,subtitle:english(g.subtitle||"")}));
    return {...entry,title:english(entry.title)||entry.title,
      subject:{...subject,subtitle:english(subject.subtitle)||subject.subtitle,questions:questions.map(q=>({...q,section:english(q.section)||q.section})),groups,readings}};
  }

  // ── Chia Part ≤ 30 câu ──
  const unitsOf=(subject,item)=>subject.scoreByField&&item.type==="compound"?item.fields.length:1;
  const seeded=key=>{let h=2166136261;for(const c of key){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0}return()=>{h=Math.imul(h^(h>>>15),2246822507)>>>0;h=Math.imul(h^(h>>>13),3266489909)>>>0;h^=h>>>16;return(h>>>0)/4294967296}};
  const shuffle=(list,key)=>{const rand=seeded(key),out=[...list];for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
  const partTitle=(title,k)=>{
    const letter="abcdefghij"[k];
    if(/\(Part\s*(\d+)/i.test(title)) return title.replace(/\(Part\s*(\d+)/i,(m,num)=>`(Part ${num}${letter}`);
    return /\)$/.test(title)?title.replace(/\)$/,` · Part ${k+1})`):`${title} (Part ${k+1})`;
  };
  function split(entry){
    const subject=entry.subject,limit=window.QUIZ_PART_LIMIT;
    const units=subject.questions.map(item=>unitsOf(subject,item));
    const total=units.reduce((a,b)=>a+b,0);
    if(total<=limit) return [entry];
    // Xáo trộn cố định, xếp câu nhiều ý trước (giữ thứ tự xáo giữa các câu cùng cỡ) vào Part đang ít câu nhất.
    // Nếu vẫn có Part > 30 thì tăng số Part và chia lại.
    const order=shuffle(subject.questions.map((_,i)=>i),entry.id).map((i,rank)=>({i,rank}))
      .sort((a,b)=>units[b.i]-units[a.i]||a.rank-b.rank).map(x=>x.i);
    let count=Math.ceil(total/limit),buckets;
    for(;;count++){
      buckets=Array.from({length:count},()=>({indexes:[],units:0}));
      for(const i of order){
        const pick=buckets.reduce((a,b)=>b.units<a.units?b:a);
        pick.indexes.push(i);pick.units+=units[i];
      }
      if(buckets.every(b=>b.units<=limit)) break;
    }
    return buckets.map((bucket,k)=>{
      const indexes=bucket.indexes.sort((a,b)=>a-b);
      const questions=indexes.map(i=>subject.questions[i]);
      const groupOf=i=>(subject.groups||[]).find(g=>i>=g.start&&i<=g.end);
      const groups=[];
      indexes.forEach((orig,pos)=>{
        const g=groupOf(orig),last=groups[groups.length-1];
        if(last&&last.source===g) last.end=pos;
        else groups.push({source:g,title:g?g.title:"Review",subtitle:g?g.subtitle:"",start:pos,end:pos});
      });
      const used=new Set(questions.map(q=>q.readingId).filter(Boolean));
      const allIds=new Set(subject.questions.map(q=>q.readingId).filter(Boolean));
      const readings=(subject.readings||[]).filter(r=>used.has(r.id)||!allIds.has(r.id));
      return {...entry,id:`${entry.id}-p${k+1}`,title:partTitle(entry.title,k),
        subject:{...subject,subtitle:`${subject.subtitle} · Part ${k+1}/${count}`,questions,groups:groups.map(({source,...g})=>g),readings}};
    });
  }
  window.registerQuiz=entry=>{window.quizRegistry.push(...split(englishOnly(entry)))};
})();
