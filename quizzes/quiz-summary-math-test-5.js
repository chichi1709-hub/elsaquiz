// TỔNG HỢP KIẾN THỨC — Math · Test 5 (Class Diary 16/10–06/11/2026: Lesson 32 → Lesson 39, sau Test 4 ngày 15/10).
// 2 bài trong nhóm Tổng hợp (uploadDate "weekly-…"), cùng cách với quiz-summary-sci-u2m1-l4.js:
//   (1) "Math - Test 5": câu hỏi lấy từ trang Workbook bài về nhà + slide bài giảng trong diary, mỗi thẻ ghi rõ nguồn;
//   (2) Review: gộp TOÀN BỘ câu của các bài Math theo ngày trong SOURCES, xếp theo chủ đề, mang theo bài đọc.
// Remember ghép tự động từ thẻ Remember của từng bài ngày. Diary Math mới trước Test 5: thêm id vào SOURCES, sửa RANGE.
// Tên lesson theo diary 05/11 (L32–L35) và mục Homework check các ngày sau (L36–L39).
(()=>{
  const M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const fill=(id,label,answer,icon)=>({id,label,type:"fill",answer:[answer],icon});
  const math=(section,text,fields,explain,extra={})=>({section,text,type:"compound",img:M,layout:"icon-activity",fields,explain,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const KEY="weekly-math-test-5",LABEL="Tổng hợp kiến thức · Math · Test 5",RANGE="16/10–09/11/2026";
  const SUBJECT={name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",scoreByField:true};

  // Bài Math theo ngày (Class Diary 16/10 → 06/11), cũ trước
  const SOURCES=["math-lesson-32","math-lesson-33","math-lesson-33-picture-graph","math-lesson-35-pattern","math-lesson-36-predict",
    "math-lesson-37-shape-pattern","math-lesson-38-color-pattern","math-lesson-39-number-patterns","math-review-lessons-32-35"];
  const src=id=>(window.quizSources||{})[id];
  // Ví dụ cho từng ý kiến thức trong Remember (user yêu cầu 09/11): ảnh slide bài giảng của chính ngày đó + các bước bằng câu ngắn.
  // Cú pháp "Example: [img:…] Tiêu đề ¦ Bước 1 ¦ Bước 2 …" (list-app.js vẽ ảnh + danh sách đánh số); dòng nằm dưới ý của ngày học đó.
  const EXAMPLES={
    "math-lesson-32":["Example: [img:assets/2026-10-19/math-tenframe-2.webp] Let’s show 7 on a ten-frame. ¦ Start at the top left box. ¦ Fill the top row first: 1, 2, 3, 4, 5. ¦ Then fill the bottom row: 6, 7. ¦ Now I have 7. 7 is 5 and 2 more."],
    "math-lesson-33":["Example: [img:assets/2026-10-21/math-pairs-2.webp] Which color has more? ¦ Put the counters in pairs. Each red counter has a yellow partner. ¦ Look for counters with no partner. Two yellow counters do not have partners. ¦ So there are more yellow counters than red counters."],
    "math-lesson-33-picture-graph":["Example: [img:assets/2026-10-22/picture-graph-1.webp] Favorite Pets picture graph. ¦ Each picture stands for one vote. ¦ Count the pictures in the Cat row. Four children chose Cat. ¦ Count all the pictures to find how many children voted."],
    "math-lesson-35-pattern":["Example: [img:assets/2026-10-26/math-pattern-2.webp] A color pattern. ¦ Say the names of the colors: red, red, blue, red, red, blue. ¦ Red, red, blue repeats over and over. ¦ With letters it is R, R, B. The colors and letters make the same pattern."],
    "math-lesson-36-predict":["Example: [img:assets/2026-10-28/math-predict-2.webp] What comes next? ¦ Find the part that repeats: a tall cube, then a short cube. ¦ Name each picture with a letter: tall is A, short is B. ¦ A, B repeats: A B A B A B. ¦ So A, the tall cube, comes next."],
    "math-lesson-37-shape-pattern":["Example: [img:assets/2026-10-29/math-shape-2.webp] A shape pattern. ¦ Say each shape: triangle, circle, triangle, circle, triangle, circle. ¦ The part that repeats is triangle, circle. ¦ So the shape that comes next is a triangle."],
    "math-lesson-38-color-pattern":["Example: [img:assets/2026-11-02/math-blanket-2.webp] Tyler’s blanket. ¦ Read and Understand: What colors will the next stripes be? ¦ Plan: Find the color pattern. Purple, blue, yellow repeats. ¦ Solve: Color the next stripes purple, blue, yellow. ¦ Look Back and Check: Do your stripes match the rest of the pattern?"],
    "math-lesson-39-number-patterns":["Example: [img:assets/2026-11-04/math-nests.webp] How many eggs are in the nests? ¦ Each nest has 2 eggs. ¦ Use a table. 1 nest has 2 eggs. 2 nests have 4 eggs. 3 nests have 6 eggs. ¦ The number of eggs increases by 2 each time. Skip count by 2s: 2, 4, 6."]
  };
  const NOTES=[
    "Test 5 · Lessons 32 to 39",
    "(L32) Representing Numbers on a Ten-Frame",
    "(L33) Using Data from Real Graphs",
    "(L34) Using Data from Picture Graphs",
    "(L35) Describing Patterns",
    "(L36) Using Patterns to Predict",
    "(L37) Extending Shape Patterns",
    "(L38) Problem Solving: Look for a Pattern",
    "(L39) Patterns in Tables",
    // Class Diary 09/11: cô ôn Lesson 35–39 (không có bài Math theo ngày — user chỉ cần cập nhật vào bộ tổng hợp)
    "📅 Class Diary: 09/11/2026",
    "(09/11) Teacher will briefly review key concepts from lessons 35 to 39.",
    "(09/11 · L35) This is a pattern. Sun, moon repeats over and over.",
    "(09/11 · L36) The stripes make a pattern. What color should the white stripe be?",
    "(09/11 · L37) A B repeats over and over.",
    "(09/11 · L38) A pattern can be anything that repeats. It can be colors, shapes, numbers, letters, or objects. To find a pattern, look for what repeats.",
    "(09/11 · L39) You can use a table to find how many mittens the children are wearing. The number of mittens increases by 2 each time.",
    "(09/11) Homework: Review lessons 32 to 39 for the test in the next lesson.",
    ...[...SOURCES].reverse().flatMap(id=>[...(src(id)?.subject.readings||[]).filter(r=>r.mode==="notes").map(r=>r.text),...(EXAMPLES[id]||[])])
  ].join("\n");
  const lessonList={id:"lessons-math-t5",title:"Test 5 · Lessons 32–39",byline:`Math · Class Diary ${RANGE}`,mode:"reference",
    text:NOTES.split("\n").slice(1,9).map(l=>l.replace(/^\(L(\d+)\)\s*/,"Lesson $1: ")).join("\n")};
  const remember=id=>({id,title:"Remember — Math Test 5",byline:`Lessons 32–39 · Class Diary ${RANGE}`,mode:"notes",text:NOTES.split("\n").slice(9).join("\n")});

  // ───── (1) Math - Test 5 ─────
  // MỌI câu đều lấy từ tư liệu có thật: trang Workbook bài về nhà (diary mục Homework check) hoặc slide bài giảng trong diary.
  // Hình đề: assets/math-test-5/ (tạo bằng _reference/tao_anh_math_test5.py, đã xoá đáp án màu hồng của cô).
  // Mỗi câu chỉ gắn hình đề của CHÍNH câu đó (bigImg, cắt riêng từng bài) — không đưa cả trang Workbook/loạt đề lên trước rồi mới hỏi.
  // Mỗi thẻ ghi rõ nguồn (Workbook page … · homework check / Lesson n slide · Class Diary dd/mm).
  const WB=name=>`assets/math-test-5/${name}.webp`;
  const pic=(field,img)=>({...field,img,bigImg:true});
  const SRC={
    32:["Representing Numbers on a Ten-Frame","21/10",["assets/2026-11-05/math-l32-tenframe.webp","05/11"]],
    33:["Using Data from Real Graphs","22/10"],
    34:["Using Data from Picture Graphs","26/10",["assets/2026-11-05/math-l34-picture-graph.webp","05/11"]],
    35:["Describing Patterns","28/10"],
    36:["Using Patterns to Predict","29/10"],
    37:["Extending Shape Patterns","02/11"],
    38:["Problem Solving: Look for a Pattern","04/11",["assets/2026-11-02/math-blanket-1.webp","02/11"],["assets/2026-11-02/math-blanket-2.webp","02/11"]],
    39:["Patterns in Tables","05/11",["assets/2026-11-04/math-nests.webp","04/11"]]
  };
  const workbook=n=>`Source: Workbook page “${SRC[n][0]}” · homework check, Class Diary ${SRC[n][1]}/2026`;
  const slide=n=>`Source: Lesson ${n} slide · Class Diary ${SRC[n][2][1]}/2026`;
  const wbCard=(n,fields,explain)=>math(`Lesson ${n} · ${SRC[n][0]}`,workbook(n),fields,explain);
  const slideCard=(n,fields,explain)=>math(`Lesson ${n} · ${SRC[n][0]} (lesson slide)`,slide(n),fields,explain);
  const TEST=[
    wbCard(32,[
      pic(choice("kyle","Kyle put 6 counters in a ten-frame. How many more counters should Kyle put in the frame to make 10?",["2","3","4","5"],"4","🔟"),WB("wb-l32-kyle")),
      pic(fill("four","Draw counters in the ten-frame to show 4. How many boxes are still empty?","6","⬜"),WB("wb-l32-four")),
      pic(fill("seven","Show how 7 is 5 and 2. Fill the top row first. How many counters go in the bottom row?","2","7️⃣"),WB("wb-l32-seven")),
      pic(fill("nine","Show how 9 is 5 and 4. How many counters go in the bottom row?","4","9️⃣"),WB("wb-l32-nine"))
    ],"6 and 4 more make 10. 4 counters → 6 empty boxes. Fill the top row first: 7 is 5 and 2 · 9 is 5 and 4."),
    slideCard(32,[
      choice("start","To show a number on a ten-frame, start at the ___ box.",["top left","bottom right","middle"],"top left","↖️"),
      pic(fill("empty3","This ten-frame shows 3. How many boxes are empty?","7","⬜"),SRC[32][2][0])
    ],"You can use a ten-frame to show numbers up to 10. To show 3, start at the top left box. 3 counters → 7 empty boxes."),
    wbCard(33,[
      pic(choice("same1","Is there the same number of colored counters?",["yes","no"],"no","🟰"),WB("wb-l33-g1")),
      pic(choice("more1","Which color has more?",["gray","black"],"black","⚖️"),WB("wb-l33-g1")),
      pic(fill("partner1","How many counters do not have a partner?","2","🔍"),WB("wb-l33-g1")),
      pic(choice("more2","Which color has more?",["gray","black"],"gray","⚖️"),WB("wb-l33-g2")),
      pic(fill("partner2","How many counters do not have a partner?","3","🔍"),WB("wb-l33-g2")),
      pic(fill("journal","Draw black counters on the graph so 1 black counter does not have a partner. How many black counters do you draw?","7","✏️"),WB("wb-l33-journal"))
    ],"Graph 1: 5 gray, 7 black → black has more, 2 counters do not have a partner. Graph 2: 8 gray, 5 black → gray has more, 3 counters do not have a partner. Journal: 6 gray → draw 7 black counters."),
    wbCard(34,[
      pic(fill("winter","How many children chose winter?","3","❄️"),WB("wb-l34-graph")),
      pic(choice("favorite","Which season is the favorite?",["Summer","Fall","Winter","Spring"],"Summer","☀️"),WB("wb-l34-graph")),
      pic(choice("four","Which season did 4 children choose?",["Fall","Summer","Winter","Spring"],"Fall","🍁"),WB("wb-l34-graph")),
      pic(choice("more","Number Sense: How many more children chose summer than spring?",["11","6","5","1"],"1","➕"),WB("wb-l34-graph")),
      pic(choice("about","Reasoning: What is the graph about?",["Favorite Subjects","Summer","Favorite Seasons","Fall"],"Favorite Seasons","📊"),WB("wb-l34-graph"))
    ],"Favorite Seasons: Summer 6 · Fall 4 · Winter 3 · Spring 5. Summer is the favorite. 6 is 1 more than 5."),
    slideCard(34,[
      pic(fill("stripes","How many children voted for the hat with stripes?","4","🥳"),SRC[34][2][0]),
      pic(fill("dots","How many children voted for the hat with polka dots?","6","🎈"),SRC[34][2][0]),
      pic(choice("most","Which hat got the most votes?",["Stripes","Polka Dots"],"Polka Dots","🏅"),SRC[34][2][0])
    ],"Each party hat stands for 1 vote. Stripes 4 · Polka Dots 6 → Polka Dots got the most votes. 10 children voted."),
    wbCard(35,[
      pic(choice("gifts","Circle the pattern unit. Which part repeats?",["1 tall gift, 1 wide gift","2 tall gifts","1 tall gift, 2 wide gifts"],"1 tall gift, 1 wide gift","🎁"),WB("wb-l35-gifts")),
      pic(choice("shapes","Circle the pattern unit. Which part repeats?",["square, triangle","square, square","triangle, triangle, square"],"square, triangle","🔺"),WB("wb-l35-shapes")),
      pic(choice("star","Circle the pattern unit. Which part repeats?",["star, fish, ball","star, fish","fish, ball"],"star, fish, ball","⭐"),WB("wb-l35-star")),
      pic(choice("balls","Journal: Make the same pattern using letters.",["A B C A B C","A B A B A B","A A B A A B"],"A B C A B C","🔤"),WB("wb-l35-balls"))
    ],"The pattern unit is the part that repeats: tall gift, wide gift · square, triangle · star, fish, ball. Baseball, football, basketball → A B C A B C."),
    wbCard(36,[
      pic(choice("tulips","Find the pattern. What comes next?",["a light tulip","a dark tulip"],"a light tulip","🌷"),WB("wb-l36-tulips")),
      pic(choice("flowers","Find the pattern. What comes next?",["a white flower","a dark flower"],"a white flower","🌼"),WB("wb-l36-flowers")),
      pic(choice("books","Find the pattern. What comes next?",["a light book","a dark book"],"a light book","📚"),WB("wb-l36-books")),
      pic(choice("bikes","Estimation: Predict what comes next.",["bike, wagon, bike","bike, wagon, wagon","wagon, bike, bike","wagon, bike, wagon"],"bike, wagon, bike","🚲"),WB("wb-l36-bikes"))
    ],"Dark, light repeats → a light tulip. White, dark repeats → a white flower. Light, light, dark repeats → a light book. Bike, bike, wagon repeats → bike, wagon, bike."),
    wbCard(37,[
      pic(choice("ab","Make the same pattern using letters.",["A B A B A B","A A B A A B","A B C A B C"],"A B A B A B","🔤"),WB("wb-l37-ab")),
      pic(choice("abc","Make the same pattern using letters.",["A B C A B C","A B A B A B","A B B A B B"],"A B C A B C","🔤"),WB("wb-l37-abc")),
      pic(choice("repeat","Reasoning: Which picture shows the part that repeats?",["△ ○ ○ ▱","△ ○ ▱","△ ○"],"△ ○ ○ ▱","🧩"),WB("wb-l37-repeat"))
    ],"Triangle, square → A B A B A B. Trapezoid, circle, square → A B C A B C. The part that repeats is triangle, circle, circle, parallelogram."),
    wbCard(38,[
      pic(choice("shapes","Complete the pattern. What are the next 3?",["△ ○ □","○ □ △","△ □ ○"],"△ ○ □","🔺"),WB("wb-l38-shapes")),
      pic(choice("letters","Complete the pattern. What are the next 3?",["A D C","D C A","A C D"],"A D C","🔤"),WB("wb-l38-letters")),
      pic(choice("cubes","Color to complete the pattern. What are the last 3 cubes?",["dotted, striped, striped","striped, striped, dotted","dotted, dotted, striped"],"dotted, striped, striped","🧊"),WB("wb-l38-cubes")),
      pic(choice("numbers","Complete the pattern. What are the next 3?",["2 4 6","4 6 2","6 4 2"],"2 4 6","🔢"),WB("wb-l38-numbers")),
      pic(choice("ball","Visual Thinking: Which ball is missing?",["a dotted ball","a white ball with a star","a black ball","a black ball with a white star"],"a dotted ball","⚽"),WB("wb-l38-ball"))
    ],"Find the part that repeats: △ ○ □ · A D C · dotted, striped, striped · 2 4 6 · ball with a star, dotted ball, black ball → the missing ball is the dotted ball."),
    slideCard(38,[
      choice("first","Tyler’s blanket: What do you do FIRST?",["Read and Understand","Solve","Look Back and Check"],"Read and Understand","1️⃣"),
      choice("last","What do you do LAST?",["Look Back and Check","Plan","Read and Understand"],"Look Back and Check","🔚")
    ],"Read and Understand → Plan: Find the color pattern → Solve: Color the stripes to follow the pattern → Look Back and Check: Do your stripes match the rest of the pattern?"),
    wbCard(39,[
      pic(fill("cones","Find the pattern. Complete the table. 4 ice cream cones → ___ scoops","8","🍦"),WB("wb-l39-cones")),
      pic(fill("box3","Find the pattern. Complete the table. 3 boxes → ___ crackers","30","🍪"),WB("wb-l39-crackers")),
      pic(fill("box4","4 boxes → ___ crackers","40","🍪"),WB("wb-l39-crackers")),
      pic(choice("tanks","Algebra: Which number completes the table?",["11","14","15","25"],"15","🐟"),WB("wb-l39-tanks"))
    ],"Scoops: 2, 4, 6, 8 · Crackers: 10, 20, 30, 40 · Fish: 5, 10, 15, 20."),
    slideCard(39,[
      pic(fill("nests","Each nest has 2 eggs. 4 nests → ___ eggs","8","🥚"),SRC[39][2][0]),
      pic(fill("inc","The number of nests increases by 1. The number of eggs increases by ___.","2","📈"),SRC[39][2][0])
    ],"Use a table to record the numbers. The number of eggs increases by 2. Skip count by 2s: 2, 4, 6, 8."),
    // Ôn tập 09/11: mỗi câu gắn đúng hình slide của câu đó (assets/2026-11-09/, tạo bằng _reference/tao_anh_2026-11-09.py)
    math("Review · Lessons 35–39 (Class Diary 09/11)","Source: Math review slides · Class Diary 09/11/2026",[
      pic(choice("stripes","Lesson 36: The stripes make a pattern. What color should the white stripe be?",["light gray","dark gray","white"],"light gray","🎨"),"assets/2026-11-09/math-stripes.webp"),
      pic(choice("acb-part","Lesson 38: To find a pattern, look for what repeats. Which part repeats?",["A C B","A C","C B A"],"A C B","🔁"),"assets/2026-11-09/math-acb.webp"),
      pic(choice("acb-next","A C B A C B A C B A C ___ What comes next?",["B","A","C"],"B","➡️"),"assets/2026-11-09/math-acb.webp"),
      pic(fill("mittens","Lesson 39: 1 child → 2 mittens, 2 children → 4 mittens, 3 children → 6 mittens. 4 children → ___ mittens","8","🧤"),"assets/2026-11-09/math-mittens.webp"),
      pic(fill("mit-inc","The number of mittens increases by ___ each time.","2","📈"),"assets/2026-11-09/math-mittens.webp")
    ],"Dark gray, light gray repeats → the white stripe should be light gray. A C B repeats → B comes next. The number of mittens increases by 2 each time: 2, 4, 6, 8.")
  ];
  registerQuiz({
    id:"math-test-5",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"math",
    title:"Math - Test 5",
    subject:{...SUBJECT,subtitle:`Test 5 · Lessons 32–39 · Workbook pages and lesson slides · Class Diary ${RANGE}`,
      groups:groupsOf([["Lesson 32","Representing Numbers on a Ten-Frame",2],["Lesson 33","Using Data from Real Graphs",1],["Lesson 34","Using Data from Picture Graphs",2],
        ["Lesson 35","Describing Patterns",1],["Lesson 36","Using Patterns to Predict",1],["Lesson 37","Extending Shape Patterns",1],
        ["Lesson 38","Problem Solving: Look for a Pattern",2],["Lesson 39","Patterns in Tables",2],["Review 09/11","Lessons 35–39 key concepts",1]]),
      questions:TEST,readings:[remember("notes-math-t5"),lessonList]}
  });

  // ───── (2) Review: gộp mọi câu của các bài Math theo ngày ─────
  const TOPICS=[["Ten-frames","Lesson 32",/ten-frame|lesson 32/i],["Graphs","Lessons 33–34",/graph|lesson 3[34]/i],
    ["Number patterns and tables","Lesson 39",/lesson 39|tables/i],["Patterns","Lessons 35–38",/.*/]];
  const buckets=new Map(TOPICS.map(([t])=>[t,[]])),readings=[remember("notes-math-t5r")];
  for(const id of SOURCES){
    const quiz=src(id);if(!quiz) continue;
    const day=quiz.uploadDate.slice(5).split("-").reverse().join("/");
    quiz.subject.questions.forEach(q=>{
      const copy={...q,section:`${q.section} (${day})`};
      if(q.readingId){const rid=`${id}--${q.readingId}`;copy.readingId=rid;
        if(!readings.some(r=>r.id===rid)){const r=(quiz.subject.readings||[]).find(x=>x.id===q.readingId);if(r) readings.push({...r,id:rid})}}
      buckets.get(TOPICS.find(([,,re])=>re.test(q.section))[0]).push(copy);
    });
  }
  const parts=[...buckets].filter(([,list])=>list.length);
  registerQuiz({
    id:"math-test-5-review",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"math",
    title:"Math - Test 5 · Review (all lessons)",
    subject:{...SUBJECT,subtitle:`All Math classes · Lessons 32–39 · Class Diary ${RANGE}`,
      groups:groupsOf(parts.map(([t,list])=>[t,TOPICS.find(([x])=>x===t)[1],list.length])),questions:parts.flatMap(([,list])=>list),readings}
  });
})();
