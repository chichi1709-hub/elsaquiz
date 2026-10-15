// Quiz 15/10/2026 — Class Diary 15/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 (contractions homework, singular & plural nouns -s/-es, short u spelling,
// Anchor Text "The Pigs, the Wolf, and the Mud"). Science: Lesson 3 Animals and Their Parents (Explore the phenomenon).
// Ảnh: web/assets/2026-10-15/ (tạo bằng web/_reference/tao_anh_2026-10-15.py).
(()=>{
  const IMG=name=>`assets/2026-10-15/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 15/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const SES=["s","es"];
  const BOX3=["it’s","he’s","she’s"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  // Tóm tắt truyện (lời của mình, theo video đọc truyện) — không chép nguyên văn sách.
  const pigsSummary="Genre: Fantasy. Three pigs live in a hut made of mud. They love mud and they love a mess.\n\nThe big bad wolf rings the bell and wants to come in. The pigs say no.\n\nThe wolf huffs and puffs, but he gets mud all over him. He can’t huff and puff in mud!\n\nThe wolf kicks the hut and it falls in. The wolf does not like the mud. The pigs are a big mess, so he does not eat them. He leaves.\n\nThe pigs decide to build a new hut out of mud.";

  const LA_Q=[
    // ── Homework check: Practice Book 106 & 110 (contractions with 's) ──
    la("Homework check · Contractions (Practice Book 106)","Read the contractions. Choose the two words that make up the contraction.",[
      select("its","it’s =",["it is","let us","she is"],"it is","🌧️"),
      select("lets","let’s =",["it is","let us","she is"],"let us","🎲"),
      select("shes","she’s =",["it is","let us","she is"],"she is","👧")
    ],"it’s = it is · let’s = let us · she’s = she is (Practice Book, page 106)"),
    {section:"Homework check · Use a contraction (Practice Book 106)",img:L,layout:"icon-activity",type:"compound",wordBank:BOX3,
      text:"Use a contraction from the box to complete the sentences.",fields:[
      bank("story","📖👦 ___ reading a story.",BOX3,"he’s","👦"),
      bank("book","📕 ___ his new favorite book.",BOX3,"it’s","📕"),
      bank("ball","⚽👧 ___ playing ball.",BOX3,"she’s","👧")
    ],explain:"He’s reading a story. · It’s his new favorite book. · She’s playing ball. (Practice Book, page 106)"},
    la("Homework check · Contractions (Practice Book 110)","A contraction is a shorter way of writing two words. Write the contraction for the underlined words.",[
      select("box","Where is the box?",["Where’s","He’s","She’s","There’s"],"Where’s","📦"),
      select("eggs","He is getting six eggs.",["Where’s","He’s","She’s","There’s"],"He’s","🥚"),
      select("boxes","She is putting eggs in the boxes.",["Where’s","He’s","She’s","There’s"],"She’s","📦"),
      select("truck","There is a big truck.",["Where’s","He’s","She’s","There’s"],"There’s","🚚"),
      choice("replace","In it is → it’s, the apostrophe (’) replaces the letter ___.",["i","s","t"],"i","❓")
    ],"Where’s the box? · He’s getting six eggs. · She’s putting eggs in the boxes. · There’s a big truck. A contraction is a shorter way of writing two words. In it is → it’s, the apostrophe (’) replaces the letter i. (Practice Book, page 110)"),

    // ── Grammar: Singular and Plural Nouns (adding s and es) ──
    la("Grammar · Singular and plural","A singular noun names one person, one place, or one thing. A plural noun names more than one person, place, or thing.",[
      choice("singular","Singular means when you have ___ noun.",["1","2 or more","no"],"1","1️⃣"),
      choice("plural","Plural means when you have ___ nouns.",["2 or more","1","no"],"2 or more","🔢"),
      select("cat","1 cat",["singular noun","plural noun"],"singular noun","🐱"),
      select("cats","6 cats",["singular noun","plural noun"],"plural noun","🐱"),
      select("foxes","3 foxes",["singular noun","plural noun"],"plural noun","🦊")
    ],"Singular means when you have 1 noun: 1 cat, 1 fox. Plural means when you have 2 or more nouns: 6 cats, 3 foxes.",{readingId:"plural"}),
    la("Grammar · Add s or es?","If a word ends in s, ss, sh, ch, x, z → add -es to the end.",[
      select("dog","dog → dog___",SES,"s","🐶"),
      select("box","box → box___",SES,"es","📦"),
      select("bus","bus → bus___",SES,"es","🚌"),
      select("dish","dish → dish___",SES,"es","🍽️"),
      select("cat","cat → cat___",SES,"s","🐱"),
      select("fox","fox → fox___",SES,"es","🦊")
    ],"a dog → 50 dogs · a box → many boxes · bus → buses · dish → dishes · 1 cat → 6 cats · one fox → two foxes. If a noun ends in -x, -s, or -ss (also sh, ch, z), add -es."),
    la("Grammar · Choose the plural","Choose the correct plural noun.",[
      choice("fox","one fox → two ___",["foxes","foxs","fox"],"foxes","🦊"),
      choice("dish","one dish → many ___",["dishes","dishs","dish"],"dishes","🍽️"),
      choice("bus","one bus → three ___",["buses","buss","bus"],"buses","🚌"),
      choice("dog","a dog → 50 ___",["dogs","doges","dog"],"dogs","🐶")
    ],"two foxes · many dishes · three buses · 50 dogs"),
    // Game Wordwall "Plural Nouns - s or es" (group sort, 16 từ).
    la("Grammar · Game: s or es","Add “s” or add “es”?",[
      select("boy","boy",SES,"s","👦"),select("lunch","lunch",SES,"es","🍱"),select("car","car",SES,"s","🚗"),select("glass","glass",SES,"es","🥛"),
      select("pencil","pencil",SES,"s","✏️"),select("brush","brush",SES,"es","🪥"),select("ball","ball",SES,"s","⚽"),select("inch","inch",SES,"es","📏")
    ],"Add “s”: boys, cars, pencils, balls · Add “es”: lunches, glasses, brushes, inches (game Plural Nouns – s or es). Words that end in ch, sh, ss, x → add es."),

    // ── Phonics: Short u (Practice Book 101 — spelling) ──
    la("Spelling · Short u words","Choose the word that is spelled correctly.",[
      choice("run","🏃",["run","rnu","ran"],"run","🏃"),
      choice("fun","🎉",["fun","fon","fnu"],"fun","🎉"),
      choice("nut","🥜",["nut","not","nat"],"nut","🥜"),
      choice("cut","✂️",["cut","cat","cot"],"cut","✂️"),
      choice("bug","🐞",["bug","bag","big"],"bug","🐞"),
      choice("rug","🟫 (a small carpet on the floor)",["rug","rag","rig"],"rug","🟫")
    ],"Spelling words (Practice Book, page 101): run · fun · nut · cut · bug · rug. They all have the short u sound."),
    la("Spelling · High-frequency words","Choose the word that is spelled correctly.",[
      choice("could","I ___ swim.",["could","cud","coud"],"could","🏊"),
      choice("one","There is ___ duck.",["one","won","wun"],"one","🦆")
    ],"High-frequency words (Practice Book, page 101): could · one"),

    // ── Anchor Text: The Pigs, the Wolf, and the Mud ──
    la("The Pigs, the Wolf, and the Mud · Fantasy","Look at the book. Then choose.",[
      choice("genre","What is the genre of the story?",["Fantasy","Nonfiction","Realistic fiction"],"Fantasy","📚"),
      choice("hut","What is the pigs’ hut made of?",["mud","bricks","glass"],"mud","🐷"),
      choice("mess","mess means ___.",["dirty place","clean room","big house"],"dirty place","🧹")
    ],"Genre: Fantasy. The three pigs live in a hut made of mud. Build Vocabulary — mess: dirty place.",{readingId:"pigs"}),
    la("The Pigs, the Wolf, and the Mud · Characters, Setting, Events","Choose the answer from the story.",[
      choice("pigsDo","The three pigs are in the hut. What do they do?",["They play with mud.","They read books.","They sleep."],"They play with mud.","🐷"),
      choice("wolf1","The wolf is outside the mud hut. What does he do?",["He huffed and puffed.","He sang a song.","He built a house."],"He huffed and puffed.","🐺"),
      choice("wolf2","The wolf is inside the mud hut. What does he do?",["He kicks the hut. It falls in.","He eats lunch.","He cleans the hut."],"He kicks the hut. It falls in.","🦵"),
      choice("wolf3","The wolf is inside the fallen-down mud hut. What happens?",["He does not like the mud. He leaves.","He likes the mud. He stays.","He eats the pigs."],"He does not like the mud. He leaves.","🚪"),
      choice("end","At the end, what do the pigs decide?",["to build a hut out of mud","to build a hut out of bricks","to move to the city"],"to build a hut out of mud","🛖")
    ],"Three pigs · in the hut · play with mud → The wolf · outside the mud hut · huffed and puffed → The wolf · inside the mud hut · kicks the hut, it falls in → The wolf · inside the fallen-down mud hut · he does not like the mud, he leaves → The pigs · outside where their hut used to be · they decide to build a hut out of mud."),
    la("The Pigs, the Wolf, and the Mud · Text evidence","Reading and Writing Companion, page 66.",[
      choice("blow","Why can’t the wolf blow down the pigs’ hut?",["He can’t huff and puff in mud.","The hut is made of bricks.","He is too small."],"He can’t huff and puff in mud.","💨"),
      choice("eat","Why doesn’t the wolf eat the pigs?",["Because the pigs are a mess.","Because he is not hungry.","Because the pigs run away."],"Because the pigs are a mess.","🍽️"),
      write("why","Write a full sentence: Why can’t the wolf blow down the pigs’ hut?",["He can’t huff and puff in mud.","mud"],"✍️")
    ],"Why can’t the wolf blow down the pigs’ hut? He can’t huff and puff in mud. (page 34) · Why doesn’t the wolf eat the pigs? Because the pigs are a mess. (pages 38-39)")
  ];

  registerQuiz({
    id:"class-diary-2026-10-15-language",
    uploadDate:"2026-10-15",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"15/10/2026 · Unit 2 Week 2 · Contractions · Singular and plural nouns (-s, -es) · Short u · The Pigs, the Wolf, and the Mud",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book pages 106 and 110 · contractions with ’s",3],["Grammar: Singular and Plural Nouns","Adding s and es",4],["Phonics: Short u","Practice Book page 101",2],["Anchor Text: The Pigs, the Wolf, and the Mud","Fantasy · Literature Anthology page 26 · Reading and Writing Companion page 66",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1510","Remember — Language Arts",[
          "📅 Class Diary: 15/10/2026",
          "(15/10) A contraction is a shorter way of writing two words. Example: it is → it’s. The apostrophe (’) replaces the letter i.",
          "(15/10) A singular noun names one person, one place, or one thing.",
          "(15/10) A plural noun names more than one person, place, or thing.",
          "(15/10) If a noun ends in -x, -s, or -ss, add -es to make it plural. Example: one fox → two foxes.",
          "(15/10) Add -es: If a word ends in s, ss, sh, ch, x, z, add -es to the end: bus → buses, dish → dishes.",
          "(15/10) Add s: a dog → 50 dogs, 1 cat → 6 cats.",
          "(15/10) Short u spelling words: run · fun · nut · cut · bug · rug",
          "(15/10) Genre: Fantasy. The Pigs, the Wolf, and the Mud.",
          "(15/10) mess: dirty place"
        ],"Unit 2 Week 2"),
        {id:"plural",title:"Singular and Plural Nouns",byline:"Grammar · adding s and es · Class Diary 15/10",mode:"reference",images:[IMG("plural-rule"),IMG("plural-cats"),IMG("plural-foxes"),IMG("singular-plural"),IMG("plural-buses"),IMG("plural-dishes")],text:"A singular noun names one person, one place, or one thing.\nA plural noun names more than one person, place, or thing.\nIf a noun ends in -x, -s, or -ss, add -es to make it plural. Example: one fox → two foxes.\n\nSingular means when you have 1 noun. Plural means when you have 2 or more nouns.\nWhat do we have to do to a noun if we want to make it plural? Add s or es.\nA box → many boxes · A dog → 50 dogs\nIf a word ends in s, ss, sh, ch, x, z → add -es to the end: bus → buses · dish → dishes"},
        {id:"pigs",title:"The Pigs, the Wolf, and the Mud",byline:"Anchor Text · Literature Anthology page 26 · Ellen Tarlow · Story summary",images:[IMG("pigs-wolf-mud-book"),IMG("vocab-mess")],text:pigsSummary},
        bonus("bonus-la-1510",[
          {label:"Video: Adding s and es",url:"https://www.youtube.com/watch?v=S36TFFcYe0I"},
          {label:"Game: Plural nouns – s or es",url:"https://wordwall.net/resource/5186766/plural-nouns-s-or-es"},
          {label:"Video: The Pigs, the Wolf, and the Mud",url:"https://www.youtube.com/watch?v=vvR2yjmbWGE"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  const SCI_Q=[
    sci("Lesson 3 · Animals and Their Parents","Explore the phenomenon: Which of these eggs does not belong in the nest?",[
      choice("title","Lesson 3 is called ___.",["Animals and Their Parents","Functions of Animal Structures","Animal Protection"],"Animals and Their Parents","🐣"),
      multi("hatch","What animals hatch from eggs? Choose 2.",["birds","reptiles","dogs","cats"],["birds","reptiles"],"🥚"),
      choice("nest","🥚🥚🥚 + 🥚(big) Look at the eggs in the nest. What do you observe?",["One egg is bigger than the other three eggs.","All the eggs are the same.","There are no eggs."],"One egg is bigger than the other three eggs.","🪺"),
      choice("belong","Which egg does not belong in the nest?",["the egg that is bigger than the other three eggs","the smallest egg","all the eggs belong"],"the egg that is bigger than the other three eggs","🐦")
    ],"Lesson 3: Animals and Their Parents. Birds and reptiles hatch from eggs. One egg is bigger than the other three eggs, so it does not belong in the nest. (Student Book page 37 · video: Cuckoo Birds)",{readingId:"cuckoo"}),
    sci("Lesson 3 · Science Probe (13/10)","Winnie's dog had six puppies.",[
      choice("puppies","Which best describes the puppies?",["They look similar to their mother.","They look exactly like their mother.","They look very different from their mother."],"They look similar to their mother.","🐶")
    ],"Offspring look similar to their parents, but they do not look exactly the same.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-15-science",
    uploadDate:"2026-10-15",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"15/10/2026 · Unit 2 Module 1 · Lesson 3: Animals and Their Parents · Explore the phenomenon",scoreByField:true,
      groups:groupsOf([["Lesson 3: Animals and Their Parents","Student Book page 37 · Which egg does not belong in the nest?",2]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1510","Remember — Science",[
          "📅 Class Diary: 15/10/2026",
          "(15/10) Lesson 3: Animals and Their Parents.",
          "(15/10) Birds and reptiles hatch from eggs.",
          "(15/10) One egg is bigger than the other three eggs.",
          "(13/10) Winnie's dog had six puppies. They look similar to their mother."
        ],"Unit 2 Module 1 · Lesson 3"),
        {id:"cuckoo",title:"Discover the Phenomenon: Cuckoo Birds",byline:"Student Book page 37 · watch the video in the digital account",mode:"reference",images:[IMG("cuckoo-video")],text:"Explore the phenomenon: Which of these eggs does not belong in the nest?\nLook at the photo. Watch the video. What animals hatch from eggs? What do you observe?"}
      ]}
  });
})();
