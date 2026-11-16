// TỔNG HỢP KIẾN THỨC TUẦN — Language Arts Unit 2 Week 3 + Week 4 (Class Diary từ 23/10/2026, sau bộ W1&2).
// Không ghi ngày upload: uploadDate bắt đầu bằng "weekly" → nhóm "Tổng hợp" riêng, nhãn "Tổng hợp kiến thức tuần (W3&4)".
// 2 bài: (1) Practice Test theo format bài kiểm tra thật (20 câu): 1 bài đọc + đọc hiểu (1–6) · High-frequency words (7–10)
// · Phonemic Awareness (11–13) · Phonics (14–17) · Grammar/Structural Analysis (18–20) — 1 Part, đúng thứ tự;
// (2) Review: gộp TOÀN BỘ câu của các bài LA theo ngày trong DAILY_LA (bỏ câu trùng), xếp theo chủ đề, mang theo bài đọc,
//     gom mọi link Bonus; thẻ Remember ghép từ thẻ Remember của từng ngày (ngày mới nhất trước).
// Các bài LA theo ngày của W3 vẫn giữ ở tab "Quiz theo ngày" (tuần 3–4 chưa học xong). Diary mới của W3/W4: thêm id vào DAILY_LA.
// 16/11: thêm bài (1b) "Unit Overview" lọc từ 2 tờ tổng hợp đầu mục Unit 2 Week 3/Week 4 (user gửi 16/11) + diary 16/11 vào DAILY_LA (bài kiểm tra 17/11).
// Bài đọc “The Shell Shop” (viết lại 12/11, phủ cả 2 tuần) do mình viết theo kiểu bài kiểm tra: HFW tuần 3 + 4, end blends (W3), digraphs sh/th/ng (W4).
(()=>{
  const L="assets/mascot/academy/language.webp";
  const KEY="weekly-la-u2-w3-w4",LABEL="Tổng hợp kiến thức tuần (W3&4)";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const DAILY_LA=["class-diary-2026-10-23-language","class-diary-2026-10-26-language","class-diary-2026-10-27-language","class-diary-2026-10-28-language",
    "class-diary-2026-10-29-language","class-diary-2026-11-02-language","class-diary-2026-11-03-language","class-diary-2026-11-04-language",
    "class-diary-2026-11-05-language",
    "class-diary-2026-11-06-language","la-common-proper-nouns-test-2026-11-06","class-diary-2026-11-09-language","class-diary-2026-11-10-language","class-diary-2026-11-11-language",
    "class-diary-2026-11-12-language","class-diary-2026-11-13-language","class-diary-2026-11-16-language"];
  const sources=DAILY_LA.map(id=>[id,(window.quizSources||{})[id]]).filter(([,src])=>src);
  const dayOf=src=>(src.uploadDate||"").slice(5).split("-").reverse().join("/");
  const RANGE=sources.length?`${dayOf(sources[0][1])}–${dayOf(sources[sources.length-1][1])}/2026`:"";
  // Remember: ghép thẻ Remember của từng bài ngày, ngày mới nhất trước.
  const NOTES=[...sources].reverse().flatMap(([,src])=>{const n=(src.subject.readings||[]).find(r=>r.mode==="notes");return n?n.text.split("\n").filter(Boolean):[]});
  const notesCard=id=>({id,title:"Remember — Unit 2 Week 3 + Week 4",byline:`Language Arts · Class Diary ${RANGE}`,mode:"notes",text:NOTES.join("\n")});

  // ───── (1) Practice Test: đúng thứ tự 5 phần của đề thật — kiến thức của CẢ Week 3 và Week 4 (viết lại 12/11) ─────
  const HFW=["eat","no","of","under","who","all","call","day","her","want"];
  const GENRE_HINT="Hint: Fantasy = made-up, could not happen in real life (animals talk). Realistic fiction = made-up, but could happen in real life. Nonfiction = real people and real things (photos).";
  const TEST=[
    la("Reading Comprehension · The Shell Shop","Read the story. Then answer the questions.",[
      choice("who","Who has the shell shop?",["Beth the crab","Frog","Fish"],"Beth the crab","🦀"),
      choice("where","Where is the shop?",["at the pond","in a city","in a truck"],"at the pond","🪷"),
      choice("sad","Why is Fish sad?",["He has no cash.","He is sick.","It is raining."],"He has no cash.","🐟"),
      choice("help","How does Beth help out her pal Fish?",["She gives Fish a shell.","She swims under the water.","She calls Duck."],"She gives Fish a shell.","🤝"),
      choice("genre","In this story a crab has a shop and the animals talk. "+GENRE_HINT+" What is the genre?",["Fantasy","Nonfiction","Realistic fiction"],"Fantasy","🦄"),
      fixed("last","What happens LAST?",["The pals eat lunch at the pond.","Beth calls, “Who wants a shell?”","Frog wants a big shell."],"The pals eat lunch at the pond.","🔚")
    ],"Beth the crab has a shell shop at the pond. Fish is sad because he has no cash, so Beth gives him a shell: Beth helps out her pal. Animals talk and have a shop → fantasy. Last, the pals eat lunch at the pond.",{readingId:"testText"}),
    {section:"High-Frequency Words · eat, no, of, under, who · all, call, day, her, want",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,text:"Choose the word that makes the sentence make sense.",fields:[
      bank("call","Beth will ___ her pals to the shop.",HFW,"call","📞"),
      bank("want","I ___ to read a book.",HFW,"want","📖"),
      bank("day","Nell can read all ___ long.",HFW,"day","☀️"),
      bank("under","The frog swims ___ the water.",HFW,"under","🌊"),
      bank("who","___ lives at the pond?",HFW,"who","❓")
    ],explain:"Beth will call her pals to the shop. · I want to read a book. · Nell can read all day long. · The frog swims under the water. · Who lives at the pond?"},
    la("Phonemic Awareness · Phoneme Blending","Say the sounds. Blend them to make a word, or count the sounds.",[
      choice("ship","Blend the sounds: /sh/ /i/ /p/",["ship","sip","chip"],"ship","🚢"),
      choice("thing","Blend the sounds: /th/ /i/ /ng/",["thing","thin","think"],"thing","❔"),
      choice("nest","Blend the sounds: /n/ /e/ /s/ /t/",["nest","net","neck"],"nest","🪺"),
      choice("count","How many sounds do you hear in fish? /f/ /i/ /sh/",["3","4","2"],"3","🔢")
    ],"/sh/ /i/ /p/ → ship · /th/ /i/ /ng/ → thing · /n/ /e/ /s/ /t/ → nest · fish has 3 sounds: /f/ /i/ /sh/ (sh is one sound)."),
    la("Phonics · End blends and digraphs","Look at the picture. Which word names the picture?",[
      choice("p-fish","Which word names the picture?",["fish","fist","fin"],"fish","🐟"),
      choice("p-ship","Which word names the picture?",["ship","shop","chip"],"ship","🚢"),
      choice("p-ring","Which word names the picture?",["ring","rink","rip"],"ring","💍"),
      choice("p-bath","Which word names the picture?",["bath","bat","bash"],"bath","🛁"),
      choice("p-nest","Which word names the picture?",["nest","net","neck"],"nest","🪺"),
      choice("p-sink","Which word names the picture?",["sink","sing","sick"],"sink","🚰")
    ],"Digraphs (Week 4): fish (sh) · ship (sh) · ring (ng) · bath (th). End blends (Week 3): nest (st) · sink (nk)."),
    la("Grammar and Structural Analysis","Choose the correct answer.",[
      choice("dog","One dog has a bed. Which is correct?",["The dog’s bed is little.","The dogs bed is little.","The dogs’ bed is little."],"The dog’s bed is little.","🐶"),
      choice("girls","Many girls have tents. Which is correct?",["The girls’ tents are big.","The girl tents are big.","The girls tents are big."],"The girls’ tents are big.","⛺"),
      choice("ing","Look! The frog is ___ now.",["jumping","jumped","jump"],"jumping","🐸"),
      choice("proper","“Beth has a shop at the pond.” Which word is a proper noun?",["Beth","shop","pond"],"Beth","🔠"),
      choice("common","“Nell gives a book to Dog.” Which word is a common noun?",["book","Nell","Dog"],"book","🔡"),
      choice("picnic","Split the word into closed syllables: picnic",["pic/nic","pi/cnic","picn/ic"],"pic/nic","🧺")
    ],"One → ’s: the dog’s bed. More than one → s’: the girls’ tents. -ing tells what is happening now: jumping. Beth is a proper noun (a name, capital letter); book is a common noun. pic/nic: each closed syllable ends in a consonant and has a short vowel.")
  ];
  registerQuiz({
    id:"la-u2-w3-w4-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Practice Test",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Test format · Week 3 + Week 4 · Reading 1–6 · High-frequency words 7–10 · Phonemic awareness 11–13 · Phonics 14–17 · Grammar 18–20",scoreByField:true,
      groups:groupsOf([
        ["Reading Comprehension","Test questions 1–6 · read the story, then answer",1],
        ["High-Frequency Words","Test questions 7–10 · choose the word that makes the sentence make sense",1],
        ["Phonemic Awareness","Test questions 11–13 · blend the sounds, count the sounds",1],
        ["Phonics","Test questions 14–17 · end blends st, nk · digraphs sh, th, ng",1],
        ["Grammar and Structural Analysis","Test questions 18–20 · possessive nouns ’s / s’ · -ing · common and proper nouns · closed syllables",1]
      ]),
      questions:TEST,
      readings:[
        {id:"testText",title:"The Shell Shop",byline:"Test-style reading · a new story with words from Week 3 and Week 4",mode:"reference",text:"Beth is a crab. She has a shop at the pond. It is a shell shop!\n\n“Who wants a shell?” calls Beth. “Come to my shop!”\n\nFrog, Duck, and Fish come to the shop. It is a sunny day.\n\nFrog wants a big shell. Duck wants a pink shell.\n\nFish has no cash. He is sad.\n\nBeth gives Fish a shell. “This is for you,” she says.\n\n“Thank you!” says Fish. He swims under the water with his shell.\n\nBeth helps all of her pals. Then the pals eat lunch at the pond."},
        notesCard("notes-la-u2w34-test")
      ]}
  });

  // ───── (1b) Unit Overview: lọc từ 2 tờ tổng hợp đầu mục user gửi 16/11 (NKL/Tháng 11/unittwoweekthree2023.pdf, unittwoweekfour2023.pdf) ─────
  // Chỉ giữ mục ĐÃ HỌC trong diary (định nghĩa nguyên văn diary). Bỏ: multiple-meaning words, text feature: lists, interview a classmate, handwriting (diary không có nội dung).
  const SPELL3=["lend","send","fast","past","sink","wink","run","bug","of","who"],SPELL4=["fish","shop","ship","with","thing","sang","fast","wink","want","call"];
  const VOC3=["depend","habitat","hibernate","tranquil","tolerate"],VOC4=["admire","leadership","enjoy","rely","connections"];
  const ROLE=["Shared Read","Anchor Text","Paired Text"],BL=["nd","st","nk"],DG=["sh","th","ng"];
  const OVERVIEW=[
    la("Unit 2 · Big Idea and Key Concepts","Unit 2 Week 3 + Week 4 overview. Choose the answer.",[
      choice("o-big","In Unit 2 we read about animals that live together at a pond, people who help out in the community, Nell and her books, and kids who help the neighborhood. So the Big Idea of Unit 2 is ___.",["What makes a community?","How do plants grow?","What is the weather like today?"],"What makes a community?","🏘️"),
      choice("o-kc3","Week 3: “The Best Spot”, “At a Pond” and “Way Down Deep” are about animals that live together in nature. So the Key Concept of Week 3 is ___.",["A Community in Nature","Let’s Help","Our Families"],"A Community in Nature","🌿"),
      choice("o-kc4","Week 4: “Thump Thump Helps Out”, “Nell’s Books” and “Kids Can Help!” are about helping. So the Key Concept of Week 4 is ___.",["Let’s Help","A Community in Nature","Our Families"],"Let’s Help","🤝"),
      choice("o-eq3","Week 3: a forest spot with lots of animals, a pond with frogs and ducks, animals under the sea. So the Essential Question of Week 3 is ___.",["Where do animals live together?","How do people help out in the community?","What makes a good friend?"],"Where do animals live together?","❓"),
      choice("o-eq4","Week 4: Thump Thump helps his friends, Nell gives books to her friends, kids grow a garden and clean the playground. So the Essential Question of Week 4 is ___.",["How do people help out in the community?","Where do animals live together?","What makes a good friend?"],"How do people help out in the community?","❓")
    ],"Big Idea: What makes a community? Week 3 · Key Concept: A Community in Nature · EQ: Where do animals live together? Week 4 · Key Concept: Let’s Help · EQ: How do people help out in the community?"),
    la("Unit 2 · Texts and Genre","Shared Read · Anchor Text · Paired Text.",[
      select("o-best","“The Best Spot” (Week 3)",ROLE,"Shared Read","🌲"),
      select("o-pond","“At a Pond” (Week 3)",ROLE,"Anchor Text","🐸"),
      select("o-deep","“Way Down Deep” (Week 3)",ROLE,"Paired Text","🌊"),
      select("o-thump","“Thump Thump Helps Out” (Week 4)",ROLE,"Shared Read","🐰"),
      select("o-nell","“Nell’s Books” (Week 4)",ROLE,"Anchor Text","📚"),
      select("o-kids","“Kids Can Help!” (Week 4)",ROLE,"Paired Text","🌻"),
      choice("o-g3","“The Best Spot” and “At a Pond” have photos and give facts about real animals. "+GENRE_HINT+" What is the genre?",["Informational text (nonfiction)","Fantasy","Realistic fiction"],"Informational text (nonfiction)","📷"),
      choice("o-g4","In “Thump Thump Helps Out” and “Nell’s Books” the animals talk. "+GENRE_HINT+" What is the genre?",["Fantasy","Informational text (nonfiction)","Realistic fiction"],"Fantasy","🦄"),
      choice("o-poem","Which text is a poem?",["Way Down Deep","At a Pond","Nell’s Books"],"Way Down Deep","🎵")
    ],"Week 3: Shared Read “The Best Spot” · Anchor Text “At a Pond” · Paired Text “Way Down Deep” (poem). Genre: informational text (nonfiction). Week 4: Shared Read “Thump Thump Helps Out” · Anchor Text “Nell’s Books” · Paired Text “Kids Can Help!”. Genre: fantasy."),
    {...la("Oral Vocabulary · Week 3","depend · habitat · hibernate · tranquil · tolerate",[
      bank("o-depend","When you ___ on something, you rely on it for the things you need.",VOC3,"depend","🍼"),
      bank("o-habitat","A ___ is the place where an animal lives in nature.",VOC3,"habitat","🌲"),
      bank("o-hibernate","To ___ is to spend the winter sleeping in a shelter.",VOC3,"hibernate","🐻"),
      bank("o-tranquil","___ means “calm and peaceful.”",VOC3,"tranquil","🌅"),
      bank("o-tolerate","___ means “put up with something unpleasant.”",VOC3,"tolerate","😣")
    ],"depend: When you depend on something, you rely on it for the things you need. · habitat: the place where an animal lives in nature. · hibernate: to spend the winter sleeping in a shelter. · tranquil: calm and peaceful. · tolerate: put up with something unpleasant."),wordBank:VOC3},
    {...la("Oral Vocabulary · Week 4","admire · leadership · enjoy · rely · connections",[
      bank("o-admire","When you ___ someone, you approve of and like that person.",VOC4,"admire","😍"),
      bank("o-leader","___: the ability to guide a group of people or the action of leading others.",VOC4,"leadership","🧭"),
      bank("o-enjoy","If you ___ something, you like it.",VOC4,"enjoy","😊"),
      bank("o-rely","When you know you can trust someone to help, you ___ on that person.",VOC4,"rely","🤝"),
      bank("o-connect","___ are links between two or more things.",VOC4,"connections","🔗")
    ],"admire: approve of and like a person · leadership: the ability to guide a group of people · enjoy: like something · rely: trust someone to help · connections: links between two or more things."),wordBank:VOC4},
    {section:"High-Frequency Words · Week 3 + Week 4",img:L,layout:"icon-activity",type:"compound",wordBank:HFW,text:"eat · no · of · under · who · all · call · day · her · want. Choose the word that makes the sentence make sense.",fields:[
      bank("o-eat","Cows ___ grass.",HFW,"eat","🐄"),
      bank("o-no","There is ___ milk in the cup. It is empty.",HFW,"no","🥛"),
      bank("o-of","I have a cup ___ water.",HFW,"of","💧"),
      bank("o-who","___ is at the door?",HFW,"who","🚪"),
      bank("o-all","We ___ like to play tag.",HFW,"all","🏃"),
      bank("o-her","Mom reads a book to ___ baby.",HFW,"her","👶"),
      bank("o-wantc","Do you ___ an apple?",HFW,"want","🍎"),
      bank("o-callc","Please ___ me on the phone.",HFW,"call","📞")
    ],explain:"Cows eat grass. · There is no milk in the cup. · I have a cup of water. · Who is at the door? · We all like to play tag. · Mom reads a book to her baby. · Do you want an apple? · Please call me on the phone."},
    la("Spelling Words · Week 3 · ending consonant blends","lend · send · fast · past · sink · wink · run · bug · of · who",[
      select("o-lend","lend",BL,"nd","🤲"),
      select("o-past","past",BL,"st","⏪"),
      select("o-sink","sink",BL,"nk","🚰"),
      choice("o-rh1","Which spelling word rhymes with lend?",["send","sink","bug"],"send","📨"),
      choice("o-rh2","Which spelling word rhymes with fast?",["past","wink","run"],"past","⏩"),
      choice("o-rh3","Which spelling word rhymes with sink?",["wink","lend","who"],"wink","😉"),
      multi("o-u","Which spelling words have short u? Choose 2.",["run","bug","lend","sink"],["run","bug"],"🐛")
    ],"Week 3 spelling words: lend, send (nd) · fast, past (st) · sink, wink (nk) · run, bug (short u) · of, who (high-frequency words)."),
    la("Spelling Words · Week 4 · consonant digraphs th, sh, -ng","fish · shop · ship · with · thing · sang · fast · wink · want · call",[
      select("o-fish","fish",DG,"sh","🐟"),
      select("o-shop","shop",DG,"sh","🏪"),
      select("o-with","with",DG,"th","🧵"),
      select("o-sang","sang",DG,"ng","🎤"),
      choice("o-sp1","Which spelling is correct?",["want","whant","wantt"],"want","✍️"),
      choice("o-sp2","Which spelling is correct?",["call","cal","coll"],"call","✍️")
    ],"Week 4 spelling words: fish, shop, ship (sh) · with (th) · thing (th + ng) · sang (ng) · review: fast, wink · high-frequency words: want, call."),
    la("Phonemic Awareness · Week 3 + Week 4","blending · substitution · categorization · segmentation · isolation",[
      choice("o-sub1","Say lend. Change /l/ to /s/. What is the new word?",["send","sand","lens"],"send","🔄"),
      choice("o-sub2","Say sink. Change /s/ to /w/. What is the new word?",["wink","sing","wing"],"wink","🔄"),
      choice("o-cat","Which word does NOT end with the same sound? fish · dish · sang",["sang","fish","dish"],"sang","👂"),
      choice("o-seg","How many sounds do you hear in fast? /f/ /a/ /s/ /t/",["4","3","2"],"4","🔢"),
      choice("o-iso","What is the first sound in ship?",["/sh/","/s/","/p/"],"/sh/","🔊"),
      choice("o-blend","Blend the sounds: /w/ /i/ /th/",["with","wish","win"],"with","🧩")
    ],"lend → send · sink → wink · fish and dish end with /sh/; sang ends with /ng/ · fast: /f/ /a/ /s/ /t/ = 4 sounds · ship starts with /sh/ · /w/ /i/ /th/ → with."),
    la("Grammar, Mechanics and Structural Analysis · Week 3 + Week 4","possessive nouns · apostrophes · common and proper nouns · capitalize proper nouns · -ing · closed syllables",[
      choice("o-pos1","One bird has a nest. Which is correct?",["the bird’s nest","the birds nest","the birds’ nest"],"the bird’s nest","🪺"),
      choice("o-pos2","Many frogs have a pond. Which is correct?",["the frogs’ pond","the frog pond’s","the frogs pond"],"the frogs’ pond","🐸"),
      choice("o-cap","“my dog rover likes to run.” Which proper noun needs a capital letter?",["rover","dog","run"],"rover","🐕"),
      choice("o-ing","Look! The bear is ___ in its den.",["sleeping","sleep","sleeps"],"sleeping","🐻"),
      choice("o-closed","Which word has two closed syllables?",["picnic","tiger","pilot"],"picnic","🧺")
    ],"One → ’s: the bird’s nest. More than one → s’: the frogs’ pond. Proper nouns (Rover) start with a capital letter. -ing tells what is happening now: sleeping. pic/nic = two closed syllables; ti/ger and pi/lot start with an open syllable."),
    la("Reading Skills · Week 3 + Week 4","author’s purpose · poetry · characters, setting, events · research",[
      choice("o-purpose","The author’s purpose is the reason why an author ___ a text.",["writes","reads","draws"],"writes","✍️"),
      select("o-rep","Poems often have ___, or repeated words or phrases.",["repetition","alliteration"],"repetition","🔁"),
      select("o-allit","Poems also use ___, or words that start with the same sound.",["alliteration","repetition"],"alliteration","🔤"),
      select("o-sss","“sand, stones, seaweed” is an example of ___.",["alliteration","repetition"],"alliteration","🐚"),
      select("o-char","___ are the people or animals in a story.",["Characters","Setting","Events"],"Characters","🧑"),
      select("o-set","___ is where the story takes place.",["Setting","Characters","Events"],"Setting","🏡"),
      select("o-ev","___ are what happen in the story.",["Events","Characters","Setting"],"Events","🎬"),
      choice("o-res","Week 3 Research: What did we research?",["an animal in its habitat","a recipe for cake","a famous song"],"an animal in its habitat","🔎")
    ],"The author’s purpose is the reason why an author writes a text. Poems often have repetition, or repeated words or phrases. Poems also use alliteration, or words that start with the same sound (sand, stones, seaweed). Characters are the people or animals in a story. Setting is where the story takes place. Events are what happen in the story. Week 3 Research: an animal in its habitat.")
  ];
  registerQuiz({
    id:"la-u2-w3-w4-overview",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Unit Overview (all topics)",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Every topic on the Unit 2 Week 3 + Week 4 overview sheets · Big Idea · texts · vocabulary · HFW · spelling · phonemic awareness · grammar · reading skills",scoreByField:true,
      groups:groupsOf([["Big Idea and Key Concepts","What makes a community? · A Community in Nature · Let’s Help",1],["Texts and Genre","Shared Read · Anchor Text · Paired Text",1],["Oral Vocabulary","Week 3 · Week 4",2],["High-Frequency Words","eat · no · of · under · who · all · call · day · her · want",1],["Spelling Words","Week 3 end blends · Week 4 digraphs",2],["Phonemic Awareness","blending · substitution · categorization · segmentation · isolation",1],["Grammar and Mechanics","possessive nouns · capital letters · -ing · closed syllables",1],["Reading Skills","author’s purpose · poetry · story elements · research",1]]),
      questions:OVERVIEW,
      readings:[
        {id:"overview",title:"Unit 2 · Week 3 + Week 4 Overview",byline:"What we learned in Week 3 and Week 4",mode:"reference",text:[
          "Big Idea: What makes a community?",
          "WEEK 3 · Key Concept: A Community in Nature · Essential Question: Where do animals live together?",
          "Genre: Informational Text · Shared Read: “The Best Spot” · Anchor Text: At a Pond · Paired Text: “Way Down Deep”",
          "Oral Vocabulary: depend, habitat, hibernate, tranquil, tolerate · High-Frequency Words: eat, no, of, under, who",
          "Spelling (ending consonant blends): lend, send, fast, past, sink, wink, run, bug, of, who",
          "Reading Poetry: repetition, alliteration · Reading Informational Text: author’s purpose, retell",
          "Grammar: possessive nouns · Mechanics: apostrophes with possessive nouns · Structural Analysis: inflectional ending -ing",
          "Research: research an animal in its habitat",
          "",
          "WEEK 4 · Key Concept: Let’s Help · Essential Question: How do people help out in the community?",
          "Genre: Fantasy · Shared Read: “Thump Thump Helps Out” · Anchor Text: Nell’s Books · Paired Text: “Kids Can Help”",
          "Oral Vocabulary: admire, leadership, enjoy, rely, connections · High-Frequency Words: all, call, day, her, want",
          "Spelling (consonant digraphs th, sh, -ng): fish, shop, ship, with, thing, sang, fast, wink, want, call",
          "Reading Literature: character, setting, events, retell",
          "Grammar: common and proper nouns · Mechanics: capitalize proper nouns · Structural Analysis: closed syllables"].join("\n")},
        notesCard("notes-la-u2w34-ov")
      ]}
  });

  // ───── (2) Review: gộp mọi câu của các bài LA theo ngày (bỏ câu trùng nội dung + đáp án) ─────
  const norm=v=>String(Array.isArray(v)?v.join("|"):v??"").toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9'|/+=-]+/g," ").trim();
  const fieldKeys=q=>(q.type==="compound"?q.fields:[q]).map(f=>`${norm(f.label||q.text)}#${norm(f.answer)}`);
  const BUCKET=[
    ["High-Frequency Words","eat · no · of · under · who · all · call · day · her · want",/high-frequency|\bhfw\b/i],
    ["Phonemic Awareness","phoneme blending",/phonemic|phoneme/i],
    ["Writing","write a sentence · Ben’s student model · capital letters · Write About the Anchor Text · a good beginning · end punctuation",/writing(?! companion)/i],
    ["Grammar","singular and plural possessive nouns ’s / s’ · fix the possessives · common and proper nouns · possessive noun poster · nouns: person, place, animal, thing",/grammar|possessive|fix the draft|write each sentence/i],
    ["Structural Analysis","inflectional ending -ing · What is happening now? · closed syllables · counting syllables · open and closed syllables · Syllable Smash",/structural|-ing|circle the word/i],
    ["Phonics","end blends st · nk · nd · nt · sk · mp · ft · spelling words · consonant digraphs sh · th · -ng · ch",/phonics|end blend|sort the words|spelling/i],
    ["Research and Inquiry","Pick to research: animal · habitat · food · Where Animals Live",/research/i],
    ["Essential Question and Vocabulary","Where do animals live together? · How do people help out in the community? · habitat · depend · hibernate · tranquil · tolerate · Ways to Help · leadership · admire · connections · enjoy · rely",/build knowledge|build background|build vocabulary|vocabulary|essential/i],
    ["Stories and Texts","The Best Spot · Babies in the Bayou · At a Pond · Way Down Deep (poetry) · Thump Thump Helps Out (fantasy) · The Three Billy Goats Gruff · The Chicks and the Fox · The Story of Martin Luther King Jr. (biography) · Nell’s Books (fantasy) · Aesop’s Fables · Kids Can Help! (nonfiction) · characters, setting, events · nonfiction · author’s purpose",/.*/]];
  const buckets=new Map(BUCKET.map(([t,sub])=>[t,{subtitle:sub,items:[]}]));
  const seen=new Set(),readings=[notesCard("notes-la-u2w34")],links=new Map();
  for(const [id,src] of sources){
    const day=dayOf(src);
    for(const q of src.subject.questions){
      const keys=fieldKeys(q);if(!keys.some(k=>!seen.has(k))) continue;
      keys.forEach(k=>seen.add(k));
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){
        const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}
      }
      buckets.get(BUCKET.find(([,,re])=>re.test(q.section||""))[0]).items.push(copy);
    }
    (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
  }
  if(links.size) readings.push({id:"bonus-la-u2w34",title:"Bonus · Video & game",byline:"All links from the Class Diaries of Unit 2 Week 3 and Week 4",mode:"bonus",links:[...links.values()],text:""});
  const parts=[...buckets].filter(([,b])=>b.items.length);
  registerQuiz({
    id:"la-u2-w3-w4-summary",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"language",
    title:"LA_U2_W3+4 · Review (all lessons)",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:`All Language Arts classes · Unit 2 Week 3 + Week 4 · Class Diary ${RANGE}`,scoreByField:true,
      groups:groupsOf(parts.map(([t,b])=>[t,b.subtitle,b.items.length])),questions:parts.flatMap(([,b])=>b.items),readings}
  });
})();
