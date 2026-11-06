// Quiz 05/11/2026 — Class Diary 05/11/2026 + nội dung các link trong diary.
// Language Arts: Unit 2 Week 4 · Build Knowledge (page 112; Essential Question theo sách: "How do people help out in the community?" —
// diary ghi nhầm EQ của tuần 3 "Where do animals live together?") · Build Vocabulary: Ways to Help (RWC page 113) ·
// Oral Vocabulary: leadership, admire · Phonics: Consonant Digraphs sh, th, -ng (rule + Practice: Lesson 1 Phonics Practice Activity).
// Science: Unit 2 Module 1 Lesson 4 · Read Aloud "The Burrow" (page 57) · Vocabulary behavior/learn/signal ·
// Explain: Animal Behaviors (page 58) · Close Reading "Animal Messages" (pages 60–61) · homework Wordwall "Animal behaviours".
// Math: Review Lessons 32–35 · homework check Workbook 10-8 Patterns in Tables.
// Ảnh: web/assets/2026-11-05/ (tạo bằng web/_reference/tao_anh_2026-11-05.py).
(()=>{
  const IMG=name=>`assets/2026-11-05/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp",M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const free=(id,label,icon)=>({id,label,type:"text-any",icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const la=card(L),sci=card(S),math=card(M);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const bonus=(id,links,day="05/11")=>({id,title:"Bonus · Video & game",byline:`Links from the Class Diary ${day}`,mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── LANGUAGE ARTS · Unit 2 Week 4 ─────────────────────────
  const EQ="How do people help out in the community?";
  const WAYS=["Put out fires","Help sick people","Help us learn","Keep us safe","Grow fruit and vegetables","Build houses","Make food"];
  const LEAD="Leadership is the ability to guide a group of people or the action of leading others.";
  const ADMIRE="When you admire someone, you approve of and like that person.";
  const DG=["sh","th","ng"];
  const SH="The letters sh make the ending sound in fish.",TH="The letters th make the beginning sound in thin.",NG="The letters ng make the ending sound in ring.";
  const WORDS=[["shop","sh","🛒"],["wish","sh","🌠"],["then","th","➡️"],["crash","sh","💥"],["sing","ng","🎤"],["long","ng","📏"],
    ["this","th","👉"],["thump","th","🥁"],["ship","sh","🚢"],["math","th","➕"],["bring","ng","🎒"],["clang","ng","🔔"]];
  const LA_Q=[
    la("Build Background · Build Knowledge (page 112)","Warm-up video: Community Helpers. Look at the picture on page 112 and discuss.",[
      choice("eq","Today we looked at children planting flowers in a community garden. In the video we met community helpers: a hairdresser, a librarian, a bus driver. On page 113 we wrote ways to help: keep us safe, put out fires, help sick people, grow fruit and vegetables… So what is the Essential Question of Week 4?",[EQ,"Where do animals live together?","How do we celebrate special days?"],EQ,"❓"),
      choice("where","Look at the picture on page 112. Where are the children?",["in a garden","in a classroom","at the beach"],"in a garden","🪴"),
      choice("doing","What do the children do?",["The children plant.","The children swim.","The children sleep."],"The children plant.","🌱"),
      choice("see","Who/What do you see? I see ___.",["flowers","fish","snow"],"flowers","🌼"),
      multi("help","How do the kids help out? Choose 3.",["plant flowers","dig in the dirt","work together","pick all the flowers","throw trash"],["plant flowers","dig in the dirt","work together"],"🤝")
    ],`Essential Question: ${EQ} The children are in a garden. I see flowers. The children plant. The kids plant flowers, dig in the dirt, work together.`,{readingId:"knowledge"}),
    la("Build Vocabulary · Ways to Help (Reading and Writing Companion page 113)","Talk with your partner about ways people can help in a community. Write words about how people help out in a community.",[
      multi("ways","Which are ways to help in a community? Choose 4.",["Keep us safe","Put out fires","Help sick people","Build houses","Make a mess","Break the toys"],["Keep us safe","Put out fires","Help sick people","Build houses"],"🏘️"),
      select("fire","A firefighter can help. A firefighter can ___.",WAYS,"Put out fires","🚒"),
      select("doctor","A doctor can help. A doctor can ___.",WAYS,"Help sick people","🩺"),
      select("teacher","A teacher can help. A teacher can ___.",WAYS,"Help us learn","🧑‍🏫"),
      select("police","A police officer can help. A police officer can ___.",WAYS,"Keep us safe","👮"),
      select("farmer","A farmer can help. A farmer can ___.",WAYS,"Grow fruit and vegetables","🧑‍🌾"),
      select("builder","A builder can help. A builder can ___.",WAYS,"Build houses","🏗️"),
      select("cook","A cook can help. A cook can ___.",WAYS,"Make food","🧑‍🍳"),
      free("write","Write words about how people help out in a community. (Example: Plant trees and flowers.)","✏️")
    ],"Ways to Help: Bus driver · community garden · Keep us safe · Plant trees and flowers · Grow fruit and vegetables · Entertain us · Build houses · Put out fires · Help sick people · Help us learn · Make food · Keep us healthy.",{readingId:"ways"}),
    la("Oral Vocabulary · leadership · admire","Oral Vocabulary Routine: Define · Example · Ask.",[
      select("lead","___ is the ability to guide a group of people or the action of leading others.",["Leadership","Admire"],"Leadership","🏆"),
      select("admire","When you ___ someone, you approve of and like that person.",["admire","leadership"],"admire","💖"),
      select("coach","Thanks to Coach Jackson’s ___, the team won the game.",["leadership","admire"],"leadership","⚽"),
      select("amy","Amy ___ her neighbors because they helped clean up the park.",["admires","leadership"],"admires","🧹"),
      free("whom","Ask: Whom do you admire? Write a name and why.","🗣️")
    ],LEAD+" Example: Thanks to Coach Jackson’s leadership, the team won the game. "+ADMIRE+" Example: Amy admires her neighbors because they helped clean up the park.",{readingId:"oral"}),
    la("Phonics · Consonant Digraphs: sh, th, -ng","Two letters make one sound.",[
      fixed("fish","fish: The letters sh make the ___ sound in fish.",["beginning","ending"],"ending","🐟"),
      fixed("thin","thin: The letters th make the ___ sound in thin.",["beginning","ending"],"beginning","🥢"),
      fixed("ring","ring: The letters ng make the ___ sound in ring.",["beginning","ending"],"ending","💍")
    ],[SH,TH,NG].join(" "),{readingId:"digraph"}),
    la("Phonics · Practice: read the words","Read the word. Which digraph do you see: sh, th or ng?",[
      ...WORDS.map(([w,d,icon])=>select(`w-${w}`,w,DG,d,icon)),
      choice("none","Which word does NOT have sh, th or ng?",["hip","ship","math","sing"],"hip","🔍")
    ],WORDS.map(([w,d])=>`${w} (${d})`).join(" · ")+" · hip has no digraph.",{readingId:"digraph"}),
    la("Phonics · Practice: read the sentences","Read each sentence. Find the words with sh, th or ng.",[
      multi("thank","“Thank you for handing that shell to me.” Which 2 words have th? Choose 2.",["Thank","that","shell","handing"],["Thank","that"],"🐚"),
      choice("handing","“Thank you for handing that shell to me.” Which word has ng?",["handing","shell","Thank"],"handing","🤲"),
      multi("beth","“Beth thinks she spots a fish in the pond!” Which 2 words have sh? Choose 2.",["she","fish","Beth","spots"],["she","fish"],"🐠"),
      multi("rushed","“He rushed to the ship to bring his bag.” Which 2 words have sh? Choose 2.",["rushed","ship","bring","bag"],["rushed","ship"],"🚢")
    ],"Thank you for handing that shell to me. (th: Thank, that · ng: handing · sh: shell) · Beth thinks she spots a fish in the pond! (th: Beth, thinks · sh: she, fish) · He rushed to the ship to bring his bag. (sh: rushed, ship · ng: bring)",{readingId:"digraph"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-05-language",
    uploadDate:"2026-11-05",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"05/11/2026 · Unit 2 Week 4 · How do people help out in the community? · Ways to Help (RWC 113) · leadership, admire · Digraphs sh, th, -ng",scoreByField:true,
      groups:groupsOf([["Build Background","Essential Question · picture on page 112",1],["Build Vocabulary","Ways to Help · page 113",1],["Oral Vocabulary","leadership · admire",1],["Phonics","Consonant Digraphs: sh, th, -ng",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0511","Remember — Language Arts",[
          "📅 Class Diary: 05/11/2026",
          "(05/11) Essential Question: "+EQ,
          "(05/11) How do the kids help out? The kids plant flowers, dig in the dirt, work together.",
          "(05/11) Ways to Help: Keep us safe · Put out fires · Help sick people · Help us learn · Make food · Build houses · Grow fruit and vegetables · Plant trees and flowers · Keep us healthy · Entertain us",
          "(05/11) Leadership: the ability to guide a group of people or the action of leading others.",
          "(05/11) Admire: When you admire someone, you approve of and like that person.",
          "(05/11) Consonant Digraphs: sh, th, -ng",
          "(05/11) "+SH,
          "(05/11) "+TH,
          "(05/11) "+NG,
          "(05/11) Homework: Practice Book, page 131."
        ],"Unit 2 Week 4"),
        {id:"knowledge",title:"Build Knowledge · page 112",byline:"Unit 2 · Week 4",mode:"reference",images:[IMG("la-build-knowledge-112")],text:"Where are the children? What are they doing?\nHow are they helping in the community?\nWho/What do you see? What do the children do? I see flowers. The children plant.\nHow do the kids help out? The kids plant flowers, dig in the dirt, work together."},
        {id:"ways",title:"Build Vocabulary · page 113",byline:"Reading and Writing Companion · Ways to Help",mode:"reference",images:[IMG("la-ways-to-help-113")],text:"Talk with your partner about ways people can help in a community.\nWrite words about how people help out in a community."},
        {id:"oral",title:"Oral Vocabulary Routine",byline:"leadership · admire",mode:"reference",images:[IMG("la-oral-vocab")],text:"Define: "+LEAD+"\nExample: Thanks to Coach Jackson’s leadership, the team won the game.\nAsk: How can good leadership from the principal help our school?\nDefine: "+ADMIRE+"\nExample: Amy admires her neighbors because they helped clean up the park.\nAsk: Whom do you admire?"},
        {id:"digraph",title:"Phonics · Consonant Digraphs: sh, th, -ng",byline:"Lesson 1 Phonics Practice Activity",mode:"reference",images:[IMG("la-digraph-rule"),IMG("la-digraph-practice")],text:SH+"\n"+TH+"\n"+NG+"\nshop · wish · then · that · hush · crash\nsing · sang · bang · long · this · thump\nhip · ship · hot · shot · mat · math\ndesks · think · bring · lump · grand · clang\nThank you for handing that shell to me.\nBeth thinks she spots a fish in the pond!\nHe rushed to the ship to bring his bag."},
        bonus("bonus-la-0511",[
          {label:"Warm-up video: Community Helpers",url:"https://www.youtube.com/watch?v=jt2q1cHsH6E"},
          {label:"Video: Digraphs (Jack Hartmann)",url:"https://www.youtube.com/watch?v=NK8_Tvu6bJk"}
        ])
      ]}
  });

  // ───────────────────────── SCIENCE · Unit 2 Module 1 Lesson 4 ─────────────────────────
  const VOC=["behavior","learn","signal"];
  const BURROW_1="We are young groundhogs called kits. We have been living in our burrow since we were born in early spring. We were very small when we were born. We could not even see. Our mother gave us milk to help us grow. Now we are bigger. We are ready to see the world!";
  const BURROW_2="It is a beautiful morning in early June. My five brothers and sisters and I are excited! Today our mother is going to take us outside of our burrow for the first time.";
  const MSG_60="Animal babies let their parents know what they need. Babies signal to send a message. A signal is a sound or movement that gives information. Baby birds make sounds. They also open their mouths when they are ready to eat. Different animals send different signals. A parent responds to signals from its offspring. Learn means to gain knowledge or a skill.";
  const MSG_61="Animal babies learn behaviors from their parents. Both signals and behaviors help young animals survive. As young animals grow, they learn how to survive on their own. Some animals are born knowing behaviors that help them survive. A whale calf can swim right away. It does not need to learn how to swim. Different animals learn different behaviors.";
  const SCI_Q=[
    sci("Listen to The Burrow (Science Book, page 57)","Listen and read along with the story.",[
      choice("kits","The young groundhogs are called ___.",["kits","cubs","chicks"],"kits","🐿️"),
      choice("live","Where have the kits been living since they were born?",["in their burrow","in a nest in a tree","in a pond"],"in their burrow","🕳️"),
      choice("born","When were the kits born?",["in early spring","in early June","in winter"],"in early spring","🌸"),
      choice("see","The kits were very small when they were born. They could not even ___.",["see","eat","sleep"],"see","👀"),
      choice("milk","What did the mother give the kits to help them grow?",["milk","carrots","bugs"],"milk","🍼"),
      choice("five","How many brothers and sisters does the kit have?",["five","two","ten"],"five","🖐️"),
      choice("today","What is the mother going to do today?",["Take the kits outside of the burrow for the first time.","Dig a new burrow by the pond.","Go to sleep for the winter."],"Take the kits outside of the burrow for the first time.","🌞"),
      choice("survive","7. How does the groundhog help her kits survive?",["She gives them milk to help them grow and keeps them in the burrow.","She leaves them alone in the field.","She teaches them to fly."],"She gives them milk to help them grow and keeps them in the burrow.","🛡️"),
      choice("danger","8. How does the groundhog communicate danger to her kits?",["She whistles.","She sings a song.","She claps her paws."],"She whistles.","📢")
    ],"The Burrow: "+BURROW_1+" "+BURROW_2+" The mother groundhog communicates danger to her kits: She whistles.",{readingId:"burrow"}),
    sci("Vocabulary · behavior · learn · signal","Choose the word.",[
      select("behavior","the way a person, animal, or thing acts or does something",VOC,"behavior","🐾"),
      select("learn","to gain knowledge or skill",VOC,"learn","📘"),
      select("signal","a sound or movement that gives information",VOC,"signal","🚦")
    ],"behavior: the way a person, animal, or thing acts or does something · learn: to gain knowledge or skill · signal: a sound or movement that gives information",{readingId:"vocab"}),
    sci("Explain: Animal Behaviors (Student Book, page 58)","Some animal parents care for their offspring. These behaviors help their offspring survive.",[
      choice("why","Some animal parents care for their offspring. These behaviors help their offspring ___.",["survive","get lost","sleep all day"],"survive","🌱"),
      {...choice("polar","Look at the photo. What are the polar bears doing?",["Polar bears feed their offspring. They show their cubs how to find food.","Polar bears are sleeping in a den.","Polar bears are running away from their cubs."],"Polar bears feed their offspring. They show their cubs how to find food.","🐻‍❄️"),img:IMG("sci-polar-bears"),bigImg:true},
      {...choice("lioness","Look at the photo. What is the lioness doing?",["This lioness protects her offspring. She is carrying her cub.","This lioness is eating her food.","This lioness is teaching her cub to swim."],"This lioness protects her offspring. She is carrying her cub.","🦁"),img:IMG("sci-lioness"),bigImg:true},
      choice("chimp","Video: Animals Care For Their Young. Explain how this chimpanzee is helping its offspring survive.",["It is taking care of the offspring by cleaning it.","It is teaching the offspring to fly.","It is hiding food from the offspring."],"It is taking care of the offspring by cleaning it.","🐒"),
      free("draw","1. Draw a picture of an animal behavior. Then write what the animal does.","🎨")
    ],"A behavior is the way a person, animal, or thing acts or does something. Polar bears feed their offspring. They show their cubs how to find food. This lioness protects her offspring. She is carrying her cub. The chimpanzee is taking care of the offspring by cleaning it.",{readingId:"explain"}),
    sci("Close Reading · Animal Messages (Science Book, pages 60–61)","Read and follow the instructions on each page.",[
      {...choice("birds","Inspect: How do baby birds signal to their parents?",["Baby birds make sounds. They also open their mouths when they are ready to eat.","Baby birds fly away from the nest.","Baby birds sleep all day."],"Baby birds make sounds. They also open their mouths when they are ready to eat.","🐦"),img:IMG("sci-baby-birds"),bigImg:true},
      choice("message","Babies signal to send a ___.",["message","gift","song"],"message","✉️"),
      choice("responds","A parent ___ to signals from its offspring.",["responds","sleeps","hides"],"responds","👂"),
      choice("parents","Animal babies learn behaviors from their ___.",["parents","teachers","friends"],"parents","👪"),
      {...choice("whale","Find Evidence: Some animals are born knowing behaviors that help them survive. Which animal can swim right away?",["a whale calf","a baby bird","a groundhog kit"],"a whale calf","🐋"),img:IMG("sci-whale"),bigImg:true},
      choice("both","Both signals and behaviors help young animals ___.",["survive","get lost","stay small"],"survive","🌱"),
      multi("connect","Make Connections: think about The Burrow and Animal Messages. Which signals and behaviors help offspring survive? Choose 4.",["The mother groundhog whistles to tell about danger.","The mother groundhog gives her kits milk.","Baby birds make sounds.","Baby birds open their mouths when they are ready to eat.","Baby birds paint pictures.","The kits go to school."],["The mother groundhog whistles to tell about danger.","The mother groundhog gives her kits milk.","Baby birds make sounds.","Baby birds open their mouths when they are ready to eat."],"🔗")
    ],MSG_60+" "+MSG_61,{readingId:"close"})
  ];
  registerQuiz({
    id:"class-diary-2026-11-05-science",
    uploadDate:"2026-11-05",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"05/11/2026 · Unit 2 Module 1 Lesson 4 · The Burrow · behavior, learn, signal · Explain: Animal Behaviors · Close Reading: Animal Messages",scoreByField:true,
      groups:groupsOf([["Read Aloud: The Burrow","Science Book page 57",1],["Vocabulary","behavior · learn · signal",1],["Explain: Animal Behaviors","Student Book page 58 · video Animals Care For Their Young",1],["Close Reading","Animal Messages · pages 60–61",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-0511","Remember — Science",[
          "📅 Class Diary: 05/11/2026",
          "(05/11) Behavior: the way a person, animal, or thing acts or does something.",
          "(05/11) Learn: to gain knowledge or skill.",
          "(05/11) Signal: a sound or movement that gives information.",
          "(05/11) The Burrow: young groundhogs are called kits. Their mother gave them milk to help them grow. She whistles to communicate danger.",
          "(05/11) Some animal parents care for their offspring. These behaviors help their offspring survive.",
          "(05/11) Polar bears feed their offspring. They show their cubs how to find food. The lioness protects her cub.",
          "(05/11) Baby birds make sounds. They also open their mouths when they are ready to eat.",
          "(05/11) Some animals are born knowing behaviors that help them survive. A whale calf can swim right away."
        ],"Lesson 4"),
        {id:"burrow",title:"The Burrow",byline:"Read Aloud · Science Book page 57",mode:"reference",images:[IMG("sci-burrow")],text:BURROW_1+"\n"+BURROW_2+"\n7. How does the groundhog help her kits survive?\n8. How does the groundhog communicate danger to her kits?"},
        {id:"vocab",title:"Vocabulary",byline:"Lesson 4",mode:"reference",images:[IMG("sci-vocab-behavior"),IMG("sci-vocab-learn"),IMG("sci-vocab-signal")],text:"behavior: the way a person, animal, or thing acts or does something\nlearn: to gain knowledge or skill\nsignal: a sound or movement that gives information"},
        {id:"explain",title:"Explain: Animal Behaviors",byline:"Student Book page 58",mode:"reference",images:[IMG("sci-behavior-58"),IMG("sci-polar-bears"),IMG("sci-lioness")],text:"A behavior is the way a person, animal, or thing acts or does something.\n1. Draw a picture of an animal behavior.\nSome animal parents care for their offspring. These behaviors help their offspring survive.\nPolar bears feed their offspring. They show their cubs how to find food.\nThis lioness protects her offspring. She is carrying her cub.\nVideo: Animals Care For Their Young — Explain how this chimpanzee is helping its offspring survive."},
        {id:"close",title:"Animal Messages",byline:"Close Reading · Science Book pages 60–61",mode:"reference",images:[IMG("sci-whale"),IMG("sci-baby-birds")],text:"Inspect: Read the text. Underline the text that tells how baby birds signal to their parents.\nFind Evidence: Reread. Highlight text that describes another way animals survive.\n"+MSG_60+"\n"+MSG_61+"\nMake Connections: Think about the Read Aloud The Burrow and Animal Messages. Make a list below of signals and behaviors parents use to help their offspring survive."},
        bonus("bonus-sci-0511",[{label:"Homework game: Animal behaviours (Wordwall)",url:"https://wordwall.net/resource/123033853/khoa-h%E1%BB%8Dc/animal-behaviours"}])
      ]}
  });

  // ───────────────────────── MATH · Review Lessons 32–35 ─────────────────────────
  const MATH_Q=[
    math("Homework check · Patterns in Tables (Workbook 10-8)","Find the pattern. Complete the table.",[
      fill("cone","Number of Ice Cream Cones | Number of Scoops: 1 | 2 · 2 | 4 · 3 | 6 · 4 | ___","8","🍦"),
      fill("box3","Number of Boxes | Number of Crackers: 1 | 10 · 2 | 20 · 3 | ___","30","📦"),
      fill("box4","Number of Boxes | Number of Crackers: 1 | 10 · 2 | 20 · 3 | 30 · 4 | ___","40","🍘"),
      fixed("tank","Algebra: Which number completes the table? Number of Tanks | Number of Fish: 1 | 5 · 2 | 10 · 3 | ? · 4 | 20",["11","14","15","25"],"15","🐟")
    ],"Scoops: 2, 4, 6, 8 (each cone has 2 more). Crackers: 10, 20, 30, 40 (each box has 10 more). Fish: 5, 10, 15, 20 (each tank has 5 more)."),
    math("Lesson 32 · Representing Numbers on a Ten-Frame","You can use a ten-frame to show numbers up to 10.",[
      fill("upto","You can use a ten-frame to show numbers up to ___.","10","🔟"),
      choice("start","To show 3, start at the ___ box.",["top left","bottom right","top right"],"top left","↖️"),
      fill("three","Count as you draw a counter for each number. To show 3, draw ___ counters.","3","⚫"),
      fill("empty","You show 3 on a ten-frame. How many boxes are empty?","7","⬜"),
      fill("seven","Fill the top row first. Now I have 7. 7 is 5 and ___.","2","➕")
    ],"You can use a ten-frame to show numbers up to 10. To show 3, start at the top left box. Count as you draw a counter for each number. 3 counters → 7 empty boxes. Fill the top row first: 7 is 5 and 2.",{readingId:"l32"}),
    math("Lesson 33 · Using Data from Real Graphs","You can use real objects to make a graph by arranging the objects in rows and columns.",[
      choice("real","This is a real-object graph because ___.",["the counters are real objects","it has pictures of hats","it is drawn with crayons"],"the counters are real objects","🧲"),
      fill("white","Look at the graph. How many white counters?","4","⚪"),
      fill("black","How many black counters?","6","⚫"),
      fixed("same","Circle each pair of counters. Is there the same number of colors?",["Yes","No"],"No","🟰"),
      fixed("more","Which color has more?",["Black","White"],"Black","🏆"),
      fill("partner","How many counters do not have a partner?","2","👫")
    ],"White: 4 · Black: 6. 4 pairs. 2 black counters do not have a partner, so black has more. Not the same number of colors.",{readingId:"l33"}),
    math("Lesson 34 · Using Data from Picture Graphs","You can use information in picture graphs to answer questions. Favorite Party Hat.",[
      fill("vote","Each party hat stands for ___ vote.","1","🎉"),
      fill("stripes","How many children voted for the hat with stripes?","4","🥳"),
      fill("dots","How many children voted for the hat with polka dots?","6","🎈"),
      fixed("most","Which hat got the most votes?",["Stripes","Polka Dots"],"Polka Dots","🏅"),
      fill("all","How many children voted in all?","10","👧")
    ],"Each party hat stands for 1 vote. Stripes: 4 · Polka Dots: 6. Polka Dots got the most votes. 4 + 6 = 10 children voted.",{readingId:"l34"}),
    math("Lesson 35 · Describing Patterns","This is a pattern. The part that repeats over and over.",[
      choice("repeats","☀️ 🌙 ☀️ 🌙 ☀️ 🌙 — This is a pattern. ☀️ 🌙 ___ over and over.",["repeats","stops","hides"],"repeats","🔁"),
      fixed("moon","☀️ 🌙 ☀️ 🌙 ☀️ 🌙 ☀️ ___ What comes next?",["🌙","☀️","⭐"],"🌙","🌙"),
      fixed("part","🤍 🤍 🌼 🤍 🤍 🌼 🤍 🤍 🌼 — Which part repeats over and over?",["🤍 🤍 🌼","🤍 🌼","🌼 🌼 🤍"],"🤍 🤍 🌼","🌼"),
      fixed("next","🤍 🤍 🌼 🤍 🤍 🌼 🤍 🤍 ___ What comes next?",["🌼","🤍","☀️"],"🌼","➡️")
    ],"☀️ 🌙 repeats over and over. 🤍 🤍 🌼 repeats over and over. This is a pattern too.",{readingId:"l35"})
  ];
  registerQuiz({
    id:"math-review-lessons-32-35",
    uploadDate:"2026-11-05",
    subjectKey:"math",
    title:"Math – Review Lessons 32–35",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"05/11/2026 · Review Lessons 32–35 · Ten-frame · Real graphs · Picture graphs · Patterns · Homework check: Patterns in Tables",scoreByField:true,
      groups:groupsOf([["Homework check","Patterns in Tables · Workbook 10-8",1],["Lesson 32","Representing Numbers on a Ten-Frame",1],["Lesson 33","Using Data from Real Graphs",1],["Lesson 34","Using Data from Picture Graphs",1],["Lesson 35","Describing Patterns",1]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-0511","Remember — Math Review Lessons 32–35",[
          "📅 Class Diary: 05/11/2026",
          "(05/11 · L32) You can use a ten-frame to show numbers up to 10. To show 3, start at the top left box. Count as you draw a counter for each number.",
          "(05/11 · L33) You can use real objects to make a graph by arranging the objects in rows and columns. Circle each pair of counters.",
          "(05/11 · L33) Counters without a partner show which color has more.",
          "(05/11 · L34) You can use information in picture graphs to answer questions. Each party hat stands for 1 vote.",
          "(05/11 · L35) This is a pattern. ☀️ 🌙 repeats over and over.",
          "(05/11 · Homework) Patterns in Tables: 2, 4, 6, 8 · 10, 20, 30, 40 · 5, 10, 15, 20",
          "(05/11) Homework: Review lessons 32–35."
        ],"Review Lessons 32–35"),
        {id:"l32",title:"Lesson 32: Representing Numbers on a Ten-Frame",byline:"Math · Review",mode:"reference",images:[IMG("math-l32-tenframe")],text:"You can use a ten-frame to show numbers up to 10.\nTo show 3, start at the top left box. Count as you draw a counter for each number."},
        {id:"l33",title:"Lesson 33: Using Data from Real Graphs",byline:"Math · Review",mode:"reference",images:[IMG("math-l33-real-graph")],text:"You can use real objects to make a graph by arranging the objects in rows and columns.\nThis is a real-object graph because the counters are real objects.\nCircle each pair of counters in the graph. Is there the same number of colors? Which color has more? How many counters do not have a partner?"},
        {id:"l34",title:"Lesson 34: Using Data from Picture Graphs",byline:"Math · Review",mode:"reference",images:[IMG("math-l34-picture-graph")],text:"You can use information in picture graphs to answer questions.\nEach party hat stands for 1 vote. 10 children voted.\nHow many children voted for the hat with stripes? How many children voted for the hat with polka dots? Which hat got the most votes?"},
        {id:"l35",title:"Lesson 35: Describing Patterns",byline:"Math · Review",mode:"reference",images:[IMG("math-l35-pattern")],text:"This is a pattern. Sun, moon repeats over and over.\nThis is a pattern too. Heart, heart, flower repeats over and over."}
      ]}
  });
})();
