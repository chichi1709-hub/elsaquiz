// TỔNG HỢP KIẾN THỨC TUẦN — Language Arts Unit 2 Week 3 + Week 4 (Class Diary từ 23/10/2026, sau bộ W1&2).
// Không ghi ngày upload: uploadDate bắt đầu bằng "weekly" → nhóm "Tổng hợp" riêng, nhãn "Tổng hợp kiến thức tuần (W3&4)".
// 2 bài: (1) Practice Test theo format bài kiểm tra thật (20 câu): 1 bài đọc + đọc hiểu (1–6) · High-frequency words (7–10)
// · Phonemic Awareness (11–13) · Phonics (14–17) · Grammar/Structural Analysis (18–20) — 1 Part, đúng thứ tự;
// (2) Review: gộp TOÀN BỘ câu của các bài LA theo ngày trong DAILY_LA (bỏ câu trùng), xếp theo chủ đề, mang theo bài đọc,
//     gom mọi link Bonus; thẻ Remember ghép từ thẻ Remember của từng ngày (ngày mới nhất trước).
// Các bài LA theo ngày của W3 vẫn giữ ở tab "Quiz theo ngày" (tuần 3–4 chưa học xong). Diary mới của W3/W4: thêm id vào DAILY_LA.
// Bài đọc “The Shell Shop” (viết lại 12/11, phủ cả 2 tuần) do mình viết theo kiểu bài kiểm tra: HFW tuần 3 + 4, end blends (W3), digraphs sh/th/ng (W4).
(()=>{
  const L="assets/mascot/academy/language.webp";
  const KEY="weekly-la-u2-w3-w4",LABEL="Tổng hợp kiến thức tuần (W3&4)";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const DAILY_LA=["class-diary-2026-10-23-language","class-diary-2026-10-26-language","class-diary-2026-10-27-language","class-diary-2026-10-28-language",
    "class-diary-2026-10-29-language","class-diary-2026-11-02-language","class-diary-2026-11-03-language","class-diary-2026-11-04-language",
    "class-diary-2026-11-05-language",
    "class-diary-2026-11-06-language","la-common-proper-nouns-test-2026-11-06","class-diary-2026-11-09-language","class-diary-2026-11-10-language","class-diary-2026-11-11-language",
    "class-diary-2026-11-12-language"];
  // 12/11: user yêu cầu "riêng LA hãy tạo bài quiz tổng hợp" → bài LA ngày 12/11 chỉ làm nguồn cho Review, không hiện ở tab "Quiz theo ngày".
  window.unregisterQuiz("class-diary-2026-11-12-language");
  const sources=DAILY_LA.map(id=>[id,(window.quizSources||{})[id]]).filter(([,src])=>src);
  const dayOf=src=>(src.uploadDate||"").slice(5).split("-").reverse().join("/");
  const RANGE=sources.length?`${dayOf(sources[0][1])}–${dayOf(sources[sources.length-1][1])}/2026`:"";
  // Remember: ghép thẻ Remember của từng bài ngày, ngày mới nhất trước.
  const NOTES=[...sources].reverse().flatMap(([,src])=>{const n=(src.subject.readings||[]).find(r=>r.mode==="notes");return n?n.text.split("\n").filter(Boolean):[]});
  const notesCard=id=>({id,title:"Remember — Unit 2 Week 3 + Week 4",byline:`Language Arts · Class Diary ${RANGE}`,mode:"notes",text:NOTES.join("\n")});

  // ───── (1) Practice Test: đúng thứ tự 5 phần của đề thật — kiến thức của CẢ Week 3 và Week 4 (viết lại 12/11) ─────
  const HFW=["eat","no","of","under","who","all","call","day","her","want"];
  const GENRE_HINT="Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos).";
  const TEST=[
    la("Reading Comprehension · The Shell Shop","Read the story. Then answer the questions.",[
      choice("who","Who has the shell shop?",["Beth the crab","Frog","Fish"],"Beth the crab","🦀"),
      choice("where","Where is the shop?",["at the pond","in a city","in a truck"],"at the pond","🪷"),
      choice("sad","Why is Fish sad?",["He has no cash.","He is sick.","It is raining."],"He has no cash.","🐟"),
      choice("help","How does Beth help out her pal Fish?",["She gives Fish a shell.","She swims under the water.","She calls Duck."],"She gives Fish a shell.","🤝"),
      choice("genre","In this story a crab has a shop and the animals talk. "+GENRE_HINT+" What is the genre?",["Fantasy","Nonfiction","Realistic fiction"],"Fantasy","🦄"),
      fixed("last","What happens LAST?",["The pals eat lunch at the pond.","Beth calls, “Who wants a shell?”","Frog wants a big shell."],"The pals eat lunch at the pond.","🔚")
    ],"Beth the crab has a shell shop at the pond. Fish is sad because he has no cash, so Beth gives him a shell: Beth helps out her pal. Animals talk and have a shop → fantasy. Last, the pals eat lunch at the pond.",{readingId:"testText"}),
    {section:"High-Frequency Words · eat, no, of, under, who · all, call, day, her, want",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,text:"Choose the word that makes the sentence make sense.",fields:[
      bank("call","Beth will ___ her pals to the shop.",HFW,"call","📞"),
      bank("want","I ___ to read a book.",HFW,"want","📖"),
      bank("day","Nell can read all ___ long.",HFW,"day","☀️"),
      bank("under","The frog swims ___ the water.",HFW,"under","🌊"),
      bank("who","___ lives at the pond?",HFW,"who","❓")
    ],explain:"Beth will call her pals to the shop. · I want to read a book. · Nell can read all day long. · The frog swims under the water. · Who lives at the pond?"},
    la("Phonemic Awareness · Phoneme Blending","Say the sounds. Blend them to make a word, or count the sounds.",[
      choice("ship","Blend the sounds: /sh/ /i/ /p/",["ship","sip","chip"],"ship","🚢"),
      choice("thing","Blend the sounds: /th/ /i/ /ng/",["thing","thin","think"],"thing","❔"),
      choice("nest","Blend the sounds: /n/ /e/ /s/ /t/",["nest","net","neck"],"nest","🪺"),
      choice("count","How many sounds do you hear in fish? /f/ /i/ /sh/",["3","4","2"],"3","🔢")
    ],"/sh/ /i/ /p/ → ship · /th/ /i/ /ng/ → thing · /n/ /e/ /s/ /t/ → nest · fish has 3 sounds: /f/ /i/ /sh/ (sh is one sound)."),
    la("Phonics · End blends and digraphs","Look at the picture. Which word names the picture?",[
      choice("p-fish","Which word names the picture?",["fish","fist","fin"],"fish","🐟"),
      choice("p-ship","Which word names the picture?",["ship","shop","chip"],"ship","🚢"),
      choice("p-ring","Which word names the picture?",["ring","rink","rip"],"ring","💍"),
      choice("p-bath","Which word names the picture?",["bath","bat","bash"],"bath","🛁"),
      choice("p-nest","Which word names the picture?",["nest","net","neck"],"nest","🪺"),
      choice("p-sink","Which word names the picture?",["sink","sing","sick"],"sink","🚰")
    ],"Digraphs (Week 4): fish (sh) · ship (sh) · ring (ng) · bath (th). End blends (Week 3): nest (st) · sink (nk)."),
    la("Grammar and Structural Analysis","Choose the correct answer.",[
      choice("dog","One dog has a bed. Which is correct?",["The dog’s bed is little.","The dogs bed is little.","The dogs’ bed is little."],"The dog’s bed is little.","🐶"),
      choice("girls","Many girls have tents. Which is correct?",["The girls’ tents are big.","The girl tents are big.","The girls tents are big."],"The girls’ tents are big.","⛺"),
      choice("ing","Look! The frog is ___ now.",["jumping","jumped","jump"],"jumping","🐸"),
      choice("proper","“Beth has a shop at the pond.” Which word is a proper noun?",["Beth","shop","pond"],"Beth","🔠"),
      choice("common","“Nell gives a book to Dog.” Which word is a common noun?",["book","Nell","Dog"],"book","🔡"),
      choice("picnic","Split the word into closed syllables: picnic",["pic/nic","pi/cnic","picn/ic"],"pic/nic","🧺")
    ],"One → ’s: the dog’s bed. More than one → s’: the girls’ tents. -ing tells what is happening now: jumping. Beth is a proper noun (a name, capital letter); book is a common noun. pic/nic: each closed syllable ends in a consonant and has a short vowel.")
  ];
  registerQuiz({
    id:"la-u2-w3-w4-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Practice Test",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Test format · Week 3 + Week 4 · Reading 1–6 · High-frequency words 7–10 · Phonemic awareness 11–13 · Phonics 14–17 · Grammar 18–20",scoreByField:true,
      groups:groupsOf([
        ["Reading Comprehension","Test questions 1–6 · read the story, then answer",1],
        ["High-Frequency Words","Test questions 7–10 · choose the word that makes the sentence make sense",1],
        ["Phonemic Awareness","Test questions 11–13 · blend the sounds, count the sounds",1],
        ["Phonics","Test questions 14–17 · end blends st, nk · digraphs sh, th, ng",1],
        ["Grammar and Structural Analysis","Test questions 18–20 · possessive nouns ’s / s’ · -ing · common and proper nouns · closed syllables",1]
      ]),
      questions:TEST,
      readings:[
        {id:"testText",title:"The Shell Shop",byline:"Test-style reading · a new story with words from Week 3 and Week 4",mode:"reference",text:"Beth is a crab. She has a shop at the pond. It is a shell shop!\n\n“Who wants a shell?” calls Beth. “Come to my shop!”\n\nFrog, Duck, and Fish come to the shop. It is a sunny day.\n\nFrog wants a big shell. Duck wants a pink shell.\n\nFish has no cash. He is sad.\n\nBeth gives Fish a shell. “This is for you,” she says.\n\n“Thank you!” says Fish. He swims under the water with his shell.\n\nBeth helps all of her pals. Then the pals eat lunch at the pond."},
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
    ["Structural Analysis","inflectional ending -ing · What is happening now? · closed syllables · counting syllables",/structural|-ing|circle the word/i],
    ["Phonics","end blends st · nk · nd · nt · sk · mp · ft · spelling words · consonant digraphs sh · th · -ng · ch",/phonics|end blend|sort the words|spelling/i],
    ["Research and Inquiry","Pick to research: animal · habitat · food · Where Animals Live",/research/i],
    ["Essential Question and Vocabulary","Where do animals live together? · How do people help out in the community? · habitat · depend · hibernate · tranquil · tolerate · Ways to Help · leadership · admire",/build knowledge|build background|build vocabulary|vocabulary|essential/i],
    ["Stories and Texts","The Best Spot · Babies in the Bayou · At a Pond · Way Down Deep (poetry) · Thump Thump Helps Out (fantasy) · The Three Billy Goats Gruff · The Chicks and the Fox · The Story of Martin Luther King Jr. (biography) · Nell’s Books (fantasy) · characters, setting, events · nonfiction · author’s purpose",/.*/]];
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
