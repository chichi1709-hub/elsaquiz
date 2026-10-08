// Quiz 08/10/2026 — Class Diary 08/10/2026 (Unit 2 Week 1 · Science Unit 2 Module 1 Lesson 2).
// Nguồn: NKL/Tháng 10/Class Diary - 1A4 - 261008.pdf + nội dung các link trong diary.
// Ảnh: web/assets/2026-10-08/ (tạo bằng web/_reference/tao_anh_2026-10-08.py).
(()=>{
  const IMG=name=>`assets/2026-10-08/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  // Xoay vòng thứ tự lựa chọn (cố định theo nội dung câu) để đáp án đúng không luôn nằm ở đầu.
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  const order=(id,label,position,count,icon)=>({id,label,type:"select",choices:Array.from({length:count},(_,i)=>String(i+1)),answer:String(position),icon});
  // answers[0] là câu mẫu; các phần tử sau là cụm từ khoá (câu bé viết có đủ các từ đó là đúng).
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const card=(img,layout)=>(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,...(layout?{layout}:{}),fields,explain,hint,...extra});
  const la=card(L,"icon-activity"),sci=card(S,"icon-activity");
  const notes=(id,title,text,byline)=>({id,title,byline,mode:"notes",text});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Link cô giáo giao trong Class Diary 08/10",mode:"bonus",links,text:""});
  const HFW=["again","help","new","there","use"];
  const SOUNDS=["/t/","/d/","/id/"];

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const LA_Q=[],LA_G=[];
  const part=(title,subtitle,items)=>{LA_G.push({title:`${LA_G.length+1}. ${title}`,subtitle,start:LA_Q.length,end:LA_Q.length+items.length-1});LA_Q.push(...items)};

  // Diary ghi "Reread the story The Red Hat" nhưng nội dung thật là Paired Selection "Firefighters at Work" (Nonfiction).
  const firefighters="A bell rings at the firehouse.\nFirefighters slide down a pole.\nThey put on special clothes fast!\n\nThe firefighters jump in a fire truck.\nThe red truck speeds to the fire.\nIt has a loud siren and a flashing red light. That tells cars to move away!\n\nThe brave firefighters get to work.\nThey use hoses to spray water.\nTheir special clothes protect them.\nThey put out the fire!";

  part("Paired Selection: Firefighters at Work","Nonfiction · Literature Anthology pages 22-23 · Reading and Writing Companion pages 37-39",[
    la("Firefighters at Work · Nonfiction","Read the text first. Then choose.",[
      choice("genre","The Red Hat is a made-up story. Firefighters at Work tells about real firefighters. It is ___.",["nonfiction","fantasy","a poem"],"nonfiction","📰"),
      choice("both","The Red Hat and Firefighters at Work are both about ___.",["firefighters","bakers","mail carriers"],"firefighters","🧑‍🚒")
    ],"Genre: Nonfiction — it tells about what real firefighters do (Compare Texts). Both texts are about firefighters.","Nonfiction = bài viết về người/việc có thật. Cả 2 bài đều nói về lính cứu hỏa.",{readingId:"firefighters"}),
    la("Firefighters at Work · Details","Find the answers in the text.",[
      choice("bell","What rings at the firehouse?",["a bell","a phone","a clock"],"a bell","🔔"),
      choice("pole","How do the firefighters get down?",["They slide down a pole.","They take the stairs.","They jump on a bed."],"They slide down a pole.","🧗"),
      choice("clothes","What do they put on fast?",["special clothes","pajamas","party hats"],"special clothes","🦺"),
      choice("hoses","What do they use to spray water?",["hoses","cups","buckets"],"hoses","🚿"),
      choice("siren","What tells cars to move away?",["a loud siren and a flashing red light","a big bell","a small flag"],"a loud siren and a flashing red light","🚨")
    ],"A bell rings at the firehouse. Firefighters slide down a pole. They put on special clothes fast! They use hoses to spray water. The loud siren and the flashing red light tell cars to move away.","Đọc lại bài ở trên, câu trả lời có ngay trong bài."),
    la("Firefighters at Work · True or false","Read and choose TRUE or FALSE.",[
      tf("red","The fire truck is red.",true,"🚒"),
      tf("quiet","The siren is very quiet.",false,"🔇"),
      tf("protect","Their special clothes protect them.",true,"🦺"),
      tf("slow","The firefighters put on their clothes slowly.",false,"🐢")
    ],"1. TRUE (The red truck speeds to the fire.) · 2. FALSE (It has a loud siren.) · 3. TRUE · 4. FALSE (They put on special clothes fast!)","Đối chiếu với bài đọc: đúng chọn TRUE, sai chọn FALSE."),
    la("Firefighters at Work · Order","Put the events in order. 1 = first, 4 = last.",[
      order("truck","The firefighters jump in a fire truck.",4,4,"🚒"),
      order("bell","A bell rings at the firehouse.",1,4,"🔔"),
      order("clothes","They put on special clothes.",3,4,"🦺"),
      order("pole","Firefighters slide down a pole.",2,4,"🧗")
    ],"1. A bell rings at the firehouse. · 2. Firefighters slide down a pole. · 3. They put on special clothes. · 4. The firefighters jump in a fire truck.","Việc nào xảy ra trước tiên khi chuông reo?"),
    {section:"Firefighters at Work · Labels",img:IMG("firefighters-at-work"),text:"Look at the photos and labels.",type:"compound",fields:[
      multi("truck","Which labels are on the fire truck photo? Choose 3.",["lights","hose","ladder","boots","hat","pole"],["lights","hose","ladder"],"🚒"),
      multi("author","How does the author help you learn what firefighters do? Choose 3.",["text","photos","labels","songs","games"],["text","photos","labels"],"✍️")
    ],explain:"Fire truck: lights, hose, ladder (hat, boots, pole are on page 22). The author uses text, photos, and labels to help us learn.",hint:"Label = nhãn chữ chỉ vào từng phần của ảnh."},
    la("Firefighters at Work · Write a full sentence","Answer with a full sentence. Start with a capital letter.",[
      write("spray","What do firefighters use to spray water?",["They use hoses to spray water.","hoses","hose"],"🚿"),
      write("bell","What do firefighters do when the bell rings?",["They slide down a pole.","slide pole","slides pole"],"🔔")
    ],"They use hoses to spray water. · When the bell rings, they slide down a pole (and put on special clothes).","Viết thành câu đầy đủ bằng tiếng Anh (không chọn A/B/C).")
  ]);

  part("High-Frequency Words","again · help · new · there · use (review 08/10)",[
    la("High-Frequency Words · Meaning","Choose the word that matches the meaning.",[
      choice("again","To do something another time.",HFW,"again","🔁"),
      choice("new","Something that is not old.",HFW,"new","✨")
    ],"AGAIN: To do something another time. · NEW: Something that is not old.","Nghĩa lấy từ thẻ ôn tập cô dạy ngày 08/10."),
    {section:"High-Frequency Words · Fill in the blanks",img:L,layout:"icon-activity",text:"Use the words in the box to complete the sentences.",type:"compound",wordBank:HFW,fields:[
      select("one","___ are 29 students in my class.",HFW,"there","🧒"),
      select("two","Can you say that ___?",HFW,"again","🔁"),
      select("three","I like to ___ my friends.",HFW,"help","🤝"),
      select("four","I ___ my feet to kick the ball.",HFW,"use","⚽"),
      select("five","Please could you ___ me with this question?",HFW,"help","❓"),
      select("six","We will read the book ___.",HFW,"again","📘"),
      select("seven","My ___ pencil case is better than my old one.",HFW,"new","✏️")
    ].map(field=>({...field,fromWordBank:true})),explain:"1. There · 2. again · 3. help · 4. use · 5. help · 6. again · 7. new (Answer Key 08/10)",hint:"Chọn từ trong khung. Một từ có thể dùng nhiều lần."},
    // Câu khác trong game Baamboozle "Unit 2 - Week 1 - Gap Fill HFW" (link diary 08/10) — không trùng với đề 07/10.
    la("High-Frequency Words · Game","Choose the missing word.",[
      select("bird","Is ___ a bird in the tree?",HFW,"there","🐦"),
      select("backpack","I got a ___ backpack.",HFW,"new","🎒"),
      select("shoes","Can you ___ me find my shoes?",HFW,"help","👟"),
      select("computer","I like to ___ my computer.",HFW,"use","💻"),
      select("song","Let's sing the song ___!",HFW,"again","🎵")
    ],"Is there a bird in the tree? · I got a new backpack. · Can you help me find my shoes? · I like to use my computer. · Let's sing the song again!","Câu trong game Baamboozle cô cho chơi trên lớp.")
  ]);

  part("Phonemic Awareness: Middle Sound","Say a word and say the middle sound",[
    la("Middle sound","What is the MIDDLE sound? (The middle sound in set is /e/.)",[
      select("men","men",["/a/","/e/","/i/","/o/"],"/e/","👨"),
      select("hot","hot",["/a/","/e/","/i/","/o/"],"/o/","🔥"),
      select("sit","sit",["/a/","/e/","/i/","/o/"],"/i/","🪑"),
      select("map","map",["/a/","/e/","/i/","/o/"],"/a/","🗺️"),
      select("head","head",["/a/","/e/","/i/","/o/"],"/e/","🙂"),
      select("bath","bath",["/a/","/e/","/i/","/o/"],"/a/","🛁")
    ],"men /e/ · hot /o/ · sit /i/ · map /a/ · head /e/ · bath /a/","Đọc chậm từng âm như /sss-eee-t/, âm ở GIỮA là gì?"),
    la("Middle sound /e/","Which words have the middle sound /e/? Choose 3.",[
      multi("e","Choose 3 words.",["fell","lit","wreck","tot","fed","map"],["fell","wreck","fed"],"🔍")
    ],"fell, wreck, fed → /e/ · lit → /i/ · tot → /o/ · map → /a/","Đọc to từng từ, nghe âm ở giữa.")
  ]);

  part("Structural Analysis: -ed Pronunciation","Do you hear /t/, /d/ or /id/?",[
    la("-ed endings · What sound?","What sound does -ed make?",[
      select("kissed","kissed",SOUNDS,"/t/","💋"),
      select("loved","loved",SOUNDS,"/d/","❤️"),
      select("stopped","stopped",SOUNDS,"/t/","🛑"),
      select("rubbed","rubbed",SOUNDS,"/d/","🧽"),
      select("cracked","cracked",SOUNDS,"/t/","🥚"),
      select("painted","painted",SOUNDS,"/id/","🎨")
    ],"kissed /t/ · loved /d/ · stopped /t/ · rubbed /d/ · cracked /t/ · painted /id/ (slide -ED endings, 08/10)","Đọc to từ, nghe âm cuối. Từ gốc tận cùng t hoặc d (paint) thì -ed đọc /id/."),
    // Video "The Suffix ED Makes 3 Sounds" (Sue's Strategies) và game Wordwall "Ed Pronunciation Endings" — link diary 08/10.
    la("-ed endings · Video and game","Look at the end of the word. Which -ed sound do you hear?",[
      choice("rule","start → started, land → landed. When the word ends in t or d, -ed sounds like ___.",SOUNDS,"/id/","📏"),
      select("kicked","kicked",SOUNDS,"/t/","⚽"),
      select("chewed","chewed",SOUNDS,"/d/","🍬"),
      select("waited","waited",SOUNDS,"/id/","⏳"),
      select("played","played",SOUNDS,"/d/","🧸"),
      select("jumped","jumped",SOUNDS,"/t/","🦘"),
      select("rained","rained",SOUNDS,"/d/","🌧️")
    ],"Words ending in t or d → -ed sounds like /id/ (started, landed, waited). Whisper sounds (k, p, s, sh, ch) → /t/ (kicked, jumped). Noisy sounds → /d/ (chewed, played, rained).","Video trên lớp: chữ cuối là t hoặc d → /id/; âm “thì thầm” (k, p, s, sh, ch) → /t/; âm “có tiếng” → /d/.")
  ]);

  part("Spelling Review: e and ea","Homework check · Practice Book pages 86A and 86B",[
    la("Sort the words","Which ending does each word have?",[
      select("read","read",["-ead","-en","-eg","-ed"],"-ead","📖"),
      select("spread","spread",["-ead","-en","-eg","-ed"],"-ead","🧈"),
      select("sled","sled",["-ead","-en","-eg","-ed"],"-ed","🛷"),
      select("hen","hen",["-ead","-en","-eg","-ed"],"-en","🐔"),
      select("leg","leg",["-ead","-en","-eg","-ed"],"-eg","🦵")
    ],"Words with ead: read, spread (bread, head) · Words with en: hen (men) · Words with eg: leg (beg) · Words with ed: sled","Nhìn phần đuôi: -ead, -en, -eg hay -ed?")
  ]);

  registerQuiz({
    id:"class-diary-2026-10-08-language",
    uploadDate:"2026-10-08",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"08/10/2026 · Unit 2 Week 1 · Firefighters at Work, HFW, middle sound, -ed sounds",scoreByField:true,
      groups:LA_G,questions:LA_Q,
      readings:[
        notes("notes-0810","Ghi nhớ — 08/10","Nonfiction tells about real people and real things.\nAGAIN: To do something another time.\nNEW: Something that is not old.\nSay a word and say the middle sound in that word. The middle sound in set is /e/.\n-ed can sound like /t/ (kissed), /d/ (loved) or /id/ (painted).","Unit 2 Week 1"),
        {id:"firefighters",title:"Firefighters at Work",byline:"Paired Selection · Nonfiction · Literature Anthology pages 22-23",images:[IMG("firefighters-at-work")],text:firefighters},
        bonus("bonus-0810",[
          {label:"Game: High-frequency words",url:"https://www.baamboozle.com/game/3706689"},
          {label:"Video: -ed endings",url:"https://www.youtube.com/watch?v=Dsd0eFgU0m8&t=1s"},
          {label:"Game: -ed pronunciation endings",url:"https://wordwall.net/resource/10907171/ed-pronunciation-endings"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  // Unit 2 Module 1 · Lesson 2 · Explain: Animal Protection (cont.) — Science Book page 27.
  // Diary ghi bài về nhà Science "Workbook, lesson 30, page 31" — đó là bài Math (lesson 30), không đưa vào.
  registerQuiz({
    id:"class-diary-2026-10-08-science",
    uploadDate:"2026-10-08",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"08/10/2026 · Animal Protection (cont.) · Science Book page 27",scoreByField:true,
      groups:[
        {title:"1. How do animals protect themselves?",subtitle:"Look at each photo. Explain how each animal can protect itself using its structures.",start:0,end:3},
        {title:"2. Check and write",subtitle:"True or false · Write a full sentence",start:4,end:5}
      ],
      readings:[notes("notes-sci-0810","Ghi nhớ — Animal Protection","Protection keeps things safe from harm.\nSome animals can use their structures for protection.\nStructure: a body part.","Unit 2 Module 1 · Lesson 2")],
      questions:[
        {section:"Animal Protection · Lion",img:IMG("protect-lion"),text:"How can a lion protect itself?",type:"compound",fields:[
          multi("lion","Choose the 3 structures.",["thick mane","sharp teeth","sharp claws","soft feathers","long neck"],["thick mane","sharp teeth","sharp claws"],"🦁")
        ],explain:"Lion: thick mane, sharp teeth, sharp claws.",hint:"Nhìn ảnh sư tử: bộ phận nào giúp nó tự bảo vệ?"},
        {section:"Animal Protection · Skunk",img:IMG("protect-skunk"),text:"How can a skunk protect itself?",type:"compound",fields:[
          multi("skunk","Choose 2.",["bad smelling liquid (very stinky)","good ears","sharp claws","a long trunk"],["bad smelling liquid (very stinky)","good ears"],"🦨")
        ],explain:"Skunk: bad smelling liquid (very stinky), good ears.",hint:"Chồn hôi phun ra chất lỏng rất hôi."},
        {section:"Animal Protection · Horns",img:IMG("protect-horns"),text:"How can this animal protect itself?",type:"compound",fields:[
          choice("horns","This animal uses its ___.",["strong horns and legs","soft fur","webbed feet"],"strong horns and legs","🐐")
        ],explain:"Strong horns and legs.",hint:"Nhìn cặp sừng cong rất to của con vật."},
        sci("Animal Protection · Match","Which animal is it?",[
          select("mane","It has a thick mane.",["lion","skunk","the animal with horns"],"lion","🦁"),
          select("liquid","It sprays a bad smelling liquid.",["lion","skunk","the animal with horns"],"skunk","🦨"),
          select("horns","It fights with strong horns.",["lion","skunk","the animal with horns"],"the animal with horns","🐐")
        ],"Thick mane – lion · Bad smelling liquid – skunk · Strong horns – the animal with horns.","Nối đặc điểm với con vật trong 3 bức ảnh."),
        sci("Animal Protection · True or false","Read and choose TRUE or FALSE.",[
          tf("skunk","A skunk protects itself with sharp claws.",false,"🦨"),
          tf("lion","A lion can use its sharp teeth for protection.",true,"🦁"),
          tf("meaning","Protection keeps things safe from harm.",true,"🛡️"),
          tf("homes","Animals can only use their structures. They never build homes for protection.",false,"🏠")
        ],"1. FALSE (bad smelling liquid, good ears) · 2. TRUE · 3. TRUE · 4. FALSE (Other animals build homes for protection.)","Đúng chọn TRUE, sai chọn FALSE."),
        sci("Animal Protection · Write a full sentence","Answer with a full sentence.",[
          write("lion","How can a lion protect itself?",["A lion uses its sharp teeth and sharp claws to protect itself.","teeth","claws","mane"],"🦁"),
          write("skunk","How can a skunk protect itself?",["A skunk sprays a bad smelling liquid.","smelling","stinky","liquid","smell"],"🦨")
        ],"A lion: thick mane, sharp teeth, sharp claws. · A skunk: bad smelling liquid (very stinky), good ears.","Viết thành câu đầy đủ bằng tiếng Anh, nêu ít nhất 1 bộ phận.")
      ]}
  });
})();
