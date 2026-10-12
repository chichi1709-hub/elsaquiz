// Quiz 09/10/2026 — Class Diary 09/10/2026 (LA Unit 2 Week 1 · Science Unit 2 Module 1 Lesson 2).
// Science gồm cả mục "Science Review" nằm trong phần CLOSE READING của diary.
// Nguồn: NKL/Tháng 10/Class Diary - 1A4 - 261009.pdf + nội dung các link trong diary.
// Ảnh: web/assets/2026-10-09/ (tạo bằng web/_reference/tao_anh_2026-10-09.py).
(()=>{
  const IMG=name=>`assets/2026-10-09/${name}.webp`;
  const L="assets/mascot/academy/language.webp",S="assets/mascot/academy/science.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  const order=(id,label,position,count,icon)=>({id,label,type:"select",choices:Array.from({length:count},(_,i)=>String(i+1)),answer:String(position),icon});
  // answers[0] là câu mẫu; các phần tử sau là cụm từ khoá (câu bé viết có đủ các từ đó là đúng).
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const rewrite=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,strict:true,icon});
  const card=img=>(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,layout:"icon-activity",fields,explain,hint,...extra});
  const photo=(section,image,text,fields,explain,hint)=>({section,img:IMG(image),text,type:"compound",fields,explain,hint});
  const la=card(L),sci=card(S);
  const notes=(id,title,text,byline)=>({id,title,byline,mode:"notes",text});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Link cô giáo giao trong Class Diary 09/10",mode:"bonus",links,text:""});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  // ───────────────────────── SCIENCE ─────────────────────────
  const SCI_Q=[
    // ── Science Review (mục 2 trong CLOSE READING) ──
    sci("Science Review · protection","Choose the correct meaning.",[
      choice("meaning","Protection ___.",["keeps things safe from harm","helps animals sleep","makes animals big"],"keeps things safe from harm","🛡️")
    ],"Protection: keeps things safe from harm.","protection = sự bảo vệ, giữ an toàn khỏi nguy hiểm."),
    photo("Science Review · Turtle","turtle","How does a turtle protect itself?",[
      choice("turtle","A turtle has a ___ to protect its body.",["hard shell","long neck","soft tail"],"hard shell","🐢")
    ],"A turtle has a hard shell to protect its body.","Nhìn mai rùa trong ảnh."),
    photo("Science Review · Hedgehog","hedgehog","How does a hedgehog protect itself?",[
      choice("hedgehog","A hedgehog has ___ to protect itself.",["sharp spines","big wings","webbed feet"],"sharp spines","🦔")
    ],"A hedgehog has sharp spines to protect itself.","Nhím cuộn tròn, lộ ra lớp gai nhọn."),
    photo("Science Review · Chameleon","chameleon","How does a chameleon protect itself?",[
      choice("chameleon","A chameleon can ___ to hide from predators.",["blend in with its surroundings","spray a bad-smelling liquid","fly away fast"],"blend in with its surroundings","🦎")
    ],"A chameleon can blend in with its surroundings to hide from predators. (predators = con vật đi săn con vật khác)","Tắc kè hoa đổi màu giống lá cây để trốn."),
    photo("Science Review · Skunk","skunk","How does a skunk protect itself?",[
      choice("skunk","A skunk ___ to protect itself.",["sprays a bad-smelling liquid","hides in a shell","climbs a tree"],"sprays a bad-smelling liquid","🦨")
    ],"A skunk sprays a bad-smelling liquid to protect itself.","Chồn hôi phun chất lỏng rất hôi."),
    photo("Science Review · Bear","bear-claws","How does a bear defend itself?",[
      choice("bear","A bear uses its ___ to defend itself.",["sharp claws","soft fur","small ears"],"sharp claws","🐻")
    ],"A bear uses its sharp claws to defend itself. (defend = protect)","Nhìn móng vuốt của gấu trong ảnh."),
    sci("Science Review · Match","Which animal is it?",[
      select("shell","It has a hard shell.",["turtle","hedgehog","chameleon","skunk","bear"],"turtle","🐢"),
      select("spines","It has sharp spines.",["turtle","hedgehog","chameleon","skunk","bear"],"hedgehog","🦔"),
      select("blend","It blends in with its surroundings.",["turtle","hedgehog","chameleon","skunk","bear"],"chameleon","🦎"),
      select("liquid","It sprays a bad-smelling liquid.",["turtle","hedgehog","chameleon","skunk","bear"],"skunk","🦨"),
      select("claws","It uses its sharp claws to defend itself.",["turtle","hedgehog","chameleon","skunk","bear"],"bear","🐻")
    ],"hard shell – turtle · sharp spines – hedgehog · blend in – chameleon · bad-smelling liquid – skunk · sharp claws – bear","Nối đặc điểm bảo vệ với đúng con vật."),
    // ── Inquiry Activity: Explore Animal Structures (Student Book tr.30-31) ──
    sci("Explore Animal Structures · Make a claim","Which structures do these animals use to get food?",[
      select("bear","bear",["claws","tongue","beak"],"claws","🐻"),
      select("crab","crab",["claws","tongue","beak"],"claws","🦀"),
      select("frog","frog",["claws","tongue","beak"],"tongue","🐸"),
      select("woodpecker","woodpecker",["claws","tongue","beak"],"beak","🐦")
    ],"Bears and crabs use claws. Frogs use their tongue. Woodpeckers use their beak.","Mỗi con vật dùng bộ phận nào để lấy thức ăn?"),
    sci("Explore Animal Structures · Bear","Structure and function of a bear.",[
      choice("legs","Strong legs help it ___.",["walk and run","catch food","keep warm"],"walk and run","🦵"),
      choice("claws","Sharp claws help it ___.",["catch food","keep warm","walk sideways"],"catch food","🐾"),
      choice("fur","Thick fur ___.",["keeps it warm","helps it catch food","helps it swim"],"keeps it warm","🧥")
    ],"Bear: Strong legs help it walk and run. Sharp claws help it catch food. Thick fur keeps it warm.","Mỗi bộ phận của gấu giúp nó làm gì?"),
    photo("Explore Animal Structures · Crab","crab","Structure and function of a crab.",[
      choice("shell","A hard shell ___.",["protects its body","keeps it warm","helps it fly"],"protects its body","🦀"),
      choice("claws","Two claws help it ___.",["catch food and protect itself","walk sideways","see far"],"catch food and protect itself","🦀"),
      choice("legs","Eight legs help it ___.",["walk sideways","catch food","jump high"],"walk sideways","🦀")
    ],"Crab: A hard shell protects its body. Two claws help it catch food and protect itself. Eight legs help it walk sideways.","Mỗi bộ phận của cua giúp nó làm gì?"),
    sci("Explore Animal Structures · Investigate","Put the steps in order. 1 = first.",[
      order("record","Record Data: Choose two animals. Tell how they get food.",3,3,"📝"),
      order("play","Play the simulation.",1,3,"💻"),
      order("observe","Observe how a bear, a crab, a frog, and a woodpecker use their structures.",2,3,"👀")
    ],"1. Play the simulation. · 2. Observe how a bear, a crab, a frog, and a woodpecker use their structures. · 3. Record Data.","Bước nào làm trước?"),
    sci("Explore Animal Structures · True or false","Read and choose TRUE or FALSE.",[
      tf("crablegs","A crab has eight legs.",true,"🦀"),
      tf("frog","A frog uses its beak to get food.",false,"🐸"),
      tf("bearfur","Thick fur keeps a bear warm.",true,"🐻"),
      tf("same","Bear claws and crab claws have the same shape and size.",false,"📏")
    ],"1. TRUE · 2. FALSE (frogs use their tongue) · 3. TRUE · 4. FALSE (the claws are different shape and size)","Đúng chọn TRUE, sai chọn FALSE."),
    sci("Explore Animal Structures · Communicate","Compare the animals. Write a full sentence.",[
      write("alike","How are bears and crabs alike when they get food?",["Both bears and crabs use claws to get food.","claws"],"🐻"),
      write("different","How are their claws different?",["The claws are different shape and size.","shape size","different shape","different size"],"🦀")
    ],"Both bears and crabs use claws to get food. The claws are different shape and size.","Viết câu đầy đủ bằng tiếng Anh: giống nhau ở đâu, khác nhau ở đâu?")
  ];
  registerQuiz({
    id:"class-diary-2026-10-09-science",
    uploadDate:"2026-10-09",
    subjectKey:"science",
    title:"Science",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"09/10/2026 · Science Review: Animal Protection · Explore Animal Structures",scoreByField:true,
      groups:groupsOf([["Science Review: Animal Protection","Close Reading · Science Review",7],["Inquiry Activity: Explore Animal Structures","Student Book pages 30 and 31",6]]),
      questions:SCI_Q,
      readings:[notes("notes-sci-0910","Ghi nhớ — Science","Protection: keeps things safe from harm.\nA turtle has a hard shell to protect its body.\nA hedgehog has sharp spines to protect itself.\nA chameleon can blend in with its surroundings to hide from predators.\nA skunk sprays a bad-smelling liquid to protect itself.\nA bear uses its sharp claws to defend itself.","Unit 2 Module 1 · Lesson 2")]}
  });

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  const LA_Q=[
    // Homework check · Practice Book tr.87
    la("Spelling · Use the clues","Use the clues to write a spelling word.",[
      fill("men","starts like miss + ends like ten","men","🔤"),
      fill("beg","starts like back + ends like peg","beg","🔤"),
      fill("hen","starts like hat + ends like ten","hen","🐔"),
      fill("read","starts like rock + ends like head","read","📖"),
      fill("spill","starts like spin + ends like hill","spill","🥛")
    ],"men · beg · hen · read · spill (Practice Book, page 87)","Lấy âm đầu của từ thứ nhất + phần đuôi của từ thứ hai."),
    // Phonemic Awareness · Practice Book tr.82
    la("Phonemic Awareness · Same middle sound","Which picture has the same middle sound as the first word?",[
      choice("pig","pig →",["six","mop"],"six","🐷"),
      choice("nap","nap →",["duck","sad"],"sad","😴"),
      choice("bell","bell →",["dog","hen"],"hen","🔔"),
      choice("box","box →",["hop","nut"],"hop","📦"),
      choice("pen","pen →",["sock","neck"],"neck","🖊️")
    ],"pig – six (/i/) · nap – sad (/a/) · bell – hen (/e/) · box – hop (/o/) · pen – neck (/e/) (Practice Book, page 82)","Đọc to, nghe âm ở GIỮA của 2 từ có giống nhau không."),
    // Grammar: Nouns
    la("Grammar · Identify the nouns","Choose ALL the nouns in each sentence.",[
      multi("dog","The dog is eating cookies!",["The","dog","is","eating","cookies"],["dog","cookies"],"🐶"),
      multi("cat","The cat is drinking milk.",["cat","is","drinking","milk"],["cat","milk"],"🐱"),
      multi("john","John went to the shop.",["John","went","to","shop"],["John","shop"],"🛒"),
      multi("children","The children are playing.",["The","children","are","playing"],["children"],"🧒")
    ],"dog, cookies · cat, milk · John, shop · children","Danh từ = tên người, con vật, nơi chốn, đồ vật."),
    // Game Wordwall "Nouns vs. Action Verbs" + ví dụ trong video StoryBots (link diary 09/10).
    la("Grammar · Noun or action verb?","Is it a noun or an action verb?",[
      select("castle","castle",["noun","action verb"],"noun","🏰"),
      select("swing","swing",["noun","action verb"],"action verb","🛝"),
      select("rabbit","rabbit",["noun","action verb"],"noun","🐇"),
      select("eat","eat",["noun","action verb"],"action verb","🍽️"),
      select("doctor","doctor",["noun","action verb"],"noun","👩‍⚕️"),
      select("sleep","sleep",["noun","action verb"],"action verb","😴"),
      select("kite","kite",["noun","action verb"],"noun","🪁"),
      select("jump","jump",["noun","action verb"],"action verb","🦘")
    ],"Nouns (person, place, thing): castle, rabbit, doctor, kite · Action verbs: swing, eat, sleep, jump. A verb is an action word.","Danh từ = người, nơi chốn, đồ vật · Action verb = từ chỉ hành động (làm gì)."),
    // Phonics practice
    la("Phonics · Short e","Choose the words with the short e sound.",[
      multi("words","Choose 4 words.",["Rex","deaf","block","step","clock","smell"],["Rex","deaf","step","smell"],"🔤"),
      multi("meg","Tell Meg to get ten eggs.",["Tell","Meg","to","get","ten","eggs"],["Tell","Meg","get","ten","eggs"],"🥚"),
      multi("fox","The red fox fled to its den.",["The","red","fox","fled","its","den"],["red","fled","den"],"🦊")
    ],"Rex, deaf, step, smell have short e (deaf uses ea). block and clock have short o. · Tell, Meg, get, ten, eggs · red, fled, den (fox has short o).","Đọc to từng từ, chọn mọi từ có âm /e/ như trong bed."),
    // Game Baamboozle "Short e" (link diary 09/10) — thay ảnh bằng emoji, bỏ lựa chọn không phải từ thật.
    la("Phonics · Short e game","Look at the picture. Choose the word.",[
      choice("hen","🐔 This is a ___.",["hen","net","vet"],"hen","🐔"),
      choice("bed","🐱 Where is the cat? It is in a ___.",["bed","web","jet"],"bed","🛏️"),
      choice("web","🕷️ Where is the spider? It is in the ___.",["den","jet","web"],"web","🕸️"),
      choice("leg","🦵 This is a ___.",["pen","leg","net"],"leg","🦵"),
      fill("ten","Spell the number 10.","ten","🔟")
    ],"hen · bed · web · leg · ten — all short e words.","Nhìn hình, chọn từ có âm short e đúng với hình."),
    la("Phonics · -ed words","What sound does -ed make?",[
      select("yelled","yelled",["/t/","/d/","/id/"],"/d/","📣"),
      select("dressed","dressed",["/t/","/d/","/id/"],"/t/","👗"),
      select("headed","headed",["/t/","/d/","/id/"],"/id/","🙂"),
      select("packed","packed",["/t/","/d/","/id/"],"/t/","🎒"),
      select("smelled","smelled",["/t/","/d/","/id/"],"/d/","👃"),
      select("missed","missed",["/t/","/d/","/id/"],"/t/","🎯")
    ],"yelled /d/ · dressed /t/ · headed /id/ (head ends in d) · packed /t/ · smelled /d/ · missed /t/","Từ gốc tận cùng t/d → /id/; âm thì thầm (k, s, p) → /t/; âm có tiếng (l) → /d/."),
    // Mechanics: Commas in a Series
    la("Commas in a series · Review","Choose the sentence with the commas in the right places.",[
      choice("swim","I like to…",["I like to swim, run, and do gymnastics.","I like to swim run and do gymnastics.","I like, to swim run, and do gymnastics."],"I like to swim, run, and do gymnastics.","🏊"),
      choice("zoo","At the zoo…",["At the zoo I saw Clara Moon Anna and Sophia.","At the zoo I saw Clara, Moon, Anna, and Sophia.","At the zoo I saw, Clara Moon, Anna and Sophia."],"At the zoo I saw Clara, Moon, Anna, and Sophia.","🦁")
    ],"I like to swim, run, and do gymnastics. · At the zoo I saw Clara, Moon, Anna, and Sophia.","Đặt dấu phẩy sau mọi từ trong danh sách, trừ từ cuối."),
    la("Commas in a series · Fix the sentences","Add commas and fix the sentences. Write the whole sentence.",[
      rewrite("today","We have English Science and Maths today.",["We have English, Science, and Maths today."],"📚"),
      rewrite("food","I like noodles, rice pizza and salad.",["I like noodles, rice, pizza, and salad."],"🍕"),
      rewrite("pets","Cats dogs and turtles are pets.",["Cats, dogs, and turtles are pets."],"🐢")
    ],"We have English, Science, and Maths today. · I like noodles, rice, pizza, and salad. · Cats, dogs, and turtles are pets. (Mechanics 9/10/2026)","Gõ lại cả câu, thêm đủ dấu phẩy, giữ dấu chấm cuối câu."),
    la("Commas in a series · Worksheet","Which sentence has commas where needed?",[
      choice("pets","1.",["Dogs, cats, and fish make good pets.","Dogs cats, and fish make good pets.","Dogs, cats and, fish make good pets."],"Dogs, cats, and fish make good pets.","🐟"),
      choice("colors","2.",["My favorite colors are blue green and red.","My favorite colors are blue, green, and red.","My favorite, colors are blue green and red."],"My favorite colors are blue, green, and red.","🎨"),
      choice("park","3.",["There are swings slides, and bars at the park.","There are, swings slides and bars at the park.","There are swings, slides, and bars at the park."],"There are swings, slides, and bars at the park.","🛝")
    ],"Dogs, cats, and fish make good pets. · My favorite colors are blue, green, and red. · There are swings, slides, and bars at the park. (homework worksheet)","Đếm danh từ trong danh sách: số dấu phẩy ít hơn 1.")
  ];
  registerQuiz({
    id:"class-diary-2026-10-09-language",
    uploadDate:"2026-10-09",
    subjectKey:"language",
    title:"Language Arts",
    subject:{name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle:"09/10/2026 · Unit 2 Week 1 · Spelling clues, middle sound, nouns, short e & -ed, commas",scoreByField:true,
      groups:groupsOf([["Spelling","Homework check · Practice Book page 87",1],["Phonemic Awareness","Practice Book page 82 · middle sounds",1],["Grammar: Nouns","Identify the nouns · Noun or action verb",2],["Phonics","Short e and -ed words",3],["Mechanics: Commas in a Series","Review · Notebook · Worksheet",3]]),
      questions:LA_Q,
      readings:[
        notes("notes-la-0910","Ghi nhớ — 09/10","A noun names a person, place, or thing.\nSay a word and say the middle sound: pig – six /i/, bell – hen /e/.\nIn a list with three or more nouns, a comma is used after all but the last noun.","Unit 2 Week 1"),
        bonus("bonus-la-0910",[
          {label:"Video: Nouns",url:"https://www.youtube.com/watch?v=_II6ySgUtWc&t=1s"},
          {label:"Game: Nouns vs action verbs",url:"https://wordwall.net/resource/26230545/english/nouns-vs-action-verb"},
          {label:"Game: Phonics",url:"https://www.baamboozle.com/game/1117076"}
        ])
      ]}
  });
})();
