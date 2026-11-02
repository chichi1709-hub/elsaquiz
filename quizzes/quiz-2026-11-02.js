// Quiz 02/11/2026 — Class Diary 02/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 118, 118A, 118B (sort end blends) ·
// High-Frequency Words Review eat, of, under, no, who · Phonics: End blends (Lesson 3 Phonics Practice Activity) ·
// Anchor Text "At a Pond" (reread, nonfiction; Reading and Writing Companion page 103).
// Science: Close Reading · Listening Comprehension — the groundhog story (video YouTube).
// Math: Lesson 38 (problem solving: Tyler’s blanket color pattern) + homework check Lesson 37 (Workbook 9-3 Extending Shape Patterns).
// Ảnh: web/assets/2026-11-02/ (tạo bằng web/_reference/tao_anh_2026-11-02.py).
(()=>{
  const IMG=name=>`assets/2026-11-02/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="02/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["eat","of","under","no","who"];
  const HFW_DEF={eat:"It means to put food in your mouth.",of:"It shows a part or belonging.",under:"It means below.",no:"It means not.",who:"It asks about a person."};
  const HFW_EX={eat:"I eat an apple.",of:"This is a slice of pizza.",under:"The cat is under the table.",no:"No cookies, please!",who:"Who is that?"};
  const BL4=["nd","st","nk","ft"],BL=["st","nd","nk","nt","sk","mp"];

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we read about deer, rabbits, ants, and foxes in a forest (“The Best Spot”), babies in the bayou, and frogs, ducks, turtles, and fish at a pond (“At a Pond”). So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","What buildings do you know? What are they made of?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · Sort the words (Practice Book 118, 118A, 118B)","Read the words in the box. Say each word. Then sort the words: fast · left · lend · past · send · sink · twist · wink",[
      select("fast","fast",BL4,"st","🏃"),
      select("left","left",BL4,"ft","⬅️"),
      select("lend","lend",BL4,"nd","🤲"),
      select("past","past",BL4,"st","⏪"),
      select("send","send",BL4,"nd","📨"),
      select("sink","sink",BL4,"nk","🚰"),
      select("twist","twist",BL4,"st","🌀"),
      select("wink","wink",BL4,"nk","😉")
    ],"Words with nd: lend, send · Words with st: fast, past, twist · Words with nk: sink, wink · Words with ft: left."),
    la("High-Frequency Words Review · Read · Learn · Use!","Read the meaning. Choose the word.",[
      select("m-eat",HFW_DEF.eat,HFW,"eat","🍎"),
      select("m-of",HFW_DEF.of,HFW,"of","🍕"),
      select("m-under",HFW_DEF.under,HFW,"under","⬇️"),
      select("m-no",HFW_DEF.no,HFW,"no","🚫"),
      select("m-who",HFW_DEF.who,HFW,"who","🧑‍🏫")
    ],HFW.map(w=>`${w}: ${HFW_DEF[w]} ${HFW_EX[w]}`).join(" · "),{readingId:"hfw"}),
    la("High-Frequency Words Review · Use the words","Choose the word that makes the sentence make sense.",[
      select("u-eat","I ___ an apple.",HFW,"eat","🍎"),
      select("u-of","This is a slice ___ pizza.",HFW,"of","🍕"),
      select("u-under","The cat is ___ the table.",HFW,"under","🐱"),
      select("u-no","___ cookies, please!",HFW,"no","🍪"),
      select("u-who","___ is that? It’s my teacher!",HFW,"who","👩‍🏫")
    ],Object.values(HFW_EX).join(" · ")+" It’s my teacher!",{readingId:"hfw"}),
    la("Phonics · End blends (Practice)","Lesson 3 Phonics Practice Activity. Read the words. Choose the end blend.",[
      select("rest","rest",BL,"st","😴"),
      select("pond","pond",BL,"nd","🪷"),
      select("jump","jump",BL,"mp","🦘"),
      select("ant","ant",BL,"nt","🐜"),
      select("dusk","dusk",BL,"sk","🌆"),
      select("bank","bank",BL,"nk","🏦"),
      multi("nd","Which words end with nd? Choose 4.",["pond","and","land","brand","rent","disk","past"],["pond","and","land","brand"],"🔎")
    ],"rest (st) · pond (nd) · jump (mp) · ant (nt) · dusk (sk) · bank (nk) · Words with nd: pond, and, land, brand.",{readingId:"phonics"}),
    la("Phonics · Read the words and sentences","Lesson 3 Phonics Practice Activity.",[
      choice("hunting","hunting = hunt + ing. Which end blend is in hunt?",["nt","nd","st"],"nt","🦊"),
      choice("standing","standing = stand + ing. Which end blend is in stand?",["nd","nt","sk"],"nd","🧍"),
      choice("asking","asking = ask + ing. Which end blend is in ask?",["sk","st","nk"],"sk","🙋"),
      choice("lamp","“Ask Gus to dust the lamp.” Which word ends with mp?",["lamp","dust","Ask"],"lamp","💡"),
      choice("tent","“Fix the tent, and we can go camping.” Which word ends with nt?",["tent","Fix","and"],"tent","⛺")
    ],"hunting (hunt: nt) · standing (stand: nd) · asking (ask: sk) · Ask Gus to dust the lamp. · Fix the tent, and we can go camping.",{readingId:"phonics"}),
    la("Anchor Text · At a Pond (reread)","Reread the story “At a Pond” (Literature Anthology Book, page 48).",[
      choice("genre","“At a Pond” has photos of real frogs, ducks, turtles, and fish and tells real facts. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("where","Where do the animals in “At a Pond” live together?",["at a pond","in a forest","in the arctic"],"at a pond","🪷"),
      choice("hunt","“This frog is hunting for ___.”",["bugs","carrots","nuts"],"bugs","🐸"),
      choice("nests","Where do ducks make nests?",["on land","under the water","in a tree trunk"],"on land","🪺"),
      multi("use","Ducks make nests. What do they use? Choose 2.",["twigs","grass","mud bricks","sand"],["twigs","grass"],"🪵"),
      choice("fishland","“Can fish be on land?”",["No! Fish live in water.","Yes! Fish walk on land."],"No! Fish live in water.","🐟"),
      choice("dragonfly","“A dragonfly is a big ___.”",["bug","fish","bird"],"bug","🪰")
    ],"“At a Pond” by Nancy Finton · Genre: nonfiction · Frogs live at a pond; this frog is hunting for bugs. Ducks make nests on land with twigs and grass. Turtles can be on land and in water. Can fish be on land? No! Fish live in water. A dragonfly is a big bug.",{readingId:"pond"}),
    la("Reading and Writing Companion · page 103","Talk about how the turtles and fish are different on pages 56–57. Write clues that come from the text and photos.",[
      choice("turtles","Turtles: which clue is about turtles?",["Turtle can be on the land, too.","Fish live in the water.","Ducks fly to the pond."],"Turtle can be on the land, too.","🐢"),
      choice("fish","Fish: which clue is about fish?",["Fish live in the water.","Turtle can be on the land, too.","Frogs eat bugs."],"Fish live in the water.","🐟"),
      choice("show","What does the author want to show on pages 56–57?",["How fish and turtles are different.","How to catch a fish.","Where ducks sleep."],"How fish and turtles are different.","🎯")
    ],"Turtles: Turtle can be on the land, too. · Fish: Fish live in the water. · The author wants to show how fish and turtles are different.",{readingId:"rwc103"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-02-language",
    uploadDate:"2026-11-02",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"02/11/2026 · Unit 2 Week 3 · End blends nd, st, nk, ft · HFW Review eat, of, under, no, who · Anchor Text: At a Pond (reread) · RWC page 103",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","Practice Book 118, 118A, 118B · sort the words",1],["High-Frequency Words Review","eat · of · under · no · who",2],["Phonics","End blends · Lesson 3 Phonics Practice Activity",2],["Anchor Text: At a Pond","Nonfiction · Literature Anthology page 48 · RWC page 103",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0211","Remember — Language Arts",[
          "📅 Class Diary: 02/11/2026",
          "(02/11) Essential Question: Where do animals live together?",
          ...HFW.map(w=>`(02/11) ${w}: ${HFW_DEF[w]} ${HFW_EX[w]}`),
          "(02/11) End blends: Words with nd: lend, send · Words with st: fast, past, twist · Words with nk: sink, wink · Words with ft: left",
          "(02/11) At a Pond · Genre: nonfiction",
          "(02/11) Turtle can be on the land, too. Fish live in the water. The author wants to show how fish and turtles are different."
        ],"Unit 2 Week 3"),
        {id:"hfw",title:"High-Frequency Words Review",byline:"Read · Learn · Use!",mode:"reference",images:[IMG("hfw-review")],text:HFW.map(w=>`${w}: ${HFW_DEF[w]} ${HFW_EX[w]}`).join("\n")},
        {id:"phonics",title:"Lesson 3 Phonics Practice Activity",byline:"Phonics: End blends",mode:"reference",images:[IMG("phonics-practice")],text:"rest · pond · jump · ant · and · land\nrent · dusk · brand · disk · bank · past\nhunting · bending · printing · jumping\ndrinking · planting · asking · standing\njumped · buzzed · stuffed · it’s\nAsk Gus to dust the lamp.\nFix the tent, and we can go camping."},
        {id:"pond",title:"At a Pond",byline:"Anchor Text · Literature Anthology page 48 · Nonfiction · by Nancy Finton",text:"Essential Question: Where do animals live together?\nReread the story “At a Pond”. Genre: nonfiction\nWho lives at a pond? Who is under the water? Who is on the land? Who can fly to the pond?\nFrogs live at a pond. This frog is hunting for bugs.\nDucks come to the pond. They eat lots of bugs and plants. Ducks make nests on land with twigs and grass.\nTurtles can be on land and in water.\nCan fish be on land? No! Fish live in water.\nLots of bugs live at a pond. A dragonfly is a big bug."},
        {id:"rwc103",title:"Reading and Writing Companion · page 103",byline:"At a Pond · pages 56–57",mode:"reference",images:[IMG("rwc-103")],text:"Talk about how the turtles and fish are different on pages 56–57.\nWrite clues that come from the text and photos.\nWhat does the author want to show on pages 56–57?"},
        bonus("bonus-la-0211",[
          {label:"Game: High-Frequency Words (eat, no, of, under, who)",url:"https://www.baamboozle.com/game/3735670"},
          {label:"Game: Ending Blends (Read the words)",url:"https://www.baamboozle.com/game/569738"},
          {label:"Video: At a Pond",url:"https://www.youtube.com/watch?v=v4HEN27yPOA"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Close Reading: Listening Comprehension ─────────────────────────
  // Video: Little Fox “The Hungry Groundhog” (Bat and Friends) — câu hỏi theo 7 câu hỏi trong diary, đáp án theo lời truyện trong video.
  const SCI_Q=[
    sci("Listening Comprehension · The Hungry Groundhog","Listen and read along with the story. Answer the questions.",[
      choice("main","What animal is the main character in the story?",["a groundhog","a pig","a bee"],"a groundhog","🐾"),
      choice("feel","How does the groundhog feel?",["hungry","sleepy","angry"],"hungry","😋"),
      choice("want","What does the groundhog want to eat?",["carrots","corn","bugs"],"carrots","🥕"),
      choice("do","What does the groundhog do to find food?",["He digs holes.","He climbs trees.","He flies in the sky."],"He digs holes.","⛏️"),
      choice("where","Where does the groundhog dig holes?",["all over the farm","in the pond","on the roof of the barn"],"all over the farm","🚜"),
      choice("find","What does the groundhog find?",["lots of carrots","a big nest","dog food"],"lots of carrots","🥕"),
      choice("end","What happens at the end of the story?",["Groundhog brings lots of carrots to the barn, and the friends have a feast.","Groundhog goes to sleep in a hole all winter.","The friends fill all the holes with mud."],"Groundhog brings lots of carrots to the barn, and the friends have a feast.","🎉")
    ],"The main character is Groundhog, Bat’s new friend. He is hungry. He digs holes all over the farm to look for food (“I was looking for food”). He finds lots of carrots in the farmer’s garden. At the end, he brings a big pile of carrots to the barn and the friends have a feast.",{readingId:"groundhog"}),
    sci("Listening Comprehension · Order of events","Put the story in order.",[
      fixed("first","What happens FIRST?",["Cow, Cat, Dog, and Pig trip and fall over holes.","Groundhog brings carrots to the barn.","The friends have a feast."],"Cow, Cat, Dog, and Pig trip and fall over holes.","1️⃣"),
      fixed("next","The animals fell over holes. What happens NEXT?",["Bat falls in a hole and meets Groundhog.","The friends have a feast.","The farmer picks carrots."],"Bat falls in a hole and meets Groundhog.","➡️"),
      fixed("last","What happens LAST?",["The friends have a carrot feast in the barn.","Bat falls in a hole.","Cow trips on a hole."],"The friends have a carrot feast in the barn.","🔚"),
      choice("farmer","The farmer goes to the garden to pick carrots. What does he say?",["“Who took my carrots?”","“I love bugs!”","“Time to sleep!”"],"“Who took my carrots?”","👨‍🌾")
    ],"First: Cow, Cat, Dog, and Pig trip and fall over holes. Next: Bat falls in a hole and meets Groundhog — “I was looking for food.” Then Groundhog gets the carrots, and the farmer asks “Who took my carrots?” Last: the friends have a carrot feast in the barn.",{readingId:"groundhog"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-02-science",
    uploadDate:"2026-11-02",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"02/11/2026 · Close Reading · Listening Comprehension · The Hungry Groundhog",scoreByField:true,
      groups:groupsOf([["Listening Comprehension","The Hungry Groundhog · Little Fox",2]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-0211","Remember — Science",[
          "📅 Class Diary: 02/11/2026",
          "(02/11) Listening Comprehension: The Hungry Groundhog — the groundhog digs holes all over the farm to find food.",
          "(02/11) He finds lots of carrots. At the end, the friends have a carrot feast in the barn."
        ],"Close Reading"),
        {id:"groundhog",title:"The Hungry Groundhog",byline:"Close Reading · Listening Comprehension · Little Fox (video)",mode:"reference",text:"Cow, Cat, and Dog trip on holes. Pig falls over. Bat falls in a hole.\nWho made the holes? Bat’s new friend, Groundhog! “I was looking for food.”\nGroundhog found lots of carrots in the farmer’s garden.\n“Who took my carrots?” said Farmer.\nGroundhog brings a big pile of carrots to the barn. The friends have a feast."},
        bonus("bonus-sci-0211",[{label:"Close Reading: The Hungry Groundhog (video)",url:"https://www.youtube.com/watch?v=HuBuzGaDgDA"}])
      ]}
  });

  // ───────────────────────── MATH · Lesson 38 (problem solving: color pattern) ─────────────────────────
  const MATH_Q=[
    math("Homework check · Extending Shape Patterns (Workbook 9-3)","Look at the pattern. Make the same pattern using letters.",[
      fixed("h1","🔺⬜🔺⬜🔺⬜\nName the shapes with letters. 🔺 = A",["A B A B A B","A A B B A A","A B C A B C"],"A B A B A B","1️⃣"),
      fixed("h2","trapezoid, circle, square, trapezoid, circle, square\nName the shapes with letters. trapezoid = A",["A B C A B C","A B A B A B","A A B B C C"],"A B C A B C","2️⃣"),
      fixed("h3","Reasoning: 🔺⚪⚪▱🔺⚪⚪▱\nWhich picture shows the part that repeats?",["🔺⚪⚪▱","🔺⚪","⚪⚪▱🔺⚪"],"🔺⚪⚪▱","3️⃣")
    ],"triangle, square → A B A B A B · trapezoid, circle, square → A B C A B C · The part that repeats: triangle, circle, circle, parallelogram."),
    math("Lesson 38 · Read and Understand","Tyler’s mom is making a blanket with a pattern. What colors will the next stripes be?",[
      fixed("plan","Plan: Find the color pattern. Which colors repeat?",["🟪🟦🟨","🟪🟨","🟦🟦🟨"],"🟪🟦🟨","🔍"),
      fixed("next","🟪🟦🟨🟪🟦🟨🟪🟦🟨🟪🟦🟨 ⬜⬜⬜\nSolve: Color the next 3 stripes to follow the pattern.",["🟪🟦🟨","🟨🟦🟪","🟪🟪🟪"],"🟪🟦🟨","🎨"),
      fixed("first","The last stripe is yellow 🟨. What color is the NEXT stripe?",["purple 🟪","blue 🟦","yellow 🟨"],"purple 🟪","➡️"),
      choice("check","Look Back and Check: Do your stripes match the ___ of the pattern?",["rest","color of the sky","size of the blanket"],"rest","✅")
    ],"Read and Understand → Plan: find the color pattern (purple, blue, yellow) → Solve: color the stripes to follow the pattern → Look Back and Check: do your stripes match the rest of the pattern? The next stripes are purple, blue, yellow.",{readingId:"blanket"}),
    math("Lesson 38 · Practice","Find the part that repeats. What comes next?",[
      fixed("p1","🟥🟩🟥🟩🟥🟩 ___\nWhat color comes next?",["🟥","🟩"],"🟥","🔮"),
      fixed("p2","🟦🟦🟧🟦🟦🟧🟦🟦 ___\nWhat color comes next?",["🟧","🟦"],"🟧","🔮"),
      fixed("p3","🟨🟪🟩🟨🟪🟩🟨 ___\nWhat color comes next?",["🟪","🟩","🟨"],"🟪","🔮")
    ],"🟥🟩 repeats → 🟥 · 🟦🟦🟧 repeats → 🟧 · 🟨🟪🟩 repeats → 🟪.")
  ];
  registerQuiz({
    id:"math-lesson-38-color-pattern",
    uploadDate:"2026-11-02",
    subjectKey:"math",
    title:"Math – Lesson 38 (problem solving: patterns)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"02/11/2026 · Lesson 38 · Problem solving: Tyler’s blanket color pattern · Homework check: Extending Shape Patterns",scoreByField:true,
      groups:groupsOf([["Homework check","Extending Shape Patterns · Workbook 9-3",1],["Lesson 38: Tyler’s blanket","Read and Understand · Plan · Solve · Look Back and Check",1],["Practice","What comes next?",1]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-0211","Remember — Math Lesson 38",[
          "📅 Class Diary: 02/11/2026",
          "(02/11 · L38) Read and Understand → Plan → Solve → Look Back and Check",
          "(02/11 · L38) Plan: Find the color pattern. Solve: Color the stripes to follow the pattern.",
          "(02/11 · L38) Look Back and Check: Do your stripes match the rest of the pattern?",
          "(02/11 · L37) Extending Shape Patterns: make the same pattern using letters (A B A B · A B C A B C)."
        ],"Lesson 38"),
        {id:"blanket",title:"Tyler’s blanket",byline:"Math · Lesson 38",mode:"reference",images:[IMG("math-blanket-1"),IMG("math-blanket-2")],text:"Read and Understand: Tyler’s mom is making a blanket with a pattern. What colors will the next stripes be?\nPlan: Find the color pattern.\nSolve: Color the stripes to follow the pattern.\nLook Back and Check: Do your stripes match the rest of the pattern?"}
      ]}
  });
})();
