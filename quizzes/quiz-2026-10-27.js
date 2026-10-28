// Quiz 27/10/2026 — Class Diary 27/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 123–124 ·
// HFW review eat, no, of, under, who · Grammar: Singular and Plural Possessive Nouns · Phonics: end blends nd, nk, nt, st, sk, mp ·
// Shared Read: reread "The Best Spot" (genre nonfiction · author's purpose · RWC pages 95, 97).
// Science: Lesson 3 Review (Student Book pages 48–49) + Lesson 3 Test. (Diary ghi "Lesson 2" nhưng nội dung là Lesson 3 Review.)
// Ảnh: web/assets/2026-10-27/ (tạo bằng web/_reference/tao_anh_2026-10-27.py); ảnh truyện dùng lại web/assets/2026-10-26/.
(()=>{
  const IMG=name=>`assets/2026-10-27/${name}.webp`,BS=name=>`assets/2026-10-26/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 27/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["eat","no","of","under","who"];
  const BLEND=["nd","nk","nt","st","sk","mp"];
  const RULE="A possessive noun tells who or what has something. A possessive noun that tells about one person or thing ends with ’s. A possessive noun that tells about more than one person or thing ends with s’.";

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","In “The Best Spot”, deer, rabbits, birds, wasps, ants, foxes, and a skunk all live in a forest. So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","What buildings do you know? What are they made of?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · High-frequency words (Practice Book 123)","Use the words in the box to complete each sentence.",[
      select("who","___ can help Dan?",["Who","Eat","No","Of","Under"],"Who","🙋"),
      select("no","We have ___ lamp.",HFW,"no","💡"),
      select("under","The cat is ___ the desk.",HFW,"under","🐱"),
      select("eat","Bats ___ bugs.",HFW,"eat","🦇"),
      select("of","His hands are full ___ mud.",HFW,"of","🤲")
    ],"Who can help Dan? · We have no lamp. · The cat is under the desk. · Bats eat bugs. · His hands are full of mud."),
    la("High-frequency words · Notebook","Review: eat, no, of, under, who.",[
      select("n1","I like to ___ apples.",HFW,"eat","🍎"),
      select("n2","My dog is ___ the table.",HFW,"under","🐶"),
      select("n3","There’s ___ rain today.",HFW,"no","☀️"),
      select("n4","I have lots ___ books.",HFW,"of","📚"),
      select("n5","___ is your teacher?",["Who","Eat","No","Of","Under"],"Who","👩‍🏫")
    ],"I like to eat ___. · My dog is under the table. · There’s no rain today. · I have lots of books. · Who is your teacher?"),
    la("Homework check · Possessive nouns (Practice Book 124)","Circle the possessive noun in each sentence.",[
      choice("ants","The ants’ hill is big.",["ants’","hill","big"],"ants’","🐜"),
      choice("pigs","The pigs’ pen is a mess.",["pigs’","pen","mess"],"pigs’","🐷"),
      choice("pal","My pal’s pet is little.",["pal’s","pet","little"],"pal’s","🐶"),
      choice("mom","My mom’s hat is red.",["mom’s","hat","red"],"mom’s","👒")
    ],"Possessive nouns: The ants’ hill · The pigs’ pen · My pal’s pet · My mom’s hat"),
    la("Grammar · Singular and Plural Possessive Nouns","A possessive noun tells who or what has something.",[
      choice("what","A possessive noun tells ___.",["who or what has something","what is happening now","how many things there are"],"who or what has something","🔑"),
      choice("one","A possessive noun that tells about ONE person or thing ends with ___.",["’s","s’","-ing"],"’s","1️⃣"),
      choice("more","A possessive noun that tells about MORE THAN ONE person or thing ends with ___.",["s’","’s","-ing"],"s’","👨‍👩‍👧"),
      choice("girl","One girl has a red hat. “The ___ hat is red.”",["girl’s","girls’","girls"],"girl’s","👧"),
      choice("girls","Three girls have red hats. “The ___ hats are red.”",["girls’","girl’s","girls"],"girls’","👧👧👧"),
      choice("dog","Example: a ___ hut (one dog)",["dog’s","dogs’","dogs"],"dog’s","🐕")
    ],RULE+" Examples: a dog’s hut, the girls’ books. Singular: The girl’s hat is red. Plural: The girls’ hats are red.",{readingId:"possessive"}),
    la("Grammar · Fix the possessives","Which sentence is correct?",[
      choice("don","Don has a pen.",["This is Don’s pen.","This is Dons pen.","This is Dons’ pen."],"This is Don’s pen.","🖊️"),
      choice("hen","One hen has eggs.",["The hen’s eggs are wet.","The hens eggs are wet.","The hen eggs are wet."],"The hen’s eggs are wet.","🐔"),
      choice("duck","One duck has a bill.",["The duck’s bill is orange.","The duck bill is orange.","The ducks bill is orange."],"The duck’s bill is orange.","🦆"),
      choice("pigs2","Many pigs have one pen.",["The pigs’ pen is a mess.","The pig pen’s is a mess.","The pigs pen is a mess."],"The pigs’ pen is a mess.","🐖")
    ],"✗ This is Dons pen. ✓ This is Don’s pen. · ✗ The hens eggs are wet. ✓ The hen’s eggs are wet. · ✗ The duck bill is orange. ✓ The duck’s bill is orange."),
    la("Phonics · End blends in “The Best Spot”","Review the consonant blends: nd, nk, nt, st, sk, and mp.",[
      select("sand","Ants dig under sand and grass. → sand",BLEND,"nd","🏖️"),
      select("trunk","What is on the trunk? → trunk",BLEND,"nk","🌳"),
      select("plants","They eat plants. → plants",BLEND,"nt","🌿"),
      select("rest","Ants have no rest! → rest",BLEND,"st","🐜"),
      select("dusk","Dad fox hunts at dusk. → dusk",BLEND,"sk","🌙"),
      select("jump","Mom fox lets the kits run and jump. → jump",BLEND,"mp","🦊")
    ],"sand (nd) · trunk (nk) · plants (nt) · rest (st) · dusk (sk) · jump, stump (mp)"),
    la("Shared Read · The Best Spot: Genre","Reread the story “The Best Spot”.",[
      choice("genre","A nonfiction text gives facts about real things. “The Best Spot” has photos of real animals and gives facts about them. Hint: Fantasy = made-up, could not happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("nonfiction","A nonfiction text gives ___.",["facts about real things","a made-up story","a song"],"facts about real things","📖")
    ],"Genre: Nonfiction. A nonfiction text gives facts about real things. “The Best Spot” is nonfiction.",{readingId:"bestspot"}),
    la("Shared Read · Facts about the animals (page 95)","Find facts about the animals in the text.",[
      select("fox","Fox",["Fox kits run and jump.","The rabbit is in the grass.","Wasps live in a nest."],"Fox kits run and jump.","🦊"),
      select("rabbit","Rabbit",["Fox kits run and jump.","The rabbit is in the grass.","Wasps live in a nest."],"The rabbit is in the grass.","🐰"),
      select("wasp","Wasp",["Fox kits run and jump.","The rabbit is in the grass.","Wasps live in a nest."],"Wasps live in a nest.","🐝")
    ],"Fox: Fox kits run and jump. · Rabbit: The rabbit is in the grass. · Wasp: Wasps live in a nest.",{readingId:"bestspot"}),
    la("Shared Read · Author’s purpose (page 97)","The author’s purpose is the reason why an author writes a text.",[
      choice("purpose","The author’s purpose is ___.",["the reason why an author writes a text","the name of the author","the last page of the book"],"the reason why an author writes a text","✍️"),
      choice("photo","Look at the photo of the ants. What is a clue from the photo?",["The ants are working.","The ants are sleeping.","The ants are swimming."],"The ants are working.","📷"),
      choice("text","What is a clue from the text?",["Ants pick up twigs and grass.","Ants eat plants.","Ants hunt at dusk."],"Ants pick up twigs and grass.","📝"),
      choice("why","Why did the author write “The Best Spot”?",["to give facts about animals that live together in a forest","to tell a made-up story about a talking fox","to teach us how to cook"],"to give facts about animals that live together in a forest","🌲"),
      multi("how","The author can include information in the ___ and ___ to explain the purpose. Choose 2.",["text","photos","songs"],["text","photos"],"💡")
    ],"The author’s purpose is the reason why an author writes a text. The author can include information in the text and photos to explain his or her purpose. Clue from the photos: The ants are working. Clue from the text: Ants pick up twigs and grass.",{readingId:"bestspot"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-27-language",
    uploadDate:"2026-10-27",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"27/10/2026 · Unit 2 Week 3 · Singular and Plural Possessive Nouns · HFW eat, no, of, under, who · End blends · The Best Spot: nonfiction, author’s purpose",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["High-Frequency Words","Practice Book 123 · Notebook",2],["Grammar","Singular and Plural Possessive Nouns · Practice Book 124",3],["Phonics","End blends nd, nk, nt, st, sk, mp",1],["Shared Read: The Best Spot","Genre · facts · author’s purpose",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2710","Remember — Language Arts",[
          "📅 Class Diary: 27/10/2026",
          "(27/10) Essential Question: Where do animals live together?",
          "(27/10) Possessive noun: tells who or what has something.",
          "(27/10) One person or thing → ’s: a dog’s hut · The girl’s hat is red.",
          "(27/10) More than one person or thing → s’: the girls’ books · The girls’ hats are red.",
          "(27/10) Genre: Nonfiction: A nonfiction text gives facts about real things. “The Best Spot” is nonfiction.",
          "(27/10) Author’s purpose: The author’s purpose is the reason why an author writes a text.",
          "(27/10) High-frequency words: eat · no · of · under · who",
          "(27/10) Consonant blends: nd · nk · nt · st · sk · mp"
        ],"Unit 2 Week 3"),
        {id:"possessive",title:"Singular and Plural Possessive Nouns",byline:"Grammar",mode:"reference",images:[IMG("possessive-rule"),IMG("possessive-singular-plural")],text:RULE+"\nExamples: a dog’s hut, the girls’ books\nSingular: The girl’s hat is red.\nPlural: The girls’ hats are red."},
        {id:"bestspot",title:"The Best Spot",byline:"Reread · Reading and Writing Companion pages 82–91 · Nonfiction",images:[BS("best-spot-cover"),BS("bs-deer"),BS("bs-rabbit"),BS("bs-nest"),BS("bs-wasps"),BS("bs-ants"),BS("bs-fox-kits"),BS("bs-skunk")],text:"This is a forest. This spot has lots of animals. Deer live here. They eat plants.\nBut who is in the grass? A rabbit’s head pops up!\nWhat is up there? Look up, up, up. It is a nest. The mom gets big bugs. Yum!\nWhat is on the trunk? It is a nest, too. Lots of wasps live in it.\nAnts live here, too. Ants pick up twigs and grass. Ants zip in and out. Ants have no rest! Ants dig under sand and grass.\nFox kits hop on a stump. Mom fox lets the kits run and jump. The kits must eat. Dad fox hunts at dusk.\nWho went hunting, too? A skunk! This spot has lots of animals!"},
        {id:"hfwnotebook",title:"High-Frequency Words",byline:"Notebook 27/10/26",mode:"reference",images:[IMG("hfw-notebook")],text:"I like to eat ___. · My dog is under the table. · There’s no rain today. · I have lots of books. · Who is your teacher?"},
        bonus("bonus-la-2710",[
          {label:"Game: Possessive Nouns (Turtle Diary)",url:"https://www.turtlediary.com/game/possessive-nouns.html"},
          {label:"Game: Possessive and Plural Nouns",url:"https://wordwall.net/resource/6822711/english/possessive-and-plural-nouns"},
          {label:"Game: Ending blends",url:"https://www.baamboozle.com/game/1017950"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Lesson 3 Review ─────────────────────────
  const SCI_Q=[
    sci("Lesson 3 Review · Explain the phenomenon","Which of these eggs does not belong in the nest?",[
      choice("egg","Which of these eggs does not belong in the nest?",["the egg that is bigger than the other three eggs","the smallest egg","all the eggs belong"],"the egg that is bigger than the other three eggs","🥚"),
      choice("hatch","What animals hatch from eggs?",["birds and reptiles","dogs and cats","cows and horses"],"birds and reptiles","🐣")
    ],"One egg is bigger than the other three eggs, so it does not belong in the nest. Birds and reptiles hatch from eggs.",{readingId:"cuckoo"}),
    sci("Summarize It","How are parents and their offspring similar and different?",[
      choice("look","Young animals look ___ their parents.",["like","nothing like"],"like","🐥"),
      choice("struct","Their structures are ___.",["the same","different"],"the same","🦴"),
      choice("move","The way they move is ___.",["the same","different"],"the same","🏃"),
      choice("color","Parents and offspring can have a different ___.",["coloring","number of legs","body parts"],"coloring","🎨")
    ],"Young animals look like their parents. Their structures are the same. The way they move is the same. Parents and offspring can have a different coloring."),
    sci("Three-Dimensional Thinking","Answer the questions based on what you learned about parents and their offspring.",[
      choice("exact","“Offspring are always exactly the same as their parents.” Is this right?",["No. Offspring look similar to their parents, but not exactly the same.","Yes. Offspring are always exactly the same."],"No. Offspring look similar to their parents, but not exactly the same.","🔍"),
      multi("chick","How is a chick similar to its parent (a hen)? Choose 3 traits they have in common.",["a beak and a comb on the head","feathers and wings","legs with feet","fur","fins"],["a beak and a comb on the head","feathers and wings","legs with feet"],"🐔"),
      choice("diff","How is the chick different from the hen?",["It is smaller.","It has fins.","It has no legs."],"It is smaller.","📏")
    ],"Offspring are NOT always exactly the same as their parents. The chick and the hen have the same traits: the head with a beak, feathers and wings, the tail, legs with feet. The chick is smaller."),
    sci("Vocabulary Check · Animals and Their Parents","Lesson 3 vocabulary (digital platform).",[
      choice("trait","trait",["a feature of a living thing","the young of an animal","how a living thing grows and lives"],"a feature of a living thing","🔎"),
      choice("offspring","offspring",["the young of an animal","a feature of a living thing","recently born"],"the young of an animal","👶"),
      choice("young","young",["recently born","very old","a feature of a living thing"],"recently born","🍼"),
      choice("life","life cycle",["how a living thing grows and lives","the young of an animal","a feature of a living thing"],"how a living thing grows and lives","🔄")
    ],"trait: a feature of a living thing · offspring: the young of an animal · young: recently born · life cycle: how a living thing grows and lives.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-27-science",
    uploadDate:"2026-10-27",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"27/10/2026 · Lesson 3 Review: Animals and Their Parents · Student Book pages 48–49 · Lesson 3 Test",scoreByField:true,
      groups:groupsOf([["Lesson 3 Review","Explain the phenomenon · Summarize It",2],["Three-Dimensional Thinking","Parents and offspring",1],["Vocabulary Check","Animals and Their Parents",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-2710","Remember — Science",[
          "📅 Class Diary: 27/10/2026",
          "(27/10) Summarize It: Young animals look like their parents. Their structures are the same. The way they move is the same.",
          "(27/10) Parents and offspring can have a different coloring.",
          "(27/10) Offspring are not always exactly the same as their parents.",
          "(27/10) Which of these eggs does not belong in the nest? One egg is bigger than the other three eggs."
        ],"Unit 2 · Lesson 3 Review"),
        {id:"cuckoo",title:"Explain the phenomenon",byline:"Lesson 3 Review · Student Book pages 48–49",mode:"reference",images:["assets/2026-10-15/cuckoo-video.webp"],text:"Explain the phenomenon: Which of these eggs does not belong in the nest?"}
      ]}
  });
})();
