// Bài kiểm tra Science Unit 2 Module 1 · Lesson 2 (bản web của đề PDF
// File ghép bài/Science/Unit2Module1_Science_Lesson2_Test_261009.pdf).
// Chuyển dạng: nối → dropdown · tick → chọn nhiều · điền từ trong khung → dropdown + Word Bank ·
// câu viết tay trên dòng kẻ → gõ câu (chấm theo từ khoá) + 1 câu chọn đáp án.
// Ảnh dùng lại từ web/assets/2026-10-07, 2026-10-08, 2026-10-09.
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
  // answers[0] là câu mẫu; các phần tử sau là cụm từ khoá (câu bé viết có đủ các từ đó là đúng).
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  const q=(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img:S,layout:"icon-activity",fields,explain,hint,...extra});
  const photo=(section,img,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img,fields,explain,hint,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};

  const FUNCTIONS_1=["help animals eat meat","help fish swim","help birds fly","helps elephants pick up food and drink water"];
  const FUNCTIONS_2=["helps giraffes reach leaves","protects the turtle","help rabbits jump","help ducks swim"];
  const PROTECT=["strong horns and legs","thick mane, sharp teeth, sharp claws","bad smelling liquid (very stinky), good ears"];
  const BEAR=["keeps it warm","help it walk and run","help it catch food"];
  const CRAB=["help it walk sideways","protects its body","help it catch food and protect itself"];

  const QUESTIONS=[
    // ── PART A · Structure and Function ──
    q("Structure and Function · Word bank","Fill in the blanks. Use the words in the box.",[
      bank("structure","A body part is called a ___.",["structure","function"],"structure","🦷"),
      bank("function","What the body part does is called its ___.",["structure","function"],"function","🐦")
    ],"Structure: a body part. Function: what the body part does.","Structure = bộ phận cơ thể · Function = việc bộ phận đó làm.",{wordBank:["structure","function"]}),
    photo("Science Probe · Tiger",A("07","tiger-probe"),"Look at the Science Probe. Choose the correct answer.",[
      choice("student","Which student tells what an animal part DOES?",["Steve","Roosevelt","Toni"],"Roosevelt","🐅"),
      choice("legs","The tiger uses its legs for …",["hearing","eating","running"],"running","🐅")
    ],"Roosevelt tells a function: Tigers do use their legs for running. Steve and Toni only describe body parts.","Bạn nào nói bộ phận đó DÙNG ĐỂ LÀM GÌ?"),
    photo("Discover the Phenomenon · Hummingbirds",A("07","hummingbird-video"),"Think about the hummingbird video.",[
      choice("wings","What do the hummingbird's wings help it do?",["fly","swim","dig"],"fly","🐦"),
      choice("blurry","Why are the wings blurry in the video?",["They are wet.","They are moving very fast.","They are not moving."],"They are moving very fast.","💨")
    ],"The wings help the bird to fly. The hummingbird's wings were moving very fast.","Nhớ lại video chim ruồi ngày 01/10."),
    q("Structure and Function · Match 1","Match the animal structure with its function.",[
      select("wings","Wings",FUNCTIONS_1,"help birds fly","🪽"),
      select("fins","Fins",FUNCTIONS_1,"help fish swim","🐟"),
      select("trunk","Trunk",FUNCTIONS_1,"helps elephants pick up food and drink water","🐘"),
      select("teeth","Sharp teeth",FUNCTIONS_1,"help animals eat meat","🦷")
    ],"Wings → help birds fly · Fins → help fish swim · Trunk → helps elephants pick up food and drink water · Sharp teeth → help animals eat meat","Chọn chức năng đúng cho mỗi bộ phận (bảng ôn 02/10)."),
    q("Structure and Function · Match 2","Match the animal structure with its function.",[
      select("shell","Shell",FUNCTIONS_2,"protects the turtle","🐢"),
      select("webbed","Webbed feet",FUNCTIONS_2,"help ducks swim","🦆"),
      select("backlegs","Strong back legs",FUNCTIONS_2,"help rabbits jump","🐇"),
      select("neck","Long neck",FUNCTIONS_2,"helps giraffes reach leaves","🦒")
    ],"Shell → protects the turtle · Webbed feet → help ducks swim · Strong back legs → help rabbits jump · Long neck → helps giraffes reach leaves","Chọn chức năng đúng cho mỗi bộ phận (bảng ôn 02/10)."),
    q("Structure and Function · True or false","Read and choose TRUE or FALSE.",[
      tf("structure","A structure is what the body part does.",false,"🦷"),
      tf("fins","Fins help fish swim.",true,"🐟"),
      tf("webbed","Webbed feet help rabbits jump.",false,"🦆"),
      tf("neck","A long neck helps giraffes reach leaves.",true,"🦒")
    ],"1. FALSE (structure = a body part; function = what it does) · 2. TRUE · 3. FALSE (webbed feet help ducks swim) · 4. TRUE","Đúng chọn TRUE, sai chọn FALSE."),

    // ── PART B · Animal Protection ──
    q("Animal Protection · Read","Read the text. Then fill in the blanks.",[
      bank("harm","Protection keeps things safe from ___.",["harm","structures","homes"],"harm","🛡️"),
      bank("structures","Some animals can use their ___ for protection.",["harm","structures","homes"],"structures","🦔"),
      bank("homes","Other animals build ___ for protection.",["harm","structures","homes"],"homes","🏠")
    ],"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection.","Đọc đoạn Animal Protection ở trên rồi chọn từ.",{wordBank:["harm","structures","homes"],readingId:"protection"}),
    q("Animal Protection · Structures","Which structures does the text say help animals live?",[
      multi("live","Choose 4.",["nose","mouth","tail","eyes","ears","wings"],["nose","mouth","eyes","ears"],"🦊")
    ],"Animals can also use structures like their nose, mouth, eyes, and ears to help them live. (tail, wings are not in the text)","Tìm trong câu cuối của đoạn văn.",{readingId:"protection"}),
    q("Sea turtle","What does each part of the sea turtle do?",[
      choice("shell","Shell",["helps the turtle fly","protects the turtle's body","helps the turtle hear"],"protects the turtle's body","🐢"),
      choice("front","Front flippers",["help the turtle swim and steer","help the turtle eat","help the turtle sleep"],"help the turtle swim and steer","🌊"),
      choice("back","Back flippers",["help the turtle see","help the turtle breathe","help the turtle balance and move in the water"],"help the turtle balance and move in the water","🌊"),
      choice("mouth","Mouth",["helps the turtle swim","helps the turtle eat sea plants and small animals","protects the turtle's body"],"helps the turtle eat sea plants and small animals","👄"),
      choice("head","Head",["helps the turtle see, breathe and find food","helps the turtle steer","helps the turtle balance"],"helps the turtle see, breathe and find food","👀")
    ],"Shell: protects the turtle's body · Front flippers: help the turtle swim and steer · Back flippers: help the turtle balance and move in the water · Mouth: helps the turtle eat sea plants and small animals · Head: helps the turtle see, breathe and find food","Nhớ lại hình con rùa biển ngày 02/10."),

    // ── PART C · How animals protect themselves ──
    photo("Protect · Turtle",A("09","turtle"),"How does the animal protect itself?",[
      choice("turtle","A turtle has a … to protect its body.",["long neck","hard shell","soft tail"],"hard shell","🐢")
    ],"A turtle has a hard shell to protect its body.","Nhìn ảnh rồi chọn."),
    photo("Protect · Hedgehog",A("09","hedgehog"),"How does the animal protect itself?",[
      choice("hedgehog","A hedgehog has … to protect itself.",["sharp spines","big wings","webbed feet"],"sharp spines","🦔")
    ],"A hedgehog has sharp spines to protect itself.","Nhìn ảnh rồi chọn."),
    photo("Protect · Chameleon",A("09","chameleon"),"How does the animal protect itself?",[
      choice("chameleon","A chameleon can … to hide from predators.",["spray a bad-smelling liquid","fly away fast","blend in with its surroundings"],"blend in with its surroundings","🦎")
    ],"A chameleon can blend in with its surroundings to hide from predators.","predators = con vật đi săn con vật khác."),
    photo("Protect · Skunk",A("09","skunk"),"How does the animal protect itself?",[
      choice("skunk","A skunk … to protect itself.",["sprays a bad-smelling liquid","hides in a shell","climbs a tree"],"sprays a bad-smelling liquid","🦨")
    ],"A skunk sprays a bad-smelling liquid to protect itself.","Nhìn ảnh rồi chọn."),
    photo("Protect · Bear",A("09","bear-claws"),"How does the animal defend itself?",[
      choice("bear","A bear uses its … to defend itself.",["small ears","soft fur","sharp claws"],"sharp claws","🐻")
    ],"A bear uses its sharp claws to defend itself. (defend = protect)","Nhìn ảnh rồi chọn."),
    photo("Protect · Lion",A("08","protect-lion"),"Match each animal with how it protects itself.",[
      select("lion","lion",PROTECT,"thick mane, sharp teeth, sharp claws","🦁"),
      select("skunk","skunk",PROTECT,"bad smelling liquid (very stinky), good ears","🦨"),
      select("horns","the animal with big curved horns",PROTECT,"strong horns and legs","🐐")
    ],"lion → thick mane, sharp teeth, sharp claws · skunk → bad smelling liquid (very stinky), good ears · the animal with horns → strong horns and legs","Science Book trang 27 — nối mỗi con vật với cách nó tự bảo vệ."),
    q("Animal protection · True or false","Read and choose TRUE or FALSE.",[
      tf("skunk","A skunk protects itself with sharp claws.",false,"🦨"),
      tf("lion","A lion can use its sharp teeth for protection.",true,"🦁"),
      tf("chameleon","A chameleon hides from predators.",true,"🦎"),
      tf("hedgehog","A hedgehog has a hard shell.",false,"🦔"),
      tf("homes","Animals never build homes for protection.",false,"🏠")
    ],"1. FALSE (bad-smelling liquid) · 2. TRUE · 3. TRUE · 4. FALSE (sharp spines; the turtle has a hard shell) · 5. FALSE (Other animals build homes for protection.)","Đúng chọn TRUE, sai chọn FALSE."),
    // PDF: viết 1 câu trên dòng kẻ → web: gõ câu (chấm theo từ khoá) + chọn câu đúng.
    photo("Protect · Write about the lion",A("08","protect-lion"),"How can a lion protect itself?",[
      write("sentence","Write one sentence.",["A lion uses its sharp teeth and sharp claws to protect itself.","teeth","claws","mane"],"✍️"),
      choice("best","Choose the best sentence.",["A lion uses its sharp claws to protect itself.","A lion uses its soft tail to fly.","A lion hides in a shell."],"A lion uses its sharp claws to protect itself.","🦁")
    ],"A lion uses its sharp teeth and sharp claws to protect itself. (A lion has a thick mane.)","Gõ câu tiếng Anh có tên ít nhất 1 bộ phận: teeth, claws hoặc mane."),

    // ── PART D · Inquiry: Animals Move ──
    q("Animals Move · Materials","What did we use to make the animal model?",[
      multi("materials","Choose 3.",["construction paper","glue stick","brass fasteners","paint","scissors","crayons"],["construction paper","brass fasteners","scissors"],"✂️")
    ],"Materials: construction paper, brass fasteners, scissors.","Hôm 06/10 cả lớp làm mô hình con vật bằng những gì?"),
    q("Animals Move · Rabbit","The rabbit model.",[
      choice("move","How does a rabbit move?",["A rabbit swims.","A rabbit hops.","A rabbit flies."],"A rabbit hops.","🐇"),
      choice("parts","Which structures help the rabbit move?",["its ears","its nose","its legs and feet"],"its legs and feet","🦶"),
      order("research","Research how an animal moves.",1,3,"🔍"),
      order("record","Record Data in the table.",2,3,"📝"),
      order("model","Make a model to show how your animal moves.",3,3,"✂️")
    ],"A rabbit hops. Rabbits use their legs and feet to move. Steps: 1. Research · 2. Record Data · 3. Make a model.","3 bước cuối: đánh số 1, 2, 3 theo thứ tự làm."),

    // ── PART E · Inquiry: Explore Animal Structures ──
    q("Explore Animal Structures · Get food","Which structure does each animal use to get food?",[
      bank("bear","Bears use their ___.",["claws","tongue","beak"],"claws","🐻"),
      bank("crab","Crabs use their ___.",["claws","tongue","beak"],"claws","🦀"),
      bank("frog","Frogs use their ___.",["claws","tongue","beak"],"tongue","🐸"),
      bank("woodpecker","Woodpeckers use their ___.",["claws","tongue","beak"],"beak","🐦")
    ],"Bears and crabs use claws. Frogs use their tongue. Woodpeckers use their beak.","Mỗi con vật dùng bộ phận nào để lấy thức ăn?",{wordBank:["claws","tongue","beak"]}),
    q("Explore Animal Structures · Bear","Match the bear's structure with its function.",[
      select("legs","Strong legs",BEAR,"help it walk and run","🐻"),
      select("claws","Sharp claws",BEAR,"help it catch food","🐻"),
      select("fur","Thick fur",BEAR,"keeps it warm","🐻")
    ],"Strong legs → help it walk and run · Sharp claws → help it catch food · Thick fur → keeps it warm","Mỗi bộ phận của gấu giúp nó làm gì?"),
    photo("Explore Animal Structures · Crab",A("09","crab"),"Match the crab's structure with its function.",[
      select("shell","A hard shell",CRAB,"protects its body","🦀"),
      select("claws","Two claws",CRAB,"help it catch food and protect itself","🦀"),
      select("legs","Eight legs",CRAB,"help it walk sideways","🦀")
    ],"A hard shell → protects its body · Two claws → help it catch food and protect itself · Eight legs → help it walk sideways","Mỗi bộ phận của cua giúp nó làm gì?"),
    q("Bear and crab · True or false","Read and choose TRUE or FALSE.",[
      tf("legs","A crab has eight legs.",true,"🦀"),
      tf("frog","A frog uses its beak to get food.",false,"🐸"),
      tf("fur","Thick fur keeps a bear warm.",true,"🐻"),
      tf("same","Bear claws and crab claws have the same shape and size.",false,"📏")
    ],"1. TRUE · 2. FALSE (frogs use their tongue) · 3. TRUE · 4. FALSE (The claws are different shape and size.)","Đúng chọn TRUE, sai chọn FALSE."),
    // PDF: viết câu so sánh trên dòng kẻ → web: gõ câu (chấm theo từ khoá) + chọn câu đúng.
    q("Bear and crab · Compare","Compare the bear and the crab.",[
      write("alike","How are they alike when they get food? Write one sentence.",["Both bears and crabs use claws to get food.","claws"],"✍️"),
      choice("different","How are their claws different?",["The claws are different shape and size.","Only bears have claws.","The claws are the same."],"The claws are different shape and size.","📏")
    ],"Both bears and crabs use claws to get food. The claws are different shape and size.","Gõ câu tiếng Anh có từ claws."),
  ];

  registerQuiz({
    id:"science-unit2-module1-lesson2-test",
    uploadDate:"2026-10-12",
    subjectKey:"science",
    title:"Science – Lesson 2 Test",
    subject:{name:"Science",icon:"🐾",accent:"#31a66d",soft:"#f5efff",subtitle:"Unit 2 Module 1 · Lesson 2: Functions of Animal Structures · Test (Class Diary 01–09/10)",scoreByField:true,
      groups:groupsOf([
        ["Structure and Function","Structure: a body part · Function: what the body part does",6],
        ["Animal Protection","Student Book page 26 · sea turtle",3],
        ["How Animals Protect Themselves","Science Book page 27 · Science Review 09/10",8],
        ["Inquiry Activity: Animals Move","Student Book pages 24-25",2],
        ["Inquiry Activity: Explore Animal Structures","Student Book pages 30-31",5]
      ]),
      questions:QUESTIONS,
      readings:[
        {id:"protection",title:"Animal Protection",byline:"Student Book, page 26",mode:"reference",images:[A("07","protection-text")],
          text:"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live."}
      ]}
  });
})();
