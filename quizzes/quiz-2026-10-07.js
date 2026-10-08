// Quiz 07/10/2026 — gộp Class Diary 01, 02, 05, 06, 07/10/2026 (Unit 2).
// Nguồn: NKL/Tháng 10/Class Diary - 1A4 - 2610xx.pdf + "Good Job, Ben!.pdf" + nội dung các link trong diary.
// Ảnh: web/assets/2026-10-07/ (tạo bằng web/_reference/tao_anh_2026-10-07.py).
(()=>{
  const IMG=name=>`assets/2026-10-07/${name}.webp`;
  const S="assets/mascot/academy/science.webp";
  // Xoay vòng thứ tự lựa chọn (cố định theo nội dung câu) để đáp án đúng không luôn nằm ở đầu.
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const multi=(id,label,choices,answer,icon)=>({id,label,type:"multi",choices:rotate(choices,id+label),answer,icon});
  const question=(section,text,fields,explain,extra={})=>({section,text,type:"compound",layout:"icon-activity",img:S,fields,explain,...extra});
  // Các dạng lấy từ đề PDF "Unit 1 Full Review" (bỏ dạng vẽ/tô/đếm cạnh vì không chấm được trên web):
  // TRUE/FALSE · đánh số thứ tự sự việc · viết câu trả lời đầy đủ · viết lại câu (xếp từ, dấu phẩy).
  const tf=(id,label,isTrue,icon)=>({id,label,type:"choice",choices:["TRUE","FALSE"],answer:isTrue?"TRUE":"FALSE",icon});
  const yesNo=(id,label,isYes,icon)=>({id,label,type:"choice",choices:["YES","NO"],answer:isYes?"YES":"NO",icon});
  const order=(id,label,position,count,icon)=>({id,label,type:"select",choices:Array.from({length:count},(_,i)=>String(i+1)),answer:String(position),icon});
  // answers[0] là câu mẫu hiện trong đáp án; các phần tử sau là cụm từ khoá (bé viết câu có đủ các từ đó là đúng).
  const write=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,flexible:true,icon});
  // Viết lại nguyên câu: phải đúng chữ hoa, dấu phẩy và dấu chấm.
  const rewrite=(id,label,answers,icon)=>({id,label,type:"fill",answer:answers,strict:true,icon});
  // Gợi ý tiếng Việt cho từng câu (như tham số hint= của đề PDF), tra theo tên section.
  const HINTS={
    "Big Book · Fantasy":"Nhìn bìa truyện: con bò trông thế nào, đang làm gì? Fantasy = truyện tưởng tượng, không thể có thật.",
    "Big Book · Retell":"Kể lại truyện: Millie chờ ai mỗi ngày, và để làm gì?",
    "Big Book · Problem and solution":"Nhớ lại cả câu chuyện: bác đưa thư làm gì để Millie quý bác? Cuối truyện thế nào?",
    "Big Book · True or false":"Đọc từng câu, đúng với truyện chọn TRUE, sai chọn FALSE.",
    "Good Job, Ben! · Realistic fiction":"Realistic fiction = chuyện bịa nhưng có thể xảy ra ngoài đời thật.",
    "Good Job, Ben! · Jobs in town":"Tìm trong truyện: ai làm công việc này?",
    "Good Job, Ben! · Details":"Đọc lại trang có bánh mì, chú chó Jet và thư viện.",
    "Good Job, Ben! · True or false":"Đối chiếu với truyện: đúng chọn TRUE, sai chọn FALSE.",
    "Good Job, Ben! · Story order":"Đánh số 1 cho việc xảy ra đầu tiên, 4 cho việc xảy ra cuối cùng.",
    "Story elements":"Characters = nhân vật · Setting = nơi diễn ra · Events = các sự việc.",
    "Good Job, Ben! · Character, Setting, Events":"Nhìn trang đầu truyện: ai, ở đâu, làm gì?",
    "Good Job, Ben! · Short e":"Đọc to từng từ, nghe âm /e/ ở giữa như trong bed.",
    "The Red Hat · Vocabulary":"grabs = cầm/chộp lấy thật nhanh. Jen mặc đồ gì, làm nghề gì?",
    "The Red Hat · Beginning":"Đầu truyện: chuông reo, Jen làm gì?",
    "The Red Hat · Middle and End":"Giữa và cuối truyện: Jen lái xe, leo thang, cứu chú mèo Rex.",
    "The Red Hat · Write a full sentence":"Viết thành câu đầy đủ bằng tiếng Anh, có chữ hoa đầu câu (không chọn A/B/C).",
    "The Red Hat · Setting and Events":"Mỗi sự việc xảy ra ở đâu?",
    "Oral Vocabulary":"Nối mỗi từ với nghĩa đúng nguyên văn cô dạy ngày 07/10.",
    "Essential Question":"Câu hỏi lớn của tuần: cộng đồng cần những công việc nào?",
    "High-Frequency Words":"5 từ: again (lại) · help (giúp) · new (mới) · there (ở đó) · use (dùng).",
    "High-Frequency Words · Good Job, Ben!":"Các câu này có trong truyện Good Job, Ben!",
    "High-Frequency Words · Game":"Câu trong game Baamboozle cô cho chơi trên lớp.",
    "Spelling · Sort the words":"Nhìn phần đuôi của từ: -ead, -en hay -eg?",
    "Spelling · Missing vowel":"Đọc to tên bức tranh, nghe âm ở giữa rồi gõ 1 chữ cái.",
    "Short e · In a sentence":"Đọc to từng từ, chọn mọi từ có âm /e/ như trong bed.",
    "Short e · Stand or sit?":"Như video trên lớp: có âm short e thì đứng lên!",
    "Spelling · Change one letter":"Đổi 1 chữ cái để thành từ mới có âm short e.",
    "-ed ending · What does it mean?":"-ed dùng cho việc đã xảy ra rồi (quá khứ).",
    "-ed ending · Add -ed":"Viết từ + ed thành 1 từ mới, ví dụ help → helped.",
    "-ed ending · Choose the word":"Chọn từ viết đúng có đuôi -ed.",
    "-ed ending · Pronunciation":"Đọc to, nghe âm cuối: /t/, /d/ hay /id/? Từ tận cùng t hoặc d thì đọc /id/.",
    "Beginning sounds":"Âm ĐẦU tiên của từ.",
    "Middle and final sounds":"MIDDLE = âm ở giữa · FINAL = âm cuối cùng.",
    "Odd one out":"Đọc to cả 3 từ, chọn từ KHÔNG có âm short e.",
    "Nouns · What is a noun?":"Noun = danh từ: tên người, nơi chốn hoặc đồ vật.",
    "Nouns · Person, place, or thing?":"person = người · place = nơi chốn · thing = đồ vật.",
    "Nouns · Is it a noun?":"Có phải tên người, nơi chốn, đồ vật không? Từ chỉ hành động hay kích thước thì không phải.",
    "Nouns · Find the noun":"Tìm từ là tên người, con vật, nơi chốn hoặc đồ vật.",
    "Nouns · Find all the nouns":"Chọn TẤT CẢ danh từ trong câu.",
    "Nouns · Game":"Câu trong game Baamboozle trên lớp.",
    "Nouns · Person, place, thing, or animal?":"Slide ngày 07/10: danh từ có thể là người, nơi chốn, đồ vật hoặc con vật.",
    "Commas in a series · The rule":"Liệt kê từ 3 danh từ trở lên: đặt dấu phẩy sau mọi danh từ trừ danh từ cuối.",
    "Commas in a series · Which is correct?":"Đếm số danh từ, số dấu phẩy luôn ít hơn 1.",
    "Commas in a series · Correct or not?":"Kiểm tra từng danh từ (trừ cái cuối) đã có dấu phẩy phía sau chưa.",
    "Commas in a series · Write it correctly":"Gõ lại cả câu: thêm dấu phẩy và dấu chấm cuối câu.",
    "Word order":"Xếp lại các từ cho đúng thứ tự, viết hoa chữ đầu câu, kết thúc bằng dấu chấm.",
    "Writing trait":"Một câu nói về 1 ý. Viết ngay ngắn trên dòng kẻ.",
    "Structure and Function":"Structure = bộ phận cơ thể · Function = việc bộ phận đó làm.",
    "Science Probe · Functions of Animal Parts":"Bạn nào nói bộ phận đó DÙNG ĐỂ LÀM GÌ?",
    "Discover the Phenomenon · Hummingbirds":"Nhớ video chim ruồi: cánh dùng để làm gì, vì sao trông bị mờ?",
    "Animal structures":"Chọn chức năng đúng cho mỗi bộ phận (bảng ôn tập ngày 02/10).",
    "Vocabulary · protection":"protection = sự bảo vệ.",
    "Read: Animal Protection":"Đọc đoạn văn Animal Protection ở trên rồi trả lời.",
    "Sea turtle":"Nhớ hình con rùa biển: mỗi bộ phận giúp rùa làm gì?",
    "Science · True or false":"Đúng chọn TRUE, sai chọn FALSE.",
    "Science · Write a full sentence":"Viết thành câu đầy đủ bằng tiếng Anh.",
    "Inquiry Activity · Materials":"Hôm 06/10 cả lớp làm mô hình con vật cử động được bằng những gì?",
    "Inquiry Activity · Rabbit":"Con thỏ di chuyển thế nào, nhờ bộ phận nào?"
  };
  const withHints=questions=>questions.map(item=>({...item,hint:item.hint||HINTS[item.section]||""}));

  // ───────────────────────── LANGUAGE ARTS ─────────────────────────
  // Unit 2 Week 1 · Essential Question: What jobs need to be done in a community?
  const L="assets/mascot/academy/language.webp";
  const fill=(id,label,answer,icon,opts={})=>({id,label,type:"fill",answer:Array.isArray(answer)?answer:[answer],icon,...opts});
  const la=(section,text,fields,explain,extra={})=>({section,text,type:"compound",layout:"icon-activity",img:L,fields,explain,...extra});
  const benStory=["Ben and Mom head to town.\nIt is a big trip.\nThere is a lot to see.","Ben and Mom will get on the bus.\nThe driver stops on this block.\nGood job!","Ben and Mom can not cross yet.\nStop! Stop! She can help.\nBig job!","Ben and Mom can walk.\nSix men use a drill and fill cracks.\nIt will look new again.\nWet job!","Ben and Mom step in for bread.\nBen sniffs. It smells good. Yum!\nMom gets ten.\nHot job!","Ben and Mom get Jet.\nJet licks Ben.\nThe vet helped Jet get well quick.\nPet job!","Ben and Mom stop to get books.\nBen can get help from Miss Glenn.\nGlad job!","What did Ben get?\nWhat has he read?\nBen read books on jobs.\nGood job, Ben!"];
  // Gom câu theo phần; start/end của từng group được tính tự động.
  const LA_QUESTIONS=[],LA_GROUPS=[];
  const part=(title,subtitle,items)=>{LA_GROUPS.push({title:`${LA_GROUPS.length+1}. ${title}`,subtitle,start:LA_QUESTIONS.length,end:LA_QUESTIONS.length+items.length-1});LA_QUESTIONS.push(...items)};
  const LA_READINGS=[
    {id:"good-job-ben",title:"Good Job, Ben!",byline:"Shared Read · Reading and Writing Companion, page 14 · Realistic Fiction",images:benStory.map((_,i)=>IMG(`good-job-ben-${String(i+1).padStart(2,"0")}`)),text:benStory.join("\n\n")}
  ];

  // ── Phần 1: Đọc hiểu & Từ vựng ──
  part("Big Book: Millie Waits for the Mail","Listening Comprehension · Fantasy (01/10)",[
    {section:"Big Book · Fantasy",img:IMG("millie-cover"),text:"Look at the cover. Answer each question.",type:"compound",fields:[
      choice("meaning","Fantasies are made-up stories with characters, settings, and events that ___.",["could not exist in real life","could happen in real life"],"could not exist in real life","✨"),
      choice("look","What does the cow look like?",["big, funny","small, sad","tiny, scary"],"big, funny","🐄"),
      choice("doing","What is the cow doing on the cover?",["looking around","sleeping","eating grass"],"looking around","👀")
    ],explain:"Millie Waits for the Mail is a fantasy. Fantasies are made-up stories with characters, settings, and events that could not exist in real life. The cow is big, funny and she is looking around. • Truyện tưởng tượng: chuyện bịa, không thể có thật."},
    la("Big Book · Retell","Retell the story.",[
      choice("waits","Millie waits for the ___ every day.",["mail carrier","bus driver","vet"],"mail carrier","📬"),
      choice("why","Why does Millie wait for him?",["so she can jump out and scare him","so she can get a letter","so she can eat lunch"],"so she can jump out and scare him","😱")
    ],"So far, I read that Millie waits for the mail carrier every day so she can jump out and scare him. • Millie chờ bác đưa thư mỗi ngày để nhảy ra hù bác."),
    // Cốt truyện lấy từ Big Book trong link Google Drive của diary 01/10.
    la("Big Book · Problem and solution","Think about the whole story.",[
      choice("chase","How does the mail carrier ride away from Millie?",["on his yellow bicycle","in a red bus","on a tractor"],"on his yellow bicycle","🚲"),
      choice("idea","How does the mail carrier try to make Millie like him?",["He brings her a package.","He gives her a hat.","He hides in a barrel."],"He brings her a package.","🎁"),
      choice("package","What happens to the package?",["The tractor flattens it.","Millie opens it.","The farmer eats it."],"The tractor flattens it.","📦"),
      choice("end","At the end, what does Millie love to do?",["deliver the mail","scare the mail carrier","sleep all day"],"deliver the mail","📬")
    ],"The mail carrier rides a yellow bicycle. He brings Millie a package so she will like him, but it lands under the farmer's tractor and is flattened. Millie crushes his bicycle by accident, so at the end Millie helps deliver the mail. • Cuối truyện Millie thích nhất là đi phát thư."),
    la("Big Book · True or false","Read and choose TRUE or FALSE.",[
      tf("cow","Millie is a cow.",true,"🐄"),
      tf("scare","Millie likes to scare the mail carrier.",true,"😱"),
      tf("farmer","The farmer thinks Millie's game is fun.",false,"👨‍🌾"),
      tf("end","At the end, Millie helps deliver the mail.",true,"📬")
    ],"1. TRUE · 2. TRUE · 3. FALSE (the farmer does not think it is fun — his packages arrive broken) · 4. TRUE")
  ]);

  part("Shared Read: Good Job, Ben!","Realistic Fiction · Read the whole story first (02/10 – 05/10)",[
    la("Good Job, Ben! · Realistic fiction","Choose the correct answer.",[
      choice("meaning","Realistic fiction is a made-up story. It has characters that do things that ___.",["could happen in real life","could never happen"],"could happen in real life","🏙️"),
      choice("which","Which story is realistic fiction?",["Good Job, Ben!","Millie Waits for the Mail"],"Good Job, Ben!","📗")
    ],"Remember, realistic fiction is a genre. It is a made-up story. It has characters that do things that could happen in real life. Millie (a cow that scares the mail carrier) is a fantasy.",{readingId:"good-job-ben"}),
    la("Good Job, Ben! · Jobs in town","Who does each job in the story?",[
      choice("bus","Who stops the bus on this block?",["the driver","the vet","Miss Glenn"],"the driver","🚌"),
      choice("cross","Who helps Ben and Mom cross the road?",["the lollipop lady (crossing guard)","the baker","the vet"],"the lollipop lady (crossing guard)","🛑"),
      choice("drill","What do the six men use to fill cracks?",["a drill","a bus","a book"],"a drill","🚧"),
      choice("bread","Who sells bread to Ben's mom?",["the baker","the driver","Miss Glenn"],"the baker","🍞")
    ],"The driver stops on this block. The lollipop lady (crossing guard) helps them cross the road. Six men use a drill and fill cracks. The baker sells bread to Ben's mom."),
    la("Good Job, Ben! · Details","Choose the correct answer.",[
      choice("ten","Ben and Mom step in for bread. Mom gets ___.",["ten","six","two"],"ten","🔟"),
      choice("jet","Who helped Jet get well quick?",["the vet","the baker","the driver"],"the vet","🐶"),
      choice("glenn","Ben can get help from Miss Glenn to get ___.",["books","bread","a bus"],"books","📚"),
      choice("read","What did Ben read?",["books on jobs","books on cats","books on cars"],"books on jobs","📖")
    ],"Mom gets ten. The vet helped Jet get well quick. Ben and Mom stop to get books. Ben can get help from Miss Glenn. Ben read books on jobs."),
    la("Good Job, Ben! · True or false","Read and choose TRUE or FALSE.",[
      tf("bus","Ben and Mom get on the bus.",true,"🚌"),
      tf("cross","Ben and Mom cross the road at once.",false,"🛑"),
      tf("six","Mom gets six.",false,"🍞"),
      tf("vet","The vet helped Jet get well.",true,"🐶")
    ],"1. TRUE · 2. FALSE (Ben and Mom can not cross yet.) · 3. FALSE (Mom gets ten.) · 4. TRUE",{readingId:"good-job-ben"}),
    la("Good Job, Ben! · Story order","Put the events in order. 1 = first, 4 = last.",[
      order("men","Six men use a drill and fill cracks.",2,4,"🚧"),
      order("bus","Ben and Mom get on the bus.",1,4,"🚌"),
      order("books","Ben and Mom stop to get books.",4,4,"📚"),
      order("bread","Ben and Mom step in for bread.",3,4,"🍞")
    ],"1. Ben and Mom get on the bus. · 2. Six men use a drill and fill cracks. · 3. Ben and Mom step in for bread. · 4. Ben and Mom stop to get books."),
    la("Story elements","Choose the correct word.",[
      choice("characters","___ are the people or animals in a story.",["Characters","Settings","Events"],"Characters","🧑"),
      choice("setting","The ___ is where the story takes place.",["setting","event","character"],"setting","🗺️"),
      choice("events","The ___ are what happen in the story.",["events","characters","settings"],"events","🎬")
    ],"Characters are the people or animals in a story. The setting is where the story takes place. The events are what happen in the story."),
    la("Good Job, Ben! · Character, Setting, Events","Look at the beginning of the story.",[
      choice("who","Characters:",["Ben and Ben's mom","Jen and Jim","Millie the cow"],"Ben and Ben's mom","👩‍👦"),
      choice("where","Setting:",["in the city","on a farm","in the sea"],"in the city","🏙️"),
      choice("what","Event:",["They go on a big trip.","They go to sleep.","They build a house."],"They go on a big trip.","🚌")
    ],"Character: Ben and Ben's mom · Setting: in the city · Event: They go on a big trip. (Reading and Writing Companion, page 29)",{readingId:"good-job-ben"}),
    la("Good Job, Ben! · Short e","Find words with the short e sound as in bed.",[
      // Không dùng head/get/help: các từ này đã được khoanh sẵn trên trang sách (lộ đáp án).
      multi("shorte","Choose the 3 words from the story with short e.",["step","ten","vet","Mom","bus","big"],["step","ten","vet"],"🛏️")
    ],"step, ten, vet have the short e sound /e/ (like bed, bread). Mom (o), bus (u), big (i) do not.")
  ]);

  part("Anchor Text: The Red Hat","Realistic Fiction · Literature Anthology, page 6 (06/10 – 07/10)",[
    {section:"The Red Hat · Vocabulary",img:IMG("red-hat-cover"),text:"Build vocabulary.",type:"compound",fields:[
      choice("grabs","grabs means ___.",["picks up quickly","puts down slowly","looks at"],"picks up quickly","✊"),
      choice("job","What is Jen's job?",["a firefighter","a baker","a vet"],"a firefighter","🧑‍🚒")
    ],explain:"grabs: picks up quickly. Jen is a firefighter (Read about a firefighter's exciting job)."},
    la("The Red Hat · Beginning","What happens first?",[
      choice("wakes","What wakes Jen up?",["the bell","the dog","the sun"],"the bell","🔔"),
      choice("next","What does she do next?",["She grabs the red hat.","She eats bread.","She goes to sleep."],"She grabs the red hat.","⛑️"),
      choice("fast","Why is it important for Jen to move fast?",["Because she needs to fight the fire.","Because she wants to play.","Because she is late for school."],"Because she needs to fight the fire.","🔥")
    ],"The bell wakes Jen up. She grabs the red hat. She needs to fight the fire."),
    la("The Red Hat · Middle and End","What happens when the bell rings again?",[
      choice("drive","What does Jen do after the bell rings again?",["She drives the truck.","She reads a book.","She bakes bread."],"She drives the truck.","🚒"),
      choice("brave","How does the author show that Jen is brave?",["She climbs high up the ladder.","She sits on a chair.","She hides in the firehouse."],"She climbs high up the ladder.","🪜"),
      choice("help","How does Jen help Jim?",["Jen gets Rex from the tree.","Jen gives Jim a hat.","Jen drives Jim to school."],"Jen gets Rex from the tree.","🐱"),
      choice("feel","How does Jim feel?",["glad","sad","angry"],"glad","😊")
    ],"She drives the truck. She climbs high up the ladder. Jen gets Rex (the cat) down from the tree. Jim is glad."),
    la("The Red Hat · Write a full sentence","Answer with a full sentence. Start with a capital letter.",[
      write("wet","Why did Jen get wet?",["She gets wet because she puts the fire out.","fire out"],"💧"),
      write("thanks","Why does Jim say \"thank you\" to Jen?",["Jim says thank you because Jen rescued Rex.","rescued Rex","rescues Rex","saved Rex","saves Rex","gets Rex","got Rex"],"🙏")
    ],"Why did Jen get wet? → She puts the fire out. · Why does Jim say thank you? → Because Jen rescued Rex (she gets Rex down from the tree)."),
    la("The Red Hat · Setting and Events","Match the event with the setting.",[
      choice("bell","Where does the fire bell ring?",["inside the firehouse","at a burning building","on a ladder"],"inside the firehouse","🔔"),
      choice("fire","Where does Jen help put out a fire?",["at a burning building","inside the firehouse","outside a home"],"at a burning building","🔥"),
      choice("cat","Jen is on a ladder. What does she do?",["She saves a cat from a tree.","She gets a hat.","She rings the bell."],"She saves a cat from a tree.","🐈")
    ],"Inside the firehouse: the fire bell rings. At a burning building: she helps put out a fire. On a ladder: she saves a cat from a tree.")
  ]);

  part("Oral Vocabulary & Essential Question","Jobs in a community (07/10)",[
    la("Oral Vocabulary","Choose the meaning of each word.",[
      select("occupation","occupation",["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."],"The job that somebody does.","👷"),
      select("equipment","equipment",["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."],"The things that you need to do something. Like play sports or go to school.","🎒"),
      select("fortunately","fortunately",["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."],"This word means luckily!","🍀"),
      select("astonishing","astonishing",["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."],"SURPRISING!! Or AMAZING!!!","🤩"),
      select("community","community",["The job that somebody does.","The things that you need to do something. Like play sports or go to school.","This word means luckily!","SURPRISING!! Or AMAZING!!!","The place where we live and all the people that live there."],"The place where we live and all the people that live there.","🏘️")
    ],"occupation – The job that somebody does. · equipment – The things that you need to do something. · fortunately – luckily · astonishing – surprising or amazing · community – The place where we live and all the people that live there. (Oral Vocabulary, 07/10)"),
    la("Essential Question","What jobs need to be done in a community?",[
      multi("jobs","Which people do jobs in Ben's community? Choose 4.",["bus driver","baker","vet","crossing guard","dragon"],["bus driver","baker","vet","crossing guard"],"🏘️")
    ],"In Good Job, Ben! the bus driver, the crossing guard, the workers, the baker, the vet and Miss Glenn all do jobs in the community. A dragon is not real.")
  ]);

  const laSubject=(subtitle,questions,groups,readings=[])=>({name:"Language Arts",icon:"📚",accent:"#9b69e8",soft:"#f5efff",subtitle,scoreByField:true,groups,questions:withHints(questions),readings});
  const notes=(id,title,text,byline="Unit 2 Week 1")=>({id,title,byline,mode:"notes",text});
  const bonus=(id,links)=>({id,title:"Bonus · Video & game",byline:"Link cô giáo giao trong Class Diary",mode:"bonus",links,text:""});
  LA_READINGS.unshift(notes("notes-reading","Ghi nhớ — Reading","Fantasy: Fantasies are made-up stories with characters, settings, and events that could not exist in real life.\nRealistic fiction: a made-up story. It has characters that do things that could happen in real life.\nCharacters are the people or animals in a story.\nThe setting is where the story takes place.\nThe events are what happen in the story."));
  LA_READINGS.push(bonus("bonus-reading",[{label:"Big Book: Millie Waits for the Mail",url:"https://drive.google.com/file/d/1Ab-WyOJrt3t_3m5uGtUI2QWt6o-o2Urb/view?usp=drive_link"}]));
  registerQuiz({
    id:"class-diary-2026-10-07-language-reading",
    uploadDate:"2026-10-07",
    subjectKey:"language",
    title:"Language Arts (Part 1: Reading & Vocabulary)",
    subject:laSubject("07/10/2026 · Unit 2 Week 1 · Millie, Good Job Ben!, The Red Hat, Oral Vocabulary",LA_QUESTIONS.splice(0),LA_GROUPS.splice(0),LA_READINGS)
  });

  // ── Phần 2: Âm & chính tả ──
  const HFW=["again","help","new","there","use"];
  part("High-Frequency Words","again · help · new · there · use",[
    {section:"High-Frequency Words",img:IMG("hfw-review"),text:"Choose the word that completes each sentence.",type:"compound",wordBank:HFW,fields:[
      select("there","My cat is up ___.",HFW,"there","🐱"),
      select("use","We can ___ this.",HFW,"use","✂️"),
      select("new","This hat is ___.",HFW,"new","🎩"),
      select("help","Ken will ___ me.",HFW,"help","🤝"),
      select("again","Ned will try ___.",HFW,"again","🔁")
    ].map(field=>({...field,fromWordBank:true})),explain:"My cat is up there. · We can use this. · This hat is new. · Ken will help me. · Ned will try again. (Practice Book, page 91)"},
    la("High-Frequency Words · Good Job, Ben!","Complete the sentences from the story.",[
      select("use","Six men ___ a drill and fill cracks.",HFW,"use","🚧"),
      select("again","It will look new ___.",HFW,"again","✨"),
      select("there","___ is a lot to see.",HFW,"there","🏙️")
    ],"Six men use a drill and fill cracks. It will look new again. There is a lot to see."),
    // Câu từ game Baamboozle "Unit 2 - Week 1 - Gap Fill HFW" (link trong diary 01/10 và 06/10).
    la("High-Frequency Words · Game","Choose the missing word.",[
      select("again","Can you read the story ___?",HFW,"again","📖"),
      select("new","I have a ___ pencil.",HFW,"new","✏️"),
      select("help","Please ___ me open this box.",HFW,"help","📦"),
      select("use","We ___ crayons in art class.",HFW,"use","🖍️"),
      select("there","Is ___ a dog outside?",HFW,"there","🐕")
    ],"Can you read the story again? · I have a new pencil. · Please help me open this box. · We use crayons in art class. · Is there a dog outside?")
  ]);

  part("Spelling: Short e (e and ea)","The letters e or ea can make the short e sound: leg, bread",[
    la("Spelling · Sort the words","Which ending does each word have?",[
      select("bread","bread",["-ead","-en","-eg"],"-ead","🍞"),
      select("hen","hen",["-ead","-en","-eg"],"-en","🐔"),
      select("beg","beg",["-ead","-en","-eg"],"-eg","🐕"),
      select("head","head",["-ead","-en","-eg"],"-ead","🙂"),
      select("men","men",["-ead","-en","-eg"],"-en","👨‍👨‍👦"),
      select("leg","leg",["-ead","-en","-eg"],"-eg","🦵")
    ],"Words with ead: bread, head · Words with en: hen, men · Words with eg: beg, leg. (Practice Book, page 86)"),
    la("Spelling · Missing vowel","Write the missing vowel: a, e, i or o.",[
      fill("bed","🛏️ b _ d","e","🛏️"),
      fill("hen","🐔 h _ n","e","🐔"),
      fill("cat","🐱 c _ t","a","🐱"),
      fill("dog","🐶 d _ g","o","🐶")
    ],"bed · hen (short e) · cat (short a) · dog (short o)"),
    la("Short e · In a sentence","Read each sentence. Choose the words with short e.",[
      multi("ten","Mom gets ten.",["Mom","gets","ten"],["gets","ten"],"🍞"),
      multi("vet","The vet helped Jet get well.",["The","vet","helped","Jet","get","well"],["vet","helped","Jet","get","well"],"🐶")
    ],"Mom gets ten → gets, ten · The vet helped Jet get well → vet, helped, Jet, get, well."),
    // Từ trong video "Sit or Stand Short E Words" (link diary 05/10).
    la("Short e · Stand or sit?","Stand up if you hear short e!",[
      multi("stand","Choose the 3 words with the short e sound.",["pen","rug","web","fox","jet","sun"],["pen","web","jet"],"🧍")
    ],"pen, web, jet have short e. rug (u), fox (o), sun (u) do not."),
    la("Spelling · Change one letter","Change one letter to make a new word with the short e sound.",[
      fill("men","man → ___","men","👨"),
      fill("pet","pat → ___","pet","🐶")
    ],"man → men · pat → pet (Practice Book, page 84)")
  ]);

  part("Structural Analysis: Inflectional Ending -ed","Add -ed to tell about something that already happened",[
    la("-ed ending · What does it mean?","Choose the correct answer.",[
      choice("meaning","Add the ending -ed to an action word to tell about something that ___.",["already happened","will happen tomorrow","is happening now"],"already happened","⏮️"),
      choice("yesterday","Yesterday I ___ over the wall.",["jump","jumped","jumping"],"jumped","🧱"),
      fill("searched","Millie searches for a new hiding place. → Yesterday Millie ___ for a new hiding place.","searched","🐄")
    ],"Add the ending -ed to an action word to tell about something that already happened. I'm going to jump over the wall. → Yesterday I jumped over the wall."),
    la("-ed ending · Add -ed","Add -ed to each word. Write the new word.",[
      fill("dress","dress + ed =","dressed","👗"),
      fill("mix","mix + ed =","mixed","🥣"),
      fill("spill","spill + ed =","spilled","🥛"),
      fill("help","help + ed =","helped","🤝")
    ],"dressed · mixed · spilled · helped (Practice Book, page 89)"),
    la("-ed ending · Choose the word","Choose the word that completes each sentence.",[
      choice("hissed","The snake ___.",["hissd","hissed"],"hissed","🐍"),
      choice("missed","I ___ the bus yesterday.",["miss","missed"],"missed","🚌"),
      choice("filled","Chad ___ his cup.",["filled","filld"],"filled","🥤"),
      choice("tossed","Jess ___ the ball.",["toss","tossed"],"tossed","⚾"),
      choice("helped","Dan ___ me fix the clock.",["help","helped"],"helped","⏰")
    ],"The snake hissed. I missed the bus yesterday. Chad filled his cup. Jess tossed the ball. Dan helped me fix the clock. (Practice Book, page 90)"),
    // talked/visited từ diary 06/10; các từ còn lại từ game Wordwall "ed ending" (link diary 05/10).
    la("-ed ending · Pronunciation","What final sound do you hear?",[
      choice("talked","talked",["/t/","/d/","/id/"],"/t/","🗣️"),
      choice("visited","visited",["/t/","/d/","/id/"],"/id/","🏠"),
      choice("looked","looked",["/t/","/d/","/id/"],"/t/","👀"),
      choice("called","called",["/t/","/d/","/id/"],"/d/","📞"),
      choice("wanted","wanted",["/t/","/d/","/id/"],"/id/","🙋"),
      choice("needed","needed",["/t/","/d/","/id/"],"/id/","🙏")
    ],"talked, looked – /t/ · called – /d/ · visited, wanted, needed – /id/ (words that end with a /t/ or /d/ sound).")
  ]);

  part("Phonemic Awareness","Beginning, middle and final sounds",[
    la("Beginning sounds","What is the FIRST sound?",[
      choice("bat","bat",["/b/","/d/","/t/"],"/b/","🦇"),
      choice("dog","dog",["/g/","/d/","/o/"],"/d/","🐶"),
      choice("train","train",["/t/","/r/","/n/"],"/t/","🚂"),
      choice("lemon","lemon",["/m/","/n/","/l/"],"/l/","🍋")
    ],"bat – /b/ · dog – /d/ · train – /t/ · lemon – /l/"),
    la("Middle and final sounds","Listen to each word.",[
      choice("bed","MIDDLE sound of bed",["/e/","/b/","/d/"],"/e/","🛏️"),
      choice("top","MIDDLE sound of top",["/t/","/o/","/p/"],"/o/","🪀"),
      choice("wig","FINAL sound of wig",["/w/","/i/","/g/"],"/g/","💇"),
      choice("ten","FINAL sound of ten",["/n/","/t/","/e/"],"/n/","🔟"),
      choice("pencil","FINAL sound of pencil",["/p/","/l/","/s/"],"/l/","✏️"),
      choice("backpack","FINAL sound of backpack",["/k/","/b/","/p/"],"/k/","🎒")
    ],"Middle: bed – /e/, top – /o/ · Final: wig – /g/, ten – /n/, pencil – /l/, backpack – /k/"),
    la("Odd one out","Say the 3 words. Which word does NOT have the short e sound?",[
      choice("top","bed · red · top",["bed","red","top"],"top","🔍"),
      choice("pin","hen · men · pin",["hen","men","pin"],"pin","🔍"),
      choice("rug","leg · beg · rug",["leg","beg","rug"],"rug","🔍")
    ],"top (short o) · pin (short i) · rug (short u). The other words have short e.")
  ]);

  registerQuiz({
    id:"class-diary-2026-10-07-language-words",
    uploadDate:"2026-10-07",
    subjectKey:"language",
    title:"Language Arts (Part 2: Sounds & Spelling)",
    subject:laSubject("07/10/2026 · Unit 2 Week 1 · HFW, short e, -ed ending, beginning/middle/final sounds",LA_QUESTIONS.splice(0),LA_GROUPS.splice(0),[
      notes("notes-sounds","Ghi nhớ — Sounds & Spelling","High-frequency words: again · help · new · there · use\nThe letters e or ea can make the short e sound: leg, bread.\nAdd the ending -ed to an action word to tell about something that already happened: help → helped, fill → filled.\ntalked: we say the final sound as just a /t/. visited: we say the final sound as /id/ (words that end with a /t/ or /d/ sound)."),
      bonus("bonus-sounds",[
        {label:"Game: High-frequency words",url:"https://www.baamboozle.com/game/3706689"},
        {label:"Video: Short e (sit or stand)",url:"https://www.youtube.com/watch?v=Lkuucy5Fegk"},
        {label:"Video: The -ed song",url:"https://www.youtube.com/watch?v=w1tDY0pPq3w"},
        {label:"Game: -ed ending",url:"https://wordwall.net/resource/12306745/ed-ending"}
      ])
    ])
  });

  // ── Phần 3: Ngữ pháp & viết ──
  part("Grammar: Nouns","A noun names a person, place, or thing",[
    la("Nouns · What is a noun?","Choose the correct answer.",[
      choice("noun","A noun names a ___.",["person, place, or thing","color or size","action"],"person, place, or thing","📛")
    ],"A noun names a person, place, or thing."),
    la("Nouns · Person, place, or thing?","Is each noun a person, a place, or a thing?",[
      select("brother","brother",["person","place","thing"],"person","👦"),
      select("school","school",["person","place","thing"],"place","🏫"),
      select("cookie","cookie",["person","place","thing"],"thing","🍪"),
      select("vietnam","Vietnam",["person","place","thing"],"place","🇻🇳"),
      select("backpack","backpack",["person","place","thing"],"thing","🎒"),
      select("man","man",["person","place","thing"],"person","👨")
    ],"Person: brother, man · Place: school, Vietnam · Thing: cookie, backpack."),
    // Ví dụ person/place/thing lấy từ video Jack Hartmann "What is a Noun?" (diary 02/10).
    la("Nouns · Is it a noun?","Is it a noun? Choose YES or NO.",[
      yesNo("teacher","teacher",true,"👩‍🏫"),
      yesNo("run","run",false,"🏃"),
      yesNo("library","library",true,"🏛️"),
      yesNo("big","big",false,"🐘")
    ],"teacher (person) and library (place) are nouns. run is an action word. big tells about size."),
    la("Nouns · Find the noun","Choose the noun in each sentence.",[
      choice("van","The van is big.",["The","van","big"],"van","🚐"),
      choice("pet","A pet swims.",["A","pet","swims"],"pet","🐠"),
      choice("sofa","My sofa is big and blue.",["sofa","big","blue"],"sofa","🛋️"),
      choice("car","The car is really fast!",["car","really","fast"],"car","🚗")
    ],"van, pet, sofa and car are nouns. big, blue, fast and swims are not nouns."),
    la("Nouns · Find all the nouns","Choose ALL the nouns.",[
      multi("john","John left his book at school.",["John","left","book","at","school"],["John","book","school"],"📘"),
      multi("lucas","Lucas has a capybara.",["Lucas","has","capybara"],["Lucas","capybara"],"🦫")
    ],"John (person), book (thing), school (place) · Lucas (person), capybara (an animal)."),
    // Game Baamboozle "Find the Nouns" (diary 02/10) và "Nouns! Nouns! Nouns!" (diary 07/10).
    la("Nouns · Game","Find the noun in each sentence.",[
      choice("kangaroo","The kangaroo is brown.",["kangaroo","is","brown"],"kangaroo","🦘"),
      choice("tree","He climbs a tree.",["He","climbs","tree"],"tree","🌳"),
      choice("dad","Dad drives quickly.",["Dad","drives","quickly"],"Dad","🚗"),
      choice("count","How many nouns? My house is near the school.",["1","2","3"],"2","🏠")
    ],"kangaroo, tree, Dad are nouns. My house is near the school → 2 nouns: house, school."),
    la("Nouns · Person, place, thing, or animal?","A noun can name a person, a place, a thing, or an animal.",[
      select("baby","baby",["person","place","thing","animal"],"person","👶"),
      select("garden","garden",["person","place","thing","animal"],"place","🌷"),
      select("computer","computer",["person","place","thing","animal"],"thing","💻"),
      select("crocodile","crocodile",["person","place","thing","animal"],"animal","🐊")
    ],"baby – person · garden – place · computer – thing · crocodile – animal.")
  ]);

  part("Mechanics: Commas in a Series","In a list with three or more nouns",[
    la("Commas in a series · The rule","Choose the correct answer.",[
      choice("rule","In a list with three or more nouns, a comma is used after ___.",["all but the last noun","every noun","only the first noun"],"all but the last noun","✏️"),
      choice("count","Frogs, cats, and dogs are in the pet show. How many commas?",["1","2","3"],"2","🐸")
    ],"In a list with three or more nouns, a comma is used after all but the last noun. Count how many nouns. There will always be 1 less comma. Frogs, cats, and dogs → 3 nouns, 2 commas."),
    la("Commas in a series · Which is correct?","Choose the sentence that is written correctly.",[
      choice("nick","Nick sells…",["Nick sells beds cribs and clocks.","Nick sells beds, cribs, and clocks.","Nick, sells beds cribs, and clocks."],"Nick sells beds, cribs, and clocks.","🛏️"),
      choice("mel","Mel has…",["Mel has his sled, hat, and bag.","Mel has his sled hat, and bag.","Mel has, his sled hat and bag."],"Mel has his sled, hat, and bag.","🛷"),
      choice("truck","A truck…",["A truck bus and cab can go.","A truck, bus and, cab can go.","A truck, bus, and cab can go."],"A truck, bus, and cab can go.","🚚")
    ],"Nick sells beds, cribs, and clocks. · Mel has his sled, hat, and bag. · A truck, bus, and cab can go. (Practice Book, page 94)"),
    // Game Baamboozle "Commas in a Series" (diary 06/10, 07/10) và video LollyPond (diary 07/10).
    la("Commas in a series · Correct or not?","Is the comma use correct?",[
      choice("dog","a dog, cat, and monkey",["It's correct!","It's NOT correct!"],"It's correct!","🐒"),
      choice("trees","trees, flowers weeds, and bushes",["It's correct!","It's NOT correct!"],"It's NOT correct!","🌳"),
      choice("trucks","trucks, vans, cars, and motorcycles",["It's correct!","It's NOT correct!"],"It's correct!","🏍️"),
      choice("friends","My best friends are Jenny, Bruce, and Dennis. How many friends?",["2","3","4"],"3","👫")
    ],"a dog, cat, and monkey ✓ · trees, flowers weeds, and bushes ✗ (needs a comma after flowers) · trucks, vans, cars, and motorcycles ✓ · Jenny, Bruce, and Dennis = 3 friends."),
    la("Commas in a series · Write it correctly","Rewrite the sentence. Add the commas and a full stop.",[
      rewrite("bugs","Mom Dad Jim and Ann like bugs",["Mom, Dad, Jim, and Ann like bugs."],"🐞"),
      rewrite("toys","I play with dolls blocks and kites",["I play with dolls, blocks, and kites."],"🪁")
    ],"Mom, Dad, Jim, and Ann like bugs. (Practice Book, page 94) · I play with dolls, blocks, and kites.")
  ]);

  part("Word Order","Put the words in the right order to make a sentence",[
    la("Word order","Write the sentence. Start with a capital letter and finish with a full stop.",[
      rewrite("jet","licks  /  Ben  /  Jet",["Jet licks Ben."],"🐶"),
      rewrite("ten","ten  /  gets  /  Mom",["Mom gets ten."],"🍞"),
      rewrite("vet","Jet  /  helped  /  The  /  vet",["The vet helped Jet."],"🩺")
    ],"Jet licks Ben. · Mom gets ten. · The vet helped Jet. (sentences from Good Job, Ben!)")
  ]);

  part("Writing","Write a sentence about one idea",[
    la("Writing trait","Choose the correct answer.",[
      choice("idea","A sentence tells about ___ idea.",["one","two","ten"],"one","☝️"),
      choice("lines","When you write, make sure you stay ___ the lines.",["on","under","far from"],"on","📏")
    ],"Writing Trait: A sentence tells about one idea. Writing Skill: When you write, make sure you stay on the lines.")
  ]);

  registerQuiz({
    id:"class-diary-2026-10-07-language-grammar",
    uploadDate:"2026-10-07",
    subjectKey:"language",
    title:"Language Arts (Part 3: Grammar & Writing)",
    subject:laSubject("07/10/2026 · Unit 2 Week 1 · Nouns, commas in a series, word order, writing a sentence",LA_QUESTIONS.splice(0),LA_GROUPS.splice(0),[
      notes("notes-grammar","Ghi nhớ — Grammar","A noun names a person, place, or thing. (A noun can also name an animal.)\nIn a list with three or more nouns, a comma is used after all but the last noun.\nCount how many nouns. There will always be 1 less comma.\nExample: Frogs, cats, and dogs are in the pet show.\nA sentence begins with a capital letter. A sentence tells about one idea."),
      bonus("bonus-grammar",[
        {label:"Video: What is a Noun?",url:"https://www.youtube.com/watch?v=9cu7C07pNbA"},
        {label:"Game: Find the nouns",url:"https://www.baamboozle.com/game/80716"},
        {label:"Game: Nouns! Nouns! Nouns!",url:"https://www.baamboozle.com/game/451314"},
        {label:"Video: Captain Comma",url:"https://www.youtube.com/watch?v=zGvlH1YVPc4"},
        {label:"Video: Commas in a Series",url:"https://www.youtube.com/watch?v=cQOX3UdeAZI"},
        {label:"Game: Commas in a series",url:"https://www.baamboozle.com/game/114894"}
      ])
    ])
  });

  // ───────────────────────── SCIENCE ─────────────────────────
  // Unit 2 Module 1 · Lesson 2: Functions of Animal Structures
  // (01/10 Science Probe + Hummingbirds · 02/10 Lesson 2 Review + Animal Protection · 06/10 Inquiry: Animals Move)
  const functionChoices=["help birds fly","help fish swim","helps elephants pick up food and drink water","help animals eat meat","protects the turtle","help ducks swim","help rabbits jump","helps giraffes reach leaves"];

  registerQuiz({
    id:"class-diary-2026-10-07-science",
    uploadDate:"2026-10-07",
    subjectKey:"science",
    title:"Science",
    subject:{
      name:"Science",
      icon:"🐾",
      accent:"#31a66d",
      soft:"#f5efff",
      subtitle:"07/10/2026 · Animal Structures and Functions · Class Diary 01–06/10",
      scoreByField:true,
      groups:[
        {title:"1. Structure and Function",subtitle:"Body parts and what they do",start:0,end:2},
        {title:"2. What does each part do?",subtitle:"Match each animal structure with its function",start:3,end:5},
        {title:"3. Animal Protection",subtitle:"Read the text, then answer",start:6,end:9},
        {title:"4. Inquiry Activity: Animals Move",subtitle:"How animals use their structures to move",start:10,end:11}
      ],
      readings:[
        notes("notes-science","Ghi nhớ — Science","Structure: a body part.\nFunction: what the body part does.\nprotection: keeps things safe from harm.","Unit 2 Module 1 · Lesson 2"),
        {id:"protection",title:"Animal Protection",byline:"Student Book, page 26",mode:"reference",images:[IMG("protection-text")],
          text:"Protection keeps things safe from harm. Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live."}
      ],
      questions:withHints([
        question("Structure and Function","Choose the correct word.",[
          choice("structure","A body part is called a ___.",["structure","function","habitat"],"structure","🦵"),
          choice("function","What the body part does is called its ___.",["function","structure","shell"],"function","⚙️")
        ],"Structure: a body part. Function: what the body part does. • Structure là bộ phận cơ thể; function là việc bộ phận đó làm."),
        {section:"Science Probe · Functions of Animal Parts",img:IMG("tiger-probe"),text:"Look at the page. Answer each question.",type:"compound",fields:[
          choice("best","Which student tells what an animal part DOES (its function)?",["Roosevelt","Steve","Toni"],"Roosevelt","🐅"),
          choice("legs","The tiger uses its legs for ___.",["running","eating","hearing"],"running","🐅")
        ],explain:"Tigers do use their legs for running. Roosevelt nói về việc chân làm (function). Steve và Toni chỉ tả bộ phận (răng sắc, lông mềm)."},
        {section:"Discover the Phenomenon · Hummingbirds",img:IMG("hummingbird-video"),text:"Think about the hummingbird video.",type:"compound",fields:[
          choice("wings","What do the hummingbird's wings help it do?",["fly","swim","dig"],"fly","🐦"),
          choice("blurry","Why are the hummingbird's wings blurry in the video?",["They are moving very fast.","They are wet.","They are not moving."],"They are moving very fast.","💨")
        ],explain:"The wings help the bird to fly. The hummingbird's wings were moving very fast. • Cánh đập rất nhanh nên trông bị mờ."},
        question("Animal structures","Choose what each structure does.",[
          select("wings","Wings",functionChoices,"help birds fly","🪽"),
          select("fins","Fins",functionChoices,"help fish swim","🐟"),
          select("trunk","Trunk",functionChoices,"helps elephants pick up food and drink water","🐘"),
          select("teeth","Sharp teeth",functionChoices,"help animals eat meat","🦷")
        ],"Wings – help birds fly · Fins – help fish swim · Trunk – helps elephants pick up food and drink water · Sharp teeth – help animals eat meat."),
        question("Animal structures","Choose what each structure does.",[
          select("shell","Shell",functionChoices,"protects the turtle","🐢"),
          select("webbed","Webbed feet",functionChoices,"help ducks swim","🦆"),
          select("backlegs","Strong back legs",functionChoices,"help rabbits jump","🐇"),
          select("neck","Long neck",functionChoices,"helps giraffes reach leaves","🦒")
        ],"Shell – protects the turtle · Webbed feet – help ducks swim · Strong back legs – help rabbits jump · Long neck – helps giraffes reach leaves."),
        question("Science · True or false","Read and choose TRUE or FALSE.",[
          tf("structure","A structure is what the body part does.",false,"🦵"),
          tf("fins","Fins help fish swim.",true,"🐟"),
          tf("shell","A shell protects the turtle.",true,"🐢"),
          tf("webbed","Webbed feet help rabbits jump.",false,"🦆")
        ],"1. FALSE (structure = a body part; function = what the body part does) · 2. TRUE · 3. TRUE · 4. FALSE (webbed feet help ducks swim; strong back legs help rabbits jump)"),
        question("Vocabulary · protection","Choose the correct meaning.",[
          choice("meaning","Protection ___.",["keeps things safe from harm","helps things grow tall","makes things move fast"],"keeps things safe from harm","🛡️")
        ],"protection: keeps things safe from harm (Student Book, page 26). • Protection là sự bảo vệ, giữ an toàn khỏi nguy hiểm.",{readingId:"protection"}),
        question("Read: Animal Protection","Read the text. Then answer.",[
          choice("structures","Some animals use their ___ for protection.",["structures","toys","food"],"structures","🦔"),
          choice("homes","Other animals build ___ for protection.",["homes","cars","roads"],"homes","🏠"),
          multi("live","Which structures does the text say help animals live? Choose 4.",["nose","mouth","eyes","ears","tail"],["nose","mouth","eyes","ears"],"👀")
        ],"Some animals can use their structures for protection. Other animals build homes for protection. Animals can also use structures like their nose, mouth, eyes, and ears to help them live.",{readingId:"protection"}),
        question("Sea turtle","What does each part of the sea turtle do?",[
          choice("shell","Shell",["protects the turtle's body","helps the turtle fly","helps the turtle hear"],"protects the turtle's body","🐢"),
          choice("front","Front flippers",["help the turtle swim and steer","help the turtle eat","help the turtle sleep"],"help the turtle swim and steer","🌊"),
          choice("back","Back flippers",["help the turtle balance and move in the water","help the turtle see","help the turtle breathe"],"help the turtle balance and move in the water","🌊"),
          choice("mouth","Mouth",["helps the turtle eat sea plants and small animals","helps the turtle swim","protects the turtle's body"],"helps the turtle eat sea plants and small animals","👄"),
          choice("head","Head",["helps the turtle see, breathe and find food","helps the turtle steer","helps the turtle balance"],"helps the turtle see, breathe and find food","👀")
        ],"Shell: protects the turtle's body. Front flippers: help the turtle swim and steer. Back flippers: help the turtle balance and move in the water. Mouth: helps the turtle eat sea plants and small animals. Head: helps the turtle see, breathe and find food."),
        question("Science · Write a full sentence","Answer with a full sentence.",[
          write("shell","What does the shell do for the turtle?",["The shell protects the turtle's body.","protects","protect","keeps safe"],"🐢")
        ],"The shell protects the turtle's body. (Protection keeps things safe from harm.)"),
        {section:"Inquiry Activity · Materials",img:IMG("animals-move-materials"),text:"What did we use to make the moving animal model?",type:"compound",fields:[
          multi("materials","Choose the 3 materials.",["construction paper","brass fasteners","scissors","glue stick","paint"],["construction paper","brass fasteners","scissors"],"✂️")
        ],explain:"Materials: construction paper, brass fasteners, scissors (Student Book, page 24). • Giấy bìa màu, đinh ghim hai chân và kéo."},
        question("Inquiry Activity · Rabbit","How does a rabbit use its structures to move?",[
          choice("how","How does a rabbit move?",["A rabbit hops.","A rabbit swims.","A rabbit flies."],"A rabbit hops.","🐇"),
          choice("parts","Which structures help the rabbit move?",["its legs and feet","its ears","its nose"],"its legs and feet","🦶"),
          choice("order","What do we do after we research how an animal moves?",["Record data in the table.","Eat the model.","Throw the paper away."],"Record data in the table.","📝")
        ],"Make a claim: Rabbits use their feet to move. A rabbit hops. Yes, rabbits do use their foot and legs to move. Investigate: 1. Research how an animal moves. 2. Record Data. 3. Make a model.")
      ])
    }
  });
})();
