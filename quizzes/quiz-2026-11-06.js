// Quiz 06/11/2026 — Class Diary 06/11/2026 + file "Animal Behaviors - 261106.pdf" (slide Lesson 4) + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 (Essential Question theo sách trang 116: "How do people help out in the community?" — diary ghi nhầm EQ tuần 3) ·
// homework check Practice Book 131 (sh, th, ng) · High-frequency words all, call, day, her, want · Grammar: Common and Proper Nouns ·
// Shared Read "Thump Thump Helps Out" (RWC page 116; chữ truyện chép từ video WmjIStt45Kk) · Genre: fantasy · Writing Practice (RWC 126–127) ·
// Close Reading / Listening Comprehension: The Three Billy Goats Gruff (video zNlgGhYVxYU, đọc từ storyboard).
// + Bài kiểm tra thêm "Common and Proper Nouns Test" (user yêu cầu 08/11 để bé hiểu sâu hơn): ví dụ lấy từ bài học trong tuần.
// Science: Unit 2 Module 1 Lesson 4 · STEM Module Project (pages 62–63) · Lesson 4 Review (Explain the phenomenon, Summarize It,
// Three-Dimensional Thinking) · slide Animal Behaviors (Essential Question: How does an animal’s behavior help it survive?).
// Wellbeing: Unit Project — Friendship Bracelets.
// Ảnh: web/assets/2026-11-06/ (tạo bằng web/_reference/tao_anh_2026-11-06.py).
(()=>{
  const IMG=name=>`assets/2026-11-06/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="06/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const HFW=["all","call","day","her","want"];
  const COMMON="Common nouns name general people, places, or things. A common noun begins with a lowercase letter.";
  const PROPER="Proper nouns name specific people, places, or things. A proper noun begins with a capital letter.";
  const NT=["common noun","proper noun"];
  const FANTASY="A fantasy can be told by a narrator who is a speaker outside the story. Look for character names or the words he, she, him, and they.";
  const TRAIT="The beginning tells how the story starts and introduces the characters.";
  const SKILL="Remember, a sentence always ends with a period, question mark, or exclamation mark.";
  const THUMP=[
    "Thump Thump liked to thump. He thumped a lot as he sang. He thumped a lot just for fun.",
    "“Hush! Stop that, Thump Thump!” yelled all the little rabbits. “We do not like it one bit!” But Thump Thump did not stop.",
    "One day, there was a problem. Thump Thump’s bus hit a rock. Bang! Crash! Clunk! His bus got stuck in the mud. The little rabbits could not fix it.",
    "“We wish big rabbits could get us home,” sniffed the little rabbits. “Help us!” yelled Miss Sheldon. But not one big rabbit heard her call.",
    "Thump Thump had a plan. “I think I can help,” he sang. He thumped and thumped and thumped.",
    "Big rabbits all overheard Thump Thump’s thump. They rushed to help fix the bus. The kids got home fast.",
    "“Thump Thump, can you help us?” asked the big rabbits. “We want you to thump loud and long if a rabbit needs help.”",
    "“Thump, Thump!” went Thump Thump, with a song. And Thump Thump thumps and brings help to this day."
  ];
  const LA_Q=[
    la("Homework check · Phonics: sh, th, ng (Practice Book 131)","Read each sentence. Which word has sh, th, or ng?",[
      choice("fresh","Here is a fresh plum.",["fresh","plum","Here"],"fresh","🍑"),
      choice("sing","Min and Dan like to sing.",["sing","like","Dan"],"sing","🎤"),
      choice("thank","Say thank you for a gift.",["thank","gift","Say"],"thank","🎁"),
      choice("shells","Sam and Dad pick up shells.",["shells","pick","Sam"],"shells","🐚"),
      choice("with","I like to play with my pals.",["with","play","pals"],"with","🧒")
    ],"fresh (sh) · sing (ng) · thank (th) · shells (sh) · with (th)"),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we saw children plant flowers in a community garden (page 112), we wrote ways to help (keep us safe, put out fires, help sick people), and we read “Thump Thump Helps Out” (Thump Thump thumps to bring help). So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","How do we celebrate special days?"],EQ,"❓")
    ],"Essential Question: "+EQ),
    la("High-frequency words · all · call · day · her · want","Read the sentence. Choose the word.",[
      select("all","I see ___ the kids in the class.",HFW,"all","👧"),
      select("call","I think I will ___ Seth.",HFW,"call","📞"),
      select("day","I spent the ___ at the shop.",HFW,"day","🛍️"),
      select("her","Beth lost ___ big bag.",HFW,"her","👜"),
      select("want","Do you ___ to sing a song with me?",HFW,"want","🎶"),
      select("n-her","It’s ___ book.",HFW,"her","📕"),
      select("n-all","We ate ___ of the pizza.",HFW,"all","🍕"),
      select("n-call","I can ___ the dog.",HFW,"call","🐕"),
      select("n-day","The sun shines during the ___.",HFW,"day","☀️"),
      free("n-want","Notebook: I want ___. (Helping words: pizza, ice cream, candy, apple, cookie, burger, to play basketball, to play football, to play soccer, to play games, to read a book, to ride my bike)","✏️")
    ],"I see all the kids in the class. · I think I will call Seth. · I spent the day at the shop. · Beth lost her big bag. · Do you want to sing a song with me? · Notebook: I want ___. It’s her book. We ate all of the pizza. I can call the dog. The sun shines during the day.",{readingId:"hfw"}),
    la("Grammar · Common and Proper Nouns","Common nouns · Proper nouns.",[
      select("common","___ nouns name general people, places, or things.",["Common","Proper"],"Common","👧"),
      select("proper","___ nouns name specific people, places, or things.",["Common","Proper"],"Proper","🏫"),
      select("lower","A common noun begins with a ___ letter.",["lowercase","capital"],"lowercase","🔡"),
      select("capital","A proper noun begins with a ___ letter.",["lowercase","capital"],"capital","🔠")
    ],COMMON+" Example: girl. "+PROPER+" Example: Elm Park School.",{readingId:"nouns"}),
    la("Grammar · Find the common and proper nouns","Read the sentence. Find the noun.",[
      choice("max-p","“Max went to the park.” Which word is a proper noun?",["Max","park","went"],"Max","🧒"),
      choice("max-c","“Max went to the park.” Which word is a common noun?",["park","Max","went"],"park","🌳"),
      choice("dylan-c","“My teacher is called Dylan.” Which word is a common noun?",["teacher","Dylan","called"],"teacher","🧑‍🏫"),
      choice("dylan-p","“My teacher is called Dylan.” Which word is a proper noun?",["Dylan","teacher","called"],"Dylan","🙋"),
      choice("toy-c","“I got a toy from My Kingdom.” Which word is a common noun?",["toy","My Kingdom","got"],"toy","🧸"),
      choice("toy-p","“I got a toy from My Kingdom.” Which is a proper noun (the name of a store)?",["My Kingdom","toy","got"],"My Kingdom","🏬")
    ],"Max went to the park. (Max: proper · park: common) · My teacher is called Dylan. (teacher: common · Dylan: proper) · I got a toy from My Kingdom. (toy: common · My Kingdom: proper)",{readingId:"nouns"}),
    la("Shared Read · Thump Thump Helps Out (pages 1–2)","Reading and Writing Companion page 116. My Goal: I can read and understand a fantasy story.",[
      choice("genre","Thump Thump is a rabbit who drives a bus and sings. Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos). What is the genre?",["Fantasy","Realistic fiction","Nonfiction"],"Fantasy","🐰"),
      choice("narrator","A fantasy can be told by a narrator. Who is a narrator?",["a speaker outside the story","the main character","the author’s friend"],"a speaker outside the story","🗣️"),
      choice("he","“He thumped a lot as he sang.” Who is he?",["Thump Thump","Miss Sheldon","a big rabbit"],"Thump Thump","🐇"),
      choice("liked","What did Thump Thump like to do?",["thump","sleep","dig"],"thump","🥁"),
      choice("hush","What did the little rabbits yell?",["“Hush! Stop that, Thump Thump!”","“Thump some more!”","“Let’s go to the park!”"],"“Hush! Stop that, Thump Thump!”","🤫"),
      choice("problem","One day, there was a problem. What happened?",["Thump Thump’s bus hit a rock and got stuck in the mud.","Thump Thump lost his bag.","It began to snow."],"Thump Thump’s bus hit a rock and got stuck in the mud.","🚌"),
      choice("sheldon","Who yelled “Help us!”?",["Miss Sheldon","Thump Thump","the big rabbits"],"Miss Sheldon","📢")
    ],THUMP.slice(0,4).join(" "),{readingId:"thump"}),
    la("Shared Read · Thump Thump Helps Out (pages 3–4)","Find Text Evidence: read to find out how one rabbit helps his community.",[
      choice("plan","Thump Thump had a plan. What did he do?",["He thumped and thumped and thumped.","He went to sleep.","He pushed the bus."],"He thumped and thumped and thumped.","💡"),
      choice("big","What did the big rabbits do when they overheard Thump Thump’s thump?",["They rushed to help fix the bus.","They told him to stop.","They ran away."],"They rushed to help fix the bus.","🔧"),
      choice("help","How does one rabbit help his community?",["Thump Thump thumps loud and long to bring help.","Thump Thump bakes bread.","Thump Thump plants flowers."],"Thump Thump thumps loud and long to bring help.","🤝"),
      multi("think","Circle and read aloud the words with the same beginning sound as think. Choose 3.",["Thump","thumped","think","bus","rock","help"],["Thump","thumped","think"],"🔤")
    ],THUMP.slice(4).join(" "),{readingId:"thump"}),
    la("Writing Practice · Write a Sentence (RWC pages 126–127)","Listen to this sentence about having fun: “Every day, I have fun walking my dog with my mom.”",[
      choice("trait","Writing Trait: The beginning tells how the story starts and introduces the ___.",["characters","ending","pictures"],"characters","🎬"),
      choice("good","Why is “Every day, I have fun walking my dog with my mom.” a good beginning for a story?",["It tells who the characters are and what they do.","It tells how the story ends.","It has no characters."],"It tells who the characters are and what they do.","👍"),
      choice("punct","Circle the end punctuation: “Every day, I have fun walking my dog with my mom.” What is it?",["a period","a question mark","a comma"],"a period","⏺️"),
      multi("skill","Writing Skill: a sentence always ends with a ___. Choose 3.",["period","question mark","exclamation mark","comma","capital letter"],["period","question mark","exclamation mark"],"❗"),
      free("write","Write what you like to do for fun: Every day, I have fun ___ with my ___.","✏️")
    ],"Every day, I have fun walking my dog with my mom. "+TRAIT+" "+SKILL,{readingId:"writing"}),
    la("Close Reading · Listening Comprehension: The Three Billy Goats Gruff","Listen and read along with the story.",[
      choice("first","Which goat crossed the bridge FIRST?",["Big Billy (the little one)","Bigger Billy","Biggest Billy"],"Big Billy (the little one)","🐐"),
      choice("troll","What did the troll shout?",["“Who is that trip-trapping over my bridge?”","“Good morning, goats!”","“Let’s eat grass!”"],"“Who is that trip-trapping over my bridge?”","👹"),
      choice("save","The troll fell into the river and could not swim. What did the goats do?",["They pulled him out with a long stick.","They ran away.","They laughed at him."],"They pulled him out with a long stick.","🪵"),
      choice("message","What is the message of the story?",["When we are kind, and when we share, everybody is happy.","Big goats always win.","Never cross a bridge."],"When we are kind, and when we share, everybody is happy.","💛")
    ],"Big Billy, Bigger Billy and Biggest Billy want to eat the green grass across the bridge. The grumpy troll shouts: “Who is that trip-trapping over my bridge?” Biggest Billy bumps the troll into the river. The troll cannot swim, so the goats pull him out with a long stick. The troll says sorry, eats grass with them and becomes their friend. When we are kind, and when we share, everybody is happy.")
  ];
  registerQuiz({
    id:"class-diary-2026-11-06-language",
    uploadDate:"2026-11-06",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"06/11/2026 · Unit 2 Week 4 · HFW all, call, day, her, want · Common and Proper Nouns · Shared Read: Thump Thump Helps Out (fantasy) · Writing Practice · The Three Billy Goats Gruff",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 131 · sh, th, ng",1],["Build Background","Essential Question",1],["High-frequency words","all · call · day · her · want",1],["Grammar","Common and Proper Nouns",2],["Shared Read: Thump Thump Helps Out","Genre: fantasy · page 116",2],["Writing Practice","Write a Sentence · pages 126–127",1],["Close Reading","Listening Comprehension · The Three Billy Goats Gruff",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0611","Remember — Language Arts",[
          "📅 Class Diary: 06/11/2026",
          "(06/11) Essential Question: "+EQ,
          "(06/11) High-frequency words: all · call · day · her · want",
          "(06/11) Common nouns: name general people, places, or things. A common noun begins with a lowercase letter. Example: girl",
          "(06/11) Proper nouns: name specific people, places, or things. A proper noun begins with a capital letter. Example: Elm Park School",
          "(06/11) Thump Thump Helps Out · Genre: fantasy",
          "(06/11) "+FANTASY,
          "(06/11) Writing Trait: "+TRAIT,
          "(06/11) Writing Skill: "+SKILL,
          "(06/11) Homework: Practice Book, pages 140 and 141."
        ],"Unit 2 Week 4"),
        {id:"hfw",title:"High-frequency words",byline:"all · call · day · her · want",mode:"reference",images:[IMG("la-hfw")],text:"I see all the kids in the class.\nI think I will call Seth.\nI spent the day at the shop.\nBeth lost her big bag.\nDo you want to sing a song with me?"},
        {id:"nouns",title:"Grammar: Common and Proper Nouns",byline:"Find the common and proper nouns",mode:"reference",images:[IMG("la-nouns-rule"),IMG("la-find-nouns")],text:COMMON+"\nExample: girl\n"+PROPER+"\nExample: Elm Park School\nFind the common and proper nouns:\nMax went to the park.\nMy teacher is called Dylan.\nI got a toy from My Kingdom."},
        {id:"thump",title:"Thump Thump Helps Out",byline:"Shared Read · Reading and Writing Companion page 116 · Genre: fantasy",mode:"reference",images:[IMG("la-thump-116"),IMG("la-thump-page1"),IMG("la-thump-page2"),IMG("la-thump-page3"),IMG("la-thump-page4")],text:"Essential Question: "+EQ+"\nMy Goal: I can read and understand a fantasy story.\nFind Text Evidence: Read to find out how one rabbit helps his community. Circle and read aloud the words with the same beginning sound as think.\n"+THUMP.join("\n")+"\nGenre: fantasy. "+FANTASY},
        {id:"writing",title:"Writing Practice · Write a Sentence",byline:"Reading and Writing Companion pages 126–127",mode:"reference",images:[IMG("la-writing-126-127")],text:"Talk about what Thump Thump likes to do for fun.\nListen to this sentence about having fun: Every day, I have fun walking my dog with my mom.\nTalk about why this sentence is a good beginning for a story. Circle the end punctuation.\nWriting Trait: "+TRAIT+"\nWrite what you like to do for fun. Make sure your sentence is a good beginning to a story.\nWriting Skill: "+SKILL},
        bonus("bonus-la-0611",[
          {label:"Close Reading: The Three Billy Goats Gruff",url:"https://www.youtube.com/watch?v=zNlgGhYVxYU"},
          {label:"Game: Proper and Common Nouns (Baamboozle)",url:"https://www.baamboozle.com/game/425808"},
          {label:"Video: Thump Thump Helps Out",url:"https://www.youtube.com/watch?v=WmjIStt45Kk"}
        ])
      ]}
  });

  // ───────── LANGUAGE ARTS · Common and Proper Nouns Test (bài thêm để bé hiểu sâu hơn) ─────────
  const PAIRS=["Miss Sheldon","Los Angeles Zoo","Elm Park School","Monday","Thump Thump","Max"];
  const SORT=[["teacher","common noun","🧑‍🏫"],["Dylan","proper noun","🙋"],["girl","common noun","👧"],["Max","proper noun","🧒"],
    ["park","common noun","🌳"],["Elm Park School","proper noun","🏫"],["zoo","common noun","🦁"],["Los Angeles Zoo","proper noun","🐘"],
    ["toy","common noun","🧸"],["Monday","proper noun","📅"],["bus","common noun","🚌"]];
  const TEST_Q=[
    la("Grammar Test · Common or proper?","A common noun names a general person, place, or thing (girl). A proper noun names a specific one and begins with a capital letter (Elm Park School).",[
      choice("why-dylan","“My teacher is called Dylan.” Why does Dylan begin with a capital letter?",["Dylan is a proper noun. It names a specific person.","Dylan is a common noun.","Dylan is the last word."],"Dylan is a proper noun. It names a specific person.","🔠"),
      choice("why-park","“Max went to the park.” Why does park begin with a lowercase letter?",["park is a common noun. It names a general place.","park is a proper noun.","park is a short word."],"park is a common noun. It names a general place.","🔡")
    ],"Dylan names one specific person → proper noun → capital letter. park can be any park → common noun → lowercase letter."),
    la("Grammar Test · Sort the nouns","Is it a common noun or a proper noun? People · places · things.",
      SORT.map(([w,t,icon])=>select(`s-${w.toLowerCase().replace(/ /g,"-")}`,w,NT,t,icon)),
      "Common: teacher, girl, park, zoo, toy, bus. Proper: Dylan, Max, Elm Park School, Los Angeles Zoo, Monday."),
    la("Grammar Test · Common noun → proper noun","Every common noun can have a special name. Choose the proper noun.",[
      select("p-teacher","teacher → ___",PAIRS,"Miss Sheldon","🧑‍🏫"),
      select("p-zoo","zoo → ___",PAIRS,"Los Angeles Zoo","🦁"),
      select("p-school","school → ___",PAIRS,"Elm Park School","🏫"),
      select("p-day","day → ___",PAIRS,"Monday","📅"),
      select("p-rabbit","rabbit → ___",PAIRS,"Thump Thump","🐇"),
      select("p-boy","boy → ___",PAIRS,"Max","🧒")
    ],"teacher → Miss Sheldon · zoo → Los Angeles Zoo · school → Elm Park School · day → Monday · rabbit → Thump Thump · boy → Max"),
    la("Grammar Test · Which word needs a capital letter?","A proper noun begins with a capital letter. Find the proper noun that was written with a lowercase letter.",[
      choice("rex","“I play with my dog, rex.”",["rex","dog","play"],"rex","🐶"),
      choice("saturday","“We went to the zoo on saturday.”",["saturday","zoo","went"],"saturday","📅"),
      choice("beth","“My friend beth has a big bag.”",["beth","friend","bag"],"beth","👜")
    ],"Rex (the dog’s name) · Saturday (the name of a day) · Beth (the name of a person) — proper nouns begin with a capital letter."),
    la("Grammar Test · Find the nouns in our stories","Sentences from this week.",[
      choice("beth-p","“Beth lost her big bag.” Which word is a proper noun?",["Beth","bag","big"],"Beth","👧"),
      choice("beth-c","“Beth lost her big bag.” Which word is a common noun?",["bag","Beth","lost"],"bag","👜"),
      multi("bus","“Thump Thump’s bus hit a rock.” Which 2 words are common nouns? Choose 2.",["bus","rock","hit","Thump Thump’s"],["bus","rock"],"🚌"),
      multi("cox","“Dr. Cathleen Cox works at the Los Angeles Zoo.” Which 2 are proper nouns? Choose 2.",["Dr. Cathleen Cox","Los Angeles Zoo","works","at"],["Dr. Cathleen Cox","Los Angeles Zoo"],"🐾")
    ],"Beth (proper) lost her big bag (common). · Thump Thump’s bus (common) hit a rock (common). · Dr. Cathleen Cox (proper) works at the Los Angeles Zoo (proper)."),
    la("Grammar Test · Your turn","Write a sentence with one common noun and one proper noun.",[
      free("write","Write your sentence. (Example: Max went to the park.)","✏️")
    ],"Example: Max (proper noun) went to the park (common noun).")
  ];
  registerQuiz({
    id:"la-common-proper-nouns-test-2026-11-06",
    uploadDate:"2026-11-06",
    subjectKey:"language",
    title:"Language Arts – Common and Proper Nouns Test",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"06/11/2026 · Grammar Test · Common and Proper Nouns · sort · match · capital letters · find the nouns",scoreByField:true,
      groups:groupsOf([["Common or proper?","Why a capital letter?",1],["Sort the nouns","people · places · things",1],["Common noun → proper noun","special names",1],["Capital letters","find the proper noun",1],["Find the nouns","sentences from this week",1],["Your turn","write a sentence",1]]),
      questions:TEST_Q,
      readings:[
        notes("notes-la-nouns-0611","Remember — Common and Proper Nouns",[
          "📅 Class Diary: 06/11/2026",
          "(06/11) Common nouns: name general people, places, or things. A common noun begins with a lowercase letter. Example: girl",
          "(06/11) Proper nouns: name specific people, places, or things. A proper noun begins with a capital letter. Example: Elm Park School",
          "(06/11) teacher → Miss Sheldon · zoo → Los Angeles Zoo · school → Elm Park School · day → Monday"
        ],"Grammar"),
        {id:"nouns-test",title:"Grammar: Common and Proper Nouns",byline:"Language Arts · Unit 2 Week 4",mode:"reference",images:[IMG("la-nouns-rule")],text:COMMON+"\nExample: girl\n"+PROPER+"\nExample: Elm Park School"}
      ]}
  });

  // ───────────────────────── SCIENCE · Unit 2 Module 1 Lesson 4 ─────────────────────────
  const LEQ="How does an animal’s behavior help it survive?";
  const COX="Animal behaviorists learn about animals. Dr. Cathleen Cox is an animal behaviorist. She works at the Los Angeles Zoo. She uses science every day to learn more about animal behavior. Dr. Cox studies the importance of animals’ surroundings in their activities, such as exploration and play.";
  const HELP="Some animals are trained to help people. Some animals use their sense of smell to help find people or things. Other animals help protect their owners by guiding them or giving them warnings. Dogs are the most common type of service animal.";
  const SCI_Q=[
    sci("STEM Module Project · What Does an Animal Behaviorist Do? (page 62)","Read the text.",[
      choice("learn","Animal behaviorists learn about ___.",["animals","plants","rocks"],"animals","🔬"),
      choice("cox","Dr. Cathleen Cox is an ___.",["animal behaviorist","bus driver","teacher"],"animal behaviorist","👩‍🔬"),
      choice("where","Where does Dr. Cox work?",["at the Los Angeles Zoo","at a school","at a farm"],"at the Los Angeles Zoo","🦁"),
      choice("science","She uses ___ every day to learn more about animal behavior.",["science","music","art"],"science","🧪"),
      choice("studies","Dr. Cox studies the importance of animals’ surroundings in their activities, such as ___.",["exploration and play","cooking and cleaning","reading and writing"],"exploration and play","🌿")
    ],COX,{readingId:"cox"}),
    sci("STEM Module Project · Animals Help People (page 63)","Read the text. Answer the question.",[
      choice("trained","Some animals are trained to help ___.",["people","plants","cars"],"people","🦮"),
      choice("smell","Some animals use their sense of ___ to help find people or things.",["smell","taste","touch"],"smell","👃"),
      choice("protect","Other animals help protect their owners by ___.",["guiding them or giving them warnings","eating their food","sleeping all day"],"guiding them or giving them warnings","🛡️"),
      choice("dogs","What is the most common type of service animal?",["dogs","cats","horses"],"dogs","🐕"),
      {...choice("road","1. How is this service dog helping its owner?",["It is helping its owner cross the road.","It is helping its owner press the elevator button.","It is playing with a ball."],"It is helping its owner cross the road.","🚸"),img:IMG("sci-dog-road"),bigImg:true},
      {...choice("elevator","1. How is this service dog helping its owner?",["It is helping its owner press the elevator button.","It is helping its owner cross the road.","It is eating its food."],"It is helping its owner press the elevator button.","🛗"),img:IMG("sci-dog-elevator"),bigImg:true}
    ],HELP+" These service dogs are helping their owners cross the road and press the elevator button.",{readingId:"help"}),
    sci("Lesson 4 Review · Explain the phenomenon","What do you think these animals are doing?",[
      {...choice("monkeys","Look at the photo. What do you think these animals are doing?",["The adult monkey is cleaning the baby monkey to take care of it.","The monkeys are fighting.","The monkeys are sleeping."],"The adult monkey is cleaning the baby monkey to take care of it.","🐒"),img:IMG("sci-monkeys"),bigImg:true},
      choice("eq","In Lesson 4 we learned: parents feed, protect, teach and take care of their young; baby birds make sounds to signal to their parents; a whale calf can swim right away. So the Essential Question of Lesson 4 is ___.",[LEQ,"What are the functions of animal structures?","Where do animals live together?"],LEQ,"❓"),
      choice("summarize","Summarize It: How do baby animals get what they need to survive?",["Baby animals make a sound or movement. They send a signal to their parents.","Baby animals go to the store.","Baby animals sleep until they are big."],"Baby animals make a sound or movement. They send a signal to their parents.","📣"),
      choice("hungry","Three-Dimensional Thinking: What will a baby animal do to communicate it is hungry?",["make noise to call a parent","find something to eat","go to sleep"],"make noise to call a parent","🐻"),
      multi("parents","How do animal parents help their offspring? Parents will ___. Choose 2.",["feed","protect","run away","sleep all day"],["feed","protect"],"👪"),
      {...choice("chimp","Explain how this chimpanzee is helping its offspring survive.",["It is taking care of the offspring by cleaning it.","It is teaching the offspring to fly.","It is hiding from the offspring."],"It is taking care of the offspring by cleaning it.","🐵"),img:IMG("sci-chimpanzee"),bigImg:true},
      choice("survive","Animal Messages: Signals and behaviors help young animals ___.",["survive","get lost","stay small"],"survive","🌱")
    ],"Essential Question: "+LEQ+" Baby animals make a sound or movement. They send a signal to their parents. A baby animal makes noise to call a parent when it is hungry. Parents will feed. Parents will protect. The chimpanzee is taking care of the offspring by cleaning it.",{readingId:"review"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-06-science",
    uploadDate:"2026-11-06",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"06/11/2026 · Unit 2 Module 1 Lesson 4 · STEM Module Project: animal behaviorist, service animals · Lesson 4 Review",scoreByField:true,
      groups:groupsOf([["STEM Module Project","What Does an Animal Behaviorist Do? · Animals Help People · pages 62–63",2],["Lesson 4 Review","Explain the phenomenon · Summarize It · Three-Dimensional Thinking",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-0611","Remember — Science",[
          "📅 Class Diary: 06/11/2026",
          "(06/11) Essential Question: "+LEQ,
          "(06/11) Animal behaviorists learn about animals. Dr. Cathleen Cox works at the Los Angeles Zoo.",
          "(06/11) Some animals are trained to help people. Dogs are the most common type of service animal.",
          "(06/11) These service dogs are helping their owners cross the road and press the elevator button.",
          "(06/11) Summarize It: Baby animals make a sound or movement. They send a signal to their parents.",
          "(06/11) A baby animal makes noise to call a parent when it is hungry. Parents will feed. Parents will protect.",
          "(06/11) Signals and behaviors help young animals survive. Animal babies learn behaviors from their parents."
        ],"Lesson 4"),
        {id:"cox",title:"What Does an Animal Behaviorist Do?",byline:"STEM Module Project · Science Book page 62",mode:"reference",images:[IMG("sci-behaviorist")],text:COX},
        {id:"help",title:"Animals Help People",byline:"STEM Module Project · Science Book page 63",mode:"reference",images:[IMG("sci-animals-help"),IMG("sci-dog-road"),IMG("sci-dog-elevator")],text:HELP+"\n1. How are these service animals helping people?"},
        {id:"review",title:"Lesson 4 Review",byline:"Animal Behaviors · slides + Science Book",mode:"reference",images:[IMG("sci-monkeys"),IMG("sci-summarize"),IMG("sci-3d-thinking")],text:"Explain the phenomenon: What do you think these animals are doing?\nEssential Question: "+LEQ+"\nSummarize It: Use what you have learned. How do baby animals get what they need to survive?\nThree-Dimensional Thinking: 1. What will a baby animal do to communicate it is hungry? (make noise to call a parent · find something to eat · go to sleep) 2. How do animal parents help their offspring? Think of the patterns you observed. Parents will…\nAnimal Messages: Signals and behaviors help young animals survive. A signal is a sound or movement that gives information. A parent responds to signals from its offspring. Learn means to gain knowledge or a skill. Animal babies learn behaviors from their parents.\nHomework: Vocabulary Check: Animal Behaviors."}
      ]}
  });

  // ───────────────────────── WELLBEING · Unit Project: Friendship Bracelets ─────────────────────────
  const WB_Q=[
    wb("Unit Project · Friendship Bracelets","Look at the bracelets. What do we need?",[
      choice("project","On 04/11 we learned that a friendship bracelet is a present for a friend, with their favourite colours and a pattern. Now we make one! So our Unit Project is called ___.",["Friendship Bracelets","A Comic Strip","My Special Day"],"Friendship Bracelets","📿"),
      multi("need","We need: Choose 3.",["crayons","scissors","glue","a ball","a spoon"],["crayons","scissors","glue"],"✂️"),
      multi("words","Which words are on the bracelets in the picture? Choose 3.",["KIND","FRIENDS","SUNSHINE","ANGRY","LONELY"],["KIND","FRIENDS","SUNSHINE"],"🌈"),
      choice("present","A friendship bracelet is a present for a ___.",["friend","teacher","dog"],"friend","🎁"),
      free("write","Write a kind word or your friend’s name for your bracelet.","✏️")
    ],"Unit Project: Friendship Bracelets. We need crayons, scissors and glue. Bracelet words: KIND · FRIENDS · SUNSHINE · a friend’s name (CHLOE). A friendship bracelet is a present for a friend.",{readingId:"bracelets"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-06-wellbeing",
    uploadDate:"2026-11-06",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"06/11/2026 · Unit Project · Friendship Bracelets",scoreByField:true,
      groups:groupsOf([["Unit Project","Friendship Bracelets",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-0611","Remember — Wellbeing",[
          "📅 Class Diary: 06/11/2026",
          "(06/11) Unit Project: Friendship Bracelets",
          "(06/11) We need: crayons · scissors · glue"
        ],"Unit Project"),
        {id:"bracelets",title:"Unit Project — Friendship Bracelets",byline:"Wellbeing",mode:"reference",images:[IMG("wb-bracelets")],text:"Unit Project: Friendship Bracelets\nWe need: crayons, scissors, glue."}
      ]}
  });
})();
