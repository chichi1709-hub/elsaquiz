// TỔNG HỢP KIẾN THỨC TUẦN — Language Arts Unit 2 Week 1 + Week 2 (Class Diary 01/10 → 16/10/2026).
// Không ghi ngày upload: uploadDate bắt đầu bằng "weekly" → nhóm riêng "Tổng hợp kiến thức tuần" trên đầu Danh sách.
// Mỗi điểm kiến thức của 2 tuần có câu hỏi; nội dung lấy từ các đề ngày (đã đối chiếu diary và link).
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

  const Q=[
    // ───── Essential Questions & Vocabulary ─────
    la("Essential Questions","Unit 2 Week 1 and Week 2.",[
      choice("w1","Week 1 Essential Question:",["What jobs need to be done in a community?","What buildings do you know? What are they made of?","How do plants grow?"],"What jobs need to be done in a community?","👷"),
      choice("w2","Week 2 Essential Question:",["What buildings do you know? What are they made of?","What jobs need to be done in a community?","What are the functions of different animal body parts?"],"What buildings do you know? What are they made of?","🏠")
    ],"Week 1: What jobs need to be done in a community? · Week 2: What buildings do you know? What are they made of?"),
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

    // ───── Genres & Story Elements ─────
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

    // ───── Week 1 Stories ─────
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

    // ───── Week 2 Stories ─────
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

    // ───── Phonics & Word Work ─────
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
    la("Sounds in words","Beginning, middle, and final sounds · rhyme.",[
      choice("bat","What is the beginning sound in bat?",["/b/","/a/","/t/"],"/b/","🦇"),
      choice("set","What is the middle sound in set?",["/e/","/s/","/t/"],"/e/","🎯"),
      choice("wig","What is the final sound in wig?",["/g/","/w/","/i/"],"/g/","💇"),
      choice("rhyme","Bug and rug rhyme because they both end with the same sounds: ___.",["/ug/","/un/","/up/"],"/ug/","🐞")
    ],"bat → /b/ · set → middle sound /e/ · wig → final sound /g/ · Bug and rug rhyme: they both end with /ug/."),
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

    // ───── Grammar & Writing ─────
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
    la("Writing","Writing traits and skills.",[
      choice("idea","Writing Trait: A sentence tells about ___.",["one idea","many ideas","no ideas"],"one idea","💡"),
      choice("lines","Writing Skill: When you write, make sure you ___.",["stay on the lines","write very small","skip the lines"],"stay on the lines","📏"),
      choice("detail","Descriptive details tell more about your ideas. Which is a descriptive detail? “The last cub uses wood to fix the leaky roof!”",["leaky","uses","the"],"leaky","✨")
    ],"A sentence tells about one idea. When you write, make sure you stay on the lines. Descriptive details tell more about your ideas: “leaky” roof.")
  ];

  registerQuiz({
    id:"la-u2-w1-w2-summary",
    uploadDate:"weekly-la-u2-w1-w2",
    subjectKey:"language",
    title:"LA_U2_W1+2 · Unit 2 Week 1 + Week 2",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"Weekly review · Unit 2 Week 1 + Week 2 · Class Diary 01/10–16/10/2026",scoreByField:true,
      groups:groupsOf([
        ["Essential Questions and Vocabulary","Jobs in a community · buildings and materials · shelter, collapsed, furious, refused",4],
        ["Genres and Story Elements","Fantasy · realistic fiction · nonfiction · characters, setting, events",3],
        ["Week 1 Stories","Millie · Good Job, Ben! · The Red Hat · Firefighters at Work",4],
        ["Week 2 Stories","The 3 Little Dassies · Cubs in a Hut · The Pigs, the Wolf, and the Mud",4],
        ["Phonics and Word Work","High-frequency words · short e and u · ph · sounds · -ed · contractions",7],
        ["Grammar and Writing","Nouns · singular and plural · commas · writing",4]
      ]),
      questions:Q,
      readings:[
        {id:"notes-la-u2w12",title:"Remember — Unit 2 Week 1 + Week 2",byline:"Language Arts · Class Diary 01/10–16/10/2026",mode:"notes",text:[
          "📅 Class Diary: 16/10/2026",
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
})();
