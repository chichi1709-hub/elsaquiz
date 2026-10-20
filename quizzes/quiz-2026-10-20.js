// Quiz 20/10/2026 — Class Diary 20/10/2026 + nội dung các link trong diary.
// Science: Lesson 3 Animals and Their Parents (Daisy's Ducks, Explain: Parents and Offspring, trait, Families Are Similar, But Different).
// (Diary ghi "Unit 1 Module 1 Lesson 3" — thực tế là Unit 2 Module 1 Lesson 3, cùng bài với 15–16/10.)
// Language Arts: Unit 2 Week 2 (word families -ug/-un/-ut, Homes Around the World, rhyme, contractions, oral vocabulary, captions).
// Ảnh: web/assets/2026-10-20/ (tạo bằng web/_reference/tao_anh_2026-10-20.py) — không dùng ảnh có đáp án viết/khoanh.
(()=>{
  const IMG=name=>`assets/2026-10-20/${name}.webp`;
  const IMG19=name=>`assets/2026-10-19/${name}.webp`;
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
  const bonus=(id,links,by)=>({id,title:"Bonus · Video & game",byline:by||"Links from the Class Diary 20/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const FAM=["-ug","-un","-ut"];
  const VOC=["shelter","materials","collapsed","furious","refuse"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const LA_Q=[
    // ── Homework check: Practice Book 102A & 102B (word families) ──
    la("Homework check · Word families (Practice Book 102A–102B)","Read the words out loud. Then sort the words.",[
      select("bug","bug",FAM,"-ug","🐞"),select("fun","fun",FAM,"-un","🎉"),select("rug","rug",FAM,"-ug","🟫"),
      select("run","run",FAM,"-un","🏃"),select("cut","cut",FAM,"-ut","✂️"),select("lunch","lunch",FAM,"-un","🍱"),
      select("nut","nut",FAM,"-ut","🥜"),select("skunk","skunk",FAM,"-un","🦨")
    ],"Words with ug: bug, rug · Words with un: fun, run, lunch, skunk · Words with ut: cut, nut. (Practice Book, pages 102A and 102B)"),
    la("Homework check · New words","Think of some new words. Add words to your chart.",[
      choice("ug","Which new word belongs with -ug?",["hug","hut","sun"],"hug","🤗"),
      choice("un","Which new word belongs with -un?",["sun","mug","but"],"sun","☀️"),
      choice("ut","Which new word belongs with -ut?",["hut","bun","jug"],"hut","🛖")
    ],"New words: -ug: hug, mug, jug · -un: sun, bun · -ut: hut, but."),

    // ── Compare Text: Homes Around the World (RWC 73) ──
    la("Homes Around the World · What makes each home special?","Reading and Writing Companion, page 73.",[
      choice("wet","Why is the home on page 71 a good home for a wet place?",["The stilts help keep the home dry.","It is made of ice.","It is built into a rock."],"The stilts help keep the home dry.","🛖"),
      choice("cold","Why is the home on page 72 a good home for a cold place?",["It’s a good shelter for a cold place.","It has stilts.","It is made of mud."],"It’s a good shelter for a cold place.","🧊"),
      choice("title","Why is “Homes Around the World” a good title?",["Because we read about homes in many places.","Because it is about one house.","Because it is about a wolf."],"Because we read about homes in many places.","🌍"),
      write("talk","Talk About It: How does the author show that homes are often built to fit their environment? Write one sentence.",["People build their homes to fit the place they live.","place"],"✍️")
    ],"The stilts help keep the home dry. · An igloo is a good shelter for a cold place. · It is a good title because we read about homes in many places. · People build their homes to fit the place they live. (Reading and Writing Companion, page 73)",{readingId:"homes20"}),

    // ── Rhyme (game Rhyming Pictures) ──
    la("Rhyme · Which word rhymes?","Rhyming words end with the same sounds.",[
      choice("crown","crown",["frown","pan","mouse"],"frown","👑"),
      choice("door","door",["floor","bat","bug"],"floor","🚪"),
      choice("cry","cry",["fly","bus","ring"],"fly","😢"),
      choice("school","school",["pool","car","mug"],"pool","🏫"),
      choice("pot","pot",["hot","dog","pickle"],"hot","🍲")
    ],"crown – frown · door – floor · cry – fly · school – pool · pot – hot (game Rhyming Pictures)"),

    // ── Structural Analysis: contractions (video + game) ──
    la("Contractions","Take two words and make them one. Put an apostrophe (’) where the letters were.",[
      select("it","it is",["it’s","he’s","she’s","that’s","there’s","what’s"],"it’s","🌧️"),
      select("he","he is",["it’s","he’s","she’s","that’s","there’s","what’s"],"he’s","👦"),
      select("she","she is",["it’s","he’s","she’s","that’s","there’s","what’s"],"she’s","👧"),
      select("that","that is",["it’s","he’s","she’s","that’s","there’s","what’s"],"that’s","👉"),
      select("there","there is",["it’s","he’s","she’s","that’s","there’s","what’s"],"there’s","📍"),
      choice("mark","Which mark shows the missing letters?",["’ (apostrophe)",", (comma)",". (period)"],"’ (apostrophe)","✏️")
    ],"it is → it’s · he is → he’s · she is → she’s · that is → that’s · there is → there’s. The apostrophe (’) takes the place of the missing letter."),

    // ── Oral Vocabulary: Let’s Discuss ──
    la("Oral Vocabulary · Let’s Discuss","Choose the word that fits.",[
      bank("hot","What would be a good ___ in a very hot place?",VOC,"shelter","🏜️"),
      bank("house","What ___ could you use to make a house?",VOC,"materials","🧱"),
      bank("fall","What would you do if your shelter ___?",VOC,"collapsed","🏚️"),
      bank("angry","Would you be ___ if your shelter collapsed?",VOC,"furious","😡"),
      bank("mud","Would you ___ to live in a house made of mud? Why?",VOC,"refuse","🙅")
    ],"shelter – a building that keeps you safe · materials – the things we use to build and make · collapsed – fallen down · furious – really angry · refuse – say no to something.",{wordBank:VOC,readingId:"discuss"}),
    la("Oral Vocabulary · Think and answer","Use what you know.",[
      choice("hotplace","What would be a good shelter in a very hot place?",["a clay home that keeps cool inside","an igloo made of ice","a tent made of paper"],"a clay home that keeps cool inside","☀️"),
      multi("mat","What materials could you use to make a house? Choose 3.",["wood","brick","stone","ice cream","water"],["wood","brick","stone"],"🏠")
    ],"In a very hot place, a clay home keeps cool inside (Homes Around the World video). Houses can be made of wood, brick, and stone."),

    // ── Text Feature: Captions ──
    la("Text Feature · Captions","Captions can tell us more information about a picture.",[
      choice("what","What do captions tell us?",["more information about a picture","the name of the author","the page number"],"more information about a picture","🏷️"),
      choice("where","We find captions in ___ texts.",["non-fiction","fantasy","song"],"non-fiction","📰"),
      select("sky","Tall buildings are called…",["skyscrapers","a park","workers","city buildings"],"skyscrapers","🏙️"),
      select("park","The park is a place to…",["rest or play","fix the road","shine at night"],"rest or play","🌳"),
      select("road","These workers use tools to…",["fix the road","rest or play","shine at night"],"fix the road","👷"),
      select("night","City buildings…",["shine brightly at night","fix the road","rest or play"],"shine brightly at night","🌃")
    ],"Captions can tell us more information about a picture. We find them in non-fiction texts. Tall buildings are called skyscrapers. The park is a place to rest or play. These workers use tools to fix the road. City buildings shine brightly at night.",{readingId:"captions"})
  ];

  registerQuiz({
    id:"class-diary-2026-10-20-language",
    uploadDate:"2026-10-20",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"20/10/2026 · Unit 2 Week 2 · Word families -ug -un -ut · Homes Around the World · Rhyme · Contractions · Oral Vocabulary · Captions",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book pages 102A and 102B",2],["Compare Text: Homes Around the World","Reading and Writing Companion page 73",1],["Rhyme","game Rhyming Pictures",1],["Structural Analysis: Contractions","video and game",1],["Oral Vocabulary","Let’s Discuss",2],["Text Feature: Captions","non-fiction",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2010","Remember — Language Arts",[
          "📅 Class Diary: 20/10/2026",
          "(20/10) Word families: -ug (bug, rug) · -un (fun, run, lunch, skunk) · -ut (cut, nut)",
          "(20/10) The stilts help keep the home dry. An igloo is a good shelter for a cold place.",
          "(20/10) “Homes Around the World” is a good title because we read about homes in many places.",
          "(20/10) Captions can tell us more information about a picture. We find them in non-fiction texts.",
          "(20/10) Oral Vocabulary: shelter · materials · collapsed · furious · refuse"
        ],"Unit 2 Week 2"),
        {id:"homes20",title:"Homes Around the World",byline:"Compare Text (reread) · Literature Anthology page 44 · Nonfiction",images:[IMG19("homes-around-the-world")],text:"There are many kinds of homes. People build their homes to fit the place they live!\n\nThis home is made of wood. This is a good home for a wet place. There is a lot of water here. The stilts help keep this home dry.\n\nThere is a lot of ice in this place. People can use it to build. This is an igloo. People don’t live in igloos. But they are good shelter from the cold. An igloo is made of ice."},
        {id:"discuss",title:"Let’s Discuss",byline:"Oral Vocabulary · Class Diary 20/10",mode:"reference",images:[IMG("lets-discuss")],text:"What would be a good shelter in a very hot place?\nWhat materials could you use to make a house?\nWhat would you do if your shelter collapsed?\nWould you be furious if your shelter collapsed?\nWould you refuse to live in a house made of mud? Why?"},
        {id:"captions",title:"Text Feature: Captions",byline:"Class Diary 20/10",mode:"reference",images:[IMG("captions")],text:"Captions can tell us more information about a picture. We find them in non-fiction texts. We can see some captions under the pictures. What are they telling us about?"},
        bonus("bonus-la-2010",[
          {label:"Video: Homes Around the World",url:"https://www.youtube.com/watch?v=SESo805XIAg"},
          {label:"Game: Rhyming pictures",url:"https://wordwall.net/resource/26481293/phonics/rhyming-pictures"},
          {label:"Video: Contractions",url:"https://www.youtube.com/watch?v=XXjt8CLBHWw"},
          {label:"Game: Contractions",url:"https://www.baamboozle.com/game/3616560"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  const daisyText="Daisy loves all kinds of plants and animals. She has a pet turtle named Speedy and a very big dog named Tiny. She has a cat named Puff, and her two kittens are named Pip and Pinky.\n\nDaisy also has many plants. She helps feed her pets and water the plants. Daisy always takes good care of them. Her mom and dad are proud that Daisy is dependable.";
  const familiesText="Animals Grow and Change\nLook at the young, or recently born, meerkat and its family. They are similar, or mostly alike. They have brown fur and brown eyes. They have whiskers. They are very alert. These are traits. A trait is the way an animal looks or acts. The young meerkat will grow and change during its life cycle, but it will always look similar to its parents. A life cycle is how a living thing grows and lives.\n(Dark eyes are a trait of meerkats.)\n\n(A baby bird will grow to look like its parent.)\nChildren are much like their parents, but not exactly the same. They vary, or differ in some ways. People have traits that make them different from one another. The color of your hair and eyes are traits. The way you walk and talk are traits, too.";
  const SCI_Q=[
    sci("Daisy’s Ducks · Listening Comprehension","Read the story pages. Then answer.",[
      choice("loves","What does Daisy love?",["all kinds of plants and animals","only cars","only books about space"],"all kinds of plants and animals","🌻"),
      select("speedy","Speedy is Daisy’s…",["turtle","dog","cat","kittens"],"turtle","🐢"),
      select("tiny","Tiny is a very big…",["turtle","dog","cat","kittens"],"dog","🐕"),
      select("puff","Puff is Daisy’s…",["turtle","dog","cat","kittens"],"cat","🐈"),
      choice("care","Why are Daisy’s mom and dad proud?",["Daisy always takes good care of her pets and plants.","Daisy has a big house.","Daisy can run fast."],"Daisy always takes good care of her pets and plants.","💛")
    ],"Daisy has a pet turtle named Speedy, a very big dog named Tiny, a cat named Puff, and two kittens named Pip and Pinky. She feeds her pets and waters the plants. Her mom and dad are proud that Daisy is dependable.",{readingId:"daisy"}),
    sci("Ducklings and their parents","How are the ducklings like their parents?",[
      multi("both","Which structures do the parent duck and the ducklings both have? Choose 3.",["a bill (beak)","wings","legs and feet","fur","fins"],["a bill (beak)","wings","legs and feet"],"🦆"),
      choice("diff","How are the ducklings different from their parents?",["They are smaller and a different color.","They have no wings.","They have four legs."],"They are smaller and a different color.","🐥")
    ],"The parent and the ducklings both have a bill, wings, and legs with feet. The ducklings are smaller and yellow, so they look a little different."),
    sci("Vocabulary · trait","trait: a feature of a living thing",[
      choice("trait","A trait is ___.",["a feature of a living thing","a kind of home","a food"],"a feature of a living thing","🐢"),
      multi("which","Which are traits? Choose 3.",["the color of your hair","the color of your eyes","the way you walk","your favorite toy"],["the color of your hair","the color of your eyes","the way you walk"],"👀")
    ],"trait – a feature of a living thing. The color of your hair and eyes are traits. The way you walk and talk are traits, too.",{readingId:"trait"}),
    sci("Explain · Which young animal belongs to the parent?","Student Book page 42. The parent is a gorilla.",[
      choice("young","Which young animal belongs to the gorilla parent?",["a young gorilla","a young lemur","a young monkey"],"a young gorilla","🦍"),
      choice("why","How do you know?",["It looks similar to the parent.","It is the biggest.","It has a long striped tail."],"It looks similar to the parent.","🔍")
    ],"The young gorilla belongs to the parent because it looks similar to its parent: black fur and the same body shape.",{readingId:"gorilla"}),
    sci("Families Are Similar, But Different","Read the text. Then answer.",[
      choice("young","The word young means ___.",["recently born","very old","very big"],"recently born","🐣"),
      multi("meerkat","How are the young meerkat and its family alike? Choose 3.",["brown fur","brown eyes","whiskers","wings"],["brown fur","brown eyes","whiskers"],"🦦"),
      choice("lifecycle","A life cycle is ___.",["how a living thing grows and lives","a kind of bike","a home for meerkats"],"how a living thing grows and lives","🔄"),
      choice("bird","A baby bird will grow to look like ___.",["its parent","a fish","a meerkat"],"its parent","🐦"),
      choice("children","Children are much like their parents, but ___.",["not exactly the same","exactly the same","never alike"],"not exactly the same","👨‍👧")
    ],"Young means recently born. The young meerkat and its family have brown fur, brown eyes, and whiskers — these are traits. A life cycle is how a living thing grows and lives. A baby bird will grow to look like its parent. Children are much like their parents, but not exactly the same.",{readingId:"families"}),
    sci("Reading Connection · Kittens","How are these kittens similar to and different from each other and their mother?",[
      choice("kittens","Choose the best answer.",["They have the same structures. They are different size and color.","They look exactly the same.","They have different structures."],"They have the same structures. They are different size and color.","🐱")
    ],"They have the same structures. They are different size and color.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-20-science",
    uploadDate:"2026-10-20",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"20/10/2026 · Lesson 3: Animals and Their Parents · Daisy’s Ducks · Explain: Parents and Offspring · trait",scoreByField:true,
      groups:groupsOf([["Listening Comprehension: Daisy’s Ducks","read aloud on the digital platform",2],["Explain: Parents and Offspring","Student Book pages 42 and 43 · trait",2],["Families Are Similar, But Different","reading connection",2]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-2010","Remember — Science",[
          "📅 Class Diary: 20/10/2026",
          "(20/10) trait: a feature of a living thing",
          "(20/10) A trait is the way an animal looks or acts.",
          "(20/10) A life cycle is how a living thing grows and lives.",
          "(20/10) Young animals look similar to their parents, but not exactly the same.",
          "(20/10) Kittens and their mother have the same structures. They are different size and color.",
          "(16/10) Birds and their offspring both have beaks, wings, and feathers."
        ],"Unit 2 Module 1 · Lesson 3"),
        {id:"daisy",title:"Daisy’s Ducks",byline:"Read Aloud · digital platform",images:[IMG("daisys-ducks")],text:daisyText},
        {id:"trait",title:"Vocabulary: trait",byline:"Explain: Parents and Offspring · Student Book page 42",mode:"reference",images:[IMG("vocab-trait")],text:"trait: a feature of a living thing"},
        {id:"gorilla",title:"Which young animal belongs to the parent?",byline:"Student Book page 42",mode:"reference",images:[IMG("gorilla-parent")],text:"The parent is a gorilla. Look at the young animals: a lemur, a gorilla, and a monkey."},
        {id:"families",title:"Families Are Similar, But Different",byline:"Student Book pages 14–15",images:[IMG("families-similar-different")],text:familiesText}
      ]}
  });
})();
