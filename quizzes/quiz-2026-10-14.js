// Quiz 14/10/2026 — Class Diary 14/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 (Contractions with 's, Cubs in a Hut, singular/plural nouns).
// Math: ôn Lesson 27–31 (cô ôn key concepts 14/10; nguồn thêm: diary 01/10 L27–28, 05/10 L29, 07/10 L30, 08/10 L31).
// Ảnh: web/assets/2026-10-14/ (tạo bằng web/_reference/tao_anh_2026-10-14.py). Truyện Cubs in a Hut dùng ảnh 2026-10-13.
(()=>{
  const IMG=name=>`assets/2026-10-14/${name}.webp`;
  const IMG13=name=>`assets/2026-10-13/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  // Viết lại câu: phải đúng chữ hoa, dấu ’ và dấu câu (chấp nhận cả ' và ’).
  const rewrite=(id,label,answer,icon)=>({id,label,type:"fill",strict:true,answer:[answer,answer.replace(/’/g,"'")],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 14/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["three","could","live","one","then"];
  const TWO=["he is","she is","it is","where is","what is","let us"];
  const SHORT=["he’s","she’s","it’s","where’s","what’s","let’s"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const cubsText=["Cubs in a Hut","“Let’s make a hut,” said Gus.\n“We could use mud,” said Russ.\n“It will be fun!” said Bud.","The cubs had a plan.\nBud got a big stack of sticks.\nRuss and Gus got mud and grass.","The cubs did a very good job.\n“Let’s move in!” yelled Russ.\n“Yes, yes!” yelled Bud and Gus.","The cubs set up rugs and beds.\nThey filled up the hut with lots of stuff.","Then one night three cubs got up.\nDrip, drip, drip!\n“My bed is wet!” yelled Bud.","“My head is wet!” yelled Gus.\n“It’s not fun to live in a wet hut!” yelled Russ.","“We must fix it,” said Bud.\n“It will not drip on us,” said Gus.\n“We will not get wet,” said Russ.","It is good to live in a dry hut.\nThree cubs are as snug as bugs in a rug!"];
  const luisText="Write About the Shared Read: How do the cubs work together to solve their problem?\n\nStudent Model (Luis):\nThe cubs use a ladder to get on the roof. One cub holds a light. Another cub holds an umbrella to stay dry. The last cub uses wood to fix the leaky roof!";

  const LA_Q=[
    // ── Homework check: Practice Book 97 (rhyme) & 107 (high-frequency words) ──
    la("Homework check · Rhyme (Practice Book 97)","Words that rhyme end in the same sounds. Choose the word that rhymes.",[
      choice("sock","🧦 sock",["clock","sun","bed"],"clock","🧦"),
      choice("soap","🧼 soap",["rope","cat","pig"],"rope","🧼"),
      choice("boat","⛵ boat",["goat","fish","cup"],"goat","⛵"),
      choice("can","🥫 can",["fan","dog","hat"],"fan","🥫"),
      choice("mouse","🐭 mouse",["house","bus","pen"],"house","🐭")
    ],"sock – clock · soap – rope · boat – goat · can – fan · mouse – house. Words that rhyme end in the same sounds."),
    {section:"Homework check · High-frequency words (Practice Book 107)",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,
      text:"Read the words in the box. Complete each sentence.",fields:[
      bank("live","I ___ in the city.",HFW,"live","🏙️"),
      bank("one","There is ___ duck.",HFW,"one","🦆"),
      bank("could","Sam ___ swim.",HFW,"could","🏊"),
      bank("three","She has ___ pups.",HFW,"three","🐶"),
      bank("then","I run up the hill. ___ I run down the hill.",HFW,"then","⛰️")
    ],explain:"I live in the city. · There is one duck. · Sam could swim. · She has three pups. · I run up the hill. Then I run down the hill. (Practice Book, page 107)"},

    // ── Structural Analysis: Contractions with 's ──
    la("Contractions with ’s · What is a contraction?","Read the box. Then choose.",[
      choice("what","A contraction is when you ___.",["put two words together to make one word","put two letters together to make a sound","write a word two times"],"put two words together to make one word","🔗"),
      choice("hes","Read the words: he is. Now read the contraction:",["he’s","his","she’s"],"he’s","👦"),
      choice("letter","The apostrophe (’) in he’s stands for the missing letter ___ in is.",["i","s","e"],"i","❓"),
      choice("mark","Which mark is an apostrophe?",["’",",","."],"’","✏️")
    ],"A contraction is when you put two words together to make one word. Read the words: he is. Now read the contraction: he’s. The apostrophe (’) stands for the missing letter i in is.",{readingId:"contractions"}),
    la("Contractions with ’s · Make the contraction","Two words → one word.",[
      select("he","He + is =",SHORT,"he’s","👦"),
      select("she","She + is =",SHORT,"she’s","👧"),
      select("it","It + is =",SHORT,"it’s","🌧️"),
      select("where","Where + is =",SHORT,"where’s","📖"),
      select("what","What + is =",SHORT,"what’s","🔊"),
      select("let","Let + us =",SHORT,"let’s","🎲")
    ],"he is → he’s · she is → she’s · it is → it’s · where is → where’s · what is → what’s · let us → let’s"),
    la("Contractions with ’s · Two words","Which two words make the contraction?",[
      select("whats","what’s",TWO,"what is","🔊"),
      select("lets","let’s",TWO,"let us","🎲"),
      select("wheres","where’s",TWO,"where is","📖"),
      select("its","it’s",TWO,"it is","🌧️"),
      select("shes","she’s",TWO,"she is","👧")
    ],"what’s = what is · let’s = let us · where’s = where is · it’s = it is · she’s = she is"),
    la("Contractions with ’s · Sentences","Choose the sentence with the contraction.",[
      choice("school","He is going to school.",["He’s going to school.","His going to school.","Hes going to school."],"He’s going to school.","🏫"),
      choice("reading","She is reading.",["She’s reading.","Shes reading.","She’is reading."],"She’s reading.","📚"),
      choice("rain","It is raining.",["It’s raining.","Its raining.","It’is raining."],"It’s raining.","🌧️"),
      choice("noise","What is that noise?",["What’s that noise?","Whats that noise?","What that noise?"],"What’s that noise?","🔊")
    ],"He is going to school. → He’s going to school. · She is reading. → She’s reading. · It is raining. → It’s raining. · What is that noise? → What’s that noise?"),
    la("Contractions with ’s · Write it","Rewrite the sentence. Use a contraction.",[
      rewrite("book","Where is the book?","Where’s the book?","📖"),
      rewrite("game","Let us play a game.","Let’s play a game.","🎲")
    ],"Where is the book? → Where’s the book? · Let us play a game. → Let’s play a game. Remember the capital letter, the apostrophe (’) and the end mark."),
    // Game Baamboozle "'s Contractions" (thêm there's, who's, that's) + video English4abc (that's, who's).
    la("Contractions with ’s · Video and game","Match the contraction with its two words.",[
      select("theres","there’s",["there is","that is","who is"],"there is","📍"),
      select("whos","who’s",["there is","that is","who is"],"who is","🙋"),
      select("thats","that’s",["there is","that is","who is"],"that is","👉"),
      choice("final","Say it’s. What final sound do you hear?",["/s/","/z/"],"/s/","👂"),
      choice("final2","Say he’s. What final sound do you hear?",["/z/","/s/"],"/z/","👂")
    ],"there’s = there is · who’s = who is · that’s = that is (game ’s Contractions) · The ’s can sound like /s/ (it’s, what’s, let’s) or /z/ (he’s, she’s, where’s)."),

    // ── Shared Read: Cubs in a Hut (reread) ──
    la("Cubs in a Hut · Genre: Fantasy","Read the story first. Then choose.",[
      choice("fantasy","A fantasy is ___.",["a made-up story","a true story about real people","a list of facts"],"a made-up story","🐻"),
      choice("why","Why is Cubs in a Hut a fantasy?",["The bear cubs talk and build a hut. They could not exist in real life.","It tells facts about real bears.","It has photos of real bears."],"The bear cubs talk and build a hut. They could not exist in real life.","🛖"),
      choice("also","A fantasy can also have a ___.",["problem and solution","map and labels","table of numbers"],"problem and solution","🧩")
    ],"A fantasy is a made-up story. It often has characters that could not exist in real life. It can also have a problem and solution.",{readingId:"cubs"}),
    la("Cubs in a Hut · Characters, Setting, and Events","Characters are the people or animals in a story. The setting is where the story takes place. The events are what happen in the story.",[
      choice("characters","Who are the characters?",["Gus, Russ, and Bud","Ben and Mom","Mimbi, Pimbi, and Timbi"],"Gus, Russ, and Bud","🐻"),
      multi("setting","Where does the story take place? Choose 2.",["the forest","the hut","a school","a bus"],["the forest","the hut"],"🌲"),
      choice("event","Which is an event in the story?",["The cubs build a hut.","The cubs go to the zoo.","The cubs ride a bus."],"The cubs build a hut.","🔨")
    ],"Characters: Gus, Russ, and Bud · Setting: the forest and the hut · Events: they build a hut; the hut drips and they get wet; they fix the roof. (Reading and Writing Companion, page 63)"),
    la("Cubs in a Hut · Problem and solution","Match each problem with its solution.",[
      select("p1","Problem: The cubs need a hut to live in.",["They get materials.","They fix the roof."],"They get materials.","🛖"),
      select("p2","Problem: The cubs get wet.",["They get materials.","They fix the roof."],"They fix the roof.","💧")
    ],"1. The cubs need a hut to live in. → They get materials (mud, sticks, and grass). · 2. The cubs get wet. → They fix the roof. (Reading and Writing Companion, page 61)"),

    // ── Writing and Grammar: singular and plural nouns (RWC 64–65) ──
    la("Grammar · Singular and plural nouns","A singular noun names one person, place, or thing. A plural noun names more than one person, place, or thing.",[
      select("cub","cub",["singular noun","plural noun"],"singular noun","🐻"),
      select("cubs","cubs",["singular noun","plural noun"],"plural noun","🐻"),
      select("roof","roof",["singular noun","plural noun"],"singular noun","🏠"),
      select("sticks","sticks",["singular noun","plural noun"],"plural noun","🪵"),
      select("beds","beds",["singular noun","plural noun"],"plural noun","🛏️"),
      select("ladder","ladder",["singular noun","plural noun"],"singular noun","🪜")
    ],"Singular (one): cub, roof, ladder · Plural (more than one): cubs, sticks, beds."),
    la("Writing · Luis’s writing","Read what Luis wrote. Then answer.",[
      choice("plural","Find the plural noun in the first sentence: “The cubs use a ladder to get on the roof.”",["cubs","ladder","roof"],"cubs","🔍"),
      choice("detail","Which word is a descriptive detail in “The last cub uses wood to fix the leaky roof!”?",["leaky","uses","the"],"leaky","✨"),
      choice("dry","Why does one cub hold an umbrella?",["to stay dry","to fix the roof","to get on the roof"],"to stay dry","☂️"),
      choice("notice","What did Luis use in his writing?",["plural nouns","numbers only","no nouns"],"plural nouns","📝")
    ],"The cubs use a ladder to get on the roof. (plural noun: cubs) · Another cub holds an umbrella to stay dry. · The last cub uses wood to fix the leaky roof! (descriptive detail: leaky) · I noticed Luis used plural nouns.",{readingId:"luis"})
  ];

  registerQuiz({
    id:"class-diary-2026-10-14-language",
    uploadDate:"2026-10-14",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"14/10/2026 · Unit 2 Week 2 · Contractions with ’s · Cubs in a Hut · singular and plural nouns",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book pages 97 and 107",2],["Structural Analysis: Contractions with ’s","he’s · she’s · it’s · where’s · what’s · let’s",6],["Shared Read: Cubs in a Hut","Fantasy · characters, setting, events · problem and solution",3],["Writing and Grammar","Singular and plural nouns · Reading and Writing Companion pages 64-65",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1410","Remember — Language Arts",[
          "📅 Class Diary: 14/10/2026",
          "(14/10) A contraction is when you put two words together to make one word: he is → he’s.",
          "(14/10) The apostrophe (’) stands for the missing letter i in is.",
          "(14/10) Contractions with ’s: he’s · she’s · it’s · where’s · what’s · let’s",
          "(14/10) Genre: Fantasy. A fantasy is a made-up story. It often has characters that could not exist in real life. It can also have a problem and solution.",
          "(14/10) Characters are the people or animals in a story.",
          "(14/10) The setting is where the story takes place.",
          "(14/10) The events are what happen in the story.",
          "(14/10) A singular noun names one person, place, or thing.",
          "(14/10) A plural noun names more than one person, place, or thing."
        ],"Unit 2 Week 2"),
        {id:"contractions",title:"Contractions with ’s",byline:"Structural Analysis · Class Diary 14/10",mode:"reference",images:[IMG("contraction-rule"),IMG("contraction-he"),IMG("contraction-she"),IMG("contraction-it"),IMG("contraction-where"),IMG("contraction-what"),IMG("contraction-let")],text:"A contraction is when you put two words together to make one word. Read the words: he is. Now read the contraction: he’s. The apostrophe (’) stands for the missing letter i in is.\n\nHe is going to school. → He’s going to school.\nShe is reading. → She’s reading.\nIt is raining. → It’s raining.\nWhere is the book? → Where’s the book?\nWhat is that noise? → What’s that noise?\nLet us play a game. → Let’s play a game."},
        {id:"cubs",title:"Cubs in a Hut",byline:"Shared Read (reread) · Reading and Writing Companion, page 48 · Fantasy",images:cubsText.map((_,i)=>IMG13(`cubs-${String(i+1).padStart(2,"0")}`)),text:cubsText.join("\n\n")},
        {id:"luis",title:"Write About the Shared Read",byline:"Writing and Grammar · Reading and Writing Companion page 64",mode:"reference",text:luisText},
        bonus("bonus-la-1410",[
          {label:"Video: Contractions",url:"https://www.youtube.com/watch?v=0_NVE-yttBE"},
          {label:"Game: ’s Contractions",url:"https://www.baamboozle.com/index.php/slideshow/2941674"},
          {label:"Video: Cubs in a Hut",url:"https://www.youtube.com/watch?v=EJu-msisNog"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 27–31 ─────────────────────────
  const cubes=(n,c)=>c.repeat(n);
  const MATH_Q=[
    // ── Lesson 27: Stories About Comparing ──
    math("Lesson 27 · Stories About Comparing","Match the white cubes with the gray cubes. Then count how many more.",[
      num("more",`${cubes(9,"⬜")}\n${cubes(6,"⬛")}\nHow many more white cubes?`,3,"⬜"),
      num("fewer","How many fewer gray cubes?",3,"⬛")
    ],"Match each gray cube with a white cube. 3 white cubes have no match: 3 more white cubes, 3 fewer gray cubes. 9 − 6 = 3."),
    math("Lesson 27 · How many more? How many fewer?","Write a subtraction sentence. Write how many more or fewer.",[
      num("dogs","Sam sees 5 dogs. Beth sees 3 dogs. How many more dogs does Sam see than Beth?",2,"🐶"),
      num("tickets","Duane has 6 tickets. Mimi has 2 tickets. How many fewer tickets does Mimi have than Duane?",4,"🎟️"),
      num("algebra","7 − ___ = 1",6,"🧮"),
      choice("sentence","Ann has 8 stickers. Tom has 5 stickers. How many more stickers does Ann have?",["8 − 5 = 3","8 + 5 = 13","5 − 3 = 2"],"8 − 5 = 3","⭐")
    ],"5 − 3 = 2 more dogs · 6 − 2 = 4 fewer tickets · 7 − 6 = 1 · 8 − 5 = 3 more stickers. To compare, subtract the smaller number from the bigger number."),

    // ── Lesson 28: Connecting Addition and Subtraction ──
    math("Lesson 28 · Same numbers","The addition fact and the subtraction fact use the same numbers.",[
      num("a","4 + 3 = 7, so 7 − 3 =",4,"🔗"),
      num("b","6 + 4 = 10, so 10 − 4 =",6,"🔗"),
      num("c","3 + 7 = 10, so 10 − 3 =",7,"🔗"),
      num("d","2 + 7 = 9, so 9 − 2 =",7,"🔗"),
      choice("first","The sum of the addition sentence is ___ in the subtraction sentence.",["the first number","the last number","not used"],"the first number","💡")
    ],"4 + 3 = 7 → 7 − 3 = 4 · 6 + 4 = 10 → 10 − 4 = 6 · 3 + 7 = 10 → 10 − 3 = 7 · 2 + 7 = 9 → 9 − 2 = 7. The sum of the addition sentence is the first number in the subtraction sentence."),
    math("Lesson 28 · Whole and parts","You can use the whole and the parts to write number sentences.",[
      num("part","6 is the whole. You see 4. So ___ is the other part.",2,"🔵"),
      choice("sub","Which is a subtraction sentence for 6, 4 and 2?",["6 − 4 = 2","4 + 6 = 10","6 + 2 = 8"],"6 − 4 = 2","➖"),
      choice("add","Which is an addition sentence for 6, 4 and 2?",["4 + 2 = 6","6 − 2 = 4","4 − 2 = 2"],"4 + 2 = 6","➕"),
      num("missA","4 + ___ = 8",4,"🧮"),
      num("missB","___ − 4 = 4",8,"🧮")
    ],"6 is the whole. 4 is one part. 2 is the other part: 6 − 4 = 2 · 6 − 2 = 4 · 4 + 2 = 6 (addition sentence). 4 + 4 = 8 · 8 − 4 = 4."),

    // ── Lesson 29: Problem Solving: Use Objects ──
    math("Lesson 29 · Use Objects","You can use objects to show a story and write a number sentence.",[
      num("hats","🎩🎩🎩🎩🎩🎩 There are 6 hats. Ashley takes 2 hats. How many hats are left?",4,"🎩"),
      choice("hatsS","Write the number sentence.",["6 − 2 = 4","6 + 2 = 8","4 − 2 = 2"],"6 − 2 = 4","📝"),
      num("apples","There are 8 apples. 3 fall off the tree. How many are left?",5,"🍎"),
      choice("check","Look back and check: which addition sentence uses the same numbers as 8 − 3 = 5?",["5 + 3 = 8","8 + 3 = 11","5 + 5 = 10"],"5 + 3 = 8","✅")
    ],"6 − 2 = 4 hats. · 8 is the whole, 3 is one part. I know the whole and one part. To find the missing part, I subtract: 8 − 3 = 5 apples. I can write an addition sentence that uses the same numbers: 5 + 3 = 8. My answer makes sense."),
    math("Lesson 29 · How many are left?","Use counters to show the story. Write the answer.",[
      num("boys","9 boys are at the park. 5 go home. How many boys are left?",4,"👦"),
      num("ducks","6 ducks are in the pond. 3 fly away. How many ducks are left?",3,"🦆"),
      num("books","There are 8 books on the shelf. Dana takes 2 books. How many books are left?",6,"📚"),
      num("bees","7 bees are in the garden. 5 fly away. How many bees are left?",2,"🐝"),
      num("buttons","You have 5 buttons. What is the greatest number of buttons you can give away?",5,"🔘")
    ],"9 − 5 = 4 · 6 − 3 = 3 · 8 − 2 = 6 · 7 − 5 = 2 · You have 5 buttons, so you can give away 5 at most."),

    // ── Lesson 30: Thinking Addition to 12 to Subtract ──
    math("Lesson 30 · Related facts","You can use addition facts to help you subtract.",[
      choice("related","8 + 1 = 9 and 9 − 1 = 8 are ___.",["related facts","doubles","comparing stories"],"related facts","🔗"),
      num("think1","9 − 5 = ?  Think: 5 + ___ = 9",4,"🤔"),
      num("ans1","so 9 − 5 =",4,"✅"),
      num("think2","11 − 4 = ?  Think: 4 + ___ = 11",7,"🤔"),
      num("ans2","so 11 − 4 =",7,"✅")
    ],"8 + 1 = 9 and 9 − 1 = 8 are related facts. Think of the addition fact to solve the subtraction fact: 5 + 4 = 9, so 9 − 5 = 4 · 4 + 7 = 11, so 11 − 4 = 7."),
    math("Lesson 30 · Think addition","Think addition to help you subtract.",[
      num("a","12 − 8 =",4,"🧠"),
      num("b","12 − 9 =",3,"🧠"),
      num("c","10 − 4 =",6,"🧠"),
      num("d","11 − 5 =",6,"🧠"),
      num("tie","Mark scores 6 points. Amy scores 11 points. How many points does Mark need to tie the game?",5,"🏀")
    ],"8 + 4 = 12 → 12 − 8 = 4 · 9 + 3 = 12 → 12 − 9 = 3 · 4 + 6 = 10 → 10 − 4 = 6 · 5 + 6 = 11 → 11 − 5 = 6 · 6 + 5 = 11, so Mark needs 5 points."),

    // ── Lesson 31: Problem Solving: Draw a Picture and Write a Number Sentence ──
    math("Lesson 31 · Draw a picture","You can draw a picture to help you solve a problem.",[
      num("grapes","🟢🟢🟢🟢🟢🟢🟢 Mia has 7 grapes. Mia eats 3 grapes. Cross out the grapes she eats. How many grapes are left?",4,"🍇"),
      choice("grapesS","Write a number sentence that tells about the picture.",["7 − 3 = 4","7 + 3 = 10","4 − 3 = 1"],"7 − 3 = 4","📝"),
      choice("check","Check your work. What should you ask?",["Does the number sentence match the picture?","Is my picture colorful?","Did I write my name?"],"Does the number sentence match the picture?","✅")
    ],"Draw 7 grapes. Cross out 3. 4 grapes are left: 7 − 3 = 4. Check your work: does the number sentence match the picture?"),
    math("Lesson 31 · How many more?","Draw a picture and write a subtraction sentence to solve.",[
      num("cars","Morgan has 7 toy cars. He has 4 toy trucks. How many more cars does Morgan have?",3,"🚗"),
      choice("carsS","Which number sentence solves it?",["7 − 4 = 3","7 + 4 = 11","4 − 3 = 1"],"7 − 4 = 3","📝"),
      num("fish","Lily has 9 fish. Tom has 5 fish. How many more fish does Lily have?",4,"🐟")
    ],"Morgan has 3 more cars than trucks: 7 − 4 = 3. My picture shows the same answer as my number sentence. · 9 − 5 = 4 more fish."),
    math("Lessons 27–31 · Mixed review","Add or subtract? Then write the answer.",[
      select("op1","There are 8 birds. 5 fly away. How many are left? Use…",["+","−"],"−","🐦"),
      num("ans1","8 − 5 =",3,"🐦"),
      select("op2","Jen has 4 red balls and 5 blue balls. How many balls in all? Use…",["+","−"],"+","⚽"),
      num("ans2","4 + 5 =",9,"⚽"),
      tf("related","5 + 3 = 8 and 8 − 3 = 5 use the same numbers.",true,"🔗")
    ],"Separate or compare → subtract: 8 − 5 = 3 · Join → add: 4 + 5 = 9 · 5 + 3 = 8 and 8 − 3 = 5 are related facts.")
  ];

  registerQuiz({
    id:"math-lessons-27-31-review",
    uploadDate:"2026-10-14",
    subjectKey:"math",
    title:"Math – Lesson 27–31 Review",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"14/10/2026 · Lesson 27–31 · Comparing · Connecting + and − · Use objects · Think addition to 12 · Draw a picture",scoreByField:true,
      groups:groupsOf([
        ["Lesson 27: Stories About Comparing","How many more? How many fewer?",2],
        ["Lesson 28: Connecting Addition and Subtraction","Same numbers · whole and parts",2],
        ["Lesson 29: Problem Solving: Use Objects","Show the story · how many are left",2],
        ["Lesson 30: Thinking Addition to 12 to Subtract","Related facts",2],
        ["Lesson 31: Problem Solving: Draw a Picture and Write a Number Sentence","Draw · cross out · check",2],
        ["Mixed Review","Test on Thursday: lessons 22 to 31",1]
      ]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-27-31","Remember — Math Lesson 27–31",[
          "📅 Class Diary: 14/10/2026",
          "(14/10 · L27) Match the white cubes with the gray cubes. Then count how many more.",
          "(14/10 · L28) The addition fact and the subtraction fact use the same numbers. The sum of the addition sentence is the first number in the subtraction sentence.",
          "(01/10 · L28) You can use the whole and the parts to write number sentences.",
          "(14/10 · L29) You can use objects to show a story and write a number sentence.",
          "(05/10 · L29) I know the whole and one part. To find the missing part, I subtract.",
          "(14/10 · L30) You can use addition facts to help you subtract. 8 + 1 = 9 and 9 − 1 = 8 are related facts.",
          "(07/10 · L30) Think of the addition fact to solve the subtraction fact: 5 + 4 = 9, so 9 − 5 = 4.",
          "(14/10 · L31) You can draw a picture to help you solve a problem. Check your work. Does the number sentence match the picture?",
          "(14/10) ⚠️ Review lessons 22 to 31 for the test on THURSDAY."
        ],"Teacher reviewed the key concepts on 14/10/2026")
      ]}
  });
})();
