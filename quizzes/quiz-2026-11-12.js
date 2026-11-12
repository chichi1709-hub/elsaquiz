// Quiz 12/11/2026 — Class Diary 12/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 — user yêu cầu "riêng LA hãy tạo bài quiz tổng hợp cho unit 2 week 3 & 4": bài LA 12/11 chỉ làm NGUỒN,
// được gộp vào quiz-summary-la-u2-w3-w4.js (Review) và gỡ khỏi tab "Quiz theo ngày" (window.unregisterQuiz trong file tổng hợp).
// Nội dung: homework check Practice Book 142 (proper nouns) · EQ (diary ghi EQ tuần 3, dùng EQ tuần 4 theo sách) ·
// Structural Analysis: closed syllables (video 0QcPb5bku70 đọc storyboard, Wordwall 38491859) · Reread "Nell's Books" + RWC 135–137 ·
// Phonics: digraphs (video eUM94K5clyA đọc storyboard, slide Practice, Baamboozle 281844).
// Math: Lesson 40 Making Numbers 11 to 20 (slide trong diary; dạng linh động: ten-frame đôi vẽ bằng code, tapframe frames:2).
// Science: STEM Module Project · Design Protective Gear for a Sport · Presentation.
// Ảnh: web/assets/2026-11-12/ (tạo bằng web/_reference/tao_anh_2026-11-12.py); ảnh bìa Nell's Books dùng lại assets/2026-11-11/.
(()=>{
  const IMG=name=>`assets/2026-11-12/${name}.webp`;
  const L="assets/mascot/academy/language.webp",M="assets/mascot/academy/math.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const strict=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],strict:true,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),math=card(M),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="12/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const CLOSED="When a syllable ends in a consonant and has one vowel letter, the vowel sound is usually short. This is called a closed syllable.";
  const SORT=["closed syllable","not closed syllable"];
  const DG=["sh","th","ng","no digraph"];
  const FRIENDS_CHANGE="At first they do not like reading. Then they think reading is fun.";
  const LA_Q=[
    la("Homework check · Grammar: Proper Nouns (Practice Book 142)","A proper noun begins with a capital letter. Write each proper noun correctly.",[
      pic(strict("nick","nick is up. Write the proper noun correctly.","Nick","🧒"),IMG("la-pb142")),
      strict("seth","My pet cat is called seth. Write the proper noun correctly.","Seth","🐱"),
      strict("greg","I will ask greg to help me. Write the proper noun correctly.","Greg","🙋"),
      strict("frogpond","We have fun at frog pond. Write the proper noun correctly.","Frog Pond","🐸"),
      strict("camp","I go to camp playland. Write the proper noun correctly.","Camp Playland","🏕️")
    ],"Nick · Seth · Greg · Frog Pond · Camp Playland. Names of people, pets and places are proper nouns. A proper noun begins with a capital letter.",{readingId:"pb142"}),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we read “Thump Thump Helps Out” (the big rabbits help the bus), “Nell’s Books” (the friends make a bookmobile so Nell can hand out books to all) and the Big Book about Martin Luther King Jr. Hint: help · community. So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","How can weather change?"],EQ,"❓")
    ],"Essential Question of Week 4: "+EQ),
    la("Structural Analysis · Video: Learn Syllables with Silly Bull","Watch the video. Choose the answer.",[
      choice("vowels","Silly Bull shows the letters a, e, i, o, u. These letters are the ___.",["vowels","digraphs","end blends"],"vowels","🔤"),
      select("cactus","How many syllables are in cactus? (cac / tus)",["1","2","3"],"2","🌵"),
      select("important","How many syllables are in important? (im / por / tant)",["1","2","3"],"3","🍎")
    ],"Vowels: a, e, i, o, u. cactus → cac / tus (2 syllables). important → im / por / tant (3 syllables)."),
    la("Structural Analysis · Game: Closed syllable or not?",CLOSED,[
      select("hend","hend",SORT,"closed syllable","🚪"),
      select("gret","gret",SORT,"closed syllable","🚪"),
      select("hol","hol",SORT,"closed syllable","🚪"),
      select("ca","ca",SORT,"not closed syllable","🔓"),
      select("ode","ode",SORT,"not closed syllable","🔓"),
      select("kle","kle",SORT,"not closed syllable","🔓")
    ],"Closed syllable: hend · bliz · ness · hol · gret (one vowel, ends in a consonant). Not closed syllable: hein · kle · ode · ca · mire."),
    la("Anchor Text · Reread “Nell’s Books” · Reading and Writing Companion 135 (cont.)","Talk about what Nell is doing on pages 66–67. Write about clues from the story and pictures.",[
      pic(choice("know","I know that Nell ___.",["loves to read books","loves to play tennis","does not like books"],"loves to read books","📖"),IMG("la-rwc-135")),
      select("page","I found a clue in the story on page ___.",["67","72","77"],"67","🔍"),
      choice("alot","How do you know Nell likes to read a lot?",["The text and pictures show Nell read a lot.","The pictures show Nell in a truck.","The text says Nell is sick."],"The text and pictures show Nell read a lot.","💡")
    ],"I know that Nell loves to read books. I found a clue in the story on page 67. The text and pictures show Nell read a lot.",{readingId:"nell"}),
    la("Anchor Text · Reading and Writing Companion 136–137","Talk about how Nell’s friends feel about reading (pages 72–75) and what they say (pages 76–77).",[
      pic(choice("p72","Clues from pages 72–73: what do Nell’s friends say about reading?",["They say yuck and ick!","They say it’s fun!","They say thank you."],"They say yuck and ick!","🤢"),IMG("la-rwc-136-137")),
      choice("p74","Clues from pages 74–75: what do Nell’s friends say now?",["They say it’s fun!","They say yuck and ick!","They say go away."],"They say it’s fun!","😄"),
      choice("change","How do her friends’ feelings about reading change?",[FRIENDS_CHANGE,"At first they love reading. Then they do not like it.","They never read."],FRIENDS_CHANGE,"🔄"),
      choice("pictures","How do the pictures help you know her friends’ feelings about reading change?",["The pictures show them reading in the house.","The pictures show them playing in the rain.","The pictures show them sleeping."],"The pictures show them reading in the house.","🖼️"),
      choice("dog","Dog said: “___”",["We did this for you.","Will you shop with me?","That Nell is not fun at all."],"We did this for you.","🐶"),
      choice("cat","Cat said: “___”",["You can hand out books to all.","Ick!","Let’s set up a tent."],"You can hand out books to all.","🐱"),
      choice("truck","How does the dialogue help you know why Nell’s friends got her a truck?",["Nell is good at giving books to others.","Nell wants to drive to the shop.","Nell does not want to read."],"Nell is good at giving books to others.","🚚")
    ],"Pages 72–73: they say yuck and ick! Pages 74–75: they said it’s fun! The pictures show them reading in the house. Dog said: We did this for you. Cat said: You can hand out books to all. Nell is good at giving books to others.",{readingId:"nell"}),
    la("Phonics · Video: Digraphs ch, sh (Fish for Lunch)","Watch the video. Two letters make one new sound. Which letter team do you see?",[
      select("cheese","cheese",["ch","sh"],"ch","🧀"),
      select("chips","chips",["ch","sh"],"ch","🍟"),
      select("lunch","lunch",["ch","sh"],"ch","🥪"),
      select("sheep","sheep",["ch","sh"],"sh","🐑"),
      select("brush","brush",["ch","sh"],"sh","🪥")
    ],"c and h make a new sound: ch (cheese · chips · lunch). s and h make a new sound: sh (sheep · fish · brush)."),
    la("Phonics · Practice: read the words","Read the word. Which digraph do you see: sh, th, ng or no digraph?",[
      pic(select("sang","sang",DG,"ng","🎵"),IMG("la-digraph-words")),
      select("bang","bang",DG,"ng","💥"),
      select("hush","hush",DG,"sh","🤫"),
      select("hip","hip",DG,"no digraph","🦵"),
      select("desk","desk",DG,"no digraph","🪑"),
      select("grand","grand",DG,"no digraph","👵")
    ],"sang (ng) · bang (ng) · hush (sh) · math (th) · bring (ng). hip · desk · grand · lump · hot · hop have no digraph.",{readingId:"digraph"}),
    la("Phonics · Read Together","Read each sentence. Find the words with sh, th or ng.",[
      pic(multi("beth","“Beth thinks she spots a fish in the pond.” Which 2 words have th? Choose 2.",["Beth","thinks","she","spots"],["Beth","thinks"],"🐠"),IMG("la-read-together")),
      choice("bring","“He rushed to the ship to bring his bag.” Which word has ng?",["bring","rushed","ship"],"bring","🎒")
    ],"Beth thinks she spots a fish in the pond. (th: Beth, thinks · sh: she, fish) · He rushed to the ship to bring his bag. (sh: rushed, ship · ng: bring)",{readingId:"digraph"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-12-language",
    uploadDate:"2026-11-12",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"12/11/2026 · Unit 2 Week 4 · Proper nouns · Closed syllables · Nell’s Books · Digraphs",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 142 · proper nouns",1],["Build Background","Essential Question",1],["Structural Analysis","Closed syllables · video · game",2],["Anchor Text","Nell’s Books · RWC 135–137",2],["Phonics","Digraphs ch, sh, th, ng",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1211","Remember — Language Arts",[
          "📅 Class Diary: 12/11/2026",
          "(12/11) Essential Question: "+EQ,
          "(12/11) Homework check: Practice Book, page 142.",
          "(12/11) A proper noun begins with a capital letter: Nick · Seth · Greg · Frog Pond · Camp Playland",
          "(12/11) Structural Analysis: Closed Syllables",
          "(12/11) "+CLOSED,
          "(12/11) Vowels: a · e · i · o · u",
          "(12/11) cactus → cac / tus · important → im / por / tant",
          "(12/11) Anchor Text: Reread the story “Nell’s Books” (Literature Anthology Book, page 68).",
          "(12/11) I know that Nell loves to read books. The text and pictures show Nell read a lot.",
          "(12/11) Nell’s friends: They say yuck and ick! → They said it’s fun! The pictures show them reading in the house.",
          "(12/11) Dog said: We did this for you. Cat said: You can hand out books to all. Nell is good at giving books to others.",
          "(12/11) Phonics: Digraphs ch · sh · th · ng",
          "(12/11) ch: cheese · chips · lunch · sh: sheep · fish · brush",
          "(12/11) Homework: Practice Book, pages 134A and 134B."
        ],"Unit 2 Week 4"),
        {id:"pb142",title:"Practice Book 142 · Proper Nouns",byline:"Homework check · Class Diary 12/11",mode:"reference",images:[IMG("la-pb142")],
          text:"A proper noun begins with a capital letter.\nWrite each proper noun correctly on the lines."},
        {id:"nell",title:"Nell’s Books",byline:"Literature Anthology pages 64–79 · Reading and Writing Companion 135–137",mode:"reference",images:["assets/2026-11-11/la-nell-cover.webp",IMG("la-rwc-135"),IMG("la-rwc-136-137")],
          text:"Genre: Fantasy\nTalk about what Nell is doing on pages 66–67.\nTalk about how Nell’s friends feel about reading on pages 72–75.\nTalk about what Nell’s friends say on pages 76–77."},
        {id:"digraph",title:"Phonics · Digraphs",byline:"Practice · Class Diary 12/11",mode:"reference",images:[IMG("la-digraph-words"),IMG("la-read-together")],
          text:"shop · sing · hip · clang · then · long\nlump · wish · sang · bang · desk · hot\nhush · math · hop · grand · lump · bring\nThank you for handing that shell to me.\nBeth thinks she spots a fish in the pond.\nHe rushed to the ship to bring his bag."},
        bonus("bonus-la-1211",[
          {label:"Video: Learn Syllables with Silly Bull",url:"https://youtu.be/0QcPb5bku70"},
          {label:"Game: Closed syllable vs Not closed syllable #2",url:"https://wordwall.net/resource/38491859/reading/closed-syllable-vs-not-closed-syllable-2"},
          {label:"Video: Nell’s Books",url:"https://www.youtube.com/watch?v=jvfgUSXTmEw"},
          {label:"Video: Digraphs ch, sh (Fish for Lunch)",url:"https://www.youtube.com/watch?v=eUM94K5clyA"},
          {label:"Game: Digraphs",url:"https://www.baamboozle.com/game/281844"}
        ])
      ]}
  });

  // ───────────────────────── MATH · Lesson 40: Making Numbers 11 to 20 ─────────────────────────
  // Dạng linh động (feedback-math-flexible-quiz): ten-frame đôi vẽ bằng code đúng như slide (11 đỏ · 17 vàng · 20 đỏ), tapframe frames:2.
  const NAMES=["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
  const TEN=(n,color)=>({kind:"tenframe",n,frames:2,color});
  const vis=(field,visual)=>({...field,visual});
  const tap2=(id,label,answer,color)=>({id,label,type:"tapframe",cols:5,cells:20,frames:2,answer,color});
  const SRC="Source: Lesson 40 slides (Class Diary 12/11/2026)";
  const MATH_Q=[
    math("Lesson 40 · Numbers 11 through 20 have names",`${SRC}. Choose the name of the number.`,[
      select("n12","12",NAMES,"twelve","🔢"),
      select("n13","13",NAMES,"thirteen","🔢"),
      select("n14","14",NAMES,"fourteen","🔢"),
      select("n15","15",NAMES,"fifteen","🔢"),
      select("n18","18",NAMES,"eighteen","🔢"),
      select("n19","19",NAMES,"nineteen","🔢"),
      fill("w11","eleven = ___","11","✏️"),
      fill("w17","seventeen = ___","17","✏️"),
      fill("w20","twenty = ___","20","✏️")
    ],"11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty",{readingId:"l40"}),
    math("Lesson 40 · One group of 10 and some ones",`${SRC} · new question types`,[
      vis(fill("c11","Count and write the number.","11"),TEN(11,"red")),
      vis(fill("is11","11 is 10 and ___.","1"),TEN(11,"red")),
      vis(fill("c17","Count and write the number.","17"),TEN(17,"yellow")),
      vis(fill("is17","17 is 10 and ___.","7"),TEN(17,"yellow")),
      fill("left","Seventeen is one group of 10 and ___ left over.","7","🟡"),
      vis(fill("c20","Count and write the number.","20"),TEN(20,"red")),
      vis(fill("is20","20 is 10 and ___.","10"),TEN(20,"red")),
      fill("groups","Twenty is ___ groups of 10.","2","🔴"),
      choice("make","You can make numbers 11 to 19 with ___.",["one group of 10 and some ones","two groups of 10","some ones only"],"one group of 10 and some ones","💡")
    ],"You can make numbers 11 to 19 with one group of 10 and some ones. 11 is 10 and 1. 17 is 10 and 7: seventeen is one group of 10 and 7 left over. 20 is 10 and 10: twenty is two groups of 10.",{readingId:"l40"}),
    math("Lesson 40 · Show the number on the ten-frames",`${SRC} · new question types`,[
      tap2("show11","Show 11. Fill the top ten-frame first (one group of 10), then 1 more.",11,"red"),
      tap2("show17","Show 17: one group of 10 and 7 left over.",17,"yellow"),
      tap2("show20","Show 20: two groups of 10.",20,"red")
    ],"Fill the top ten-frame first: that is one group of 10. 11 = 10 and 1 · 17 = 10 and 7 · 20 = 10 and 10.")
  ];
  registerQuiz({
    id:"math-lesson-40-numbers-11-20",
    uploadDate:"2026-11-12",
    subjectKey:"math",
    title:"Math – Lesson 40 (numbers 11 to 20)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"12/11/2026 · Lesson 40: Making Numbers 11 to 20 · one group of 10 and some ones",scoreByField:true,
      groups:groupsOf([["Number names","Numbers 11 through 20",1],["Ten-frames","One group of 10 and some ones",1],["Show the number","Tap the ten-frames",1]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-1211","Remember — Math Lesson 40",[
          "📅 Class Diary: 12/11/2026",
          "(12/11 · L40) Making Numbers 11 to 20",
          "(12/11 · L40) Numbers 11 through 20 have names: 11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty",
          "(12/11 · L40) You can make numbers 11 to 19 with one group of 10 and some ones. 11 is 10 and 1.",
          "(12/11 · L40) 17 is 10 and 7. Seventeen is one group of 10 and 7 left over.",
          "(12/11 · L40) 20 is 10 and 10. Twenty is two groups of 10.",
          "(12/11) Homework: Workbook, lesson 40, page 41. Prepare New Math Book B in the next lesson."
        ],"Lesson 40"),
        {id:"l40",title:"Making Numbers 11 to 20",byline:"Math · Lesson 40 slides",mode:"reference",images:[IMG("math-l40-names-eleven"),IMG("math-l40-seventeen-twenty")],
          text:"Numbers 11 through 20 have names.\nYou can make numbers 11 to 19 with one group of 10 and some ones. 11 is 10 and 1.\n17 is 10 and 7. Seventeen is one group of 10 and 7 left over.\n20 is 10 and 10. Twenty is two groups of 10."}
      ]}
  });

  // ───────────────────────── SCIENCE · STEM Module Project · Presentation ─────────────────────────
  const SCI_Q=[
    sci("STEM Module Project · Design Protective Gear for a Sport · Presentation","Today we present our protective gear to the class. Get ready to present: write your answers.",[
      choice("today","What do we do today in the STEM Module Project?",["We present our protective gear.","We build a bookmobile.","We plant flowers."],"We present our protective gear.","🎤"),
      free("sport","Which sport is your protective gear for?","🏅"),
      free("body","Which body part does your protective gear protect?","🦵"),
      free("materials","Which materials did you use? (paper bowl, elastic band, tape, bubble wrap …)","🧰"),
      free("animal","Think about how animals protect themselves. Which animal structure gave you an idea?","🐢"),
      free("work","How does your protective gear work?","✅")
    ],"Presentation: tell the class your sport, the body part your gear protects, the materials you used, the animal idea (for example, a turtle’s shell protects its body) and how your gear keeps the player safe.",{readingId:"gear"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-12-science",
    uploadDate:"2026-11-12",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"12/11/2026 · STEM Module Project: Design Protective Gear for a Sport · Presentation",scoreByField:true,
      groups:groupsOf([["STEM Module Project","Presentation",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1211","Remember — Science",[
          "📅 Class Diary: 12/11/2026",
          "(12/11) STEM Module Project: Design Protective Gear for a Sport",
          "(12/11) Presentation: present your protective gear to the class."
        ],"STEM Module Project"),
        {id:"gear",title:"Design Protective Gear for a Sport",byline:"STEM Module Project · Science Book pages 69–70",mode:"reference",images:["assets/2026-11-10/sci-gear-69.webp","assets/2026-11-10/sci-gear-70.webp"],
          text:"A school needs protective gear for its sports teams. Design protective gear to keep the players safe.\nThink about how animals protect themselves.\nPresentation: present your protective gear to the class."}
      ]}
  });
})();
