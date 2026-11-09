// Quiz 09/11/2026 — Class Diary 09/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 (Essential Question theo sách trang 112/116: "How do people help out in the community?" —
// diary lại ghi EQ tuần 3 "Where do animals live together?") · homework check Practice Book 140–141 (Common and Proper Nouns) ·
// Reread "Thump Thump Helps Out" (RWC page 116) · Genre: fantasy · RWC 129 (Who is telling the story?) · RWC 131 (Characters,
// Setting, Events) · review HFW all, call, day, her, want · review digraphs th, sh, -ng · Structural Analysis: Closed Syllables
// (game Baamboozle 900749) · Close Reading / Listening Comprehension: The Chicks and the Fox (video b-L-eY7boWA, đọc phụ đề từ storyboard).
// Math 09/11 (ôn Lesson 35–39, bài kiểm tra ở buổi Math tới): KHÔNG làm quiz ngày — user yêu cầu chỉ cập nhật vào quiz-summary-math-test-5.js.
// Ảnh: web/assets/2026-11-09/ (tạo bằng web/_reference/tao_anh_2026-11-09.py).
(()=>{
  const IMG=name=>`assets/2026-11-09/${name}.webp`;
  const L="assets/mascot/academy/language.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="09/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const HFW=["all","call","day","her","want"],DG=["th","sh","ng"],ELEM=["Characters","Setting","Events"];
  const FANTASY=["A fantasy is a made-up story.","It has characters, settings, and events that could not exist in real life.","It can be told by a narrator who is a speaker outside the story, using character names or the words he, she, him, her, and they."];
  const CLOSED="When a syllable ends in a consonant and has one vowel letter, the vowel sound is usually short. This is called a closed syllable.";
  const LA_Q=[
    la("Homework check · Grammar: Common and Proper Nouns (Practice Book 140)","Read each row of words. Circle the word or words that are proper nouns. Make an X on the common nouns.",[
      multi("row1","Row 1: Kim · dog · hand. Choose the proper noun.",["Kim","dog","hand"],["Kim"],"1️⃣"),
      multi("row2","Row 2: girl · Nan · cat. Choose the proper noun.",["girl","Nan","cat"],["Nan"],"2️⃣"),
      multi("row3","Row 3: swing · Pine Park · Miss Miller. Choose the proper nouns.",["swing","Pine Park","Miss Miller"],["Pine Park","Miss Miller"],"3️⃣"),
      multi("row4","Row 4: Bob · Ed · Elm Street. Choose the proper nouns.",["Bob","Ed","Elm Street"],["Bob","Ed","Elm Street"],"4️⃣"),
      free("sentence","Complete the sentence. Use the proper nouns you circled: ___ and ___ go to ___.","✏️")
    ],"Proper nouns: Kim · Nan · Pine Park · Miss Miller · Bob · Ed · Elm Street. Common nouns: dog · hand · girl · cat · swing. Possible answer: Kim and Nan go to Pine Park.",{readingId:"nouns"}),
    la("Homework check · Fix the draft (Practice Book 141)","Read the draft. Circle the errors in common and proper nouns.",[
      pic(multi("s1","“miss lane teaches at rock hill school.” Which words should begin with a capital letter? Choose all.",["miss","lane","teaches","rock","hill","school"],["miss","lane","rock","hill","school"],"🔠"),IMG("la-pb141-draft")),
      pic(choice("why","Why do “miss lane” and “rock hill school” need capital letters?",["They are proper nouns: the name of a specific person and a specific place.","They are common nouns.","They are at the end of the sentence."],"They are proper nouns: the name of a specific person and a specific place.","❓"),IMG("la-pb141-draft")),
      pic(choice("lower","“Our School is on pine street.” Which word is a common noun and should begin with a lowercase letter?",["School","Our","is"],"School","🔡"),IMG("la-pb141-draft")),
      pic(multi("s2","“Our School is on pine street.” Which words name a specific place and need capital letters? Choose 2.",["pine","street","Our","is"],["pine","street"],"🔠"),IMG("la-pb141-draft"))
    ],"Miss Lane teaches at Rock Hill School. Our school is on Pine Street. Proper nouns begin with a capital letter. Common nouns begin with a lowercase letter.",{readingId:"nouns"}),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we saw children plant flowers in a community garden, we wrote ways to help (keep us safe, put out fires, help sick people), and we read “Thump Thump Helps Out” (Thump Thump thumps to bring help when the bus gets stuck). So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","How do we celebrate special days?"],EQ,"❓")
    ],"Essential Question: "+EQ),
    la("Shared Read · Reread “Thump Thump Helps Out” · Genre: fantasy","Reading and Writing Companion page 116.",[
      choice("made","A fantasy is a ___ story.",["made-up","true","real-life"],"made-up","🪄"),
      choice("exist","A fantasy has characters, settings, and events that ___.",["could not exist in real life","happen at our school every day","are in real photos"],"could not exist in real life","🐰"),
      choice("narrator","A fantasy can be told by a narrator. Who is the narrator?",["a speaker outside the story","the main character","the reader"],"a speaker outside the story","🗣️"),
      choice("chicks","In the video story “The Chicks and the Fox”, Bat, Cow, Pig and Cat talk and make a plan. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Fantasy","Realistic fiction","Nonfiction"],"Fantasy","🦇")
    ],FANTASY.join(" "),{readingId:"thump"}),
    la("Reading and Writing Companion page 129 · Who is telling the story?","Fantasy · Who Is Telling the Story? · Words That Tell",[
      pic(choice("who","“Thump Thump Helps Out”: Who is telling the story?",["The narrator","Thump Thump","Miss Sheldon"],"The narrator","📣"),IMG("la-rwc129")),
      pic(multi("words","Words That Tell: which words show that a narrator is telling the story? Choose 3.",["Thump Thump","He","They","I","me","we"],["Thump Thump","He","They"],"🔤"),IMG("la-rwc129"))
    ],"Who is telling the story? The narrator. Words that tell: Thump Thump · He · They. A narrator is a speaker outside the story and uses character names or the words he, she, him, her, and they.",{readingId:"thump"}),
    la("Main Story Elements · Character, Setting, Events","Choose the story element.",[
      select("char","___ are the people or animals in a story.",ELEM,"Characters","🧑‍🤝‍🧑"),
      select("set","___ is where the story takes place.",ELEM,"Setting","🏞️"),
      select("ev","___ are what happen in the story.",ELEM,"Events","🎬")
    ],"Characters are the people or animals in a story. Setting is where the story takes place. Events are what happen in the story."),
    la("Reading and Writing Companion page 131 · Characters, Setting, Events","“Thump Thump Helps Out” · Fantasy",[
      pic(multi("chars","Which characters are in “Thump Thump Helps Out”? Choose 4.",["Thump Thump","Little Rabbit","Miss Sheldon","Big Rabbit","Bat","the fox"],["Thump Thump","Little Rabbit","Miss Sheldon","Big Rabbit"],"🐇"),IMG("la-rwc131")),
      pic(choice("park","Setting: Where are Thump Thump and Little Rabbit at the beginning?",["the park","the farm","the zoo"],"the park","🌳"),IMG("la-rwc131")),
      pic(choice("doing","Event: What happens in the park?",["Thump Thump is singing and thumping.","Thump Thump is sleeping.","Thump Thump is eating carrots."],"Thump Thump is singing and thumping.","🎵"),IMG("la-rwc131")),
      pic(choice("road","Setting: Where are Thump Thump, Miss Sheldon and Big Rabbit next?",["on the road","in the park","at school"],"on the road","🛣️"),IMG("la-rwc131")),
      pic(choice("stuck","Event: What happens on the road?",["The bus gets stuck on a rock.","The bus goes to the zoo.","The bus stops at a shop."],"The bus gets stuck on a rock.","🚌"),IMG("la-rwc131"))
    ],"Characters: Thump Thump, Little Rabbit · Setting: the park · Event: Thump Thump is singing and thumping. Characters: Thump Thump, Miss Sheldon, Big Rabbit · Setting: on the road · Event: The bus gets stuck on a rock.",{readingId:"thump"}),
    la("Review · High-frequency words · all · call · day · her · want","Sentences from “Thump Thump Helps Out”. Choose the word.",[
      select("all","“Hush! Stop that, Thump Thump!” yelled ___ the little rabbits.",HFW,"all","👂"),
      select("day","One ___, there was a problem.",HFW,"day","📅"),
      select("her","“Help us!” yelled Miss Sheldon. But not one big rabbit heard ___ call.",HFW,"her","📢"),
      select("call","But not one big rabbit heard her ___.",HFW,"call","📞"),
      select("want","“We ___ you to thump loud and long if a rabbit needs help.”",HFW,"want","🥁")
    ],"yelled all the little rabbits · One day, there was a problem. · not one big rabbit heard her call · We want you to thump loud and long if a rabbit needs help.",{readingId:"thump"}),
    la("Review · Phonics: Digraphs th, sh, -ng","Words from “Thump Thump Helps Out”. Which digraph do you hear?",[
      select("thump","Thump",DG,"th","🥁"),
      select("hush","Hush",DG,"sh","🤫"),
      select("song","song",DG,"ng","🎵"),
      select("think","think",DG,"th","💭"),
      select("rushed","rushed",DG,"sh","🏃"),
      select("long","long",DG,"ng","📏")
    ],"th: Thump · think · sh: Hush · rushed · -ng: song · long"),
    la("Structural Analysis · Closed Syllables","When a syllable ends in a consonant and has one vowel letter, the vowel sound is usually short.",[
      choice("short","When a syllable ends in a consonant and has one vowel letter, the vowel sound is usually ___.",["short","long","silent"],"short","🔉"),
      choice("closed","This is called a ___ syllable.",["closed","open","silent"],"closed","🚪"),
      choice("napkin","Split the word into closed syllables: napkin",["nap/kin","na/pkin","napk/in"],"nap/kin","✂️"),
      choice("kitten","Split the word into closed syllables: kitten",["kit/ten","ki/tten","kitt/en"],"kit/ten","🐱"),
      choice("insect","Split the word into closed syllables: insect",["in/sect","i/nsect","ins/ect"],"in/sect","🐞"),
      choice("cactus","Split the word into closed syllables: cactus",["cac/tus","ca/ctus","cact/us"],"cac/tus","🌵")
    ],CLOSED+" Examples: rab/bit · bas/ket · cab/in · nap/kin · kit/ten · in/sect · cac/tus",{readingId:"closed"}),
    la("Close Reading · Listening Comprehension: The Chicks and the Fox (part 1)","Listen and read along with the story.",[
      choice("first","Bat saw something brown in the barn. Who did he tell FIRST?",["Cow","Pig","Cat"],"Cow","1️⃣"),
      choice("next","Who did Bat go to NEXT?",["Pig","Cow","Dog"],"Pig","➡️"),
      choice("last","Bat went to Cat LAST. What did Cat think the thing was?",["a rock","a hat","an apple"],"a rock","🔚"),
      choice("thing","What was the thing in the barn?",["a soft, yellow chick","a brown hat","a small rock"],"a soft, yellow chick","🐥"),
      choice("mine","“So it is mine. Right?” said Bat. What did Cow say?",["“No. The chick must go to its mother.”","“Yes, it is yours.”","“Give it to Dog.”"],"“No. The chick must go to its mother.”","🐔")
    ],"Bat saw something brown and hard in the barn. He told Cow, then Pig, then Cat. It was not a hat, a box, or a rock. It was a soft, yellow chick. Cow said, “The chick must go to its mother.”",{readingId:"chicks"}),
    la("Close Reading · Listening Comprehension: The Chicks and the Fox (part 2)","Listen and read along with the story.",[
      choice("coming","Bat flew into the barn. What did he say?",["“A fox is coming!”","“It is time to eat!”","“Let’s play a game!”"],"“A fox is coming!”","🦊"),
      choice("dog","“Let’s get Dog!” said Cat. Why did Cow say no?",["“We must let him sleep.”","Dog was at the zoo.","Dog was afraid of the fox."],"“We must let him sleep.”","😴"),
      choice("cow","Where did Cow hide?",["behind the henhouse","behind the tractor","in an apple tree"],"behind the henhouse","🐄"),
      choice("bat","Where did Bat go?",["to an apple tree","behind the tractor","into the henhouse"],"to an apple tree","🍏"),
      choice("swoop","The fox went to the henhouse. What did Bat do?",["Bat swooped down at the fox.","Bat went to sleep.","Bat ran into the barn."],"Bat swooped down at the fox.","🦇"),
      choice("end","How does the story end?",["The fox ran far. The noise woke up Dog, and he said, “Thank you.”","The fox ate the hens.","Dog chased the fox into the barn."],"The fox ran far. The noise woke up Dog, and he said, “Thank you.”","🎉")
    ],"Bat said, “A fox is coming!” They let Dog sleep. Cow hid behind the henhouse, Pig hid behind the tractor, Cat watched from the windmill and Bat went to an apple tree. When the fox went to the henhouse, Bat swooped down at the fox. Hiss! Moo! The fox ran far. It woke up Dog. “Thank you,” said Dog.",{readingId:"chicks"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-09-language",
    uploadDate:"2026-11-09",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"09/11/2026 · Unit 2 Week 4 · Common and Proper Nouns · Reread: Thump Thump Helps Out (fantasy) · Characters, Setting, Events · Closed Syllables · The Chicks and the Fox",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 140–141 · Common and Proper Nouns",2],["Build Background","Essential Question",1],["Shared Read: Thump Thump Helps Out","Genre: fantasy · pages 116, 129",2],["Main Story Elements","Character · Setting · Events · page 131",2],["Review","High-frequency words · Digraphs th, sh, -ng",2],["Structural Analysis","Closed Syllables",1],["Close Reading","Listening Comprehension · The Chicks and the Fox",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0911","Remember — Language Arts",[
          "📅 Class Diary: 09/11/2026",
          "(09/11) Essential Question: "+EQ,
          "(09/11) Homework check: Practice Book, pages 140 and 141 (Common and Proper Nouns).",
          "(09/11) Common nouns: name general people, places, or things. A common noun begins with a lowercase letter. Example: girl",
          "(09/11) Proper nouns: name specific people, places, or things. A proper noun begins with a capital letter. Example: Elm Park School",
          "(09/11) Genre: fantasy",
          ...FANTASY.map(line=>"(09/11) "+line),
          "(09/11) High-frequency words: all · call · day · her · want",
          "(09/11) Digraphs: th · sh · -ng",
          "(09/11) Main Story Elements: Character · Setting · Events",
          "(09/11) Characters are the people or animals in a story.",
          "(09/11) Setting is where the story takes place.",
          "(09/11) Events are what happen in the story.",
          "(09/11) Closed syllable: "+CLOSED,
          "Example: [img:"+IMG("la-closed-syllable")+"] Split a word into closed syllables. ¦ rabbit → rab / bit. basket → bas / ket. cabin → cab / in. ¦ Each syllable ends in a consonant and has one vowel letter. ¦ So the vowel sound is short.",
          "(09/11) Close Reading: The Chicks and the Fox",
          "(09/11) Homework: Practice Book, pages 137 and 138."
        ],"Unit 2 Week 4"),
        {id:"nouns",title:"Common and Proper Nouns",byline:"Practice Book pages 140–141",mode:"reference",images:[IMG("la-nouns-box")],text:"Common nouns name general people, places, or things. A common noun begins with a lowercase letter. Example: girl\nProper nouns name specific people, places, or things. A proper noun begins with a capital letter. Example: Elm Park School"},
        {id:"thump",title:"Thump Thump Helps Out",byline:"Reread · Reading and Writing Companion page 116 · Genre: fantasy",mode:"reference",images:["assets/2026-11-06/la-thump-116.webp","assets/2026-11-06/la-thump-page1.webp","assets/2026-11-06/la-thump-page2.webp","assets/2026-11-06/la-thump-page3.webp","assets/2026-11-06/la-thump-page4.webp"],
          text:[(window.quizSources?.["class-diary-2026-11-06-language"]?.subject.readings||[]).find(r=>r.id==="thump")?.text||"","Genre: fantasy",...FANTASY].join("\n")},
        {id:"closed",title:"Structural Analysis: Closed Syllables",byline:"Class Diary 09/11",mode:"reference",images:[IMG("la-closed-syllable")],text:CLOSED+"\nrab/bit · bas/ket · cab/in"},
        {id:"chicks",title:"The Chicks and the Fox",byline:"Close Reading · Listening Comprehension · Little Fox (Bat and Friends)",mode:"reference",
          images:[IMG("story-saw"),IMG("story-chick"),IMG("story-mother"),IMG("story-fox-coming"),IMG("story-hide"),IMG("story-swoop"),IMG("story-ran"),IMG("story-dog")],
          text:"Part 1: Bat saw something brown and hard in the barn. He asked Cow, Pig and Cat. It was not a hat, a box, or a rock. When they went back, the thing was a soft, yellow chick! The chick must go to its mother.\nPart 2: Bat saw a fox coming to the farm. The friends let Dog sleep and made a plan. They hid and waited. When the fox went to the henhouse, Bat swooped down at the fox and they made some noise. The fox ran far, and Dog said, “Thank you.”"},
        bonus("bonus-la-0911",[
          {label:"Close Reading: The Chicks and the Fox",url:"https://www.youtube.com/watch?v=b-L-eY7boWA"},
          {label:"Video: Thump Thump Helps Out",url:"https://www.youtube.com/watch?v=WmjIStt45Kk"},
          {label:"Game: 2 Syllables Word (Closed Syllables)",url:"https://www.baamboozle.com/game/900749"}
        ])
      ]}
  });
})();
