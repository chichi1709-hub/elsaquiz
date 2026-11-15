// Quiz 13/11/2026 — Class Diary 13/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 (bài ngày hiện ở tab ngày + nằm trong DAILY_LA của quiz-summary-la-u2-w3-w4.js) ·
//   homework check Practice Book 134A–134B (sh/th/ng, depink) · EQ (diary ghi EQ tuần 3, dùng EQ tuần 4 theo sách) ·
//   Structural Analysis: video Syllable Smash (v8c_ZJEFfBE, phụ đề + storyboard), Wordwall 11209624 Open & Closed Syllables ·
//   Oral Vocabulary: leadership, admire, connections, enjoy, rely (định nghĩa nguyên văn) · Reread "Thump Thump Helps Out" + RWC 132–133 ·
//   Reread "Nell's Books" + RWC 138 · Close Reading: Listening Comprehension — Aesop's Fables (video TPdr2F2-dic, đọc phụ đề).
// Science: Unit 2 Module 1 · Module Wrap-up (Student Book page 71) + game Wordwall 123817218 "Animal behaviors review" (10 câu nguyên văn,
//   đã đối chiếu với game thật). Bộ tổng hợp cả Module: quiz-summary-sci-u2m1.js.
// Wellbeing: Unit 1.5 Lesson 2 Our community · video Sesame 3BMAW6eYRAA (đọc phụ đề) · Wellbeing Book page 35.
// Ảnh: web/assets/2026-11-13/ (tạo bằng web/_reference/tao_anh_2026-11-13.py).
(()=>{
  const IMG=name=>`assets/2026-11-13/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const draw=(id,label,icon)=>({id,label,type:"draw",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="13/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const DG3=["sh","th","ng"],OC=["Open syllable","Closed syllable"];
  const VOC=["leadership","admire","connections","enjoy","rely"];
  const DEF={
    leadership:"Leadership is the ability to guide a group of people or the action of leading others.",
    admire:"When you admire someone, you approve of and like that person.",
    connections:"Connections are links between two or more things.",
    enjoy:"If you enjoy something, you like it.",
    rely:"When you know you can trust someone to help, you rely on that person."};
  const NOTEBOOK=[["leadership","Ronaldo shows great ___."],["admire","I ___ my mom."],["enjoy","We ___ playing tag."],["connections","Friends have good ___."],["rely","I ___ on my parents."]];
  const ROBERT="Danny the dragon loves to dance. It is so much fun! He swings his arms and kicks his feet. He is very talented.";
  const NELL_NEXT="Nell might open a book shop to sell her new books.";
  const LA_Q=[
    la("Homework check · Phonics: Words with sh, th, ng (Practice Book 134A–134B)","Read the words in the box. Then sort the words: Words with sh · Words with th · Words with ng.",[
      pic(select("ship","ship",DG3,"sh","🚢"),IMG("la-pb134a")),
      select("sing","sing",DG3,"ng","🎤"),
      select("with","with",DG3,"th","🤝"),
      pic(select("fish","fish",DG3,"sh","🐟"),IMG("la-pb134b")),
      select("sang","sang",DG3,"ng","🎵"),
      select("sixth","sixth",DG3,"th","6️⃣"),
      select("thick","thick",DG3,"th","📚"),
      select("shop","shop",DG3,"sh","🏪"),
      multi("thing","thing has TWO letter teams. Which two? Choose 2.",["th","ng","sh"],["th","ng"],"🧩")
    ],"Words with sh: ship · shop · fish. Words with th: with · sixth · thick. Words with ng: sing · sang. thing has th and ng, so it can go in both lists.",{readingId:"pb134"}),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we read “Thump Thump Helps Out” (Thump Thump thumps to bring help), “Nell’s Books” (the friends make a bookmobile so Nell can hand out books to all) and the Big Book about Martin Luther King Jr. Hint: help · community. So what is the Essential Question of Week 4?",[EQ,"How can weather change?","What do we know about the sky?"],EQ,"❓")
    ],"Essential Question of Week 4: "+EQ),
    la("Structural Analysis · Video: Syllable Smash (Silly Bull)","Watch the video. Choose the answer.",[
      choice("beat","Every word has a beat. Each beat is called a ___.",["syllable","digraph","vowel"],"syllable","🥁"),
      choice("chin","Put a hand under your chin and say a word loud and clear. What do you count?",["the times your mouth opens","the letters in the word","the words in the song"],"the times your mouth opens","✋"),
      select("syl","The video splits syllable into chunks: syl / la / ble. How many syllables?",["1","2","3"],"3","🎸")
    ],"Split a word into chunks, then build the chunks back up again. Each chunk is a beat, and we call it a syllable. Put a hand under your chin, say the word, and count the times your mouth opens: syl / la / ble = 3 syllables."),
    la("Structural Analysis · Game: Open & Closed Syllables","Is it an open syllable or a closed syllable?",[
      select("go","go",OC,"Open syllable","🔓"),
      select("she","she",OC,"Open syllable","🔓"),
      select("hi","hi",OC,"Open syllable","🔓"),
      select("soft","soft",OC,"Closed syllable","🚪"),
      select("shell","shell",OC,"Closed syllable","🚪"),
      select("help","help",OC,"Closed syllable","🚪")
    ],"Open Syllable: go · so · no · she · he · be · we · hi · I · me. Closed Syllable: gob · soft · not · shell · help · beg · welt · hick · ill · melt."),
    la("Oral Vocabulary · Define","Choose the word that matches the meaning.",[
      select("v-leadership","___ is the ability to guide a group of people or the action of leading others.",VOC.map(w=>w[0].toUpperCase()+w.slice(1)),"Leadership","🏆"),
      select("v-admire","When you ___ someone, you approve of and like that person.",VOC,"admire","🌟"),
      select("v-connections","___ are links between two or more things.",VOC.map(w=>w[0].toUpperCase()+w.slice(1)),"Connections","🔗"),
      select("v-enjoy","If you ___ something, you like it.",VOC,"enjoy","😊"),
      select("v-rely","When you know you can trust someone to help, you ___ on that person.",VOC,"rely","🤝")
    ],Object.values(DEF).join(" ")),
    {...la("Oral Vocabulary · Notebook (13/11/2026)","Complete our notebook sentences. Use the Word Bank.",
      NOTEBOOK.map(([w,s],i)=>select(`nb-${w}`,`${i+1}) ${s}`,VOC,w,"📒")),
      NOTEBOOK.map(([w,s],i)=>`${i+1}) ${s.replace("___",w)}`).join(" ")),wordBank:VOC},
    la("Writing and Grammar · Write About the Shared Read (RWC 132–133)","Reread “Thump Thump Helps Out” (RWC page 116). Write about an animal character who has a funny habit. Read what Robert wrote: “"+ROBERT+"”",[
      pic(choice("who","Who is the animal character in Robert’s writing?",["Danny the dragon","Thump Thump the rabbit","Nell the elephant"],"Danny the dragon","🐉"),IMG("la-rwc-133")),
      choice("habit","What is Danny’s funny habit?",["He loves to dance.","He loves to thump.","He loves to read books."],"He loves to dance.","💃"),
      fixed("begin","Underline the beginning blue. Which sentence is the beginning?",["Danny the dragon loves to dance.","He swings his arms and kicks his feet.","He is very talented."],"Danny the dragon loves to dance.","🔵"),
      fixed("end","Underline the ending green. Which sentence is the ending?",["He is very talented.","Danny the dragon loves to dance.","It is so much fun!"],"He is very talented.","🟢"),
      fixed("proper","Circle one proper noun in the first sentence: “Danny the dragon loves to dance.”",["Danny","dragon","dance"],"Danny","🔴"),
      fixed("common","Circle one common noun in the first sentence: “Danny the dragon loves to dance.”",["dragon","Danny","loves"],"dragon","⭕"),
      choice("mark","Draw boxes around the punctuation marks. Which sentence ends with an exclamation mark (!)?",["It is so much fun!","He is very talented.","Danny the dragon loves to dance."],"It is so much fun!","❗"),
      choice("notice","Write what you notice about Robert’s writing.",["Robert used common and proper nouns.","Robert did not use any nouns.","Robert wrote about a real boy."],"Robert used common and proper nouns.","📝")
    ],"Robert’s student model: "+ROBERT+" Beginning (blue): Danny the dragon loves to dance. Ending (green): He is very talented. Proper noun: Danny. Common noun: dragon. Robert used common and proper nouns.",{readingId:"rwc133"}),
    la("Grammar · Common and Proper Nouns","Read the Grammar box on page 132.",[
      fixed("lower","Common nouns name general people, places, or things and begin with a ___ letter.",["lowercase","capital"],"lowercase","🔡"),
      fixed("capital","Proper nouns name specific people, places, or things and begin with a ___ letter.",["capital","lowercase"],"capital","🔠")
    ],"Common nouns name general people, places, or things and begin with a lowercase letter. Proper nouns name specific people, places, or things and begin with a capital letter."),
    la("Writing and Grammar · Write About the Anchor Text (RWC 138)","Reread “Nell’s Books” (Literature Anthology, page 68). My Goal: I can respond to a fantasy story by extending the story.",[
      pic(choice("next","Extend the story to tell what Nell might do next. Which answer did our class write?",[NELL_NEXT,"Nell might stop reading books.","Nell might throw her books away."],NELL_NEXT,"📚"),IMG("la-rwc-138")),
      multi("remember","Remember: what must your writing have? Choose 3.",["Include a beginning, middle, and end.","End each sentence with a punctuation mark.","Use common and proper nouns correctly.","Write only one word.","Start every word with a capital letter."],["Include a beginning, middle, and end.","End each sentence with a punctuation mark.","Use common and proper nouns correctly."],"✅"),
      free("write","Write your own idea: what might Nell do next?","✏️")
    ],"Our class wrote: "+NELL_NEXT+" Remember: include a beginning, middle, and end · end each sentence with a punctuation mark · use common and proper nouns correctly.",{readingId:"rwc138"}),
    la("Close Reading · Listening Comprehension · The Grasshopper and the Ants","Listen to the story (Aesop’s Fables). Choose the answer.",[
      choice("ants","What are the ants doing all summer?",["They are gathering food for winter.","They are dancing and playing.","They are sleeping late."],"They are gathering food for winter.","🐜"),
      choice("grass","What does Grasshopper do all summer?",["He sleeps late, dances and plays.","He gathers food for winter.","He builds a home."],"He sleeps late, dances and plays.","🦗"),
      choice("winter","Winter comes. Grasshopper cannot find food. What do the ants do?",["They share their food with him.","They laugh and send him away.","They go to sleep."],"They share their food with him.","❄️"),
      choice("spring","Spring arrives. What does Grasshopper do now?",["He goes to gather food for winter.","He sleeps all day.","He dances all spring."],"He goes to gather food for winter.","🌱")
    ],"The ants work all summer to gather food for winter. Grasshopper sleeps late, dances and plays. In winter he cannot find food, so the ants share their food with him. He learns a lesson: in spring he goes to gather food for winter."),
    la("Close Reading · Listening Comprehension · The Tortoise and the Hare","Listen to the story (Aesop’s Fables). Choose the answer.",[
      choice("why","Why do the Tortoise and the Hare have a race?",["The winner can decide who gets to use the path.","The winner gets a big carrot.","They want to see the lake."],"The winner can decide who gets to use the path.","🛤️"),
      choice("judge","Who is the judge of the race?",["the fox","the crow","the ant"],"the fox","🦊"),
      choice("hare","What does the Hare do in the middle of the race?",["He stops for a snack and falls asleep.","He helps the Tortoise.","He runs around the lake two times."],"He stops for a snack and falls asleep.","🥕"),
      choice("win","Who wins the race?",["the Tortoise","the Hare","the fox"],"the Tortoise","🐢")
    ],"The Hare says the path is for speedy runners, so they race to decide who gets to use the path. The fox is the judge. The Hare stops to eat carrots and falls asleep. The Tortoise keeps walking at the same steady pace and wins. Slow and steady can win the race."),
    la("Close Reading · Listening Comprehension · The Fox and the Crow","Listen to the story (Aesop’s Fables). Choose the answer.",[
      choice("cheese","What is Crow holding in her beak?",["a big piece of cheese","a shiny gold coin","a green leaf"],"a big piece of cheese","🧀"),
      choice("trick","How does Fox get the cheese?",["He says nice things and asks Crow to sing. She opens her beak and the cheese falls.","He climbs the tree and takes it.","Crow shares the cheese with him."],"He says nice things and asks Crow to sing. She opens her beak and the cheese falls.","🎶"),
      choice("advice","What advice does Fox give Crow?",["Don’t trust those who flatter you.","Always sing in the morning.","Share your food with friends."],"Don’t trust those who flatter you.","💡")
    ],"Crow holds a big piece of cheese in her beak. Fox says her feathers and eyes are beautiful and asks her to sing. When Crow opens her beak, the cheese falls and Fox eats it. Fox says: don’t trust those who flatter you.")
  ];
  registerQuiz({
    id:"class-diary-2026-11-13-language",
    uploadDate:"2026-11-13",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"13/11/2026 · Unit 2 Week 4 · sh, th, ng · Open & closed syllables · Oral vocabulary · Writing and Grammar · Aesop’s Fables",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 134A–134B · sh, th, ng",1],["Build Background","Essential Question",1],["Structural Analysis","Syllable Smash · open and closed syllables",2],["Oral Vocabulary","leadership · admire · connections · enjoy · rely",2],["Writing and Grammar","Thump Thump Helps Out · Robert’s writing · common and proper nouns · Nell’s Books",3],["Close Reading","Aesop’s Fables",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1311","Remember — Language Arts",[
          "📅 Class Diary: 13/11/2026",
          "(13/11) Essential Question: "+EQ,
          "(13/11) Homework check: Practice Book, pages 134A and 134B.",
          "(13/11) Words with sh: ship · shop · fish · Words with th: with · sixth · thick · Words with ng: sing · sang · thing (th + ng)",
          "(13/11) Structural Analysis: each beat in a word is called a syllable. syl / la / ble",
          "(13/11) Open Syllable: go · so · no · she · he · be · we · hi · I · me",
          "(13/11) Closed Syllable: gob · soft · not · shell · help · beg · welt · hick · ill · melt",
          ...VOC.map(w=>`(13/11) ${w[0].toUpperCase()+w.slice(1)}: ${DEF[w]}`),
          "(13/11) Notebook: Ronaldo shows great leadership. · I admire my mom. · We enjoy playing tag. · Friends have good connections. · I rely on my parents.",
          "(13/11) Reread the story “Thump Thump Helps Out” (Reading and Writing Companion Book, page 116).",
          "(13/11) Common nouns name general people, places, or things and begin with a lowercase letter.",
          "(13/11) Proper nouns name specific people, places, or things and begin with a capital letter.",
          "(13/11) Robert’s writing: Danny the dragon loves to dance. Robert used common and proper nouns.",
          "(13/11) Reread the story “Nell’s Books” (Literature Anthology Book, page 68). "+NELL_NEXT,
          "(13/11) Close Reading: Aesop’s Fables — The Grasshopper and the Ants · The Tortoise and the Hare · The Miser and His Gold · The Fox and the Crow",
          "(13/11) Homework: Practice Book, pages 132 and 134."
        ],"Unit 2 Week 4"),
        {id:"pb134",title:"Practice Book 134A–134B · sh, th, ng",byline:"Homework check · Class Diary 13/11",mode:"reference",images:[IMG("la-pb134a"),IMG("la-pb134b")],
          text:"A. Read the words in the box. Then sort the words.\nship · sing · shop · with\nfish · sang · ship · shop · sixth · thick · thing · with\nB. Think of new words to add to the chart."},
        {id:"rwc133",title:"Write About the Shared Read",byline:"Reading and Writing Companion 132–133 · Thump Thump Helps Out",mode:"reference",images:[IMG("la-rwc-133")],
          text:"Write about an animal character who has a funny habit. Read what Robert wrote.\n"+ROBERT+"\nTalk about Robert’s story. Underline the beginning blue. Underline the middle orange. Underline the ending green.\nCircle one common noun and one proper noun in the first sentence.\nDraw boxes around the punctuation marks.\nWrite what you notice about Robert’s writing."},
        {id:"rwc138",title:"Write About the Anchor Text",byline:"Reading and Writing Companion 138 · Nell’s Books",mode:"reference",images:[IMG("la-rwc-138")],
          text:"Extend the story to tell what Nell might do next.\nRemember:\nInclude a beginning, middle, and end.\nEnd each sentence with a punctuation mark.\nUse common and proper nouns correctly."},
        bonus("bonus-la-1311",[
          {label:"Close Reading: Aesop’s Fables (Little Fox)",url:"https://www.youtube.com/watch?v=TPdr2F2-dic"},
          {label:"Video: Syllable Smash (Silly Bull)",url:"https://www.youtube.com/watch?v=v8c_ZJEFfBE&t=2s"},
          {label:"Game: Open & Closed Syllables",url:"https://wordwall.net/resource/11209624/reading/open-closed-syllables"},
          {label:"Video: Thump Thump Helps Out",url:"https://www.youtube.com/watch?v=WmjIStt45Kk"},
          {label:"Video: Nell’s Books",url:"https://www.youtube.com/watch?v=jvfgUSXTmEw"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Unit 2 Module 1 · Module Wrap-up ─────────────────────────
  // Game Wordwall 123817218 (Quiz, 10 câu): câu hỏi + 2 đáp án lấy nguyên văn từ content-model JSON (chỉ viết hoa chữ đầu, sửa "flase").
  const GAME=window.SCI_WRAPUP_GAME=[
    ["What is a signal?","a sound or movement that gives information","a sound or information that gives movement","📣"],
    ["What is behaviour?","the way an animal acts or does something","the way an animal learns","🐾"],
    ["What is learn?","to gain knowledge or information","to gain food","📘"],
    ["Where do animals learn behavior from?","their parents","youtube","👪"],
    ["True or false? Some animals are born already knowing some behavior.","true","false","🐣"],
    ["Baby whales are born already knowing how to …?","swim","find food","🐋"],
    ["What are the 4 animal behaviours?","taking care, feeding, protecting and teaching","taking care, feeding, protecting and sleeping","4️⃣"],
    ["What is grooming?","cleaning","eating","🪮"],
    ["What animal behaviour would a polar bear have to learn?","hunting","sleeping","🐻‍❄️"],
    ["Baby birds will do what when they are ready to eat?","make a noise and open their mouth","make a noise and fall asleep","🐦"]];
  const SCI_Q=[
    sci("Module Wrap-Up · Rediscover the Phenomenon","Student Book, page 71. What keeps these animals safe? Look at your project to help you answer the question.",[
      pic(choice("safe","The armadillo has a hard shell. What does the shell do for the armadillo?",["It keeps the armadillo safe.","It helps the armadillo fly.","It helps the armadillo swim fast."],"It keeps the armadillo safe.","🛡️"),IMG("sci-wrap-up-71")),
      choice("project","Look at your project: our protective gear. How is it like the armadillo’s shell?",["It protects a body part and keeps us safe.","It helps us eat.","It makes us run faster."],"It protects a body part and keeps us safe.","⛑️"),
      draw("draw","What keeps these animals safe? Draw a picture.","🖍️")
    ],"What keeps these animals safe? The armadillo has a shell, and a shell protects the animal’s body. Our protective gear also protects at least one body part to keep the players safe. Protection keeps things safe from harm."),
    sci("Module Wrap-Up · Play the game: Animal behaviors review","Wordwall quiz · 10 questions. Choose the correct answer.",
      GAME.map(([q,a,b,icon],i)=>choice(`g${i+1}`,q,[a,b],a,icon)),
      GAME.map(([q,a])=>`${q} → ${a}`).join(" · "))
  ];
  registerQuiz({
    id:"class-diary-2026-11-13-science",
    uploadDate:"2026-11-13",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"13/11/2026 · Unit 2 Module 1 · Module Wrap-up · Game: Animal behaviors review · Module 1 Test in the next lesson",scoreByField:true,
      groups:groupsOf([["Module Wrap-Up","Rediscover the Phenomenon · page 71",1],["Play the game","Animal behaviors review",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1311","Remember — Science",[
          "📅 Class Diary: 13/11/2026",
          "(13/11) Unit 2 Module 1 · Module Wrap-up (Student Book, page 71)",
          "(13/11) Rediscover the Phenomenon: What keeps these animals safe? Draw a picture. Look at your project to help you answer the question.",
          "(13/11) Game: a signal is a sound or movement that gives information. Behaviour is the way an animal acts or does something.",
          "(13/11) Animals learn behavior from their parents. Some animals are born already knowing some behavior: baby whales can swim.",
          "(13/11) The 4 animal behaviours: taking care, feeding, protecting and teaching. Grooming is cleaning.",
          "(13/11) A polar bear has to learn hunting. Baby birds make a noise and open their mouth when they are ready to eat.",
          "(13/11) Review Module 1 for the test in the next lesson."
        ],"Unit 2 Module 1"),
        bonus("bonus-sci-1311",[{label:"Play the game: Animal behaviors review",url:"https://wordwall.net/resource/123817218/khoa-h%E1%BB%8Dc/animal-behaviors-review"}])
      ]}
  });

  // ───────────────────────── WELLBEING · Unit 1.5 · Lesson 2 Our community ─────────────────────────
  const HELP=["Donate old books and toys.","Save water at home and school.","Clean up our community."];
  const WB_Q=[
    wb("Unit 1.5 · Lesson 2 Our community","What do you know?",[
      choice("lesson","In Lesson 2 we talked about my family, my class, my school and my city, and how we can help: donate old books and toys, save water, clean up. So Lesson 2 is called ___.",["Our community","Falling out","People who love me"],"Our community","🏘️"),
      multi("belong","I belong to… my communities. Choose 4.",["My family","My class","My school","My city","My toy box","My bed"],["My family","My class","My school","My city"],"👪"),
      choice("school","Bonus: What is the name of our school?",["Alaska Academy","Pond School","Camp Playland"],"Alaska Academy","⭐")
    ],"Lesson 2: Our community. I belong to my communities: my family, my class, my school and my city. Our school is Alaska Academy."),
    wb("Helping Our Community","How can we help people in our community?",[
      multi("help","Which are ways to help our community? Choose 3.",[...HELP,"Leave rubbish in the park.","Leave the water running."],HELP,"🤲"),
      select("books","The children put old books and toys in boxes for other children. How are they helping?",HELP,HELP[0],"📦"),
      select("water","The girl turns off the tap after she washes her hands. How is she helping?",HELP,HELP[1],"🚰"),
      select("clean","The children pick up rubbish in the park. How are they helping?",HELP,HELP[2],"🧹")
    ],"Helping our community: donate old books and toys · save water at home and school · clean up our community."),
    wb("Video: Helping at Home, Helping the Neighborhood","Watch the video (Sesame Workshop). Choose the answer.",[
      choice("reuse","Julia helped clean old plastic containers. Why?",["To reuse them for art class at the community center.","To throw them away.","To play with the dog."],"To reuse them for art class at the community center.","🫙"),
      choice("tap","What can we do when we are done using water?",["Turn the water off.","Leave the water on.","Play with the water."],"Turn the water off.","🚿"),
      choice("lights","Why do we turn off the lights when no one is in a room?",["It helps us save electricity.","It makes the room warm.","It wakes up the dog."],"It helps us save electricity.","💡"),
      choice("donate","Which is another way to show kindness to others?",["Donate clean clothes you have outgrown or toys you no longer play with.","Keep all your old toys in a box forever.","Waste water and electricity."],"Donate clean clothes you have outgrown or toys you no longer play with.","👕"),
      choice("julia","What did Julia do to make her neighbor feel really great?",["She painted a picture.","She baked a cake.","She sang a song."],"She painted a picture.","🎨")
    ],"Reusing old containers is kind to our community and the environment. Turn the water off when you are done. Turn off the lights when no one is in a room to save electricity. Donating clean clothes or toys shows kindness to others. Julia painted a picture for the neighbor. Being kind and caring to others and the environment helps make our community beautiful.",{readingId:"wbSlides"}),
    wb("Wellbeing Book · page 35","Activity 5.2a Our community project. Design a project which can help people. Look at our class ideas.",[
      free("who","Who would you like to help? Write your answer.","🙋"),
      free("how","How could you help the community? Write your idea.","✏️"),
      draw("draw","What might your project look like? Draw a picture of it.","🖍️")
    ],"Who would you like to help? People in my community. How could you help the community? Donating old books and toys. · Saving water at home and school. · Cleaning up our community.",{readingId:"wbPage35"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-13-wellbeing",
    uploadDate:"2026-11-13",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"13/11/2026 · Unit 1.5 · Lesson 2 Our community",scoreByField:true,
      groups:groupsOf([["Our community","Lesson 2 · My communities",1],["Helping Our Community","donate · save water · clean up",1],["Video","Helping at Home, Helping the Neighborhood",1],["Wellbeing Book","page 35 · Our community project",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-1311","Remember — Wellbeing",[
          "📅 Class Diary: 13/11/2026",
          "(13/11) Unit 1.5 · Lesson 2: Our community",
          "(13/11) What is a community? How can we help people in our community? How can we help our neighbourhood?",
          "(13/11) I belong to… My communities: My family · My class · My school · My city",
          "(13/11) Helping Our Community: Donate old books and toys. · Save water at home and school. · Clean up our community.",
          "(13/11) Video: turn the water off · turn off the lights to save electricity · donate clothes and toys · be kind and caring to others and the environment.",
          "(13/11) Homework: Wellbeing Book, page 35 (if you haven’t finished yet)."
        ],"Unit 1.5"),
        {id:"wbSlides",title:"Our Community",byline:"Wellbeing · Unit 1.5 Lesson 2",mode:"reference",images:[IMG("wb-our-community"),IMG("wb-my-communities"),IMG("wb-helping-community")],text:"What is a community?\nHow can we help people in our community?\nHow can we help our neighbourhood?\nI belong to… My communities: My family · My class · My school · My city\nHelping Our Community: Donate old books and toys. · Save water at home and school. · Clean up our community."},
        {id:"wbPage35",title:"Wellbeing Book page 35",byline:"Activity 5.2a Our community project",mode:"reference",images:[IMG("wb-page-35")],text:"Design a project which can help people. Think about these questions.\nWho would you like to help?\nHow could you help the community?\nWhat might your project look like? Draw a picture of it below."},
        bonus("bonus-wb-1311",[{label:"Video: Helping at Home, Helping the Neighborhood",url:"https://www.youtube.com/watch?v=3BMAW6eYRAA&t=5s"}])
      ]}
  });
})();
