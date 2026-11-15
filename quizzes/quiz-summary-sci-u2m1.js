// TỔNG HỢP KIẾN THỨC — Science Unit 2 Module 1: Animal Parents and Their Offspring (cả Module, Class Diary 18/09 → 13/11/2026).
// User yêu cầu 15/11: "Tạo thêm tổng hợp Science unit 2 module 1, đặc biệt nhớ check kĩ đường link play the game (class diary ngày 13/11 - đây là nội dung chính quiz)".
// 3 bài trong nhóm Tổng hợp (uploadDate "weekly-sci-u2m1"):
//   (1) Module Wrap-up Game: 10 câu game Wordwall 123817218 "Animal behaviors review" (nguyên văn, đã đối chiếu game thật) + các dạng hỏi lại cùng kiến thức;
//   (2) Module 1 Test: kiến thức chính của Module Opener, Lesson 1–4, STEM Module Project, Module Wrap-up (registry tự chia Part ≤ 30 ý).
//       Lesson 1 (22–29/09) chưa có bài web theo ngày → lấy từ NKL/Tháng 9/Tong_hop_07-11.09.2026/03_SCIENCE.md (chữ tiếng Anh nguyên văn diary/sách).
//   (3) Review: gộp TOÀN BỘ câu của các bài Science theo ngày từ 07/10 đến 13/11, xếp theo lesson, mang theo bài đọc và link Bonus.
// Script phải nằm SAU các file ngày và sau quiz-2026-11-13.js (dùng window.SCI_WRAPUP_GAME).
(()=>{
  const S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const sci=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const KEY="weekly-sci-u2m1",LABEL="Tổng hợp kiến thức · Unit 2 Module 1",RANGE="18/09–13/11/2026";
  const GAME_URL="https://wordwall.net/resource/123817218/khoa-h%E1%BB%8Dc/animal-behaviors-review";
  const GAME=window.SCI_WRAPUP_GAME||[];
  const BEH4=["Taking care","Feeding","Protecting","Teaching"];
  const GROUPS6=["mammals","birds","fish","reptiles","amphibians","insects"];
  const WORDS6=["mammal","bird","fish","insect","reptile","amphibian"];
  const SF=["structure","function","protection"];

  const NOTES=[
    "📅 Class Diary: 13/11/2026 · Module Wrap-up",
    "(13/11) Rediscover the Phenomenon: What keeps these animals safe? Look at your project to help you answer the question.",
    "(13/11) Game: signal — a sound or movement that gives information · behaviour — the way an animal acts or does something · grooming — cleaning",
    "(13/11) Animals learn behavior from their parents. Some animals are born already knowing some behavior: baby whales can swim. A polar bear has to learn hunting.",
    "(13/11) The 4 animal behaviours: taking care, feeding, protecting and teaching.",
    "(13/11) Review Module 1 for the test in the next lesson.",
    "📅 Class Diary: 10/11–12/11/2026 · STEM Module Project",
    "(10/11) Design Protective Gear for a Sport: the gear needs to protect at least one body part. Tip: Think about how animals protect themselves.",
    "(10/11) Test Your Model: We will wear it on our head and it will keep our head safe.",
    "📅 Class Diary: 29/10–06/11/2026 · Lesson 4: Animal Behaviors",
    "(06/11) Essential Question: How does an animal’s behavior help it survive?",
    "(05/11) Behavior: the way a person, animal, or thing acts or does something. · Learn: to gain knowledge or skill. · Signal: a sound or movement that gives information.",
    "(29/10) Parents feed, protect, teach, and take care of their young.",
    "(06/11) Dogs are the most common type of service animal.",
    "📅 Class Diary: 13/10–27/10/2026 · Lesson 3: Animals and Their Parents",
    "(15/10) Birds and reptiles hatch from eggs.",
    "(20/10) A life cycle is how a living thing grows and lives.",
    "(22/10) trait: a feature of a living thing.",
    "(27/10) Young animals look like their parents. Offspring are not always exactly the same as their parents.",
    "📅 Class Diary: 01/10–13/10/2026 · Lesson 2: Functions of Animal Structures",
    "(02/10) Structure: a body part. · Function: what the body part does. · Protection: keeps things safe from harm.",
    "(02/10) Wings help birds fly · Fins help fish swim · Trunk helps elephants pick up food and drink water · Shell protects the turtle · Webbed feet help ducks swim · Long neck helps giraffes reach leaves.",
    "(09/10) A hedgehog has sharp spines · A chameleon blends in with its surroundings · A skunk sprays a bad-smelling liquid.",
    "📅 Class Diary: 18/09–29/09/2026 · Module Opener · Lesson 1: Animal Structures",
    "(18/09) A zoologist is a scientist who works with animals. All animals have body parts that help them live and grow.",
    "(18/09) mammal: an animal with hair or fur that takes care of and usually gives birth to live young",
    "(18/09) bird: an animal that has two legs, two wings, and feathers",
    "(18/09) fish: an animal that lives in the water and has gills and fins",
    "(18/09) insect: an animal with three body sections and six legs",
    "(18/09) reptile: an air-breathing animal that has dry skin covered with scales",
    "(18/09) amphibian: an animal that lives part of its life in water and part on land",
    "(24/09) Animals can have different parts. A tiger and eagle have different parts. A tiger does not have wings.",
    "(29/09) How can you sort animals into groups? By looking at the structures that they have."
  ];
  const notesCard=id=>({id,title:"Remember — Science Unit 2 Module 1",byline:`Animal Parents and Their Offspring · Class Diary ${RANGE}`,mode:"notes",text:NOTES.join("\n")});
  const gameReading={id:"game-sci-u2m1",title:"Play the game: Animal behaviors review",byline:"Module Wrap-up · Class Diary 13/11",mode:"bonus",links:[{label:"Play the game: Animal behaviors review",url:GAME_URL}],text:""};

  // ───── (1) Module Wrap-up Game ─────
  const GAME_Q=[
    sci("Play the game · Animal behaviors review (13/11)","Wordwall quiz · 10 questions. Choose the correct answer.",
      GAME.map(([q,a,b,icon],i)=>choice(`gm${i+1}`,q,[a,b],a,icon)),
      GAME.map(([q,a])=>`${q} → ${a}`).join(" · "),{readingId:"game-sci-u2m1"}),
    sci("Game words · Which word?","Same game, new way: read the meaning and choose the word.",[
      select("w-signal","a sound or movement that gives information",["signal","behaviour","grooming","learn"],"signal","📣"),
      select("w-behaviour","the way an animal acts or does something",["behaviour","signal","grooming","learn"],"behaviour","🐾"),
      select("w-learn","to gain knowledge or information",["learn","signal","grooming","behaviour"],"learn","📘"),
      select("w-grooming","cleaning",["grooming","learn","signal","behaviour"],"grooming","🪮")
    ],"signal: a sound or movement that gives information · behaviour: the way an animal acts or does something · learn: to gain knowledge or information · grooming: cleaning"),
    sci("Game · Born knowing or learned?","Some animals are born already knowing some behavior. Animals learn behavior from their parents.",[
      fixed("b-whale","A baby whale can swim right away.",["born knowing","learned from parents"],"born knowing","🐋"),
      fixed("b-polar","A polar bear hunts for food.",["learned from parents","born knowing"],"learned from parents","🐻‍❄️"),
      fixed("b-bird","Baby birds make a noise and open their mouth when they are ready to eat. This is a ___.",["signal","grooming"],"signal","🐦")
    ],"Baby whales are born already knowing how to swim. A polar bear has to learn hunting from its parents. Baby birds make a noise and open their mouth: a signal to their parents."),
    sci("Game · The 4 animal behaviours","Taking care · Feeding · Protecting · Teaching",[
      multi("b-four","What are the 4 animal behaviours? Choose 4.",[...BEH4,"Sleeping","Hiding"],BEH4,"4️⃣"),
      select("b-groom","Parents groom their offspring to clean them.",BEH4,"Taking care","🪮"),
      select("b-feed","Parents get and give food to their offspring.",BEH4,"Feeding","🍼"),
      select("b-protect","Parents keep their offspring safe from harm.",BEH4,"Protecting","🛡️"),
      select("b-teach","The cheetah cubs watch their mother. They learn how to hunt.",BEH4,"Teaching","🐆")
    ],"The 4 animal behaviours: taking care, feeding, protecting and teaching. Taking care: parents groom their offspring to clean them. Feed: parents get and give food to their offspring. Protect: parents keep their offspring safe from harm. The cheetah cubs watch their mother and learn how to hunt.")
  ];
  registerQuiz({
    id:"sci-u2m1-wrapup-game",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Module 1 · Wrap-up Game: Animal behaviors review",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"Module Wrap-up (13/11) · Play the game: Animal behaviors review · Unit 2 Module 1",scoreByField:true,
      groups:groupsOf([["Play the game","Animal behaviors review · 10 questions",1],["Game words","signal · behaviour · learn · grooming",1],["Born knowing or learned?","whale · polar bear · baby birds",1],["The 4 animal behaviours","taking care · feeding · protecting · teaching",1]]),
      questions:GAME_Q,readings:[notesCard("notes-sci-u2m1-g"),gameReading]}
  });

  // ───── (2) Module 1 Test ─────
  const TEST=[
    sci("Module Opener · Animal Parents and Their Offspring (18/09)","What keeps these animals safe? · STEM Connection · Science Probe.",[
      choice("zoo","A ___ is a scientist who works with animals.",["zoologist","farmer","baker"],"zoologist","🔬"),
      choice("know","What does a zoologist need to know about animals?",["What animals eat and how they behave.","What animals watch on TV.","How animals drive."],"What animals eat and how they behave.","🦒"),
      choice("probe","Science Probe: Do they have body parts?",["All animals have body parts that help them live and grow.","Only big animals have body parts.","Worms and starfish have no body parts."],"All animals have body parts that help them live and grow.","🐛")
    ],"A zoologist is a scientist who works with animals. Zoologists study what animals eat and how they behave. All animals have body parts that help them live and grow."),
    sci("Lesson 1 · Animal Structures · Vocabulary (18/09, 24/09)","Word Wall. Choose the word that matches the meaning.",[
      select("v-mammal","an animal with hair or fur that takes care of and usually gives birth to live young",WORDS6,"mammal","🐻"),
      select("v-bird","an animal that has two legs, two wings, and feathers",WORDS6,"bird","🐦"),
      select("v-fish","an animal that lives in the water and has gills and fins",WORDS6,"fish","🐟"),
      select("v-insect","an animal with three body sections and six legs",WORDS6,"insect","🐞"),
      select("v-reptile","an air-breathing animal that has dry skin covered with scales",WORDS6,"reptile","🦎"),
      select("v-amphibian","an animal that lives part of its life in water and part on land",WORDS6,"amphibian","🐸")
    ],"mammal: hair or fur, gives birth to live young · bird: two legs, two wings, and feathers · fish: lives in the water, gills and fins · insect: three body sections and six legs · reptile: dry skin covered with scales · amphibian: part of its life in water and part on land."),
    sci("Lesson 1 · Discover the Phenomenon and Inquiry Activity (22/09, 24/09)","Which structure will help this bird catch its food? · Observe a butterfly and a fish with a hand lens.",[
      choice("rail","How is a Ridgway’s Rail different from an armadillo? How is it similar?",["They both have legs and eyes. Only birds have wings and a beak.","They both have wings and a beak.","They are the same in every way."],"They both have legs and eyes. Only birds have wings and a beak.","🐦"),
      choice("bf","What are some of the structures of a butterfly and a fish?",["Butterfly has wings and legs. Fish have gills and fins.","Butterfly has gills and fins. Fish have wings and legs.","They both have feathers."],"Butterfly has wings and legs. Fish have gills and fins.","🦋"),
      choice("claim","Do all animals have the same parts?",["Animals can have different parts.","All animals have the same parts."],"Animals can have different parts.","🤔"),
      choice("tiger","Evidence: A tiger and eagle have different parts. Which is true?",["A tiger does not have wings.","A tiger has feathers.","An eagle has four legs."],"A tiger does not have wings.","🐯")
    ],"They both have legs and eyes. Only birds have wings and a beak. Butterfly has wings and legs. Fish have gills and fins. Animals can have different parts: a tiger does not have wings."),
    sci("Lesson 1 · Inquiry Activity: Sort Animals (29/09)","How can you sort animals into groups?",[
      choice("sort","How can you sort animals into groups?",["By looking at the structures that they have.","By looking at their names.","By their favorite food."],"By looking at the structures that they have.","🗂️"),
      select("s-frog","frog",GROUPS6,"amphibians","🐸"),
      select("s-lizard","lizard",GROUPS6,"reptiles","🦎"),
      select("s-eagle","eagle",GROUPS6,"birds","🦅"),
      select("s-shark","shark",GROUPS6,"fish","🦈"),
      select("s-rabbit","rabbit",GROUPS6,"mammals","🐇"),
      select("s-ladybug","ladybug",GROUPS6,"insects","🐞")
    ],"Animal Sort: amphibians — frog, salamander, toad · reptiles — lizard, turtle, snake · birds — bluebird, eagle, cardinal · fish — clownfish, shark · mammals — bear, rabbit, cow · insects — butterfly, ladybug, bee."),
    sci("Lesson 1 Review · Three-Dimensional Thinking (29/09)","Student Book, page 19.",[
      multi("both","Which structures do both a cheetah and an armadillo have? Choose 2.",["tail","legs","shell"],["tail","legs"],"🐆"),
      choice("birdparts","A bird has two ___, two ___, and ___.",["wings · legs · feathers","fins · gills · scales","horns · hooves · fur"],"wings · legs · feathers","🪶"),
      choice("legs","Birds, bats, and insects have wings. Birds and bats have 2 legs, but insects have ___ legs.",["6","4","8"],"6","🦗")
    ],"Animals do not all have the same structures. A cheetah and an armadillo both have a tail and legs; only the armadillo has a shell. A bird has two wings, two legs, and feathers. Birds and bats have 2 legs, but insects have 6 legs."),
    sci("Lesson 2 · Functions of Animal Structures (01/10–13/10)","Structure · Function · Protection.",[
      select("k-structure","a body part",SF,"structure","🦴"),
      select("k-function","what the body part does",SF,"function","⚙️"),
      select("k-protection","keeps things safe from harm",SF,"protection","🛡️"),
      choice("eq2","In Lesson 2 we read: “Wings help birds fly.” “Fins help fish swim.” “A shell protects the turtle.” So the Essential Question of Lesson 2 is ___.",["What are the functions of different animal body parts?","How does an animal’s behavior help it survive?","How are young animals like their parents?"],"What are the functions of different animal body parts?","❓"),
      choice("blurry","Why are the hummingbird’s wings blurry?",["They are moving very fast.","They are wet.","They are broken."],"They are moving very fast.","🐦")
    ],"Structure: a body part. Function: what the body part does. Protection: keeps things safe from harm. Essential Question: What are the functions of different animal body parts? The hummingbird uses its wings to fly, and its wings move very fast."),
    sci("Lesson 2 · What does it do?","Match the structure to its function.",[
      select("f-trunk","Trunk",["helps elephants pick up food and drink water","helps giraffes reach leaves","help ducks swim"],"helps elephants pick up food and drink water","🐘"),
      select("f-neck","Long neck",["helps giraffes reach leaves","help ducks swim","helps elephants pick up food and drink water"],"helps giraffes reach leaves","🦒"),
      select("f-webbed","Webbed feet",["help ducks swim","helps giraffes reach leaves","help rabbits jump"],"help ducks swim","🦆"),
      select("f-ears","The rabbit’s large ears",["help it hear when danger is near","help it swim","keep it warm"],"help it hear when danger is near","🐰")
    ],"Trunk helps elephants pick up food and drink water. Long neck helps giraffes reach leaves. Webbed feet help ducks swim. The ears help this animal hear when danger is near."),
    sci("Lesson 2 · Animal Protection (08/10, 09/10)","Protection keeps things safe from harm.",[
      select("p-hedgehog","A hedgehog has ___ to protect itself.",["sharp spines","a hard shell","a bad-smelling liquid"],"sharp spines","🦔"),
      select("p-turtle","A turtle has ___ to protect its body.",["a hard shell","sharp spines","a thick mane"],"a hard shell","🐢"),
      select("p-skunk","A skunk ___ to protect itself.",["sprays a bad-smelling liquid","blends in with its surroundings","has sharp spines"],"sprays a bad-smelling liquid","🦨"),
      select("p-chameleon","A chameleon can ___ to hide from predators.",["blend in with its surroundings","spray a bad-smelling liquid","grow a hard shell"],"blend in with its surroundings","🦎")
    ],"A turtle has a hard shell to protect its body. A hedgehog has sharp spines to protect itself. A skunk sprays a bad-smelling liquid to protect itself. A chameleon can blend in with its surroundings to hide from predators."),
    sci("Lesson 3 · Animals and Their Parents (15/10–27/10)","Offspring · trait · life cycle.",[
      choice("title3","In Lesson 3 we learned about birds and their chicks, kittens and their mother, ducklings, and how a puppy grows into an adult dog. So the topic of Lesson 3 is called ___.",["Animals and Their Parents","Animal Behaviors","Animal Structures"],"Animals and Their Parents","👪"),
      choice("hatch","Which animals hatch from eggs?",["Birds and reptiles","Dogs and cats","Cows and horses"],"Birds and reptiles","🥚"),
      choice("similar","Do offspring look exactly like their parents?",["Offspring look similar to their parents, but they do not look exactly the same.","Yes, they always look exactly the same.","No, they never look like their parents."],"Offspring look similar to their parents, but they do not look exactly the same.","🐣"),
      select("trait","___: a feature of a living thing.",["trait","life cycle","offspring"],"trait","🎨"),
      select("cycle","A ___ is how a living thing grows and lives.",["life cycle","trait","structure"],"life cycle","🔄"),
      choice("kittens","How are kittens and their mother alike and different?",["They have the same structures. They are different size and color.","They have different structures and the same size.","They are exactly the same."],"They have the same structures. They are different size and color.","🐱"),
      fixed("dogfirst","A dog grows. What comes FIRST?",["newborn puppy","young dog","adult dog"],"newborn puppy","🐶"),
      fixed("doglast","What comes LAST?",["adult dog","puppy","newborn puppy"],"adult dog","🐕")
    ],"Lesson 3: Animals and Their Parents. Birds and reptiles hatch from eggs. Offspring look similar to their parents, but they do not look exactly the same. trait: a feature of a living thing. A life cycle is how a living thing grows and lives. A dog grows: newborn puppy → puppy → young dog → adult dog."),
    sci("Lesson 4 · Animal Behaviors (29/10–06/11)","How does an animal’s behavior help it survive?",[
      choice("eq4","In Lesson 4 we learned: parents feed, protect, teach and take care of their young; baby birds make sounds to signal to their parents; a whale calf can swim right away. So the Essential Question of Lesson 4 is ___.",["How does an animal’s behavior help it survive?","What are the functions of different animal body parts?","How do plants grow?"],"How does an animal’s behavior help it survive?","❓"),
      choice("burrow","The Burrow: How does the mother groundhog communicate danger to her kits?",["She whistles.","She sings a song.","She claps her paws."],"She whistles.","📢"),
      choice("service","Some animals are trained to help people. What is the most common type of service animal?",["dogs","cats","birds"],"dogs","🦮"),
      choice("survive","Why do some young animals need their parents?",["They need their parents to protect and feed them because they cannot do it on their own.","They want to watch TV with them.","They do not need their parents."],"They need their parents to protect and feed them because they cannot do it on their own.","🌱")
    ],"Essential Question: How does an animal’s behavior help it survive? The mother groundhog whistles to communicate danger. Dogs are the most common type of service animal. Some young animals need their parents to protect and feed them because they cannot do it on their own."),
    sci("STEM Module Project and Module Wrap-up (10/11–13/11)","Design Protective Gear for a Sport · What keeps these animals safe?",[
      choice("gear","What must the protective gear do?",["Keep the players safe. It needs to protect at least one body part.","Help the players run faster.","Make the players look funny."],"Keep the players safe. It needs to protect at least one body part.","⛑️"),
      choice("tip","Tip for the project: think about ___.",["how animals protect themselves","what animals eat for lunch","how tall animals are"],"how animals protect themselves","💡"),
      choice("wrap","Module Wrap-up: What keeps these animals safe? The armadillo has a ___.",["shell","beak","pair of wings"],"shell","🛡️")
    ],"A school needs protective gear for its sports teams. The gear needs to protect at least one body part. Think about how animals protect themselves. The armadillo has a shell; a shell protects the animal’s body.")
  ];
  registerQuiz({
    id:"sci-u2m1-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Module 1 · Module Test (Lessons 1–4)",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:`Key concepts · Unit 2 Module 1: Animal Parents and Their Offspring · Class Diary ${RANGE}`,scoreByField:true,
      groups:groupsOf([["Module Opener","zoologist · Science Probe",1],["Lesson 1 · Animal Structures","Vocabulary · Inquiry · Sort Animals · Review",4],["Lesson 2 · Functions of Animal Structures","structure · function · protection",3],["Lesson 3 · Animals and Their Parents","offspring · trait · life cycle",1],["Lesson 4 · Animal Behaviors","Essential Question · signals · service animals",1],["STEM Module Project and Wrap-up","protective gear · What keeps these animals safe?",1]]),
      questions:TEST,readings:[notesCard("notes-sci-u2m1-t")]}
  });

  // ───── (3) Review: gộp mọi câu của các bài Science theo ngày trong Module 1 ─────
  const L2="Lesson 2 · Functions of Animal Structures",L3="Lesson 3 · Animals and Their Parents",L4="Lesson 4 · Animal Behaviors",STEM="STEM Module Project",WRAP="Module Wrap-up";
  const SOURCES=[["class-diary-2026-10-07-science",L2],["class-diary-2026-10-08-science",L2],["class-diary-2026-10-12-science",L2],["class-diary-2026-10-13-science",L2],
    ["class-diary-2026-10-15-science",L3],["class-diary-2026-10-16-science",L3],["class-diary-2026-10-20-science",L3],["class-diary-2026-10-22-science",L3],["class-diary-2026-10-23-science",L3],["class-diary-2026-10-27-science",L3],
    ["class-diary-2026-10-29-science",L4],["class-diary-2026-11-02-science",L4],["class-diary-2026-11-03-science",L4],["class-diary-2026-11-05-science",L4],["class-diary-2026-11-06-science",L4],
    ["class-diary-2026-11-10-science",STEM],["class-diary-2026-11-12-science",STEM],["class-diary-2026-11-13-science",WRAP]];
  const lessonOf=(q,lesson)=>/stem module/i.test(q.section)?STEM:lesson===L2&&/Lesson 3/i.test(q.section)?L3:lesson;
  const buckets=new Map([L2,L3,L4,STEM,WRAP].map(t=>[t,[]])),readings=[notesCard("notes-sci-u2m1-r")],links=new Map([[GAME_URL,{label:"Play the game: Animal behaviors review",url:GAME_URL}]]);
  for(const [id,lesson] of SOURCES){
    const src=(window.quizSources||{})[id];if(!src) continue;
    const day=src.uploadDate.slice(5).split("-").reverse().join("/");
    src.subject.questions.forEach(q=>{
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}}
      buckets.get(lessonOf(q,lesson)).push(copy);
    });
    (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
  }
  readings.push({id:"bonus-sci-u2m1",title:"Bonus · Video & game",byline:"All links from the Science Class Diaries of Module 1",mode:"bonus",links:[...links.values()],text:""});
  const parts=[...buckets].filter(([,list])=>list.length);
  registerQuiz({
    id:"sci-u2m1-review",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Module 1 · Review (all lessons)",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:`All Science classes of Unit 2 Module 1 · Class Diary 07/10–13/11/2026`,scoreByField:true,
      groups:groupsOf(parts.map(([t,list])=>[t,"",list.length])),questions:parts.flatMap(([,list])=>list),readings}
  });
})();
