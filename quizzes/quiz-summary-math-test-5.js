// TỔNG HỢP KIẾN THỨC — Math · Test 5 (Class Diary 16/10–06/11/2026: Lesson 32 → Lesson 39, sau Test 4 ngày 15/10).
// 2 bài trong nhóm Tổng hợp (uploadDate "weekly-…"), cùng cách với quiz-summary-sci-u2m1-l4.js:
//   (1) "Math - Test 5": câu hỏi MỚI kiểu bài kiểm tra cho từng lesson (registry tự chia Part ≤ 30 ý);
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
  const KEY="weekly-math-test-5",LABEL="Tổng hợp kiến thức · Math · Test 5",RANGE="16/10–06/11/2026";
  const SUBJECT={name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",scoreByField:true};
  const tf=n=>{const row=k=>Array.from({length:5},(_,i)=>i<k?"🔴":"⬜").join("");return `${row(Math.min(n,5))}\n${row(Math.max(0,n-5))}`};

  // Bài Math theo ngày (Class Diary 16/10 → 06/11), cũ trước
  const SOURCES=["math-lesson-32","math-lesson-33","math-lesson-33-picture-graph","math-lesson-35-pattern","math-lesson-36-predict",
    "math-lesson-37-shape-pattern","math-lesson-38-color-pattern","math-lesson-39-number-patterns","math-review-lessons-32-35"];
  const src=id=>(window.quizSources||{})[id];
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
    ...[...SOURCES].reverse().flatMap(id=>(src(id)?.subject.readings||[]).filter(r=>r.mode==="notes").map(r=>r.text))
  ].join("\n");
  const lessonList={id:"lessons-math-t5",title:"Test 5 · Lessons 32–39",byline:`Math · Class Diary ${RANGE}`,mode:"reference",
    text:NOTES.split("\n").slice(1,9).map(l=>l.replace(/^\(L(\d+)\)\s*/,"Lesson $1: ")).join("\n")};
  const remember=id=>({id,title:"Remember — Math Test 5",byline:`Lessons 32–39 · Class Diary ${RANGE}`,mode:"notes",text:NOTES.split("\n").slice(9).join("\n")});

  // ───── (1) Math - Test 5 ─────
  const TEST=[
    math("Lesson 32 · Representing Numbers on a Ten-Frame","You can show numbers up to 10 on a ten-frame.",[
      choice("start","To show a number, start at the ___ box.",["top left","bottom right","middle"],"top left","↖️"),
      choice("row","Which row do you fill first?",["the top row","the bottom row","any row"],"the top row","⬆️"),
      fill("count8",`${tf(8)}\nHow many?`,"8","🔴"),
      fill("empty6",`${tf(6)}\nHow many boxes are empty?`,"4","⬜"),
      fill("five","8 is 5 and ___.","3","8️⃣"),
      fill("mia","Mia put 3 counters in a ten-frame. How many more counters should Mia put in the frame to make 10?","7","🔟"),
      choice("show7","Which ten-frame shows 7?",["🔴🔴🔴🔴🔴 / 🔴🔴⬜⬜⬜","🔴🔴🔴🔴⬜ / 🔴🔴🔴⬜⬜","🔴🔴🔴🔴🔴 / 🔴⬜⬜⬜⬜"],"🔴🔴🔴🔴🔴 / 🔴🔴⬜⬜⬜","7️⃣")
    ],"Start at the top left box. Fill the top row first. Then fill the bottom row as you need to. 8 is 5 and 3. 6 counters → 4 empty boxes. 3 and 7 more make 10."),
    math("Lesson 33 · Using Data from Real Graphs","Circle each pair of counters. Then answer.",[
      choice("more","🔴🔴🔴🔴🔴\n🟡🟡🟡🟡🟡🟡🟡🟡\nWhich color has more?",["yellow","red","the same"],"yellow","⚖️"),
      fill("nopartner","How many counters do not have a partner?","3","🟡"),
      choice("same","⚪⚪⚪⚪⚪⚪\n⚫⚫⚫⚫⚫⚫\nIs there the same number of colored counters?",["yes","no"],"yes","🟰"),
      choice("show","Counters without a partner show ___.",["which color has more","which color has fewer","the same number"],"which color has more","🔍"),
      choice("real","This is a real-object graph because ___.",["the counters are real objects","it has pictures","it has letters"],"the counters are real objects","🧮"),
      fill("draw","There are 4 gray counters. How many black counters do you draw so 2 black counters do not have a partner?","6","✏️")
    ],"Counters in pairs: each counter has a partner. 5 red and 8 yellow → 3 yellow counters do not have a partner, so yellow has more. 6 white and 6 black → the same number. 4 gray + 2 more = 6 black counters."),
    math("Lesson 34 · Using Data from Picture Graphs","Picture graph · Favorite Fruit: Apple 🍎🍎🍎🍎 · Banana 🍌🍌 · Grapes 🍇🍇🍇",[
      fill("vote","Look at the picture graph. Each picture stands for ___ vote.","1","🗳️"),
      fill("banana","How many children chose Banana?","2","🍌"),
      choice("most","Which fruit got the most votes?",["Apple","Banana","Grapes"],"Apple","🏅"),
      choice("fewest","Which fruit got the fewest votes?",["Banana","Apple","Grapes"],"Banana","🔻"),
      fill("moregrapes","How many more children chose Grapes than Banana?","1","🍇"),
      fill("all","How many children voted in all?","9","👧"),
      choice("about","What is the graph about?",["Favorite Fruit","Favorite Pets","Favorite Seasons"],"Favorite Fruit","📊")
    ],"Each picture stands for 1 vote. Apple 4 · Banana 2 · Grapes 3. Apple got the most votes, Banana the fewest. Grapes has 1 more than Banana. 4 + 2 + 3 = 9 children voted."),
    math("Lesson 35 · Describing Patterns","A pattern has a part that repeats over and over.",[
      choice("repeat","🟩🟩🟨🟩🟩🟨🟩🟩🟨\nWhat repeats over and over?",["green, green, yellow","green, yellow","green, yellow, yellow"],"green, green, yellow","🔁"),
      choice("letters","🟩🟩🟨🟩🟩🟨\nName each color with a letter: 🟩 = A, 🟨 = B. Which letters make the same pattern?",["A A B A A B","A B A B A B","A B B A B B"],"A A B A A B","🔤"),
      choice("unit","🐱🐶🐭🐱🐶🐭🐱🐶🐭\nWhat is the pattern unit?",["🐱🐶🐭","🐱🐶","🐶🐭"],"🐱🐶🐭","⭕"),
      choice("which","Which one is a pattern?",["🍎🍌🍎🍌🍎🍌","🍎🍌🍌🍎🍎🍎","🍌🍎🍎🍌🍌🍌"],"🍎🍌🍎🍌🍎🍌","🧩"),
      choice("word","In a pattern, the same part ___ over and over.",["repeats","stops","hides"],"repeats","🔁")
    ],"Green, green, yellow repeats over and over → A A B A A B. The pattern unit is the part that repeats: 🐱🐶🐭. 🍎🍌 repeats, so 🍎🍌🍎🍌🍎🍌 is a pattern."),
    math("Lesson 36 · Using Patterns to Predict","When you predict, you tell what comes next.",[
      choice("predict","When you ___, you tell what comes next.",["predict","repeat","count"],"predict","🔮"),
      choice("flower","🌸🍀🌸🍀🌸 ___\nWhat comes next?",["🍀","🌸","🌼"],"🍀","➡️"),
      choice("abc","A B C A B C A ___\nWhat letter comes next?",["B","A","C"],"B","🔤"),
      choice("bug","🐞🐞🐝🐞🐞🐝🐞 ___\nWhat comes next?",["🐞","🐝","🦋"],"🐞","🐞"),
      choice("three","Estimation: 🔴🔵🔵🔴🔵🔵🔴 …\nPredict the next 3.",["🔵🔵🔴","🔴🔵🔵","🔵🔴🔴"],"🔵🔵🔴","🔮")
    ],"Find the part that repeats, then tell what comes next. 🌸🍀 repeats → 🍀. A B C repeats → B. 🐞🐞🐝 repeats → 🐞. 🔴🔵🔵 repeats → 🔵🔵🔴."),
    math("Lesson 37 · Extending Shape Patterns","You can make a pattern go on and on. Use the part that repeats to tell what comes next.",[
      choice("shape","⬛🔺⬛🔺⬛ ___\nSay each shape. What shape comes next?",["triangle 🔺","square ⬛","circle ⚪"],"triangle 🔺","🔺"),
      choice("circle","⚪⚪⬛⚪⚪⬛⚪ ___\nWhat comes next?",["⚪","⬛","🔺"],"⚪","⚪"),
      choice("ab","🔷⭐🔷⭐🔷⭐\nName the shapes with letters. 🔷 = A",["A B A B A B","A A B A A B","A B C A B C"],"A B A B A B","🔤"),
      choice("abc","🔺⬜⚪🔺⬜⚪\nName the shapes with letters. 🔺 = A",["A B C A B C","A B A B A B","A A B C A A"],"A B C A B C","🔤"),
      choice("part","⭐⭐🌙⭐⭐🌙⭐⭐🌙\nWhich picture shows the part that repeats?",["⭐⭐🌙","⭐🌙","🌙⭐🌙"],"⭐⭐🌙","🧩")
    ],"⬛🔺 repeats → a triangle comes next. ⚪⚪⬛ repeats → ⚪. 🔷⭐ → A B A B A B. 🔺⬜⚪ → A B C A B C. The part that repeats is ⭐⭐🌙."),
    math("Lesson 38 · Problem Solving: Look for a Pattern","Read and Understand → Plan → Solve → Look Back and Check",[
      choice("first","What do you do FIRST?",["Read and Understand","Solve","Look Back and Check"],"Read and Understand","1️⃣"),
      choice("next","You made a Plan. What do you do NEXT?",["Solve","Read and Understand","Look Back and Check"],"Solve","➡️"),
      choice("last","What do you do LAST?",["Look Back and Check","Plan","Read and Understand"],"Look Back and Check","🔚"),
      choice("scarf","Grandma is making a scarf with a pattern.\n🟥🟦🟥🟦🟥🟦 ⬜⬜\nWhat colors will the next 2 stripes be?",["🟥🟦","🟦🟥","🟥🟥"],"🟥🟦","🧣"),
      choice("check","Look Back and Check: Do your stripes match the ___ of the pattern?",["rest","color of the sky","number of children"],"rest","✅")
    ],"Read and Understand → Plan: find the color pattern → Solve: color the stripes to follow the pattern → Look Back and Check: do your stripes match the rest of the pattern? 🟥🟦 repeats, so the next stripes are 🟥🟦."),
    math("Lesson 39 · Patterns in Tables","Use a table to record the numbers. Look for patterns.",[
      fill("b3","Each bike has 2 wheels.\nNumber of Bikes | Number of Wheels: 1 | 2 · 2 | 4 · 3 | ___","6","🚲"),
      fill("b4","Number of Bikes | Number of Wheels: 1 | 2 · 2 | 4 · 3 | 6 · 4 | ___","8","🚲"),
      fill("inc","The number of bikes increases by 1. The number of wheels increases by ___.","2","📈"),
      choice("how","How can you find the number of wheels on 5 bikes?",["Skip count by 2s.","Skip count by 10s.","Count back from 10."],"Skip count by 2s.","🦘"),
      fill("by5","Number of Tanks | Number of Fish: 1 | 5 · 2 | 10 · 3 | 15 · 4 | ___","20","🐟"),
      fill("by10","Skip count by 10s: 10, 20, 30, ___","40","🍪"),
      fill("num","1 2 3 1 2 3 1 2 ___\nWhat number comes next?","3","🔢")
    ],"Each bike has 2 wheels: 2, 4, 6, 8 — skip count by 2s. Fish in tanks: 5, 10, 15, 20 — skip count by 5s. Crackers in boxes: 10, 20, 30, 40 — skip count by 10s. 1 2 3 repeats → 3.")
  ];
  registerQuiz({
    id:"math-test-5",uploadDate:KEY,uploadLabel:LABEL,subjectKey:"math",
    title:"Math - Test 5",
    subject:{...SUBJECT,subtitle:`Test 5 · Lessons 32–39 · Ten-frames · Graphs · Patterns · Class Diary ${RANGE}`,
      groups:groupsOf([["Lesson 32","Representing Numbers on a Ten-Frame",1],["Lesson 33","Using Data from Real Graphs",1],["Lesson 34","Using Data from Picture Graphs",1],
        ["Lesson 35","Describing Patterns",1],["Lesson 36","Using Patterns to Predict",1],["Lesson 37","Extending Shape Patterns",1],
        ["Lesson 38","Problem Solving: Look for a Pattern",1],["Lesson 39","Patterns in Tables",1]]),
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
