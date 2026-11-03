// Quiz 03/11/2026 — Class Diary 03/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 119 (spelling words) ·
// Anchor Text "At a Pond" (reread; Reading and Writing Companion page 102) · Writing and Grammar (RWC page 104: Write About the Anchor Text) ·
// Paired Selection: poem "Way Down Deep" (Literature Anthology page 62; Genre: Poetry · Repetition and Alliteration; RWC pages 105–107) ·
// Phonics: End blends (video Simply Phonics + Practice: Let's read).
// Science: Unit 2 Module 1 Lesson 4 · Inquiry Activity "What Animals Do" (cont.) · Communicate (Student Book page 56) ·
// homework link Claude Artifact "What Animals Do" (đã mở đủ 4 tab Predict/Look/Sort/Talk, 12 thẻ ảnh, nút Show group names/Check/Our table/Show ideas).
// Close Reading "Competition": diary không có nội dung → không làm câu hỏi.
// Ảnh: web/assets/2026-11-03/ (tạo bằng web/_reference/tao_anh_2026-11-03.py).
(()=>{
  const IMG=name=>`assets/2026-11-03/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="03/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const SPELL=["lend","send","fast","past","sink","wink","run","bug","of","who"];
  const BL=["nd","st","nk","mp","ft","nt"];
  const MOVE=["creep","inch slowly","sleep"];
  const POETRY="Poetry provides information in a way that entertains and appeals to the senses.";
  const REP="Poems often have repetition, or repeated words or phrases.";
  const ALLIT="Poems also use alliteration, or words that start with the same sound.";

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we read about frogs, ducks, turtles, and fish at a pond (“At a Pond”) and about starfish, snails, and oysters way down deep under the water (“Way Down Deep”). So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","How do we celebrate special days?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · Spelling words (Practice Book 119)","Spelling words: lend · send · fast · past · sink · wink · run · bug · of · who",[
      select("bug","Write the spelling word that names the picture.",SPELL,"bug","🐛"),
      select("sink","Write the spelling word that names the picture.",SPELL,"sink","🚰"),
      select("send","I can ___ you a kiss.",SPELL,"send","💋"),
      select("wink","Can you ___?",SPELL,"wink","😉"),
      select("run","This cat can ___!",SPELL,"run","🐈")
    ],"A. Pictures: bug · sink. B. Sentences: I can send you a kiss. · Can you wink? · This cat can run!"),
    la("Anchor Text · At a Pond (Reading and Writing Companion page 102)","Talk about the question the author asks on page 55. Write clues from the text and photos that answer the question.",[
      choice("ask","What question does the author ask on page 55?",["Who is in the eggs?","Who is under the water?","Can fish be on land?"],"Who is in the eggs?","🥚"),
      choice("text","What Text Says: which clue comes from the text?",["Ducks make nests on land.","Frogs eat bugs.","Fish live in the water."],"Ducks make nests on land.","📖"),
      choice("photos","What Photos Show: what do the photos show?",["a mom duck and her ducklings","a big fish","a turtle on a rock"],"a mom duck and her ducklings","📷"),
      choice("eggs","Who is in the eggs?",["ducklings","tadpoles","baby turtles"],"ducklings","🐣")
    ],"Page 55 asks: Who is in the eggs? What Text Says: Ducks make nests on land. What Photos Show: a mom duck and her ducklings. Answer: ducklings are in the eggs.",{readingId:"rwc102"}),
    la("Writing and Grammar · Write About the Anchor Text (page 104)","Write two more pages about one of the animals in “At a Pond”. Use the photos to help you.",[
      choice("goal","My Goal: I can respond to a nonfiction text by ___ the text.",["extending","coloring","skipping"],"extending","🎯"),
      multi("remember","Remember: which 3 things should you do when you write? Choose 3.",["Focus on a topic.","Capitalize the first word in each sentence.","Use possessive nouns correctly.","Write about lots of different topics.","Start every sentence with a small letter."],["Focus on a topic.","Capitalize the first word in each sentence.","Use possessive nouns correctly."],"✅"),
      choice("frog","Frogs have feet. Its feet help it ___.",["swim","fly","eat"],"swim","🐸"),
      choice("duck","Ducks have bills. Its bill helps it to ___.",["eat","swim","hop"],"eat","🦆"),
      choice("turtle","Turtles have shells. Its shell protects it from ___.",["harm","food","water"],"harm","🐢"),
      choice("lion","Lions have manes. Its mane protects its ___.",["neck","feet","tail"],"neck","🦁"),
      {id:"write",label:"Your turn: write one sentence about an animal in “At a Pond”. (Example: Frogs have feet. Its feet help it swim.)",type:"text-any",answer:"",icon:"✏️"}
    ],"My Goal: I can respond to a nonfiction text by extending the text. Remember: Focus on a topic. Capitalize the first word in each sentence. Use possessive nouns correctly. Class model: Frogs have feet. Its feet help it swim. Ducks have bills. Its bill helps it to eat. Turtles have shells. Its shell protects it from harm. Lions have manes. Its mane protects its neck.",{readingId:"rwc104"}),
    la("Paired Selection · Way Down Deep (poem)","Read the poem “Way Down Deep” (Literature Anthology Book, page 62).",[
      choice("genre","“Way Down Deep” has short lines, words that repeat (Underneath the water, Way down deep), and words that start with the same sound (sand, stones, seaweed). Hint: Poetry = a poem with lines; it can repeat words and use words with the same beginning sound. Nonfiction = real facts with photos. Fantasy = a made-up story (animals talk). What is the genre?",["Poetry","Nonfiction","Fantasy"],"Poetry","📜"),
      choice("author","Who wrote “Way Down Deep”?",["Mary Ann Hoberman","Nancy Finton","Jim Arnosky"],"Mary Ann Hoberman","✍️"),
      choice("compare","Compare Texts: what do we read about in this poem?",["animals that live in the water","animals that live in a forest","animals that live on a farm"],"animals that live in the water","🌊"),
      choice("poetry","Poetry provides information in a way that ___ and appeals to the senses.",["entertains","scares","hides"],"entertains","🎭"),
      choice("rep","Poems often have repetition, or ___ words or phrases.",["repeated","funny","long"],"repeated","🔁"),
      choice("allit","Poems also use alliteration, or words that start with the same ___.",["sound","color","number"],"sound","🔤"),
      choice("fun","Repetition and alliteration make poems ___!",["fun to listen to","very short","hard to read"],"fun to listen to","🎵"),
      choice("connect","Make Connections: how is under the sea like the pond?",["Many animals live together in the water.","There are no animals.","Animals do not need water."],"Many animals live together in the water.","🔗")
    ],"Way Down Deep by Mary Ann Hoberman · Genre: Poetry · Compare Texts: Read about animals that live in the water. "+POETRY+" "+REP+" "+ALLIT+" Repetition and alliteration make poems fun to listen to! Make Connections: How is under the sea like the pond? How is it different?",{readingId:"poem"}),
    la("Paired Selection · Reading and Writing Companion pages 105–107","Reread “Way Down Deep”. Talk and write.",[
      multi("repeat","Page 105: Which words repeat in the poem? Choose 2.",["Underneath the water","Way down deep","Starfish creep","Oysters sleep"],["Underneath the water","Way down deep"],"🔁"),
      choice("why","Why does the author repeat words in the poem?",["To tell us about deep in the sea.","To tell us about a farm.","To make the poem longer."],"To tell us about deep in the sea.","🌊"),
      multi("third","Page 106: The third line is “In sand and stones and seaweed”. Which 3 words have the same beginning sound? Choose 3.",["sand","stones","seaweed","in","and"],["sand","stones","seaweed"],"🔤"),
      choice("same","Why does the author use the same sound in these words?",["To make it more fun to read.","To tell a scary story.","To teach us to count."],"To make it more fun to read.","😄"),
      select("starfish","Page 107: How do the animals move? Starfish ___",MOVE,"creep","⭐"),
      select("snails","Snails ___",MOVE,"inch slowly","🐌"),
      select("oysters","Oysters ___",MOVE,"sleep","🦪"),
      choice("bottom","What do the words tell you about the bottom of the sea?",["It is way down deep.","It is hot and dry.","It is up in the sky."],"It is way down deep.","⬇️")
    ],"Words that repeat: Underneath the water · Way down deep — to tell us about deep in the sea. Alliteration: sand, stones, seaweed — to make it more fun to read. How the animals move: Starfish creep · Snails inch slowly · Oysters sleep. The bottom of the sea is way down deep.",{readingId:"rwc105"}),
    la("Phonics · End blends · Let’s read!","Read the words. Choose the end blend.",[
      select("hand","hand",BL,"nd","✋"),
      select("vest","vest",BL,"st","🦺"),
      select("clank","clank",BL,"nk","🔔"),
      select("romp","romp",BL,"mp","🤸"),
      select("trunk","trunk",BL,"nk","🐘"),
      select("pest","pest",BL,"st","🪳"),
      select("grand","grand",BL,"nd","🏛️"),
      select("tent","tent",BL,"nt","⛺"),
      choice("net","Which word does NOT have an end blend?",["net","west","stand","lamp"],"net","🥅")
    ],"hand (nd) · vest (st) · clank (nk) · romp (mp) · trunk (nk) · pest (st) · grand (nd) · tent (nt). net ends with one consonant (t) — no end blend.",{readingId:"phonics"}),
    la("Phonics · Read the sentences","Read each sentence. Find the words with end blends.",[
      choice("lamp","“The lamp is on the desk.” Which word ends with mp?",["lamp","desk","the"],"lamp","💡"),
      multi("pink","“I saw a pink fish in the pond.” Which 2 words have end blends? Choose 2.",["pink","pond","fish","saw"],["pink","pond"],"🐟"),
      multi("stomp","“The child can stomp in the sand.” Which 2 words have end blends? Choose 2.",["stomp","sand","child","can"],["stomp","sand"],"🏖️")
    ],"The lamp is on the desk. (lamp: mp) · I saw a pink fish in the pond. (pink: nk · pond: nd) · The child can stomp in the sand. (stomp: mp · sand: nd)",{readingId:"phonics"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-03-language",
    uploadDate:"2026-11-03",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"03/11/2026 · Unit 2 Week 3 · Spelling words · At a Pond (RWC 102) · Write About the Anchor Text (RWC 104) · Poem: Way Down Deep · End blends",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","Practice Book 119 · spelling words",1],["Anchor Text: At a Pond","Reading and Writing Companion page 102",1],["Writing and Grammar","Write About the Anchor Text · page 104",1],["Paired Selection: Way Down Deep","Poetry · Repetition and Alliteration · pages 105–107",2],["Phonics","End blends · Let’s read!",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0311","Remember — Language Arts",[
          "📅 Class Diary: 03/11/2026",
          "(03/11) Essential Question: Where do animals live together?",
          "(03/11) At a Pond: Who is in the eggs? Ducklings! Ducks make nests on land.",
          "(03/11) Write About the Anchor Text · My Goal: I can respond to a nonfiction text by extending the text.",
          "(03/11) Remember: Focus on a topic. Capitalize the first word in each sentence. Use possessive nouns correctly.",
          "(03/11) Way Down Deep by Mary Ann Hoberman · Genre: Poetry",
          "(03/11) "+POETRY,
          "(03/11) Repetition: "+REP,
          "(03/11) Alliteration: "+ALLIT,
          "(03/11) Repetition and alliteration make poems fun to listen to!",
          "(03/11) End blends: hand, band, vest, nest, clank, trunk, romp, lamp, bend, grand, stand, test, west, tent, bank"
        ],"Unit 2 Week 3"),
        {id:"rwc102",title:"Reading and Writing Companion · page 102",byline:"Reread · Anchor Text · At a Pond",mode:"reference",images:[IMG("rwc-102")],text:"Talk about the question the author asks on page 55.\nWrite clues from the text and photos that answer the question.\nWhat Text Says · What Photos Show\nWho is in the eggs?"},
        {id:"rwc104",title:"Writing and Grammar · page 104",byline:"Write About the Anchor Text",mode:"reference",images:[IMG("rwc-104")],text:"Write two more pages about one of the animals in At a Pond. Use the photos to help you.\nMy Goal: I can respond to a nonfiction text by extending the text.\nRemember: Focus on a topic. Capitalize the first word in each sentence. Use possessive nouns correctly.\nClass model: Frogs have feet. Its feet help it swim. Ducks have bills. Its bill helps it to eat. Turtles have shells. Its shell protects it from harm. Lions have manes. Its mane protects its neck."},
        {id:"poem",title:"Way Down Deep",byline:"Paired Selection · Literature Anthology page 62 · Poetry · by Mary Ann Hoberman",mode:"reference",images:[IMG("way-down-deep")],text:"Genre: Poetry · Compare Texts: Read about animals that live in the water.\nRepetition and Alliteration:\n"+POETRY+"\n"+REP+"\n"+ALLIT+"\nRepetition and alliteration make poems fun to listen to!"},
        {id:"rwc105",title:"Reading and Writing Companion · pages 105–107",byline:"Reread · Paired Selection · Way Down Deep",mode:"reference",images:[IMG("rwc-105"),IMG("rwc-106-107")],text:"Talk about the words that repeat. What do they tell you? Why does the author repeat words in the poem?\nTalk about the third line of the poem. Alliteration in a poem is when two or more nearby words have the same beginning sound. Why does the author use the same sound in these words?\nHow do the animals move? What do the words tell you about the bottom of the sea?"},
        {id:"phonics",title:"Phonics · End blends",byline:"Practice: Let’s read!",mode:"reference",images:[IMG("phonics-words"),IMG("phonics-sentences")],text:"hand · fast · vest · clank · band · nest · romp\ntrunk · last · pest · clink · bend · rest · grand\ntent · test · lamp · bank · net · west · stand\nThe lamp is on the desk.\nI saw a pink fish in the pond.\nThe child can stomp in the sand."},
        bonus("bonus-la-0311",[
          {label:"Video: At a Pond",url:"https://www.youtube.com/watch?v=v4HEN27yPOA"},
          {label:"Video: Final consonant blends (Simply Phonics)",url:"https://www.youtube.com/watch?v=ZxlPKVURslA"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Unit 2 Module 1 Lesson 4 ─────────────────────────
  // Nhóm và câu mô tả lấy nguyên văn từ trang "What Animals Do" (tab Sort → Show group names / Check / Our table; tab Talk → Show ideas).
  const GROUPS=["Feeding","Protecting","Teaching"];
  const SCI_Q=[
    sci("Inquiry Activity · What Animals Do (cont.) · Sort the cards","Sort the photo cards into three groups. Feeding: Parents give food. · Protecting: Parents keep babies safe. · Teaching: Parents show babies how.",[
      {...select("heron","Heron: which group?",GROUPS,"Feeding","🐦"),img:IMG("card-heron"),bigImg:true},
      {...select("lion","Lion: which group?",GROUPS,"Protecting","🦁"),img:IMG("card-lion"),bigImg:true},
      {...select("duck","Duck: which group?",GROUPS,"Teaching","🦆"),img:IMG("card-duck"),bigImg:true},
      {...select("cow","Cow: which group?",GROUPS,"Feeding","🐄"),img:IMG("card-cow"),bigImg:true},
      {...select("kangaroo","Kangaroo: which group?",GROUPS,"Protecting","🦘"),img:IMG("card-kangaroo"),bigImg:true},
      {...select("orangutan","Orangutan: which group?",GROUPS,"Teaching","🦧"),img:IMG("card-orangutan"),bigImg:true},
      {...select("penguin","Penguin: which group?",GROUPS,"Feeding","🐧"),img:IMG("card-penguin"),bigImg:true},
      {...select("hen","Hen: which group?",GROUPS,"Protecting","🐔"),img:IMG("card-hen"),bigImg:true},
      {...select("cheetah","Cheetah: which group?",GROUPS,"Teaching","🐆"),img:IMG("card-cheetah"),bigImg:true},
      {...select("pig","Pig: which group?",GROUPS,"Feeding","🐷"),img:IMG("card-pig"),bigImg:true},
      {...select("elephant","Elephant: which group?",GROUPS,"Protecting","🐘"),img:IMG("card-elephant"),bigImg:true},
      {...select("polar","Polar Bear: which group?",GROUPS,"Teaching","🐻‍❄️"),img:IMG("card-polar"),bigImg:true}
    ],"Feeding: The heron, cow, penguin and pig give their babies food or milk. · Protecting: The lion, kangaroo, hen and elephant keep their babies safe. · Teaching: The duck, orangutan, cheetah and polar bear show their babies how to do things.",{readingId:"cards"}),
    sci("Inquiry Activity · Our table (page 55)","Animal Behavior | Description. Match the behavior with the description.",[
      select("t-feed","The heron, cow, penguin and pig give their babies food or milk.",GROUPS,"Feeding","🍼"),
      select("t-protect","The lion, kangaroo, hen and elephant keep their babies safe.",GROUPS,"Protecting","🛡️"),
      select("t-teach","The duck, orangutan, cheetah and polar bear show their babies how to do things.",GROUPS,"Teaching","🎓")
    ],"Feeding: give their babies food or milk. · Protecting: keep their babies safe. · Teaching: show their babies how to do things.",{readingId:"cards"}),
    sci("Communicate (Student Book page 56)","5. How do these behaviors help the young animals survive? 6. Did what you learned match your prediction?",[
      choice("survive","How do these behaviors help the young animals survive?",["Some young animals need their parents to protect and feed them because they cannot do it on their own.","Young animals never need their parents.","Young animals can find all their food on the first day."],"Some young animals need their parents to protect and feed them because they cannot do it on their own.","🌱"),
      select("i-feed","“These behaviors help babies survive because…” food and milk help babies grow big and strong.",GROUPS,"Feeding","🍼"),
      select("i-protect","“These behaviors help babies survive because…” babies stay safe from danger and cold.",GROUPS,"Protecting","🛡️"),
      select("i-teach","“These behaviors help babies survive because…” babies learn how to find food and live on their own.",GROUPS,"Teaching","🎓"),
      multi("match","Did what you learned match your prediction? Parents do ___ their young. Choose 4.",["feed","protect","teach","take care of","scare","ignore"],["feed","protect","teach","take care of"],"🔮")
    ],"Some young animals need their parents to protect and feed them because they cannot do it on their own. Feeding: food and milk help babies grow big and strong. Protecting: babies stay safe from danger and cold. Teaching: babies learn how to find food and live on their own. Yes, parents do feed, protect, teach and take care of their young.",{readingId:"communicate"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-03-science",
    uploadDate:"2026-11-03",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"03/11/2026 · Unit 2 Module 1 Lesson 4 · Inquiry Activity: What Animals Do (cont.) · Communicate (page 56)",scoreByField:true,
      groups:groupsOf([["Inquiry Activity","What Animals Do · Sort the cards · Our table",2],["Communicate","Student Book page 56",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-0311","Remember — Science",[
          "📅 Class Diary: 03/11/2026",
          "(03/11) Inquiry Activity: What Animals Do (cont.) · Communicate (Student Book, page 56)",
          "(03/11) Feeding: The heron, cow, penguin and pig give their babies food or milk.",
          "(03/11) Protecting: The lion, kangaroo, hen and elephant keep their babies safe.",
          "(03/11) Teaching: The duck, orangutan, cheetah and polar bear show their babies how to do things.",
          "(03/11) Some young animals need their parents to protect and feed them because they cannot do it on their own.",
          "(03/11) Parents feed, protect, teach and take care of their young."
        ],"Lesson 4"),
        {id:"cards",title:"What Animals Do · photo cards",byline:"Inquiry Activity · Science U2 · Lesson 4 · pages 54–56 · Photos: Wikimedia Commons",mode:"reference",images:[IMG("what-animals-do-cards")],text:"Look at the photo cards. Who is the parent? Who is the baby? What is the parent doing?\nSort the cards into three groups:\nFeeding: Parents give food.\nProtecting: Parents keep babies safe.\nTeaching: Parents show babies how."},
        {id:"communicate",title:"Communicate",byline:"Student Book page 56",mode:"reference",images:[IMG("sci-communicate")],text:"5. How do these behaviors help the young animals survive?\n6. Did what you learned match your prediction?"},
        bonus("bonus-sci-0311",[{label:"Homework: What Animals Do (Predict · Look · Sort · Talk)",url:"https://claude.ai/artifact/WbXGaapfUyVX5hjH5D2CGB"}])
      ]}
  });
})();
