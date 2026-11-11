// Quiz 10/11/2026 — Class Diary 10/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 (Essential Question theo sách: "How do people help out in the community?" — diary lại ghi EQ tuần 3
// "Where do animals live together?") · homework check Practice Book 137–138 (Closed Syllables) · Spelling Test Practice Book 133 ·
// HFW review all, call, day, her, want (câu 1 "This is ___ red bag." bỏ vì "her" cũng hợp nghĩa) · Structural Analysis: Closed Syllables
// (video Scratch Garden "Syllables!" 9S7DY2lgJlU — đọc từ storyboard; game Baamboozle 118972).
// Science: STEM Module Project · Design Protective Gear for a Sport (Science Book 69–70).
// Ảnh: web/assets/2026-11-10/ (tạo bằng web/_reference/tao_anh_2026-11-10.py).
(()=>{
  const IMG=name=>`assets/2026-11-10/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const sci=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,...extra});
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="10/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  // Tách từ thành 2 âm tiết: đáp án đúng + 2 cách tách sai (lệch 1 chữ).
  // wrong: 2 cách tách sai tự chọn khi lệch 1 chữ cũng là cách tách hợp lý (vd. roc/ket).
  const split=(id,word,answer,icon,img,wrong)=>{const i=answer.indexOf("/"),at=k=>`${word.slice(0,k)}/${word.slice(k)}`;
    const field=choice(id,`Split the word into syllables: ${word}`,[answer,...(wrong||[at(i-1),at(i+1)])],answer,icon);return img?pic(field,img):field};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const HFW=["all","call","day","her","want"],COUNT=["1","2","3","4"];
  const CLOSED="When a syllable ends in a consonant and has one vowel letter, the vowel sound is usually short. This is called a closed syllable.";
  const SPELL=["fish","shop","ship","with","thing","sang","want","call"];
  const LA_Q=[
    la("Homework check · Structural Analysis: Closed Syllables (Practice Book 137)","Read each word. Draw a line between the syllables. Write each syllable on a line.",[
      split("finish","finish","fin/ish","1️⃣"),
      split("pumpkin","pumpkin","pump/kin","🎃"),
      split("napkin","napkin","nap/kin","🧻"),
      split("locket","locket","lock/et","🔒",null,["lo/cket","locke/t"])
    ],CLOSED+" fin/ish · pump/kin · nap/kin · lock/et",{readingId:"closed"}),
    la("Homework check · Structural Analysis: Closed Syllables (Practice Book 138)","A. Read each word. Draw a line between the syllables. B. Use one of the words from above to write a sentence.",[
      split("basket","basket","bas/ket","🧺"),
      split("helping","helping","help/ing","🤝",null,["he/lping","helpi/ng"]),
      split("jumping","jumping","jump/ing","🦘",null,["ju/mping","jumpi/ng"]),
      split("magnet","magnet","mag/net","🧲"),
      split("rabbit","rabbit","rab/bit","🐇"),
      free("sentence","B. Use one of the words from above (basket, helping, jumping, magnet, rabbit) to write a sentence.","✏️")
    ],"bas/ket · help/ing · jump/ing · mag/net · rab/bit. Possible answer: The rabbit is jumping.",{readingId:"closed"}),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we read “Thump Thump Helps Out”: the bus gets stuck on a rock, and Thump Thump thumps loud and long so the big rabbits come to help. We also saw children plant flowers in a community garden. So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","What jobs need to be done in a community?"],EQ,"❓")
    ],"Essential Question: "+EQ),
    la("Spelling Test (Practice Book 133)","Listen to the teacher read aloud. Which spelling is correct?",[
      choice("fish","A ___ swims in the water.",["fish","fihs","fis"],"fish","🐟"),
      choice("shop","We buy bread at the ___.",["shop","sop","shopp"],"shop","🏪"),
      choice("ship","A big ___ sails on the sea.",["ship","sip","shipp"],"ship","🚢"),
      choice("with","I play ___ my friend.",["with","wiht","wif"],"with","🤝"),
      choice("thing","What is that ___ in the barn?",["thing","ting","thinng"],"thing","❔"),
      choice("sang","Thump Thump ___ a song.",["sang","sagn","sanng"],"sang","🎵"),
      choice("want","I ___ to eat some ice cream.",["want","wnat","whant"],"want","🍦"),
      choice("call","I am going to ___ my mum.",["call","cal","coll"],"call","📞")
    ],"Spelling words: "+SPELL.join(" · ")+". High-frequency words: want · call",{readingId:"spelling"}),
    la("High-frequency words review · all · call · day · her · want","Read. Fill in the blank.",[
      select("sunny","It’s a sunny ___!",HFW,"day","☀️"),
      select("do","What do you ___ to do?",HFW,"want","🤔"),
      select("ice","I ___ to eat some ice cream.",HFW,"want","🍦"),
      select("mum","I am going to ___ my mum.",HFW,"call","📞"),
      select("play","We can ___ play together.",HFW,"all","⚽"),
      select("today","What ___ is it today?",HFW,"day","📅"),
      select("apples","Who ate ___ the apples?",HFW,"all","🍎")
    ],"It’s a sunny day! · What do you want to do? · I want to eat some ice cream. · I am going to call my mum. · We can all play together. · What day is it today? · Who ate all the apples?"),
    la("Structural Analysis · Closed Syllables","Look at the picture. Split the word into closed syllables.",[
      split("rabbit2","rabbit","rab/bit","🐇",IMG("pic-rabbit")),
      split("mittens","mittens","mit/tens","🧤",IMG("pic-mittens")),
      split("picnic","picnic","pic/nic","🧺",IMG("pic-picnic")),
      split("rocket","rocket","rock/et","🚀",IMG("pic-rocket"),["ro/cket","rocke/t"]),
      split("cactus","cactus","cac/tus","🌵",IMG("pic-cactus"))
    ],"rab/bit · mit/tens · pic/nic · rock/et · cac/tus. "+CLOSED,{readingId:"closed"}),
    la("Structural Analysis · Video: Syllables!","Watch the video. How many syllables does the word have?",[
      select("dog","dog",COUNT,"1","🐶"),
      select("apple","apple (ap · ple)",COUNT,"2","🍎"),
      select("ladybug","ladybug (la · dy · bug)",COUNT,"3","🐞"),
      select("salamander","salamander (sal · a · man · der)",COUNT,"4","🦎")
    ],"dog: 1 syllable · ap/ple: 2 syllables · la/dy/bug: 3 syllables · sal/a/man/der: 4 syllables",{readingId:"closed"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-10-language",
    uploadDate:"2026-11-10",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"10/11/2026 · Unit 2 Week 4 · Closed Syllables · Spelling Test · High-frequency words review",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 137–138 · Closed Syllables",2],["Build Background","Essential Question",1],["Spelling Test","Practice Book 133",1],["High-frequency words","all · call · day · her · want",1],["Structural Analysis","Closed Syllables · video Syllables!",2]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1011","Remember — Language Arts",[
          "📅 Class Diary: 10/11/2026",
          "(10/11) Essential Question: "+EQ,
          "(10/11) Homework check: Practice Book, pages 137 and 138 (Closed Syllables).",
          "(10/11) Closed syllable: "+CLOSED,
          "Example: [img:"+IMG("pic-rocket")+"] Split rocket into closed syllables. ¦ Say the word slowly: rock / et. ¦ rock ends in a consonant (k) and has one vowel letter (o). ¦ et ends in a consonant (t) and has one vowel letter (e). ¦ So both vowel sounds are short.",
          "(10/11) Spelling Test: Practice Book, page 133.",
          "(10/11) Spelling words: "+SPELL.join(" · "),
          "(10/11) High-frequency words: all · call · day · her · want",
          "(10/11) Syllables: dog (1) · ap/ple (2) · la/dy/bug (3) · sal/a/man/der (4)",
          "(10/11) Homework: Practice Book, pages 135 and 136."
        ],"Unit 2 Week 4"),
        {id:"closed",title:"Structural Analysis: Closed Syllables",byline:"Practice Book 137 · Class Diary 10/11",mode:"reference",
          images:[IMG("la-pb137-rule"),IMG("pic-rabbit"),IMG("pic-mittens"),IMG("pic-picnic"),IMG("pic-rocket"),IMG("pic-cactus")],
          text:CLOSED+"\nrab/bit · bas/ket · cab/in\nrabbit · mittens · picnic · rocket · cactus"},
        {id:"spelling",title:"Spelling Test",byline:"Practice Book page 133",mode:"reference",text:"Listen to the teacher read aloud. Write each word.\n"+SPELL.join(" · ")+"\nHigh-Frequency Words: want · call"},
        bonus("bonus-la-1011",[
          {label:"Video: Syllables! (Scratch Garden)",url:"https://www.youtube.com/watch?v=9S7DY2lgJlU"},
          {label:"Game: 1 Syllable, 2 Syllables, 3 Syllables!",url:"https://www.baamboozle.com/game/118972"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · STEM Module Project ─────────────────────────
  const GEAR="A school needs protective gear for its sports teams. Design protective gear to keep the players safe. The gear needs to protect at least one body part.";
  const STEPS=["Choose a sport.","Decide what body parts you need to protect.","Think about animal structures and functions.","Draw your design.","Write the materials you will need.","Build and test your design."];
  const MATERIALS=["Paper bowl","Elastic band","Colors","Pencils","Tape","Bubble wrap"];
  const SCI_Q=[
    sci("STEM Module Project · Design Protective Gear for a Sport (page 69)","Engineering Challenge · Read the text.",[
      pic(choice("need","A school needs protective gear for its ___.",["sports teams","music class","school bus"],"sports teams","🏫"),IMG("sci-gear-69")),
      choice("safe","Design protective gear to keep the players ___.",["safe","hungry","sleepy"],"safe","🛡️"),
      choice("part","The gear needs to protect at least ___ body part.",["one","no","ten"],"one","🦵"),
      fixed("first","Design Your Solution: What do you do FIRST?",STEPS.slice(0,3),"Choose a sport.","1️⃣"),
      fixed("next","You decided what body parts you need to protect. What do you do NEXT?",["Think about animal structures and functions.","Choose a sport.","Build and test your design."],"Think about animal structures and functions.","➡️"),
      fixed("last","What do you do LAST?",["Build and test your design.","Draw your design.","Choose a sport."],"Build and test your design.","🔚"),
      choice("animal","“Think about how animals protect themselves.” In Lesson 2 we learned about the functions of animal structures. Which structure protects an animal’s body?",["a turtle’s shell","a duck’s webbed feet","a giraffe’s long neck"],"a turtle’s shell","🐢")
    ],GEAR+" Design Your Solution: "+STEPS.join(" ")+" Think about how animals protect themselves: the shell protects the turtle.",{readingId:"gear"}),
    sci("STEM Module Project · Materials · Build and Test Your Model (page 70)","Our class’s protective gear.",[
      multi("materials","Which materials did our class write for the protective gear? Choose 6.",[...MATERIALS,"Glass cup","Stones"],MATERIALS,"🧰"),
      pic(choice("build","Build Your Model: Use the outline. Draw what your protective gear will ___.",["look like","eat","sing"],"look like","✏️"),IMG("sci-gear-70")),
      choice("wear","Test Your Model: Where will we wear our protective gear?",["on our head","on our feet","on our hands"],"on our head","⛑️"),
      choice("work","How will your protective gear work?",["It will keep our head safe.","It will help us run fast.","It will keep our feet warm."],"It will keep our head safe.","✅")
    ],"Materials: "+MATERIALS.join(" · ")+". Test Your Model: We will wear it on our head and it will keep our head safe.",{readingId:"gear"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-10-science",
    uploadDate:"2026-11-10",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"10/11/2026 · STEM Module Project: Design Protective Gear for a Sport · Science Book pages 69–70",scoreByField:true,
      groups:groupsOf([["STEM Module Project","Design Protective Gear for a Sport · pages 69–70",2]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-1011","Remember — Science",[
          "📅 Class Diary: 10/11/2026",
          "(10/11) STEM Module Project: Design Protective Gear for a Sport",
          "(10/11) "+GEAR,
          "(10/11) Design Your Solution: "+STEPS.join(" "),
          "(10/11) Tip: Think about how animals protect themselves.",
          "(10/11) The shell protects the turtle.",
          "(10/11) Materials: "+MATERIALS.join(" · "),
          "(10/11) Test Your Model: We will wear it on our head and it will keep our head safe."
        ],"STEM Module Project"),
        {id:"gear",title:"Design Protective Gear for a Sport",byline:"STEM Module Project · Science Book pages 69–70",mode:"reference",images:[IMG("sci-gear-69"),IMG("sci-gear-70")],
          text:GEAR+"\nDesign Your Solution: "+STEPS.join(" ")+"\nThink about how animals protect themselves.\nBuild Your Model: Use the outline. Draw what your protective gear will look like.\nTest Your Model: How will your protective gear work?"}
      ]}
  });
})();
