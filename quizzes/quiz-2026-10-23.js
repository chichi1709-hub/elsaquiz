// Quiz 23/10/2026 — Class Diary 23/10/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 3 (Essential Question: Where do animals live together? · habitats · oral vocabulary habitat/depend ·
// phoneme blending · phonics: end blends st, nk …). Science: Lesson 3 Inquiry Activity "Dogs Change as They Grow".
// (Diary ghi "Unit 2 Module 2" — cùng module Animal Parents and Their Offspring, Lesson 3.)
// Wellbeing: Unit 1.4 Lesson 2 "We are all the same, we are all different".
// Ảnh: web/assets/2026-10-23/ (tạo bằng web/_reference/tao_anh_2026-10-23.py).
(()=>{
  const IMG=name=>`assets/2026-10-23/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Links from the Class Diary 23/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const BLEND=["st","nk","mp","nd","sk","nt"];

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 3 ─────────────────────────
  const LA_Q=[
    la("Build Knowledge · Where do animals live together?","Look at the picture on page 78.",[
      choice("eq","We see penguins on ice and snow. Animals live together in many places. So what is the Essential Question of this week?",["Where do animals live together?","What buildings do you know? What are they made of?","What jobs need to be done in a community?"],"Where do animals live together?","❓"),
      choice("see","What do you see?",["penguins","lions","fish"],"penguins","🐧"),
      choice("swim","Do penguins swim?",["Yes, penguins swim.","No, penguins can’t swim."],"Yes, penguins swim.","🌊"),
      choice("stand","What are they standing on?",["ice","sand","grass"],"ice","🧊"),
      choice("cold","How do you know the penguins’ habitat is cold?",["I know it is cold because I see ice and snow.","I know it is cold because I see the sun.","I know it is cold because I see trees."],"I know it is cold because I see ice and snow.","❄️")
    ],"Essential Question: Where do animals live together? Penguins swim. They are standing on ice. I know their habitat is cold because I see ice and snow.",{readingId:"penguins"}),
    la("Build Vocabulary · Where animals live together","Reading and Writing Companion, page 78.",[
      multi("places","Which are places where animals live together? Choose 6.",["arctic","jungle","ocean","forest","desert","grassland","bakery","bus"],["arctic","jungle","ocean","forest","desert","grassland"],"🌍"),
      select("penguin","🐧 penguins",["arctic","jungle","ocean","desert"],"arctic","🐧"),
      select("monkey","🐒 monkeys",["arctic","jungle","ocean","desert"],"jungle","🐒"),
      select("whale","🐋 whales",["arctic","jungle","ocean","desert"],"ocean","🐋"),
      select("camel","🐫 camels",["arctic","jungle","ocean","desert"],"desert","🐫")
    ],"Where animals live together: arctic, jungle, ocean, forest, desert, grassland, river, zoo, Alaska. A habitat is the place where an animal lives in nature.",{readingId:"buildvocab"}),
    la("Oral Vocabulary · habitat and depend","Define · Example · Ask.",[
      choice("habitat","A habitat is ___.",["the place where an animal lives in nature","a kind of food","a building for people"],"the place where an animal lives in nature","🏞️"),
      choice("bear","A black bear’s habitat is the ___.",["forest","ocean","desert"],"forest","🐻"),
      choice("dolphin","What is the habitat of dolphins and whales?",["the ocean","the forest","the desert"],"the ocean","🐬"),
      choice("depend","When you depend on something, you ___.",["rely on it for the things you need","run away from it","throw it away"],"rely on it for the things you need","🤝"),
      choice("babies","Babies depend on their parents for ___.",["food and shelter","toys only","nothing"],"food and shelter","👶")
    ],"Define: A habitat is the place where an animal lives in nature. Example: A black bear’s habitat is the forest. Define: When you depend on something, you rely on it for the things you need. Example: Babies depend on their parents for food and shelter.",{readingId:"oralvocab"}),
    la("Phonemic Awareness · Phoneme Blending","Say the sounds. Then blend them to form a word.",[
      choice("hand","/h/ /a/ /n/ /d/",["hand","hat","had"],"hand","✋"),
      choice("last","/l/ /a/ /s/ /t/",["last","lamp","lap"],"last","🏁"),
      choice("jump","/j/ /u/ /m/ /p/",["jump","jug","just"],"jump","🦘"),
      choice("best","/b/ /e/ /s/ /t/",["best","bed","bet"],"best","🥇"),
      choice("link","/l/ /i/ /n/ /k/",["link","lid","lip"],"link","🔗"),
      choice("skunk","/s/ /k/ /u/ /n/ /k/",["skunk","sun","stuck"],"skunk","🦨")
    ],"/h/ /a/ /n/ /d/ → hand · /l/ /a/ /s/ /t/ → last · /j/ /u/ /m/ /p/ → jump · /b/ /e/ /s/ /t/ → best · /l/ /i/ /n/ /k/ → link · Practice Book 113: skunk, pond, nest, sink, stamp.",{readingId:"blending"}),
    la("Phonics · End blends st and nk","Some words have end blends. The letters st make the ending sounds in nest. The letters nk make the ending sounds in sink.",[
      select("nest","🪺 ne___",BLEND,"st","🪺"),
      select("sink","🚰 si___",BLEND,"nk","🚰"),
      select("trunk","🐘 tru___",BLEND,"nk","🐘"),
      select("jump","🦘 ju___",BLEND,"mp","🦘"),
      select("sand","🏖️ sa___",BLEND,"nd","🏖️"),
      select("mask","🎭 ma___",BLEND,"sk","🎭"),
      select("ant","🐜 a___",BLEND,"nt","🐜")
    ],"nest (st) · sink (nk) · trunk (nk) · jump (mp) · sand (nd) · mask (sk) · ant (nt). End blends: two consonants at the end of a word, and you hear both sounds.",{readingId:"phonics"}),
    la("Phonics · Read the words","Phonics Practice Activity.",[
      multi("st","Which words end with st? Choose 4.",["nest","last","must","trust","sand","desk"],["nest","last","must","trust"],"🪺"),
      multi("nk","Which words end with nk? Choose 2.",["trunk","blink","jump","ant"],["trunk","blink"],"🐘"),
      choice("s1","An ant is not ___.",["fast","fist","fat"],"fast","🐜"),
      choice("s2","Is the test on the ___?",["desk","disk","dusk"],"desk","📝"),
      choice("s3","The skunk is in the ___!",["tent","ten","tend"],"tent","⛺")
    ],"st: nest, last, must, trust · nk: trunk, blink · An ant is not fast. Is the test on the desk? The skunk is in the tent!")
  ];
  registerQuiz({
    id:"class-diary-2026-10-23-language",
    uploadDate:"2026-10-23",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"23/10/2026 · Unit 2 Week 3 · Where do animals live together? · habitat · depend · Phoneme blending · End blends st, nk",scoreByField:true,
      groups:groupsOf([["Build Knowledge","Essential Question: Where do animals live together?",2],["Oral Vocabulary","habitat · depend",1],["Phonemic Awareness","Phoneme Blending · Practice Book 113",1],["Phonics","End blends st, nk, mp, nd, sk, nt",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-2310","Remember — Language Arts",[
          "📅 Class Diary: 23/10/2026",
          "(23/10) Essential Question: Where do animals live together?",
          "(23/10) Define: A habitat is the place where an animal lives in nature. Example: A black bear’s habitat is the forest.",
          "(23/10) Define: When you depend on something, you rely on it for the things you need. Example: Babies depend on their parents for food and shelter.",
          "(23/10) Where animals live together: arctic · jungle · ocean · forest · desert · grassland · river · zoo",
          "(23/10) Some words have end blends, such as st and nk: nest, sink.",
          "(23/10) Phoneme Blending: /h/ /a/ /n/ /d/ → hand"
        ],"Unit 2 Week 3"),
        {id:"penguins",title:"Build Knowledge",byline:"Reading and Writing Companion page 78 · Essential Question",images:[IMG("penguins")],text:"Essential Question: Where do animals live together?\nWhere do you think these penguins are? What do you see? Do penguins swim? What are they standing on? How do you know the penguins’ habitat is cold or warm?"},
        {id:"buildvocab",title:"Build Vocabulary",byline:"Reading and Writing Companion page 79",mode:"reference",images:[IMG("build-vocabulary")],text:"Where Animals Live Together: arctic, jungle, ocean, forest, desert, grassland, habitat, river, zoo, Alaska."},
        {id:"oralvocab",title:"Oral Vocabulary Routine",byline:"habitat · depend",mode:"reference",images:[IMG("oral-vocabulary")],text:"Define: A habitat is the place where an animal lives in nature. Example: A black bear’s habitat is the forest. Ask: What is the habitat of dolphins and whales?\nDefine: When you depend on something, you rely on it for the things you need. Example: Babies depend on their parents for food and shelter. Ask: Whom do you depend on for the things you need?"},
        {id:"blending",title:"Phoneme Blending",byline:"Phonemic Awareness",mode:"reference",images:[IMG("phoneme-blending")],text:"Say a group of sounds. Then blend those sounds to form a word."},
        {id:"phonics",title:"End blends st and nk",byline:"Phonics · Class Diary 23/10",mode:"reference",images:[IMG("phonics-st-nk"),IMG("phonics-practice")],text:"Some words have end blends, such as st and nk. The letters st make the ending sounds in nest. The letters nk make the ending sounds in sink."},
        bonus("bonus-la-2310",[
          {label:"Video: Where Plants and Animals Live",url:"https://www.youtube.com/watch?v=9_a68jGhJVc"},
          {label:"Video: ST ending blend",url:"https://www.youtube.com/watch?v=30JDH6k-rsE"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  const STAGES=["1st (newborn)","2nd","3rd","4th (adult)"];
  const SCI_Q=[
    sci("Inquiry Activity · Dogs Change as They Grow","Make a prediction: How will a dog change as it gets older?",[
      choice("predict","Choose the best prediction.",["The dog will be bigger as it grows.","The dog will get smaller.","The dog will turn into a cat."],"The dog will be bigger as it grows.","🐶")
    ],"Make a Prediction: The dog will be bigger as it grows.",{readingId:"dogs"}),
    sci("Investigate · Order the photos","Observe the photos of the dog. Order the photos to show how the dog grows.",[
      select("newborn","🐾 Photo A: a tiny puppy lying down",STAGES,"1st (newborn)","🍼"),
      select("puppy","🐾 Photo B: a small puppy standing",STAGES,"2nd","🐕"),
      select("young","🐾 Photo C: a bigger young dog sitting",STAGES,"3rd","🐕‍🦺"),
      select("adult","🐾 Photo D: a big grown-up dog",STAGES,"4th (adult)","🦮")
    ],"The dog grows: a tiny newborn puppy lying down → a small puppy → a bigger young dog → a big adult dog.",{readingId:"dogphotos"}),
    sci("Record Data and Communicate","How does the dog change?",[
      choice("change","How does the dog change as it grows?",["It gets bigger.","It gets smaller.","It does not change."],"It gets bigger.","📏"),
      choice("support","Did your observations support your prediction?",["Yes, the dog’s size changed, and it got bigger.","No, the dog stayed the same.","No, the dog got smaller."],"Yes, the dog’s size changed, and it got bigger.","✅"),
      choice("same","What stays the same as the dog grows?",["It is still a dog with the same kind of fur colors.","It turns into a bird.","It gets wings."],"It is still a dog with the same kind of fur colors.","🐾")
    ],"Yes, the dog’s size changed, and it got bigger. The puppy grows into an adult dog that looks similar to its parents."),
    sci("Homework game · Animals and their babies","Match the animal with its baby (game Animals Offspring).",[
      select("cat","cat",["kitten","puppy","calf","cub","kid","fawn"],"kitten","🐱"),
      select("dog","dog",["kitten","puppy","calf","cub","kid","fawn"],"puppy","🐶"),
      select("cow","cow",["kitten","puppy","calf","cub","kid","fawn"],"calf","🐄"),
      select("lion","lion",["kitten","puppy","calf","cub","kid","fawn"],"cub","🦁"),
      select("goat","goat",["kitten","puppy","calf","cub","kid","fawn"],"kid","🐐"),
      select("deer","deer",["kitten","puppy","calf","cub","kid","fawn"],"fawn","🦌")
    ],"cat → kitten · dog → puppy · cow → calf · lion → cub · goat → kid · deer → fawn")
  ];
  registerQuiz({
    id:"class-diary-2026-10-23-science",
    uploadDate:"2026-10-23",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"23/10/2026 · Lesson 3: Animals and Their Parents · Inquiry Activity: Dogs Change as They Grow",scoreByField:true,
      groups:groupsOf([["Inquiry Activity: Dogs Change as They Grow","Student Book pages 46 and 47 · predict · investigate · communicate",3],["Homework game","Animals and their babies",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-2310","Remember — Science",[
          "📅 Class Diary: 23/10/2026",
          "(23/10) Make a Prediction: The dog will be bigger as it grows.",
          "(23/10) A dog grows: newborn puppy → puppy → young dog → adult dog.",
          "(23/10) Yes, the dog’s size changed, and it got bigger.",
          "(23/10) Baby animals: cat – kitten · dog – puppy · cow – calf · lion – cub · goat – kid · deer – fawn"
        ],"Unit 2 · Lesson 3"),
        {id:"dogs",title:"Dogs Change as They Grow",byline:"Inquiry Activity · Student Book pages 46–47",mode:"reference",images:[IMG("dogs-investigate")],text:"Make a Prediction: How will a dog change as it gets older?\n1. Observe the photos of the dog. Order the photos to show how the dog grows.\n2. Number the photos 1, 2, 3, and 4.\n3. Record Data: How does the dog change? Use pictures or words to explain.\n4. Did your observations support your prediction? Explain."},
        {id:"dogphotos",title:"Photos of the dog",byline:"Photo A · Photo B · Photo C · Photo D",mode:"reference",images:[IMG("dog-newborn"),IMG("dog-puppy"),IMG("dog-young"),IMG("dog-adult")],text:"Photo A: a tiny puppy lying down · Photo B: a small puppy standing · Photo C: a bigger young dog sitting · Photo D: a big grown-up dog"},
        bonus("bonus-sci-2310",[{label:"Game: Animals Offspring",url:"https://wordwall.net/resource/30459871/animals-offspring"}])
      ]}
  });

  // ───────────────────────── WELLBEING ─────────────────────────
  const WB_Q=[
    wb("Think · Special days","Lesson 2: We are all the same, we are all different.",[
      multi("days","Which special days are on the slide? Choose 4.",["Birthday","Beach day","Tet","Christmas","Homework day"],["Birthday","Beach day","Tet","Christmas"],"🎉"),
      select("halloween","Halloween",["Wear costumes & trick-or-treat","Watch fireworks & party","Receive lucky money & eat special food"],"Wear costumes & trick-or-treat","🎃"),
      select("newyear","New Year",["Wear costumes & trick-or-treat","Watch fireworks & party","Receive lucky money & eat special food"],"Watch fireworks & party","🎆"),
      select("tet","Tet",["Wear costumes & trick-or-treat","Watch fireworks & party","Receive lucky money & eat special food"],"Receive lucky money & eat special food","🧧")
    ],"Special days: Birthday, Beach day, Tet, Christmas. Halloween: wear costumes & trick-or-treat · New Year: watch fireworks & party · Tet: receive lucky money & eat special food.",{readingId:"specialdays"}),
    wb("Big Question · Can we be different and the same?","Vocabulary: different, same, celebrate, eyes, hair, likes, dislike, skin tone, respect.",[
      choice("big","Big Question:",["Can we be different and the same?","Who is special to you?","What is a comic strip?"],"Can we be different and the same?","❓"),
      multi("diff","People can be different in their… Choose 4.",["eyes","hair","skin tone","likes"],["eyes","hair","skin tone","likes"],"👀"),
      choice("respect","When people are different from us, we should show ___.",["respect","anger","nothing"],"respect","🤝"),
      choice("celebrate","To celebrate means to ___ a special day.",["enjoy and do something special for","forget","stay sad on"],"enjoy and do something special for","🎊")
    ],"Can we be different and the same? People can have different eyes, hair, skin tone, likes and dislikes. We are all the same, we are all different. We respect each other and celebrate together."),
    wb("Wellbeing Book page 28 · Family celebrations","Activity 4.2a: Draw a picture or make a collage of your family celebrating a special event, day or time.",[
      choice("draw","Everyone: What do you draw?",["your family celebrating","your favorite animal","a map"],"your family celebrating","🎨"),
      choice("bonus","Bonus: What do you write?",["the name of the celebration","your phone number","nothing"],"the name of the celebration","⭐"),
      write("super","Super bonus: Write “We celebrate ___.”",["We celebrate Tet.","We celebrate"],"✍️"),
      multi("how","How do different people celebrate? Choose 3.",["birthdays","Christmas","Tet","homework"],["birthdays","Christmas","Tet"],"🎂")
    ],"Everyone: draw your family celebrating. Bonus: write the name of the celebration. Super bonus: write “We celebrate ___.” Different people celebrate birthdays, Christmas, Tet… (Wellbeing Book, page 28)",{readingId:"wb28"})
  ];
  registerQuiz({
    id:"class-diary-2026-10-23-wellbeing",
    uploadDate:"2026-10-23",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"23/10/2026 · Unit 1.4 Lesson 2 · We are all the same, we are all different · Family celebrations",scoreByField:true,
      groups:groupsOf([["Special days","What do you do?",1],["Big Question","Can we be different and the same?",1],["Wellbeing Book page 28","Family celebrations",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-2310","Remember — Wellbeing",[
          "📅 Class Diary: 23/10/2026",
          "(23/10) Big Question: Can we be different and the same?",
          "(23/10) Vocabulary: different · same · celebrate · eyes · hair · likes · dislike · skin tone · respect",
          "(23/10) Halloween: wear costumes & trick-or-treat · New Year: watch fireworks & party · Tet: receive lucky money & eat special food",
          "(23/10) Super bonus: We celebrate ___."
        ],"Unit 1.4 · Lesson 2"),
        {id:"specialdays",title:"Special days",byline:"Think",mode:"reference",images:[IMG("wb-special-days"),IMG("wb-what-do-you-do")],text:"Special days: Birthday · Beach day · Tet · Christmas\nWhat do you do? Halloween: wear costumes & trick-or-treat · New Year: watch fireworks & party · Tet: receive lucky money & eat special food"},
        {id:"wb28",title:"Activity 4.2a Family celebrations",byline:"Wellbeing Book page 28",mode:"reference",images:[IMG("wb-book-28")],text:"Draw a picture or make a collage of your family celebrating a special event, day or time in your life.\nEveryone: Draw your family celebrating. Bonus: Write the name of the celebration. Super bonus: Write: We celebrate ___."},
        bonus("bonus-wb-2310",[{label:"Video: Celebrations (Elmo’s World)",url:"https://www.youtube.com/watch?v=KYsoVzzG2cM"}])
      ]}
  });
})();
