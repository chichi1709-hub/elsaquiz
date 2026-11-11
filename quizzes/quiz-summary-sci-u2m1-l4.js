// TỔNG HỢP KIẾN THỨC — Science Unit 2 Module 1 · Lesson 4: Animal Behaviors (Class Diary từ 29/10/2026, sau bộ Lesson 3).
// 2 bài trong nhóm Tổng hợp (uploadDate "weekly-…"), cùng cách với quiz-summary-sci-u2m1-l3.js:
//   (1) Key Concepts Test: câu hỏi chắt lọc kiến thức chính của Lesson 4 (≤ 30 ý → 1 Part);
//   (2) Review: gộp TOÀN BỘ câu của các bài Science theo ngày trong SOURCES, xếp theo chủ đề, mang theo bài đọc và link Bonus.
// Diary mới của Lesson 4: thêm id vào SOURCES, thêm dòng NOTES, thêm câu chính vào Key Concepts Test (≤ 30).
(()=>{
  const S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const sci=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const KEY="weekly-sci-u2m1-l4",LABEL="Tổng hợp kiến thức · Unit 2 Module 1 · Lesson 4",RANGE="29/10–10/11/2026";
  const BEHAVIOR=["Taking care","Feed","Protect"],GROUPS=["Feeding","Protecting","Teaching"],VOC=["behavior","learn","signal"];

  const NOTES=[
    "📅 Class Diary: 10/11/2026",
    "(10/11) STEM Module Project: Design Protective Gear for a Sport",
    "(10/11) A school needs protective gear for its sports teams. Design protective gear to keep the players safe. The gear needs to protect at least one body part.",
    "(10/11) Tip: Think about how animals protect themselves.",
    "(10/11) The shell protects the turtle.",
    "(10/11) Materials: Paper bowl · Elastic band · Colors · Pencils · Tape · Bubble wrap",
    "(10/11) Test Your Model: We will wear it on our head and it will keep our head safe.",
    "📅 Class Diary: 06/11/2026",
    "(06/11) Essential Question: How does an animal’s behavior help it survive?",
    "(06/11) Animal behaviorists learn about animals. Dr. Cathleen Cox works at the Los Angeles Zoo.",
    "(06/11) Some animals are trained to help people. Dogs are the most common type of service animal.",
    "(06/11) Summarize It: Baby animals make a sound or movement. They send a signal to their parents.",
    "(06/11) A baby animal makes noise to call a parent when it is hungry. Parents will feed. Parents will protect.",
    "📅 Class Diary: 05/11/2026",
    "(05/11) Behavior: the way a person, animal, or thing acts or does something.",
    "(05/11) Learn: to gain knowledge or skill.",
    "(05/11) Signal: a sound or movement that gives information.",
    "(05/11) The Burrow: young groundhogs are called kits. Their mother gave them milk to help them grow. She whistles to communicate danger.",
    "(05/11) Some animal parents care for their offspring. These behaviors help their offspring survive.",
    "(05/11) Polar bears feed their offspring. They show their cubs how to find food. The lioness protects her cub.",
    "(05/11) Baby birds make sounds. They also open their mouths when they are ready to eat.",
    "(05/11) Some animals are born knowing behaviors that help them survive. A whale calf can swim right away.",
    "📅 Class Diary: 03/11/2026",
    "(03/11) Inquiry Activity: What Animals Do (cont.) · Communicate (Student Book, page 56)",
    "(03/11) Feeding: The heron, cow, penguin and pig give their babies food or milk.",
    "(03/11) Protecting: The lion, kangaroo, hen and elephant keep their babies safe.",
    "(03/11) Teaching: The duck, orangutan, cheetah and polar bear show their babies how to do things.",
    "(03/11) Some young animals need their parents to protect and feed them because they cannot do it on their own.",
    "(03/11) Parents feed, protect, teach and take care of their young.",
    "📅 Class Diary: 02/11/2026",
    "(02/11) Listening Comprehension: The Hungry Groundhog — the groundhog digs holes all over the farm to find food.",
    "(02/11) He finds lots of carrots. At the end, the friends have a carrot feast in the barn.",
    "📅 Class Diary: 29/10/2026",
    "(29/10) Lesson 4: Animal Behaviors",
    "(29/10) There are some things that ducklings are born knowing how to do and some things they have to learn from their parents.",
    "(29/10) The adult monkey is cleaning the baby monkey because it wants to take care of the baby.",
    "(29/10) Parents feed, protect, teach, and take care of their young.",
    "(29/10) Taking care: Parents groom their offspring to clean them.",
    "(29/10) Feed: Parents get and give food to their offspring.",
    "(29/10) Protect: Parents keep their offspring safe from harm."
  ];

  // ───── (1) Key Concepts Test ─────
  const TEST=[
    sci("Lesson 4 · Animal Behaviors","Choose the answer.",[
      choice("title","In Lesson 4 we learned what animals do: an adult monkey cleans its baby, parents feed their young and keep them safe, ducklings learn from their parents, a groundhog digs holes to find food… So the topic of Lesson 4 is called ___.",["Animal Behaviors","Animals and Their Parents","Functions of Animal Structures"],"Animal Behaviors","🐾"),
      choice("probe","How do baby animals like ducklings survive?",["They are born knowing how to do some things, and they learn some things from their parents.","They know nothing and learn nothing.","They never need their parents."],"They are born knowing how to do some things, and they learn some things from their parents.","🦆"),
      choice("monkey","The adult monkey is cleaning the baby monkey. Why?",["It wants to take care of the baby.","It wants to play a game.","It is hungry."],"It wants to take care of the baby.","🐒")
    ],"Lesson 4: Animal Behaviors. There are some things that ducklings are born knowing how to do and some things they have to learn from their parents. The adult monkey cleans the baby monkey because it wants to take care of the baby."),
    sci("How animal parents help their young","Make a prediction. Then match the behavior.",[
      multi("help","How do animal parents help their young? Choose 4.",["feed","protect","teach","take care of","ignore","scare"],["feed","protect","teach","take care of"],"🔮"),
      select("groom","Parents groom their offspring to clean them.",BEHAVIOR,"Taking care","🪮"),
      select("food","Parents get and give food to their offspring.",BEHAVIOR,"Feed","🍼"),
      select("safe","Parents keep their offspring safe from harm.",BEHAVIOR,"Protect","🛡️")
    ],"Parents feed, protect, teach, and take care of their young. Taking care: parents groom their offspring to clean them. Feed: parents get and give food to their offspring. Protect: parents keep their offspring safe from harm."),
    sci("Inquiry Activity · What Animals Do","Student Book, pages 54–55.",[
      fixed("first","What do you do FIRST?",["Look at the photo cards.","Sort the cards into three groups.","Write or draw how the animals help their young."],"Look at the photo cards.","1️⃣"),
      fixed("next","You looked at the photo cards. What do you do NEXT?",["Sort the cards into three groups.","Look at the photo cards.","Write or draw how the animals help their young."],"Sort the cards into three groups.","➡️"),
      fixed("last","What do you do LAST?",["Write or draw how the animals help their young.","Look at the photo cards.","Sort the cards into three groups."],"Write or draw how the animals help their young.","🔚")
    ],"1. Look at the photo cards. 2. Sort the cards into three groups. 3. Record Data. 4. Write or draw how the animals help their young."),
    sci("Inquiry Activity · Sort the cards (03/11)","Feeding: Parents give food. · Protecting: Parents keep babies safe. · Teaching: Parents show babies how.",[
      {...select("cow","The calf drinks milk from its mother.",GROUPS,"Feeding","🐄"),img:"assets/2026-11-03/card-cow.webp",bigImg:true},
      {...select("kangaroo","The baby kangaroo, called a joey, stays safe and warm in its mother’s pouch.",GROUPS,"Protecting","🦘"),img:"assets/2026-11-03/card-kangaroo.webp",bigImg:true},
      {...select("cheetah","The cheetah cubs watch their mother. They learn how to hunt.",GROUPS,"Teaching","🐆"),img:"assets/2026-11-03/card-cheetah.webp",bigImg:true},
      {...select("penguin","The penguin feeds its chick food from its beak.",GROUPS,"Feeding","🐧"),img:"assets/2026-11-03/card-penguin.webp",bigImg:true},
      {...select("elephant","The big elephants stand around the baby to keep it safe.",GROUPS,"Protecting","🐘"),img:"assets/2026-11-03/card-elephant.webp",bigImg:true}
    ],"Feeding: The heron, cow, penguin and pig give their babies food or milk. Protecting: The lion, kangaroo, hen and elephant keep their babies safe. Teaching: The duck, orangutan, cheetah and polar bear show their babies how to do things."),
    sci("Communicate (03/11)","Student Book, page 56.",[
      choice("survive","How do these behaviors help the young animals survive?",["Some young animals need their parents to protect and feed them because they cannot do it on their own.","Young animals never need their parents.","Young animals can find all their food on the first day."],"Some young animals need their parents to protect and feed them because they cannot do it on their own.","🌱")
    ],"Some young animals need their parents to protect and feed them because they cannot do it on their own. Yes, parents do feed, protect, teach and take care of their young."),
    sci("Listening Comprehension · The Hungry Groundhog (02/11)","Animals look for food.",[
      choice("do","What does the groundhog do to find food?",["He digs holes.","He climbs trees.","He flies in the sky."],"He digs holes.","⛏️"),
      choice("find","What does the groundhog find?",["lots of carrots","a big nest","dog food"],"lots of carrots","🥕"),
      choice("end","What happens at the end of the story?",["Groundhog brings lots of carrots to the barn, and the friends have a feast.","Groundhog goes to sleep in a hole all winter.","The friends fill all the holes with mud."],"Groundhog brings lots of carrots to the barn, and the friends have a feast.","🎉")
    ],"The groundhog digs holes all over the farm to find food. He finds lots of carrots, and the friends have a carrot feast in the barn."),
    sci("Vocabulary · Signals and behaviors (05/11)","The Burrow · Explain: Animal Behaviors · Close Reading: Animal Messages.",[
      select("v-behavior","the way a person, animal, or thing acts or does something",VOC,"behavior","🐾"),
      select("v-learn","to gain knowledge or skill",VOC,"learn","📘"),
      select("v-signal","a sound or movement that gives information",VOC,"signal","🚦"),
      choice("danger","The Burrow: How does the groundhog communicate danger to her kits?",["She whistles.","She sings a song.","She claps her paws."],"She whistles.","📢"),
      choice("birds","How do baby birds signal to their parents?",["Baby birds make sounds. They also open their mouths when they are ready to eat.","Baby birds fly away from the nest.","Baby birds sleep all day."],"Baby birds make sounds. They also open their mouths when they are ready to eat.","🐦"),
      {...choice("polar","What are the polar bears doing?",["Polar bears feed their offspring. They show their cubs how to find food.","Polar bears are sleeping in a den.","Polar bears are running away from their cubs."],"Polar bears feed their offspring. They show their cubs how to find food.","🐻‍❄️"),img:"assets/2026-11-05/sci-polar-bears.webp",bigImg:true},
      {...choice("whale","Some animals are born knowing behaviors that help them survive. Which animal can swim right away?",["a whale calf","a baby bird","a groundhog kit"],"a whale calf","🐋"),img:"assets/2026-11-05/sci-whale.webp",bigImg:true}
    ],"behavior: the way a person, animal, or thing acts or does something · learn: to gain knowledge or skill · signal: a sound or movement that gives information. The mother groundhog whistles. Baby birds make sounds and open their mouths when they are ready to eat. Polar bears feed their offspring and show their cubs how to find food. A whale calf can swim right away."),
    sci("Lesson 4 Review (06/11)","Essential Question · Summarize It.",[
      choice("eq","In Lesson 4 we learned: parents feed, protect, teach and take care of their young; baby birds make sounds to signal to their parents; a whale calf can swim right away. So the Essential Question of Lesson 4 is ___.",["How does an animal’s behavior help it survive?","What are the functions of animal structures?","Where do animals live together?"],"How does an animal’s behavior help it survive?","❓"),
      choice("summarize","How do baby animals get what they need to survive?",["Baby animals make a sound or movement. They send a signal to their parents.","Baby animals go to the store.","Baby animals sleep until they are big."],"Baby animals make a sound or movement. They send a signal to their parents.","📣")
    ],"Essential Question: How does an animal’s behavior help it survive? Baby animals make a sound or movement. They send a signal to their parents."),
    sci("STEM Module Project · Design Protective Gear for a Sport (10/11)","Science Book, pages 69–70.",[
      {...choice("gear","A school needs protective gear for its sports teams. What must the gear do?",["Keep the players safe. It needs to protect at least one body part.","Help the players run faster.","Make the players look funny."],"Keep the players safe. It needs to protect at least one body part.","🛡️"),img:"assets/2026-11-10/sci-gear-69.webp",bigImg:true},
      choice("work","Our class made protective gear with a paper bowl, an elastic band and bubble wrap. How will it work?",["We will wear it on our head and it will keep our head safe.","We will wear it on our feet to run fast.","We will eat with it."],"We will wear it on our head and it will keep our head safe.","⛑️")
    ],"A school needs protective gear for its sports teams. Design protective gear to keep the players safe. The gear needs to protect at least one body part. Think about how animals protect themselves. We will wear it on our head and it will keep our head safe.")
  ];
  registerQuiz({
    id:"sci-u2m1-l4-test",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Lesson 4 · Key Concepts Test",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:`Key concepts · Unit 2 Module 1 · Lesson 4: Animal Behaviors · Class Diary ${RANGE}`,scoreByField:true,
      groups:groupsOf([["Lesson 4","Animal Behaviors · Science Probe · Vervet Monkeys",1],["How animal parents help their young","feed · protect · teach · take care of",1],["Inquiry Activity","What Animals Do · FIRST, NEXT, LAST · Sort the cards",2],["Communicate","Student Book page 56",1],["Listening Comprehension","The Hungry Groundhog",1],["Signals and behaviors","behavior · learn · signal · The Burrow · Animal Messages",1],["Lesson 4 Review","Essential Question · Summarize It",1],["STEM Module Project","Design Protective Gear for a Sport",1]]),
      questions:TEST,
      readings:[{id:"notes-sci-l4",title:"Remember — Science Lesson 4",byline:`Animal Behaviors · Class Diary ${RANGE}`,mode:"notes",text:NOTES.join("\n")}]}
  });

  // ───── (2) Review: gộp mọi câu của các bài Science theo ngày thuộc Lesson 4 ─────
  const SOURCES=[["class-diary-2026-10-29-science"],["class-diary-2026-11-02-science"],["class-diary-2026-11-03-science"],["class-diary-2026-11-05-science"],["class-diary-2026-11-06-science"],["class-diary-2026-11-10-science"]];
  const TOPICS=[["Stories and texts",/listen|close reading|story|order of events/i],["Inquiry activities",/inquiry|investigate|record|prediction/i],["STEM Module Project",/stem module/i],["Animal Behaviors",/.*/]];
  const buckets=new Map(TOPICS.map(([t])=>[t,[]])),readings=[{id:"notes-sci-l4r",title:"Remember — Science Lesson 4",byline:"Animal Behaviors",mode:"notes",text:NOTES.join("\n")}],links=new Map();
  for(const [id,filter] of SOURCES){
    const src=(window.quizSources||{})[id];if(!src) continue;
    const day=src.uploadDate.slice(5).split("-").reverse().join("/");
    src.subject.questions.filter(q=>!filter||filter(q)).forEach(q=>{
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(src.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}}
      const topic=(TOPICS.find(([,re])=>re.test(q.section))||TOPICS.at(-1))[0];buckets.get(topic).push(copy);
    });
    if(!filter) (src.subject.readings||[]).filter(r=>r.mode==="bonus").forEach(r=>(r.links||[]).forEach(l=>{if(!links.has(l.url)) links.set(l.url,l)}));
  }
  if(links.size) readings.push({id:"bonus-sci-l4",title:"Bonus · Video & game",byline:"Links from the Class Diaries of Lesson 4",mode:"bonus",links:[...links.values()],text:""});
  const parts=[...buckets].filter(([,list])=>list.length);
  registerQuiz({
    id:"sci-u2m1-l4-review",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"science",
    title:"Science Lesson 4 · Review (all lessons)",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:`All Lesson 4 classes · Unit 2 Module 1 · Animal Behaviors · Class Diary ${RANGE}`,scoreByField:true,
      groups:groupsOf(parts.map(([t,list])=>[t,"",list.length])),questions:parts.flatMap(([,list])=>list),readings}
  });
})();
