// TỔNG HỢP KIẾN THỨC TUẦN — Language Arts Unit 2 Week 1 + Week 2 (Class Diary 01/10 → 21/10/2026).
// Không ghi ngày upload: uploadDate bắt đầu bằng "weekly" → nhóm riêng "Tổng hợp kiến thức tuần" trên đầu Danh sách.
// 2 bài: (1) Practice Test theo format bài kiểm tra thật (20 câu): 1 truyện + đọc hiểu (1–6) · High-frequency words (7–10)
// · Phonemic Awareness (11–13) · Phonics (14–17) · Grammar/Structural Analysis (18–20) — 1 Part, đúng thứ tự;
// (2) Review: toàn bộ phần ôn thêm của 2 tuần (tự chia Part). Trên web KHÔNG giới hạn 20 câu.
// Nguồn: các đề ngày (đối chiếu diary + link) và overview unittwoweekone2023 / unittwoweektwo2023 (spelling, skills).
// Truyện đọc “Gus and Jen Fix the Hut” do mình viết theo kiểu bài kiểm tra (dùng từ HFW, short e/u của 2 tuần).
(()=>{
  const L="assets/mascot/academy/language.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const rewrite=(id,label,answer,icon)=>({id,label,type:"fill",strict:true,answer:[answer,answer.replace(/’/g,"'")],icon});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:L,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const GENRES=["Fantasy","Realistic fiction","Nonfiction"];
  const HFW1=["again","help","new","there","use"],HFW2=["could","live","one","then","three"];
  const SND=["/t/","/d/","/id/"],SES=["s","es"];
  const VOC2W=["shelter","materials","collapsed","furious","refused"];
  const VOC2=["A building that keeps you safe.","The things we use to build and make.","If something has fallen down, it has collapsed.","When someone is really angry.","When you say no to something."];
  const VOC=["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."];

  const TEST=[
    // ───── Bài kiểm tra mẫu: đúng thứ tự 5 phần của đề thật ─────
    la("Reading Comprehension · Gus and Jen Fix the Hut","Read the story. Then answer the questions.",[
      choice("chars","Who are the characters in the story?",["Gus, Jen, Mom, and Dad","Ben and Mom","Gus, Russ, and Bud"],"Gus, Jen, Mom, and Dad","👨‍👩‍👧‍👦"),
      choice("setting","Where do Gus and Jen live?",["in a red hut","in a big school","in a fire station"],"in a red hut","🛖"),
      choice("problem","What is the problem in the story?",["The wind made the hut fall down.","The pups ran away.","Gus lost his red hat."],"The wind made the hut fall down.","💨"),
      multi("made","What did they use to make the new hut? Choose 3.",["mud","sticks","grass","glass","bricks"],["mud","sticks","grass"],"🪵"),
      choice("end","What happens at the end?",["The new hut is snug and dry.","The new hut falls down again.","They move to the city."],"The new hut is snug and dry.","🏠"),
      choice("genre","Could this story happen in real life? What is the genre?",["Realistic fiction","Fantasy","Nonfiction"],"Realistic fiction","📖")
    ],"Characters: Gus, Jen, Mom, and Dad · Setting: a red hut · Problem: the wind huffed and puffed and the hut fell down · Solution: they made a new hut with mud, sticks, and grass · End: the new hut is snug and dry. The family does things that could happen in real life → realistic fiction.",{readingId:"testStory"}),
    {section:"High-Frequency Words · Mixed",img:L,layout:"icon-activity",type:"compound",wordBank:["live","one","could","three","then","again","help","there"],text:"Choose the word that makes the sentence make sense.",fields:[
      bank("live","I ___ in the city.",["live","one","could","three","then","again","help","there"],"live","🏙️"),
      bank("one","There is ___ duck.",["live","one","could","three","then","again","help","there"],"one","🦆"),
      bank("could","Sam ___ swim.",["live","one","could","three","then","again","help","there"],"could","🏊"),
      bank("three","She has ___ pups.",["live","one","could","three","then","again","help","there"],"three","🐶"),
      bank("then","I run up the hill. ___ I run down the hill.",["live","one","could","three","then","again","help","there"],"then","⛰️")
    ],explain:"I live in the city. · There is one duck. · Sam could swim. · She has three pups. · I run up the hill. Then I run down the hill. (Practice Book page 107)"},
    la("Phonemic Awareness · Blend and segment","Say the sounds. Blend them to make a word, or count the sounds.",[
      choice("hen","Blend the sounds: /h/ /e/ /n/",["hen","hat","hug"],"hen","🐔"),
      choice("bug","Blend the sounds: /b/ /u/ /g/",["bug","big","bag"],"bug","🐞"),
      choice("count","How many sounds do you hear in rug?",["3","2","4"],"3","🔢"),
      choice("same","Which word has the same middle sound as pup?",["cub","pen","pig"],"cub","🐶"),
      choice("odd","Which word does NOT rhyme? fun · sun · net",["net","fun","sun"],"net","☀️")
    ],"/h/ /e/ /n/ → hen · /b/ /u/ /g/ → bug · rug has 3 sounds: /r/ /u/ /g/ · pup and cub have the same middle sound /u/ · fun and sun rhyme, net does not."),
    la("Phonics · Spelling words","Choose the word that is spelled correctly.",[
      choice("leg","🦵",["leg","lag","lug"],"leg","🦵"),
      choice("hen","🐔",["hen","hin","hun"],"hen","🐔"),
      choice("bread","🍞",["bread","bred","brud"],"bread","🍞"),
      choice("head","🙂 (on top of your body)",["head","hed","hud"],"head","🙂"),
      choice("bug","🐞",["bug","beg","big"],"bug","🐞"),
      choice("cut","✂️",["cut","cat","cot"],"cut","✂️"),
      select("fam1","bug → word family",["-ug","-un","-ut"],"-ug","🐞"),
      select("fam2","nut → word family",["-ug","-un","-ut"],"-ut","🥜")
    ],"Unit 2 spelling words — short e: leg, beg, men, hen, head, bread · short u: run, fun, nut, cut, bug, rug. Word families: bug (-ug), nut (-ut)."),
    la("Grammar and Structural Analysis","Choose the correct answer.",[
      choice("noun","Find the noun: The cubs fix the roof.",["roof","fix","the"],"roof","🏠"),
      choice("plural","one box → two ___",["boxes","boxs","box"],"boxes","📦"),
      choice("contraction","it is → ___",["it’s","its","it is’"],"it’s","🌧️"),
      choice("comma","Which sentence is correct?",["I see a cat, a dog, and a pig.","I see a cat a dog and a pig.","I see a cat, a dog and, a pig."],"I see a cat, a dog, and a pig.","🐱"),
      choice("ed","Yesterday I ___ my mom.",["helped","help","helps"],"helped","🙋"),
      choice("trucks","Which sentence is correct?",["The trucks are stuck in mud.","The truck are stuck in mud.","The trucks is stuck in mud."],"The trucks are stuck in mud.","🚚")
    ],"roof is a noun (a thing) · box → boxes (ends in x → add -es) · it is → it’s · Commas: a cat, a dog, and a pig · Yesterday = already happened → add -ed: helped."),
  ];

  const Q=[
    // ───── High-Frequency Words ─────
    {section:"High-Frequency Words · Week 1",img:L,layout:"icon-activity",type:"compound",wordBank:HFW1,text:"Complete the sentences.",fields:[
      bank("again","Rex fell down ___.",HFW1,"again","🔁"),
      bank("help","Can you ___ fix this mess?",HFW1,"help","🆘"),
      bank("new","Will you help the ___ kid?",HFW1,"new","🆕"),
      bank("there","___ is my red pen!",HFW1,"there","🖊️"),
      bank("use","Tell Ben to ___ a net.",HFW1,"use","🥅")
    ],explain:"Rex fell down again. · Can you help fix this mess? · Will you help the new kid? · There is my red pen! · Tell Ben to use a net. (01/10)"},
    {section:"High-Frequency Words · Week 2",img:L,layout:"icon-activity",type:"compound",wordBank:HFW2,text:"Complete the sentences.",fields:[
      bank("could","I ___ pull a big sled.",HFW2,"could","🛷"),
      bank("live","Does a fox ___ in a den?",HFW2,"live","🦊"),
      bank("one","There is ___ frog on the log.",HFW2,"one","🐸"),
      bank("then","What did you do ___?",HFW2,"then","❓"),
      bank("three","___ black dogs run in the grass.",HFW2,"three","🐕")
    ],explain:"I could pull a big sled. · Does a fox live in a den? · There is one frog on the log. · What did you do then? · Three black dogs run in the grass. (13/10)"},
    {section:"High-Frequency Words · Let’s Review (19/10)",img:L,layout:"icon-activity",type:"compound",wordBank:HFW2,text:"Complete the sentences.",fields:[
      bank("could","___ you help me, please?",HFW2,"could","🙋"),
      bank("live","I ___ in a big house.",HFW2,"live","🏠"),
      bank("then","Put on your shoes, ___ go outside.",HFW2,"then","👟"),
      bank("one","I have ___ red ball.",HFW2,"one","🔴"),
      bank("three","He has ___ blue pens.",HFW2,"three","🖊️")
    ],explain:"Could you help me, please? · I live in a big house. · Put on your shoes, then go outside. · I have one red ball. · He has three blue pens. (19/10)"},
    // ───── Phonemic Awareness ─────
    la("Sounds in words","Beginning, middle, and final sounds · rhyme.",[
      choice("bat","What is the beginning sound in bat?",["/b/","/a/","/t/"],"/b/","🦇"),
      choice("set","What is the middle sound in set?",["/e/","/s/","/t/"],"/e/","🎯"),
      choice("wig","What is the final sound in wig?",["/g/","/w/","/i/"],"/g/","💇"),
      choice("rhyme","Bug and rug rhyme because they both end with the same sounds: ___.",["/ug/","/un/","/up/"],"/ug/","🐞")
    ],"bat → /b/ · set → middle sound /e/ · wig → final sound /g/ · Bug and rug rhyme: they both end with /ug/."),
    la("Rhyme · Pictures (19/10)","Which word rhymes?",[
      choice("well","well",["bell","sun","pencil"],"bell","🔔"),
      choice("crown","crown",["frown","pan","mouse"],"frown","👑"),
      choice("school","school",["pool","car","mug"],"pool","🏫"),
      choice("pot","pot",["hot","dog","pickle"],"hot","🍲")
    ],"well – bell · crown – frown · school – pool · pot – hot (game Rhyming Pictures)"),
    // ───── Phonics ─────
    la("Short e and short u","Which word has the sound?",[
      choice("ea","The letters e or ea can make the short e sound. Which word has ea?",["bread","bed","bud"],"bread","🍞"),
      multi("shortE","Which words have the short e sound? Choose 3.",["leg","pen","web","rug","cat"],["leg","pen","web"],"🦵"),
      choice("u","The letter u can make the short u sound you hear in ___.",["rug","rag","rig"],"rug","🟫"),
      multi("shortU","Which words have the short u sound? Choose 4.",["run","fun","bug","nut","net","pig"],["run","fun","bug","nut"],"🐞")
    ],"Short e: e (leg, pen, web) or ea (bread, head). Short u: u (rug, run, fun, bug, nut, cut, mud, cub)."),
    la("Phonics · Read Together and ph (16/10)","Short u sentences and the letters ph.",[
      multi("pup","The pup dug in the mud. Choose 3 short u words.",["pup","dug","mud","the","in"],["pup","dug","mud"],"🐶"),
      choice("ph","ph makes the sound ___.",["/f/","/p/","/h/"],"/f/","📞"),
      multi("phw","Which words have ph? Choose 2.",["phone","dolphin","fun","pup"],["phone","dolphin"],"🐬")
    ],"The pup dug in the mud. Gus put the bug in a cup. The sun is up and hot. · ph makes the /f/ sound: photo, phone, dolphin, elephant."),
    la("Phonics · Short e or short u?","Sort the words.",[
      select("men","men",["short e","short u"],"short e","👨‍👨‍👦"),
      select("nut","nut",["short e","short u"],"short u","🥜"),
      select("head","head",["short e","short u"],"short e","🙂"),
      select("rug","rug",["short e","short u"],"short u","🟫"),
      select("beg","beg",["short e","short u"],"short e","🐶"),
      select("fun","fun",["short e","short u"],"short u","🎉")
    ],"Short e: men, head, beg (e and ea) · Short u: nut, rug, fun."),
    la("Phonics · Word families (20/10)","Sort the words: -ug, -un, -ut.",[
      select("rug","rug",["-ug","-un","-ut"],"-ug","🟫"),
      select("run","run",["-ug","-un","-ut"],"-un","🏃"),
      select("lunch","lunch",["-ug","-un","-ut"],"-un","🍱"),
      select("cut","cut",["-ug","-un","-ut"],"-ut","✂️"),
      select("skunk","skunk",["-ug","-un","-ut"],"-un","🦨")
    ],"Words with ug: bug, rug · Words with un: fun, run, lunch, skunk · Words with ut: cut, nut. (Practice Book 102A–102B)"),
    la("Phonics · Short u or short a? (21/10)","Listen to the middle sound.",[
      select("cup","cup",["short u","short a"],"short u","☕"),
      select("cap","cap",["short u","short a"],"short a","🧢"),
      select("hut","hut",["short u","short a"],"short u","🛖"),
      select("hat","hat",["short u","short a"],"short a","🎩"),
      multi("tub","The tub is so much fun. Choose 3 short u words.",["tub","much","fun","so","is"],["tub","much","fun"],"🛁")
    ],"Short u: cup, hut, tub, much, fun · Short a: cap, hat. (Board Race and Read Together, 21/10)"),
    // ───── Grammar and Structural Analysis ─────
    la("Nouns","A noun names a person, place, or thing.",[
      select("teacher","teacher",["person","place","thing"],"person","👩‍🏫"),
      select("library","library",["person","place","thing"],"place","🏛️"),
      select("pencil","pencil",["person","place","thing"],"thing","✏️"),
      choice("find","Find the noun: The dog is white.",["dog","is","white"],"dog","🐶")
    ],"A noun is a word that names a person, a place, a thing, an animal. teacher – person · library – place · pencil – thing · dog – noun."),
    la("Singular and plural nouns","A singular noun names one. A plural noun names more than one.",[
      select("cub","cub",["singular noun","plural noun"],"singular noun","🐻"),
      select("cubs","cubs",["singular noun","plural noun"],"plural noun","🐻"),
      select("box","box → box___",SES,"es","📦"),
      select("dog","dog → dog___",SES,"s","🐶"),
      select("dish","dish → dish___",SES,"es","🍽️"),
      choice("fox","one fox → two ___",["foxes","foxs","fox"],"foxes","🦊"),
      choice("dress","Lin will hang the ___ up.",["dresses","dresss","dress"],"dresses","👗"),
      choice("glass","Pat will set up the ___.",["glasses","glasss","glass"],"glasses","🥛")
    ],"cub – singular · cubs – plural. If a word ends in s, ss, sh, ch, x, z → add -es: boxes, dishes, foxes. Otherwise add s: dogs."),
    la("Commas in a series","In a list with three or more nouns, a comma is used after all but the last noun.",[
      choice("right","Which sentence is correct?",["Frogs, cats, and dogs are in the pet show.","Frogs cats and dogs are in the pet show.","Frogs, cats and, dogs are in the pet show."],"Frogs, cats, and dogs are in the pet show.","🐸"),
      choice("count","Dogs, cats, and fish make good pets. 3 nouns → how many commas?",["2","3","1"],"2","🔢"),
      rewrite("fix","Write it correctly: I see a lion a tiger and a bear.","I see a lion, a tiger, and a bear.","🦁")
    ],"Count how many nouns. There will always be 1 less comma. Frogs, cats, and dogs are in the pet show. · I see a lion, a tiger, and a bear."),
    la("-ed endings","Add -ed to an action word to tell about something that already happened.",[
      choice("help","help → ___",["helped","helpd","helping"],"helped","🙋"),
      select("kissed","kissed",SND,"/t/","💋"),
      select("loved","loved",SND,"/d/","❤️"),
      select("painted","painted",SND,"/id/","🎨"),
      select("talked","talked",SND,"/t/","🗣️"),
      select("visited","visited",SND,"/id/","🏠")
    ],"help → helped. -ed can sound like /t/ (kissed, talked), /d/ (loved) or /id/ (painted, visited — words that end with a /t/ or /d/ sound)."),
    la("Contractions with ’s","A contraction is when you put two words together to make one word.",[
      select("he","he is",["he’s","it’s","let’s","there’s"],"he’s","👦"),
      select("it","it is",["he’s","it’s","let’s","there’s"],"it’s","🌧️"),
      select("let","let us",["he’s","it’s","let’s","there’s"],"let’s","🎲"),
      select("there","there is",["he’s","it’s","let’s","there’s"],"there’s","🚚"),
      select("what","what is",["what’s","where’s","how’s"],"what’s","🔊"),
      select("how","how is",["what’s","where’s","how’s"],"how’s","🌤️"),
      choice("letter","In it’s, the apostrophe (’) replaces the letter ___.",["i","s","t"],"i","❓"),
      rewrite("book","Rewrite with a contraction: Where is the book?","Where’s the book?","📖")
    ],"he is → he’s · it is → it’s · let us → let’s · there is → there’s. The apostrophe (’) stands for the missing letter i in is. Where is the book? → Where’s the book?"),
    la("Contractions · Notebook (19/10)","Two words → one word.",[
      select("donot","do not",["don’t","can’t","who’s","that’s"],"don’t","🚫"),
      select("cannot","can not",["don’t","can’t","who’s","that’s"],"can’t","🙅"),
      select("whois","who is",["don’t","can’t","who’s","that’s"],"who’s","🙋"),
      select("thatis","that is",["don’t","can’t","who’s","that’s"],"that’s","👉")
    ],"do not → don’t · can not → can’t · who is → who’s · that is → that’s (Notebook 19/10/2026)"),
    la("Contractions · Game (20/10)","Choose the correct contraction.",[
      choice("im","I am →",["I’m","I’am"],"I’m","🙋"),
      choice("lets","let us →",["let’s","le’ts"],"let’s","🎲"),
      choice("were","we are →",["we’re","w’ere"],"we’re","👫"),
      choice("didnt","did not →",["didn’t","did’nt"],"didn’t","🚫")
    ],"I am → I’m · let us → let’s · we are → we’re · did not → didn’t. The apostrophe goes where the letters are taken out."),
    la("Grammar · Fix the draft and identify plurals (21/10)","Singular and plural nouns.",[
      choice("draft","Which sentence is correct?",["The trucks are stuck in mud.","The truck are stuck in mud.","The trucks is stuck in mud."],"The trucks are stuck in mud.","🚚"),
      choice("boxes","There are ___ in the trucks.",["boxes","box","boxs"],"boxes","📦"),
      select("cats","The cats ate the chicken. → cats",["singular noun","plural noun"],"plural noun","🐱"),
      select("chicken","The cats ate the chicken. → chicken",["singular noun","plural noun"],"singular noun","🍗")
    ],"The trucks are stuck in mud. There are boxes in the trucks. (Practice Book 109) · cats = plural, chicken = singular."),
    la("Singular and Plural · Choose the correct sentence","Which sentence uses singular and plural nouns correctly?",[
      choice("c1","🐱🐱🐱",["I see three cats.","I see three cat.","I see three cates."],"I see three cats.","🐱"),
      choice("c2","📦📦",["There are two boxes on the bed.","There are two boxs on the bed.","There are two box on the bed."],"There are two boxes on the bed.","📦"),
      choice("c3","🚌",["The bus is at the stop.","The buses is at the stop.","The buss is at the stop."],"The bus is at the stop.","🚌"),
      choice("c4","🍽️🍽️🍽️",["Mom washes the dishes.","Mom washes the dishs.","Mom washes the dish."],"Mom washes the dishes.","🍽️"),
      choice("c5","🐻🐻",["The cubs fix the hut.","The cub fix the hut.","The cubes fix the hut."],"The cubs fix the hut.","🐻"),
      choice("c6","🦊🦊🦊🦊",["Four foxes run in the grass.","Four foxs run in the grass.","Four fox run in the grass."],"Four foxes run in the grass.","🦊")
    ],"three cats (add s) · two boxes (x → es) · the bus (one bus → singular) · dishes (sh → es) · the cubs (add s) · four foxes (x → es)."),
    la("Singular and Plural · Choose the right word","Choose the noun that makes the sentence correct.",[
      choice("w1","I have one red ___.",["ball","balls","balles"],"ball","⚽"),
      choice("w2","She has two blue ___.",["pens","pen","penes"],"pens","🖊️"),
      choice("w3","We eat our ___ at school.",["lunches","lunchs","lunch’s"],"lunches","🍱"),
      choice("w4","I brush my teeth with my ___. (one)",["brush","brushes","brushs"],"brush","🪥"),
      choice("w5","There are many ___ in the sink.",["glasses","glasss","glass"],"glasses","🥛"),
      choice("w6","Lin will hang the ___ up. (more than one)",["dresses","dresss","dress"],"dresses","👗"),
      choice("w7","The ___ fly to the tree.",["birds","bird","birdes"],"birds","🐦"),
      choice("w8","Three ___ live in the hut.",["pigs","pig","piges"],"pigs","🐷")
    ],"one ball · two pens · lunches (ch → es) · one brush · glasses (ss → es) · dresses (ss → es) · birds · three pigs."),
    la("Singular and Plural · Add s or es?","If a noun ends in s, ss, sh, ch, x, or z, add es. Most other nouns add s.",[
      choice("e1","bench → two ___",["benches","benchs","bench"],"benches","🪑"),
      choice("e2","hat → two ___",["hats","hates","hat"],"hats","🎩"),
      choice("e3","bush → many ___",["bushes","bushs","bush"],"bushes","🌳"),
      choice("e4","kiss → three ___",["kisses","kisss","kiss"],"kisses","💋"),
      choice("e5","bug → five ___",["bugs","buges","bug"],"bugs","🐞"),
      choice("e6","fox → two ___",["foxes","foxs","fox"],"foxes","🦊"),
      choice("e7","peach → four ___",["peaches","peachs","peach"],"peaches","🍑"),
      choice("e8","rug → two ___",["rugs","ruges","rug"],"rugs","🟫")
    ],"es: benches (ch), bushes (sh), kisses (ss), foxes (x), peaches (ch) · s: hats, bugs, rugs."),
    la("Singular and Plural · Why?","Choose the reason.",[
      choice("r1","Why do we write boxes, not boxs?",["box ends in x, so we add es.","box is singular.","We always add es."],"box ends in x, so we add es.","📦"),
      choice("r2","Why do we write dogs, not doges?",["dog does not end in s, ss, sh, ch, x, or z, so we add s.","dog ends in sh.","dog is a place."],"dog does not end in s, ss, sh, ch, x, or z, so we add s.","🐶"),
      choice("r3","“The truck are stuck in mud.” What is wrong?",["truck should be trucks, because are means more than one.","mud should be muds.","are should be ares."],"truck should be trucks, because are means more than one.","🚚"),
      choice("r4","Which noun is singular?",["the hut","the cubs","the dishes"],"the hut","🛖"),
      choice("r5","Which noun is plural?",["the buses","the bus","the fox"],"the buses","🚌")
    ],"x, s, ss, sh, ch, z → add es (boxes, buses). Other nouns → add s (dogs). are / many / two… → plural noun: The trucks are stuck in mud. Singular = one (the hut); plural = more than one (the buses)."),
    la("Punctuation · Fix the sentence (21/10)","Choose the sentence that is written correctly.",[
      choice("oh","oh no",["Oh no!","oh no!","Oh no"],"Oh no!","😮"),
      choice("team","there are 3 team in my class.",["There are 3 teams in my class.","there are 3 teams in my class.","There are 3 team in my class."],"There are 3 teams in my class.","👥"),
      choice("list","I need bread milk oranges and eggs.",["I need bread, milk, oranges, and eggs.","I need bread milk, oranges, and eggs.","I need, bread, milk, oranges and eggs."],"I need bread, milk, oranges, and eggs.","🛒")
    ],"Oh no! · There are 3 teams in my class. · I need bread, milk, oranges, and eggs. A sentence begins with a capital letter and ends with a punctuation mark."),
    // ───── Essential Questions and Vocabulary ─────
    la("Essential Questions","Think about the stories. Then choose the Essential Question.",[
      choice("w1","In Week 1 we read “Good Job, Ben!” (a bus driver, a baker, a vet), “The Red Hat” (Jen is a firefighter) and “Firefighters at Work”. So what is the Essential Question of Week 1?",["What jobs need to be done in a community?","What buildings do you know? What are they made of?","How do plants grow?","What are the functions of different animal body parts?"],"What jobs need to be done in a community?","👷"),
      choice("w2","In Week 2 we read “Cubs in a Hut” (a hut of mud, sticks, and grass), “The 3 Little Dassies” (houses of grass, sticks, and stones) and “The Pigs, the Wolf, and the Mud” (a hut made of mud). So what is the Essential Question of Week 2?",["What buildings do you know? What are they made of?","What jobs need to be done in a community?","How do plants grow?","What are the functions of different animal body parts?"],"What buildings do you know? What are they made of?","🏠")
    ],"Week 1 stories are about people and their jobs → What jobs need to be done in a community? · Week 2 stories are about huts and houses and what they are made of → What buildings do you know? What are they made of?"),
    la("Oral Vocabulary · Week 1","Choose the meaning of each word.",[
      select("occupation","occupation",VOC,VOC[0],"👷"),
      select("equipment","equipment",VOC,VOC[1],"🎒"),
      select("fortunately","fortunately",VOC,VOC[2],"🍀"),
      select("astonishing","astonishing",VOC,VOC[3],"🤩"),
      select("community","community",VOC,VOC[4],"🏘️")
    ],"occupation – The job that somebody does. · equipment – The things that you need to do something. · fortunately – luckily · astonishing – surprising or amazing · community – The place where we live and all the people that live there. (07/10)"),
    la("Vocabulary · Week 2","Choose the answer.",[
      choice("shelter","A shelter is a building that ___.",["protects you or keeps you safe","sells bread","has no roof"],"protects you or keeps you safe","🏠"),
      choice("materials","Materials are ___.",["the things used to make something else","people in a community","a kind of story"],"the things used to make something else","🧱"),
      multi("which","Which are materials? Choose 4.",["wood","brick","glass","stone","school","hospital"],["wood","brick","glass","stone"],"🪵"),
      choice("grabs","grabs means ___.",["picks up quickly","puts down slowly","looks at"],"picks up quickly","✊"),
      choice("mess","mess means ___.",["dirty place","clean room","big house"],"dirty place","🧹")
    ],"Define: A shelter is a building that protects you or keeps you safe. Materials are the things used to make something else: metal, stone, glass, wood, brick, plastic. grabs: picks up quickly (06/10). mess: dirty place (15/10)."),
    la("Oral Vocabulary · Week 2 (16/10)","Match each word with its meaning.",VOC2W.map((word,i)=>select(word,word,VOC2,VOC2[i],["🏠","🧱","🗼","😡","🙅"][i])),
      "shelter – A building that keeps you safe. · materials – The things we use to build and make. · collapsed – If something has fallen down, it has collapsed. · furious – When someone is really angry. · refused – When you say no to something. (16/10)"),
    la("Vocabulary · Shades of meaning","Some words mean almost the same, but one is stronger.",[
      choice("furious","furious means ___.",["really angry","a little sad","happy"],"really angry","😡"),
      choice("strong","Which word is STRONGER than angry?",["furious","glad","calm"],"furious","🌋")
    ],"furious – When someone is really angry. It is stronger than angry. (Unit 2 Week 2 Vocabulary: shades of meaning)"),
    la("Oral Vocabulary · Let’s Discuss (20/10)","Choose the word that fits.",[
      bank("hot","What would be a good ___ in a very hot place?",["shelter","materials","collapsed","furious","refuse"],"shelter","🏜️"),
      bank("house","What ___ could you use to make a house?",["shelter","materials","collapsed","furious","refuse"],"materials","🧱"),
      bank("fall","What would you do if your shelter ___?",["shelter","materials","collapsed","furious","refuse"],"collapsed","🏚️"),
      bank("angry","Would you be ___ if your shelter collapsed?",["shelter","materials","collapsed","furious","refuse"],"furious","😡"),
      bank("mud","Would you ___ to live in a house made of mud?",["shelter","materials","collapsed","furious","refuse"],"refuse","🙅")
    ],"shelter · materials · collapsed · furious · refuse (Let’s Discuss, 20/10)",{wordBank:["shelter","materials","collapsed","furious","refuse"]}),
    // ───── Genres and Stories ─────
    la("Genres","Fantasy, realistic fiction, or nonfiction?",[
      choice("fantasy","Made-up stories with characters, settings, and events that could not exist in real life.",GENRES,"Fantasy","🦄"),
      choice("realistic","A made-up story with characters that do things that could happen in real life.",GENRES,"Realistic fiction","🏙️"),
      choice("nonfiction","Tells about real people and real things.",GENRES,"Nonfiction","📰")
    ],"Fantasy: made-up, could not exist in real life (it can also have a problem and solution). Realistic fiction: made-up, could happen in real life. Nonfiction: tells about real people and real things."),
    la("Genres · Our stories","What is the genre of each story?",[
      select("millie","Millie Waits for the Mail",GENRES,"Fantasy","🐄"),
      select("ben","Good Job, Ben!",GENRES,"Realistic fiction","🚌"),
      select("redhat","The Red Hat",GENRES,"Realistic fiction","⛑️"),
      select("fire","Firefighters at Work",GENRES,"Nonfiction","🚒"),
      select("cubs","Cubs in a Hut",GENRES,"Fantasy","🐻"),
      select("pigs","The Pigs, the Wolf, and the Mud",GENRES,"Fantasy","🐷")
    ],"Fantasy: Millie Waits for the Mail, Cubs in a Hut, The Pigs, the Wolf, and the Mud · Realistic fiction: Good Job, Ben!, The Red Hat · Nonfiction: Firefighters at Work"),
    la("Story elements","Characters, setting, and events.",[
      choice("characters","Characters are ___.",["the people or animals in a story","where the story takes place","what happen in the story"],"the people or animals in a story","🧑"),
      choice("setting","The setting is ___.",["where the story takes place","the people in a story","the end of the story"],"where the story takes place","🌳"),
      choice("events","The events are ___.",["what happen in the story","the people in a story","the title of the story"],"what happen in the story","🎬")
    ],"Characters are the people or animals in a story. The setting is where the story takes place. The events are what happen in the story."),
    la("Millie Waits for the Mail","Big Book · Fantasy.",[
      choice("who","Who is Millie?",["a cow","a dog","a mail carrier"],"a cow","🐄"),
      choice("why","Why does Millie wait for the mail carrier?",["so she can jump out and scare him","so she can get a letter","so she can eat lunch"],"so she can jump out and scare him","😱"),
      choice("end","At the end, what does Millie love to do?",["deliver the mail","scare the farmer","sleep all day"],"deliver the mail","📬")
    ],"Millie the cow waits for the mail carrier every day so she can jump out and scare him. At the end, Millie helps deliver the mail."),
    la("Good Job, Ben!","Shared Read · Realistic fiction.",[
      choice("chars","Who are the characters?",["Ben and Ben's mom","Jen and Jim","Gus, Russ, and Bud"],"Ben and Ben's mom","👩‍👦"),
      choice("men","What are the six men doing?",["They use a drill and fill cracks.","They sell bread.","They help a dog get well."],"They use a drill and fill cracks.","🚧"),
      choice("vet","Who helped Jet get well?",["the vet","the bus driver","Miss Glenn"],"the vet","🐶"),
      choice("books","What did Ben read?",["books on jobs","books on dogs","books on space"],"books on jobs","📚")
    ],"Ben and Mom head to town. Six men use a drill and fill cracks. The vet helped Jet get well quick. Ben read books on jobs. Good job, Ben!"),
    la("The Red Hat","Anchor Text · Realistic fiction.",[
      choice("job","What is Jen's job?",["a firefighter","a baker","a vet"],"a firefighter","🧑‍🚒"),
      choice("first","The bell wakes Jen up. What does she do next?",["She grabs the red hat.","She eats bread.","She goes to sleep."],"She grabs the red hat.","⛑️"),
      choice("rex","How does Jen help Jim?",["Jen gets Rex from the tree.","Jen gives Jim a hat.","Jen drives Jim to school."],"Jen gets Rex from the tree.","🐱")
    ],"Jen is a firefighter. The bell wakes Jen up and she grabs the red hat. She climbs high up the ladder and gets Rex (the cat) down from the tree. Jim is glad."),
    la("Firefighters at Work","Paired Selection · Nonfiction.",[
      choice("first","What happens FIRST at the firehouse?",["A bell rings.","They spray water.","They jump in the fire truck."],"A bell rings.","🔔"),
      choice("hoses","What do firefighters use to spray water?",["hoses","buckets","cups"],"hoses","🧯"),
      choice("siren","What tells cars to move away?",["the loud siren and the flashing red light","the bell at the firehouse","the special clothes"],"the loud siren and the flashing red light","🚨")
    ],"A bell rings at the firehouse. Firefighters slide down a pole and put on special clothes fast. They use hoses to spray water. The loud siren and the flashing red light tell cars to move away."),
    la("The 3 Little Dassies","Big Book.",[
      select("mimbi","Mimbi builds a house of…",["grass","sticks","stones"],"grass","🌾"),
      select("pimbi","Pimbi builds a house of…",["grass","sticks","stones"],"sticks","🪵"),
      select("timbi","Timbi builds a house of…",["grass","sticks","stones"],"stones","🪨"),
      choice("strong","Which house is the strongest?",["the stone house","the grass house","the stick house"],"the stone house","🏠")
    ],"Mimbi: grass · Pimbi: sticks · Timbi: stones. The stone house is the strongest — the eagle cannot blow it down."),
    la("Cubs in a Hut","Shared Read · Fantasy.",[
      choice("who","Who are the characters?",["Gus, Russ, and Bud","Mimbi, Pimbi, and Timbi","Ben and Mom"],"Gus, Russ, and Bud","🐻"),
      multi("made","What did the cubs use to make the hut? Choose 3.",["mud","sticks","grass","bricks"],["mud","sticks","grass"],"🛖"),
      select("p1","Problem: The cubs need a hut to live in. Solution:",["They get materials.","They fix the roof."],"They get materials.","🧩"),
      select("p2","Problem: The cubs get wet. Solution:",["They get materials.","They fix the roof."],"They fix the roof.","💧")
    ],"Gus, Russ, and Bud make a hut with mud, sticks, and grass. Problem 1: they need a hut → they get materials. Problem 2: they get wet → they fix the roof."),
    la("The Pigs, the Wolf, and the Mud","Anchor Text · Fantasy.",[
      choice("hut","What is the pigs’ hut made of?",["mud","bricks","glass"],"mud","🐷"),
      choice("blow","Why can’t the wolf blow down the pigs’ hut?",["He can’t huff and puff in mud.","The hut is made of bricks.","He is too small."],"He can’t huff and puff in mud.","💨"),
      choice("eat","Why doesn’t the wolf eat the pigs?",["Because the pigs are a mess.","Because he is not hungry.","Because the pigs run away."],"Because the pigs are a mess.","🍽️"),
      choice("end","At the end, the pigs decide ___.",["to build a hut out of mud","to build a hut out of bricks","to move to the city"],"to build a hut out of mud","🛖")
    ],"He can’t huff and puff in mud. The wolf kicks the hut and it falls in, but he does not like the mud and leaves. Because the pigs are a mess, he does not eat them. The pigs decide to build a hut out of mud."),
    la("The Pigs, the Wolf, and the Mud · Reread (16/10)","Reading and Writing Companion pages 67–69.",[
      choice("feel","How do the pigs feel about their home?",["They think mud is fun.","They are sad.","They want to move."],"They think mud is fun.","🐷"),
      choice("yuck","What does the wolf say about the mud?",["“Yuck!”","“Yum!”","“Hello!”"],"“Yuck!”","🤢"),
      select("likes","Who likes the plan for a new mud hut?",["The pigs","The wolf"],"The pigs","🛖"),
      choice("idea","Why is a new mud hut a good idea?",["The wolf doesn’t like mud.","Mud is very strong.","The wolf loves mud."],"The wolf doesn’t like mud.","💡")
    ],"The pigs think mud is fun. The wolf says “yuck!” — he doesn’t like mud. The pigs like the plan; the wolf does not. A new mud hut is a good idea because the wolf doesn’t like mud."),
    la("Homes Around the World","Compare Text · Nonfiction (19/10).",[
      choice("main","People build their homes to ___.",["fit the place they live","look the same","be very tall"],"fit the place they live","🌍"),
      select("stilts","home on stilts",["wood","ice","mud"],"wood","🛖"),
      select("igloo","igloo",["wood","ice","mud"],"ice","🧊"),
      choice("dry","Why is the wood home good for a wet place?",["The stilts help keep this home dry.","It is built into a rock.","It is made of ice."],"The stilts help keep this home dry.","💧"),
      choice("shelter","Igloos are good shelter from the ___.",["cold","rain","sun"],"cold","🥶"),
      choice("caption","Use the ___ to understand what you see in the photos.",["captions","page numbers","title"],"captions","🏷️")
    ],"Homes Around the World (nonfiction): People build their homes to fit the place they live. The home on stilts is made of wood; the stilts help keep it dry. An igloo is made of ice; it is good shelter from the cold. Use the captions to understand the photos."),
    la("Text Feature · Captions (20/10)","Captions can tell us more information about a picture.",[
      choice("what","What do captions tell us?",["more information about a picture","the name of the author","the page number"],"more information about a picture","🏷️"),
      choice("where","We find captions in ___ texts.",["non-fiction","fantasy","song"],"non-fiction","📰"),
      choice("sky","Tall buildings are called ___.",["skyscrapers","parks","huts"],"skyscrapers","🏙️"),
      choice("title","Why is “Homes Around the World” a good title?",["Because we read about homes in many places.","Because it is about one house.","Because it is about a wolf."],"Because we read about homes in many places.","🌍")
    ],"Captions can tell us more information about a picture. We find them in non-fiction texts. Tall buildings are called skyscrapers. “Homes Around the World” is a good title because we read about homes in many places."),
    la("Research and Inquiry · Choose a Building (21/10)","Reading and Writing Companion, pages 74 and 75.",[
      choice("s1","What do you do first?",["Pick a type of building to write about.","Draw your building.","Present your work."],"Pick a type of building to write about.","🏛️"),
      choice("label","When you draw your building, you use ___ to give information.",["labels","stickers","colors only"],"labels","🏷️"),
      choice("paris","Where is the Eiffel Tower?",["It’s in Paris.","It’s in Hanoi.","It’s in London."],"It’s in Paris.","🗼")
    ],"Pick a building → write your questions → find the information → write what you learned → draw it with labels → present. Eiffel Tower: It’s in Paris. It is 330 meters."),
    // ───── Writing ─────
    la("Writing","Writing traits and skills.",[
      choice("idea","Writing Trait: A sentence tells about ___.",["one idea","many ideas","no ideas"],"one idea","💡"),
      choice("lines","Writing Skill: When you write, make sure you ___.",["stay on the lines","write very small","skip the lines"],"stay on the lines","📏"),
      choice("detail","Descriptive details tell more about your ideas. Which is a descriptive detail? “The last cub uses wood to fix the leaky roof!”",["leaky","uses","the"],"leaky","✨")
    ],"A sentence tells about one idea. When you write, make sure you stay on the lines. Descriptive details tell more about your ideas: “leaky” roof."),
  ];

  // Bài kiểm tra mẫu (≤ 30 ý → 1 Part, giữ đúng thứ tự đề thật).
  registerQuiz({
    id:"la-u2-w1-w2-test",
    uploadDate:"weekly-la-u2-w1-w2",uploadLabel:"Tổng hợp kiến thức tuần (W1&2)",
    subjectKey:"language",
    title:"LA_U2_W1+2 · Practice Test",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Test format · Reading 1–6 · High-frequency words 7–10 · Phonemic awareness 11–13 · Phonics 14–17 · Grammar 18–20",scoreByField:true,
      groups:groupsOf([
        ["Reading Comprehension","Test questions 1–6 · read the story, then answer",1],
        ["High-Frequency Words","Test questions 7–10 · choose the word that makes the sentence make sense",1],
        ["Phonemic Awareness","Test questions 11–13 · blend, segment, find the same sound, rhyme",1],
        ["Phonics","Test questions 14–17 · short e, short u, spelling words",1],
        ["Grammar and Structural Analysis","Test questions 18–20 · nouns, plural, contractions, commas, -ed",1]
      ]),
      questions:TEST,
      readings:[
        {id:"testStory",title:"Gus and Jen Fix the Hut",byline:"Test-style reading · a new story with words from Week 1 and Week 2",mode:"reference",text:"Gus and Jen live with Mom and Dad in a red hut.\n\nOne night, the wind huffed and puffed. The hut fell down! Gus was very sad.\n\n“We could make a new hut,” said Jen. “I will help,” said Mom. Then Dad came to help, too.\n\nThey got mud, sticks, and grass. They set the sticks in the mud. They put the grass on top.\n\nAt the end, the new hut was snug and dry. “It is fun to live here again!” said Gus."},
        {id:"notes-la-u2w12",title:"Remember — Unit 2 Week 1 + Week 2",byline:"Language Arts · Class Diary 01/10–21/10/2026",mode:"notes",text:[
          "📅 Class Diary: 21/10/2026",
          "(21/10) The trucks are stuck in mud. There are boxes in the trucks.",
          "(21/10) Short u: The bus is coming up. The tub is so much fun. The cup has gum and bugs.",
          "(21/10) Short u or short a: cup – cap · hut – hat · bug – bag",
          "(21/10) Singular: chicken · Plural: cats, boys, dogs, bones",
          "(21/10) A sentence begins with a capital letter and ends with a punctuation mark: Oh no!",
          "(21/10) Research a building: pick a building → questions → find information → write → draw with labels → present.",
          "(20/10) Word families: -ug (bug, rug) · -un (fun, run, lunch, skunk) · -ut (cut, nut)",
          "(20/10) Captions can tell us more information about a picture. We find them in non-fiction texts.",
          "(20/10) “Homes Around the World” is a good title because we read about homes in many places.",
          "(20/10) Oral Vocabulary: shelter · materials · collapsed · furious · refuse",
          "(20/10) Contractions: I’m · let’s · we’re · don’t · didn’t · isn’t · doesn’t",
          "(19/10) Homes Around the World (Nonfiction): People build their homes to fit the place they live.",
          "(19/10) The stilts help keep this home dry. An igloo is made of ice; igloos are good shelter from the cold.",
          "(19/10) Use the captions to understand what you see in the photos.",
          "(19/10) If a noun ends in -x, -s, or -ss, add -es to make it plural: one box → three boxes.",
          "(19/10) Contractions: don’t · can’t · who’s · that’s · how’s · there’s",
          "(19/10) Rhyming words end with the same sounds: well – bell · bug – rug · car – star",
          "(16/10) shelter: A building that keeps you safe.",
          "(16/10) collapsed: If something has fallen down, it has collapsed.",
          "(16/10) furious: When someone is really angry.",
          "(16/10) refused: When you say no to something.",
          "(16/10) ph makes the /f/ sound: photo · phone · dolphin · elephant",
          "(16/10) The pigs think mud is fun. The wolf doesn’t like mud.",
          "(15/10) A singular noun names one person, one place, or one thing.",
          "(15/10) A plural noun names more than one person, place, or thing.",
          "(15/10) If a word ends in s, ss, sh, ch, x, z, add -es to the end: bus → buses, dish → dishes.",
          "(15/10) mess: dirty place",
          "(14/10) A contraction is when you put two words together to make one word: he is → he’s.",
          "(14/10) The apostrophe (’) stands for the missing letter i in is.",
          "(13/10) Genre: Fantasy. It can also have a problem and solution.",
          "(13/10) Bug and rug rhyme because they both end with the same sounds: /ug/.",
          "(13/10) High-frequency words: could · live · one · then · three",
          "(13/10) Writing Trait: Descriptive details tell more about your ideas.",
          "(12/10) Essential Question: What buildings do you know? What are they made of?",
          "(12/10) Define: A shelter is a building that protects you or keeps you safe.",
          "(12/10) Define: Materials are the things used to make something else.",
          "(12/10) The letter u can make the short u sound you hear in rug.",
          "(08/10) Nonfiction tells about real people and real things.",
          "(08/10) -ed can sound like /t/ (kissed), /d/ (loved) or /id/ (painted).",
          "(07/10) A noun is a word that names a person, a place, a thing, an animal.",
          "(07/10) Oral Vocabulary: occupation · equipment · fortunately · astonishing · community",
          "(06/10) grabs: picks up quickly.",
          "(05/10) In a list with three or more nouns, a comma is used after all but the last noun.",
          "(05/10) Add the ending -ed to an action word to tell about something that already happened: help → helped.",
          "(02/10) Realistic fiction: a made-up story. It has characters that do things that could happen in real life.",
          "(02/10) Characters are the people or animals in a story.",
          "(02/10) The setting is where the story takes place.",
          "(02/10) The events are what happen in the story.",
          "(02/10) Writing Trait: A sentence tells about one idea.",
          "(01/10) Essential Question: What jobs need to be done in a community?",
          "(01/10) Fantasy: Fantasies are made-up stories with characters, settings, and events that could not exist in real life.",
          "(01/10) High-frequency words: again · help · new · there · use",
          "(01/10) The letters e or ea can make the short e sound: leg, bread."
        ].join("\n")}
      ]}
  });

  // ───── Gộp các bài LA theo ngày của Unit 2 Week 1 + Week 2 vào bài Review (yêu cầu 22/10/2026) ─────
  // Câu nào trong bài ngày CHƯA có trong Tổng hợp (so theo nội dung câu hỏi + đáp án) thì được thêm vào đúng nhóm;
  // bài đọc mà câu đó dùng được mang theo; mọi link Bonus được gom về một thẻ Bonus. Sau đó các bài LA theo ngày
  // bị gỡ khỏi Danh sách — chỉ còn "Tổng hợp kiến thức tuần (W1&2)". File bài ngày vẫn giữ làm nguồn dữ liệu.
  const DAILY_LA=["class-diary-2026-10-07-language-reading","class-diary-2026-10-07-language-words","class-diary-2026-10-07-language-grammar",
    "class-diary-2026-10-08-language","class-diary-2026-10-12-language-week2","class-diary-2026-10-12-language-week1","class-diary-2026-10-13-language",
    "class-diary-2026-10-14-language","class-diary-2026-10-15-language","class-diary-2026-10-16-language","class-diary-2026-10-19-language",
    "class-diary-2026-10-20-language","class-diary-2026-10-21-language"];
  const norm=v=>String(Array.isArray(v)?v.join("|"):v??"").toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9'|/+=-]+/g," ").trim();
  const fieldKeys=q=>(q.type==="compound"?q.fields:[q]).map(f=>`${norm(f.label||q.text)}#${norm(f.answer)}`);
  const BUCKET=[
    ["High-Frequency Words",/high-frequency|\bhfw\b/i],
    ["Phonemic Awareness",/phonemic|phonological|rhyme|odd one out|beginning sound|middle sound|final sound|sounds in words|same middle/i],
    ["Grammar and Structural Analysis",/grammar|noun|comma|-ed|contraction|plural|singular|punctuation|word order|sentence type|mechanic|fix the/i],
    ["Phonics",/phonics|short [aeiou]|spelling|word famil|\bph\b|sort the words|homework check/i],
    ["Writing",/writing|descriptive/i],
    ["Essential Questions and Vocabulary",/vocabulary|essential question|build knowledge|define|shelter|materials/i]];
  const bucketOf=q=>(BUCKET.find(([,re])=>re.test(q.section||""))||["Genres and Stories"])[0];
  function mergeDailyLA(entry){
    const subj=entry.subject,groups=subj.groups,questions=subj.questions;
    const buckets=new Map(groups.map(g=>[g.title.replace(/^\d+\.\s*/,""),{subtitle:g.subtitle,items:questions.slice(g.start,g.end+1)}]));
    const seen=new Set(questions.flatMap(fieldKeys));
    const readings=[...subj.readings],links=new Map(),added=[];
    for(const id of DAILY_LA){
      const src=(window.quizSources||{})[id];if(!src) continue;
      const day=(src.uploadDate||"").slice(5).split("-").reverse().join("/");
      for(const q of src.subject.questions){
        const keys=fieldKeys(q);if(!keys.some(k=>!seen.has(k))) continue;
        keys.forEach(k=>seen.add(k));
        const copy={...q,section:/\(\d\d\/\d\d\)/.test(q.section)?q.section:`${q.section} (${day})`};
        if(q.readingId){
          const rid=`${id}--${q.readingId}`;copy.readingId=rid;
          if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}
        }
        const b=bucketOf(q);if(!buckets.has(b)) buckets.set(b,{subtitle:"",items:[]});
        buckets.get(b).items.push(copy);added.push(copy);
      }
      (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
      window.unregisterQuiz(id);
    }
    if(links.size) readings.push({id:"bonus-la-u2w12",title:"Bonus · Video & game",byline:"All links from the Class Diaries of Unit 2 Week 1 and Week 2",mode:"bonus",links:[...links.values()],text:""});
    let start=0;const newGroups=[],newQ=[];
    for(const [title,b] of buckets){if(!b.items.length) continue;newGroups.push({title:`${newGroups.length+1}. ${title}`,subtitle:b.subtitle,start,end:start+b.items.length-1});start+=b.items.length;newQ.push(...b.items)}
    window.LA_U2W12_MERGED=added.length;
    return {...entry,subject:{...subj,groups:newGroups,questions:newQ,readings}};
  }

  registerQuiz(mergeDailyLA({
    id:"la-u2-w1-w2-summary",
    uploadDate:"weekly-la-u2-w1-w2",uploadLabel:"Tổng hợp kiến thức tuần (W1&2)",
    subjectKey:"language",
    title:"LA_U2_W1+2 · Review (more practice)",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"More practice · Unit 2 Week 1 + Week 2 · Class Diary 01/10–21/10/2026",scoreByField:true,
      groups:groupsOf([
        ["High-Frequency Words","again · help · new · there · use · could · live · one · then · three",3],
        ["Phonemic Awareness","beginning, middle, final sounds · rhyme · rhyming pictures",2],
        ["Phonics","short e (e, ea) · short u · ph · word families -ug -un -ut · short u vs short a",5],
        ["Grammar and Structural Analysis","nouns · singular and plural (s / es) · commas · -ed · contractions with ’s · punctuation",13],
        ["Essential Questions and Vocabulary","jobs in a community · buildings and materials · oral vocabulary · shades of meaning",6],
        ["Genres and Stories","fantasy · realistic fiction · nonfiction · the stories of Week 1 and Week 2 · Homes Around the World · captions · research a building",14],
        ["Writing","writing traits and skills",1]
      ]),
      questions:Q,
      readings:[
        {id:"notes-la-u2w12",title:"Remember — Unit 2 Week 1 + Week 2",byline:"Language Arts · Class Diary 01/10–21/10/2026",mode:"notes",text:[
          "📅 Class Diary: 21/10/2026",
          "(21/10) The trucks are stuck in mud. There are boxes in the trucks.",
          "(21/10) Short u: The bus is coming up. The tub is so much fun. The cup has gum and bugs.",
          "(21/10) Short u or short a: cup – cap · hut – hat · bug – bag",
          "(21/10) Singular: chicken · Plural: cats, boys, dogs, bones",
          "(21/10) A sentence begins with a capital letter and ends with a punctuation mark: Oh no!",
          "(21/10) Research a building: pick a building → questions → find information → write → draw with labels → present.",
          "(20/10) Word families: -ug (bug, rug) · -un (fun, run, lunch, skunk) · -ut (cut, nut)",
          "(20/10) Captions can tell us more information about a picture. We find them in non-fiction texts.",
          "(20/10) “Homes Around the World” is a good title because we read about homes in many places.",
          "(20/10) Oral Vocabulary: shelter · materials · collapsed · furious · refuse",
          "(20/10) Contractions: I’m · let’s · we’re · don’t · didn’t · isn’t · doesn’t",
          "(19/10) Homes Around the World (Nonfiction): People build their homes to fit the place they live.",
          "(19/10) The stilts help keep this home dry. An igloo is made of ice; igloos are good shelter from the cold.",
          "(19/10) Use the captions to understand what you see in the photos.",
          "(19/10) If a noun ends in -x, -s, or -ss, add -es to make it plural: one box → three boxes.",
          "(19/10) Contractions: don’t · can’t · who’s · that’s · how’s · there’s",
          "(19/10) Rhyming words end with the same sounds: well – bell · bug – rug · car – star",
          "(16/10) shelter: A building that keeps you safe.",
          "(16/10) collapsed: If something has fallen down, it has collapsed.",
          "(16/10) furious: When someone is really angry.",
          "(16/10) refused: When you say no to something.",
          "(16/10) ph makes the /f/ sound: photo · phone · dolphin · elephant",
          "(16/10) The pigs think mud is fun. The wolf doesn’t like mud.",
          "(15/10) A singular noun names one person, one place, or one thing.",
          "(15/10) A plural noun names more than one person, place, or thing.",
          "(15/10) If a word ends in s, ss, sh, ch, x, z, add -es to the end: bus → buses, dish → dishes.",
          "(15/10) mess: dirty place",
          "(14/10) A contraction is when you put two words together to make one word: he is → he’s.",
          "(14/10) The apostrophe (’) stands for the missing letter i in is.",
          "(13/10) Genre: Fantasy. It can also have a problem and solution.",
          "(13/10) Bug and rug rhyme because they both end with the same sounds: /ug/.",
          "(13/10) High-frequency words: could · live · one · then · three",
          "(13/10) Writing Trait: Descriptive details tell more about your ideas.",
          "(12/10) Essential Question: What buildings do you know? What are they made of?",
          "(12/10) Define: A shelter is a building that protects you or keeps you safe.",
          "(12/10) Define: Materials are the things used to make something else.",
          "(12/10) The letter u can make the short u sound you hear in rug.",
          "(08/10) Nonfiction tells about real people and real things.",
          "(08/10) -ed can sound like /t/ (kissed), /d/ (loved) or /id/ (painted).",
          "(07/10) A noun is a word that names a person, a place, a thing, an animal.",
          "(07/10) Oral Vocabulary: occupation · equipment · fortunately · astonishing · community",
          "(06/10) grabs: picks up quickly.",
          "(05/10) In a list with three or more nouns, a comma is used after all but the last noun.",
          "(05/10) Add the ending -ed to an action word to tell about something that already happened: help → helped.",
          "(02/10) Realistic fiction: a made-up story. It has characters that do things that could happen in real life.",
          "(02/10) Characters are the people or animals in a story.",
          "(02/10) The setting is where the story takes place.",
          "(02/10) The events are what happen in the story.",
          "(02/10) Writing Trait: A sentence tells about one idea.",
          "(01/10) Essential Question: What jobs need to be done in a community?",
          "(01/10) Fantasy: Fantasies are made-up stories with characters, settings, and events that could not exist in real life.",
          "(01/10) High-frequency words: again · help · new · there · use",
          "(01/10) The letters e or ea can make the short e sound: leg, bread."
        ].join("\n")}
      ]}
  }));
})();
