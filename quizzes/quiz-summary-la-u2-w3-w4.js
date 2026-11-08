// TỔNG HỢP KIẾN THỨC TUẦN — Language Arts Unit 2 Week 3 + Week 4 (Class Diary từ 23/10/2026, sau bộ W1&2).
// Không ghi ngày upload: uploadDate bắt đầu bằng "weekly" → nhóm "Tổng hợp" riêng, nhãn "Tổng hợp kiến thức tuần (W3&4)".
// 2 bài: (1) Practice Test theo format bài kiểm tra thật (20 câu): 1 bài đọc + đọc hiểu (1–6) · High-frequency words (7–10)
// · Phonemic Awareness (11–13) · Phonics (14–17) · Grammar/Structural Analysis (18–20) — 1 Part, đúng thứ tự;
// (2) Review: gộp TOÀN BỘ câu của các bài LA theo ngày trong DAILY_LA (bỏ câu trùng), xếp theo chủ đề, mang theo bài đọc,
//     gom mọi link Bonus; thẻ Remember ghép từ thẻ Remember của từng ngày (ngày mới nhất trước).
// Các bài LA theo ngày của W3 vẫn giữ ở tab "Quiz theo ngày" (tuần 3–4 chưa học xong). Diary mới của W3/W4: thêm id vào DAILY_LA.
// Bài đọc “Who Lives at the Pond?” do mình viết theo kiểu bài kiểm tra (dùng HFW eat, no, of, under, who và end blends của tuần 3).
(()=>{
  const L="assets/mascot/academy/language.webp";
  const KEY="weekly-la-u2-w3-w4",LABEL="Tổng hợp kiến thức tuần (W3&4)";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["eat","no","of","under","who"],BLENDS=["st","nk","nd","sk","mp","nt"];
  const DAILY_LA=["class-diary-2026-10-23-language","class-diary-2026-10-26-language","class-diary-2026-10-27-language","class-diary-2026-10-28-language",
    "class-diary-2026-10-29-language","class-diary-2026-11-02-language","class-diary-2026-11-03-language","class-diary-2026-11-04-language",
    "class-diary-2026-11-05-language",
    "class-diary-2026-11-06-language","la-common-proper-nouns-test-2026-11-06"];
  const sources=DAILY_LA.map(id=>[id,(window.quizSources||{})[id]]).filter(([,src])=>src);
  const dayOf=src=>(src.uploadDate||"").slice(5).split("-").reverse().join("/");
  const RANGE=sources.length?`${dayOf(sources[0][1])}–${dayOf(sources[sources.length-1][1])}/2026`:"";
  // Remember: ghép thẻ Remember của từng bài ngày, ngày mới nhất trước.
  const NOTES=[...sources].reverse().flatMap(([,src])=>{const n=(src.subject.readings||[]).find(r=>r.mode==="notes");return n?n.text.split("\n").filter(Boolean):[]});
  const notesCard=id=>({id,title:"Remember — Unit 2 Week 3 + Week 4",byline:`Language Arts · Class Diary ${RANGE}`,mode:"notes",text:NOTES.join("\n")});

  // ───── (1) Practice Test: đúng thứ tự 5 phần của đề thật ─────
  const TEST=[
    la("Reading Comprehension · Who Lives at the Pond?","Read the text. Then answer the questions.",[
      choice("where","Where do the animals live?",["at a pond","in a forest","in a desert"],"at a pond","🪷"),
      choice("frog","What does the frog do?",["It jumps in and swims under the water.","It flies to the pond.","It sleeps on a rock in the sun."],"It jumps in and swims under the water.","🐸"),
      choice("ducks","What do the ducks eat?",["bugs and plants","nuts","fish and eggs"],"bugs and plants","🦆"),
      choice("turtle","“The turtle’s shell is hard.” The word turtle’s tells about ___.",["one turtle","many turtles","a fish"],"one turtle","🐢"),
      choice("genre","The text tells true facts about real animals at a pond. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("purpose","Why did the author write this text?",["To teach us about animals that live at a pond.","To tell a funny made-up story.","To teach us how to make a pond."],"To teach us about animals that live at a pond.","🎯")
    ],"Lots of animals live at the pond. The frog jumps in and swims under the water. Ducks eat bugs and plants. The turtle’s shell is hard (turtle’s = one turtle). The text gives facts about real animals → nonfiction. The author wants to teach us about animals that live at a pond.",{readingId:"testText"}),
    {section:"High-Frequency Words · eat, no, of, under, who",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,text:"Choose the word that makes the sentence make sense.",fields:[
      bank("who","___ lives at the pond?",HFW,"who","❓"),
      bank("under","The frog swims ___ the water.",HFW,"under","🌊"),
      bank("eat","Ducks ___ bugs and plants.",HFW,"eat","🦆"),
      bank("no","Fish have ___ legs.",HFW,"no","🐟")
    ],explain:"Who lives at the pond? · The frog swims under the water. · Ducks eat bugs and plants. · Fish have no legs."},
    la("Phonemic Awareness · Phoneme Blending","Say the sounds. Blend them to make a word, or count the sounds.",[
      choice("pond","Blend the sounds: /p/ /o/ /n/ /d/",["pond","pen","pod"],"pond","🪷"),
      choice("rest","Blend the sounds: /r/ /e/ /s/ /t/",["rest","red","nest"],"rest","😴"),
      choice("count","How many sounds do you hear in jump? /j/ /u/ /m/ /p/",["4","3","5"],"4","🔢")
    ],"/p/ /o/ /n/ /d/ → pond · /r/ /e/ /s/ /t/ → rest · jump has 4 sounds: /j/ /u/ /m/ /p/."),
    la("Phonics · End blends","Choose the end blend that finishes the word.",[
      select("nest","ne___",BLENDS,"st","🪺"),
      select("sink","si___",BLENDS,"nk","🚰"),
      select("land","la___",BLENDS,"nd","🏝️"),
      select("mask","ma___",BLENDS,"sk","🎭")
    ],"nest (st) · sink (nk) · land (nd) · mask (sk). Some words have end blends, such as st and nk: nest, sink."),
    la("Grammar and Structural Analysis","Choose the correct answer.",[
      choice("dog","One dog has a bed. Which is correct?",["The dog’s bed is little.","The dogs bed is little.","The dogs’ bed is little."],"The dog’s bed is little.","🐶"),
      choice("girls","Many girls have tents. Which is correct?",["The girls’ tents are big.","The girl tents are big.","The girls tents are big."],"The girls’ tents are big.","⛺"),
      choice("ing","Look! The frog is ___ now.",["jumping","jumped","jump"],"jumping","🐸")
    ],"One person or thing → ’s: the dog’s bed. More than one → s’: the girls’ tents. Add -ing to an action word to tell what is happening now: jump → jumping.")
  ];
  registerQuiz({
    id:"la-u2-w3-w4-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Practice Test",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Test format · Reading 1–6 · High-frequency words 7–10 · Phonemic awareness 11–13 · Phonics 14–17 · Grammar 18–20",scoreByField:true,
      groups:groupsOf([
        ["Reading Comprehension","Test questions 1–6 · read the text, then answer",1],
        ["High-Frequency Words","Test questions 7–10 · choose the word that makes the sentence make sense",1],
        ["Phonemic Awareness","Test questions 11–13 · blend the sounds, count the sounds",1],
        ["Phonics","Test questions 14–17 · end blends st, nk, nd, sk",1],
        ["Grammar and Structural Analysis","Test questions 18–20 · possessive nouns ’s / s’ · inflectional ending -ing",1]
      ]),
      questions:TEST,
      readings:[
        {id:"testText",title:"Who Lives at the Pond?",byline:"Test-style reading · a new text with words from Week 3",mode:"reference",text:"Look at this pond. Who lives here? Lots of animals live at the pond.\n\nA frog sits on a log. It jumps in and swims under the water.\n\nDucks swim at the pond, too. They eat bugs and plants.\n\nA turtle rests on a rock in the sun. The turtle’s shell is hard.\n\nFish swim in the pond. Fish have no legs. They do not go on the land.\n\nThe pond is the best spot for lots of animals!"},
        notesCard("notes-la-u2w34-test")
      ]}
  });

  // ───── (2) Review: gộp mọi câu của các bài LA theo ngày (bỏ câu trùng nội dung + đáp án) ─────
  const norm=v=>String(Array.isArray(v)?v.join("|"):v??"").toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9'|/+=-]+/g," ").trim();
  const fieldKeys=q=>(q.type==="compound"?q.fields:[q]).map(f=>`${norm(f.label||q.text)}#${norm(f.answer)}`);
  const BUCKET=[
    ["High-Frequency Words","eat · no · of · under · who · all · call · day · her · want",/high-frequency|\bhfw\b/i],
    ["Phonemic Awareness","phoneme blending",/phonemic|phoneme/i],
    ["Writing","write a sentence · Ben’s student model · capital letters · Write About the Anchor Text · a good beginning · end punctuation",/writing(?! companion)/i],
    ["Grammar","singular and plural possessive nouns ’s / s’ · fix the possessives · common and proper nouns",/grammar|possessive|fix the draft|write each sentence/i],
    ["Structural Analysis","inflectional ending -ing · What is happening now?",/structural|-ing|circle the word/i],
    ["Phonics","end blends st · nk · nd · nt · sk · mp · ft · spelling words · consonant digraphs sh · th · -ng",/phonics|end blend|sort the words|spelling/i],
    ["Research and Inquiry","Pick to research: animal · habitat · food · Where Animals Live",/research/i],
    ["Essential Question and Vocabulary","Where do animals live together? · How do people help out in the community? · habitat · depend · hibernate · tranquil · tolerate · Ways to Help · leadership · admire",/build knowledge|build background|build vocabulary|vocabulary|essential/i],
    ["Stories and Texts","The Best Spot · Babies in the Bayou · At a Pond · Way Down Deep (poetry) · Thump Thump Helps Out (fantasy) · The Three Billy Goats Gruff · nonfiction · author’s purpose",/.*/]];
  const buckets=new Map(BUCKET.map(([t,sub])=>[t,{subtitle:sub,items:[]}]));
  const seen=new Set(),readings=[notesCard("notes-la-u2w34")],links=new Map();
  for(const [id,src] of sources){
    const day=dayOf(src);
    for(const q of src.subject.questions){
      const keys=fieldKeys(q);if(!keys.some(k=>!seen.has(k))) continue;
      keys.forEach(k=>seen.add(k));
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){
        const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}
      }
      buckets.get(BUCKET.find(([,,re])=>re.test(q.section||""))[0]).items.push(copy);
    }
    (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
  }
  if(links.size) readings.push({id:"bonus-la-u2w34",title:"Bonus · Video & game",byline:"All links from the Class Diaries of Unit 2 Week 3 and Week 4",mode:"bonus",links:[...links.values()],text:""});
  const parts=[...buckets].filter(([,b])=>b.items.length);
  registerQuiz({
    id:"la-u2-w3-w4-summary",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Review (all lessons)",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:`All Language Arts classes · Unit 2 Week 3 + Week 4 · Class Diary ${RANGE}`,scoreByField:true,
      groups:groupsOf(parts.map(([t,b])=>[t,b.subtitle,b.items.length])),questions:parts.flatMap(([,b])=>b.items),readings}
  });
})();
