// Quiz 16/11/2026 — Class Diary 16/11/2026 + nội dung các link trong diary. Ngày mai (17/11): bài kiểm tra LA Week 3 + 4 và Science Module 1 Test.
// Language Arts: Unit 2 Week 4 (bài ngày hiện ở tab ngày + nằm trong DAILY_LA của quiz-summary-la-u2-w3-w4.js) ·
//   homework check Practice Book 132 + 134 (depink) · Paired Selection “Kids Can Help!” (Literature Anthology 82–83, RWC 139–141) ·
//   Grammar: nouns (person, place, animal, thing) · Possessive Noun (poster, phần “Your Turn” tô đáp án → hỏi lại không kèm ảnh) ·
//   Common and Proper Nouns (poster + phiếu bài tập về nhà) · Phonics sh, th, -ng · Closed Syllables (poster).
//   Link: video emGW2RUVa2Y, K7UgI0JCebc, 9K70YXyyJ_M, KN4nNA2o6Ts, epk-hnVC10k (không phụ đề → đọc storyboard) · Baamboozle 1743329, 5043843 · Wordwall 11209624
//   → bonus 76, 86–92 trong bonus-links.js.
// Science (Close Reading): Science Module 1 Review — “Different Types of Animals”, “Animal Messages”, Protection.
//   Thẻ câu hỏi xuất ra window.SCI_M1_REVIEW_1611 để bộ Module Test (quiz-summary-sci-u2m1.js) dùng lại.
// Math: Lesson 41 Using Numbers 11 to 20 (homework check Workbook 10-1 depink + slide 1 more / 2 more / 1 fewer / 2 fewer than 15; ten-frame đôi vẽ bằng code).
// Ảnh: web/assets/2026-11-16/ (tạo bằng web/_reference/tao_anh_2026-11-16.py).
(()=>{
  const IMG=name=>`assets/2026-11-16/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="16/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const DG3=["sh","th","ng"],CP=["common noun","proper noun"],PPAT=["person","place","animal","thing"];
  const COMMON="A common noun is a general name for a person, place, animal or thing.";
  const PROPER="A proper noun is the special name of a person, place, animal or thing.";
  const POSS="A possessive noun shows who something belongs to.";
  const KIDS1="How can kids help the neighborhood? Kids can help grow a garden! It is fun to plant seeds and help them grow.";
  const KIDS2="A community garden is a great place to help. The plants are pretty to look at. And everyone can enjoy fresh fruits and vegetables.";
  const KIDS3="Kids can help clean the playground. They can pick up trash. They can recycle cans and bottles. Recycling makes the neighborhood clean. Recycling helps our Earth, too.";
  const GENRE_HINT="Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos).";
  const LA_Q=[
    la("Homework check · Practice Book 132","Read the words in the box: bath · swings · think · path. Write the word that names each picture.",[
      select("pb-swings","Picture 1: kids play on it at the park.",["bath","swings","think","path"],"swings","🛝"),
      select("pb-bath","Picture 2: you wash in it.",["bath","swings","think","path"],"bath","🛁"),
      select("pb-path","Picture 3: a little road you walk on.",["bath","swings","think","path"],"path","🥾"),
      select("pb-think","Picture 4: the girl has a question and uses her brain.",["bath","swings","think","path"],"think","💭"),
      choice("pb-rang","Add one letter to make a new word with the ending sound you hear in swing: ran → ___",["rang","rant","ram"],"rang","🔔"),
      choice("pb-wing","Add one letter to make a new word with the ending sound you hear in swing: win → ___",["wing","wink","wind"],"wing","🪽")
    ],"Practice Book 132: swings · bath · path · think. swing ends with ng: ran → rang · win → wing.",{readingId:"pb132"}),
    la("Homework check · Practice Book 134","Read the words in the box: with · sang · ship · shop · thing · fish. Then sort the words.",[
      multi("pb-sh","Words with sh. Choose 3.",["ship","shop","fish","with","sang","thing"],["ship","shop","fish"],"🚢"),
      multi("pb-th","Words with th. Choose 2.",["with","thing","ship","sang","fish","shop"],["with","thing"],"🧵"),
      multi("pb-ng","Words with ng. Choose 2.",["sang","thing","with","ship","shop","fish"],["sang","thing"],"🎤")
    ],"Words with sh: ship · shop · fish. Words with th: with · thing. Words with ng: sang · thing (thing has th and ng).",{readingId:"pb134"}),
    la("Paired Selection · Kids Can Help!","Reread the story “Kids Can Help!” (Literature Anthology Book, page 82) · Reading and Writing Companion, pages 139–141.",[
      choice("genre","“Kids Can Help!” has photos of real kids and gives facts about how kids can help. "+GENRE_HINT+" What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📷"),
      choice("garden","How can kids help the neighborhood?",["Kids can help grow a garden!","Kids can help drive the bus.","Kids can help build a house."],"Kids can help grow a garden!","🌱"),
      choice("enjoy","A community garden is a great place to help. What can everyone enjoy?",["fresh fruits and vegetables","new toys","a big cake"],"fresh fruits and vegetables","🥕"),
      choice("place","Circle the name of another place where kids can help.",["the playground","the moon","the zoo"],"the playground","🛝"),
      choice("boys","What are the boys in the photo doing?",["They recycle cans and bottles.","They plant seeds.","They read books."],"They recycle cans and bottles.","♻️"),
      choice("feel","“Recycling makes the neighborhood clean. Recycling helps our Earth, too.” How does the author feel about recycling?",["The author thinks recycling is good.","The author thinks recycling is bad.","The author does not like the playground."],"The author thinks recycling is good.","🌍"),
      select("t-garden","In the garden, kids can help: ___",["They can plant seeds.","They can recycle trash."],"They can plant seeds.","🌻"),
      select("t-play","At the playground, kids can help: ___",["They can plant seeds.","They can recycle trash."],"They can recycle trash.","🗑️"),
      choice("title","Why is “Kids Can Help!” a good title for this text?",["It’s about how kids can help.","It’s about a funny dog.","It’s about a big storm."],"It’s about how kids can help.","🏷️"),
      free("talk","Talk About It: How does the author show that kids can help?","🗣️")
    ],KIDS1+" "+KIDS2+" "+KIDS3+" In the garden: They can plant seeds. At the playground: They can recycle trash. “Kids Can Help!” is a good title because it’s about how kids can help.",{readingId:"kids"}),
    la("Essential Question · Week 4","Think about the stories and texts of Week 4.",[
      choice("eq","In Week 4 we read “Thump Thump Helps Out”, “Nell’s Books” and “Kids Can Help!”: kids and animals help their friends and their neighborhood. So the Essential Question of Week 4 is ___.",[EQ,"Where do animals live together?","What makes a good friend?"],EQ,"❓")
    ],"Essential Question (Week 4): "+EQ),
    la("Grammar · Nouns","A noun names a person, place, animal or thing.",[
      select("n-girl","girl",PPAT,"person","👧"),
      select("n-school","school",PPAT,"place","🏫"),
      select("n-crab","crab",PPAT,"animal","🦀"),
      select("n-pencil","pencil",PPAT,"thing","✏️")
    ],"Nouns: person (girl) · place (school) · animal (crab) · thing (pencil).",{readingId:"nouns"}),
    la("Grammar · Possessive Noun","A possessive noun shows who something belongs to.",[
      choice("p-def","A possessive noun shows who something ___.",["belongs to","looks like","is doing"],"belongs to","🎒"),
      choice("p-apos","Add an ___ (’) to show possession.",["apostrophe","comma","period"],"apostrophe","❜"),
      choice("p-owns","The ’s shows who ___ something.",["owns","wants","sees"],"owns","🔑"),
      select("p-mary","Your Turn: This is ___ book.",["Mary’s","Mary"],"Mary’s","📕"),
      select("p-cat","Your Turn: This is the ___ ball.",["cat’s","cat"],"cat’s","🐱"),
      select("p-dad","Your Turn: This is ___ backpack.",["Dad’s","Dad"],"Dad’s","🎒"),
      select("p-girls","Your Turn: This is the ___ doll. (more than one girl)",["girls’","girl"],"girls’","🪆")
    ],POSS+" Add an apostrophe (’) to show possession. The ’s shows who owns something. Examples: This is the girl’s book. This is the dog’s ball. This is Tom’s backpack. This is Anna’s doll. Your Turn: Mary’s book · the cat’s ball · Dad’s backpack · the girls’ doll.",{readingId:"possessive"}),
    la("Grammar · Common and Proper Nouns","Common nouns are general. Proper nouns are special!",[
      select("c-def","A ___ is a general name for a person, place, animal or thing.",CP,"common noun","🔡"),
      select("p-def2","A ___ is the special name of a person, place, animal or thing.",CP,"proper noun","🔠"),
      select("c-girl","girl",CP,"common noun","👧"),
      select("c-anna","Anna",CP,"proper noun","👧"),
      select("c-dog","dog",CP,"common noun","🐶"),
      select("c-buddy","Buddy",CP,"proper noun","🐕"),
      select("c-house","house",CP,"common noun","🏠"),
      select("c-ny","New York",CP,"proper noun","🗽"),
      select("c-gs","Greenwood School",CP,"proper noun","🏫"),
      choice("capital","A proper noun starts with a ___.",["capital letter","small letter","number"],"capital letter","🅰️")
    ],COMMON+" "+PROPER+" Examples — common: girl, dog, apple, house · proper: Anna, Buddy, New York, Greenwood School. Proper nouns start with a capital letter!",{readingId:"cpnouns"}),
    la("Homework · Common & Proper Nouns worksheet","Find the Nouns: read each sentence. Which word is the common noun? Which word is the proper noun?",[
      choice("w-mia-c","“Mia has a red ball.” Which word is the common noun?",["ball","Mia","red"],"ball","⚽"),
      choice("w-mia-p","“Mia has a red ball.” Which word is the proper noun?",["Mia","ball","has"],"Mia","👧"),
      choice("w-tom","“Our cat is named Tom.” Which word is the proper noun?",["Tom","cat","named"],"Tom","🐱"),
      choice("w-sam","“Sam walked to school.” Which word is the common noun?",["school","Sam","walked"],"school","🏫"),
      choice("w-ben","“Ben likes his new bike.” Which word is the common noun?",["bike","Ben","new"],"bike","🚲"),
      choice("w-lily","“Lily ate an apple.” Which word is the proper noun?",["Lily","apple","ate"],"Lily","🍎"),
      choice("w-rex","“Rex is a big dog.” Which word is the proper noun?",["Rex","dog","big"],"Rex","🐕")
    ],"Mia (proper) has a red ball (common). Our cat (common) is named Tom (proper). Sam (proper) walked to school (common). Ben (proper) likes his new bike (common). Lily (proper) ate an apple (common). Rex (proper) is a big dog (common).",{readingId:"worksheet"}),
    la("Homework · Common or proper?","Is it a common noun or a proper noun? Sort the nouns.",[
      select("s-tree","tree",CP,"common noun","🌳"),
      select("s-sam","Sam",CP,"proper noun","👦"),
      select("s-london","London",CP,"proper noun","🏙️"),
      select("s-max","Max",CP,"proper noun","🐶"),
      select("s-farm","farm",CP,"common noun","🚜"),
      select("s-teacher","teacher",CP,"common noun","🧑‍🏫"),
      select("s-canada","Canada",CP,"proper noun","🍁"),
      select("s-park","park",CP,"common noun","🌳"),
      choice("s-cap","Which name must start with a capital letter?",["Emma","girl","city"],"Emma","✍️"),
      free("bonus","Bonus: Write one sentence with a common noun and a proper noun.","📝")
    ],"Common nouns: tree, farm, teacher, park, girl, city. Proper nouns: Sam, London, Max, Canada, Emma. Names start BIG — with a capital letter!",{readingId:"worksheet"}),
    la("Phonics · Consonant Digraphs: sh, th, -ng","Two letters make one sound. What is the digraph?",[
      select("d-crash","crash",DG3,"sh","💥"),
      select("d-path","path",DG3,"th","🥾"),
      select("d-bring","bring",DG3,"ng","🎁"),
      select("d-thumb","thumb",DG3,"th","👍"),
      select("d-dish","dish",DG3,"sh","🍽️"),
      select("d-song","song",DG3,"ng","🎵")
    ],"sh: crash, dish · th: path, thumb · ng: bring, song."),
    la("Structural Analysis · Closed Syllables: Let’s Review!","A closed syllable ends with a consonant (one or more letters).",[
      choice("k-end","A closed syllable ends with a ___.",["consonant","vowel","period"],"consonant","🚪"),
      choice("k-short","A closed syllable has a ___ vowel sound.",["short","long","silent"],"short","🔉"),
      select("k-cat","cat",["closed syllable","not a closed syllable"],"closed syllable","🐱"),
      select("k-sun","sun",["closed syllable","not a closed syllable"],"closed syllable","☀️"),
      select("k-cup","cup",["closed syllable","not a closed syllable"],"closed syllable","☕"),
      select("k-tree","tree",["closed syllable","not a closed syllable"],"not a closed syllable","🌳"),
      choice("k-pen","Fill in the missing letter: pe__",["n","e","a"],"n","🖊️"),
      choice("k-dog","Fill in the missing letter: do__",["g","o","e"],"g","🐶"),
      choice("k-bus","Fill in the missing letter: bu__",["s","e","o"],"s","🚌")
    ],"A closed syllable has a short vowel sound. It ends with a consonant. Examples: cat, dog, pen, mom, bus, fox, hat, sun, cup. tree ends with a vowel sound, so it is not a closed syllable.",{readingId:"closed"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-16-language",
    uploadDate:"2026-11-16",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"16/11/2026 · Unit 2 Week 4 · Kids Can Help! · Possessive nouns · Common and proper nouns · sh, th, ng · Closed syllables · Test tomorrow",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 132 and 134",2],["Paired Selection","Kids Can Help! · RWC 139–141",1],["Essential Question","Week 4",1],["Grammar","nouns · possessive nouns · common and proper nouns",3],["Homework","Common & Proper Nouns worksheet",2],["Phonics","Consonant digraphs sh, th, -ng",1],["Structural Analysis","Closed syllables",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1611","Remember — Language Arts",[
          "📅 Class Diary: 16/11/2026",
          "(16/11) Homework check: Practice Book, pages 132 and 134. swings · bath · path · think · ran → rang · win → wing",
          "(16/11) Reread the story “Kids Can Help” (Literature Anthology Book, page 82). Genre: Nonfiction.",
          "(16/11) "+KIDS1,
          "(16/11) "+KIDS3,
          "(16/11) In the garden: They can plant seeds. · At the playground: They can recycle trash. · “Kids Can Help!” is a good title: It’s about how kids can help.",
          "(16/11) Possessive Noun: "+POSS+" Add an apostrophe (’) to show possession. The ’s shows who owns something.",
          "(16/11) Common Noun: "+COMMON,
          "(16/11) Proper Noun: "+PROPER,
          "(16/11) Common nouns are general. | Proper nouns are special!",
          "(16/11) Consonant Digraphs: sh, th, -ng",
          "(16/11) Closed syllable: A closed syllable has a short vowel sound. It ends with a consonant. Examples: cat, dog, pen, mom.",
          "(16/11) Homework: Complete the given worksheet. Review weeks 3 and 4 for the test tomorrow."
        ],"Unit 2 Week 4"),
        {id:"pb132",title:"Practice Book 132 · th, ng",byline:"Homework check · Class Diary 16/11",mode:"reference",images:[IMG("la-pb132")],
          text:"A. Read the words in the box. Write the word that names each picture.\nbath · swings · think · path\nB. Add one letter to make a new word with the ending sound you hear in swing.\n1. ran   2. win"},
        {id:"pb134",title:"Practice Book 134 · sh, th, ng",byline:"Homework check · Class Diary 16/11",mode:"reference",images:[IMG("la-pb134")],
          text:"A. Read the words in the box. Then sort the words.\nwith · sang · ship · shop · thing · fish\nWords with sh · Words with th · Words with ng\nB. Think of new words to add to the chart."},
        {id:"kids",title:"Kids Can Help!",byline:"Paired Selection · Literature Anthology pages 82–83 · Genre: Nonfiction",mode:"reference",images:[IMG("la-kids-can-help"),IMG("la-rwc-141")],
          text:KIDS1+"\n\n"+KIDS2+"\n\n"+KIDS3+"\n\nTalk about the different types of things kids do in the text. Write clues from the text and photos about how kids can help.\nIn the garden · At the playground\nWhy is “Kids Can Help!” a good title for this text?"},
        {id:"nouns",title:"Nouns",byline:"Grammar · Class Diary 16/11",mode:"reference",images:[IMG("la-noun-cards")],text:"person · place · animal · thing"},
        {id:"possessive",title:"Possessive Noun",byline:"Grammar · Class Diary 16/11",mode:"reference",images:[IMG("la-possessive-noun")],
          text:POSS+"\nExamples: girl’s book · dog’s ball · Tom’s backpack · Anna’s doll\nRemember! Add an apostrophe (’) to show possession. The ’s shows who owns something."},
        {id:"cpnouns",title:"Nouns · Common Noun · Proper Noun",byline:"Grammar · Class Diary 16/11",mode:"reference",images:[IMG("la-common-proper")],text:COMMON+"\n"+PROPER+"\nCommon nouns are general. | Proper nouns are special!"},
        {id:"worksheet",title:"Common & Proper Nouns worksheet",byline:"Homework · Class Diary 16/11",mode:"reference",images:[IMG("la-nouns-worksheet-1"),IMG("la-nouns-worksheet-2")],
          text:"A noun is a word for a person, animal, place or thing.\ncommon noun: Names any person, animal, place or thing. No capital letter needed. girl · dog · city · school\nproper noun: Names one special person, animal or place. Starts with a Capital letter! Mia · Max · Paris · Canada"},
        {id:"closed",title:"Closed Syllables · Let’s Review!",byline:"Structural Analysis · Class Diary 16/11",mode:"reference",images:[IMG("la-closed-syllables")],
          text:"A closed syllable ends with a consonant (one or more letters).\nKey Ideas: A closed syllable has a short vowel sound. It ends with a consonant. Examples: cat, dog, pen, mom."},
        bonus("bonus-la-1611",[
          {label:"Video: Proper and Common Noun Song",url:"https://youtu.be/emGW2RUVa2Y"},
          {label:"Game: Common and Proper Nouns",url:"https://www.baamboozle.com/game/1743329"},
          {label:"Video: What Sound Does “SH” Make?",url:"https://youtu.be/K7UgI0JCebc"},
          {label:"Video: How To Use “NG” in Words",url:"https://youtu.be/9K70YXyyJ_M"},
          {label:"Video: What Sound Does “TH” Make?",url:"https://youtu.be/KN4nNA2o6Ts"},
          {label:"Game: Consonant Digraphs th, sh, ng",url:"https://www.baamboozle.com/game/5043843"},
          {label:"Video: What is a Syllable? Open and Closed Syllables",url:"https://youtu.be/epk-hnVC10k"},
          {label:"Game: Open & Closed Syllables",url:"https://wordwall.net/resource/11209624/reading/open-closed-syllables"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Close Reading · Science Module 1 Review ─────────────────────────
  const WORDS6=["mammal","bird","fish","insect","reptile","amphibian"],PARTS6=["fins","wings","beak","hair","scales","skin"];
  const SCI_Q=window.SCI_M1_REVIEW_1611=[
    sci("Module 1 Review · Different Types of Animals","Different types of animals have different structures that help them survive and grow. Look at the photo. Which type of animal is it?",[
      pic(select("t-fish","Look at the photo. Which type of animal is it?",WORDS6,"fish","🔍"),IMG("sci-fish")),
      pic(select("t-bee","Look at the photo. Which type of animal is it?",WORDS6,"insect","🔍"),IMG("sci-bee")),
      pic(select("t-penguin","Look at the photo. Which type of animal is it?",WORDS6,"bird","🔍"),IMG("sci-penguin")),
      pic(select("t-zebra","Look at the photo. Which type of animal is it?",WORDS6,"mammal","🔍"),IMG("sci-zebra")),
      pic(select("t-chameleon","Look at the photo. Which type of animal is it?",WORDS6,"reptile","🔍"),IMG("sci-chameleon")),
      pic(select("t-frog","Look at the photo. Which type of animal is it?",WORDS6,"amphibian","🔍"),IMG("sci-frog"))
    ],"Different types of animals have different structures that help them survive and grow. fish · insect (bee) · bird (penguin) · mammal (zebra) · reptile (chameleon) · amphibian (frog)."),
    sci("Module 1 Review · Circle the structure","Read the meaning. Which structure do you circle?",[
      select("c-fish","A fish is an animal that lives in the water and has gills and fins. Circle the ___.",PARTS6,"fins","🐟"),
      select("c-insect","An insect is an animal with three body sections and six legs. Many insects also have wings. Circle the ___.",PARTS6,"wings","🐝"),
      select("c-bird","A bird is an animal that has two legs, two wings, and feathers. Birds also have beaks. Circle the ___.",PARTS6,"beak","🐧"),
      select("c-mammal","A mammal is an animal with hair or fur that takes care of and gives birth to live young. Circle the ___.",PARTS6,"hair","🦓"),
      select("c-reptile","A reptile is an air-breathing animal that has dry skin covered in scales. Circle the ___.",PARTS6,"scales","🦎"),
      select("c-amphibian","An amphibian is an animal that lives part of its life in water and part on land. Amphibians have thin skin. Circle the ___.",PARTS6,"skin","🐸"),
      choice("c-scales","Some fish are covered in ___.",["scales","feathers","fur"],"scales","🐠"),
      choice("c-thin","Which animals have thin skin?",["amphibians","reptiles","birds"],"amphibians","🐸")
    ],"Circle the fins (fish) · the wings (insect) · the beak (bird) · the hair (mammal) · the scales (reptile) · the skin (amphibian). Some fish are covered in scales. Amphibians have thin skin; reptiles have dry skin covered in scales."),
    sci("Module 1 Review · Animal Messages","Animal babies let their parents know what they need.",[
      select("m-signal","a sound or movement that gives information",["signal","learn","protection"],"signal","📣"),
      select("m-learn","to gain knowledge or a skill",["learn","signal","protection"],"learn","📘"),
      choice("m-send","Babies signal to send a ___.",["message","gift","letter"],"message","💌"),
      choice("m-birds","How do baby birds signal that they are ready to eat?",["They make sounds and open their mouths.","They fly away.","They go to sleep."],"They make sounds and open their mouths.","🐦"),
      choice("m-parent","A parent ___ to signals from its offspring.",["responds","sleeps","hides"],"responds","👪")
    ],"Animal babies let their parents know what they need. Babies signal to send a message. A signal is a sound or movement that gives information. Baby birds make sounds. They also open their mouths when they are ready to eat. Different animals send different signals. A parent responds to signals from its offspring. Learn means to gain knowledge or a skill."),
    sci("Module 1 Review · Protection","Protection keeps things safe from harm.",[
      select("pr-def","keeps things safe from harm",["protection","signal","learn"],"protection","🛡️"),
      choice("pr-use","Some animals can use their ___ for protection.",["structures","toys","houses"],"structures","🦔"),
      choice("pr-homes","Other animals ___ for protection.",["build homes","sing songs","change their names"],"build homes","🏠"),
      multi("pr-parts","Animals can also use structures like these to help them live. Choose 4.",["nose","mouth","eyes","ears","shoes","hats"],["nose","mouth","eyes","ears"],"👃")
    ],"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live.")
  ];
  registerQuiz({
    id:"class-diary-2026-11-16-science",
    uploadDate:"2026-11-16",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"16/11/2026 · Close Reading · Science Module 1 Review · Module Test tomorrow",scoreByField:true,
      groups:groupsOf([["Different Types of Animals","mammal · bird · fish · insect · reptile · amphibian",2],["Animal Messages","signal · learn",1],["Protection","keeps things safe from harm",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1611","Remember — Science",[
          "📅 Class Diary: 16/11/2026",
          "(16/11) Close Reading: Science Module 1 Review. Reread to review for the Module Test tomorrow.",
          "(16/11) Different types of animals have different structures that help them survive and grow.",
          "(16/11) Fish: an animal that lives in the water and has gills and fins. Some fish are covered in scales. Circle the fins.",
          "(16/11) Insect: an animal with three body sections and six legs. Many insects also have wings. Circle the wings.",
          "(16/11) Bird: an animal that has two legs, two wings, and feathers. Birds also have beaks. Circle the beak.",
          "(16/11) Mammal: an animal with hair or fur that takes care of and gives birth to live young. Circle the hair.",
          "(16/11) Reptile: an air-breathing animal that has dry skin covered in scales. Circle the scales.",
          "(16/11) Amphibian: an animal that lives part of its life in water and part on land. Amphibians have thin skin. Circle the skin.",
          "(16/11) Signal: a sound or movement that gives information. Babies signal to send a message. A parent responds to signals from its offspring.",
          "(16/11) Learn: means to gain knowledge or a skill.",
          "(16/11) Protection: keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection."
        ],"Module 1 Review"),
        {id:"types",title:"Different Types of Animals",byline:"Science Module 1 Review · Class Diary 16/11",mode:"reference",images:[IMG("sci-types-1"),IMG("sci-types-2")],
          text:"Different types of animals have different structures that help them survive and grow."},
        {id:"messages",title:"Animal Messages · Protection",byline:"Science Module 1 Review · Class Diary 16/11",mode:"reference",images:[IMG("sci-animal-messages"),IMG("sci-protection")],
          text:"Animal babies let their parents know what they need. Babies signal to send a message. A signal is a sound or movement that gives information. Baby birds make sounds. They also open their mouths when they are ready to eat. Different animals send different signals. A parent responds to signals from its offspring.\nLearn means to gain knowledge or a skill.\n\nProtection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live."}
      ]}
  });

  // ───────────────────────── MATH · Lesson 41: Using Numbers 11 to 20 ─────────────────────────
  // Dạng linh động (feedback-math-flexible-quiz): ten-frame đôi vẽ bằng code đúng như slide (15 vàng, thêm 1–2 đỏ / bớt 1–2), tapframe frames:2.
  const TEN=(n,color)=>({kind:"tenframe",n,frames:2,color});
  const vis=(field,visual)=>({...field,visual});
  const tap2=(id,label,answer,color)=>({id,label,type:"tapframe",cols:5,cells:20,frames:2,answer,color});
  const SRC="Source: Lesson 41 slides (Class Diary 16/11/2026)",WB="Source: Workbook 10-1 Making Numbers 11 to 20 (homework check, Class Diary 16/11/2026)";
  const MATH_Q=[
    math("Homework check · Making Numbers 11 to 20",`${WB}. Write each number as 10 and some ones.`,[
      fill("h12","twelve: 12 is 10 and ___.","2","✏️"),
      fill("h18","eighteen: 18 is 10 and ___.","8","✏️"),
      fill("h14","fourteen: 14 is 10 and ___.","4","✏️"),
      fill("h11","eleven: 11 is 10 and ___.","1","✏️"),
      fill("h17","seventeen: 17 is 10 and ___.","7","✏️"),
      fill("h19","nineteen: 19 is 10 and ___.","9","✏️"),
      fill("h16","sixteen: 16 is 10 and ___.","6","✏️"),
      choice("h13","Algebra: Which is the missing number? 13 is 10 and ___.",["3","1","2","10"],"3","🔎"),
      choice("h15","Algebra: Which is the missing number? 15 is ___ and 5.",["10","5","3","1"],"10","🔎")
    ],"12 is 10 and 2 · 18 is 10 and 8 · 14 is 10 and 4 · 11 is 10 and 1 · 17 is 10 and 7 · 19 is 10 and 9 · 16 is 10 and 6 · 13 is 10 and 3 · 15 is 10 and 5.",{readingId:"wb101"}),
    math("Lesson 41 · More than and fewer than 15",`${SRC} · new question types. Look at the ten-frames: 15.`,[
      vis(fill("c15","Count and write the number.","15"),TEN(15,"yellow")),
      vis(fill("m1","1 more than 15 is ___.","16"),TEN(15,"yellow")),
      vis(fill("m2","2 more than 15 is ___.","17"),TEN(15,"yellow")),
      vis(fill("f1","1 fewer than 15 is ___.","14"),TEN(15,"yellow")),
      vis(fill("f2","2 fewer than 15 is ___.","13"),TEN(15,"yellow")),
      choice("more","To find 1 more, you ___ one counter.",["add","take away"],"add","➕"),
      choice("fewer","To find 1 fewer, you ___ one counter.",["take away","add"],"take away","➖")
    ],"1 more than 15 is 16. 2 more than 15 is 17. 1 fewer than 15 is 14. 2 fewer than 15 is 13. More: add counters. Fewer: take counters away."),
    math("Lesson 41 · Show the number on the ten-frames",`${SRC} · new question types`,[
      tap2("s16","Show 1 more than 15.",16,"red"),
      tap2("s17","Show 2 more than 15.",17,"red"),
      tap2("s14","Show 1 fewer than 15.",14,"yellow"),
      tap2("s13","Show 2 fewer than 15.",13,"yellow")
    ],"Fill the top ten-frame first. 16 = 10 and 6 · 17 = 10 and 7 · 14 = 10 and 4 · 13 = 10 and 3.")
  ];
  registerQuiz({
    id:"math-lesson-41-using-numbers-11-20",
    uploadDate:"2026-11-16",
    subjectKey:"math",
    title:"Math – Lesson 41 (using numbers 11 to 20)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"16/11/2026 · Lesson 41: Using Numbers 11 to 20 · 1 more, 2 more, 1 fewer, 2 fewer",scoreByField:true,
      groups:groupsOf([["Homework check","Workbook 10-1 · Making Numbers 11 to 20",1],["More and fewer","1 more · 2 more · 1 fewer · 2 fewer than 15",1],["Show the number","Tap the ten-frames",1]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-1611","Remember — Math Lesson 41",[
          "📅 Class Diary: 16/11/2026",
          "(16/11 · L41) Using Numbers 11 to 20",
          "(16/11 · L41) Homework check (Workbook 10-1): Write each number as 10 and some ones. 12 is 10 and 2 · 18 is 10 and 8 · 13 is 10 and 3 · 15 is 10 and 5.",
          "(16/11 · L41) 1 more than 15 is 16. 2 more than 15 is 17.",
          "(16/11 · L41) 1 fewer than 15 is 14. 2 fewer than 15 is 13.",
          "(16/11) Homework: Workbook, lesson 41, page 42."
        ],"Lesson 41"),
        {id:"wb101",title:"Making Numbers 11 to 20",byline:"Workbook 10-1 · Homework check",mode:"reference",images:[IMG("math-wb-10-1")],text:"Write each number as 10 and some ones."}
      ]}
  });
})();
