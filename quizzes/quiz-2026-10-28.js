// Quiz 28/10/2026 — Class Diary 28/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together?) · homework check Practice Book 121–122 (-ing) ·
// Shared Read: reread "The Best Spot" (author's purpose, page 97 cont.) · Writing and Grammar (pages 98–99, Ben's student model) ·
// Phonics: end blends nd, sk, st, nk · Phonemic Awareness: phoneme blending (Practice Book 114) · HFW eat, no, of, under, who ·
// Structural Analysis: inflectional ending -ing (Let's Review).
// Math: Lesson 36 (predict what comes next in a pattern) + homework check Lesson 35 (Describing Patterns).
// Wellbeing: Unit 1.4 Lesson 2b · Is it OK to be different? (bài thơ "I'm Glad I'm Me" của Jack Prelutsky không chép lại — chỉ hỏi ý chính).
// Science: diary chỉ ghi "Unit 2 Module 1 Lesson 2", không có nội dung → không làm quiz.
// Ảnh: web/assets/2026-10-28/ (tạo bằng web/_reference/tao_anh_2026-10-28.py); ảnh truyện dùng lại web/assets/2026-10-26/.
(()=>{
  const IMG=name=>`assets/2026-10-28/${name}.webp`,BS=name=>`assets/2026-10-26/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 28/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["eat","no","of","under","who"];
  const BLEND=["nd","nt","nk","sk","st"];
  const ING_RULE="Remember: Adding ‘ing’ to the end of a verb means that it is happening right now.";

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Background · Where do animals live together?","Re-introduce the Essential Question.",[
      choice("eq","This week we read “The Best Spot”: deer, a rabbit, birds, wasps, ants, foxes, and a skunk all live together in a forest. So what is the Essential Question of this week?",["Where do animals live together?","What jobs need to be done in a community?","What buildings do you know? What are they made of?"],"Where do animals live together?","❓")
    ],"Essential Question: Where do animals live together?"),
    la("Homework check · Add -ing (Practice Book 121)","Add the ending -ing to an action word to tell what is happening now. jump → jumping",[
      choice("pack","pack + ing = ___",["packing","packs","pack ing"],"packing","🎒"),
      choice("help","help + ing = ___",["helping","helps","helpping"],"helping","🤝"),
      choice("ask","ask + ing = ___",["asking","asks","askking"],"asking","🙋"),
      choice("bag","Use a word you wrote above: She is ___ a bag.",["packing","helping","asking"],"packing","👜")
    ],"pack + ing = packing · help + ing = helping · ask + ing = asking · She is packing a bag."),
    la("Homework check · Circle the word (Practice Book 122)","Circle the word that completes each sentence.",[
      select("jen","Jen is ___ bricks.",["stacks","stacking"],"stacking","🧱"),
      select("cars","The cars are ___.",["honking","honk"],"honking","🚗"),
      select("russ","Russ is ___.",["plants","planting"],"planting","🌱"),
      select("lex","My dog Lex ___ in his bed.",["rests","resting"],"rests","🐶"),
      select("dad","Dad ___ with Ben in a tent.",["camping","camps"],"camps","⛺")
    ],"Jen is stacking bricks. · The cars are honking. · Russ is planting. · My dog Lex rests in his bed. · Dad camps with Ben in a tent. (After “is” / “are” we use the word with -ing.)"),
    la("Shared Read · Author’s purpose (page 97, cont.)","Reread “The Best Spot”. Use the clues from the photos and the text.",[
      choice("photo","Clue from the photos: Look at the ants. The ants are ___.",["working","sleeping","swimming"],"working","📷"),
      choice("text","Clue from the text: Ants pick up ___ and grass.",["twigs","fish","cake"],"twigs","📝"),
      choice("purpose","The photos and the text give facts about real animals in a forest. So what is the author’s purpose?",["To teach us about animals in the forest.","To tell a funny made-up story about a fox.","To teach us how to cook."],"To teach us about animals in the forest.","🌲")
    ],"Clues from the photos: The ants are working. Clues from the text: Ants pick up twigs and grass. Author’s purpose: To teach us about animals in the forest.",{readingId:"bestspot"}),
    la("Writing and Grammar · Write About the Shared Read (pages 98–99)","Write about an animal you see in your neighborhood. Read what Ben wrote: “Squirrels are interesting animals. They are small and fluffy. They live in trees. A squirrel’s favorite food is nuts.”",[
      choice("topic","Talk about details Ben used. Underline the topic. What is the topic?",["Squirrels","trees","nuts"],"Squirrels","🐿️"),
      multi("details","Which details did Ben use? Choose 3.",["They are small and fluffy.","They live in trees.","A squirrel’s favorite food is nuts.","They live in the ocean.","They can fly."],["They are small and fluffy.","They live in trees.","A squirrel’s favorite food is nuts."],"🔎"),
      choice("poss","Circle the possessive noun. Which word is the possessive noun?",["squirrel’s","Squirrels","trees"],"squirrel’s","⭕"),
      choice("one","“A squirrel’s favorite food is nuts.” The word squirrel’s tells about ___.",["one squirrel","more than one squirrel"],"one squirrel","1️⃣"),
      choice("rule1","Grammar: A possessive noun that tells about one thing ends with ___.",["’s","s’"],"’s","✏️"),
      choice("rule2","Grammar: A possessive noun that tells about more than one thing ends with ___.",["s’","’s"],"s’","✏️"),
      choice("capital","Draw a box around the capital letters in each sentence. Why do “Squirrels”, “They”, and “A” start with a capital letter?",["They are the first word in the sentence.","They are the last word in the sentence.","They are names of animals."],"They are the first word in the sentence.","🔠"),
      choice("notice","Write what you notice about Ben’s writing. I noticed…",["Ben uses a possessive noun to talk about squirrels.","Ben writes about fish in the sea.","Ben does not use capital letters."],"Ben uses a possessive noun to talk about squirrels.","💬"),
      free("mine","Write about an animal you see in your neighborhood.","📝")
    ],"Topic: Squirrels. Details: They are small and fluffy. They live in trees. A squirrel’s favorite food is nuts. Grammar: A possessive noun that tells about one thing ends with ’s. A possessive noun that tells about more than one thing ends with s’. Each sentence starts with a capital letter. Ben uses a possessive noun to talk about squirrels.",{readingId:"writing"}),
    la("Phonics · End Blends nd, sk, st, nk","Say the word. Listen to the last two sounds.",[
      {...select("pond","What is this? It is a pond. /p/ /o/ /n/ /d/. Which end blend?",BLEND,"nd","🪷"),img:IMG("blend-pond"),bigImg:true},
      {...select("mint","What is this? It is mint. /m/ /i/ /n/ /t/. Which end blend?",BLEND,"nt","🌿"),img:IMG("blend-mint"),bigImg:true},
      {...select("pink","What color is it? It is pink. /p/ /i/ /n/ /k/. Which end blend?",BLEND,"nk","🩷"),img:IMG("blend-pink"),bigImg:true},
      {...select("desk","What is this? It is a desk. /d/ /e/ /s/ /k/. Which end blend?",BLEND,"sk","🪑"),img:IMG("blend-desk"),bigImg:true}
    ],"pond /p/ /o/ /n/ /d/ (nd) · mint /m/ /i/ /n/ /t/ (nt) · pink /p/ /i/ /n/ /k/ (nk) · desk /d/ /e/ /s/ /k/ (sk)"),
    la("Phonemic Awareness · Phoneme Blending","Say the sounds in a word. Blend the sounds together and say the word: /k/ /ō/ /l/ /d/ → /kōōōld/, cold.",[
      choice("cold","/k/ /ō/ /l/ /d/ → ___",["cold","colt","gold"],"cold","🥶"),
      choice("brand","/b/ /r/ /a/ /n/ /d/ → ___",["brand","band","bran"],"brand","🏷️"),
      choice("stamp","/s/ /t/ /a/ /m/ /p/ → ___",["stamp","camp","step"],"stamp","📮"),
      choice("trust","/t/ /r/ /u/ /s/ /t/ → ___",["trust","rust","truck"],"trust","🤝"),
      choice("hand","/h/ /a/ /n/ /d/ → ___",["hand","had","hat"],"hand","✋"),
      choice("pond","/p/ /o/ /n/ /d/ → ___",["pond","pod","pot"],"pond","🪷"),
      choice("ant","/a/ /n/ /t/ → ___",["ant","an","at"],"ant","🐜"),
      choice("jump","/j/ /u/ /m/ /p/ → ___",["jump","jam","bump"],"jump","🦘"),
      choice("sand","/s/ /a/ /n/ /d/ → ___",["sand","sad","send"],"sand","🏖️"),
      choice("ask","/a/ /s/ /k/ → ___",["ask","as","mask"],"ask","🙋")
    ],"cold · brand · stamp · trust · hand · pond · ant · jump · sand · ask (Practice Book 114: hand, pond, ant, jump)"),
    la("High-Frequency Words · eat, no, of, under, who","Review: eat, no, of, under, who.",[
      select("eat","We will ___ dinner soon.",HFW,"eat","🍽️"),
      select("of","She has a bag ___ marbles.",HFW,"of","🔮"),
      select("under","Your shoes are ___ the chair.",HFW,"under","👟"),
      select("who","Do you know ___ called me?",HFW,"who","📞"),
      select("no","There is ___ school today.",HFW,"no","🏫")
    ],"We will eat dinner soon. · She has a bag of marbles. · Your shoes are under the chair. · Do you know who called me? · There is no school today."),
    la("Structural Analysis · Inflectional Ending -ing","Let’s Review! Look at the pictures. "+ING_RULE,[
      choice("rule","Adding ‘ing’ to the end of a verb means that it is happening ___.",["right now","yesterday","tomorrow"],"right now","⏰"),
      {...choice("climb","What is the monkey doing? It is ___ the tree.",["climbing","climb","climbs"],"climbing","🐒"),img:IMG("ing-climb"),bigImg:true},
      {...choice("eat2","What is the boy doing? He is ___ chicken.",["eating","eat","eats"],"eating","🍗"),img:IMG("ing-eat-chicken"),bigImg:true},
      {...choice("punch","What is the cat doing? It is ___ the bag.",["punching","punch","punches"],"punching","🥊"),img:IMG("ing-punch"),bigImg:true},
      {...choice("clean","What is Tom doing? Tom is ___ the house!",["cleaning","clean","cleans"],"cleaning","🧹"),img:IMG("ing-clean"),bigImg:true},
      {...choice("write","What are you doing? I am ___ the letter.",["writing","write","writes"],"writing","✉️"),img:IMG("ing-write"),bigImg:true}
    ],ING_RULE+" It is climbing the tree. · He is eating chicken. · It is punching the bag. · Tom is cleaning the house! · I am writing the letter.",{readingId:"ingreview"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-28-language",
    uploadDate:"2026-10-28",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"28/10/2026 · Unit 2 Week 3 · Inflectional ending -ing · The Best Spot: author’s purpose · Writing and Grammar · End blends · Phoneme blending · HFW",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question: Where do animals live together?",1],["Homework check","Practice Book 121–122 · -ing",2],["Shared Read: The Best Spot","Author’s purpose · page 97",1],["Writing and Grammar","Ben’s student model · pages 98–99",1],["Phonics","End blends nd, sk, st, nk",1],["Phonemic Awareness","Phoneme blending · Practice Book 114",1],["High-Frequency Words","eat · no · of · under · who",1],["Structural Analysis","Inflectional ending -ing",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2810","Remember — Language Arts",[
          "📅 Class Diary: 28/10/2026",
          "(28/10) Essential Question: Where do animals live together?",
          "(28/10) "+ING_RULE,
          "(28/10) The verbs with -ing show an action that is happening now: climbing · eating · punching · cleaning · writing",
          "(28/10) Author’s purpose: To teach us about animals in the forest. (Clue from the photos: The ants are working. Clue from the text: Ants pick up twigs and grass.)",
          "(28/10) Grammar: A possessive noun that tells about one thing ends with ’s. A possessive noun that tells about more than one thing ends with s’.",
          "(28/10) Ben uses a possessive noun to talk about squirrels: A squirrel’s favorite food is nuts.",
          "(28/10) Phonics: End Blends nd, sk, st, nk: pond · mint · pink · desk",
          "(28/10) Phoneme Blending: /k/ /ō/ /l/ /d/ → cold · brand · stamp · trust",
          "(28/10) High-frequency words: eat · no · of · under · who"
        ],"Unit 2 Week 3"),
        {id:"bestspot",title:"The Best Spot",byline:"Reread · Reading and Writing Companion pages 82–91 · Nonfiction",images:[BS("best-spot-cover"),BS("bs-ants"),BS("bs-ant-home")],text:"Ants live here, too. Ants pick up twigs and grass. Ants zip in and out. Ants have no rest! Ants dig under sand and grass.\nAuthor’s Purpose: Clues from the Photos → Clues from the Text → Author’s Purpose"},
        {id:"writing",title:"Write About the Shared Read",byline:"Writing and Grammar · Reading and Writing Companion pages 98–99",mode:"reference",images:[IMG("writing-squirrel"),IMG("writing-grammar-box")],text:"Write about an animal you see in your neighborhood. Read what Ben wrote.\nSquirrels are interesting animals. They are small and fluffy. They live in trees. A squirrel’s favorite food is nuts.\nTalk about details Ben used. Underline the topic. · Circle the possessive noun. · Draw a box around the capital letters in each sentence. · Write what you notice about Ben’s writing.\nQuick Tip: I noticed . . . · Ben used . . ."},
        {id:"ingreview",title:"Inflectional Ending -ing",byline:"Structural Analysis · Let’s Review!",mode:"reference",images:[IMG("ing-remember")],text:ING_RULE+"\nLook at the pictures and read the sentences."},
        bonus("bonus-la-2810",[
          {label:"Game: HFW – Unit 2, Week 3",url:"https://www.baamboozle.com/game/3735670"},
          {label:"Video: What Are You Doing? (verbs with -ing)",url:"https://www.youtube.com/watch?v=Dl8g2pZ82ME"},
          {label:"Game: Verbs ending -ing",url:"https://www.baamboozle.com/game/572397"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 36 (predict) ─────────────────────────
  const MATH_Q=[
    math("Homework check · Describing Patterns (Lesson 35)","Circle the pattern unit: the part that repeats.",[
      fixed("u1","🔹🔷🔷🔹🔷🔷🔹🔷🔷\nWhat is the pattern unit?",["🔹🔷🔷","🔹🔷","🔷🔷"],"🔹🔷🔷","1️⃣"),
      fixed("u2","🎁📦🎁📦🎁📦\nWhat is the pattern unit?",["🎁📦","🎁🎁","📦🎁📦"],"🎁📦","2️⃣"),
      fixed("u3","⬜🔺⬜🔺⬜🔺\nWhat is the pattern unit?",["⬜🔺","⬜⬜","🔺🔺⬜"],"⬜🔺","3️⃣"),
      fixed("u4","⭐🐟🏐⭐🐟🏐⭐🐟🏐\nWhat is the pattern unit?",["⭐🐟🏐","⭐🐟","🐟🏐"],"⭐🐟🏐","4️⃣"),
      fixed("journal","Journal: ⚾🏈🏀⚾🏈🏀\nWhich letters make the same pattern?",["A B C A B C","A B A B A B","A A B A A B"],"A B C A B C","5️⃣")
    ],"The pattern unit is the part that repeats: 🔹🔷🔷 · 🎁📦 · ⬜🔺 · ⭐🐟🏐. ⚾🏈🏀 ⚾🏈🏀 = A B C A B C."),
    math("Lesson 36 · Predict what comes next","You can predict what comes next in a pattern. When you predict, you tell what comes next.",[
      fixed("letters","🏢🏠🏢🏠🏢🏠 ___\nFind the part that repeats. Name each picture with a letter: 🏢 = A, 🏠 = B. What repeats?",["A, B","A, A","B, B"],"A, B","🔤"),
      fixed("first","A B A B A B ___\nA comes first, then B. What comes next?",["A","B"],"A","➡️"),
      fixed("next","🏢🏠🏢🏠🏢🏠 ___\nSo what comes next?",["🏢","🏠"],"🏢","🔮"),
      fixed("p1","🍎🍌🍌🍎🍌🍌🍎🍌 ___\nPredict: what comes next?",["🍌","🍎"],"🍌","🍌"),
      fixed("p2","🔴🟡🔵🔴🟡🔵🔴 ___\nPredict: what comes next?",["🟡","🔵","🔴"],"🟡","🎨"),
      fixed("p3","A B B A B B A ___\nPredict: what letter comes next?",["B","A"],"B","🔠")
    ],"Find the part that repeats. Name each picture with a letter. A comes first, then B. Then you see that A, B repeats. A comes next.",{readingId:"predict"}),
    math("Lesson 36 · Word Bank","predict",[
      choice("predict","When you ___, you tell what comes next.",["predict","add","count"],"predict","🔮")
    ],"Word Bank: predict. When you predict, you tell what comes next.")
  ];
  registerQuiz({
    id:"math-lesson-36-predict",
    uploadDate:"2026-10-28",
    subjectKey:"math",
    title:"Math – Lesson 36 (predict)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"28/10/2026 · Lesson 36 · Predict what comes next in a pattern · Homework check: Describing Patterns",scoreByField:true,
      groups:groupsOf([["Homework check","Describing Patterns · pattern unit",1],["Lesson 36: Predict","What comes next? · predict",2]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-2810","Remember — Math Lesson 36",[
          "📅 Class Diary: 28/10/2026",
          "(28/10 · L36) Word Bank: predict",
          "(28/10 · L36) You can predict what comes next in a pattern. When you predict, you tell what comes next.",
          "(28/10 · L36) Find the part that repeats. Name each picture with a letter. A comes first, then B. Then you see that A, B repeats. A comes next.",
          "(28/10 · L35) Describing Patterns: circle the pattern unit (the part that repeats)."
        ],"Lesson 36"),
        {id:"predict",title:"Predict what comes next",byline:"Math · Lesson 36",mode:"reference",images:[IMG("math-predict-1"),IMG("math-predict-2"),IMG("math-word-bank")],text:"You can predict what comes next in a pattern. When you predict, you tell what comes next.\nFind the part that repeats. Name each picture with a letter.\nA comes first, then B. Then you see that A, B repeats.\nA comes next."}
      ]}
  });

  // ───────────────────────── WELLBEING · Unit 1.4 Lesson 2b ─────────────────────────
  const AD=["Agree 🙂","Disagree 🙁"],SD=["Same for everyone","Can be different"];
  const WB_Q=[
    wb("Big Question · Is it OK to be different?","Today’s Big Question.",[
      choice("bq","In Lesson 2 we read a poem about being special, we played “Same or different?”, and we read “It’s OK!”: it’s OK to look different, to like different things, and to celebrate different days. So today’s Big Question is ___.",["Is it OK to be different?","Where do animals live together?","What jobs need to be done?"],"Is it OK to be different?","❓"),
      choice("yes","Is it OK to be different?",["Yes, it is OK to be different.","No, everyone must be the same."],"Yes, it is OK to be different.","🌈")
    ],"Big Question: Is it OK to be different? Yes! It’s OK to be different.",{readingId:"wbbq"}),
    wb("Poem · I’m Glad I’m Me","Read the poem “I’m Glad I’m Me” by Jack Prelutsky.",[
      choice("about","What do you think this poem is about?",["No one is just like me. I am special.","A dog that can fly.","How to cook dinner."],"No one is just like me. I am special.","📜"),
      multi("noone","In the poem, no one does these things the way I do. Choose 3.",["looks","walks","talks","sleeps all day"],["looks","walks","talks"],"🚶"),
      choice("special","“I am ___, I am Me.”",["special","sad","tired"],"special","⭐"),
      free("me","What makes you special?","💖")
    ],"The poem “I’m Glad I’m Me” (Jack Prelutsky): no one looks, walks, talks, or plays the way I do. I am special, I am Me."),
    wb("Same or different?","Do you think we are all different? How are we the same?",[
      select("ears","“I have ears.”",SD,"Same for everyone","👂"),
      select("hair","“I have long hair.”",SD,"Can be different","💇"),
      select("sushi","“I like sushi.”",SD,"Can be different","🍣"),
      choice("all","Do you think we are all different? How are we the same?",["We are all different, but we are the same in some ways.","We are all exactly the same.","We are all different in every way."],"We are all different, but we are the same in some ways.","🤝")
    ],"We all have ears (same). Long hair, liking sushi, having a pet… can be different. We are all different, but we are the same in some ways.",{readingId:"wbsame"}),
    wb("Read with me · It’s OK!","It’s OK!",[
      multi("ok","What is OK? Choose 3.",["It’s OK to look different.","It’s OK to like different things.","It’s OK to celebrate different days.","It’s OK to be unkind."],["It’s OK to look different.","It’s OK to like different things.","It’s OK to celebrate different days."],"✅")
    ],"It’s OK to look different. It’s OK to like different things. It’s OK to celebrate different days.",{readingId:"wbok"}),
    wb("Wellbeing Book page 29 · Activity 4.2b Is it ok to be different?","Look at the sentences below. Do you agree or disagree with them? Agree = smiley face 🙂 · Disagree = sad face 🙁",[
      select("s1","If people are different, they can’t be friends.",AD,"Disagree 🙁","👫"),
      select("s2","Being friends with someone who is different from you is interesting as you can learn about someone else’s life.",AD,"Agree 🙂","🌍"),
      select("s3","You should be unkind to people if they are different from you.",AD,"Disagree 🙁","💔"),
      select("s4","You don’t have to agree with your friends all the time.",AD,"Agree 🙂","💬")
    ],"Disagree: If people are different, they can’t be friends. · Agree: Being friends with someone who is different is interesting. · Disagree: You should be unkind to different people. · Agree: You don’t have to agree with your friends all the time. (Wellbeing Book, page 29)")
  ];
  registerQuiz({
    id:"class-diary-2026-10-28-wellbeing",
    uploadDate:"2026-10-28",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"28/10/2026 · Unit 1.4 Lesson 2b · Is it OK to be different? · I’m Glad I’m Me · Wellbeing Book page 29",scoreByField:true,
      groups:groupsOf([["Big Question","Is it OK to be different?",1],["Poem","I’m Glad I’m Me",1],["Same or different?","How are we the same?",1],["Read with me","It’s OK!",1],["Wellbeing Book page 29","Agree or disagree?",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-2810","Remember — Wellbeing",[
          "📅 Class Diary: 28/10/2026",
          "(28/10) Big Question: Is it OK to be different?",
          "(28/10) Poem: I’m Glad I’m Me (Jack Prelutsky) — I am special.",
          "(28/10) It’s OK to look different. It’s OK to like different things. It’s OK to celebrate different days.",
          "(28/10) Being friends with someone who is different from you is interesting as you can learn about someone else’s life."
        ],"Unit 1.4 · Lesson 2b"),
        {id:"wbbq",title:"Today’s Big Question",byline:"Wellbeing · Unit 1.4 Lesson 2b",mode:"reference",images:[IMG("wb-big-question")],text:"Is it OK to be different?"},
        {id:"wbsame",title:"Same or different?",byline:"Wellbeing · Think",mode:"reference",images:[IMG("wb-same-different")],text:"Do you think we are all different? How are we the same?"},
        {id:"wbok",title:"It’s OK!",byline:"Read with me",mode:"reference",images:[IMG("wb-its-ok")],text:"It’s OK to look different.\nIt’s OK to like different things.\nIt’s OK to celebrate different days."}
      ]}
  });
})();
