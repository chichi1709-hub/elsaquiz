// Quiz 04/11/2026 — Class Diary 04/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 116 (end blends, n-blend) ·
// Structural Analysis: Inflectional Ending -ing (video Rockin' English + Practice: 8 ảnh "What is … doing?", mỗi câu một ảnh riêng) ·
// game Wordwall "verbs -ed or -ing" · Research and Inquiry (Pick to research: animal · habitat · food; RWC pages 108–109 Where Animals Live) ·
// Oral Vocabulary (hibernate, tolerate, tranquil, depend, habitat) · Grammar: Singular and Plural Possessive Nouns (video MC Grammar).
// Math: Lesson 39 (number patterns: eggs in the nests, skip count by 2s) + homework check Workbook 9-4 (Problem Solving: Look for a Pattern).
// Wellbeing: Unit 1.4 Lesson 3 Making friends (What makes a good friend? · friendship bracelet · Wellbeing Book page 31).
// Ảnh: web/assets/2026-11-04/ (tạo bằng web/_reference/tao_anh_2026-11-04.py).
(()=>{
  const IMG=name=>`assets/2026-11-04/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="04/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const ING_RULE="Add the ending -ing to an action word to tell what is happening now.";
  const POSS="A possessive noun tells who or what has something. A possessive noun that tells about one person or thing ends with ’s. A possessive noun that tells about more than one person or thing ends with s’.";
  const HAB=["Forest","Ocean","River","Jungle"],FOOD=["Vegetables","Carrots","Small fish","Animals","Meat"];
  const VOC=["hibernate","tolerate","tranquil","depend","habitat"];
  // Định nghĩa lấy nguyên văn slide Oral Vocabulary (ảnh có gạch nối đáp án của cô nên không đưa ảnh vào bài).
  const DEF={tranquil:"Means ‘calm’ and ‘peaceful’.",tolerate:"To do something - even if you don’t like it.",habitat:"The place where an animal lives in nature.",
    hibernate:"To spend the winter sleeping in a shelter.",depend:"If you __ on something, you need it."};
  // Practice -ing: mỗi câu có ảnh riêng (đã cắt bỏ chữ đáp án đỏ) → [id ảnh, câu hỏi, đáp án, lựa chọn sai, icon]
  const ING=[["cut","What is the hamster doing? It is ___ the cucumber.","cutting",["washing","cut"],"🐹"],
    ["play","What is the cat doing? It is ___ the piano.","playing",["painting","play"],"🎹"],
    ["laugh","What is Jerry doing? He is ___.","laughing",["dancing","laugh"],"🐭"],
    ["wash","What is Spongebob doing? He is ___ the dishes.","washing",["cutting","wash"],"🧽"],
    ["paint","What is the dog doing? It is ___ a picture.","painting",["driving","paint"],"🐶"],
    ["drive","What is the cat doing? It is ___ a car.","driving",["playing","drive"],"🚗"],
    ["hop","What is the kangaroo doing? It is ___.","hopping",["laughing","hop"],"🦘"],
    ["dance","What are the children doing? They are ___.","dancing",["hopping","dance"],"💃"]];
  const RESEARCH=[["capybara","Capybara","Forest","Vegetables","🦫"],["rabbit","Rabbit","Forest","Carrots","🐇"],["shark","Shark","Ocean","Small fish","🦈"],
    ["caiman","Caiman","River","Animals","🐊"],["tiger","Tiger","Jungle","Meat","🐅"]];

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we read about animals in a forest (“The Best Spot”), at a pond (“At a Pond”), and way down deep under the water (“Way Down Deep”). Today we found out where a shark, a tiger, and a rabbit live. So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","How do we celebrate special days?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · End blends (Practice Book 116)","A. Read each sentence. Underline a word that has an end blend. Write the word. B. Add one letter to make a new word with an n-blend. Then write the word.",[
      choice("pb-jump","“My dog likes to jump up.” Which word has an end blend?",["jump","dog","likes","up"],"jump","🐕"),
      choice("pb-best","“Pam did the best job.” Which word has an end blend?",["best","Pam","did","job"],"best","🏅"),
      choice("pb-send","“Bob will send a box to Jan.” Which word has an end blend?",["send","Bob","box","Jan"],"send","📦"),
      choice("pb-sink","“Set the cup in the sink.” Which word has an end blend?",["sink","set","cup","the"],"sink","🚰"),
      choice("pb-had","had + one letter = a new word with an n-blend.",["hand","hard","head"],"hand","✋"),
      choice("pb-bed","bed + one letter = a new word with an n-blend.",["bend","bead","bled"],"bend","↪️")
    ],"A. jump · best · send · sink. B. had → hand · bed → bend (n-blend: nd).",{readingId:"pb116"}),
    la("Structural Analysis · Inflectional Ending -ing",ING_RULE,[
      choice("rule","We add -ing to an action word to tell what is happening ___.",["now","yesterday","tomorrow"],"now","⏰"),
      choice("run","run + ing = ___",["running","runing","runed"],"running","🏃")
    ],ING_RULE+" run → running · jump → jumping",{readingId:"ingrule"}),
    la("Structural Analysis · Practice: What is happening now?","Look at each picture. Choose the action word with -ing.",
      ING.map(([id,label,answer,wrong,icon])=>({...choice(id,label,[answer,...wrong],answer,icon),img:IMG("ing-"+id),bigImg:true})),
      ING.map(([,label,answer])=>label.split("? ")[1].replace("___",answer)).join(" · ")),
    la("Research and Inquiry · Pick to research: habitat","animal · habitat · food. Where does the animal live?",
      RESEARCH.map(([id,name,hab,,icon])=>select(id+"-hab",`Where does the ${name.toLowerCase()} live? (habitat)`,HAB,hab,icon)),
      RESEARCH.map(([,name,hab])=>`${name}: ${hab}`).join(" · "),{readingId:"research"}),
    la("Research and Inquiry · Pick to research: food","animal · habitat · food. What does the animal eat?",
      RESEARCH.map(([id,name,,food,icon])=>select(id+"-food",`What does the ${name.toLowerCase()} eat? (food)`,FOOD,food,icon)),
      RESEARCH.map(([,name,,food])=>`${name}: ${food}`).join(" · "),{readingId:"research"}),
    la("Research and Inquiry · Where Animals Live (Reading and Writing Companion pages 108–109)","Step 1 Pick · Step 2 Decide · Step 3 Read · Step 4 Draw · Step 5 Choose",[
      fixed("first","What do you do FIRST (Step 1)?",["Pick an animal. Think about where it lives.","Draw the animal you learned about.","Choose how to present your work."],"Pick an animal. Think about where it lives.","1️⃣"),
      choice("where","Step 2: Decide where to find the information on its habitat. Where can you find it?",["A book.","A toy car.","A lunch box."],"A book.","📖"),
      free("write","Step 3: Read about the animal. Write what you learned. (A ___ live in the ___. It eats ___.)","✏️"),
      choice("labels","Step 4: Draw the animal you learned about. Use labels to show its ___.",["environment","birthday","name tag"],"environment","🖍️"),
      fixed("last","What do you do LAST (Step 5)?",["Choose how to present your work.","Pick an animal.","Read about the animal."],"Choose how to present your work.","5️⃣")
    ],"Step 1: Pick an animal. Think about where it lives. Step 2: Decide where to find the information on its habitat (a book). Step 3: Read about the animal. Write what you learned: A ___ live in the ___. It eats ___. Step 4: Draw the animal you learned about. Use labels to show its environment. Step 5: Choose how to present your work.",{readingId:"rwc108"}),
    la("Research and Inquiry · Way Down Deep","Read the poem “Way Down Deep” (Literature Anthology Book, page 62).",[
      choice("deep","In “Way Down Deep”, where do the starfish, snails, and oysters live?",["underneath the water, way down deep","in a forest","in a jungle"],"underneath the water, way down deep","🌊")
    ],"Starfish, snails, and oysters live underneath the water, way down deep."),
    la("Oral Vocabulary","Match the word with its meaning.",
      VOC.map(word=>select("v-"+word,DEF[word],VOC,word,"📖")),
      VOC.map(word=>`${word}: ${DEF[word]}`).join(" · ")),
    la("Grammar · Singular and Plural Possessive Nouns",POSS,[
      choice("tells","A possessive noun tells ___.",["who or what has something","what is happening now","where an animal lives"],"who or what has something","🔑"),
      fixed("one","A possessive noun that tells about ONE person or thing ends with ___.",["’s","s’"],"’s","1️⃣"),
      fixed("more","A possessive noun that tells about MORE THAN ONE person or thing ends with ___.",["’s","s’"],"s’","👭"),
      fixed("dog","“a dog’s ball” — how many dogs?",["one dog","more than one dog"],"one dog","🐶"),
      fixed("girls","“the girls’ books” — how many girls?",["one girl","more than one girl"],"more than one girl","📚")
    ],POSS+" Examples: a dog’s ball (one dog) · the girls’ books (more than one girl).",{readingId:"possessive"}),
    la("Grammar · Fix the possessives","Choose the correct sentence.",[
      choice("don","✗ This is Dons pen.",["This is Don’s pen.","This is Dons’ pen.","This is Dons pen."],"This is Don’s pen.","🖊️"),
      choice("students","✗ The students books are big!",["The students’ books are big!","The students books are big!","The students’s books are big!"],"The students’ books are big!","📘"),
      choice("cub","✗ The cub mum is hungry.",["The cub’s mum is hungry.","The cubs mum is hungry.","The cub mum is hungry."],"The cub’s mum is hungry.","🐻")
    ],"✓ This is Don’s pen. · ✓ The students’ books are big! · ✓ The cub’s mum is hungry.")
  ];
  registerQuiz({
    id:"class-diary-2026-11-04-language",
    uploadDate:"2026-11-04",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"04/11/2026 · Unit 2 Week 3 · End blends (Practice Book 116) · Inflectional Ending -ing · Research and Inquiry · Oral Vocabulary · Possessive Nouns",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","Practice Book 116 · end blends",1],["Structural Analysis","Inflectional Ending -ing · Practice",2],["Research and Inquiry","Pick to research · Where Animals Live · pages 108–109",4],["Oral Vocabulary","hibernate · tolerate · tranquil · depend · habitat",1],["Grammar","Singular and Plural Possessive Nouns",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0411","Remember — Language Arts",[
          "📅 Class Diary: 04/11/2026",
          "(04/11) Essential Question: Where do animals live together?",
          "(04/11) Inflectional Ending -ing: "+ING_RULE+" run → running · jump → jumping",
          "(04/11) Research and Inquiry · Where Animals Live: Pick an animal. Think about where it lives.",
          "(04/11) Pick to research: Capybara · Rabbit · Shark · Caiman · Tiger",
          ...VOC.map(word=>`(04/11) ${word[0].toUpperCase()+word.slice(1)}: ${DEF[word]}`),
          "(04/11) Possessive Noun: "+POSS,
          "(04/11) Examples: a dog’s ball · the girls’ books"
        ],"Unit 2 Week 3"),
        {id:"pb116",title:"Practice Book · page 116",byline:"Homework check · End blends",mode:"reference",text:"A. Read each sentence. Underline a word that has an end blend. Write the word.\n1. My dog likes to jump up.\n2. Pam did the best job.\n3. Bob will send a box to Jan.\n4. Set the cup in the sink.\nB. Add one letter to make a new word with an n-blend. Then write the word.\n1. had  2. bed"},
        {id:"ingrule",title:"Structural Analysis · Inflectional Ending -ing",byline:"Unit 2 Week 3",mode:"reference",images:[IMG("ing-rule")],text:ING_RULE+"\nrun → running\njump → jumping"},
        {id:"research",title:"Research and Inquiry · Pick to research",byline:"animal · habitat · food",mode:"reference",images:[IMG("research-pick")],text:"animal: Capybara · Rabbit · Shark · Caiman · Tiger\nhabitat: Forest · Forest · Ocean · River · Jungle\nfood: Vegetables · Carrots · Small fish · Animals · Meat"},
        {id:"rwc108",title:"Reading and Writing Companion · pages 108–109",byline:"Integrate · Research and Inquiry · Where Animals Live",mode:"reference",images:[IMG("rwc-108-109")],text:"Step 1 Pick an animal. Think about where it lives.\nStep 2 Decide where to find the information on its habitat.\nStep 3 Read about the animal. Write what you learned.\nStep 4 Draw the animal you learned about. Use labels to show its environment.\nStep 5 Choose how to present your work."},
        {id:"possessive",title:"Possessive Noun",byline:"Grammar · Singular and Plural Possessive Nouns",mode:"reference",images:[IMG("possessive-noun")],text:POSS+"\nExamples: a dog’s ball · the girls’ books"},
        bonus("bonus-la-0411",[
          {label:"Video: -ing Song (Rockin’ English)",url:"https://www.youtube.com/watch?v=b7IjgaG9NOI"},
          {label:"Game: verbs -ed or -ing",url:"https://wordwall.net/resource/119464473/verbs-ed-or-ing"},
          {label:"Video: The Apostrophe Song (MC Grammar)",url:"https://www.youtube.com/watch?v=QlOdsZhcKHE"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 39 (number patterns) ─────────────────────────
  const MATH_Q=[
    math("Homework check · Problem Solving: Look for a Pattern (Workbook 9-4)","Write, draw, or color to complete the pattern.",[
      fixed("h1","△ ○ □ △ ○ □ △ ○ □ ___ ___ ___\nWhat comes next?",["△ ○ □","○ □ △","△ △ ○"],"△ ○ □","1️⃣"),
      fixed("h2","A D C A D C A D C ___ ___ ___\nWhat comes next?",["A D C","D C A","A C D"],"A D C","2️⃣"),
      fixed("h4","2 4 6 2 4 6 2 4 6 ___ ___ ___\nWhat comes next?",["2 4 6","8 10 12","6 4 2"],"2 4 6","4️⃣"),
      fixed("h5","Visual Thinking: Which ball is missing?\n⭐ ball, dotted ball, black ball, ⭐ ball, ___, black ball, ⭐ ball, dotted ball, black ball",["dotted ball","black ball","⭐ ball"],"dotted ball","5️⃣")
    ],"△ ○ □ repeats → △ ○ □ · A D C repeats → A D C · 2 4 6 repeats → 2 4 6 · ⭐ ball, dotted ball, black ball repeats → the missing ball is the dotted ball."),
    math("Lesson 39 · How many eggs are in the nests?","You can use number patterns to find out how many eggs are in the nests. Each nest has 2 eggs. Use a table to record the numbers.",[
      fill("each","Each nest has ___ eggs.","2","🪺"),
      fill("n1","Number of Nests: 1 → Number of Eggs: ___","2","🥚"),
      fill("n2","Number of Nests: 2 → Number of Eggs: ___","4","🥚"),
      fill("n3","Number of Nests: 3 → Number of Eggs: ___","6","🥚"),
      fill("n4","Number of Nests: 4 → Number of Eggs: ___","8","🥚")
    ],"Number of Nests | Number of Eggs: 1 | 2 · 2 | 4 · 3 | 6 · 4 | 8",{readingId:"nests"}),
    math("Lesson 39 · Look for patterns","Look for patterns. Skip count by 2s to find the answer.",[
      fill("nests","The number of nests increases by ___.","1","🪺"),
      fill("eggs","The number of eggs increases by ___.","2","🥚"),
      choice("how","How can you find the number of eggs in 4 nests?",["Skip count by 2s.","Count by 10s.","Take away 2."],"Skip count by 2s.","🦘"),
      fill("skip","Skip count by 2s: 2, 4, 6, ___","8","🔢"),
      fill("five","Keep the pattern going: 5 nests → 2, 4, 6, 8, ___ eggs","10","➕")
    ],"The number of nests increases by 1. The number of eggs increases by 2. Skip count by 2s to find the answer: 2, 4, 6, 8. (5 nests → 10 eggs)",{readingId:"nests"})
  ];
  registerQuiz({
    id:"math-lesson-39-number-patterns",
    uploadDate:"2026-11-04",
    subjectKey:"math",
    title:"Math – Lesson 39 (number patterns)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"04/11/2026 · Lesson 39 · Number patterns: eggs in the nests · Skip count by 2s · Homework check: Look for a Pattern",scoreByField:true,
      groups:groupsOf([["Homework check","Problem Solving: Look for a Pattern · Workbook 9-4",1],["Lesson 39: Eggs in the nests","Use a table · Look for patterns · Skip count by 2s",2]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-0411","Remember — Math Lesson 39",[
          "📅 Class Diary: 04/11/2026",
          "(04/11 · L39) You can use number patterns to find out how many eggs are in the nests. Each nest has 2 eggs.",
          "(04/11 · L39) Use a table to record the numbers. Look for patterns.",
          "(04/11 · L39) The number of nests increases by 1. The number of eggs increases by 2.",
          "(04/11 · L39) Skip count by 2s to find the answer: 2, 4, 6, 8.",
          "(04/11 · L38) Problem Solving: Look for a Pattern — find the part that repeats (△ ○ □ · A D C · 2 4 6)."
        ],"Lesson 39"),
        {id:"nests",title:"Eggs in the nests",byline:"Math · Lesson 39",mode:"reference",images:[IMG("math-nests")],text:"You can use number patterns to find out how many eggs are in the nests. Each nest has 2 eggs.\nUse a table to record the numbers.\nLook for patterns. The number of nests increases by 1. The number of eggs increases by 2.\nSkip count by 2s to find the answer."}
      ]}
  });

  // ───────────────────────── WELLBEING · Unit 1.4 Lesson 3 Making friends ─────────────────────────
  const KEY=["friend","play","share","kind","lonely","welcome"];
  const WB_Q=[
    wb("Big Question · What makes a good friend?","Today’s Big Question.",[
      choice("bq","In Lesson 3 we talked about making friends: a good friend is kind, shares, listens, and helps. So today’s Big Question is ___.",["What makes a good friend?","Is it OK to be different?","Where do animals live together?"],"What makes a good friend?","❓")
    ],"Today’s Big Question: What makes a good friend?",{readingId:"wbbq"}),
    wb("Key words","friend · play · share · kind · lonely · welcome",[
      select("k-friend","Which key word goes with 👫?",KEY,"friend","🔑"),
      select("k-play","Which key word goes with ⚽?",KEY,"play","🔑"),
      select("k-share","Which key word goes with 🤝?",KEY,"share","🔑"),
      select("k-kind","Which key word goes with 💛?",KEY,"kind","🔑"),
      select("k-lonely","Which key word goes with 😔?",KEY,"lonely","🔑"),
      select("k-welcome","Which key word goes with 👋?",KEY,"welcome","🔑")
    ],"👫 friend · ⚽ play · 🤝 share · 💛 kind · 😔 lonely · 👋 welcome",{readingId:"wbkey"}),
    wb("Making friends","How do these children look and feel? Why do you think that?",[
      {...choice("boy","The boy has his arms crossed. How does he look?",["angry","happy","sleepy"],"angry","🙅"),img:IMG("wb-making-friends"),bigImg:true},
      choice("alone","The girl sits alone and watches the other children play. How does she feel?",["lonely","excited","angry"],"lonely","🪑"),
      choice("blocks","The two girls play with blocks together. How do they feel?",["happy","sad","angry"],"happy","🧱")
    ],"The boy with his arms crossed looks angry. The girl sitting alone feels lonely. The two girls playing blocks together feel happy."),
    wb("Look carefully · The friend story","Look at pictures 1, 2, and 3. How does the girl on the bench feel?",[
      {...choice("bench","How does the girl on the bench feel?",["lonely","happy","angry"],"lonely","🪑"),img:IMG("wb-friend-story"),bigImg:true},
      choice("good","What can the other children do to be good friends?",["Welcome her and ask her to play.","Laugh at her.","Run away from her."],"Welcome her and ask her to play.","👋")
    ],"The girl on the bench sits alone, so she feels lonely. Good friends welcome her and ask her to play."),
    wb("Read with me · A good friend…","A good friend…",[
      multi("good","A good friend… Choose 5.",["is kind.","shares.","listens.","helps.","is fun to play with.","never shares.","is unkind."],["is kind.","shares.","listens.","helps.","is fun to play with."],"💛")
    ],"A good friend… is kind. · shares. · listens. · helps. · is fun to play with.",{readingId:"wbgood"}),
    wb("Think · What do you play with friends?","Football · Tag · Blocks · Drawing",[
      free("play","What do you play with friends?","⚽")
    ],"We can play football, tag, blocks, or drawing with friends.",{readingId:"wbthink"}),
    wb("A present · A friendship bracelet","It is a present for a friend. It has their favourite colours. It has a pattern.",[
      choice("present","A friendship bracelet is a present for a ___.",["friend","teacher","dog"],"friend","🎁"),
      choice("colours","It has their favourite ___.",["colours","foods","toys"],"colours","🎨"),
      fixed("next","It has a pattern: 🔴🔵🔴🔵 ___ What comes next?",["🔴","🔵"],"🔴","📿"),
      fixed("bonus","Bonus: What comes next? 🟡🟢🟢🟡🟢🟢 ___",["🟡","🟢"],"🟡","⭐")
    ],"It is a present for a friend. It has their favourite colours. Pattern: red, blue, red, blue → red. Bonus: yellow, green, green, yellow, green, green → yellow.",{readingId:"wbbracelet"}),
    wb("Turn to your partner · Ask your partner","Ask your partner. Remember the answers! Swap.",[
      fixed("ask1","What do you ask FIRST?",["‘What is your favourite colour?’","‘What is your favourite shape?’","Swap. Now your partner asks."],"‘What is your favourite colour?’","1️⃣"),
      fixed("ask2","What do you ask NEXT?",["‘What is your favourite shape?’","‘What is your favourite colour?’","Swap. Now your partner asks."],"‘What is your favourite shape?’","2️⃣"),
      choice("ask3","Then: ___ the answers!",["Remember","Forget","Hide"],"Remember","🧠"),
      fixed("ask4","What do you do LAST?",["Swap. Now your partner asks.","‘What is your favourite colour?’","‘What is your favourite shape?’"],"Swap. Now your partner asks.","🔄")
    ],"1. ‘What is your favourite colour?’ 2. ‘What is your favourite shape?’ 3. Remember the answers! 4. Swap. Now your partner asks.",{readingId:"wbpartner"}),
    wb("Wellbeing Book page 31 · Activity 4.3b Friendship bracelet","Can you design a friendship bracelet for your friend? What are their favourite colours and patterns? Draw your design below.",[
      free("design","Tell about your friendship bracelet: what colours and what pattern?","📿")
    ],"Design a friendship bracelet for your friend with their favourite colours and a pattern (Wellbeing Book, page 31).",{readingId:"wbbook"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-04-wellbeing",
    uploadDate:"2026-11-04",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"04/11/2026 · Unit 1.4 Lesson 3 · Making friends · What makes a good friend? · Friendship bracelet · Wellbeing Book page 31",scoreByField:true,
      groups:groupsOf([["Big Question","What makes a good friend?",1],["Key words","friend · play · share · kind · lonely · welcome",1],["Making friends","How do they look and feel? · The friend story",2],["A good friend…","Read with me · Think",2],["A friendship bracelet","A present · Ask your partner · Wellbeing Book page 31",3]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-0411","Remember — Wellbeing",[
          "📅 Class Diary: 04/11/2026",
          "(04/11) Big Question: What makes a good friend?",
          "(04/11) Key words: friend · play · share · kind · lonely · welcome",
          "(04/11) A good friend… is kind. shares. listens. helps. is fun to play with.",
          "(04/11) A friendship bracelet: It is a present for a friend. It has their favourite colours. It has a pattern."
        ],"Unit 1.4 · Lesson 3"),
        {id:"wbbq",title:"Today’s Big Question",byline:"Wellbeing · Unit 1.4 Lesson 3",mode:"reference",images:[IMG("wb-big-question")],text:"What makes a good friend?"},
        {id:"wbkey",title:"Key words",byline:"Wellbeing · Lesson 3",mode:"reference",images:[IMG("wb-key-words")],text:"friend · play · share · kind · lonely · welcome"},
        {id:"wbgood",title:"A good friend…",byline:"Read with me",mode:"reference",images:[IMG("wb-good-friend")],text:"A good friend…\nis kind.\nshares.\nlistens.\nhelps.\nis fun to play with."},
        {id:"wbthink",title:"What do you play with friends?",byline:"Think",mode:"reference",images:[IMG("wb-think-play")],text:"Football · Tag · Blocks · Drawing"},
        {id:"wbbracelet",title:"A friendship bracelet",byline:"A present",mode:"reference",images:[IMG("wb-bracelet")],text:"It is a present for a friend.\nIt has their favourite colours.\nIt has a pattern."},
        {id:"wbpartner",title:"Ask your partner",byline:"Turn to your partner",mode:"reference",images:[IMG("wb-ask-partner")],text:"1. ‘What is your favourite colour?’\n2. ‘What is your favourite shape?’\n3. Remember the answers!\n4. Swap. Now your partner asks."},
        {id:"wbbook",title:"Wellbeing Book · page 31",byline:"Lesson 3 Making friends · Activity 4.3b Friendship bracelet",mode:"reference",images:[IMG("wb-book-31")],text:"Can you design a friendship bracelet for your friend?\nWhat are their favourite colours and patterns?\nDraw your design below."}
      ]}
  });
})();
