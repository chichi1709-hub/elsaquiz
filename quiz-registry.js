// Nạp trước mọi file quiz. Mỗi file trong quizzes/ gọi registerQuiz({...}) một lần cho mỗi bài.
//
// QUY TẮC (phụ huynh yêu cầu 13/10/2026): mỗi bài/Part tối đa 30 câu (đếm như trên Danh sách:
// mỗi ý nhỏ của câu ghép là 1 câu khi scoreByField). Bài dài hơn được TỰ CHIA thành nhiều Part:
// câu hỏi được xáo trộn cố định (theo id bài) rồi chia đều, đủ hết mọi câu; trong mỗi Part các câu
// giữ thứ tự gốc để tiêu đề nhóm và bài đọc vẫn đúng chỗ.
window.quizRegistry=window.quizRegistry||[];
window.QUIZ_PART_LIMIT=30;
(()=>{
  const unitsOf=(subject,item)=>subject.scoreByField&&item.type==="compound"?item.fields.length:1;
  const seeded=key=>{let h=2166136261;for(const c of key){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0}return()=>{h=Math.imul(h^(h>>>15),2246822507)>>>0;h=Math.imul(h^(h>>>13),3266489909)>>>0;h^=h>>>16;return(h>>>0)/4294967296}};
  const shuffle=(list,key)=>{const rand=seeded(key),out=[...list];for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
  const partTitle=(title,k,n)=>{
    const letter="abcdefghij"[k];
    if(/\(Part\s*(\d+)/i.test(title)) return title.replace(/\(Part\s*(\d+)/i,(m,num)=>`(Part ${num}${letter}`);
    return /\)$/.test(title)?title.replace(/\)$/,` · Part ${k+1})`):`${title} (Part ${k+1})`;
  };
  function split(entry){
    const subject=entry.subject,limit=window.QUIZ_PART_LIMIT;
    const units=subject.questions.map(item=>unitsOf(subject,item));
    const total=units.reduce((a,b)=>a+b,0);
    if(total<=limit) return [entry];
    // Xáo trộn cố định, rồi xếp câu nhiều ý trước (giữ thứ tự xáo giữa các câu cùng cỡ) vào Part đang ít câu nhất.
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
      // Dựng lại nhóm: giữ tiêu đề nhóm gốc cho từng đoạn câu liên tiếp thuộc cùng nhóm.
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
      return {...entry,id:`${entry.id}-p${k+1}`,title:partTitle(entry.title,k,count),
        subject:{...subject,subtitle:`${subject.subtitle} · Part ${k+1}/${count}`,questions,groups:groups.map(({source,...g})=>g),readings}};
    });
  }
  window.registerQuiz=entry=>{window.quizRegistry.push(...split(entry))};
})();
