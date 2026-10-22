// Quiz 22/10/2026 — Class Diary 22/10/2026.
// Science: Lesson 3 Animals and Their Parents · Close Reading: Animal Traits (Student Book pages 44–45).
// (Diary ghi "Unit 2 Module 2" — cùng module với các bài trước: Animal Parents and Their Offspring.)
// Math: Lesson 33 (picture graph) + homework check (Using Data from Real Graphs).
// Language Arts: hôm nay là bài kiểm tra Unit 2 Weeks 1 and 2 → không có bài mới (ôn ở "Tổng hợp kiến thức tuần (W1&2)").
// Diary không có link. Ảnh: web/assets/2026-10-22/ (tạo bằng web/_reference/tao_anh_2026-10-22.py).
(()=>{
  const IMG=name=>`assets/2026-10-22/${name}.webp`;
  const S="assets/mascot/academy/science.webp",M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const card=img=>(section,text,fields,explain,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,...extra});
  const sci=card(S),math=card(M);
  const notes=(id,title,lines,byline)=>({id,title,byline,mode:"notes",text:lines.join("\n")});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── SCIENCE ─────────────────────────
  const traitsText="Animal Traits\nA trait is a feature of a living thing. Traits describe how an animal looks. The way an animal acts is also a trait.\n\nAnimals of the same kind look like each other. A raccoon and her babies look alike. They have the same black mask. A mother cow and her calf look alike. They have a similar color. Offspring can look different from its parents, too. Look at the photo on the page. The calf looks different from its parent.\n\n(Raccoon photo) It has a marking on its face.\nAnimals of the same kind sound the same. They act the same.";
  const SCI_Q=[
    sci("Close Reading · Animal Traits","Read the text. Then answer.",[
      choice("trait","A trait is ___.",["a feature of a living thing","a kind of home","a food"],"a feature of a living thing","🔎"),
      multi("kinds","Inspect: Which kinds of traits do you read about? Choose 2.",["how an animal looks","the way an animal acts","the name of the animal","where the animal goes to school"],["how an animal looks","the way an animal acts"],"✏️"),
      choice("same","Animals of the same kind ___.",["look like each other","never look alike","are always different colors"],"look like each other","👀")
    ],"A trait is a feature of a living thing. Traits describe how an animal looks. The way an animal acts is also a trait. Animals of the same kind look like each other.",{readingId:"traits"}),
    sci("Close Reading · Raccoons and cows","Find evidence in the text.",[
      choice("raccoon","A raccoon and her babies look alike. What do they have?",["the same black mask","long necks","wings"],"the same black mask","🦝"),
      choice("cow","A mother cow and her calf look alike. They have a similar ___.",["color","beak","shell"],"color","🐄"),
      choice("diff","Find Evidence: Which sentence tells how the calf is different from its parent?",["The calf looks different from its parent.","A mother cow and her calf look alike.","They have a similar color."],"The calf looks different from its parent.","🔍"),
      choice("marking","Caption: The raccoon has a ___ on its face.",["marking","hat","shell"],"marking","🎭")
    ],"A raccoon and her babies have the same black mask. A mother cow and her calf have a similar color. But the calf looks different from its parent, too. The raccoon has a marking on its face."),
    sci("Close Reading · Sound and act","Animals of the same kind sound the same. They act the same.",[
      multi("same","Which traits can an adult and its offspring share? Choose 3.",["how they look","how they sound","how they act","their name"],["how they look","how they sound","how they act"],"🔊"),
      choice("explain","Explain a trait that is the same for an adult and its offspring.",["They both move the same way and eat the same food.","They have the same name.","They live in different worlds."],"They both move the same way and eat the same food.","🐾"),
      choice("people","Make Connections: Which is a trait you can share with your partner?",["the color of your eyes","your lunch box","your pencil"],"the color of your eyes","👫")
    ],"Animals of the same kind sound the same and act the same. A trait that is the same for an adult and its offspring: they both move the same way and eat the same food. People share traits too, like the color of their eyes or hair."),
    sci("Lesson 3 · Review","Animals and Their Parents.",[
      choice("young","Young animals look ___ their parents.",["similar to","exactly the same as","nothing like"],"similar to","🐣"),
      choice("offspring","Offspring means ___.",["the young of an animal","the parent","the home"],"the young of an animal","👶")
    ],"Young animals look similar to their parents, but not exactly the same. Offspring are the young of an animal.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-22-science",
    uploadDate:"2026-10-22",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"22/10/2026 · Lesson 3: Animals and Their Parents · Close Reading: Animal Traits",scoreByField:true,
      groups:groupsOf([["Close Reading: Animal Traits","Student Book pages 44 and 45",3],["Lesson 3 Review","Animals and Their Parents",1]]),
      questions:SCI_Q,
      readings:[
        notes("notes-sci-2210","Remember — Science",[
          "📅 Class Diary: 22/10/2026",
          "(22/10) trait: a feature of a living thing",
          "(22/10) Traits describe how an animal looks. The way an animal acts is also a trait.",
          "(22/10) Animals of the same kind look like each other. They sound the same. They act the same.",
          "(22/10) A raccoon and her babies have the same black mask. A mother cow and her calf have a similar color.",
          "(22/10) Offspring can look different from its parents, too."
        ],"Unit 2 · Lesson 3"),
        {id:"traits",title:"Animal Traits",byline:"Close Reading · Student Book pages 44–45",images:[IMG("cow-calf"),IMG("raccoons")],text:traitsText}
      ]}
  });

  // ───────────────────────── MATH · Lesson 33 (picture graph) ─────────────────────────
  const row=(g,b)=>`${"⚪".repeat(g)}\n${"⚫".repeat(b)}`;
  const MATH_Q=[
    math("Homework check · Using Data from Real Graphs","Look at the graph. ⚪ = gray · ⚫ = black.",[
      fixed("same1",`${row(5,7)}\nIs there the same number of colored counters?`,["yes","no"],"no","⚖️"),
      fixed("more1","Which color has more?",["gray","black"],"black","⚫"),
      num("nop1","How many counters do not have a partner?",2,"🔢"),
      fixed("same2",`${row(8,5)}\nIs there the same number of colored counters?`,["yes","no"],"no","⚖️"),
      fixed("more2","Which color has more?",["gray","black"],"gray","⚪"),
      num("nop2","How many counters do not have a partner?",3,"🔢"),
      num("journal","There are 6 gray counters. How many black counters do you draw so 1 black counter does not have a partner?",7,"✏️")
    ],"Graph 1: 5 gray, 7 black → not the same, black has more, 2 have no partner. Graph 2: 8 gray, 5 black → gray has more, 3 have no partner. Journal: 6 gray → draw 7 black, so 1 black counter has no partner."),
    math("Lesson 33 · Picture graph: Favorite Pets","Look at the picture graph. Each 🐾 stands for one vote.",[
      num("cat","🐱 Cat 🐾🐾🐾🐾\n🐟 Fish 🐾\n🐶 Dog 🐾🐾\nHow many children chose Cat?",4,"🐱"),
      num("dog","How many children chose Dog as their favorite pet?",2,"🐶"),
      num("more","How many more children chose Dog than chose Fish?",1,"➕"),
      num("all","How many children in all voted for a favorite pet?",7,"🧮"),
      fixed("most","Which pet has the most votes?",["Cat","Fish","Dog"],"Cat","🏆")
    ],"Each picture stands for one vote. Four children chose Cat. Two children chose Dog. One more child chose Dog than Fish (2 − 1 = 1). Count all the pictures: 4 + 1 + 2 = 7 children voted.",{readingId:"pets"}),
    math("Lesson 33 · Word Bank","picture graph",[
      choice("pg","A graph that uses pictures to show data is a ___.",["picture graph","ten-frame","number line"],"picture graph","📊"),
      choice("stand","In the Favorite Pets graph, each picture stands for ___.",["one vote","two votes","ten votes"],"one vote","🐾")
    ],"Word Bank: picture graph. Each picture stands for one vote.")
  ];
  registerQuiz({
    id:"math-lesson-33-picture-graph",
    uploadDate:"2026-10-22",
    subjectKey:"math",
    title:"Math – Lesson 33 (picture graph)",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"22/10/2026 · Lesson 33 · Picture graph · Using data from real graphs",scoreByField:true,
      groups:groupsOf([["Homework check","Using Data from Real Graphs",1],["Lesson 33: Picture graph","Favorite Pets",2]]),
      questions:MATH_Q,
      readings:[
        notes("notes-math-2210","Remember — Math Lesson 33",[
          "📅 Class Diary: 22/10/2026",
          "(22/10 · L33) Word Bank: picture graph",
          "(22/10 · L33) In a picture graph, each picture stands for one vote.",
          "(22/10 · L33) Count all the pictures to find how many in all: 4 + 1 + 2 = 7 children voted.",
          "(22/10 · L33) Counters that do not have a partner show which color has more."
        ],"Lesson 33"),
        {id:"pets",title:"Picture Graph: Favorite Pets",byline:"Math · Lesson 33",mode:"reference",images:[IMG("picture-graph-1"),IMG("picture-graph-2"),IMG("word-bank")],text:"Look at the picture graph. How many children chose Cat as their favorite pet? Each picture stands for one vote. Four children chose Cat.\nHow many children chose Dog? Two children chose Dog.\nHow many more children chose Dog than chose Fish? One more child chose Dog.\nHow many children in all voted? Count all the pictures. Seven children voted."}
      ]}
  });
})();
