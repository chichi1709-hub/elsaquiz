// TỔNG HỢP KIẾN THỨC — Science Unit 2 Module 1 · Lesson 3: Animals and Their Parents (Class Diary 13/10 → 23/10/2026).
// 2 bài trong nhóm Tổng hợp (uploadDate "weekly-…"):
//   (1) Key Concepts Test: câu hỏi chắt lọc kiến thức chính của Lesson 3 (≤ 30 ý → 1 Part);
//   (2) Review: gộp TOÀN BỘ câu của các bài Science theo ngày thuộc Lesson 3 (13/10 Science Probe, 15, 16, 20, 22, 23/10),
//       xếp theo chủ đề, mang theo bài đọc và link Bonus. Các bài ngày vẫn giữ ở tab "Quiz theo ngày".
(()=>{
  const S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const sci=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const KEY="weekly-sci-u2m1-l3",LABEL="Tổng hợp kiến thức · Unit 2 Module 1 · Lesson 3";
  const BABY=["kitten","puppy","calf","cub","fawn","duckling"];

  const NOTES=[
    "📅 Class Diary: 23/10/2026",
    "(23/10) The dog will be bigger as it grows. A dog grows: newborn puppy → puppy → young dog → adult dog.",
    "(22/10) trait: a feature of a living thing. Traits describe how an animal looks. The way an animal acts is also a trait.",
    "(22/10) Animals of the same kind look like each other. They sound the same. They act the same.",
    "(22/10) Offspring can look different from its parents, too.",
    "(20/10) A life cycle is how a living thing grows and lives.",
    "(20/10) Children are much like their parents, but not exactly the same.",
    "(20/10) Kittens and their mother have the same structures. They are different size and color.",
    "(16/10) Birds and their offspring both have beaks, wings, and feathers. They can be different sizes and colors.",
    "(15/10) Lesson 3: Animals and Their Parents. Birds and reptiles hatch from eggs.",
    "(13/10) Offspring look similar to their parents, but they do not look exactly the same."
  ];

  // ───── (1) Key Concepts Test ─────
  const TEST=[
    sci("Key vocabulary","Choose the answer.",[
      choice("title","Lesson 3 is called ___.",["Animals and Their Parents","Functions of Animal Structures","Animal Protection"],"Animals and Their Parents","🐣"),
      choice("trait","A trait is ___.",["a feature of a living thing","a kind of home","a food"],"a feature of a living thing","🔎"),
      choice("offspring","Offspring are ___.",["the young of an animal","the parents","the home of an animal"],"the young of an animal","👶"),
      choice("young","Young means ___.",["recently born","very old","very big"],"recently born","🍼"),
      choice("life","A life cycle is ___.",["how a living thing grows and lives","a kind of bike","a home for animals"],"how a living thing grows and lives","🔄")
    ],"trait: a feature of a living thing · offspring: the young of an animal · young: recently born · life cycle: how a living thing grows and lives."),
    sci("Parents and offspring","Similar, but not exactly the same.",[
      choice("similar","Young animals look ___ their parents.",["similar to","exactly the same as","nothing like"],"similar to","🐥"),
      multi("birds","Birds and their offspring both have… Choose 3.",["beaks","wings","feathers","fur","fins"],["beaks","wings","feathers"],"🐦"),
      choice("diff","How can birds and their offspring be different?",["They can be different sizes and colors.","One has wings, one has fins.","They are always the same."],"They can be different sizes and colors.","🎨"),
      choice("flamingo","Flamingo: parents are pink and the offspring is ___.",["white","pink","green"],"white","🦩"),
      choice("kittens","Kittens and their mother have the same structures. They are different ___.",["size and color","animals","homes"],"size and color","🐱")
    ],"Young animals look similar to their parents but not exactly the same. Birds and their offspring both have beaks, wings, and feathers, but can be different sizes and colors (flamingo: parents pink, offspring white). Kittens and their mother have the same structures but different size and color."),
    sci("Traits","Looks, sounds, and acts.",[
      multi("kinds","Traits describe… Choose 2.",["how an animal looks","the way an animal acts","the name of the animal"],["how an animal looks","the way an animal acts"],"✏️"),
      choice("raccoon","A raccoon and her babies have the same ___.",["black mask","long neck","wings"],"black mask","🦝"),
      choice("cow","A mother cow and her calf have a similar ___.",["color","beak","shell"],"color","🐄"),
      choice("same","Animals of the same kind sound the same and ___ the same.",["act","fly","swim"],"act","🔊"),
      choice("people","Which is a trait of a person?",["the color of your eyes","your backpack","your pencil"],"the color of your eyes","👀")
    ],"Traits describe how an animal looks and acts. Raccoons share a black mask; a cow and her calf have a similar color. Animals of the same kind sound and act the same. The color of your hair and eyes are traits."),
    sci("Growing and changing","Animals grow and change.",[
      choice("hatch","Which animals hatch from eggs?",["birds and reptiles","dogs and cats","cows and horses"],"birds and reptiles","🥚"),
      choice("egg","Which egg does not belong in the nest?",["the egg that is bigger than the other three eggs","the smallest egg","all eggs belong"],"the egg that is bigger than the other three eggs","🪺"),
      choice("dog","How will a dog change as it gets older?",["It will be bigger as it grows.","It will get smaller.","It will turn into a cat."],"It will be bigger as it grows.","🐶"),
      choice("meerkat","The young meerkat will grow and change, but it will always look ___ its parents.",["similar to","nothing like","exactly like"],"similar to","🦦")
    ],"Birds and reptiles hatch from eggs. The bigger egg does not belong in the nest (cuckoo). A dog gets bigger as it grows. The young meerkat grows and changes but always looks similar to its parents."),
    sci("Baby animals","Match the parent with its baby.",[
      select("cat","cat",BABY,"kitten","🐱"),select("dog","dog",BABY,"puppy","🐶"),select("cow","cow",BABY,"calf","🐄"),
      select("lion","lion",BABY,"cub","🦁"),select("deer","deer",BABY,"fawn","🦌"),select("duck","duck",BABY,"duckling","🦆")
    ],"cat – kitten · dog – puppy · cow – calf · lion – cub · deer – fawn · duck – duckling")
  ];
  registerQuiz({
    id:"sci-u2m1-l3-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Lesson 3 · Key Concepts Test",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"Key concepts · Unit 2 Module 1 · Lesson 3: Animals and Their Parents · Class Diary 13/10–23/10/2026",scoreByField:true,
      groups:groupsOf([["Key vocabulary","trait · offspring · young · life cycle",1],["Parents and offspring","similar, but not exactly the same",1],["Traits","looks · sounds · acts",1],["Growing and changing","eggs · dogs · meerkats",1],["Baby animals","parent and baby",1]]),
      questions:TEST,
      readings:[{id:"notes-sci-l3",title:"Remember — Science Lesson 3",byline:"Animals and Their Parents · Class Diary 13/10–23/10/2026",mode:"notes",text:NOTES.join("\n")}]}
  });

  // ───── (2) Review: gộp mọi câu của các bài Science theo ngày thuộc Lesson 3 ─────
  const SOURCES=[["class-diary-2026-10-13-science",q=>/Lesson 3|Probe/i.test(q.section)],["class-diary-2026-10-15-science"],["class-diary-2026-10-16-science"],
    ["class-diary-2026-10-20-science"],["class-diary-2026-10-22-science"],["class-diary-2026-10-23-science"]];
  const TOPICS=[["Vocabulary and traits",/trait|vocabulary/i],["Stories and texts",/daisy|families|close reading|raccoon|cow|sound and act|reading connection|kitten/i],
    ["Inquiry activities",/inquiry|investigate|claim|communicate|record|prediction|dogs/i],["Parents and offspring",/.*/]];
  const buckets=new Map(TOPICS.map(([t])=>[t,[]])),readings=[{id:"notes-sci-l3r",title:"Remember — Science Lesson 3",byline:"Animals and Their Parents",mode:"notes",text:NOTES.join("\n")}],links=new Map();
  for(const [id,filter] of SOURCES){
    const src=(window.quizSources||{})[id];if(!src) continue;
    const day=src.uploadDate.slice(5).split("-").reverse().join("/");
    src.subject.questions.filter(q=>!filter||filter(q)).forEach(q=>{
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}}
      const topic=(TOPICS.find(([,re])=>re.test(q.section))||TOPICS[3])[0];buckets.get(topic).push(copy);
    });
    if(!filter) (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
  }
  if(links.size) readings.push({id:"bonus-sci-l3",title:"Bonus · Video & game",byline:"Links from the Class Diaries of Lesson 3",mode:"bonus",links:[...links.values()],text:""});
  const parts=[...buckets].filter(([,list])=>list.length);
  registerQuiz({
    id:"sci-u2m1-l3-review",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Lesson 3 · Review (all lessons)",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"All Lesson 3 classes · Unit 2 Module 1 · Animals and Their Parents · Class Diary 13/10–23/10/2026",scoreByField:true,
      groups:groupsOf(parts.map(([t,list])=>[t,"",list.length])),questions:parts.flatMap(([,list])=>list),readings}
  });
})();
