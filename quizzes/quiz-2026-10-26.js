// Quiz 26/10/2026 — Class Diary 26/10/2026 + file đọc "The Best Spot" (Reading and Writing Companion, trang 82–91) + các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check end blends (Practice Book 115) ·
// Structural Analysis: inflectional ending -ing · Shared Read "The Best Spot" (nonfiction) · Writing Practice (pages 92–93) · HFW eat, no, of, under, who.
// Close Reading: Listening Comprehension (link video → thẻ Bonus của LA).
// Math: Lesson 35 (pattern, repeats) + homework check Lesson 34 (Using Data from Picture Graphs: Favorite Seasons).
// Ảnh: web/assets/2026-10-26/ (tạo bằng web/_reference/tao_anh_2026-10-26.py).
(()=>{
  const IMG=name=>`assets/2026-10-26/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 26/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const BLEND=["st","nd","nt","nk","sk","mp"];
  const HFW=["eat","no","of","under","who"];

  const BEST_SPOT=[
    "This is a forest.","This spot has lots of animals.","Deer live here. They eat plants.",
    "But who is in the grass?","A rabbit’s head pops up!",
    "What is up there?","Look up, up, up.","It is a nest.","The mom gets big bugs. Yum!",
    "What is on the trunk?","It is a nest, too.","Lots of wasps live in it.",
    "Ants live here, too.","Ants pick up twigs and grass.","Ants zip in and out.","Ants have no rest!","Ants dig under sand and grass.",
    "Fox kits hop on a stump.","Mom fox lets the kits run and jump.","The kits must eat.","Dad fox hunts at dusk.",
    "Who went hunting, too?","A skunk!","This spot has lots of animals!"
  ].join("\n");

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we saw penguins on the ice, and we read “The Best Spot”: deer, rabbits, birds, wasps, ants, foxes, and a skunk all live in a forest. So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","What buildings do you know? What are they made of?"],"Where do animals live together?","❓"),
      choice("habitat","In “The Best Spot”, what is the habitat of these animals?",["a forest","an ocean","a desert"],"a forest","🌲")
    ],"Essential Question: Where do animals live together? In “The Best Spot”, many animals live together in a forest.",{readingId:"bestspotcover"}),
    la("Homework check · End blends (Practice Book 115)","Some words have end blends, such as st and nk. The letters st make the ending sounds in nest. The letters nk make the ending sounds in sink.",[
      choice("nest","The letters st make the ending sounds in ___.",["nest","sink","hand"],"nest","🪺"),
      choice("sink","The letters nk make the ending sounds in ___.",["sink","nest","tent"],"sink","🚰"),
      select("list","list",BLEND,"st","📝"),select("hand","hand",BLEND,"nd","✋"),select("tent","tent",BLEND,"nt","⛺"),
      select("bank","bank",BLEND,"nk","🏦"),select("desk","desk",BLEND,"sk","🪑"),select("lamp","lamp",BLEND,"mp","💡")
    ],"Read the words. Listen for the end blend: list (st) · hand (nd) · tent (nt) · bank (nk) · desk (sk) · lamp (mp)."),
    la("Structural Analysis · Inflectional Ending -ing","Add the ending -ing to an action word to tell what is happening now.",[
      choice("rule","We add -ing to an action word to tell what is happening ___.",["now","yesterday","tomorrow"],"now","⏰"),
      choice("jump","jump + ing = ___",["jumping","jumps","jumped"],"jumping","🦘"),
      {...choice("fix","What is the boy doing? Which sentence is correct?",["He is kicking the ball.","He is kick the ball.","He kicking the ball."],"He is kicking the ball.","⚽"),img:IMG("ing-kick"),bigImg:true}
    ],"Add the ending -ing to an action word to tell what is happening now: jump → jumping. ✗ He is kick the ball. ✓ He is kicking the ball.",{readingId:"ingrule"}),
    la("Structural Analysis · What is happening now?","Look at the pictures. Choose the word with -ing.",[
      {...choice("throw","What is the dinosaur doing? It is ___ the ball.",["throwing","throw","throws"],"throwing","🦖"),img:IMG("ing-throw"),bigImg:true},
      {...choice("drink","What is the cat doing now? It is ___ the water.",["drinking","drink","drinks"],"drinking","🐱"),img:IMG("ing-drink"),bigImg:true},
      {...choice("eat","What is Luffy doing now? He is ___ the feast.",["eating","eat","eats"],"eating","🍗"),img:IMG("ing-eat"),bigImg:true},
      {...choice("fly","What is the dog doing now? The dog is ___ on the rug.",["flying","fly","flies"],"flying","🐶"),img:IMG("ing-fly"),bigImg:true},
      {...choice("pika","What is Pikachu doing now? Pikachu is ___ up and down.",["jumping","jump","jumps"],"jumping","⚡"),img:IMG("ing-jump"),bigImg:true}
    ],"It is throwing the ball. · It is drinking the water. · He is eating the feast. · The dog is flying on the rug. · Pikachu is jumping up and down.",{readingId:"ingpractice"}),
    la("Shared Read · The Best Spot","Before you read: What different animals can you see? What is the habitat of these animals?",[
      choice("genre","“The Best Spot” has photos of real animals and tells real facts. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Nonfiction","Fantasy","Realistic fiction"],"Nonfiction","📰"),
      choice("where","Read: “This is a forest. This spot has lots of animals.” Where do the animals live?",["in a forest","in the ocean","in a city"],"in a forest","🌲"),
      choice("deer","“Deer live here. They eat ___.”",["plants","bugs","fish"],"plants","🦌"),
      choice("grass","“But who is in the grass?”",["A rabbit’s head pops up!","A fox hops on a stump.","A skunk!"],"A rabbit’s head pops up!","🐰"),
      choice("up","“What is up there? Look up, up, up.” What is it?",["It is a nest.","It is a stump.","It is a skunk."],"It is a nest.","🪺"),
      choice("bugs","Who gets big bugs for the baby birds?",["the mom","the fox","the ants"],"the mom","🐛")
    ],"This is a forest. This spot has lots of animals. Deer live here. They eat plants. A rabbit’s head pops up! It is a nest. The mom gets big bugs. Yum!",{readingId:"bestspot"}),
    la("Shared Read · Wasps, ants, foxes, and a skunk","Find text evidence.",[
      choice("trunk","“What is on the trunk? It is a nest, too.” Who lives in it?",["Lots of wasps live in it.","Lots of ants live in it.","A fox lives in it."],"Lots of wasps live in it.","🐝"),
      multi("ants","What do the ants do? Choose 3.",["pick up twigs and grass","zip in and out","dig under sand and grass","eat plants","hunt at dusk"],["pick up twigs and grass","zip in and out","dig under sand and grass"],"🐜"),
      choice("rest","“Ants have no ___!”",["rest","home","food"],"rest","🐜"),
      choice("kits","“Fox kits hop on a stump.” Look at the photo. Kits are ___.",["baby foxes","baby rabbits","big wasps"],"baby foxes","🦊"),
      choice("dusk","“The kits must eat.” Who hunts at dusk?",["Dad fox","Mom fox","the rabbit"],"Dad fox","🌙"),
      choice("skunk","“Who went hunting, too?”",["A skunk!","A deer!","A wasp!"],"A skunk!","🦨")
    ],"Lots of wasps live in the nest on the trunk. Ants pick up twigs and grass. Ants zip in and out. Ants have no rest! Ants dig under sand and grass. Fox kits (baby foxes) hop on a stump. Dad fox hunts at dusk. A skunk went hunting, too.",{readingId:"bestspot"}),
    la("Shared Read · Order and main idea","Retell the text using the photos and words.",[
      fixed("first","Which animal do we read about FIRST?",["deer","fox","skunk"],"deer","1️⃣"),
      fixed("next","We read about the rabbit. Which do we read about NEXT?",["the nest with baby birds","the skunk","the fox kits"],"the nest with baby birds","➡️"),
      fixed("last","Which animal do we read about LAST?",["the skunk","the deer","the rabbit"],"the skunk","🔚"),
      choice("title","Why is “The Best Spot” a good title?",["This spot has lots of animals!","The spot is in a big city.","Only one animal lives there."],"This spot has lots of animals!","🏆"),
      choice("land","Which word has the same ending sounds as in land?",["sand","sunk","nest"],"sand","🏖️"),
      choice("sunk","Which word has the same ending sounds as in sunk?",["trunk","twigs","grass"],"trunk","🌳")
    ],"The text tells about deer → a rabbit → a nest with baby birds → wasps → ants → fox kits → a skunk. This spot has lots of animals! sand / and end like land (nd). trunk ends like sunk (nk).",{readingId:"bestspot"}),
    la("Writing Practice · Write a Sentence","Reading and Writing Companion, pages 92 and 93.",[
      choice("topic","“Deer eat plants in the forest.” What is the topic?",["Deer","plants","forest"],"Deer","🦌"),
      choice("capital","Which letter is a capital letter in the first word?",["D","e","p"],"D","🔠"),
      choice("trait","Writing Trait: A sentence can focus on one ___.",["topic","color","number"],"topic","🎯"),
      choice("skill","Writing Skill: Remember, always capitalize the ___ in a sentence.",["first word","last word","every word"],"first word","✏️"),
      choice("why","“Deer eat plants in the forest.” Why does Deer start with a capital D?",["It is the first word in the sentence.","It is the last word in the sentence.","It is a big animal."],"It is the first word in the sentence.","✅"),
      {id:"mine",label:"Write a sentence about your favorite animal: “___ eat ___ in the ___.”",type:"text-any",icon:"📝"}
    ],"Deer eat plants in the forest. (Topic: Deer.) Writing Trait: A sentence can focus on one topic. Writing Skill: Remember, always capitalize the first word in a sentence. Write: ___ eat ___ in the ___."),
    la("High-Frequency Words · eat, no, of, under, who","Read the sentences. Choose the word.",[
      select("eat","What do you like to ___?",HFW,"eat","🍎"),
      select("no","___, you can not go.",["No","Eat","Of","Under","Who"],"No","🙅"),
      select("of","The trunk has lots ___ stuff in it.",HFW,"of","🧳"),
      select("under","The dog hid ___ the bed.",HFW,"under","🛏️"),
      select("who","___ is it?",["Who","No","Eat","Of","Under"],"Who","❓")
    ],"High-frequency words: eat · no · of · under · who. What do you like to eat? No, you can not go. The trunk has lots of stuff in it. The dog hid under the bed. Who is it?",{readingId:"hfw"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-26-language",
    uploadDate:"2026-10-26",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"26/10/2026 · Unit 2 Week 3 · Where do animals live together? · Inflectional ending -ing · Shared Read: The Best Spot · HFW eat, no, of, under, who",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","End blends · Practice Book 115",1],["Structural Analysis","Inflectional ending -ing",2],["Shared Read: The Best Spot","Nonfiction · Reading and Writing Companion pages 82–91",3],["Writing Practice","Write a sentence · pages 92–93",1],["High-Frequency Words","eat · no · of · under · who",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2610","Remember — Language Arts",[
          "📅 Class Diary: 26/10/2026",
          "(26/10) Essential Question: Where do animals live together?",
          "(26/10) Add the ending -ing to an action word to tell what is happening now: jump → jumping.",
          "(26/10) He is kicking the ball. · It is drinking the water. · The dog is flying on the rug.",
          "(26/10) The Best Spot (Nonfiction): This is a forest. This spot has lots of animals.",
          "(26/10) Writing Trait: A sentence can focus on one topic.",
          "(26/10) Writing Skill: Remember, always capitalize the first word in a sentence.",
          "(26/10) High-frequency words: eat · no · of · under · who",
          "(26/10) Some words have end blends, such as st and nk: nest, sink."
        ],"Unit 2 Week 3"),
        {id:"bestspotcover",title:"The Best Spot",byline:"Shared Read · Reading and Writing Companion pages 82–83 · Nonfiction",images:[IMG("best-spot-cover")],text:"Essential Question: Where do animals live together?\nMy Goal: I can read and understand a nonfiction text.\nRead to find out about animals that live in a forest. Find the title. Point to each word in the title as you read it.\nBefore you read: What are your predictions for this story? What different animals can you see? What is the habitat of these animals? What other animals live here?"},
        {id:"bestspot",title:"The Best Spot",byline:"Shared Read · Reading and Writing Companion pages 82–91 · Nonfiction",images:[IMG("best-spot-cover"),IMG("bs-deer"),IMG("bs-rabbit"),IMG("bs-nest"),IMG("bs-wasps"),IMG("bs-ants"),IMG("bs-ant-home"),IMG("bs-fox-kits"),IMG("bs-skunk")],text:BEST_SPOT},
        {id:"ingrule",title:"Inflectional Ending -ing",byline:"Structural Analysis",mode:"reference",images:[IMG("ing-rule"),IMG("ing-kick")],text:"Add the ending -ing to an action word to tell what is happening now.\njump → jumping\nWhat is the boy doing? ✗ He is kick the ball. ✓ He is kicking the ball."},
        {id:"ingpractice",title:"What is happening now?",byline:"Structural Analysis · Practice",mode:"reference",images:[IMG("ing-throw"),IMG("ing-drink"),IMG("ing-eat"),IMG("ing-fly"),IMG("ing-jump")],text:"What is the dinosaur doing? · What is the cat doing now? · What is Luffy doing now? · What is the dog doing now? · What is Pikachu doing now?"},
        {id:"hfw",title:"High-Frequency Words",byline:"eat · no · of · under · who",mode:"reference",images:[IMG("hfw-cards")],text:"What do you like to eat?\nNo, you can not go.\nThe trunk has lots of stuff in it.\nThe dog hid under the bed.\nWho is it?"},
        bonus("bonus-la-2610",[
          {label:"Close Reading: The Dark Well · Winter Fun (video)",url:"https://www.youtube.com/watch?v=ve8aXtEubx4"},
          {label:"Video: Words that end in -ing",url:"https://www.youtube.com/watch?v=Tgir2JRG5Q4"},
          {label:"Game: Base Words, Suffix -ing",url:"https://www.baamboozle.com/game/1544210"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 35 (pattern) ─────────────────────────
  const MATH_Q=[
    math("Homework check · Using Data from Picture Graphs","Favorite Seasons: ☀️ Summer 6 · 🍁 Fall 4 · ❄️ Winter 3 · 🌷 Spring 5. Use the graph to answer the questions.",[
      num("winter","☀️☀️☀️☀️☀️☀️ Summer\n🍁🍁🍁🍁 Fall\n❄️❄️❄️ Winter\n🌷🌷🌷🌷🌷 Spring\nHow many children chose winter?",3,"❄️"),
      fixed("fav","Which season is the favorite?",["Summer","Fall","Winter","Spring"],"Summer","☀️"),
      fixed("four","Which season did 4 children choose?",["Summer","Fall","Winter","Spring"],"Fall","🍁"),
      num("more","Number Sense: How many more children chose summer than spring?",1,"➕"),
      fixed("about","Reasoning: What is the graph about?",["Favorite Subjects","Summer","Favorite Seasons","Fall"],"Favorite Seasons","📊")
    ],"Winter: 3 children. Summer is the favorite (6). Fall: 4 children. Summer 6 − Spring 5 = 1 more. The graph is about Favorite Seasons.",{readingId:"seasons"}),
    math("Lesson 35 · Color pattern","This is a color pattern. Say the names of the colors.",[
      fixed("repeat","🟥🟥🟦🟥🟥🟦🟥🟥🟦\nWhat repeats over and over?",["red, red, blue","red, blue, blue","blue, red, red"],"red, red, blue","🔁"),
      fixed("letters","R R B R R B R R B\nWhich letters repeat over and over?",["R, R, B","R, B, B","B, B, R"],"R, R, B","🔤"),
      fixed("next","🟥🟥🟦🟥🟥🟦🟥🟥 ___\nWhat comes next?",["🟦 blue","🟥 red"],"🟦 blue","➡️"),
      fixed("nextl","R R B R R B R ___\nWhat letter comes next?",["R","B"],"R","➡️"),
      fixed("same","The colors and letters make the ___ pattern.",["same","different"],"same","🤝"),
      fixed("which","Which one is a pattern?",["🟥🟥🟦🟥🟥🟦🟥🟥🟦","🟥🟦🟦🟥🟥🟥🟦🟥🟦","🟦🟥🟥🟦🟦🟦🟥🟦🟥"],"🟥🟥🟦🟥🟥🟦🟥🟥🟦","✅")
    ],"This is a color pattern: red, red, blue repeats over and over. R, R, B repeats over and over. The colors and letters make the same pattern.",{readingId:"pattern"}),
    math("Lesson 35 · Word Bank","pattern · repeats",[
      choice("pattern","Red, red, blue, red, red, blue… This is a color ___.",["pattern","graph","number line"],"pattern","🎨"),
      choice("repeats","In a pattern, the same part ___ over and over.",["repeats","stops","adds"],"repeats","🔁")
    ],"Word Bank: pattern · repeats. Red, red, blue repeats.")
  ];
  registerQuiz({
    id:"math-lesson-35-pattern",
    uploadDate:"2026-10-26",
    subjectKey:"math",
    title:"Math – Lesson 35 (pattern)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"26/10/2026 · Lesson 35 · Color pattern · pattern, repeats · Homework check: Using Data from Picture Graphs",scoreByField:true,
      groups:groupsOf([["Homework check","Using Data from Picture Graphs · Favorite Seasons",1],["Lesson 35: Pattern","Color pattern · pattern · repeats",2]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-2610","Remember — Math Lesson 35",[
          "📅 Class Diary: 26/10/2026",
          "(26/10 · L35) Word Bank: pattern · repeats",
          "(26/10 · L35) This is a color pattern. Red, red, blue repeats over and over.",
          "(26/10 · L35) R, R, B repeats over and over. The colors and letters make the same pattern.",
          "(26/10 · L34) Use the picture graph to answer the questions: Summer 6 · Fall 4 · Winter 3 · Spring 5."
        ],"Lesson 35"),
        {id:"seasons",title:"Using Data from Picture Graphs",byline:"Homework check · Favorite Seasons",mode:"reference",images:[IMG("math-seasons-graph")],text:"Use the graph to answer the questions. Favorite Seasons: Summer, Fall, Winter, Spring."},
        {id:"pattern",title:"Color pattern",byline:"Math · Lesson 35",mode:"reference",images:[IMG("math-pattern-1"),IMG("math-pattern-2"),IMG("math-word-bank")],text:"This is a color pattern. Say the names of the colors. Red, red, blue. Red, red, blue. Red, red, blue.\nRed, red, blue repeats over and over.\nR, R, B repeats over and over. The colors and letters make the same pattern."}
      ]}
  });
})();
