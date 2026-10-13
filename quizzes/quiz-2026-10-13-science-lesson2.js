// Science Unit 2 Module 1 · Lesson 2: Functions of Animal Structures — BÀI ÔN TỔNG HỢP (ôn cho bài test thứ Năm).
// Gom toàn bộ Lesson 2 trong Class Diary 01/10 → 13/10/2026:
//   01/10 Science Probe (tiger) · Discover the Phenomenon (hummingbirds)
//   02/10 Science Lesson 2 Review (nằm trong mục CLOSE READING) · Vocabulary protection · Animal Protection (SB tr.26) · sea turtle
//   06/10 Inquiry Activity: Animals Move (SB tr.24–25)
//   08/10 Explain: Animal Protection (cont.) (SB tr.27: lion, skunk, animal with horns)
//   09/10 Science Review (nằm trong mục CLOSE READING) · Inquiry Activity: Explore Animal Structures (SB tr.30–31)
//   13/10 STEM Connection (SB tr.28–29) · Lesson 2 Review · Three-Dimensional Thinking · Extend It
//   + file đính kèm "Functions of Animal Structures.pdf" + game Wordwall "Animals Structure Function".
// Định nghĩa lấy NGUYÊN VĂN từ diary/tài liệu. Ảnh dùng lại từ web/assets/2026-10-0x/.
(()=>{
  const A=(day,name)=>`assets/2026-10-${day}/${name}.webp`;
  const S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  const order=(id,label,position,count,icon)=>({id,label,type:"select",choices:Array.from({length:count},(_,i)=>String(i+1)),answer:String(position),icon});
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const q=(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,hint,...extra});
  const photo=(section,img,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,fields,explain,hint,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  const KEYWORDS=["a body part","what the body part does","keeps things safe from harm","scientists who study life"];
  const JOBS=["move","protect","get food","keep warm","hear danger"];
  const ANIMALS=["giraffe","elephant","duck","hummingbird","crab","frog","woodpecker"];
  const PROTECT=["hard shell","sharp spines","sharp quills","blend in with its surroundings","sprays a bad-smelling liquid","sharp claws","strong horns and legs"];

  const QUESTIONS=[
    // ── 1. KEYWORDS & DEFINITIONS ──
    q("Keywords · Definitions","Match each keyword with its definition.",[
      select("structure","Structure:",KEYWORDS,"a body part","🦴"),
      select("function","Function:",KEYWORDS,"what the body part does","⚙️"),
      select("protection","Protection:",KEYWORDS,"keeps things safe from harm","🛡️"),
      select("biologists","Biologists are…",KEYWORDS,"scientists who study life","🔬")
    ],"Structure: a body part. (02/10) · Function: what the body part does. (02/10) · Protection: keeps things safe from harm. (02/10, 09/10) · Biologists are scientists who study life. (13/10)","Định nghĩa đúng nguyên văn cô dạy — học thuộc cho bài test."),
    q("Keywords · Vocabulary game","Words from the vocabulary game.",[
      choice("structure","A structure is a ___.",["body part that helps an animal survive","job of a body part","place where animals live"],"body part that helps an animal survive","🦴"),
      choice("function","A function is the ___.",["job of a body part","name of an animal","color of a body part"],"job of a body part","⚙️")
    ],"structure → body part that helps an animal survive · function → job of a body part (game Wordwall Animals Structure Function, 13/10)","Cùng nghĩa với định nghĩa ở câu 1, chỉ khác cách nói."),
    q("Keywords · Structure or function?","Is it a STRUCTURE (body part) or a FUNCTION (what it does)?",[
      select("wings","wings",["structure","function"],"structure","🪽"),
      select("fly","fly",["structure","function"],"function","🕊️"),
      select("shell","shell",["structure","function"],"structure","🐢"),
      select("swim","swim",["structure","function"],"function","🏊"),
      select("claws","claws",["structure","function"],"structure","🐾"),
      select("catch","catch food",["structure","function"],"function","🍖")
    ],"Structures (body parts): wings, shell, claws · Functions (what they do): fly, swim, catch food.","Bộ phận cơ thể = structure · việc làm = function."),
    q("Keywords · True or false","Read and choose TRUE or FALSE.",[
      tf("eq","Lesson 2 asks: What are the functions of different animal body parts?",true,"❓"),
      tf("structure","A structure is what the body part does.",false,"🦴"),
      tf("protection","Protection keeps things safe from harm.",true,"🛡️"),
      tf("wildlife","Wildlife biologists study animals.",true,"🔬"),
      tf("defend","“A bear uses its sharp claws to defend itself.” Defend means to protect.",true,"🐻")
    ],"1. TRUE (Essential Question) · 2. FALSE (structure = a body part; function = what it does) · 3. TRUE · 4. TRUE · 5. TRUE","Đúng chọn TRUE, sai chọn FALSE."),

    // ── 2. STRUCTURE → FUNCTION ──
    q("Structure and Function · What is it for?","What job does each structure do?",[
      select("fins","fins (fish)",JOBS,"move","🐟"),
      select("webbed","webbed feet (duck)",JOBS,"move","🦆"),
      select("shell","shell (turtle)",JOBS,"protect","🐢"),
      select("spines","sharp spines (hedgehog)",JOBS,"protect","🦔"),
      select("trunk","trunk (elephant)",JOBS,"get food","🐘"),
      select("beak","beak (woodpecker)",JOBS,"get food","🐦"),
      select("fur","thick fur (bear)",JOBS,"keep warm","🐻"),
      select("ears","large ears (rabbit)",JOBS,"hear danger","🐇")
    ],"Fins help fish swim · Webbed feet help ducks swim · Shell protects the turtle · Sharp spines protect the hedgehog · Trunk helps elephants pick up food and drink water · Woodpeckers use their beak to get food · Thick fur keeps the bear warm · The ears help the rabbit hear when danger is near.","Mỗi bộ phận giúp con vật làm gì: di chuyển, bảo vệ, lấy thức ăn, giữ ấm hay nghe nguy hiểm?"),
    q("Structure and Function · Who am I?","Read the clue. Which animal is it?",[
      select("neck","I have a long neck to reach leaves.",ANIMALS,"giraffe","🦒"),
      select("trunk","My trunk helps me pick up food and drink water.",ANIMALS,"elephant","🐘"),
      select("webbed","My webbed feet help me swim.",ANIMALS,"duck","🦆"),
      select("blurry","My wings move so fast that they look blurry.",ANIMALS,"hummingbird","🌺"),
      select("sideways","I have eight legs and I walk sideways.",ANIMALS,"crab","🦀"),
      select("tongue","I use my tongue to get food.",ANIMALS,"frog","🐸"),
      select("beak","I use my beak to get food.",ANIMALS,"woodpecker","🌳")
    ],"giraffe – long neck · elephant – trunk · duck – webbed feet · hummingbird – wings move very fast · crab – eight legs, walks sideways · frog – tongue · woodpecker – beak","Đọc gợi ý “I have… / I use…” rồi đoán con vật."),
    photo("Structure and Function · Tiger",A("07","tiger-probe"),"Science Probe: Functions of Animal Parts (01/10).",[
      choice("best","Which student tells a FUNCTION?",["Roosevelt: I think the tiger uses his legs for running.","Steve: I think the tiger has sharp teeth.","Toni: I think the tiger has soft fur."],"Roosevelt: I think the tiger uses his legs for running.","🐅")
    ],"Roosevelt tells what the legs DO (function): Tigers do use their legs for running. Steve and Toni only name body parts (structures).","Function = bộ phận dùng để LÀM GÌ."),
    photo("Structure and Function · Hummingbird",A("13","hummingbird"),"Why are the hummingbird's wings blurry?",[
      choice("blurry","Explain the phenomenon.",["The hummingbird uses its wings to fly, and its wings move very fast.","The hummingbird's wings are wet.","The hummingbird is sleeping."],"The hummingbird uses its wings to fly, and its wings move very fast.","🐦"),
      choice("nowings","A hummingbird with no wings…",["cannot fly, so it cannot drink the nectar from flowers.","can fly faster.","can swim in the sea."],"cannot fly, so it cannot drink the nectar from flowers.","🌺")
    ],"The hummingbird uses its wings to fly, and its wings move very fast. (01/10, 13/10) · Extend It: The bird cannot fly, so it cannot drink the nectar from flowers. (13/10)","Nhớ lại video chim ruồi và câu Extend It."),

    // ── 3. ANIMAL PROTECTION ──
    q("Animal Protection · Read","Read the text from the Student Book (page 26).",[
      bank("harm","Protection keeps things safe from ___.",["harm","structures","homes"],"harm","🛡️"),
      bank("structures","Some animals can use their ___ for protection.",["harm","structures","homes"],"structures","🦔"),
      bank("homes","Other animals build ___ for protection.",["harm","structures","homes"],"homes","🏠"),
      multi("live","Animals use their ___ to help them live. Choose 4.",["nose","mouth","eyes","ears","tail"],["nose","mouth","eyes","ears"],"👀")
    ],"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live. (02/10 + file Functions of Animal Structures)","Đọc đoạn Animal Protection ở trên.",{wordBank:["harm","structures","homes"],readingId:"protection"}),
    q("Animal Protection · How does it protect itself?","Choose how each animal protects itself.",[
      select("turtle","turtle 🐢",PROTECT,"hard shell","🐢"),
      select("hedgehog","hedgehog 🦔",PROTECT,"sharp spines","🦔"),
      select("porcupine","porcupine",PROTECT,"sharp quills","🪶"),
      select("chameleon","chameleon 🦎",PROTECT,"blend in with its surroundings","🦎"),
      select("skunk","skunk 🦨",PROTECT,"sprays a bad-smelling liquid","🦨"),
      select("bear","bear 🐻",PROTECT,"sharp claws","🐻"),
      select("horns","the animal with big curved horns",PROTECT,"strong horns and legs","🐐")
    ],"turtle – hard shell · hedgehog – sharp spines · porcupine – sharp quills · chameleon – blends in with its surroundings to hide from predators · skunk – sprays a bad-smelling liquid · bear – sharp claws to defend itself · animal with horns – strong horns and legs (08/10, 09/10, 13/10)","Nhớ các bức ảnh ngày 08/10, 09/10 và 13/10."),
    photo("Animal Protection · Lion",A("08","protect-lion"),"How can a lion protect itself?",[
      multi("lion","Choose 3.",["thick mane","sharp teeth","sharp claws","webbed feet","long neck"],["thick mane","sharp teeth","sharp claws"],"🦁")
    ],"Lion: thick mane, sharp teeth, sharp claws. (Science Book page 27, 08/10)","Nhìn ảnh sư tử."),
    photo("Animal Protection · Rabbit and porcupine",A("13","rabbit"),"Three-Dimensional Thinking (13/10).",[
      choice("ears","Why does the rabbit have such large ears?",["The ears help this animal hear when danger is near.","The ears help this animal eat its food.","The ears help this animal move from place to place."],"The ears help this animal hear when danger is near.","🐇"),
      choice("quills","Porcupines are covered in sharp quills. Which is correct?",["The quills are a structure that keeps the porcupine safe.","The quills do not help protect the porcupine."],"The quills are a structure that keeps the porcupine safe.","🪶")
    ],"The ears help this animal hear when danger is near. · The quills are a structure that keeps the porcupine safe.","Tai to → nghe nguy hiểm · lông gai → giữ an toàn."),
    q("Animal Protection · Sea turtle","What does each part of the sea turtle do? (02/10)",[
      select("shell","Shell",["protects the turtle's body","help the turtle swim and steer","help the turtle balance and move in the water","helps the turtle eat sea plants and small animals","helps the turtle see, breathe and find food"],"protects the turtle's body","🐢"),
      select("front","Front flippers",["protects the turtle's body","help the turtle swim and steer","help the turtle balance and move in the water","helps the turtle eat sea plants and small animals","helps the turtle see, breathe and find food"],"help the turtle swim and steer","🌊"),
      select("back","Back flippers",["protects the turtle's body","help the turtle swim and steer","help the turtle balance and move in the water","helps the turtle eat sea plants and small animals","helps the turtle see, breathe and find food"],"help the turtle balance and move in the water","🌊"),
      select("mouth","Mouth",["protects the turtle's body","help the turtle swim and steer","help the turtle balance and move in the water","helps the turtle eat sea plants and small animals","helps the turtle see, breathe and find food"],"helps the turtle eat sea plants and small animals","👄"),
      select("head","Head",["protects the turtle's body","help the turtle swim and steer","help the turtle balance and move in the water","helps the turtle eat sea plants and small animals","helps the turtle see, breathe and find food"],"helps the turtle see, breathe and find food","👀")
    ],"Shell: protects the turtle's body · Front flippers: help the turtle swim and steer · Back flippers: help the turtle balance and move in the water · Mouth: helps the turtle eat sea plants and small animals · Head: helps the turtle see, breathe and find food","Nhớ hình con rùa biển ngày 02/10."),

    // ── 4. INQUIRY ACTIVITIES ──
    q("Inquiry · Explore Animal Structures","How do the bear and the crab use their structures? (09/10)",[
      select("bearlegs","Bear: strong legs",["help it walk and run","help it catch food","keeps it warm","protects its body","help it walk sideways"],"help it walk and run","🐻"),
      select("bearclaws","Bear: sharp claws",["help it walk and run","help it catch food","keeps it warm","protects its body","help it walk sideways"],"help it catch food","🐻"),
      select("bearfur","Bear: thick fur",["help it walk and run","help it catch food","keeps it warm","protects its body","help it walk sideways"],"keeps it warm","🐻"),
      select("crabshell","Crab: a hard shell",["help it walk and run","help it catch food","keeps it warm","protects its body","help it walk sideways"],"protects its body","🦀"),
      select("crablegs","Crab: eight legs",["help it walk and run","help it catch food","keeps it warm","protects its body","help it walk sideways"],"help it walk sideways","🦀"),
      choice("alike","How are the bear and the crab alike?",["Both bears and crabs use claws to get food.","Both bears and crabs have shells.","Both bears and crabs have eight legs."],"Both bears and crabs use claws to get food.","🤝")
    ],"Bear: Strong legs help it walk and run. Sharp claws help it catch food. Thick fur keeps it warm. · Crab: A hard shell protects its body. Two claws help it catch food and protect itself. Eight legs help it walk sideways. · Both bears and crabs use claws to get food. The claws are different shape and size.","Bảng Bear / Crab của hoạt động mô phỏng ngày 09/10."),
    q("Inquiry · Animals Move","The rabbit model (06/10).",[
      choice("hop","How does a rabbit move?",["A rabbit hops.","A rabbit swims.","A rabbit flies."],"A rabbit hops.","🐇"),
      choice("parts","Which structures help the rabbit move?",["its legs and feet","its ears","its nose"],"its legs and feet","🦶"),
      order("research","Research how an animal moves.",1,3,"🔍"),
      order("record","Record Data in the table.",2,3,"📝"),
      order("model","Make a model to show how your animal moves.",3,3,"✂️")
    ],"A rabbit hops. Rabbits use their feet and legs to move. Investigate: 1. Research · 2. Record Data · 3. Make a model.","3 bước cuối: đánh số theo thứ tự làm."),

    // ── 5. STEM CONNECTION ──
    photo("STEM Connection · Wildlife biologist",A("13","biologist"),"What Does a Wildlife Biologist Do? (13/10)",[
      tf("life","Biologists are scientists who study life.",true,"🔬"),
      tf("rocks","Wildlife biologists study rocks.",false,"🪨"),
      multi("learn","They learn about… Choose 3.",["where animals live","what animals eat","how animals behave","how to drive a car"],["where animals live","what animals eat","how animals behave"],"📝"),
      choice("why","Why do they study where animals live?",["So that they can have a better understanding of animal homes.","So that they can sell the animals.","So that they can build roads."],"So that they can have a better understanding of animal homes.","🏠")
    ],"Biologists are scientists who study life. They study all types of living things. Wildlife biologists study animals: where they live, what they eat, and how they behave. They study where animals live so that they can have a better understanding of animal homes.","Đọc lại đoạn văn về nhà sinh vật học."),

    // ── 6. WRITE ──
    q("Write · Structure and function","Answer with a full sentence.",[
      write("wings","What do wings do for birds?",["Wings help birds fly.","fly"],"🪽"),
      write("turtle","How does a turtle protect its body?",["A turtle has a hard shell to protect its body.","shell"],"🐢"),
      write("rabbit","Why does a rabbit have large ears?",["The ears help the rabbit hear when danger is near.","hear"],"🐇")
    ],"Wings help birds fly. · A turtle has a hard shell to protect its body. · The ears help the rabbit hear when danger is near.","Viết câu tiếng Anh có từ khoá: fly · shell · hear.")
  ];

  registerQuiz({
    id:"science-unit2-module1-lesson2-review",
    uploadDate:"2026-10-13",
    subjectKey:"science",
    title:"Science – Lesson 2 Review (01/10–13/10)",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"Unit 2 Module 1 · Lesson 2: Functions of Animal Structures · Ôn toàn bộ Lesson 2 cho bài test thứ Năm",scoreByField:true,
      groups:groupsOf([
        ["Keywords & Definitions","structure · function · protection · biologist",4],
        ["Structure and Function","What does each body part do?",4],
        ["Animal Protection","How animals protect themselves",5],
        ["Inquiry Activities","Animals Move · Explore Animal Structures",2],
        ["STEM Connection","What Does a Wildlife Biologist Do?",1],
        ["Write","Full sentences with keywords",1]
      ]),
      questions:QUESTIONS,
      readings:[
        {id:"notes-lesson2",title:"Ghi nhớ — Lesson 2 (keywords & definitions)",byline:"Unit 2 Module 1 · Lesson 2: Functions of Animal Structures",mode:"notes",text:[
          "📅 Lấy từ Class Diary: 01, 02, 06, 08, 09, 13/10/2026 (+ Science Review trong Close Reading 02/10 và 09/10, file Functions of Animal Structures, game Wordwall)",
          "(file đính kèm) Essential Question: What are the functions of different animal body parts?",
          "(02/10) Structure: a body part.",
          "(02/10) Function: what the body part does.",
          "(13/10 game) structure → body part that helps an animal survive · function → job of a body part.",
          "(02/10, 09/10) Protection: keeps things safe from harm.",
          "(02/10) Wings help birds fly · Fins help fish swim · Trunk helps elephants pick up food and drink water · Sharp teeth help animals eat meat · Shell protects the turtle · Webbed feet help ducks swim · Strong back legs help rabbits jump · Long neck helps giraffes reach leaves.",
          "(01/10, 13/10) The hummingbird uses its wings to fly, and its wings move very fast.",
          "(09/10) A turtle has a hard shell · A hedgehog has sharp spines · A chameleon blends in with its surroundings to hide from predators · A skunk sprays a bad-smelling liquid · A bear uses its sharp claws to defend itself.",
          "(08/10) Lion: thick mane, sharp teeth, sharp claws · Skunk: bad smelling liquid, good ears · Animal with horns: strong horns and legs.",
          "(13/10) The quills keep the porcupine safe · The rabbit's large ears help it hear when danger is near.",
          "(09/10) Bears and crabs use claws. Frogs use their tongue. Woodpeckers use their beak.",
          "(13/10) Biologists are scientists who study life. Wildlife biologists study animals."
        ].join("\n")},
        {id:"protection",title:"Animal Protection",byline:"Student Book, page 26",mode:"reference",images:[A("07","protection-text")],
          text:"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live."},
        {id:"bonus-lesson2",title:"Bonus · Game",byline:"Link cô giáo giao trong Class Diary 13/10",mode:"bonus",links:[{label:"Game: Animals structure and function",url:"https://wordwall.net/resource/14757170/science/animals-structure-function"}],text:""}
      ]}
  });
})();
