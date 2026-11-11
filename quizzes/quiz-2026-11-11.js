// Quiz 11/11/2026 — Class Diary 11/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 (Essential Question theo sách — ảnh bìa "Nell's Books": "How do people help out in the community?";
// diary lại ghi EQ tuần 3) · homework check Practice Book 135–136 · Spelling Test Practice Book 133 · Big Book "The Story of
// Martin Luther King Jr." (Drive folder Unit 2_Week 4, genre Biography) · Grammar: Common Noun and Proper Noun (slide, notebook,
// video ZHwBhVsaqK8 đọc từ storyboard, game Baamboozle 1743329) · Anchor Text "Nell's Books" (video jvfgUSXTmEw, RWC 134–135).
// Math: Test → không làm quiz. Wellbeing: Unit 1.5 Working together · Lesson 1 Falling out (diary ghi nhầm tiêu đề
// "STEM Module Project: Design Protective Gear for a Sport", nội dung slide là bài xin lỗi).
// Ảnh: web/assets/2026-11-11/ (tạo bằng web/_reference/tao_anh_2026-11-11.py).
(()=>{
  const IMG=name=>`assets/2026-11-11/${name}.webp`;
  const L="assets/mascot/academy/language.webp",W="assets/mascot/academy/success.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const strict=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],strict:true,icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const draw=(id,label,icon)=>({id,label,type:"draw",icon});
  const pic=(field,img)=>({...field,img,bigImg:true});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),wb=card(W);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="11/11")=>({id,title:"Bonus · Video, game & Big Book",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const BOX=["fish","shop","ship","with","thing","sang","fast","wink","want","call"];
  const SOUNDS=["sh","th","ng"];
  const BIO="A biography is the story of a real person’s life that tells the important things she or he did, and it is written by another person.";
  const GENRE_HINT="Hint: Fantasy = made-up, could not happen in real life (animals talk). Biography = the story of a real person’s life, written by another person.";
  const COMMON="A common noun is a general name given to a person, place, or thing.";
  const PROPER="A proper noun is a specific name given to a person, place, or thing. A proper noun always begins with an uppercase letter.";
  const KIND=["common noun","proper noun"];
  const NELL="Read about an elephant named Nell and how much she likes to read books.";
  const LA_Q=[
    la("Homework check · Practice Book 135","Use the clues to write a word from the box on the line.",[
      select("shop","starts like shell + ends like hop",BOX,"shop","🛒"),
      select("thing","starts like them + ends like sing",BOX,"thing","❔"),
      select("fast","starts like fin + ends like last",BOX,"fast","💨"),
      select("sang","starts like sit + ends like hang",BOX,"sang","🎵"),
      select("wink","starts like win + ends like sink",BOX,"wink","😉"),
      select("fish","starts like fan + ends like wish",BOX,"fish","🐟")
    ],"sh + op = shop · th + ing = thing · f + ast = fast · s + ang = sang · w + ink = wink · f + ish = fish",{wordBank:BOX}),
    la("Homework check · Practice Book 136","Trace and write F and f. Then copy the sentence: Fred flies the flag.",[
      multi("f","Fred flies the flag. Which words begin with F or f? Choose 3.",["Fred","flies","flag","the"],["Fred","flies","flag"],"🚩"),
      choice("capital","Fred flies the flag. Which word begins with a capital F?",["Fred","flies","flag"],"Fred","🔠")
    ],"Fred flies the flag. Fred begins with a capital F: it is a name and it starts the sentence. flies and flag begin with f."),
    la("Build Background · Essential Question","Re-introduce the Essential Question.",[
      choice("eq","This week we read “Thump Thump Helps Out”: the big rabbits come to help the bus. Today we read “Nell’s Books”: Dog, Cat and Pig make a bookmobile so Nell can hand out books to everyone. So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","What jobs need to be done in a community?"],EQ,"❓")
    ],"Essential Question: "+EQ),
    la("Spelling Test (Practice Book 133)","Say the spelling word. Which sound do you hear: sh, th or ng?",[
      select("sp-fish","fish",SOUNDS,"sh","🐟"),
      select("sp-shop","shop",SOUNDS,"sh","🏪"),
      select("ship","ship",SOUNDS,"sh","🚢"),
      select("with","with",SOUNDS,"th","🤝"),
      select("sp-sang","sang",SOUNDS,"ng","🎵")
    ],"sh: fish · shop · ship. th: with · thing. ng: thing · sang. Spelling words: fish · shop · ship · with · thing · sang · want · call"),
    la("Big Book · The Story of Martin Luther King Jr.","Listen and read along with the story. Choose the answer.",[
      pic(choice("genre","The Story of Martin Luther King Jr. tells about the life of a real person, and another person wrote it. "+GENRE_HINT+" What is the genre?",["Biography","Fantasy","Poetry"],"Biography","📘"),IMG("la-mlk-cover")),
      choice("birthday","Every January, we celebrate the ___ of Martin Luther King Jr.",["birthday","school","wedding"],"birthday","🎂"),
      choice("born","Martin was born in 1929 in ___.",["Atlanta, Georgia","Chicago","New York City"],"Atlanta, Georgia","🗺️"),
      choice("father","Martin’s father was a ___. His mother was a schoolteacher.",["preacher","doctor","farmer"],"preacher","⛪"),
      choice("new","Martin’s school was old. The school for the white children was ___.",["new","old","small"],"new","🏫"),
      choice("angry","Some restaurants would not serve Martin’s family. He could not drink from all water fountains. How did this make Martin feel?",["angry","happy","sleepy"],"angry","😠"),
      choice("people","When Martin grew up, he became a preacher. One day, he spoke to more than ___ people.",["200,000","20","200"],"200,000","📣"),
      choice("dream","Martin said, “I have a ___ …”",["dream","book","truck"],"dream","💭"),
      fixed("mlk-first","What happens FIRST in the story?",["Martin is born in Atlanta, Georgia.","Martin speaks to more than 200,000 people.","Martin makes his dream come true."],"Martin is born in Atlanta, Georgia.","1️⃣"),
      fixed("mlk-last","What happens LAST in the story?",["Martin makes his dream come true.","Martin goes to an old school.","Martin is born in Atlanta, Georgia."],"Martin makes his dream come true.","🔚"),
      multi("now","Martin made his dream come true. Now, we can all ___. Choose 3.",["eat in any restaurant","drink from any water fountain","go to any school","fly to the moon","stay home every day"],["eat in any restaurant","drink from any water fountain","go to any school"],"🌈")
    ],"Genre: Biography. "+BIO+" Martin was born in 1929 in Atlanta, Georgia. His father was a preacher and his mother was a schoolteacher. His school was old, but the school for the white children was new. This made Martin angry. He became a preacher, spoke to more than 200,000 people and said “I have a dream.” Now we can all eat in any restaurant, drink from any water fountain and go to any school.",{readingId:"mlk"}),
    la("Grammar · Find the common and proper nouns","Read each sentence on the slide. Choose the answer.",[
      pic(choice("vietnam","The girl is from Vietnam. Which word is a proper noun?",["Vietnam","girl","from"],"Vietnam","🇻🇳"),IMG("la-nouns-slide")),
      choice("girl","The girl is from Vietnam. Which word is a common noun?",["girl","Vietnam","is"],"girl","👧"),
      choice("ice","I don’t like ice cream. Which words are a common noun?",["ice cream","like","I"],"ice cream","🍦"),
      choice("nelly","Nelly the elephant sprays water. Which word is a proper noun?",["Nelly","elephant","water"],"Nelly","🐘"),
      multi("elephant","Nelly the elephant sprays water. Which words are common nouns? Choose 2.",["elephant","water","Nelly","sprays"],["elephant","water"],"💦")
    ],"Proper nouns: Vietnam · Nelly. Common nouns: girl · ice cream · elephant · water. "+COMMON+" "+PROPER,{readingId:"nouns"}),
    la("Grammar · Notebook: Proper Nouns","A proper noun begins with a capital letter. Which word needs a capital letter?",[
      choice("lucy","Her name is Lucy. Why does Lucy begin with a capital L?",["Lucy is a name, so it is a proper noun.","Lucy is at the end of the sentence.","Lucy is a common noun."],"Lucy is a name, so it is a proper noun.","👩"),
      choice("alaska","My school is alaska academy. Which words need capital letters?",["alaska academy","school","is"],"alaska academy","🏫"),
      choice("december","My birthday is in december. Which word needs a capital letter?",["december","birthday","in"],"december","🎂"),
      choice("vietnam2","vietnam is the best. Which word needs a capital letter?",["vietnam","best","is"],"vietnam","🇻🇳"),
      choice("mcdonalds","We ate at mcdonalds for lunch. Which word needs a capital letter?",["mcdonalds","lunch","ate"],"mcdonalds","🍔"),
      strict("rewrite","Write the sentence correctly: my birthday is in december.","My birthday is in December.","✏️")
    ],"Her name is Lucy. · My school is Alaska Academy. · My birthday is in December. · Vietnam is the best. · We ate at McDonalds for lunch. Names of people, places, months and shops are proper nouns: they begin with a capital letter. The first word of a sentence also begins with a capital letter.",{readingId:"nouns"}),
    la("Grammar · Video: Common and Proper Nouns","Watch the video. Is it a common noun or a proper noun?",[
      select("boy","boy",KIND,"common noun","👦"),
      select("oliver","Oliver",KIND,"proper noun","🧒"),
      select("park","park",KIND,"common noun","🛝"),
      select("horizon","Horizon Park",KIND,"proper noun","🌳"),
      select("chicago","Chicago",KIND,"proper noun","🏙️"),
      select("river","river",KIND,"common noun","🏞️")
    ],"Common nouns: boy · park · river. Proper nouns: Oliver · Horizon Park · Chicago. "+COMMON+" "+PROPER),
    la("Anchor Text · Nell’s Books (Literature Anthology, page 64)","Reread the story. Choose the answer.",[
      pic(choice("genre2",NELL+" Nell is an elephant who talks and reads books. "+GENRE_HINT+" What is the genre?",["Fantasy","Biography","Nonfiction"],"Fantasy","🐘"),IMG("la-nell-cover")),
      select("shelf","a flat piece of material, such as wood or metal, that holds things",["shelf","clang","bang","wish"],"shelf","📚"),
      select("clang","a loud noise",["shelf","clang","bang","wish"],"clang","🔔"),
      select("bang","a sudden noise",["shelf","clang","bang","wish"],"bang","💥"),
      select("wish","something you hope for or want",["shelf","clang","bang","wish"],"wish","🌟")
    ],"Genre: Fantasy. Build Vocabulary — shelf: a flat piece of material, such as wood or metal, that holds things · clang: a loud noise · bang: a sudden noise · wish: something you hope for or want",{readingId:"nell"}),
    la("Anchor Text · Main Story Elements: Character, Setting, Events","Think about “Nell’s Books”. Choose the answer.",[
      multi("characters","Who are the characters? Choose 4.",["Nell","Dog","Cat","Pig","Fox","Thump Thump"],["Nell","Dog","Cat","Pig"],"🐾"),
      fixed("first","What happens FIRST?",["Nell gives books to her friends. They do not want to read.","Dog, Cat, and Pig have fun reading.","Dog, Cat, and Pig make a bookmobile so Nell can hand out books."],"Nell gives books to her friends. They do not want to read.","1️⃣"),
      fixed("next","What happens NEXT?",["Dog, Cat, and Pig have fun reading.","Nell gives books to her friends. They do not want to read.","Dog, Cat, and Pig make a bookmobile so Nell can hand out books."],"Dog, Cat, and Pig have fun reading.","➡️"),
      fixed("last","What happens LAST?",["Dog, Cat, and Pig make a bookmobile so Nell can hand out books.","Dog, Cat, and Pig have fun reading.","Nell gives books to her friends. They do not want to read."],"Dog, Cat, and Pig make a bookmobile so Nell can hand out books.","🔚"),
      fixed("setting","At the end, Nell and her friends drive the bookmobile. Where is the setting?",["outdoors","indoors"],"outdoors","🚚"),
      fixed("setting2","Dog, Cat, and Pig have fun reading in a tent, a tub and a pot. Where is the setting?",["indoors","outdoors"],"indoors","🏠")
    ],"Characters: Nell, Dog, Cat, Pig. Events: Nell gives books to her friends; they do not want to read (indoors). → Dog, Cat, and Pig have fun reading (indoors). → Dog, Cat, and Pig make a bookmobile so Nell can hand out books (outdoors).",{readingId:"nell"}),
    la("Respond to the Anchor Text · Reading and Writing Companion 134–135","Retell the story. Find text evidence.",[
      pic(choice("why","Why doesn’t Nell want to play with Cat and Dog?",["Because Nell wants to read.","Because it is raining.","Because Nell is sick."],"Because Nell wants to read.","🎾"),IMG("la-rwc-134-135")),
      select("page1","Text Evidence: on which page do Cat and Dog ask Nell to play?",["66","67","77"],"67","🔍"),
      choice("truck","Why do the friends get a truck with books for Nell?",["So Nell can give books to everyone.","So Nell can go shopping.","So the friends can sleep in it."],"So Nell can give books to everyone.","🚚"),
      select("page2","Text Evidence: on which page do the friends show Nell the truck?",["66","67","77"],"77","🔍"),
      choice("know","Talk about pages 66–67. I know that Nell ___.",["loves to read books","loves to play tennis","does not like books"],"loves to read books","📖"),
      choice("clue","How do you know Nell likes to read a lot?",["The story says Nell could sit and read all day long.","The story says Nell plays tennis every day.","The picture shows Nell in a tent."],"The story says Nell could sit and read all day long.","💡"),
      free("retell","Retell the story in your own words.","✏️")
    ],"Nell doesn’t want to play because Nell wants to read (page 67). The friends get a truck with books so Nell can give books to everyone (page 77). I know that Nell loves to read books: she could sit and read all day long (page 66).",{readingId:"nell"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-11-language",
    uploadDate:"2026-11-11",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"11/11/2026 · Unit 2 Week 4 · Big Book: The Story of Martin Luther King Jr. · Common and Proper Nouns · Nell’s Books",scoreByField:true,
      groups:groupsOf([["Homework check","Practice Book 135–136",2],["Build Background","Essential Question",1],["Spelling Test","Practice Book 133",1],["Big Book","The Story of Martin Luther King Jr. · Biography",1],["Grammar","Common Noun and Proper Noun · slide · notebook · video",3],["Anchor Text","Nell’s Books · vocabulary · story elements · RWC 134–135",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-1111","Remember — Language Arts",[
          "📅 Class Diary: 11/11/2026",
          "(11/11) Essential Question: "+EQ,
          "(11/11) Homework check: Practice Book, pages 135 and 136.",
          "(11/11) Spelling Test: Practice Book, page 133.",
          "(11/11) Big Book: The Story of Martin Luther King Jr.",
          "(11/11) Genre: Biography",
          "(11/11) "+BIO,
          "(11/11) Grammar: Common Noun and Proper Noun",
          "(11/11) Common noun: "+COMMON.replace(/^A common noun is /,"")+" (boy · park · city)",
          "(11/11) Proper noun: "+PROPER.replace(/^A proper noun is /,"")+" (Oliver · Horizon Park · Chicago)",
          "(11/11) Proper Nouns: Her name is Lucy. · My school is Alaska Academy. · My birthday is in December.",
          "(11/11) Anchor Text: Reread the story “Nell’s Books” (Literature Anthology Book, page 68).",
          "(11/11) Genre: Fantasy. "+NELL,
          "(11/11) shelf: a flat piece of material, such as wood or metal, that holds things",
          "(11/11) clang: a loud noise",
          "(11/11) bang: a sudden noise",
          "(11/11) wish: something you hope for or want",
          "(11/11) Characters are Nell, Dog, Cat, and Pig.",
          "(11/11) Setting is indoors, then outdoors.",
          "(11/11) Events: Nell gives books to her friends. They do not want to read. → Dog, Cat, and Pig have fun reading. → Dog, Cat, and Pig make a bookmobile so Nell can hand out books.",
          "(11/11) Homework: Practice Book, page 142."
        ],"Unit 2 Week 4"),
        {id:"mlk",title:"The Story of Martin Luther King Jr.",byline:"Literature Big Book · Johnny Ray Moore",mode:"reference",images:[IMG("la-mlk-cover")],
          text:"Genre: Biography\n"+BIO+"\nEvery January, we celebrate the birthday of Martin Luther King Jr.\nMartin was born in 1929 in Atlanta, Georgia. His father was a preacher. His mother was a schoolteacher.\nMartin’s school was old, but the school for the white children was new. Some restaurants would not serve his family. This made Martin angry.\nWhen Martin grew up, he became a preacher. He said, “I have a dream …”\nMartin made his dream come true."},
        {id:"nouns",title:"Common Noun and Proper Noun",byline:"Grammar · slide + notebook · Class Diary 11/11",mode:"reference",images:[IMG("la-nouns-slide")],
          text:COMMON+"\n"+PROPER+"\nThe girl is from Vietnam.\nI don’t like ice cream.\nNelly the elephant sprays water."},
        {id:"nell",title:"Nell’s Books",byline:"Literature Anthology pages 64–79 · Miriam Cohen",mode:"reference",images:[IMG("la-nell-cover"),IMG("la-rwc-134-135")],
          text:"Genre: Fantasy\n"+NELL+"\nshelf: a flat piece of material, such as wood or metal, that holds things\nclang: a loud noise\nbang: a sudden noise\nwish: something you hope for or want\nMain Story Elements: Character, Setting, Events"},
        bonus("bonus-la-1111",[
          {label:"Big Book: The Story of Martin Luther King Jr.",url:"https://drive.google.com/drive/folders/1ZMWcDyl7pUDWeSug4w2w7CgdjpUmfmnT"},
          {label:"Video: What Are Common and Proper Nouns?",url:"https://www.youtube.com/watch?v=ZHwBhVsaqK8"},
          {label:"Game: Common and Proper Nouns",url:"https://www.baamboozle.com/game/1743329"},
          {label:"Video: Nell’s Books",url:"https://www.youtube.com/watch?v=jvfgUSXTmEw"}
        ])
      ]}
  });

  // ───────────────────────── WELLBEING · Unit 1.5 Working together · Lesson 1 Falling out ─────────────────────────
  const APOLOGY="An apology is saying you are sorry because you have done something wrong, or something which has hurt or upset someone else.";
  const KEY=["falling out","accident","on purpose","sorry","apologise","forgive"];
  const PG34=["sorry","forgive","because","apologise","felt","sad","friend"];
  const WB_Q=[
    wb("Unit 1.5 Working together · Lesson 1","What do you know?",[
      pic(choice("photo","Look at the photo. What are the people doing together?",["They are picking up rubbish.","They are playing football.","They are reading books."],"They are picking up rubbish.","🧤"),IMG("wb-working-together")),
      choice("lesson","In Lesson 1 we learned about saying sorry, an accident or on purpose, and how to forgive a friend after a falling out. So Lesson 1 is called ___.",["Falling out","Friendship Bracelets","People who love me"],"Falling out","💔")
    ],"Unit 1.5: Working together. Lesson 1: Falling out. In the photo, people are working together to pick up rubbish."),
    wb("What is an Apology?","Read the slide. Choose the answer.",[
      pic(choice("apology","An apology is saying you are ___ because you have done something wrong, or something which has hurt or upset someone else.",["sorry","happy","hungry"],"sorry","🙏"),IMG("wb-apology")),
      multi("say","Which words can you say to apologise? Choose 3.",["I am sorry for … because …","I apologise for …","Please forgive me for …","Go away!","It is not my problem."],["I am sorry for … because …","I apologise for …","Please forgive me for …"],"💬")
    ],APOLOGY+" For example: I am sorry for … because … · I apologise for … · Please forgive me for …",{readingId:"wbApology"}),
    wb("Key Words · You Hurt Me!","Theo and Ollie play football. Theo trips Ollie. Ollie cries.",[
      pic(choice("theo","What should Theo do?",["Say sorry to Ollie.","Laugh at Ollie.","Run away."],"Say sorry to Ollie.","⚽"),IMG("wb-you-hurt-me")),
      fixed("accident","“I did not mean it.” This is an ___.",["accident","on purpose"],"accident","🤕"),
      fixed("purpose","“I wanted to do it.” I did it ___.",["on purpose","by accident"],"on purpose","😠"),
      fixed("bonus","Bonus: Theo did not mean to trip Ollie. Was Theo’s trip an accident or on purpose?",["an accident","on purpose"],"an accident","⭐"),
      multi("keywords","Which are our KEY WORDS? Choose 3.",["sorry","apologise","forgive","pizza","rocket"],["sorry","apologise","forgive"],"🔑")
    ],"Key words: "+KEY.join(" · ")+". Accident: I did not mean it. On purpose: I wanted to do it. Theo should say sorry to Ollie.",{readingId:"wbKeyWords"}),
    wb("Wellbeing Book · page 34","Activity 5.1 Me apologising. When have you apologised to somebody?",[
      draw("draw","Draw a picture of a time when you apologised.","🖍️"),
      select("hurt","I’m ___ I hurt you.",PG34,"sorry","🙏"),
      select("toy","I’m sorry I took your ___.",["toy","foot","friend"],"toy","🧸"),
      free("words","Which words did you use to apologise? Write the words that you said.","✏️")
    ],"Write the words that you said: I’m sorry I hurt you. · I’m sorry I took your toy. · I’m sorry I stomped on your foot. Word box: "+PG34.join(" · "),{readingId:"wbPage34"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-11-wellbeing",
    uploadDate:"2026-11-11",
    subjectKey:"wellbeing",
    title:"Wellbeing",
    subject:{name:"Wellbeing",icon:"💞",accent:"#e45d9c",soft:"#fff0f6",subtitle:"11/11/2026 · Unit 1.5 Working together · Lesson 1 Falling out",scoreByField:true,
      groups:groupsOf([["Working together","Lesson 1 Falling out",1],["What is an Apology?","sorry · I apologise for … · Please forgive me for …",1],["Key Words","accident or on purpose · You Hurt Me!",1],["Wellbeing Book","page 34 · Me apologising",1]]),
      questions:WB_Q,
      readings:[
        notes("notes-wb-1111","Remember — Wellbeing",[
          "📅 Class Diary: 11/11/2026",
          "(11/11) Unit 1.5: Working together · Lesson 1: Falling out",
          "(11/11) Apology: "+APOLOGY.replace(/^An apology is /,""),
          "(11/11) Ways to apologise: I am sorry for … because … · I apologise for … · Please forgive me for …",
          "(11/11) Key words: "+KEY.join(" · "),
          "(11/11) Accident: I did not mean it.",
          "(11/11) On purpose: I wanted to do it.",
          "(11/11) Homework: Wellbeing Book, page 34 (if you haven’t finished yet)."
        ],"Unit 1.5"),
        {id:"wbApology",title:"What is an Apology?",byline:"Wellbeing · Unit 1.5 Lesson 1",mode:"reference",images:[IMG("wb-apology")],text:APOLOGY+"\nFor example:\nI am sorry for … because …\nI apologise for …\nPlease forgive me for …"},
        {id:"wbKeyWords",title:"Key Words · Accident or on purpose?",byline:"Wellbeing · Unit 1.5 Lesson 1",mode:"reference",images:[IMG("wb-key-words"),IMG("wb-accident")],text:"Key words: "+KEY.join(" · ")+"\nAccident: I did not mean it.\nOn purpose: I wanted to do it."},
        {id:"wbPage34",title:"Wellbeing Book page 34",byline:"Activity 5.1 Me apologising",mode:"reference",images:[IMG("wb-page-34")],text:"When have you apologised to somebody? Draw a picture of it.\nWrite the words that you said."}
      ]}
  });
})();
