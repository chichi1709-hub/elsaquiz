// Quiz 29/10/2026 — Class Diary 29/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 125–126 (possessive nouns) ·
// Big Book "Babies in the Bayou" · Oral Vocabulary hibernate, tranquil, tolerate (review habitat, depend) ·
// Grammar: Singular and Plural Possessive Nouns (link game trong mục này thật ra là "Ending Blends") · Anchor Text "At a Pond" (nonfiction, Literature Anthology page 48; RWC pages 100–101).
// Science: Unit 2 Module 1 Lesson 4 (Animal Behaviors) · Science Probe "Baby Animals" · Discover the phenomenon (Vervet Monkeys) ·
// Inquiry Activity "What Animals Do" (Student Book pages 54–55). Video Vervet Monkeys cần tài khoản digital → không mở được.
// Math: Lesson 37 (shape pattern, use the part that repeats to tell what comes next) + homework check Lesson 36 (Using Patterns to Predict).
// Ảnh: web/assets/2026-10-29/ (tạo bằng web/_reference/tao_anh_2026-10-29.py).
(()=>{
  const IMG=name=>`assets/2026-10-29/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 29/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const RULE="A possessive noun tells who or what has something. A possessive noun that tells about one person or thing ends with ’s. A possessive noun that tells about more than one person or thing ends with s’.";
  const DEF={hibernate:"To hibernate is to spend the winter sleeping in a shelter.",tranquil:"Tranquil means “calm and peaceful.”",tolerate:"Tolerate means “put up with something unpleasant.”",
    habitat:"A habitat is the place where an animal lives in nature.",depend:"When you depend on something, you rely on it for the things you need."};
  const VOCAB=["hibernate","tranquil","tolerate","habitat","depend"];

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we read about deer, rabbits, ants, and foxes in a forest, babies in the bayou, and ducks and frogs at a pond. So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","What buildings do you know? What are they made of?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · Fix the draft (Practice Book 125)","Read the draft model. Circle the errors. Revise the draft. Make sure you use possessive nouns correctly.",[
      choice("girls","Draft: “The girls tents are big.” Which sentence is correct?",["The girls’ tents are big.","The girls tents are big.","The girl tents are big."],"The girls’ tents are big.","⛺"),
      choice("dog","Draft: “The dogs bed is little.” Which sentence is correct?",["The dog’s bed is little.","The dogs bed is little.","The dog bed’s is little."],"The dog’s bed is little.","🐶")
    ],"The girl’s / girls’ tents are big. · The dog’s bed is little."),
    la("Homework check · Write each sentence correctly (Practice Book 126)",RULE,[
      choice("ants","“The ants hill is little.” (many ants)",["The ants’ hill is little.","The ants hill is little.","The ant hill’s is little."],"The ants’ hill is little.","🐜"),
      choice("skunk","“A skunks smell is bad.” (one skunk)",["A skunk’s smell is bad.","A skunks smell is bad.","A skunks’ smell is bad."],"A skunk’s smell is bad.","🦨"),
      choice("kids","“The kids school is big.” (many kids)",["The kids’ school is big.","The kids school is big.","The kid school’s is big."],"The kids’ school is big.","🏫"),
      choice("pig","“A pigs’ pal is a duck.” (one pig)",["A pig’s pal is a duck.","A pigs’ pal is a duck.","A pigs pal is a duck."],"A pig’s pal is a duck.","🐷")
    ],"The ants’ hill is little. · A skunk’s smell is bad. · The kid’s / kids’ school is big. · A pig’s pal is a duck."),
    la("Big Book · Babies in the Bayou","Listen and read along with the story “Babies in the Bayou” by Jim Arnosky.",[
      choice("bayou","What is a bayou?",["a southern waterway that mixes with the sea","a big sandy desert","a snowy mountain"],"a southern waterway that mixes with the sea","🌊"),
      multi("animals","Which animal mothers and babies live in the bayou? Choose 4.",["alligators","raccoons","turtles","ducks","camels","penguins"],["alligators","raccoons","turtles","ducks"],"🐊"),
      choice("gator","How does the mother alligator help her babies?",["She guards them and lets no one come near.","She teaches them to fly.","She leaves them alone."],"She guards them and lets no one come near.","🛡️"),
      choice("raccoon","How does the mother raccoon help her babies?",["She shows them how to dig for turtle eggs.","She carries them on her back in the water.","She builds a nest in the sand."],"She shows them how to dig for turtle eggs.","🦝"),
      choice("duck","How does the mother duck help her ducklings?",["She leads them away from danger.","She digs for turtle eggs.","She sleeps on a log."],"She leads them away from danger.","🦆")
    ],"A bayou is a southern waterway that mixes with the sea. Alligators, raccoons, turtles, and ducks live in the bayou. The mother alligator guards her babies. The mother raccoon shows her babies how to dig for turtle eggs. The mother duck leads her ducklings away from danger.",{readingId:"bayou"}),
    la("Oral Vocabulary · hibernate, tranquil, tolerate","Define · Example · Ask",[
      choice("hib","Define: To ___ is to spend the winter sleeping in a shelter.",["hibernate","tolerate","depend"],"hibernate","🐻"),
      choice("tra","Define: ___ means “calm and peaceful.”",["Tranquil","Tolerate","Habitat"],"Tranquil","🏞️"),
      choice("tol","Define: ___ means “put up with something unpleasant.”",["Tolerate","Tranquil","Hibernate"],"Tolerate","😖"),
      choice("cave","Ask: Where might be a good place for an animal to hibernate?",["a warm cave","a busy road","a swimming pool"],"a warm cave","🕳️"),
      choice("oak","Example: The hardy oak tree can ___ the harsh winter.",["tolerate","hibernate","depend"],"tolerate","🌳")
    ],DEF.hibernate+" Example: The bear wants to hibernate in a warm cave through the long winter. · "+DEF.tranquil+" Example: The family spent a tranquil day by the lake. · "+DEF.tolerate+" Example: The hardy oak tree can tolerate the harsh winter.",{readingId:"oralvocab"}),
    la("Vocabulary · Notebook 29/10/26","Review: habitat, depend. Choose the word.",[
      select("n1","Bears ___ all winter.",VOCAB,"hibernate","🐻"),
      select("n2","The park is ___.",VOCAB,"tranquil","🌳"),
      select("n3","I can’t ___ shouting.",VOCAB,"tolerate","📢"),
      select("n4","A fish’s ___ is the ocean.",VOCAB,"habitat","🐟"),
      select("n5","I ___ on my parents.",VOCAB,"depend","👨‍👩‍👧"),
      choice("habdef","Review: What is a habitat?",[DEF.habitat,"A habitat is a kind of food.","A habitat is a baby animal."],DEF.habitat,"🏡"),
      choice("depdef","Review: What does depend mean?",[DEF.depend,"When you depend on something, you sleep all winter.","When you depend on something, you are calm and peaceful."],DEF.depend,"🤝")
    ],"Bears hibernate all winter. · The park is tranquil. · I can’t tolerate shouting. · A ___’s habitat is the ___. · I depend on my parents. "+DEF.habitat+" "+DEF.depend,{readingId:"notebook"}),
    la("Grammar · Singular and Plural Possessive Nouns",RULE,[
      choice("tells","A possessive noun tells who or what ___ something.",["has","eats","sees"],"has","🎁"),
      choice("one","A possessive noun that tells about one person or thing ends with ___.",["’s","s’"],"’s","1️⃣"),
      choice("more","A possessive noun that tells about more than one person or thing ends with ___.",["s’","’s"],"s’","👥"),
      choice("cat","The ball belongs to the cat. It is the ___ ball.",["cat’s","cats’","cats"],"cat’s","🐱"),
      choice("kids2","The toys belong to the children. They are the ___ toys.",["children’s","childrens’","children"],"children’s","🧸")
    ],RULE+" Examples: the cat’s ball, the children’s toys.",{readingId:"possessive"}),
    la("Anchor Text · At a Pond","Literature Anthology, page 48. Before you read: What are your predictions for this text? Where do these animals live? What other animals might share this habitat?",[
      choice("genre","“At a Pond” has photos of real ducks, frogs, and plants and tells real facts. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("where","“Read about animals that live at a pond.” Where do these animals live?",["at a pond","in a desert","in a city"],"at a pond","🦆"),
      choice("author","Who wrote “At a Pond”?",["Nancy Finton","Jim Arnosky","Jack Prelutsky"],"Nancy Finton","✍️"),
      choice("pond","Build Vocabulary: pond",["a small body of water","small sticks","stop working to take a break"],"a small body of water","💧"),
      choice("rest","Build Vocabulary: rest",["stop working to take a break","a small body of water","small sticks"],"stop working to take a break","😴"),
      choice("twigs","Build Vocabulary: twigs",["small sticks","a small body of water","stop working to take a break"],"small sticks","🪵")
    ],"At a Pond by Nancy Finton · Genre: nonfiction · Read about animals that live at a pond. Build Vocabulary — pond: a small body of water · rest: stop working to take a break · twigs: small sticks.",{readingId:"pond"}),
    la("Respond to the Anchor Text (pages 100–101)","Retell the text in your own words. Write about the text. Use the photos to help you.",[
      choice("frogs","Why is the pond a good place for frogs to live? (Text evidence: page 52)",["There’s lots of bugs to eat.","There is no water.","It is very hot and dry."],"There’s lots of bugs to eat.","🐸"),
      choice("ducks","Why do ducks go to the pond? (Text evidence: page 54)",["They eat lots of bugs and plants.","They go to sleep all winter.","They want to dig in the sand."],"They eat lots of bugs and plants.","🦆"),
      choice("under","Who is under the water?",["frog","duck","bird"],"frog","🌊"),
      choice("fly","Who can fly to the pond?",["duck","frog","fish"],"duck","🪽"),
      choice("ask","Why does the author ask questions at the beginning of the text?",["So we can find the answer.","So we can go to sleep.","So the text is very long."],"So we can find the answer.","❔")
    ],"Why is the pond a good place for frogs to live? There’s lots of bugs to eat (page 52). · Why do ducks go to the pond? They eat lots of bugs and plants (page 54). · Who is under the water? frog · Who can fly to the pond? duck · Why does the author ask questions at the beginning of the text? So we can find the answer.",{readingId:"pond"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-29-language",
    uploadDate:"2026-10-29",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"29/10/2026 · Unit 2 Week 3 · Possessive nouns · Oral Vocabulary hibernate, tranquil, tolerate · Big Book: Babies in the Bayou · Anchor Text: At a Pond",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","Practice Book 125–126 · possessive nouns",2],["Big Book","Babies in the Bayou",1],["Oral Vocabulary","hibernate · tranquil · tolerate · habitat · depend",2],["Grammar","Singular and Plural Possessive Nouns",1],["Anchor Text: At a Pond","Nonfiction · Literature Anthology page 48 · RWC pages 100–101",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2910","Remember — Language Arts",[
          "📅 Class Diary: 29/10/2026",
          "(29/10) Essential Question: Where do animals live together?",
          "(29/10) Define: "+DEF.hibernate+" Example: The bear wants to hibernate in a warm cave through the long winter.",
          "(29/10) Define: "+DEF.tranquil+" Example: The family spent a tranquil day by the lake.",
          "(29/10) Define: "+DEF.tolerate+" Example: The hardy oak tree can tolerate the harsh winter.",
          "(29/10) Review: habitat, depend",
          "(29/10) Big Book: Babies in the Bayou (Jim Arnosky) — a bayou is a southern waterway that mixes with the sea.",
          "(29/10) Grammar: "+RULE+" Examples: the cat’s ball, the children’s toys",
          "(29/10) At a Pond (Nancy Finton) · Genre: nonfiction",
          "(29/10) pond: a small body of water · rest: stop working to take a break · twigs: small sticks"
        ],"Unit 2 Week 3"),
        {id:"bayou",title:"Babies in the Bayou",byline:"Big Book · Jim Arnosky · Listen and read along",mode:"reference",images:[IMG("babies-bayou-cover")],text:"A bayou is a southern waterway that mixes with the sea.\nBabies in the bayou: baby alligators · baby raccoons · baby turtles · ducklings."},
        {id:"oralvocab",title:"Oral Vocabulary Routine",byline:"hibernate · tranquil · tolerate",mode:"reference",images:[IMG("oral-vocab")],text:"Define: "+DEF.hibernate+"\nDefine: "+DEF.tranquil+"\nDefine: "+DEF.tolerate},
        {id:"notebook",title:"Vocabulary",byline:"Notebook 29/10/26",mode:"reference",images:[IMG("vocab-notebook")],text:"Bears hibernate all winter. · The park is tranquil. · I can’t tolerate shouting. · A ___’s habitat is the ___. · I depend on my parents."},
        {id:"possessive",title:"Singular and Plural Possessive Nouns",byline:"Grammar",mode:"reference",images:[IMG("possessive-rule")],text:RULE+"\nExamples: the cat’s ball, the children’s toys"},
        {id:"pond",title:"At a Pond",byline:"Anchor Text · Literature Anthology page 48 · Nonfiction · by Nancy Finton",images:[IMG("at-a-pond-cover")],text:"Essential Question: Where do animals live together?\nRead about animals that live at a pond.\nBuild Vocabulary — pond: a small body of water · rest: stop working to take a break · twigs: small sticks"},
        bonus("bonus-la-2910",[
          {label:"Big Book: Babies in the Bayou (listen and read along)",url:"https://drive.google.com/drive/folders/1PTUgfhZgxcmCDjxmE0LptXmnVENlGePd"},
          {label:"Game: Ending Blends (Read the words)",url:"https://www.baamboozle.com/game/569738"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Unit 2 Module 1 Lesson 4 ─────────────────────────
  const BEHAVIOR=["Taking care","Feed","Protect"];
  const SCI_Q=[
    sci("Lesson 4 Launch · Science Probe: Baby Animals","Who has the best idea about how baby animals survive? (Science Book, page 51)",[
      choice("yolanda","Yolanda: “I think the ducklings learn how to survive from their parents and each other.” Kristen: “I think the ducklings are born knowing how to survive.” Who has the best idea?",["Both: ducklings are born knowing how to do some things, and they learn some things from their parents.","Only Kristen: ducklings learn nothing.","Only Yolanda: ducklings know nothing when they are born."],"Both: ducklings are born knowing how to do some things, and they learn some things from their parents.","🦆"),
      choice("topic","In Lesson 4 we learn what animals do: parents feed their young, keep them safe, and clean them; ducklings learn from their parents. So the topic of Lesson 4 is called ___.",["Animal Behaviors","Animals and Their Parents","Plant Parts"],"Animal Behaviors","🐾")
    ],"There are some things that ducklings are born knowing how to do and some things they have to learn from their parents. (Lesson 4: Animal Behaviors)",{readingId:"probe"}),
    sci("Discover the Phenomenon · Vervet Monkeys","Look at the photo. Watch the video. Why do you think the animals act this way? What do you observe?",[
      choice("monkey","What is the adult monkey doing?",["The adult monkey is cleaning the baby monkey.","The adult monkey is sleeping.","The adult monkey is running away."],"The adult monkey is cleaning the baby monkey.","🐒"),
      choice("why","Why does the adult monkey clean the baby?",["It wants to take care of the baby.","It wants to play a game.","It is hungry."],"It wants to take care of the baby.","💞")
    ],"The adult monkey is cleaning the baby monkey because it wants to take care of the baby.",{readingId:"vervet"}),
    sci("Inquiry Activity · What Animals Do","Student Book, pages 54–55. Materials: photo cards.",[
      multi("predict","Make a Prediction: How do you think animal parents help their young? Choose 4.",["feed","protect","teach","take care of","ignore","scare"],["feed","protect","teach","take care of"],"🔮"),
      fixed("first","Investigate: What do you do FIRST?",["Look at the photo cards.","Sort the cards into three groups.","Write or draw how the animals help their young."],"Look at the photo cards.","1️⃣"),
      fixed("next","You looked at the photo cards. What do you do NEXT?",["Sort the cards into three groups.","Look at the photo cards.","Write or draw how the animals help their young."],"Sort the cards into three groups.","➡️"),
      fixed("last","What do you do LAST?",["Write or draw how the animals help their young.","Look at the photo cards.","Sort the cards into three groups."],"Write or draw how the animals help their young.","🔚")
    ],"Make a Prediction: Parents feed, protect, teach, and take care of their young. 1. Look at the photo cards. 2. Sort the cards into three groups. 3. Record Data: List your groups in the table. 4. Write or draw how the animals help their young."),
    sci("Record Data · Animal Behavior","Match the animal behavior with the description.",[
      select("groom","Parents groom their offspring to clean them.",BEHAVIOR,"Taking care","🪮"),
      select("food","Parents get and give food to their offspring.",BEHAVIOR,"Feed","🍼"),
      select("safe","Parents keep their offspring safe from harm.",BEHAVIOR,"Protect","🛡️"),
      choice("groups","How many groups did we sort the photo cards into?",["three","two","five"],"three","3️⃣")
    ],"Taking care: Parents groom their offspring to clean them. · Feed: Parents get and give food to their offspring. · Protect: Parents keep their offspring safe from harm.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-29-science",
    uploadDate:"2026-10-29",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"29/10/2026 · Unit 2 Module 1 Lesson 4 · Animal Behaviors · Science Probe: Baby Animals · Inquiry Activity: What Animals Do",scoreByField:true,
      groups:groupsOf([["Lesson 4 Launch","Science Probe: Baby Animals",1],["Discover the Phenomenon","Vervet Monkeys",1],["Inquiry Activity","What Animals Do · Record Data",2]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-2910","Remember — Science",[
          "📅 Class Diary: 29/10/2026",
          "(29/10) Lesson 4: Animal Behaviors",
          "(29/10) There are some things that ducklings are born knowing how to do and some things they have to learn from their parents.",
          "(29/10) The adult monkey is cleaning the baby monkey because it wants to take care of the baby.",
          "(29/10) Parents feed, protect, teach, and take care of their young.",
          "(29/10) Taking care: Parents groom their offspring to clean them.",
          "(29/10) Feed: Parents get and give food to their offspring.",
          "(29/10) Protect: Parents keep their offspring safe from harm."
        ],"Unit 2 Module 1 · Lesson 4"),
        {id:"probe",title:"Baby Animals",byline:"Science Probe · Science Book page 51",mode:"reference",images:[IMG("sci-probe")],text:"Who has the best idea about how baby animals survive?\nYolanda: I think the ducklings learn how to survive from their parents and each other.\nKristen: I think the ducklings are born knowing how to survive.\nExplain your thinking."},
        {id:"vervet",title:"Discover the Phenomenon",byline:"Video: Vervet Monkeys (digital account)",mode:"reference",images:[IMG("sci-vervet")],text:"What do you think these animals are doing?\nLook at the photo. Watch the video. Why do you think the animals act this way? What do you observe?"}
      ]}
  });

  // ───────────────────────── MATH · Lesson 37 (shape pattern) ─────────────────────────
  const MATH_Q=[
    math("Homework check · Using Patterns to Predict (Lesson 36)","Find the pattern. Circle what comes next.",[
      fixed("h1","🟫⬜🟫⬜🟫⬜🟫 ___\nWhat comes next?",["⬜","🟫"],"⬜","1️⃣"),
      fixed("h2","⚪⚫⚪⚫⚪⚫ ___\nWhat comes next?",["⚪","⚫"],"⚪","2️⃣"),
      fixed("h3","🟦🟦🟥🟦🟦🟥🟦 ___\nWhat comes next?",["🟦","🟥"],"🟦","3️⃣"),
      fixed("h4","Estimation: 🚲🚲🛒🚲🚲🛒🚲 …\nPredict what comes next.",["🚲🛒🚲🚲","🚲🛒🛒","🛒🚲🚲","🛒🚲🛒"],"🚲🛒🚲🚲","4️⃣")
    ],"Find the part that repeats, then circle what comes next. 🚲🚲🛒 repeats, so after 🚲🚲🛒🚲🚲🛒🚲 comes 🚲🛒🚲🚲."),
    math("Lesson 37 · Shape pattern","This is a shape pattern. You can make a pattern go on and on.",[
      fixed("part","🔺⚪🔺⚪🔺⚪ ___\nWhich is the part that repeats?",["🔺⚪","🔺🔺","⚪⚪"],"🔺⚪","🔁"),
      fixed("letters","🔺⚪🔺⚪🔺⚪\nName each shape with a letter: 🔺 = A, ⚪ = B. What repeats?",["A, B","A, A","B, B"],"A, B","🔤"),
      fixed("next","🔺⚪🔺⚪🔺⚪ ___\nSay each shape. What shape comes next?",["triangle 🔺","circle ⚪","square ⬛"],"triangle 🔺","➡️"),
      choice("use","You can use the part that ___ to tell what comes next.",["repeats","stops","adds"],"repeats","💡"),
      fixed("p1","⬛🔵🔵⬛🔵🔵⬛ ___\nWhat comes next?",["🔵","⬛"],"🔵","🔮"),
      fixed("p2","⭐⭐🔺⭐⭐🔺⭐⭐ ___\nWhat comes next?",["🔺","⭐"],"🔺","🔮")
    ],"This is a shape pattern. This is the part that repeats: triangle, circle (A, B). You can use the part that repeats to tell what comes next. The pattern is triangle, circle, triangle, circle, triangle, circle. The shape that comes next is a triangle.",{readingId:"shape"})
  ];
  registerQuiz({
    id:"math-lesson-37-shape-pattern",
    uploadDate:"2026-10-29",
    subjectKey:"math",
    title:"Math – Lesson 37 (shape pattern)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"29/10/2026 · Lesson 37 · Shape pattern · Use the part that repeats to tell what comes next · Homework check: Using Patterns to Predict",scoreByField:true,
      groups:groupsOf([["Homework check","Using Patterns to Predict",1],["Lesson 37: Shape pattern","The part that repeats",1]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-2910","Remember — Math Lesson 37",[
          "📅 Class Diary: 29/10/2026",
          "(29/10 · L37) This is a shape pattern. You can make a pattern go on and on.",
          "(29/10 · L37) You can use the part that repeats to tell what comes next.",
          "(29/10 · L37) Say each shape. The shape that comes next is a triangle.",
          "(29/10 · L36) Using Patterns to Predict: find the pattern, circle what comes next."
        ],"Lesson 37"),
        {id:"shape",title:"Shape pattern",byline:"Math · Lesson 37",mode:"reference",images:[IMG("math-shape-1"),IMG("math-shape-2")],text:"This is a shape pattern. You can make a pattern go on and on.\nThis is the part that repeats.\nYou can use the part that repeats to tell what comes next.\nSay each shape. The shape that comes next is a triangle."}
      ]}
  });
})();
