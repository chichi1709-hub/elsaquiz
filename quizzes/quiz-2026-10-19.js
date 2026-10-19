// Quiz 19/10/2026 — Class Diary 19/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 (homework short u, singular & plural nouns, HFW review, Compare Text "Homes Around the World",
// rhyme, contractions). Math: Lesson 32 (show numbers up to 10 on a ten-frame). Diary hôm nay không có Science.
// Ảnh: web/assets/2026-10-19/ (tạo bằng web/_reference/tao_anh_2026-10-19.py) — không dùng ảnh có đáp án viết tay.
(()=>{
  const IMG=name=>`assets/2026-10-19/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const rewrite=(id,label,answer,icon)=>({id,label,type:"fill",strict:true,answer:[answer,answer.replace(/’/g,"'")],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 19/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const SPELL=["fun","rug","bed","run","head","bug"];
  const HFW=["one","could","live","then","three"];
  const CONTR=["it’s","what’s","he’s","there’s","don’t","how’s","that’s","she’s","who’s","can’t"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const homesText="Genre: Nonfiction · Compare Texts: Read about the different homes people make.\n\nThere are many kinds of homes. People build their homes to fit the place they live!\n\nThis home is built into a rock.\n\nThis home is made of wood. This is a good home for a wet place. There is a lot of water here. The stilts help keep this home dry.\n\nThere is a lot of ice in this place. People can use it to build. This is an igloo. People don’t live in igloos. But they are good shelter from the cold. An igloo is made of ice.";

  const LA_Q=[
    // ── Homework check: Practice Book 103 (spelling) & 104 (Uu) ──
    {section:"Homework check · Spelling words (Practice Book 103)",img:L,layout:"icon-activity",type:"compound",wordBank:SPELL,
      text:"Write the spelling word that completes the sentence.",fields:[
      bank("bug","The ___ can fly.",SPELL,"bug","🐞"),
      bank("fun","We have ___ when we play.",SPELL,"fun","🎉"),
      bank("run","He can ___ so fast.",SPELL,"run","🏃"),
      bank("rug","She sat on the ___.",SPELL,"rug","🟫"),
      bank("head","🙂 (points to his head) This is my ___.",SPELL,"head","🙂"),
      bank("bed","🛏️ Write the word that names the picture.",SPELL,"bed","🛏️")
    ],explain:"The bug can fly. · We have fun when we play. · He can run so fast. · She sat on the rug. · Pictures: head, bed. (Practice Book, page 103)"},
    la("Homework check · Handwriting Uu (Practice Book 104)","Trace and write U and u. Then copy the sentence. Leave spaces between words.",[
      rewrite("copy","Copy the sentence: Un is upstairs.","Un is upstairs.","✍️"),
      choice("start","Un is upstairs. Which word starts with a capital U?",["Un","is","upstairs"],"Un","🔠")
    ],"Un is upstairs. A sentence starts with a capital letter and ends with a period. Leave spaces between words. (Practice Book, page 104)"),

    // ── Grammar: Singular and Plural Nouns ──
    la("Grammar · Singular and plural nouns","A singular noun names one person, one place, or one thing. A plural noun names more than one person, place, or thing.",[
      select("cat","one cat",["singular noun","plural noun"],"singular noun","🐱"),
      select("cats","three cats",["singular noun","plural noun"],"plural noun","🐱"),
      choice("box","one box → three ___",["boxes","boxs","box"],"boxes","📦"),
      choice("rule","If a noun ends in -x, -s, or -ss, add ___ to make it plural.",["-es","-s","-ed"],"-es","📏"),
      choice("game1","There is a ___ at the bus stop.",["bus","buses"],"bus","🚌"),
      choice("game2","There are many ___ in the classroom.",["boys","boy"],"boys","👦"),
      choice("game3","There are five ___. (box)",["boxes","boxs"],"boxes","📦")
    ],"A singular noun names one: one cat, one box. A plural noun names more than one: three cats, three boxes. If a noun ends in -x, -s, or -ss, add -es to make it plural.",{readingId:"plural19"}),

    // ── High-frequency words: Let's Review! ──
    {section:"High-Frequency Words · Let’s Review!",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,
      text:"Complete the sentences. Use the words: one, could, live, then, three.",fields:[
      bank("could","___ you help me, please?",HFW,"could","🙋"),
      bank("live","I ___ in a big house.",HFW,"live","🏠"),
      bank("then","Put on your shoes, ___ go outside.",HFW,"then","👟"),
      bank("one","I have ___ red ball.",HFW,"one","🔴"),
      bank("three","He has ___ blue pens.",HFW,"three","🖊️"),
      bank("then2","Wash your hand, ___ eat your lunch.",HFW,"then","🧼"),
      bank("one2","I have ___ book.",HFW,"one","📕"),
      bank("three2","I see ___ cats. 🐱🐱🐱",HFW,"three","🐱")
    ],explain:"Could you help me, please? · I live in a big house. · Put on your shoes, then go outside. · I have one red ball. · He has three blue pens. · Wash your hand, then eat your lunch. · I have one book. · I see three cats."},

    // ── Compare Text: Homes Around the World (Nonfiction) ──
    la("Homes Around the World · Nonfiction","Look at the book. Read the text. Then choose.",[
      choice("genre","What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("main","Main idea: People build their homes to ___.",["fit the place they live","look like a castle","be very tall"],"fit the place they live","🌍"),
      choice("rock","One home in the book is built into a ___.",["rock","tree","cloud"],"rock","🪨")
    ],"Homes Around the World is nonfiction: it tells about real homes. There are many kinds of homes. People build their homes to fit the place they live! One home is built into a rock.",{readingId:"homes"}),
    la("Homes Around the World · A home for a wet place","Reading and Writing Companion, page 71.",[
      choice("made","What is this home made of?",["wood","ice","mud"],"wood","🪵"),
      choice("water","Why is it a good home for a wet place?",["The stilts help keep this home dry.","It has a big door.","It is built into a rock."],"The stilts help keep this home dry.","💧"),
      choice("lot","There is a lot of ___ here.",["water","ice","sand"],"water","🌊")
    ],"This home is made of wood. This is a good home for a wet place. There is a lot of water here. The stilts help keep this home dry. (Reading and Writing Companion, page 71)"),
    la("Homes Around the World · The igloo","Reading and Writing Companion, page 72.",[
      choice("igloo","What is an igloo made of?",["ice","wood","stone"],"ice","🧊"),
      choice("do","What can people do with the ice?",["build","eat","swim"],"build","🔨"),
      choice("why","Why is an igloo a good shelter for a cold and windy place?",["It is good shelter from the cold.","It is a good home for a wet place.","It has stilts."],"It is good shelter from the cold.","🥶"),
      choice("caption","Quick Tip: What helps you understand what you see in the photos?",["the captions","the page number","the title only"],"the captions","🏷️")
    ],"There is a lot of ice in this place. People can use it to build. This is an igloo. People don’t live in igloos. But they are good shelter from the cold. An igloo is made of ice. Use the captions to understand what you see in the photos. (Reading and Writing Companion, page 72)"),
    la("Compare Texts · Buildings and materials","Essential Question: What buildings do you know? What are they made of?",[
      select("wood","home on stilts",["wood","ice","mud"],"wood","🛖"),
      select("ice","igloo",["wood","ice","mud"],"ice","🧊"),
      select("pigs","the pigs’ hut (The Pigs, the Wolf, and the Mud)",["wood","ice","mud"],"mud","🐷")
    ],"Homes are made of different materials: the home on stilts is made of wood, the igloo is made of ice, and the pigs’ hut is made of mud."),

    // ── Rhyme (game Rhyming Pictures) ──
    la("Rhyme · Which word rhymes?","Rhyming words end with the same sounds.",[
      choice("well","well",["bell","sun","pencil"],"bell","🔔"),
      choice("rake","rake",["snake","run","house"],"snake","🐍"),
      choice("bug","bug",["rug","cat","bus"],"rug","🟫"),
      choice("car","car",["star","frog","jug"],"star","⭐"),
      choice("fin","fin",["bin","fan","pan"],"bin","🗑️"),
      choice("bun","bun",["fun","clown","dog"],"fun","🎉")
    ],"well – bell · rake – snake · bug – rug · car – star · fin – bin · bun – fun (game Rhyming Pictures)"),

    // ── Structural Analysis: Contractions (Notebook 19/10) ──
    la("Contractions · Notebook","Complete the contractions you copied in your notebook.",[
      select("what","What is →",CONTR,"what’s","❓"),
      select("he","he is →",CONTR,"he’s","👦"),
      select("there","There is →",CONTR,"there’s","📍"),
      select("donot","Do not →",CONTR,"don’t","🚫"),
      select("how","how is →",CONTR,"how’s","🌤️")
    ],"1) It is → it’s · 2) What is → what’s · 3) he is → he’s · 4) There is → there’s · 5) Do not → don’t · 6) how is → how’s (Notebook 19/10/2026)",{readingId:"notebook"}),
    la("Contractions · Notebook (2)","Which two words make the contraction?",[
      select("thats","that’s",["that is","she is","who is","can not"],"that is","👉"),
      select("shes","she’s",["that is","she is","who is","can not"],"she is","👧"),
      select("whos","who’s",["that is","she is","who is","can not"],"who is","🙋"),
      select("cant","can’t",["that is","she is","who is","can not"],"can not","🙅")
    ],"7) that is → that’s · 8) she is → she’s · 9) who is → who’s · 10) can not → can’t (Notebook 19/10/2026)")
  ];

  registerQuiz({
    id:"class-diary-2026-10-19-language",
    uploadDate:"2026-10-19",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"19/10/2026 · Unit 2 Week 2 · Short u spelling · Singular and plural nouns · HFW review · Homes Around the World · Rhyme · Contractions",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book pages 103 and 104",2],["Grammar: Singular and Plural Nouns","one cat · three cats · three boxes",1],["High-Frequency Words","one · could · live · then · three",1],["Compare Text: Homes Around the World","Nonfiction · Literature Anthology page 44 · Reading and Writing Companion pages 71-72",4],["Rhyme","game Rhyming Pictures",1],["Structural Analysis: Contractions","Notebook 19/10/2026",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1910","Remember — Language Arts",[
          "📅 Class Diary: 19/10/2026",
          "(19/10) A singular noun names one person, one place, or one thing: one cat.",
          "(19/10) A plural noun names more than one person, place, or thing: three cats.",
          "(19/10) If a noun ends in -x, -s, or -ss, add -es to make it plural: one box → three boxes.",
          "(19/10) High-frequency words: one · could · live · then · three",
          "(19/10) Homes Around the World (Nonfiction): People build their homes to fit the place they live!",
          "(19/10) The stilts help keep this home dry.",
          "(19/10) An igloo is made of ice. Igloos are good shelter from the cold.",
          "(19/10) Quick Tip: Use the captions to understand what you see in the photos.",
          "(19/10) Rhyming words end with the same sounds: well – bell · bug – rug · car – star · bun – fun",
          "(19/10) Contractions: it’s · what’s · he’s · there’s · don’t · how’s · that’s · she’s · who’s · can’t"
        ],"Unit 2 Week 2"),
        {id:"plural19",title:"Singular and Plural Nouns",byline:"Grammar · Class Diary 19/10",mode:"reference",images:[IMG("plural-nouns-rule")],text:"A singular noun names one person, one place, or one thing. (one cat)\nA plural noun names more than one person, place, or thing. (three cats)\nIf a noun ends in -x, -s, or -ss, add -es to make it plural. Example: one box → three boxes"},
        {id:"homes",title:"Homes Around the World",byline:"Compare Text · Literature Anthology page 44 · Nonfiction",images:[IMG("homes-around-the-world")],text:homesText},
        {id:"notebook",title:"Contractions · Notebook 19/10/2026",byline:"Structural Analysis · copy into the notebook",mode:"reference",images:[IMG("contractions-notebook")],text:"1) It is → it’s   2) What is → ___   3) he is → ___   4) There is → ___   5) Do not → ___\n6) how is → how’s   7) ___ → that’s   8) ___ → she’s   9) ___ → who’s   10) ___ → can’t"},
        bonus("bonus-la-1910",[
          {label:"Game: Singular and plural nouns",url:"https://www.baamboozle.com/game/1091989"},
          {label:"Video: Homes Around the World",url:"https://www.youtube.com/watch?v=SESo805XIAg"},
          {label:"Game: Rhyming pictures",url:"https://wordwall.net/resource/26481293/phonics/rhyming-pictures"},
          {label:"Video: Structural Analysis",url:"https://www.youtube.com/watch?v=XXjt8CLBHWw"},
          {label:"Close Reading: Listen to the story",url:"https://www.youtube.com/watch?v=-igkhaZFWSs"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 32 ─────────────────────────
  const tf=(n)=>{const row=k=>Array.from({length:5},(_,i)=>i<k?"🔴":"⬜").join("");return `${row(Math.min(n,5))}\n${row(Math.max(0,n-5))}`};
  const MATH_Q=[
    math("Lesson 32 · How to fill a ten-frame","You can show numbers up to 10 on a ten-frame.",[
      choice("start","Where do you start?",["at the top left box","at the bottom right box","in the middle"],"at the top left box","↖️"),
      choice("row","Which row do you fill first?",["the top row","the bottom row","any row"],"the top row","⬆️"),
      choice("then","Then you fill ___ as you need to.",["the bottom row","the top row again","nothing"],"the bottom row","⬇️"),
      num("boxes","How many boxes are in a ten-frame?",10,"🔟")
    ],"You can show numbers up to 10 on a ten-frame. Start at the top left box. Fill the top row first. Then fill the bottom row as you need to.",{readingId:"tenframe"}),
    math("Lesson 32 · How many?","Count the counters on the ten-frame.",[
      num("seven",`${tf(7)}\nHow many?`,7,"🔴"),
      num("five",`${tf(5)}\nHow many?`,5,"🔴"),
      num("nine",`${tf(9)}\nHow many?`,9,"🔴"),
      num("three",`${tf(3)}\nHow many?`,3,"🔴")
    ],"7 = a full top row (5) and 2 more · 5 = the top row · 9 = 5 and 4 more · 3 = 3 in the top row."),
    math("Lesson 32 · More than 5","Use the ten-frame. The top row has 5.",[
      num("m7","7 is ___ more than 5.",2,"7️⃣"),
      num("m8","8 is ___ more than 5.",3,"8️⃣"),
      num("m6","6 is ___ more than 5.",1,"6️⃣"),
      num("m10","10 is ___ more than 5.",5,"🔟")
    ],"Now I have 7. 7 is 2 more than 5. · 8 is 3 more than 5 · 6 is 1 more than 5 · 10 is 5 more than 5 (5 + 5 = 10)."),
    math("Lesson 32 · Empty boxes","How many boxes are empty?",[
      num("e7",`${tf(7)}\nEmpty boxes:`,3,"⬜"),
      num("e4",`${tf(4)}\nEmpty boxes:`,6,"⬜"),
      num("e10",`${tf(10)}\nEmpty boxes:`,0,"⬜"),
      choice("full","When all 10 boxes are filled, you show the number ___.",["10","5","9"],"10","✅")
    ],"7 counters → 3 empty boxes (7 + 3 = 10) · 4 counters → 6 empty boxes · 10 counters → 0 empty boxes, the ten-frame is full."),
    math("Lesson 32 · Show the number","Which ten-frame shows the number?",[
      choice("show6","Show 6.",["🔴🔴🔴🔴🔴 / 🔴⬜⬜⬜⬜","🔴🔴🔴⬜⬜ / 🔴🔴🔴⬜⬜","🔴🔴🔴🔴🔴 / 🔴🔴⬜⬜⬜"],"🔴🔴🔴🔴🔴 / 🔴⬜⬜⬜⬜","6️⃣"),
      choice("show8","Show 8.",["🔴🔴🔴🔴🔴 / 🔴🔴🔴⬜⬜","🔴🔴🔴🔴⬜ / 🔴🔴🔴🔴⬜","🔴🔴🔴🔴🔴 / 🔴🔴⬜⬜⬜"],"🔴🔴🔴🔴🔴 / 🔴🔴🔴⬜⬜","8️⃣")
    ],"Fill the top row first, then the bottom row: 6 = 5 + 1 · 8 = 5 + 3. (The answer that fills the bottom row before the top row is not the right way.)")
  ];
  registerQuiz({
    id:"math-lesson-32",
    uploadDate:"2026-10-19",
    subjectKey:"math",
    title:"Math – Lesson 32",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"19/10/2026 · Lesson 32 · Show numbers up to 10 on a ten-frame",scoreByField:true,
      groups:groupsOf([["Lesson 32: Ten-frames","Start at the top left box · fill the top row first",5]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-1910","Remember — Math Lesson 32",[
          "📅 Class Diary: 19/10/2026",
          "(19/10 · L32) You can show numbers up to 10 on a ten-frame.",
          "(19/10 · L32) Start at the top left box. Fill the top row first. Then fill the bottom row as you need to.",
          "(19/10 · L32) Now I have 7. 7 is 2 more than 5."
        ],"Lesson 32"),
        {id:"tenframe",title:"Lesson 32: Ten-frames",byline:"Math · Class Diary 19/10",mode:"reference",images:[IMG("math-tenframe-1"),IMG("math-tenframe-2")],text:"You can show numbers up to 10 on a ten-frame. Let’s show 7.\nStart at the top left box. (I have 1 so far.)\nFill the top row first. (I have 5 so far.)\nThen fill the bottom row as you need to. Now I have 7. 7 is 2 more than 5."}
      ]}
  });
})();
