// Quiz 16/10/2026 — Class Diary 16/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 (homework contractions & plural nouns, contractions with 's, short u,
// Anchor Text reread "The Pigs, the Wolf, and the Mud", Oral Vocabulary). Science: Lesson 3 Inquiry Activity
// "Compare Birds and Their Offspring". Wellbeing: Unit 1.4 Lesson 1 People who love me. (Close Reading chưa làm quiz.)
// Ảnh: web/assets/2026-10-16/ (tạo bằng web/_reference/tao_anh_2026-10-16.py); slide contraction he/she/where/what và bìa
// sách The Pigs dùng lại ảnh ngày 14/10 và 15/10.
(()=>{
  const IMG=name=>`assets/2026-10-16/${name}.webp`;
  const IMG14=name=>`assets/2026-10-14/${name}.webp`;
  const IMG15=name=>`assets/2026-10-15/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const rewrite=(id,label,answer,icon)=>({id,label,type:"fill",strict:true,answer:[answer,answer.replace(/’/g,"'")],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 16/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const PLURAL=["buses","dresses","boxes","glasses"];
  const VOCAB=["shelter","materials","collapsed","furious","refused"];
  const DEF=["A building that keeps you safe.","The things we use to build and make.","If something has fallen down, it has collapsed.","When someone is really angry.","When you say no to something."];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const LA_Q=[
    // ── Homework check: Practice Book 105 (contractions) & 108 (plural nouns) ──
    la("Homework check · Contractions (Practice Book 105)","Read the two words. Choose the contraction.",[
      select("she","she is",["she’s","he’s","it’s","let’s"],"she’s","👧"),
      select("he","he is",["she’s","he’s","it’s","let’s"],"he’s","👦"),
      select("it","it is",["she’s","he’s","it’s","let’s"],"it’s","🌧️"),
      select("let","let us",["she’s","he’s","it’s","let’s"],"let’s","🎲")
    ],"she is → she’s · he is → he’s · it is → it’s · let us → let’s (Practice Book, page 105)"),
    la("Homework check · Find the contraction (Practice Book 105)","Read the sentence. Which word is the contraction?",[
      choice("store","Let’s go to the store.",["Let’s","go","store"],"Let’s","🏪"),
      choice("cold","Do you know if it’s cold out?",["it’s","know","cold"],"it’s","🥶"),
      choice("coat","She’s bringing her coat.",["She’s","bringing","coat"],"She’s","🧥")
    ],"Let’s go to the store. · Do you know if it’s cold out? · She’s bringing her coat. (Practice Book, page 105)"),
    {section:"Homework check · Plural nouns (Practice Book 108)",img:L,layout:"icon-activity",type:"compound",wordBank:PLURAL,
      text:"Read the singular nouns: bus, box, glass, dress. Write a plural noun to complete the sentences.",fields:[
      bank("bus","🚌 The ___ stop here.",PLURAL,"buses","🚌"),
      bank("dress","👗 Lin will hang the ___ up.",PLURAL,"dresses","👗"),
      bank("box","📦 Nick has ___ in his truck.",PLURAL,"boxes","📦"),
      bank("glass","🥛 Pat will set up the ___.",PLURAL,"glasses","🥛")
    ],explain:"The buses stop here. · Lin will hang the dresses up. · Nick has boxes in his truck. · Pat will set up the glasses. If a noun ends in -x, -s, or -ss, add -es to make it plural. (Practice Book, page 108)"},

    // ── Structural Analysis: Contractions with 's ──
    la("Contractions with ’s · Two words → one word","A contraction is 2 words joined together. We take away some letters and replace them with an apostrophe (’).",[
      select("there","There + is =",["There’s","Where’s","What’s"],"There’s","👾"),
      select("where","Where + is =",["There’s","Where’s","What’s"],"Where’s","📖"),
      select("what","What + is =",["There’s","Where’s","What’s"],"What’s","🔊"),
      choice("monster","There is a monster. →",["There’s a monster.","Theres a monster.","There’is a monster."],"There’s a monster.","👾")
    ],"There is → There’s · Where is → Where’s · What is → What’s · There is a monster. → There’s a monster.",{readingId:"contractions16"}),
    la("Contractions with ’s · Write it","Rewrite the sentence. Use a contraction.",[
      rewrite("noise","What is that noise?","What’s that noise?","🔊"),
      rewrite("school","He is going to school.","He’s going to school.","🏫")
    ],"What is that noise? → What’s that noise? · He is going to school. → He’s going to school."),
    // Game Baamboozle 1116709 "Basic Grammar Contractions" (chọn các câu dùng ’s).
    la("Contractions with ’s · Game","Say it with a contraction.",[
      select("dog","It is a dog. → ___ a dog.",["It’s","What’s","There’s","How’s"],"It’s","🐶"),
      select("name","What is your name? → ___ your name?",["It’s","What’s","There’s","How’s"],"What’s","🙋"),
      select("fish","There is 1 fish. → ___ 1 fish.",["It’s","What’s","There’s","How’s"],"There’s","🐟"),
      select("weather","How is the weather? → ___ the weather?",["It’s","What’s","There’s","How’s"],"How’s","🌤️")
    ],"It is → It’s · What is → What’s · There is → There’s · How is → How’s (game Basic Grammar Contractions)"),

    // ── Phonics: Short u ──
    la("Phonics · Read Together","Read the sentences. Find the short u words.",[
      multi("pup","The pup dug in the mud. Choose 3 short u words.",["pup","dug","mud","the","in"],["pup","dug","mud"],"🐶"),
      multi("bug","Gus put the bug in a cup. Choose 3 short u words.",["bug","cup","Gus","put","the"],["bug","cup","Gus"],"🐞"),
      multi("sun","The sun is up and hot. Choose 2 short u words.",["sun","up","hot","is"],["sun","up"],"☀️")
    ],"The pup dug in the mud. · Gus put the bug in a cup. · The sun is up and hot. Short u words: pup, dug, mud, Gus, bug, cup, sun, up. (put has a different sound.)",{readingId:"readTogether"}),
    // Game Baamboozle 71105 "Short U sound" (câu hỏi là tranh → thêm emoji gợi ý).
    la("Phonics · Short u game","What is it? Choose the short u word.",[
      choice("drum","🥁",["drum","dram","drim"],"drum","🥁"),
      choice("jug","🏺 (it holds water)",["jug","jog","jig"],"jug","🏺"),
      choice("tub","🛁",["tub","tab","tib"],"tub","🛁"),
      choice("hut","🛖",["hut","hat","hit"],"hut","🛖"),
      choice("hug","🤗",["hug","hog","hag"],"hug","🤗")
    ],"drum · jug · tub · hut · hug — all short u words (game Short U sound)."),
    // Video Phonics "ph" (Kids vs Phonics) — link trong mục 2.5 Phonics.
    la("Phonics · ph","Watch the video. The letters ph make the /f/ sound.",[
      choice("sound","ph makes the sound ___.",["/f/","/p/","/h/"],"/f/","📞"),
      multi("words","Which words have ph? Choose 4.",["phone","photo","dolphin","elephant","fish","pup"],["phone","photo","dolphin","elephant"],"🐬")
    ],"ph makes the /f/ sound: photo, phone, dolphin, elephant (video Kids vs Phonics: ph)."),

    // ── Anchor Text (reread): The Pigs, the Wolf, and the Mud — Reading and Writing Companion 67–69 ──
    la("The Pigs, the Wolf, and the Mud · The pigs’ home","Tell about the pigs and their home (pages 28–29).",[
      choice("home","What is the pigs’ home like?",["It’s full of mud. It’s a mess.","It is clean and new.","It is made of bricks."],"It’s full of mud. It’s a mess.","🏠"),
      choice("feel","How do the pigs feel about their home?",["They think mud is fun.","They are sad.","They want to move."],"They think mud is fun.","🐷"),
      choice("good","Why is the mud hut a good place for the pigs to live?",["Because they like the mud.","Because it is big.","Because the wolf likes it."],"Because they like the mud.","👍")
    ],"The pigs’ home is full of mud. It’s a mess. The pigs think mud is fun. The mud hut is a good place for the pigs to live because they like the mud. (Reading and Writing Companion, page 67)",{readingId:"pigs16"}),
    la("The Pigs, the Wolf, and the Mud · The wolf and the mud","What does the wolf think of mud (pages 33–34)?",[
      choice("do","What does the wolf do?",["He says “yuck!”","He plays in the mud.","He builds a hut."],"He says “yuck!”","🤢"),
      choice("feelW","How does the wolf feel about mud?",["He doesn’t like it.","He loves it.","He wants more."],"He doesn’t like it.","🐺"),
      choice("bad","Why is the mud hut a bad place for the wolf to try to eat the pigs?",["He thinks the mud is a mess.","The pigs are not home.","The hut is too high."],"He thinks the mud is a mess.","❌")
    ],"He says “yuck!”. He doesn’t like mud. The mud hut is a bad place for the wolf because he thinks the mud is a mess. (Reading and Writing Companion, page 68)"),
    la("The Pigs, the Wolf, and the Mud · The new hut","Talk about the pigs’ plan to build a new hut (pages 40–41).",[
      select("likes","Who likes the plan?",["The pigs","The wolf"],"The pigs","🐷"),
      select("not","Who does not like it?",["The pigs","The wolf"],"The wolf","🐺"),
      write("why","Write a full sentence: Why is a new mud hut a good idea?",["The wolf doesn’t like mud.","wolf","mud"],"✍️")
    ],"The pigs like the plan. The wolf does not. A new mud hut is a good idea because the wolf doesn’t like mud. (Reading and Writing Companion, page 69)"),

    // ── Oral Vocabulary (Define / Example / Ask) ──
    la("Oral Vocabulary · Define","Match each word with its meaning.",VOCAB.map((word,i)=>select(word,word,DEF,DEF[i],["🏠","🧱","🧱","😡","🙅"][i])),
      "shelter – A building that keeps you safe. · materials – The things we use to build and make. · collapsed – If something has fallen down, it has collapsed. · furious – When someone is really angry. · refused – When you say no to something.",{readingId:"vocab16"}),
    la("Oral Vocabulary · Example","Choose the word that fits the example.",[
      bank("rain","We ran to the ___ when it started to rain.",VOCAB,"shelter","🌧️"),
      bank("glue","Wood, glue, paper and plastic are all types of ___.",VOCAB,"materials","🧴"),
      bank("tower","The tower ___ when it got too high!",VOCAB,"collapsed","🗼"),
      bank("billy","Billy was ___ he couldn’t play football.",VOCAB,"furious","⚽"),
      bank("dog","My dog ___ to go outside in the rain.",VOCAB,"refused","🐶")
    ],"We ran to the shelter when it started to rain. · Wood, glue, paper and plastic are all types of materials. · The tower collapsed when it got too high! · Billy was furious he couldn’t play football. · My dog refused to go outside in the rain.",{wordBank:VOCAB}),
    la("Oral Vocabulary · Notebook","Complete the 5 sentences you copied in your notebook.",[
      bank("cat","The cat was ___.",VOCAB,"furious","🐱"),
      bank("he","He ___.",VOCAB,"refused","🙅"),
      bank("found","I found a ___.",VOCAB,"shelter","🏠"),
      bank("stone","Stone is a ___.",["material","shelter","tower"],"material","🪨"),
      bank("tower2","The tower ___.",VOCAB,"collapsed","🗼")
    ],"1) The cat was furious. 2) He refused. 3) I found a shelter. 4) Stone is a material. 5) The tower collapsed. (Notebook 16/10/2026)",{wordBank:VOCAB})
  ];

  registerQuiz({
    id:"class-diary-2026-10-16-language",
    uploadDate:"2026-10-16",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"16/10/2026 · Unit 2 Week 2 · Contractions · Plural nouns · Short u · The Pigs, the Wolf, and the Mud · Oral Vocabulary",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book pages 105 and 108",3],["Structural Analysis: Contractions with ’s","there’s · where’s · what’s · how’s",3],["Phonics","Short u: Read Together · game Short U sound · ph",3],["Anchor Text: The Pigs, the Wolf, and the Mud","Reread · Reading and Writing Companion pages 67-69",3],["Oral Vocabulary","shelter · materials · collapsed · furious · refused",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1610","Remember — Language Arts",[
          "📅 Class Diary: 16/10/2026",
          "(16/10) shelter: A building that keeps you safe.",
          "(16/10) materials: The things we use to build and make.",
          "(16/10) collapsed: If something has fallen down, it has collapsed.",
          "(16/10) furious: When someone is really angry.",
          "(16/10) refused: When you say no to something.",
          "(16/10) A contraction is 2 words joined together. We take away some letters and replace them with an apostrophe (’).",
          "(16/10) Contractions with ’s: he’s · she’s · where’s · what’s · let’s · there’s",
          "(16/10) If a noun ends in -x, -s, or -ss, add -es to make it plural: buses · dresses · boxes · glasses",
          "(16/10) ph makes the /f/ sound: photo · phone · dolphin · elephant",
          "(16/10) Short u: The pup dug in the mud. Gus put the bug in a cup. The sun is up and hot.",
          "(16/10) The pigs think mud is fun. The wolf doesn’t like mud."
        ],"Unit 2 Week 2"),
        {id:"contractions16",title:"Contractions with ’s",byline:"Structural Analysis · Class Diary 16/10",mode:"reference",images:[IMG14("contraction-he"),IMG14("contraction-she"),IMG14("contraction-where"),IMG14("contraction-what"),IMG("contraction-let"),IMG("contraction-there")],text:"A contraction is 2 words joined together. To do this, we have to take away some letters and replace them with an apostrophe (’).\nHe is going to school. → He’s going to school.\nShe is reading. → She’s reading.\nWhere is the book? → Where’s the book?\nWhat is that noise? → What’s that noise?\nLet us play a game. → Let’s play a game.\nThere is a monster. → There’s a monster."},
        {id:"readTogether",title:"Read Together · Short u",byline:"Phonics · Class Diary 16/10",mode:"reference",images:[IMG("read-together-short-u")],text:"The pup dug in the mud.\nGus put the bug in a cup.\nThe sun is up and hot."},
        {id:"pigs16",title:"The Pigs, the Wolf, and the Mud",byline:"Anchor Text (reread) · Literature Anthology page 26",images:[IMG15("pigs-wolf-mud-book")],text:"Genre: Fantasy. Three pigs live in a hut made of mud. They think mud is fun and they love a mess.\n\nThe wolf huffs and puffs, but he can’t huff and puff in mud. He kicks the hut and it falls in. He says “yuck!” — he doesn’t like mud. He thinks the mud is a mess, so he leaves.\n\nThe pigs plan a new hut made of mud. The pigs like the plan. The wolf does not."},
        {id:"vocab16",title:"Oral Vocabulary",byline:"Define · Example · Ask · Class Diary 16/10",mode:"reference",images:[IMG("vocab-shelter"),IMG("vocab-materials"),IMG("vocab-collapsed"),IMG("vocab-furious"),IMG("vocab-refused"),IMG("vocab-notebook")],text:"shelter — Define: A building that keeps you safe. Example: We ran to the shelter when it started to rain.\nmaterials — Define: The things we use to build and make. Example: Wood, glue, paper and plastic are all types of materials.\ncollapsed — Define: If something has fallen down, it has collapsed. Example: The tower collapsed when it got too high!\nfurious — Define: When someone is really angry. Example: Billy was furious he couldn’t play football.\nrefused — Define: When you say no to something. Example: My dog refused to go outside in the rain."},
        bonus("bonus-la-1610",[
          {label:"Video: Adding s and es",url:"https://www.youtube.com/watch?v=S36TFFcYe0I"},
          {label:"Game: Contractions",url:"https://www.baamboozle.com/game/1116709"},
          {label:"Video: The Pigs, the Wolf, and the Mud",url:"https://www.youtube.com/watch?v=vvR2yjmbWGE"},
          {label:"Video: Phonics (short u)",url:"https://www.youtube.com/watch?v=DXvp4Ybx0W4"},
          {label:"Game: Short U sound",url:"https://www.baamboozle.com/game/71105"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  const SCI_Q=[
    sci("Inquiry Activity · Make a claim","How are birds and their offspring alike and different?",[
      multi("alike","How are birds and their offspring ALIKE? Choose 3.",["They both have beaks.","They both have wings.","They both have feathers.","They both have fur.","They both have fins."],["They both have beaks.","They both have wings.","They both have feathers."],"🐦"),
      choice("different","How can they be DIFFERENT?",["They can be different sizes and colors.","One has wings and one has fins.","They are always exactly the same."],"They can be different sizes and colors.","🎨")
    ],"They both have beaks, wings, and feathers. They can be different sizes and colors. (Student Book page 38)"),
    sci("Inquiry Activity · Investigate","Observe the photos. Choose one photo. Record Data: How are the parent and its offspring alike and different?",[
      choice("flamingoA","Flamingo — alike:",["Both have wings, beaks, and feathers.","Both are white.","Both are very small."],"Both have wings, beaks, and feathers.","🦩"),
      choice("flamingoD","Flamingo — different:",["Parents are pink and offspring is white.","Parents are white and offspring is pink.","They are the same color."],"Parents are pink and offspring is white.","🦩"),
      choice("swan","🦢 Look at the swan and its babies. How are they different?",["They are different sizes and colors.","The babies have fins.","The babies have no feathers."],"They are different sizes and colors.","🦢")
    ],"Flamingo: alike — both have wings, beaks, and feathers; different — parents are pink and offspring is white. Swan: the babies are smaller and a different color than the parent.",{readingId:"swan"}),
    sci("Inquiry Activity · Communicate","Did what you observed match your claim? Explain.",[
      choice("match","Choose the best answer.",["Yes, they both have beaks, wings, and feathers. They are different sizes and colors.","No, birds do not have offspring.","No, offspring look exactly like their parents."],"Yes, they both have beaks, wings, and feathers. They are different sizes and colors.","✅"),
      choice("eggs","Lesson 3 (15/10): What animals hatch from eggs?",["birds and reptiles","dogs and cats","fish only"],"birds and reptiles","🥚")
    ],"Yes, they both have beaks, wings, and feathers. They are different sizes and colors. · Birds and reptiles hatch from eggs (15/10).")
  ];
  registerQuiz({
    id:"class-diary-2026-10-16-science",
    uploadDate:"2026-10-16",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"16/10/2026 · Lesson 3: Animals and Their Parents · Inquiry Activity: Compare Birds and Their Offspring",scoreByField:true,
      groups:groupsOf([["Inquiry Activity: Compare Birds and Their Offspring","Student Book pages 38, 39, and 40 · claim · investigate · communicate",3]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1610","Remember — Science",[
          "📅 Class Diary: 16/10/2026",
          "(16/10) Inquiry Activity: Compare Birds and Their Offspring.",
          "(16/10) Birds and their offspring both have beaks, wings, and feathers. They can be different sizes and colors.",
          "(16/10) Flamingo: Parents are pink and offspring is white.",
          "(15/10) Lesson 3: Animals and Their Parents.",
          "(15/10) Birds and reptiles hatch from eggs."
        ],"Unit 2 Module 1 · Lesson 3"),
        {id:"swan",title:"Compare Birds and Their Offspring",byline:"Inquiry Activity · Student Book pages 38-40",mode:"reference",images:[IMG("swan-investigate")],text:"1. Observe the photos on the next page.\n2. Choose one photo.\n3. Record Data: How are the parent and its offspring alike and different?"}
      ]}
  });

  // ───────────────────────── WELLBEING ─────────────────────────
  const wb=card("assets/mascot/academy/success.webp");
  const WB_VOCAB=["special","family","care","friends","love","feelings"];
  const WB_DO=["run","fix things","chop the chicken","sing to Bubs","have figs"];
  const WB_Q=[
    wb("Vocabulary · People who love me","Unit 1.4 People who are special to me · Lesson 1 People who love me.",[
      multi("vocab","Which words did we learn? Choose 6.",["special","family","care","friends","love","feelings","truck","rain"],WB_VOCAB,"❤️"),
      choice("lesson","In Lesson 1 we talked about our family and friends who care for us and love us. Hint: love. So Lesson 1 is called ___.",["People who love me","Animals and Their Parents","Our Community"],"People who love me","💞")
    ],"Vocabulary: special · family · care · friends · love · feelings. Unit 1.4 People who are special to me · Lesson 1 People who love me.",{readingId:"wbVocab"}),
    wb("Six of Us · Who is it?","Read the story “Six of Us”. What can each person do?",[
      select("chaz","I am Chaz. I can…",WB_DO,"run","🏃"),
      select("mum","This is Mum. She can…",WB_DO,"fix things","🔧"),
      select("nan","This is Nan. She can…",WB_DO,"chop the chicken","🍗"),
      select("jen","This is Jen. She can…",WB_DO,"sing to Bubs","🎶"),
      select("dad","Dad visits us. He can…",WB_DO,"have figs","🫐")
    ],"I am Chaz. I can run. · This is Mum. She can fix things. · This is Nan. She chops the chicken. · This is Jen. She sings to Bubs. · Dad visits us. He has figs. I dish up the figs.",{readingId:"sixOfUs"}),
    wb("Six of Us · Special people","Special people in the story.",[
      multi("people","Who are the special people in the story? Choose 6.",["Chaz","Mum","Nan","Jen","Bubs","Dad","Ben","Rex"],["Chaz","Mum","Nan","Jen","Bubs","Dad"],"👨‍👩‍👧‍👦"),
      choice("figs","Dad has figs. What does Chaz do?",["I dish up the figs.","I eat all the figs.","I sell the figs."],"I dish up the figs.","🍽️")
    ],"Special people in the story: Chaz, Mum, Nan, Jen, Bubs, Dad. Dad visits us. He has figs. I dish up the figs."),
    wb("Big Question · Who is special to you?","Think: Who is special to you? Why are they special?",[
      multi("who","Who can be special to you? Choose 6.",["Mum","Dad","Grandparents","Sister","Brother","Friends","Monster","Robot"],["Mum","Dad","Grandparents","Sister","Brother","Friends"],"🧑‍🤝‍🧑"),
      multi("why","Why are they special? Choose 4.",["They love me.","They hug me.","They feed me.","They play with me.","They take my toys."],["They love me.","They hug me.","They feed me.","They play with me."],"🤗")
    ],"Who is special to you? Mum, Dad, Grandparents, Sister, Brother, Friends. Why are they special? They love me. They hug me. They feed me. They play with me.",{readingId:"bigQuestion"}),
    // Video "Sesame Street: Family Song" (link diary 16/10).
    wb("Video · What is a family?","Watch the Family Song.",[
      multi("who","Who can be in a family? Choose 5.",["brothers","sisters","mom and dad","grandpa","aunts and uncles","a bus","a rock"],["brothers","sisters","mom and dad","grandpa","aunts and uncles"],"👪"),
      choice("far","Some family lives far away. Are they still your family?",["Yes, they are still your family.","No, only people near you are family."],"Yes, they are still your family.","🌍"),
      choice("do","What do families do together?",["They spend time and have fun together.","They never see each other.","They only sleep."],"They spend time and have fun together.","⚽")
    ],"A family can be brothers, sisters, mom and dad, grandparents, aunts and uncles. Family is the people you love. Near or far, they are still your family. Families spend time and have fun together. (Sesame Street: Family Song)"),
    wb("Wellbeing Book · What we do together","Activity 4.1a What we do together (page 26).",[
      choice("draw","What do you draw on page 26?",["what you do with people you love","your favorite animal","a map of the school"],"what you do with people you love","🎨"),
      multi("label","Bonus: label the people. Choose the 6 people words.",["Mum","Dad","friend","brother","sister","grandparents","table","ball"],["Mum","Dad","friend","brother","sister","grandparents"],"🏷️"),
      write("together","Write: We like to ___ together.",["We like to play games together.","together"],"✍️")
    ],"Everyone: Draw what you do with people you love. Bonus: Label the people: Mum, Dad, friend, brother, sister, grandparents. Write: We like to play games together. (Wellbeing Book, page 26)")
  ];
  registerQuiz({
    id:"class-diary-2026-10-16-wellbeing",
    uploadDate:"2026-10-16",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"16/10/2026 · Unit 1.4 People who are special to me · Lesson 1 People who love me",scoreByField:true,
      groups:groupsOf([["Vocabulary","special · family · care · friends · love · feelings",1],["Big Question: Six of Us","Special people in the story",2],["Who is special to you?","Think · why are they special?",1],["Family Song","What is a family?",1],["Wellbeing Book page 26","What we do together",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-1610","Remember — Wellbeing",[
          "📅 Class Diary: 16/10/2026",
          "(16/10) Vocabulary: special · family · care · friends · love · feelings",
          "(16/10) Special people in the story Six of Us: Chaz · Mum · Nan · Jen · Bubs · Dad",
          "(16/10) Who is special to you? Mum, Dad, Grandparents, Sister, Brother, Friends.",
          "(16/10) Why are they special? They love me. They hug me. They feed me. They play with me.",
          "(16/10) We like to play games together."
        ],"Unit 1.4 · Lesson 1"),
        {id:"wbVocab",title:"Vocabulary",byline:"Wellbeing · Unit 1.4 Lesson 1",mode:"reference",images:[IMG("wb-vocabulary")],text:"special · family · care · friends · love · feelings"},
        {id:"sixOfUs",title:"Six of Us",byline:"Big Question · story",images:[IMG("wb-six-of-us-1"),IMG("wb-six-of-us-2"),IMG("wb-six-of-us-3"),IMG("wb-special-people")],text:"I am Chaz. I can run.\nThis is Mum. She can fix things.\nThis is Nan. She chops the chicken.\nThis is Jen. She sings to Bubs.\nDad visits us. He has figs.\nI dish up the figs."},
        {id:"bigQuestion",title:"Who is special to you?",byline:"Big Question · Think · Why?",mode:"reference",images:[IMG("wb-who-special"),IMG("wb-why-special"),IMG("wb-book-26")],text:"Who is special to you? Mum · Dad · Grandparents · Sister · Brother · Friends\nWhy are they special? They love me · They hug me · They feed me · They play with me"},
        bonus("bonus-wb-1610",[{label:"Video: Family Song (Sesame Street)",url:"https://www.youtube.com/watch?v=ii_LtHrEiao"}])
      ]}
  });
})();
