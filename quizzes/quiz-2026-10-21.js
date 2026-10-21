// Quiz 21/10/2026 — Class Diary 21/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 (Practice Book 109 singular/plural, Read Together short u, short u vs short a,
// Research and Inquiry: choose a building, singular & plural nouns, oral vocabulary, punctuation).
// Math: Lesson 33 (compare with pairs on a graph) + homework check Lesson 32 (ten-frame).
// Wellbeing: Unit 1.4 Lesson 4.1b A special day (comic strip). Diary hôm nay không có Science.
// Ảnh: web/assets/2026-10-21/ (tạo bằng web/_reference/tao_anh_2026-10-21.py).
(()=>{
  const IMG=name=>`assets/2026-10-21/${name}.webp`;
  const IMG20=name=>`assets/2026-10-20/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const rewrite=(id,label,answer,icon)=>({id,label,type:"fill",strict:true,answer:[answer,answer.replace(/’/g,"'")],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 21/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const SP=["singular noun","plural noun"],UA=["short u","short a"];
  const VOC=["shelter","materials","collapsed","furious","refuse"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const LA_Q=[
    // ── Homework check: Practice Book 109 ──
    la("Homework check · Fix the draft (Practice Book 109)","Read the draft. Find the errors in singular and plural nouns.",[
      choice("err1","Draft: “The truck are stuck in mud.” Which word is wrong?",["truck","stuck","mud"],"truck","🚚"),
      choice("err2","Draft: “There are box in the trucks.” Which word is wrong?",["box","There","trucks"],"box","📦"),
      rewrite("fix","Revise the draft: The truck are stuck in mud. There are box in the trucks.","The trucks are stuck in mud. There are boxes in the trucks.","✍️")
    ],"The trucks are stuck in mud. There are boxes in the trucks. (are → more than one → trucks; box ends in x → boxes) (Practice Book, page 109)"),

    // ── Phonics: Read Together + Board Race short u / short a ──
    la("Phonics · Read Together","Read the sentences. Find the short u words.",[
      multi("bus","The bus is coming up. Choose 2 short u words.",["bus","up","is","coming"],["bus","up"],"🚌"),
      multi("tub","The tub is so much fun. Choose 3 short u words.",["tub","much","fun","so","is"],["tub","much","fun"],"🛁"),
      multi("cup","The cup has gum and bugs. Choose 3 short u words.",["cup","gum","bugs","has","and"],["cup","gum","bugs"],"☕")
    ],"Short u words: bus, up · tub, much, fun · cup, gum, bugs. (has and and have the short a sound.)",{readingId:"readtogether"}),
    la("Phonics · Board Race: short u or short a?","Listen to the middle sound.",[
      select("cup","cup",UA,"short u","☕"),select("cap","cap",UA,"short a","🧢"),select("bug","bug",UA,"short u","🐞"),
      select("bag","bag",UA,"short a","👜"),select("hut","hut",UA,"short u","🛖"),select("hat","hat",UA,"short a","🎩"),
      select("run","run",UA,"short u","🏃"),select("ran","ran",UA,"short a","💨")
    ],"Short u: cup, bug, hut, run · Short a: cap, bag, hat, ran. Change the middle sound and you get a new word: cup → cap, bug → bag, hut → hat, run → ran."),

    // ── Research and Inquiry: Choose a Building (RWC 74–75) ──
    la("Research and Inquiry · Choose a Building","Reading and Writing Companion, pages 74 and 75.",[
      choice("s1","Step 1: What do you do first?",["Pick a type of building to write about.","Draw your building.","Present your work."],"Pick a type of building to write about.","🏛️"),
      choice("s2","Step 2: What do you write next?",["your questions about the building","your name only","a song"],"your questions about the building","❓"),
      choice("s5","Step 5: You draw your building. What do you use to give information?",["labels","stickers","colors only"],"labels","🏷️"),
      choice("q","Our class example: the Eiffel Tower. Which is a good question?",["Where is it?","Do you like cats?","What is your name?"],"Where is it?","🗼"),
      choice("paris","Where is the Eiffel Tower?",["It’s in Paris.","It’s in Hanoi.","It’s in London."],"It’s in Paris.","🇫🇷")
    ],"Steps: 1. Pick a type of building · 2. Write your questions · 3. Find the information · 4. Write what you learned · 5. Draw your building with labels · 6. Choose how to present. Example: Eiffel Tower — Where is it? It’s in Paris. How tall is it? It is 330 meters."),

    // ── Grammar: identify singular and plural ──
    la("Grammar · Identify the singular and plurals","Is the underlined noun singular or plural?",[
      select("cats","The cats ate the chicken. → cats",SP,"plural noun","🐱"),
      select("chicken","The cats ate the chicken. → chicken",SP,"singular noun","🍗"),
      select("boys","The boys went to Alaska Academy. → boys",SP,"plural noun","👦"),
      select("academy","The boys went to Alaska Academy. → Alaska Academy",SP,"singular noun","🏫"),
      select("dogs","Some dogs like to eat bones. → dogs",SP,"plural noun","🐶"),
      select("bones","Some dogs like to eat bones. → bones",SP,"plural noun","🦴")
    ],"Plural: cats, boys, dogs, bones (more than one) · Singular: chicken, Alaska Academy (one).",{readingId:"grammar21"}),

    // ── Oral Vocabulary: Let’s Discuss ──
    la("Oral Vocabulary · Let’s Discuss","Choose the word that fits.",[
      bank("hot","What would be a good ___ in a very hot place?",VOC,"shelter","🏜️"),
      bank("house","What ___ could you use to make a house?",VOC,"materials","🧱"),
      bank("fall","What would you do if your shelter ___?",VOC,"collapsed","🏚️"),
      bank("angry","Would you be ___ if your shelter collapsed?",VOC,"furious","😡"),
      bank("mud","Would you ___ to live in a house made of mud? Why?",VOC,"refuse","🙅")
    ],"shelter · materials · collapsed · furious · refuse (Let’s Discuss)",{wordBank:VOC,readingId:"discuss21"}),

    // ── Mechanics: Punctuation (Fix the sentence) ──
    la("Punctuation · Fix the sentence","Choose the sentence that is written correctly.",[
      choice("oh","oh no",["Oh no!","oh no!","Oh no"],"Oh no!","😮"),
      choice("team","there are 3 team in my class.",["There are 3 teams in my class.","there are 3 teams in my class.","There are 3 team in my class."],"There are 3 teams in my class.","👥"),
      choice("silly","My class is silly?",["My class is silly.","my class is silly.","My class is silly?"],"My class is silly.","😜"),
      choice("list","I need bread milk oranges and eggs.",["I need bread, milk, oranges, and eggs.","I need bread milk, oranges, and eggs.","I need, bread, milk, oranges and eggs."],"I need bread, milk, oranges, and eggs.","🛒")
    ],"Oh no! (capital letter + exclamation mark) · There are 3 teams in my class. (capital letter, teams) · My class is silly. (a telling sentence ends with a period) · I need bread, milk, oranges, and eggs. (commas in a series)"),
    la("Punctuation · Write it correctly","Rewrite the sentence. Use capital letters and commas.",[
      rewrite("names","anna elsa julia mon and raymond are friends.","Anna, Elsa, Julia, Mon, and Raymond are friends.","👫"),
      rewrite("oh2","oh no","Oh no!","😮")
    ],"Names start with a capital letter. Put a comma after each name in a list, except the last one: Anna, Elsa, Julia, Mon, and Raymond. · Oh no!")
  ];

  registerQuiz({
    id:"class-diary-2026-10-21-language",
    uploadDate:"2026-10-21",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"21/10/2026 · Unit 2 Week 2 · Singular and plural nouns · Short u and short a · Research: choose a building · Punctuation",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book page 109",1],["Phonics","Read Together · Board Race short u and short a",2],["Research and Inquiry","Choose a Building · Reading and Writing Companion pages 74-75",1],["Grammar: Singular and Plural Nouns","Identify the singular and plurals",1],["Oral Vocabulary","Let’s Discuss",1],["Mechanics: Punctuation","Fix the sentence",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2110","Remember — Language Arts",[
          "📅 Class Diary: 21/10/2026",
          "(21/10) The trucks are stuck in mud. There are boxes in the trucks.",
          "(21/10) Short u: The bus is coming up. The tub is so much fun. The cup has gum and bugs.",
          "(21/10) Research and Inquiry: pick a building → write your questions → find the information → write what you learned → draw it with labels → present.",
          "(21/10) Singular: chicken, Alaska Academy · Plural: cats, boys, dogs, bones",
          "(21/10) A sentence begins with a capital letter and ends with a punctuation mark: Oh no!",
          "(21/10) Commas in a series: I need bread, milk, oranges, and eggs."
        ],"Unit 2 Week 2"),
        {id:"readtogether",title:"Read Together · Short u",byline:"Phonics · Class Diary 21/10",mode:"reference",images:[IMG("read-together-short-u")],text:"The bus is coming up.\nThe tub is so much fun.\nThe cup has gum and bugs."},
        {id:"grammar21",title:"Identify the singular and plurals",byline:"Grammar · Class Diary 21/10",mode:"reference",images:[IMG("grammar-singular-plural")],text:"The cats ate the chicken.\nThe boys went to Alaska Academy.\nSome dogs like to eat bones."},
        {id:"discuss21",title:"Let’s Discuss",byline:"Oral Vocabulary",mode:"reference",images:[IMG20("lets-discuss")],text:"What would be a good shelter in a very hot place?\nWhat materials could you use to make a house?\nWhat would you do if your shelter collapsed?\nWould you be furious if your shelter collapsed?\nWould you refuse to live in a house made of mud? Why?"},
        bonus("bonus-la-2110",[
          {label:"Video: Phonics (short u)",url:"https://www.youtube.com/watch?v=LgLbumOrXMA"},
          {label:"Game: Singular and plural nouns",url:"https://www.baamboozle.com/game/2385375"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 33 (+ homework Lesson 32) ─────────────────────────
  const tf=(n)=>{const row=k=>Array.from({length:5},(_,i)=>i<k?"🔴":"⬜").join("");return `${row(Math.min(n,5))} / ${row(Math.max(0,n-5))}`};
  const MATH_Q=[
    math("Homework check · Ten-frame (Lesson 32)","Representing numbers on a ten-frame.",[
      choice("show4","Which ten-frame shows 4?",[tf(4),tf(5),tf(3)],tf(4),"4️⃣"),
      num("seven","Show how 7 is 5 and ___.",2,"7️⃣"),
      num("nine","Show how 9 is 5 and ___.",4,"9️⃣"),
      num("kyle","Kyle put 6 counters in a ten-frame. How many more counters should Kyle put in the frame to make 10?",4,"🔟")
    ],"4 = 4 in the top row · 7 is 5 and 2 · 9 is 5 and 4 · 6 + 4 = 10, so Kyle needs 4 more counters. (Workbook, Lesson 32)"),
    math("Lesson 33 · Which has more?","Counters that are scattered are hard to count.",[
      choice("pairs","To see which has more, it is easier if the counters are ___.",["in pairs","in a pile","hidden"],"in pairs","👫"),
      choice("partner","When the counters are in pairs, each counter has a ___.",["partner","color","number"],"partner","🤝"),
      choice("nopart","Two yellow counters do not have partners. Which color has more?",["yellow","red","they are the same"],"yellow","🟡"),
      choice("graph","Why do we put the counters on a graph?",["The graph makes it easy to see which has more.","The graph makes the counters bigger.","The graph hides the counters."],"The graph makes it easy to see which has more.","📊")
    ],"To see which has more, it is easier if the counters are in pairs. Each counter has a partner. Two yellow counters do not have partners, so there are more yellow counters than red counters. The graph makes it easy to see which has more.",{readingId:"pairs"}),
    math("Lesson 33 · Match and compare","Make pairs. Then answer.",[
      choice("c1","🔴🔴🔴🔴\n🟡🟡🟡🟡🟡🟡\nWhich color has more?",["yellow","red","the same"],"yellow","🟡"),
      num("c1n","How many more yellow counters?",2,"➕"),
      choice("c2","🔴🔴🔴🔴🔴\n🟡🟡🟡\nWhich color has more?",["red","yellow","the same"],"red","🔴"),
      num("c2n","How many more red counters?",2,"➕"),
      choice("c3","🔴🔴🔴\n🟡🟡🟡\nWhich color has more?",["the same","red","yellow"],"the same","🟰")
    ],"4 red and 6 yellow → 2 yellow have no partner → yellow has 2 more · 5 red and 3 yellow → red has 2 more · 3 and 3 → every counter has a partner → the same.")
  ];
  registerQuiz({
    id:"math-lesson-33",
    uploadDate:"2026-10-21",
    subjectKey:"math",
    title:"Math – Lesson 33",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"21/10/2026 · Lesson 33 · Which has more? Make pairs on a graph · Homework check Lesson 32",scoreByField:true,
      groups:groupsOf([["Homework check: Lesson 32","Representing numbers on a ten-frame",1],["Lesson 33: Which has more?","Pairs and partners on a graph",2]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-2110","Remember — Math Lesson 33",[
          "📅 Class Diary: 21/10/2026",
          "(21/10 · L33) To see which has more, it is easier if the counters are in pairs. Each counter has a partner.",
          "(21/10 · L33) Counters without a partner show which color has more.",
          "(21/10 · L33) The graph makes it easy to see which has more.",
          "(21/10 · L32) 7 is 5 and 2. 9 is 5 and 4. 6 and 4 more make 10."
        ],"Lesson 33"),
        {id:"pairs",title:"Lesson 33: Which color has more?",byline:"Math · Class Diary 21/10",mode:"reference",images:[IMG("math-pairs-1"),IMG("math-pairs-2")],text:"Which color has more? These counters are hard to count.\nTo see which has more, it is easier if the counters are in pairs. Each counter has a partner.\nAll the counters on the graph have a partner. There are no more red counters.\nTwo yellow counters do not have partners. There are more yellow counters than red counters.\nThe graph makes it easy to see which has more."}
      ]}
  });

  // ───────────────────────── WELLBEING ─────────────────────────
  const WB_Q=[
    wb("Listen to my day · My special day","Read the story. What happened?",[
      choice("first","What did they do FIRST?",["We went to the beach.","We ate ice cream.","We went home happy."],"We went to the beach.","🏖️"),
      choice("next","What did they do NEXT?",["We swam in the sea.","We went home.","We ate ice cream."],"We swam in the sea.","🌊"),
      choice("then","What did they do THEN?",["We ate ice cream.","We went to the beach.","We swam in the sea."],"We ate ice cream.","🍦"),
      choice("last","What did they do LAST?",["We went home happy.","We swam in the sea.","We went to the beach."],"We went home happy.","😊")
    ],"First, we went to the beach. Next, we swam in the sea. Then, we ate ice cream. Last, we went home happy.",{readingId:"myday"}),
    wb("New idea · What is a comic strip?","Choose the answer.",[
      choice("tells","A comic strip tells a ___.",["story","song","number"],"story","📖"),
      choice("boxes","A comic strip has pictures in ___.",["boxes","circles","the sky"],"boxes","🔲"),
      choice("order","The boxes go in ___: 1, 2, 3…",["order","a pile","any way"],"order","🔢"),
      choice("bubble","Bonus: What do you add to show what the people say?",["a speech bubble","a number","a stamp"],"a speech bubble","💬")
    ],"A comic strip tells a story. It has pictures in boxes. The boxes go in order: 1, 2, 3… Bonus: add a speech bubble to show what the people could say.",{readingId:"comic"}),
    wb("Wellbeing Book page 27 · A special day","Activity 4.1b: Draw a comic strip of a special day with someone you love.",[
      choice("what","What do you draw?",["a special day you spent with someone you love","your favorite food","a map of your house"],"a special day you spent with someone you love","🎨"),
      multi("who","Who can be special to you? Choose 4.",["Mum","Dad","Grandparents","Friends","a robot"],["Mum","Dad","Grandparents","Friends"],"❤️"),
      choice("bonus","Bonus: What do you write in the boxes?",["Number the boxes: 1, 2, 3.","Your phone number.","Nothing."],"Number the boxes: 1, 2, 3.","⭐"),
      choice("end","The comic on page 27 ends with: “And we were ___!”",["happy","sad","tired"],"happy","😊")
    ],"Everyone: draw your special day in the boxes. Bonus: number the boxes 1, 2, 3. The example comic ends: “And we were happy!” (Wellbeing Book, page 27)",{readingId:"wb27"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-21-wellbeing",
    uploadDate:"2026-10-21",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"21/10/2026 · Unit 1.4 Lesson 4.1b · A special day · Comic strip",scoreByField:true,
      groups:groupsOf([["My special day","First · next · then · last",1],["What is a comic strip?","Pictures in boxes, in order",1],["Wellbeing Book page 27","Activity 4.1b A special day",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-2110","Remember — Wellbeing",[
          "📅 Class Diary: 21/10/2026",
          "(21/10) A comic strip tells a story. It has pictures in boxes. The boxes go in order: 1, 2, 3…",
          "(21/10) My special day: First, we went to the beach. Next, we swam in the sea. Then, we ate ice cream. Last, we went home happy.",
          "(21/10) Bonus: What could the people say? Add a speech bubble.",
          "(16/10) Who is special to you? Mum, Dad, Grandparents, Sister, Brother, Friends."
        ],"Unit 1.4 · Lesson 4.1b"),
        {id:"myday",title:"My special day",byline:"Listen to my day",mode:"reference",images:[IMG("wb-who-special"),IMG("wb-my-special-day")],text:"First, we went to the beach.\nNext, we swam in the sea.\nThen, we ate ice cream.\nLast, we went home happy."},
        {id:"comic",title:"What is a comic strip?",byline:"New idea",mode:"reference",images:[IMG("wb-comic-strip")],text:"A comic strip tells a story.\nIt has pictures in boxes.\nThe boxes go in order: 1, 2, 3…\nBonus: What could the people say? Add a speech bubble."},
        {id:"wb27",title:"Activity 4.1b A special day",byline:"Wellbeing Book page 27",mode:"reference",images:[IMG("wb-book-27")],text:"Think of a special day that you have spent with someone you love. Draw a comic strip of what you did.\nEveryone: Draw your special day in the boxes.\nBonus: Number the boxes: 1, 2, 3."}
      ]}
  });
})();
