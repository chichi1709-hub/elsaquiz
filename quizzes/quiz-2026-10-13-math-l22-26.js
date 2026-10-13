// Math Lesson 22–26 — BÀI ÔN TỔNG HỢP (cô ôn lại key concepts ngày 12/10/2026).
// Nguồn: Class Diary 17/09 (L22), 21/09 (L23), 23/09 (L24), 24/09 (L25), 28/09 (L26), 01/10 (chữa bài L26),
// 12/10 (Review lessons 22–26) — bản tổng hợp NKL/Tháng 9/Tong_hop_07-11.09.2026/02_MATH.md.
(()=>{
  const M="assets/mascot/academy/math.webp";
  const rotate=(items,key)=>{let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;const shift=hash%items.length;return [...items.slice(shift),...items.slice(0,shift)]};
  const choice=(id,label,choices,answer,icon)=>({id,label,type:"choice",choices:rotate(choices,id+label),answer,icon});
  const select=(id,label,choices,answer,icon)=>({id,label,type:"select",choices,answer,icon});
  const bank=(id,label,words,answer,icon)=>({id,label,type:"select",choices:words,answer,icon,fromWordBank:true});
  const num=(id,label,answer,icon)=>({id,label,type:"fill",answer:[String(answer)],icon});
  const yesNo=(id,label,isYes,icon)=>({id,label,type:"choice",choices:["YES","NO"],answer:isYes?"YES":"NO",icon});
  const q=(section,text,fields,explain,hint,extra={})=>({section,text,type:"compound",img:M,layout:"icon-activity",fields,explain,hint,...extra});
  const groupsOf=parts=>{let start=0;return parts.map(([title,subtitle,count],index)=>{const group={title:`${index+1}. ${title}`,subtitle,start,end:start+count-1};start+=count;return group})};
  const dots=(color,count)=>color.repeat(count);
  const WORDS=["subtract","difference","minus sign","equal sign","whole","part"];

  const QUESTIONS=[
    // ── Lesson 22: Finding Missing Parts of 9 ──
    q("Lesson 22 · Missing parts of 9","Color the part you know. Count the circles you did not color.",[
      num("six",`${dots("🔴",6)}${dots("⚪",3)}  6 + ___ = 9`,3,"🔴"),
      num("four",`${dots("🔴",4)}${dots("⚪",5)}  4 + ___ = 9`,5,"🔴"),
      num("eight",`${dots("🔴",8)}${dots("⚪",1)}  8 + ___ = 9`,1,"🔴"),
      num("two",`${dots("🔴",2)}${dots("⚪",7)}  2 + ___ = 9`,7,"🔴")
    ],"You can draw a picture to help you find missing parts of 9. Color the part you know. Count the circles you did not color. These circles are the missing part. 6 + 3 = 9 · 4 + 5 = 9 · 8 + 1 = 9 · 2 + 7 = 9","Đếm các hình tròn trắng (chưa tô) — đó là phần còn thiếu."),
    q("Lesson 22 · Whole and parts","Read the story. Find the missing part.",[
      choice("whole","There are 9 dogs. 5 are outside. Some are inside. Which number is the WHOLE?",["9","5","4"],"9","🐶"),
      num("inside","How many dogs are inside?",4,"🏠"),
      num("boats","Maria sees 9 boats. 7 boats are in the water. How many boats are not in the water?",2,"⛵")
    ],"You know the whole (9). You know a part (5 outside). Find the missing part: 4 dogs are in the house → 5 + 4 = 9. Maria: 9 − 7 = 2 boats.","Whole = tổng · part = một phần. Phần thiếu = tổng − phần đã biết."),

    // ── Lesson 23: Doubles ──
    q("Lesson 23 · Is it a double?","Both addends are the same → they are doubles.",[
      yesNo("a","2 + 2 = 4",true,"⚫"),
      yesNo("b","2 + 1 = 3",false,"⚫"),
      yesNo("c","5 + 5 = 10",true,"⚫"),
      yesNo("d","3 + 5 = 8",false,"⚫"),
      choice("addend","In 3 + 3 = 6, the numbers 3 and 3 are called ___.",["addends","sums","doubles signs"],"addends","➕")
    ],"This is a double: 2 + 2 = 4, 5 + 5 = 10 — the addends are the same. This is not a double: 2 + 1 = 3, 3 + 5 = 8 — the addends are not the same. (addend = số hạng)","Double = hai số hạng giống nhau."),
    q("Lesson 23 · Doubles — write the sum","You can use a double to add.",[
      num("two","2 + 2 =",4,"⚫"),
      num("three","3 + 3 =",6,"⚫"),
      num("four","4 + 4 =",8,"⚫"),
      num("six","6 + 6 =",12,"⚫"),
      num("seven","7 + 7 =",14,"⚫"),
      num("nine","9 + 9 =",18,"⚫"),
      num("zero","0 + 0 =",0,"⚫"),
      num("algebra","1 + 1 + 2 + 2 =",6,"🧮")
    ],"2+2=4 · 3+3=6 · 4+4=8 · 6+6=12 · 7+7=14 · 9+9=18 · 0+0=0 · (1+1)+(2+2) = 2+4 = 6. I know that double 3 is 6, so 3 + 3 = 6.","Think of doubles when both addends in an addition fact are the same."),

    // ── Lesson 24: Thinking Addition ──
    q("Lesson 24 · Thinking Addition","Add the doubles. Then use the doubles to help you subtract.",[
      num("a","If 3 + 3 = 6, then 6 − 3 =",3,"🧠"),
      num("b","If 4 + 4 = 8, then 8 − 4 =",4,"🧠"),
      num("c","If 5 + 5 = 10, then 10 − 5 =",5,"🧠"),
      num("d","If 6 + 6 = 12, then 12 − 6 =",6,"🧠"),
      choice("help","Which double will help you subtract: 8 − 4 = ___?",["4 + 4","3 + 3","5 + 5"],"4 + 4","🤔")
    ],"Think: 3 + 3 = 6, so 6 − 3 = 3 · 8 − 4 = 4 · 10 − 5 = 5 · 12 − 6 = 6 · The double 4 + 4 helps you subtract 8 − 4.","Đã thuộc phép cộng double thì dùng ngược lại để trừ."),

    // ── Lesson 25: Introducing Subtraction Number Sentences ──
    q("Lesson 25 · Word Bank","Choose the correct word.",[
      bank("subtract","You can ___ to find the difference.",WORDS,"subtract","➖"),
      bank("difference","8 − 5 = 3. The answer 3 is the ___.",WORDS,"difference","🔢"),
      bank("minus","In 8 − 5 = 3, the “−” is the ___.",WORDS,"minus sign","➖"),
      bank("equal","In 8 − 5 = 3, the “=” is the ___.",WORDS,"equal sign","🟰")
    ],"Word Bank: subtract · difference · minus sign · equal sign · subtraction sentence. 8 − 5 = 3 → 8 minus 5 equals 3.","subtract = trừ · difference = hiệu · minus sign = dấu trừ · equal sign = dấu bằng.",{wordBank:WORDS.slice(0,4)}),
    q("Lesson 25 · Hidden cubes","Mike has 8 cubes. He hides some cubes. 5 is the part you see.",[
      num("hidden","What is the hidden part?",3,"🧊"),
      choice("sentence","Which subtraction sentence tells the story?",["8 − 5 = 3","8 + 5 = 13","5 − 3 = 2"],"8 − 5 = 3","📝"),
      choice("read","How do you read 8 − 5 = 3?",["8 minus 5 equals 3","8 plus 5 equals 3","8 take 5 is 13"],"8 minus 5 equals 3","🗣️")
    ],"3 is the hidden part. It is the difference. You can write a subtraction sentence: 8 − 5 = 3 → 8 minus 5 equals 3.","Phần bị giấu = tổng − phần nhìn thấy."),
    q("Lesson 25 · Write a subtraction sentence","Find how many are left.",[
      num("bananas","🍌🍌🍌🍌🍌 5 take away 2 is ___",3,"🍌"),
      num("a","6 − 2 =",4,"➖"),
      num("b","5 − 1 =",4,"➖"),
      num("c","8 − 2 =",6,"➖"),
      num("d","7 − 2 =",5,"➖"),
      choice("domino","A domino has 9 dots: 5 pink and 4 black. Which subtraction sentence tells about it?",["9 − 5 = 4","9 − 3 = 6","5 − 4 = 1"],"9 − 5 = 4","🁫")
    ],"You can write a subtraction sentence to find how many are left: 5 take away 2 is 3 → 5 minus 2 equals 3 → 5 − 2 = 3. · 6−2=4 · 5−1=4 · 8−2=6 · 7−2=5 · 9 − 5 = 4.","take away = minus = bớt đi."),

    // ── Lesson 26: Stories About Separating ──
    q("Lesson 26 · Stories About Separating","Read the story. Write how many are left.",[
      num("birds","There are 6 birds on the branch. 4 birds fly away. How many birds are left?",2,"🐦"),
      num("ducks","7 ducks are in a pond. 3 fly away. How many are still in the pond?",4,"🦆"),
      num("apples","Abby has 8 apples. She gives away 3 apples. How many apples does she have left?",5,"🍎"),
      num("pears","Maya has 9 pears. 3 pears are green. The rest are yellow. How many pears are yellow?",6,"🍐")
    ],"6 − 4 = 2 birds · 7 − 3 = 4 ducks (7 is the whole, 3 is the part you know, 4 is the difference) · 8 − 3 = 5 apples · 9 − 3 = 6 yellow pears.","Tổng − phần bị bớt đi = phần còn lại."),
    q("Lesson 26 · Which number sentence?","Choose the number sentence that helps you find the answer.",[
      choice("birds7","There are 7 birds. 3 birds fly away. How many birds are left?",["7 − 3 = 4","7 − 2 = 5","9 − 7 = 2","7 − 6 = 1"],"7 − 3 = 4","🐦"),
      choice("birds6","There are 6 birds. 4 birds fly away.",["6 − 4 = 2","6 + 4 = 10","4 − 2 = 2"],"6 − 4 = 2","🐦"),
      choice("check","After you find the answer, you should…",["check to see if your answer makes sense","erase it","add more birds"],"check to see if your answer makes sense","✅")
    ],"7 − 3 = 4 · 6 − 4 = 2. Check to see if your answer makes sense.","Bắt đầu từ số lớn (tổng), trừ đi số bay mất/cho đi."),
    q("Lessons 22–26 · Mixed review","Choose + or − and the answer.",[
      select("op1","5 dogs and 4 more dogs come. How many dogs in all? Use…",["+","−"],"+","🐶"),
      num("ans1","5 + 4 =",9,"🐶"),
      select("op2","9 cookies. Eat 4. How many are left? Use…",["+","−"],"−","🍪"),
      num("ans2","9 − 4 =",5,"🍪")
    ],"Join (more come) → add: 5 + 4 = 9 · Separate (eat, fly away, give away) → subtract: 9 − 4 = 5. Part + part = whole; whole − part = part.","Thêm vào → cộng (+) · bớt đi → trừ (−).")
  ];

  registerQuiz({
    id:"math-lessons-22-26-review",
    uploadDate:"2026-10-13",
    subjectKey:"math",
    title:"Math – Lesson 22–26 Review",
    subject:{name:"Math",icon:"🧮",accent:"#ff8a3d",soft:"#fff1e6",subtitle:"Lesson 22–26 · Missing parts of 9 · Doubles · Thinking Addition · Subtraction sentences · Separating stories",scoreByField:true,
      groups:groupsOf([
        ["Lesson 22: Finding Missing Parts of 9","Whole · part · missing part",2],
        ["Lesson 23: Doubles","Both addends are the same",2],
        ["Lesson 24: Thinking Addition","Use doubles to subtract",1],
        ["Lesson 25: Introducing Subtraction Number Sentences","subtract · difference · minus sign · equal sign",3],
        ["Lesson 26: Stories About Separating","How many are left?",2],
        ["Mixed Review","Add or subtract?",1]
      ]),
      questions:QUESTIONS,
      readings:[
        {id:"notes-math-22-26",title:"Ghi nhớ — Math Lesson 22–26",byline:"Cô ôn lại key concepts ngày 12/10/2026",mode:"notes",text:[
          "📅 Lấy từ Class Diary: 17/09, 21/09, 23/09, 24/09, 28/09, 01/10 và Review 12/10/2026",
          "(17/09 · L22) You can draw a picture to help you find missing parts of 9. Color the part you know. Count the circles you did not color. These circles are the missing part. 6 + 3 = 9.",
          "(21/09 · L23) Both addends are the same. They are doubles: 2 + 2 = 4, 3 + 3 = 6.",
          "(23/09 · L24) Think of doubles when both addends in an addition fact are the same. If 3 + 3 = 6, then 6 − 3 = 3.",
          "(24/09 · L25) Word Bank: subtract · difference · minus sign · equal sign · subtraction sentence. 8 − 5 = 3 → 8 minus 5 equals 3.",
          "(12/10) You can write a subtraction sentence to find how many are left: 5 take away 2 is 3.",
          "(28/09 · L26) 6 birds, 4 fly away → 6 − 4 = 2. Check to see if your answer makes sense."
        ].join("\n")}
      ]}
  });
})();
