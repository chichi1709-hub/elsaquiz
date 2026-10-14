// Quiz 13/10/2026 — Class Diary 13/10/2026 + file đính kèm "Cubs in a Hut.pdf" và
// "Functions of Animal Structures.pdf" + nội dung các link trong diary.
// Language Arts: Unit 2 Week 2 · Science: Unit 2 Module 1 Lesson 2 (ôn cho bài test thứ Năm).
// Ảnh: web/assets/2026-10-13/ (tạo bằng web/_reference/tao_anh_2026-10-13.py).
(()=>{
  const IMG=name=>`assets/2026-10-13/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:Array.isArray(answer)?answer:[answer],icon});
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  const order=(id,label,position,count,icon)=>({id,label,type:"select",choices:Array.from({length:count},(_,i)=>String(i+1)),answer:String(position),icon});
  // answers[0] là câu mẫu; các phần tử sau là cụm từ khoá (câu bé viết có đủ các từ đó là đúng).
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const card=img=>(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,hint,...extra});
  const photo=(section,img,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,fields,explain,hint,...extra});
  const la=card(L),sci=card(S);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Link cô giáo giao trong Class Diary 13/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const HFW=["could","live","one","then","three"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const cubsText=["Cubs in a Hut","“Let’s make a hut,” said Gus.\n“We could use mud,” said Russ.\n“It will be fun!” said Bud.","The cubs had a plan.\nBud got a big stack of sticks.\nRuss and Gus got mud and grass.","The cubs did a very good job.\n“Let’s move in!” yelled Russ.\n“Yes, yes!” yelled Bud and Gus.","The cubs set up rugs and beds.\nThey filled up the hut with lots of stuff.","Then one night three cubs got up.\nDrip, drip, drip!\n“My bed is wet!” yelled Bud.","“My head is wet!” yelled Gus.\n“It’s not fun to live in a wet hut!” yelled Russ.","“We must fix it,” said Bud.\n“It will not drip on us,” said Gus.\n“We will not get wet,” said Russ.","It is good to live in a dry hut.\nThree cubs are as snug as bugs in a rug!"];

  const LA_Q=[
    // ── Homework check: Practice Book tr.99–100 (short u) ──
    la("Short u · Practice Book 99","Write a word from the box to describe each picture.",[
      bank("up","🎈 (a girl looking up at a balloon)",["sun","bus","up","drum","mud"],"up","🎈"),
      bank("bus","🚌",["sun","bus","up","drum","mud"],"bus","🚌"),
      bank("sun","☀️",["sun","bus","up","drum","mud"],"sun","☀️"),
      bank("drum","🥁",["sun","bus","up","drum","mud"],"drum","🥁")
    ],"1. up · 2. bus · 3. sun · 4. drum (Practice Book, page 99)","The letter u can make the short u sound you hear in rug.",{wordBank:["sun","bus","up","drum","mud"]}),
    la("Short u · Practice Book 100","Change one letter to make a new word with the short u sound.",[
      fill("not","not → ___","nut","🥜"),
      fill("ran","ran → ___","run","🏃"),
      fill("bag","bag → ___","bug","🐞"),
      fill("fan","fan → ___","fun","🎉")
    ],"not → nut · ran → run · bag → bug · fan → fun (Practice Book, page 100)","Đổi nguyên âm ở giữa thành u."),

    // ── Phonological Awareness: Identify and Produce Rhyme ──
    la("Rhyme · bug and rug","Bug and rug rhyme because they both end with the same sounds.",[
      choice("end","Bug and rug end with the sounds ___.",["/ug/","/un/","/up/"],"/ug/","🐞"),
      multi("more","Which words rhyme with bug and rug? Choose 4.",["tug","mug","slug","hug","bed","cat"],["tug","mug","slug","hug"],"☕")
    ],"Bug and rug end with the sounds /ug/. Tug, mug, slug, and hug rhyme with bug and rug.","Rhyme = 2 từ có phần cuối giống nhau."),
    la("Rhyme · Which words rhyme?","Choose the 2 words that rhyme.",[
      multi("sad","sad · hat · dad",["sad","hat","dad"],["sad","dad"],"😢"),
      multi("bus","bus · run · fun",["bus","run","fun"],["run","fun"],"🏃"),
      multi("cut","cut · nut · win",["cut","nut","win"],["cut","nut"],"✂️"),
      multi("pop","pop · bug · rug",["pop","bug","rug"],["bug","rug"],"🐞")
    ],"sad – dad · run – fun · cut – nut · bug – rug","Đọc to 3 từ, chọn 2 từ có vần giống nhau."),
    la("Rhyme · Odd one out","Which word does NOT rhyme?",[
      choice("fuzz","fuzz · buzz · bug",["fuzz","buzz","bug"],"bug","🐝"),
      choice("net","net · bat · wet",["net","bat","wet"],"bat","🦇"),
      choice("rust","rust · bust · egg",["rust","bust","egg"],"egg","🥚"),
      choice("plum","plum · glum · tag",["plum","glum","tag"],"tag","🏷️"),
      choice("nut","nut · win · but",["nut","win","but"],"win","🏆")
    ],"fuzz–buzz (bug ✗) · net–wet (bat ✗) · rust–bust (egg ✗) · plum–glum (tag ✗) · nut–but (win ✗)","Tìm từ có phần cuối khác 2 từ kia."),
    // Video "Rocco the Rhyming Rhino" (hat–cat, hi–bye, man–can, hug–bug) + game Wordwall "Rhyming words"
    // (chỉ lấy các cặp viết giống nhau, hợp lớp 1).
    la("Rhyme · Video and game","Which word rhymes?",[
      select("hat","hat",["cat","bye","can","bug"],"cat","🎩"),
      select("hi","hi",["cat","bye","can","bug"],"bye","👋"),
      select("man","man",["cat","bye","can","bug"],"can","👨"),
      select("hug","hug",["cat","bye","can","bug"],"bug","🤗"),
      select("moon","moon",["spoon","car","spell"],"spoon","🌙"),
      select("star","star",["spoon","car","spell"],"car","⭐"),
      select("well","well",["spoon","car","spell"],"spell","🪣")
    ],"hat – cat · hi – bye · man – can · hug – bug (Rocco the Rhyming Rhino) · moon – spoon · star – car · well – spell (game Rhyming words)","Rocco nghe bằng tai, nghĩ bằng đầu rồi nói từ cùng vần."),

    // ── High-frequency words: could, live, one, then, three ──
    {section:"High-Frequency Words · Examples",img:L,layout:"icon-activity",text:"Use the words in the box to complete the sentences.",type:"compound",wordBank:HFW,fields:[
      bank("could","I ___ pull a big sled.",HFW,"could","🛷"),
      bank("live","Does a fox ___ in a den?",HFW,"live","🦊"),
      bank("one","There is ___ frog on the log.",HFW,"one","🐸"),
      bank("then","What did you do ___?",HFW,"then","❓"),
      bank("three","___ black dogs run in the grass.",HFW,"three","🐕")
    ],explain:"I could pull a big sled. · Does a fox live in a den? · There is one frog on the log. · What did you do then? · Three black dogs run in the grass.",hint:"5 từ mới: could · live · one · then · three."},
    la("High-Frequency Words · Notebook","Complete the sentences you copied in your notebook.",[
      bank("play","I ___ play today.",HFW,"could","⚽"),
      bank("hanoi","I ___ in Hanoi.",HFW,"live","🏙️"),
      bank("toy","There is ___ toy.",HFW,"one","🧸"),
      bank("do","What did you do ___?",HFW,"then","❓"),
      bank("dogs","___ dogs run in the grass.",HFW,"three","🐕")
    ],"1) I could play today. · 2) I live in Hanoi. · 3) There is one toy. · 4) What did you do then? · 5) Three dogs run in the grass. (Notebook 13/10/2026)","Câu cô cho chép vào vở ngày 13/10.",{wordBank:HFW}),

    // ── Shared Read: Cubs in a Hut (Fantasy) ──
    la("Cubs in a Hut · Fantasy","Read the story first. Then choose.",[
      choice("genre","Cubs in a Hut is a fantasy. Fantasy can also have a ___.",["problem and solution","map and labels","list of numbers"],"problem and solution","🐻"),
      choice("who","Who are the characters?",["three bear cubs","three pigs","three dassies"],"three bear cubs","🐻")
    ],"Genre: Fantasy — it can also have a problem and solution. The characters are three bear cubs: Gus, Russ and Bud.","Đọc truyện ở trên trước khi trả lời.",{readingId:"cubs"}),
    la("Cubs in a Hut · Details","Find the answers in the story.",[
      choice("make","Who said, “Let’s make a hut”?",["Gus","Russ","Bud"],"Gus","🛖"),
      choice("sticks","Who got a big stack of sticks?",["Bud","Gus","Russ"],"Bud","🪵"),
      multi("made","What did the cubs use to make the hut? Choose 3.",["mud","sticks","grass","bricks","glass"],["mud","sticks","grass"],"🛖"),
      multi("inside","What did the cubs set up in the hut? Choose 2.",["rugs","beds","cars","trees"],["rugs","beds"],"🛏️")
    ],"“Let’s make a hut,” said Gus. Bud got a big stack of sticks. Russ and Gus got mud and grass. The cubs set up rugs and beds.","Essential Question: What are buildings made of? Hut của các bạn gấu làm bằng gì?"),
    la("Cubs in a Hut · Problem and solution","What is the problem? How do the cubs solve it?",[
      choice("problem","What is the cubs’ problem?",["The hut drips and their beds get wet.","They cannot find mud.","They are hungry."],"The hut drips and their beds get wet.","💧"),
      choice("solution","What do the cubs do?",["They fix the hut.","They move to a new town.","They go to sleep in the rain."],"They fix the hut.","🔨"),
      choice("end","How do the cubs feel at the end?",["as snug as bugs in a rug","wet and sad","angry"],"as snug as bugs in a rug","🛌")
    ],"Problem: Drip, drip, drip! The beds and heads are wet. Solution: “We must fix it,” said Bud. Ending: It is good to live in a dry hut. Three cubs are as snug as bugs in a rug!","Problem = rắc rối · solution = cách giải quyết."),
    la("Cubs in a Hut · True or false","Read and choose TRUE or FALSE.",[
      tf("fun","Bud said, “It will be fun!”",true,"🎉"),
      tf("glass","The cubs made the hut with glass.",false,"🪟"),
      tf("night","One night the hut dripped.",true,"🌙"),
      tf("wet","At the end, the cubs live in a wet hut.",false,"💧")
    ],"1. TRUE · 2. FALSE (mud, sticks and grass) · 3. TRUE (Then one night… Drip, drip, drip!) · 4. FALSE (It is good to live in a dry hut.)","Đối chiếu với truyện: đúng chọn TRUE, sai chọn FALSE."),
    la("Cubs in a Hut · Story order","Put the events in order. 1 = first, 4 = last.",[
      order("fix","The cubs fix the hut.",4,4,"🔨"),
      order("plan","The cubs make a plan to make a hut.",1,4,"🗺️"),
      order("drip","One night the hut drips.",3,4,"💧"),
      order("move","The cubs move in with rugs and beds.",2,4,"🛏️")
    ],"1. The cubs make a plan. · 2. They move in with rugs and beds. · 3. One night the hut drips. · 4. They fix the hut.","Việc nào xảy ra trước?"),
    la("Cubs in a Hut · Write a full sentence","Answer with a full sentence.",[
      write("fix","What do the cubs do when the hut drips?",["They fix the hut.","fix"],"✍️")
    ],"“We must fix it,” said Bud. The cubs fix the hut, so it is dry.","Viết câu tiếng Anh có từ fix."),

    // ── Writing and Grammar: RWC tr.58–59 ──
    la("Writing · Descriptive details","Writing Trait: Descriptive details tell more about your ideas.",[
      choice("detail","I helped my little brother with his homework. Which word is a descriptive detail?",["little","helped","with"],"little","✏️"),
      choice("skill","When you write, the words go from ___.",["left to right and top to bottom","right to left","bottom to top"],"left to right and top to bottom","➡️")
    ],"Descriptive details tell more about your ideas: “little” brother. Writing Skill: Remember that when you write, the words go from left to right and top to bottom.","Descriptive detail = từ nói rõ thêm (nhỏ, to, đỏ…).")
  ];

  registerQuiz({
    id:"class-diary-2026-10-13-language",
    uploadDate:"2026-10-13",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"13/10/2026 · Unit 2 Week 2 · short u, rhyme, could/live/one/then/three, Cubs in a Hut",scoreByField:true,
      groups:groupsOf([["Short u (Homework check)","Practice Book pages 99 and 100",2],["Phonological Awareness: Rhyme","Identify and produce rhyme",4],["High-Frequency Words","could · live · one · then · three",2],["Shared Read: Cubs in a Hut","Fantasy · problem and solution · Reading and Writing Companion page 48",6],["Writing","Descriptive details · Reading and Writing Companion pages 58-59",1]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1310","Ghi nhớ — Language Arts",[
          "📅 Lấy từ Class Diary: 13/10/2026 (+ file đính kèm Cubs in a Hut)",
          "(13/10) Bug and rug rhyme because they both end with the same sounds: /ug/.",
          "(13/10) High-frequency words: could · live · one · then · three.",
          "(13/10) Genre: Fantasy. It can also have a problem and solution.",
          "(13/10) The letter u can stand for the sound /u/.",
          "(13/10) Writing Trait: Descriptive details tell more about your ideas."
        ],"Unit 2 Week 2"),
        {id:"cubs",title:"Cubs in a Hut",byline:"Shared Read · Reading and Writing Companion, page 48 · Fantasy",images:cubsText.map((_,i)=>IMG(`cubs-${String(i+1).padStart(2,"0")}`)),text:cubsText.join("\n\n")},
        bonus("bonus-la-1310",[
          {label:"Video: Rhyming words",url:"https://www.youtube.com/watch?v=nAUdQZ8Xivw"},
          {label:"Game: Rhyming words",url:"https://wordwall.net/resource/10197518/rhyming-words"},
          {label:"Video: Cubs in a Hut",url:"https://www.youtube.com/watch?v=EJu-msisNog"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  const biologistText="Biologists are scientists who study life. They study all types of living things. Wildlife biologists study animals. They learn about where they live, what they eat, and how they behave. Wildlife biologists also study how the world around living things helps or hurts them.";
  const SCI_Q=[
    // ── STEM Connection (Student Book tr.28–29) ──
    photo("STEM Connection · Wildlife biologist",IMG("biologist"),"Read the text. Then answer.",[
      choice("study","Biologists study ___.",["living things","rocks","cars"],"living things","🔬"),
      choice("wildlife","Wildlife biologists study ___.",["animals","buildings","weather"],"animals","🐢"),
      multi("learn","What do they learn about animals? Choose 3.",["where they live","what they eat","how they behave","what color cars they like"],["where they live","what they eat","how they behave"],"📝"),
      choice("why","Why do wildlife biologists need to study where animals live?",["So that they can have a better understanding of animal homes.","So that they can build houses.","So that they can sell animals."],"So that they can have a better understanding of animal homes.","🏠")
    ],"Biologists are scientists who study life. Wildlife biologists study animals: where they live, what they eat, and how they behave. They study where animals live so that they can have a better understanding of animal homes.","Đọc đoạn văn về nhà sinh vật học ở trên.",{readingId:"biologist"}),
    // ── Lesson 2 Review ──
    photo("Lesson 2 Review · Hummingbird",IMG("hummingbird"),"Explain the phenomenon: Why are the hummingbird's wings blurry?",[
      choice("why","Choose the best answer.",["The hummingbird uses its wings to fly, and its wings move very fast.","The hummingbird has no wings.","The wings are wet."],"The hummingbird uses its wings to fly, and its wings move very fast.","🐦"),
      write("explain","Write one sentence about the hummingbird's wings.",["The hummingbird uses its wings to fly, and its wings move very fast.","fast","fly"],"✍️")
    ],"Summarize It: The hummingbird uses its wings to fly, and its wings move very fast.","Câu viết cần có từ fly hoặc fast."),
    // ── Three-Dimensional Thinking ──
    photo("Three-Dimensional Thinking · Porcupine",IMG("porcupine"),"Porcupines are covered in sharp quills.",[
      choice("quills","Which is correct?",["The quills are a structure that keeps the porcupine safe.","The quills do not help protect the porcupine."],"The quills are a structure that keeps the porcupine safe.","🦔")
    ],"The quills are a structure that keeps the porcupine safe.","quills = lông gai nhọn của nhím."),
    photo("Three-Dimensional Thinking · Rabbit",IMG("rabbit"),"Why does this animal have such large ears?",[
      choice("ears","The ears help this animal ___.",["hear when danger is near","eat its food","move from place to place"],"hear when danger is near","🐇")
    ],"c. The ears help this animal hear when danger is near.","Tai to giúp thỏ nghe thấy nguy hiểm."),
    // ── Extend It ──
    photo("Extend It · Hummingbird with no wings",IMG("hummingbird"),"Think about a hummingbird with no wings.",[
      choice("nowings","How could this missing structure affect the bird?",["The bird cannot fly, so it cannot drink the nectar from flowers.","The bird can fly faster.","Nothing changes."],"The bird cannot fly, so it cannot drink the nectar from flowers.","🌺")
    ],"The bird cannot fly, so it cannot drink the nectar from flowers. (nectar = mật hoa)","Không có cánh thì chim ruồi làm được gì?"),
    // ── Ôn Lesson 2 (file đính kèm Functions of Animal Structures) ──
    sci("Lesson 2 · Animal Protection","Choose the correct answer.",[
      choice("protection","Protection keeps things ___.",["safe from harm","wet","hungry"],"safe from harm","🛡️"),
      choice("bodyparts","Animals use body parts to protect themselves or ___.",["build homes","go to school","drive cars"],"build homes","🏠"),
      multi("live","Animals use their ___ to help them live. Choose 4.",["nose","mouth","eyes","ears","hat"],["nose","mouth","eyes","ears"],"👀")
    ],"Protection keeps things safe from harm. Animals use body parts to protect themselves or build homes. Animals use their nose, mouth, eyes, and ears to help them live.","Ôn slide Animal Protection (file đính kèm).",{readingId:"lesson2"}),
    // Game Wordwall "Animals Structure Function" (link diary 13/10) — bỏ antennae, exoskeleton (game lớp 4).
    sci("Lesson 2 · Vocabulary game","Match the word with its meaning.",[
      select("structure","structure",["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly"],"body part that helps an animal survive","🦴"),
      select("function","function",["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly"],"job of a body part","⚙️"),
      select("eyes","eyes",["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly"],"help animals see","👀"),
      select("legs","legs",["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly"],"help animal walk","🦵"),
      select("wings","wings",["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly"],"help animal fly","🪽")
    ],"structure → body part that helps an animal survive · function → job of a body part · eyes → help animals see · legs → help animal walk · wings → help animal fly (game Animals Structure Function)","Ôn từ vựng cho bài kiểm tra thứ Năm."),
    sci("Lesson 2 · True or false","Read and choose TRUE or FALSE.",[
      tf("eq","Lesson 2 asks: What are the functions of different animal body parts?",true,"❓"),
      tf("quills","Porcupine quills do not help protect the porcupine.",false,"🦔"),
      tf("rabbit","A rabbit's large ears help it hear when danger is near.",true,"🐇"),
      tf("biologist","Wildlife biologists study buildings.",false,"🔬")
    ],"1. TRUE (Essential Question) · 2. FALSE (quills keep the porcupine safe) · 3. TRUE · 4. FALSE (they study animals)","Đúng chọn TRUE, sai chọn FALSE."),
    // ── Science Probe (Lesson 3 Launch — xem trước) ──
    photo("Science Probe · Puppies (Lesson 3)",IMG("puppies-probe"),"Winnie's dog had six puppies. Which best describes the puppies?",[
      choice("puppies","Choose one.",["They look exactly like their mother.","They look similar to their mother.","They look very different from their mother."],"They look similar to their mother.","🐶")
    ],"Offspring look similar to their parents, but they do not look exactly the same. (offspring = con non)","Phiếu này là mở đầu Lesson 3: Animals and Their Parents.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-13-science",
    uploadDate:"2026-10-13",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"13/10/2026 · Lesson 2 Review (test on Thursday) · Wildlife biologist · porcupine, rabbit, hummingbird",scoreByField:true,
      groups:groupsOf([["STEM Connection: What Does a Wildlife Biologist Do?","Student Book pages 28 and 29",1],["Lesson 2 Review","Summarize It · Three-Dimensional Thinking · Extend It",4],["Review Lesson 2 for the test","Functions of Animal Structures (file đính kèm)",3],["Science Probe: Puppies","Lesson 3 Launch · Animals and Their Parents",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1310","Ghi nhớ — Science",[
          "📅 Lấy từ Class Diary: 13/10/2026 (+ file đính kèm Functions of Animal Structures)",
          "(13/10) Biologists are scientists who study life. Wildlife biologists study animals.",
          "(13/10) The hummingbird uses its wings to fly, and its wings move very fast.",
          "(13/10) The quills are a structure that keeps the porcupine safe.",
          "(13/10) The ears help a rabbit hear when danger is near.",
          "(file đính kèm) Essential Question: What are the functions of different animal body parts?",
          "⚠️ Review Lesson 2 carefully for the test on THURSDAY."
        ],"Unit 2 Module 1 · Lesson 2"),
        {id:"biologist",title:"What Does a Wildlife Biologist Do?",byline:"STEM Connection · Student Book pages 28-29",mode:"reference",images:[IMG("stem-biologist-text"),IMG("biologist")],text:biologistText},
        {id:"lesson2",title:"Animal Protection",byline:"Functions of Animal Structures (slides)",mode:"reference",images:[IMG("fas-protection-slide")],text:"Protection keeps things safe from harm.\nAnimals use body parts to protect themselves or build homes.\nAnimals use their nose, mouth, eyes, and ears to help them live."},
        bonus("bonus-sci-1310",[{label:"Game: Animal structures and functions",url:"https://wordwall.net/resource/14757170/science/animals-structure-function"}])
      ]}
  });
})();
