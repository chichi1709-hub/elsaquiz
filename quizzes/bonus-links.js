// BONUS QUIZZES — bài làm trực tiếp cho từng link trong thẻ "Bonus" (game Baamboozle/Wordwall, video YouTube, Big Book).
// Câu hỏi/đáp án của game lấy NGUYÊN VĂN từ dữ liệu gốc của trang (Baamboozle: dấu đáp án đúng; Wordwall: file
// content-model JSON). Video/sách: câu hỏi dựng từ các ý dạy và ví dụ thật trong video/sách (không chép lời bài hát
// hay nguyên văn sách). Bài bonus có hidden:true → không hiện trong Danh sách, mở từ nút "Do the quiz here".
(()=>{
  const rot=(items,key)=>{let h=0;for(const c of key)h=(h*31+c.charCodeAt(0))>>>0;const s=h%items.length;return [...items.slice(s),...items.slice(0,s)]};
  const ch=(id,label,choices,answer,icon="")=>({id,label,type:"choice",choices:rot(choices,id+label),answer,icon});
  const fixed=(id,label,choices,answer,icon="")=>({id,label,type:"choice",choices,answer,icon});
  const sel=(id,label,choices,answer,icon="")=>({id,label,type:"select",choices,answer,icon});
  const multi=(id,label,choices,answer,icon="")=>({id,label,type:"multi",choices:rot(choices,id+label),answer,icon});
  const tf=(id,label,isTrue,icon="")=>fixed(id,label,["TRUE","FALSE"],isTrue?"TRUE":"FALSE",icon);
  const card=(section,text,fields,explain)=>({section,text,type:"compound",layout:"icon-activity",img:"assets/mascot/academy/language.webp",fields,explain});
  const chunk=(list,size)=>Array.from({length:Math.ceil(list.length/size)},(_,i)=>list.slice(i*size,i*size+size));
  const ICON={language:"📚",science:"🐾",math:"🧮",wellbeing:"💞"},ACC={language:"#9b69e8",science:"#31a66d",math:"#ff8a3d",wellbeing:"#e45d9c"};
  window.BONUS_QUIZ_BY_URL=window.BONUS_QUIZ_BY_URL||{};
  // Chuẩn hoá link để so khớp: bỏ "index.php/", bỏ tham số (trừ ?v= của YouTube), bỏ "/" cuối.
  window.normalizeBonusUrl=url=>{
    try{const u=new URL(url);const v=u.hostname.includes("youtube")?u.searchParams.get("v"):null;
      return (u.hostname.replace(/^www\./,"")+u.pathname.replace("/index.php","").replace(/\/$/,"")+(v?`?v=${v}`:"")).toLowerCase()}catch{return url}
  };
  // remember: ý cần nhớ lấy từ nội dung link → hiện trong thẻ REMEMBER của bài có link này (tiêu đề = tên link).
  window.BONUS_REMEMBER=window.BONUS_REMEMBER||{};
  function bonus({id,urls,subjectKey="language",title,source,cards,remember}){
    for(const url of urls) window.BONUS_QUIZ_BY_URL[window.normalizeBonusUrl(url)]=id;
    if(remember) window.BONUS_REMEMBER[id]=remember;
    registerQuiz({id,hidden:true,uploadDate:"2026-10-14",subjectKey,title:`Bonus – ${title}`,
      subject:{name:subjectKey==="science"?"Science":subjectKey==="math"?"Math":subjectKey==="wellbeing"?"Wellbeing":"Language Arts",icon:ICON[subjectKey],accent:ACC[subjectKey],soft:"#f5efff",
        subtitle:`Bonus quiz · ${source}`,scoreByField:true,
        groups:[{title:`1. ${title}`,subtitle:source,start:0,end:cards.length-1}],questions:cards,
        readings:[{id:`${id}-src`,title:"Bonus",byline:source,mode:"bonus",links:urls.slice(0,1).map(url=>({label:"Open the original",url})),text:""}]}});
  }

  // ───────── 1. HFW game (Baamboozle 3706689 "Unit 2 - Week 1 - Gap Fill HFW") ─────────
  const HFW=["again","help","new","there","use"];
  const hfw=[["Can you read the story ____?","again"],["I have a ____ pencil.","new"],["Please ____ me open this box.","help"],["We ____ crayons in art class.","use"],["Is ____ a dog outside?","there"],
    ["The teacher said 'Try ______'","again"],["I got a ____ backpack.","new"],["Can you ____ me find my shoes?","help"],["I like to ____ my computer.","use"],["Is ____ a bird in the tree?","there"],
    ["Let's sing the song ____!","again"],["This is my ____ friend.","new"],["Please ____ me clean up.","help"],["I ____ a ruler for school.","use"],["Is ____ water in the bottle?","there"],
    ["Play the game ____!","again"],["She has a ____ dress.","new"],["Can you ____ me carry this bag?","help"],["We ____ our books every day.","use"],["Is ____ a ball on the floor?","there"],
    ["Let's read that page ____!","again"],["He got a ____ car.","new"],["Please ____ me draw a cat.","help"],["I want to ____ a fork to eat.","use"],["Is ____ milk in the fridge?","there"],
    ["Say the word ____!","again"],["My family moved to a ____ house.","new"],["Can you ____ me with my coat?","help"],["I ____ scissors to cut paper.","use"],["Is ____ a spider on the wall?","there"]];
  bonus({id:"bonus-hfw-again-help-new-there-use",urls:["https://www.baamboozle.com/game/3706689"],title:"High-Frequency Words Game",source:"Baamboozle · Unit 2 - Week 1 - Gap Fill HFW",
    cards:chunk(hfw,5).map((rows,k)=>({...card("Gap Fill HFW",`Choose the missing word. (${k*5+1}–${k*5+rows.length})`,rows.map(([q,a],i)=>sel(`h${k}${i}`,q,HFW,a)),rows.map(([q,a])=>q.replace(/_+/,a)).join(" · ")),wordBank:HFW}))});

  // ───────── 2. Video "Sit or Stand Short E Words" ─────────
  const shortE=[["pen",1],["web",1],["rug",0],["ten",1],["jet",1],["pan",0],["red",1],["leg",1],["pin",0],["fox",0],["net",1],["sun",0],["gem",1],["zip",0],["wet",1],["cap",0]];
  bonus({id:"bonus-video-short-e-sit-or-stand",remember:["Short e: Stand up if the word has the short e sound in the middle: pen, web, ten, jet, red, leg, net, gem, wet."],urls:["https://www.youtube.com/watch?v=Lkuucy5Fegk"],title:"Short e: Sit or Stand",source:"Video · Sit or Stand Short E Words (Little Playful Learners)",
    cards:[card("Short e","Stand up if the middle sound is short e. Sit down if it is not.",[fixed("rule","In the video, you STAND UP when you hear…",["the short e sound","the short a sound"],"the short e sound","🧍")],"Stand up if the word has the short e sound in the middle."),
      ...chunk(shortE,8).map((rows,k)=>card("Short e",`Stand or sit? (${k*8+1}–${k*8+rows.length})`,rows.map(([w,e],i)=>sel(`e${k}${i}`,w,["stand (short e)","sit (not short e)"],e?"stand (short e)":"sit (not short e)")),
        "Short e (stand): pen, web, ten, jet, red, leg, net, gem, wet · Not short e (sit): rug, pan, pin, fox, sun, zip, cap"))]});

  // ───────── 3. Video "The -ed song" (Nessy) ─────────
  bonus({id:"bonus-video-ed-song",remember:["-ed: e + d makes -ed. It goes at the end of a word.", "-ed works on verbs (action words) and sends them into the past: jump → jumped."],urls:["https://www.youtube.com/watch?v=w1tDY0pPq3w"],title:"The -ed Song",source:"Video · Nessy · The -ed song",
    cards:[card("-ed","Answer the questions about the -ed song.",[
      ch("make","Which letters make -ed?",["e + d","a + d","e + t"],"e + d","🔤"),
      ch("where","Where does -ed go?",["at the end of a word","at the start of a word","in the middle of a word"],"at the end of a word","➡️"),
      ch("which","-ed works on…",["verbs (action words)","names of people","colors"],"verbs (action words)","🏃"),
      ch("when","Adding -ed sends the word…",["into the past","into the future","to a new place"],"into the past","⏮️"),
      ch("jump","jump + ed =",["jumped","jumpd","edjump"],"jumped","🦘")],
      "e + d makes -ed. It goes at the end of a word. It works on verbs (action words) and turns them into the past tense: jump → jumped.")]});

  // ───────── 4. Wordwall 12306745 "ed ending" ─────────
  const SND=["/t/","/d/","/id/"];
  const edEnding=[["lived","/d/"],["tired","/d/"],["called","/d/"],["loved","/d/"],["asked","/t/"],["looked","/t/"],["scratched","/t/"],["laughed","/t/"],["wanted","/id/"],["needed","/id/"],["folded","/id/"],["started","/id/"]];
  bonus({id:"bonus-wordwall-ed-ending",remember:["/d/: lived, tired, called, loved", "/t/: asked, looked, scratched, laughed", "/id/: wanted, needed, folded, started"],urls:["https://wordwall.net/resource/12306745/ed-ending"],title:"-ed Ending Sort",source:"Wordwall · ed ending (group sort)",
    cards:chunk(rot(edEnding,"edEnding"),6).map((rows,k)=>card("-ed ending","Which sound does -ed make? (/id/ is written /ed/ in the game)",rows.map(([w,a],i)=>sel(`w${k}${i}`,w,SND,a)),
      "/d/: lived, tired, called, loved · /t/: asked, looked, scratched, laughed · /id/: wanted, needed, folded, started"))});

  // ───────── 5. Video "What is a Noun?" (Jack Hartmann) ─────────
  const PPT=["person","place","thing"];
  const jh=[["teacher","person"],["scientist","person"],["mother","person"],["firefighter","person"],["sister","person"],["library","place"],["schoolyard","place"],["classroom","place"],["mall","place"],["bicycle","thing"],["pencil","thing"],["pumpkin","thing"],["computer","thing"],["star","thing"]];
  bonus({id:"bonus-video-what-is-a-noun",remember:["A noun is a person, place or thing.", "Person: teacher, scientist, mother, firefighter, sister", "Place: library, schoolyard, classroom, mall", "Thing: bicycle, pencil, pumpkin, computer, star"],urls:["https://www.youtube.com/watch?v=9cu7C07pNbA"],title:"What is a Noun?",source:"Video · Jack Hartmann · What is a Noun?",
    cards:[card("Nouns","What is a noun?",[ch("def","A noun is a…",["person, place or thing","color","action word"],"person, place or thing","📛")],"A noun is a person, place or thing."),
      ...chunk(rot(jh,"jh"),7).map((rows,k)=>card("Nouns","Is it a person, a place or a thing?",rows.map(([w,a],i)=>sel(`n${k}${i}`,w,PPT,a)),
        "Person: teacher, scientist, mother, firefighter, sister · Place: library, schoolyard, classroom, mall · Thing: bicycle, pencil, pumpkin, computer, star"))]});

  // ───────── 6. Baamboozle 80716 "Find the Nouns - Beginner level" ─────────
  const findNoun=[["My finger hurts.","finger"],["The kangaroo is brown.","kangaroo"],["She tickles the bear.","bear"],["She kicks a ball.","ball"],["What a cute cat!","cat"],["The dog is white.","dog"],["He climbs a tree.","tree"],["The boy cries.","boy"],
    ["Her book is yellow.","book"],["Dad drives quickly.","Dad"],["My shirt is very dirty.","shirt"],["The lion is dangerous.","lion"],["That is a big house!","house"],["I drink green tea.","tea"],["Mum loves cooking.","Mum"],["I am very scared of big spiders!","spiders"],
    ["This penguin is black and white.","penguin"],["I like to hike up mountains quickly.","mountains"],["They have lots of books.","books"],["That boy is so noisy!","boy"],["This is a very hot month.","month"],["Butterflies are beautiful.","Butterflies"],["Eating vegetables is very good for you.","vegetables"],["I have six puppies.","puppies"]];
  const words=s=>[...new Set(s.replace(/[.!?]/g,"").split(" ").filter(w=>w.length>1||w==="I"))];
  bonus({id:"bonus-find-the-nouns",urls:["https://www.baamboozle.com/index.php/game/80716","https://www.baamboozle.com/game/80716"],title:"Find the Nouns",source:"Baamboozle · Find the Nouns - Beginner level",
    cards:chunk(findNoun,6).map((rows,k)=>card("Find the noun","Find the noun in the sentence.",rows.map(([s,a],i)=>fixed(`f${k}${i}`,s,words(s),a)),rows.map(([s,a])=>`${s} → ${a}`).join(" · ")))});

  // ───────── 7. Baamboozle 451314 "Nouns! Nouns! Nouns!" ─────────
  const PPTA=["person","place","thing","animal"];
  bonus({id:"bonus-nouns-nouns-nouns",urls:["https://www.baamboozle.com/game/451314"],title:"Nouns! Nouns! Nouns!",source:"Baamboozle · Nouns! Nouns! Nouns!",
    cards:[card("Nouns","Find the nouns in this sentence.",[multi("copy","I have a copybook in my schoolbag.",["I","have","copybook","in","my","schoolbag"],["copybook","schoolbag"],"🎒")],"copybook and schoolbag"),
      card("Nouns","Is this noun a person, place, thing, or animal?",[sel("arg","ARGENTINA",PPTA,"place"),sel("baby","BABY",PPTA,"person"),sel("comp","COMPUTER",PPTA,"thing"),sel("garden","GARDEN",PPTA,"place"),sel("croc","CROCODILE",PPTA,"animal"),sel("student","STUDENT",PPTA,"person"),sel("shoes","SHOES",PPTA,"thing")],
        "Argentina – place · baby – person · computer – thing · garden – place · crocodile – animal · student – person · shoes – thing"),
      card("Nouns","How many nouns are there?",[fixed("c1","My house is near the school.",["1","2","3","4"],"2"),fixed("c2","Maria parked the car in Unicenter.",["1","2","3","4"],"3"),fixed("c3","Go to the supermarket and buy milk, eggs, and sugar.",["2","3","4","5"],"4"),
        fixed("c4","I'm going to the park to play football.",["1","2","3","4"],"2"),fixed("c5","The dog is drinking water.",["1","2","3","4"],"2")],
        "2 (house, school) · 3 (Maria, car, Unicenter) · 4 (supermarket, milk, eggs, sugar) · 2 (park, football) · 2 (dog, water)"),
      card("Nouns","Find the noun in this sentence.",[fixed("i1","This ice cream is cold!",["ice cream","is","cold"],"ice cream"),fixed("i2","Can you go to the supermarket today?",["go","supermarket","today"],"supermarket"),
        fixed("i3","My children are playing.",["My","children","playing"],"children"),fixed("i4","My sofa is big and blue.",["sofa","big","blue"],"sofa"),fixed("i5","That is a tall tree!",["That","tall","tree"],"tree")],
        "ice cream · supermarket · children · sofa · tree")]});

  // ───────── 8. Video "Captain Comma" (ABCmouse) ─────────
  bonus({id:"bonus-video-captain-comma",remember:["Commas: lion, tiger, and bear · salad, soup, and bread · jump, swim, and splash", "A comma in the wrong place can be as confusing as no commas at all."],urls:["https://www.youtube.com/watch?v=zGvlH1YVPc4"],title:"Captain Comma",source:"Video · ABCmouse · Learn about Commas with Captain Comma",
    cards:[card("Commas","Captain Comma fixes the signs. Choose the sign with the commas in the right places.",[
      ch("zoo","At the zoo, visit a…",["lion, tiger, and bear","lion tiger and bear","lion, tiger and, bear"],"lion, tiger, and bear","🦁"),
      ch("diner","At Jane's Diner, enjoy…",["salad, soup, and bread","salad soup, and bread","salad, soup and, bread"],"salad, soup, and bread","🥗"),
      ch("pool","At Pool Paradise, you can…",["jump, swim, and splash","jump swim and splash","jump, swim and, splash"],"jump, swim, and splash","🏊"),
      ch("market","At Mel's Market, pick up…",["apples, oranges, and bananas","apples oranges and bananas","apples, oranges and, bananas"],"apples, oranges, and bananas","🍎"),
      tf("wrong","A comma in the wrong place can be as confusing as no commas at all.",true,"🤔")],
      "lion, tiger, and bear · salad, soup, and bread · jump, swim, and splash · apples, oranges, and bananas · A comma in the wrong place can be confusing too. Use commas wisely!")]});

  // ───────── 9. Video "Commas in a Series" (LollyPond) ─────────
  bonus({id:"bonus-video-commas-lollypond",remember:["Commas make lists clear: My best friends are Jenny, Bruce, and Dennis.", "Without commas it is confusing: Jenny Bruce and Dennis."],urls:["https://www.youtube.com/watch?v=cQOX3UdeAZI"],title:"Commas in a Series (song)",source:"Video · LollyPond · Commas in a Series",
    cards:[card("Commas","Answer the questions about the song.",[
      ch("friends","My best friends are Jenny, Bruce, and Dennis. How many friends?",["3","2","1"],"3","👫"),
      ch("nocomma","My best friends are Jenny Bruce and Dennis. Without commas, can you tell how many friends?",["No, it is confusing.","Yes, it is easy."],"No, it is confusing.","😕"),
      ch("beach","For the beach I need…",["a hat, a towel, and sunscreen","a hat a towel and sunscreen","a hat, a towel and, sunscreen"],"a hat, a towel, and sunscreen","🏖️"),
      tf("clear","Commas make lists clear.",true,"✨")],
      "Jenny, Bruce, and Dennis = 3 friends. Without commas it is confusing. Put a comma after each thing in the list except the last: a hat, a towel, and sunscreen.")]});

  // ───────── 10. Baamboozle 114894 "Commas in a Series" ─────────
  const OK=["It's correct!","It's NOT correct!"];
  const commas=[["a dog, cat, and monkey",1],["blueberries bananas, strawberries, and oranges.",0],["Would you like to go to the park, mall, or pool?",1],["trees, flowers weeds, and bushes.",0],["I bought soap, napkins, crayons, erasers, and rulers at the store today.",1],["trucks, vans, cars, and motorcycles.",1],
    ["I will wear shorts, socks pants, and a shirt.",0],["I need to buy flour, salt, sugar rice, and oil.",0],["A rainbow has the colors red, orange, yellow, green, blue, and purple.",1],["feet, eyes nose, mouth and arms.",0],["Kaleb, Zayden Kaleo Zaiden, and Brennen.",0],["Did you see Frozen, Aladdin, or Cinderella?",1],
    ["Should I start at the bank, store, or post office?",1],["Mrs. Yoshida, Mrs. Mizutani, and Ms. Carin.",1],["Do you want to play Legos, Connect 4, or Battleship?",1],["movies, tv shows music, and plays.",0],["I want to see the planets, stars, and the moon.",1],["Don't forget your phone, wallet, mask, and keys!",1],
    ["Do you enjoy Language Arts, Math Science PE or Art the most?",0],["fish, sharks turtles jellyfish, or eels?",0],["questions, sentences, commands, and exclamations.",1],["I just planted tomatoes, cabbages, corn, and eggplant in my garden.",1],["Being healthy means I will get enough sleep eat good foods, exercise and drink lots of water.",0],["Would you like a sticker, stamp or star?",0]];
  bonus({id:"bonus-commas-correct-or-not",urls:["https://www.baamboozle.com/game/114894"],title:"Commas: Correct or Not?",source:"Baamboozle · Commas in a Series",
    cards:chunk(commas,6).map((rows,k)=>card("Commas","Is the comma use correct?",rows.map(([s,c],i)=>fixed(`c${k}${i}`,s,OK,c?OK[0]:OK[1])),rows.map(([s,c])=>`${c?"✓":"✗"} ${s}`).join(" · ")))});

  // ───────── 11. Video "The Suffix ED Makes 3 Sounds" (Sue's Strategies) ─────────
  bonus({id:"bonus-video-ed-3-sounds",remember:["-ed shows that an action happened in the past.", "/id/: words ending in d or t (Ded Ted): landed, started", "/t/: whisper sounds (k, p, sh, ch): kicked, pumped, pitched", "/d/: noisy (voice) sounds: roared, chewed, sneezed"],urls:["https://www.youtube.com/watch?v=Dsd0eFgU0m8"],title:"The Suffix -ed Makes 3 Sounds",source:"Video · Sue's Strategies · Episode 18",
    cards:[card("-ed","The suffix -ed shows that an action happened in the past.",[
      ch("past","-ed shows that an action happened…",["in the past","right now","tomorrow"],"in the past","⏮️"),
      ch("ded","When the root word ends in d or t, -ed sounds like…",["/id/","/t/","/d/"],"/id/","📏"),
      ch("whisper","When the word ends in a whisper sound (k, p, sh, ch), -ed sounds like…",["/t/","/d/","/id/"],"/t/","🤫"),
      ch("noisy","When the word ends in a noisy (voice) sound, -ed sounds like…",["/d/","/t/","/id/"],"/d/","🔊")],
      "Ded Ted: words ending in d or t → /id/ · Whisper sounds → /t/ · Noisy sounds → /d/. Look at the letters at the end of the word."),
      card("-ed","What sound does -ed make?",[sel("landed","landed",SND,"/id/"),sel("started","started",SND,"/id/"),sel("kicked","kicked",SND,"/t/"),sel("pumped","pumped",SND,"/t/"),
        sel("pitched","pitched",SND,"/t/"),sel("roared","roared",SND,"/d/"),sel("chewed","chewed",SND,"/d/"),sel("sneezed","sneezed",SND,"/d/")],
        "landed, started → /id/ · kicked, pumped, pitched → /t/ · roared, chewed, sneezed → /d/")]});

  // ───────── 12. Wordwall 10907171 "Ed Pronunciation Endings" ─────────
  const edPro=[["jumped","/t/"],["played","/d/"],["fixed","/t/"],["waited","/id/"],["worked","/t/"],["cleaned","/d/"],["liked","/t/"],["talked","/t/"],["called","/d/"],["excited","/id/"],
    ["rained","/d/"],["invited","/id/"],["stopped","/t/"],["listened","/d/"],["stayed","/d/"],["bored","/d/"],["helped","/t/"],["relaxed","/t/"],["washed","/t/"],["tired","/d/"]];
  bonus({id:"bonus-wordwall-ed-pronunciation",urls:["https://wordwall.net/resource/10907171/ed-pronunciation-endings"],title:"-ed Pronunciation Endings",source:"Wordwall · Ed Pronunciation Endings",
    cards:chunk(edPro,5).map((rows,k)=>card("-ed","Which sound does -ed make?",rows.map(([w,a],i)=>sel(`p${k}${i}`,w,SND,a)),rows.map(([w,a])=>`${w} ${a}`).join(" · ")))});

  // ───────── 13. Video "Community Places" (Teacher Lily) ─────────
  const PLACES=["hospital","police station","school","fire station","playground","bakery","barbershop","mall","restaurant","market","bank","drugstore"];
  bonus({id:"bonus-video-community-places",remember:["Community: a group of people who share something in common.", "Hospital: Doctors and nurses treat sick or hurt people.", "Fire station: Firefighters work here.", "Bakery: The baker sells bread, cakes, muffins and cookies."],urls:["https://www.youtube.com/watch?v=A_Gy6DbFFeo"],title:"Community Places",source:"Video · Community Places for Kindergarten (Teacher Lily)",
    cards:[card("Community","A community is a group of people who share something in common. Where do you go?",[
      sel("hosp","Doctors and nurses treat sick or hurt people.",PLACES,"hospital","🏥"),sel("pol","Policemen and policewomen work here.",PLACES,"police station","🚓"),
      sel("sch","We learn to read, write and count with our teachers.",PLACES,"school","🏫"),sel("fire","We call for help when there is a fire. Firefighters work here.",PLACES,"fire station","🚒"),
      sel("play","Children play, jog, relax and have fun.",PLACES,"playground","🛝"),sel("bake","The baker sells bread, cakes, muffins and cookies.",PLACES,"bakery","🥐")],
      "hospital · police station · school · fire station · playground · bakery"),
      card("Community","Where do you go?",[
        sel("barb","You get a haircut.",PLACES,"barbershop","💇"),sel("mall","You shop and enjoy the day.",PLACES,"mall","🛍️"),
        sel("rest","You buy and eat cooked food. A chef and waiters work here.",PLACES,"restaurant","🍽️"),sel("mkt","Vendors sell fresh meat and vegetables.",PLACES,"market","🥕"),
        sel("bank","It keeps money safe.",PLACES,"bank","🏦"),sel("drug","The pharmacist sells medicine and vitamins.",PLACES,"drugstore","💊")],
        "barbershop · mall · restaurant · market · bank · drugstore")]});

  // ───────── 14. Video "Short Vowel Letter u" (English4abc) ─────────
  const SU=["bug","nut","sun","hut","bus","cup","rug","gum"];
  bonus({id:"bonus-video-short-u",urls:["https://www.youtube.com/watch?v=i81NmRz4nu0"],title:"Short Vowel u",source:"Video · English4abc · Short Vowel Letter u",
    cards:[card("Short u","u is a short vowel. Look at the picture. Choose the word.",[
      sel("bug","🐞",SU,"bug"),sel("nut","🥜",SU,"nut"),sel("sun","☀️",SU,"sun"),sel("hut","🛖",SU,"hut"),sel("bus","🚌",SU,"bus"),sel("cup","☕",SU,"cup"),sel("rug","🟫 (a small carpet on the floor)",SU,"rug"),sel("gum","🍬 (you chew it)",SU,"gum")],
      "bug, nut, sun, hut, bus, cup, rug, gum — all have the short u sound.")]});

  // ───────── 15. Baamboozle 709861 "Short vowel u" (đáp án phụ thuộc hình → thêm gợi ý) ─────────
  const bz=[["🎉 _un (a happy time)","fun",["fun","run","sun"]],["🤗 _ug","hug",["hug","rug","bug"]],["🏃 _un","run",["run","fun","bun"]],["☀️ _un","sun",["sun","run","fun"]],["🦆 _uck","duck",["duck","truck","luck"]],
    ["🦘 _ump","jump",["jump","bump","pump"]],["🚌 __us","bus",["bus","plus","us"]],["☕ __up","cup",["cup","pup","up"]],["🏺 __ug (holds water)","jug",["jug","hug","rug"]],["🥁 __rum","drum",["drum","gum","plum"]],
    ["🐻 __ub (a baby bear)","cub",["cub","tub","rub"]],["🛁 __ub (you take a bath in it)","tub",["tub","cub","rub"]],["🐷 __ud (pigs play in it)","mud",["mud","bud","dud"]],["✂️ __ut","cut",["cut","nut","hut"]],["🥜 __uts","nuts",["nuts","huts","cuts"]],
    ["🍬 __um (you chew it)","gum",["gum","drum","hum"]],["🚚 __ruck","truck",["truck","duck","luck"]],["🟫 __ug (on the floor)","rug",["rug","bug","mug"]],["🐞 __ug","bug",["bug","rug","hug"]],["🍔 __un (bread for a burger)","bun",["bun","sun","fun"]]];
  bonus({id:"bonus-short-vowel-u-game",urls:["https://www.baamboozle.com/index.php/game/709861","https://www.baamboozle.com/game/709861"],title:"Short Vowel u Game",source:"Baamboozle · Short vowel u",
    cards:chunk(bz,5).map((rows,k)=>card("Short u","Look at the picture. Choose the word.",rows.map(([q,a,c],i)=>ch(`u${k}${i}`,q,c,a)),rows.map(([,a])=>a).join(" · ")))});

  // ───────── 16. Big Book "The 3 Little Dassies" (Google Drive) ─────────
  bonus({id:"bonus-big-book-3-little-dassies",urls:["https://drive.google.com/file/d/1kN424M8TAn-k_VeqA8Uvezyt1cC9Z6MC/view?usp=drive_link"],title:"The 3 Little Dassies (Big Book)",source:"Big Book · The 3 Little Dassies (Jan Brett)",
    cards:[card("3 Little Dassies","Think about the Big Book.",[
      ch("names","What are the three dassie sisters called?",["Mimbi, Pimbi and Timbi","Gus, Russ and Bud","Jen, Jim and Rex"],"Mimbi, Pimbi and Timbi","🐹"),
      ch("why","Why do they leave home?",["They want a cooler, less crowded place, safe from eagles.","They want to go to school.","They are looking for food."],"They want a cooler, less crowded place, safe from eagles.","🏜️"),
      ch("agama","Who is Agama Man?",["a friendly lizard","an eagle","a farmer"],"a friendly lizard","🦎"),
      ch("shiver","Why do the dassies shiver in the hot sun?",["They are scared of the eagles.","They are cold.","They are wet."],"They are scared of the eagles.","😨")],
      "Mimbi, Pimbi and Timbi want a cooler, less crowded place, safe from big eagles. Agama Man is a friendly lizard. They shiver because they are scared of the eagles, not cold."),
      card("3 Little Dassies","What happens next?",[
        sel("mimbi","Mimbi builds a house of…",["grass","sticks","stones"],"grass","🌾"),sel("pimbi","Pimbi builds a house of…",["grass","sticks","stones"],"sticks","🪵"),sel("timbi","Timbi builds a house of…",["grass","sticks","stones"],"stones","🪨"),
        ch("strong","Which house does not move when the eagle flaps and claps?",["the stone house","the grass house","the stick house"],"the stone house","🏠"),
        ch("end","How does the eagle end up?",["He falls down the chimney and flies away black as soot.","He lives with the dassies.","He builds a stone house."],"He falls down the chimney and flies away black as soot.","🔥")],
        "Grass house and stick house fall apart. The stone house does not move. The eagle tumbles down the chimney into the fire and flies home black and sooty.")]});

  // ───────── 17. Big Book "Millie Waits for the Mail" (Google Drive) ─────────
  bonus({id:"bonus-big-book-millie",urls:["https://drive.google.com/file/d/1Ab-WyOJrt3t_3m5uGtUI2QWt6o-o2Urb/view?usp=drive_link"],title:"Millie Waits for the Mail (Big Book)",source:"Big Book · Millie Waits for the Mail (Alexander Steffensmeier)",
    cards:[card("Millie","Think about the Big Book.",[
      ch("who","Who is Millie?",["a cow","a dog","a mail carrier"],"a cow","🐄"),
      ch("loves","What does Millie love more than anything else?",["scaring the mail carrier","eating grass","sleeping"],"scaring the mail carrier","😱"),
      ch("bike","How does the mail carrier ride?",["on a yellow bicycle","on a tractor","in a bus"],"on a yellow bicycle","🚲"),
      ch("farmer","Why doesn't the farmer like Millie's game?",["His packages arrive broken.","Millie eats his food.","Millie is too loud."],"His packages arrive broken.","📦")],
      "Millie the cow loves to scare the mail carrier and chase him off the farm on his yellow bicycle. The farmer's packages arrive broken."),
      card("Millie","What happens next?",[
        ch("idea","What is the mail carrier's idea?",["to bring Millie a package","to buy a new bike","to stop the mail"],"to bring Millie a package","🎁"),
        ch("pkg","What happens to the package?",["It lands under the tractor and is flattened.","Millie opens it.","The farmer keeps it."],"It lands under the tractor and is flattened.","🚜"),
        ch("bike2","What happens to the bicycle?",["Millie crushes it by accident.","It is painted red.","The farmer rides it."],"Millie crushes it by accident.","💥"),
        ch("end","At the end, what does Millie love to do?",["deliver the mail","scare the farmer","hide in a barrel"],"deliver the mail","📬")],
        "The mail carrier brings Millie a package, but it is flattened by the tractor. Millie crushes the bicycle, so now Millie helps deliver the mail.")]});

  // ───────── 18. Video StoryBots "Nouns, Adjectives & Verbs" ─────────
  const NAV=["noun","adjective","verb"];
  bonus({id:"bonus-video-storybots-nouns",remember:["Noun: a person, place or thing.", "Adjective: a word that describes a noun.", "Verb: an action word."],urls:["https://www.youtube.com/watch?v=_II6ySgUtWc"],title:"Nouns, Adjectives & Verbs",source:"Video · StoryBots: Learn About Nouns, Adjectives & Verbs",
    cards:[card("Words","Choose the correct answer.",[
      ch("noun","A noun is…",["a person, place or thing","an action word","a word that describes a noun"],"a person, place or thing","📛"),
      ch("adj","An adjective is…",["a word that describes a noun","an action word","a place"],"a word that describes a noun","🎨"),
      ch("verb","A verb is…",["an action word","a person","a color"],"an action word","🏃")],
      "A noun is a person, place or thing. An adjective is a word that describes a noun. A verb is an action word."),
      card("Words","Is it a noun, an adjective or a verb?",[sel("beach","beach",NAV,"noun"),sel("shiny","shiny",NAV,"adjective"),sel("jump","jump",NAV,"verb"),sel("kite","kite",NAV,"noun"),
        sel("floppy","floppy",NAV,"adjective"),sel("swim","swim",NAV,"verb"),sel("robot","robot",NAV,"noun"),sel("cold","cold",NAV,"adjective"),sel("dance","dance",NAV,"verb")],
        "Nouns: beach, kite, robot · Adjectives: shiny, floppy, cold · Verbs: jump, swim, dance")]});

  // ───────── 19. Wordwall 26230545 "Nouns vs. Action Verbs" ─────────
  const NV=["noun","verb"];
  const nvs=[["castle","noun"],["rabbit","noun"],["basket","noun"],["doctor","noun"],["playground","noun"],["fireman","noun"],["cactus","noun"],["hit","verb"],["swing","verb"],["chop","verb"],["eat","verb"],["sleep","verb"],["give","verb"],["ride","verb"]];
  bonus({id:"bonus-wordwall-nouns-vs-verbs",urls:["https://wordwall.net/resource/26230545/english/nouns-vs-action-verb"],title:"Nouns vs. Action Verbs",source:"Wordwall · Nouns vs. Action Verbs (group sort)",
    cards:chunk(rot(nvs,"nvs"),7).map((rows,k)=>card("Noun or verb","Is it a noun or an action verb?",rows.map(([w,a],i)=>sel(`v${k}${i}`,w,NV,a)),
      "Nouns: castle, rabbit, basket, doctor, playground, fireman, cactus · Verbs: hit, swing, chop, eat, sleep, give, ride"))});

  // ───────── 20. Baamboozle 1117076 "Short e" (đáp án phụ thuộc hình → thêm gợi ý) ─────────
  bonus({id:"bonus-short-e-game",urls:["https://www.baamboozle.com/game/1117076"],title:"Short e Game",source:"Baamboozle · Short e (Teacher Tonya)",
    cards:[card("Short e","Look at the picture. Choose the sentence.",[
      fixed("bed","🐱🛏️ Where is the cat?",["It is in a bed.","It is in a beg.","It is in a web."],"It is in a bed."),
      fixed("hen","🐔 What is this?",["This is a hen.","This is a net.","This is a vet."],"This is a hen."),
      fixed("men","👨‍👨‍👦 What are they?",["They are men.","They are led.","They are beg."],"They are men."),
      fixed("pet","🐶 What is this?",["It is a pet.","It is a wed.","It is a get."],"It is a pet."),
      fixed("vet","🩺 Who is he?",["He is a pet.","He is a wed.","He is a vet."],"He is a vet."),
      fixed("web","🕷️ Where is the animal?",["It is in the den.","It is in the jet.","It is in the web."],"It is in the web.")],
      "bed · hen · men · pet · vet · web"),
      card("Short e","Look at the picture. Choose the answer.",[
        fixed("pen","🖊️ What does he have?",["He has a pen.","He has a net.","He has a pet."],"He has a pen."),
        fixed("leg","🦵 What is this?",["This is a hem.","This is a leg.","This is a peg."],"This is a leg."),
        fixed("net","🥅 What is it?",["It is a met.","It is a net.","It is a set."],"It is a net."),
        fixed("met","🤝 What did they do?",["They led.","They wed.","They met."],"They met."),
        fixed("wed","💒 What did they do?",["They got wet.","They got wed.","They got fed."],"They got wed."),
        {id:"ten",label:"🔟 Spell the word 10.",type:"fill",answer:["ten","t-e-n","t - e - n"]}],
        "pen · leg · net · met · wed · t-e-n")]});

  // ───────── 21. Video "Rocco the Rhyming Rhino" (Jack Hartmann) ─────────
  bonus({id:"bonus-video-rocco-rhyming",urls:["https://www.youtube.com/watch?v=nAUdQZ8Xivw"],title:"Rocco the Rhyming Rhino",source:"Video · Jack Hartmann · Rocco the Rhyming Rhino",
    cards:[card("Rhyme","Rocco listens with his ears and thinks with his mind. Which word rhymes?",[
      ch("hat","hat",["cat","hot","hug"],"cat","🎩"),ch("hi","hi",["bye","hat","man"],"bye","👋"),ch("man","man",["can","bug","hi"],"can","👨"),ch("hug","hug",["bug","hat","can"],"bug","🤗")],
      "hat – cat · hi – bye · man – can · hug – bug"),
      card("Rhyme","Now you say a rhyming word! Choose one.",[
        ch("dig","dig",["pig","dog","sun"],"pig","⛏️"),ch("ring","ring",["sing","run","cat"],"sing","💍"),ch("frog","frog",["dog","fish","cup"],"dog","🐸"),ch("tall","tall",["ball","tree","bed"],"ball","🦒")],
        "dig – pig · ring – sing · frog – dog · tall – ball (other rhyming words are OK too!)")]});

  // ───────── 22. Wordwall 10197518 "Rhyming words" ─────────
  const rhymes=[["shed","head"],["gate","eight"],["hare","bear"],["zoo","blue"],["meat","greet"],["sky","high"],["kite","fight"],["train","pain"],["chat","flat"],["jaw","claw"],["moon","spoon"],["star","car"],["well","spell"]];
  const RH=rhymes.map(r=>r[1]);
  bonus({id:"bonus-wordwall-rhyming-words",urls:["https://wordwall.net/resource/10197518/rhyming-words"],title:"Rhyming Words Match",source:"Wordwall · Rhyming words (find the match)",
    cards:chunk(rhymes,7).map((rows,k)=>card("Rhyme","Find the rhyming word.",rows.map(([a,b],i)=>sel(`r${k}${i}`,a,RH,b)),rows.map(([a,b])=>`${a} – ${b}`).join(" · ")))});

  // ───────── 23. Video "Cubs in a Hut" read-aloud ─────────
  bonus({id:"bonus-video-cubs-in-a-hut",urls:["https://www.youtube.com/watch?v=EJu-msisNog"],title:"Cubs in a Hut (read-aloud)",source:"Video · Cub in the hut: Wonders Grade 1 Unit 2 Week 2",
    cards:[card("Cubs in a Hut","Listen to the story. Answer the questions.",[
      ch("who","Who are the cubs?",["Gus, Russ and Bud","Mimbi, Pimbi and Timbi","Ben and Jet"],"Gus, Russ and Bud","🐻"),
      multi("made","What do they make the hut with? Choose 3.",["sticks","mud","grass","bricks"],["sticks","mud","grass"],"🛖"),
      ch("problem","What is the problem?",["The hut drips and gets wet.","The hut is too small.","The cubs are hungry."],"The hut drips and gets wet.","💧"),
      ch("fix","What do the cubs do?",["They fix the hut.","They run away.","They sleep outside."],"They fix the hut.","🔨"),
      ch("end","At the end, the cubs are as snug as…",["bugs in a rug","fish in a dish","cats in a hat"],"bugs in a rug","🐞")],
      "Gus, Russ and Bud make a hut with sticks, mud and grass. One night it drips. They fix it. Three cubs are as snug as bugs in a rug!")]});

  // ───────── 24. Wordwall 14757170 "Animals Structure Function" ─────────
  const SF=["body part that helps an animal survive","job of a body part","help animals see","help animal walk","help animal fly","help animal find food","protects body and sheds as the animal grows"];
  bonus({id:"bonus-wordwall-animal-structure-function",remember:["structure → body part that helps an animal survive", "function → job of a body part", "Eyes help animals see · Legs help animal walk · Wings help animal fly · Antennae help animal find food · Exoskeleton protects body and sheds as the animal grows"],subjectKey:"science",urls:["https://wordwall.net/resource/14757170/science/animals-structure-function"],title:"Animals Structure Function",source:"Wordwall · Animals Structure Function (match up)",
    cards:[{...card("Structure and function","Match each word with its meaning.",[sel("structure","structure",SF,SF[0],"🦴"),sel("function","function",SF,SF[1],"⚙️"),sel("eyes","eyes",SF,SF[2],"👀"),
      sel("legs","legs",SF,SF[3],"🦵"),sel("wings","wings",SF,SF[4],"🪽"),sel("antennae","antennae",SF,SF[5],"🐜"),sel("exo","exoskeleton",SF,SF[6],"🦀")],
      "structure → body part that helps an animal survive · function → job of a body part · eyes → help animals see · legs → help animal walk · wings → help animal fly · antennae → help animal find food · exoskeleton → protects body and sheds as the animal grows"),img:"assets/mascot/academy/science.webp"}]});
  // ───────── 25. Video "Contractions – Phonics Mix" (English4abc) ─────────
  const C2=[["you are","you’re"],["he is","he’s"],["she is","she’s"],["it is","it’s"],["we are","we’re"],["they are","they’re"],["that is","that’s"],["who is","who’s"]];
  bonus({id:"bonus-video-contractions",remember:["A contraction joins two words into one with an apostrophe (’).","’s = is: he’s · she’s · it’s · that’s · who’s","’re = are: you’re · we’re · they’re"],urls:["https://www.youtube.com/watch?v=0_NVE-yttBE"],title:"Contractions (song)",source:"Video · English4abc · Contractions Phonics Mix",
    cards:[card("Contractions","Listen to the song. Answer the questions.",[
      ch("what","A contraction joins ___ into one word.",["two words","two letters","two sentences"],"two words","🔗"),
      ch("mark","Which mark do we use in a contraction?",["an apostrophe (’)","a comma (,)","a period (.)"],"an apostrophe (’)","✏️")],
      "A contraction joins two words into one. We write it with an apostrophe (’)."),
      card("Contractions","Two words → one word.",C2.map(([a,b],i)=>sel(`c${i}`,a,C2.map(r=>r[1]),b)),C2.map(([a,b])=>`${a} → ${b}`).join(" · "))]});

  // ───────── 26. Baamboozle 2941674 "'s Contractions" (16 câu, 2 chiều) ─────────
  const S2=[["he’s","he is"],["there is","there’s"],["what’s","what is"],["who is","who’s"],["it is","it’s"],["she is","she’s"],["where’s","where is"],["that is","that’s"],["that’s","that is"],["where is","where’s"],["she’s","she is"],["it’s","it is"],["who’s","who is"],["what is","what’s"],["there’s","there is"],["he is","he’s"]];
  const SHORT2=["he’s","she’s","it’s","that’s","what’s","where’s","who’s","there’s"],LONG2=SHORT2.map(w=>w.replace("’s"," is"));
  bonus({id:"bonus-contractions-s-game",remember:["’s Contractions: he’s · she’s · it’s · that’s · what’s · where’s · who’s · there’s","there’s = there is · who’s = who is · that’s = that is"],urls:["https://www.baamboozle.com/index.php/slideshow/2941674","https://www.baamboozle.com/slideshow/2941674","https://www.baamboozle.com/game/2941674"],title:"’s Contractions Game",source:"Baamboozle · ’s Contractions (match the 2 words)",
    cards:chunk(S2,8).map((rows,k)=>card("’s contractions","Match the contraction and the two words.",rows.map(([q,a],i)=>sel(`s${k}${i}`,q,a.includes("’")?SHORT2:LONG2,a)),rows.map(([q,a])=>`${q} → ${a}`).join(" · ")))});
  // ───────── 27. Wordwall 5186766 "Plural Nouns - s or es" (group sort) ─────────
  const PL=[["boy","s"],["park","s"],["doll","s"],["car","s"],["shirt","s"],["pencil","s"],["marker","s"],["ball","s"],["lunch","es"],["glass","es"],["brush","es"],["box","es"],["dish","es"],["bush","es"],["porch","es"],["inch","es"]];
  bonus({id:"bonus-wordwall-plural-s-es",remember:["Add s: boy · park · doll · car · shirt · pencil · marker · ball","Add es: lunch · glass · brush · box · dish · bush · porch · inch"],urls:["https://wordwall.net/resource/5186766/plural-nouns-s-or-es"],title:"Plural Nouns – s or es",source:"Wordwall · Plural Nouns - s or es (group sort)",
    cards:chunk(rot(PL,"PL"),8).map((rows,k)=>card("Plural nouns","Add “s” or add “es”?",rows.map(([w,a],i)=>sel(`p${k}${i}`,w,["s","es"],a)),
      "Add s: boys, parks, dolls, cars, shirts, pencils, markers, balls · Add es: lunches, glasses, brushes, boxes, dishes, bushes, porches, inches"))});

  // ───────── 28. Video "The Pigs, the Wolf, and the Mud" (Mrs. Kania read-aloud) ─────────
  bonus({id:"bonus-video-pigs-wolf-mud",urls:["https://www.youtube.com/watch?v=vvR2yjmbWGE"],title:"The Pigs, the Wolf, and the Mud (read-aloud)",source:"Video · First Grade Wonders · The Pigs, the Wolf, and the Mud",
    cards:[card("The Pigs, the Wolf, and the Mud","Listen to the story. Answer the questions.",[
      ch("love","The three pigs love…",["mud and a mess","a clean house","bricks"],"mud and a mess","🐷"),
      ch("door","The wolf rings the bell. What do the pigs say?",["No, you will eat us up!","Come in!","Hello, friend!"],"No, you will eat us up!","🔔"),
      ch("huff","What happens when the wolf huffs and puffs?",["He gets mud all over him.","The hut flies away.","The pigs run away."],"He gets mud all over him.","💨"),
      ch("kick","Then the wolf kicks the hut. What happens?",["The hut falls in.","The hut gets bigger.","Nothing happens."],"The hut falls in.","🦵"),
      ch("leave","Why does the wolf leave?",["He does not like the mud.","He is sleepy.","He wants to swim."],"He does not like the mud.","🚪"),
      ch("new","What do the pigs use for their new hut?",["mud","bricks","sticks"],"mud","🛖")],
      "The pigs love mud and a mess. The wolf huffs and puffs, but he gets mud all over him — he can’t huff and puff in mud. He kicks the hut and it falls in. He does not like the mud, so he leaves. The pigs build a new hut out of mud.")]});
  // ───────── 29. Video StoryBots "Adding S & ES to Words" (bài hát, không có phụ đề → lấy từ chữ trên màn hình) ─────────
  const VS=[["cup","s"],["pup","s"],["lollipop","s"],["apple","s"],["tree","s"],["bus","es"],["glass","es"],["brush","es"],["dress","es"],["box","es"],["fox","es"],["dish","es"],["peach","es"]];
  bonus({id:"bonus-video-adding-s-es",remember:["S and ES turn one thing into many things.","Add s: cups · pups · lollipops · apples · trees","Add es: buses · glasses · brushes · dresses · boxes · foxes · dishes · peaches"],urls:["https://www.youtube.com/watch?v=S36TFFcYe0I"],title:"Adding S & ES (StoryBots)",source:"Video · StoryBots · Adding “S” & “ES” to Words",
    cards:[card("Plural nouns","Watch the video. Answer the question.",[
      ch("many","Adding s or es turns one thing into…",["many things","one thing","no things"],"many things","🔢")],"S and ES turn one thing into many things."),
      card("Plural nouns","Add “s” or “es”?",VS.map(([w,a],i)=>sel(`v${i}`,w,["s","es"],a)),
      "Add s: cups, pups, lollipops, apples, trees · Add es: buses, glasses, brushes, dresses, boxes, foxes, dishes, peaches")]});
  // ───────── 30. Baamboozle 1116709 "Basic Grammar Contractions" (24 câu) ─────────
  const BG=[["I am Doraemon.","I’m"],["It is a dog.","It’s"],["What is your name?","What’s"],["No, I do not.","don’t"],["No, I can not.","can’t"],["There is 1 fish.","There’s"],["They are fish.","They’re"],["I am from America.","I’m"],["How is the weather?","How’s"],["I am happy.","I’m"],["It is 3 o'clock.","It’s"],["It is blue.","It’s"],["They are dogs.","They’re"],["I am Urashimatarou.","I’m"],["It is a cat.","It’s"],["I am sad.","I’m"],["It is snowy.","It’s"],["It is sunny.","It’s"],["They are cats.","They’re"],["What is the time?","What’s"],["It is a triangle.","It’s"]];
  const BGW=["I’m","It’s","What’s","There’s","How’s","They’re","don’t","can’t"];
  bonus({id:"bonus-contractions-basic",remember:["I am → I’m · it is → it’s · what is → what’s · there is → there’s · how is → how’s","they are → they’re · do not → don’t · can not → can’t"],urls:["https://www.baamboozle.com/game/1116709"],title:"Basic Grammar Contractions",source:"Baamboozle · Basic Grammar Contractions",
    cards:[...chunk(BG,7).map((rows,k)=>card("Contractions","Say it with a contraction.",rows.map(([q,a],i)=>sel(`b${k}${i}`,q,BGW,a)),rows.map(([q,a])=>`${q} → ${a}`).join(" · "))),
      card("Contractions","Choose the answer.",[
        ch("isnt","No, it is not. → No, it ___.",["isn’t","aren’t","don’t"],"isn’t","❌"),
        ch("arent","No, they are not. → No, they ___.",["aren’t","isn’t","can’t"],"aren’t","❌"),
        ch("bye","“God be with ye” became which word?",["Goodbye","Good night","Hello"],"Goodbye","👋")],
        "No, it isn’t (No, it’s not). · No, they aren’t (No, they’re not). · Goodbye comes from “God be with ye”.")]});

  // ───────── 31. Baamboozle 71105 "Short U sound" (câu hỏi là tranh → thêm emoji gợi ý) ─────────
  const SU2=[["🐞","bug",["bug","bag","big"]],["🛖","hut",["hut","hat","hit"]],["🐷🟫 (pigs play in it)","mud",["mud","mad","mid"]],["🎉","fun",["fun","fan","fin"]],["🥜","nut",["nut","net","not"]],["🛁","tub",["tub","tab","tib"]],["✂️","cut",["cut","cat","cot"]],["🐶 (a baby dog)","pup",["pup","pop","pip"]],
    ["🥁","drum",["drum","dram","drim"]],["🏺 (it holds water)","jug",["jug","jog","jig"]],["☀️","sun",["sun","son","sin"]],["🏃","run",["run","ran","rin"]],["☕","cup",["cup","cap","cop"]],["🟫 (a small carpet on the floor)","rug",["rug","rag","rig"]],["🤗","hug",["hug","hog","hag"]]];
  bonus({id:"bonus-short-u-sound-game",urls:["https://www.baamboozle.com/game/71105"],title:"Short U Sound",source:"Baamboozle · Short U sound (Teacher Bi)",
    cards:chunk(SU2,8).map((rows,k)=>card("Short u","What is it? Choose the short u word.",rows.map(([q,a,c],i)=>ch(`s${k}${i}`,q,c,a)),rows.map(([,a])=>a).join(" · ")))});

  // ───────── 32. Video "ph" (Kids vs Phonics) ─────────
  bonus({id:"bonus-video-ph",remember:["ph makes the /f/ sound: photo · phone · dolphin · elephant"],urls:["https://www.youtube.com/watch?v=DXvp4Ybx0W4"],title:"ph (Kids vs Phonics)",source:"Video · Kids vs Phonics · ph",
    cards:[card("ph","Watch the video. Answer the questions.",[
      ch("sound","ph makes the sound…",["/f/","/p/","/h/"],"/f/","🔊"),
      sel("photo","In photo and phone, ph sounds like…",["/f/","/p/"],"/f/","📷"),
      ch("dolphin","Phin is a…",["dolphin","elephant","dog"],"dolphin","🐬"),
      ch("elephant","Phil is an…",["elephant","dolphin","eagle"],"elephant","🐘"),
      ch("call","How does Phil call Phin at the end?",["from the pay phone","with a letter","by shouting"],"from the pay phone","📞"),
      multi("words","Which words have ph? Choose 4.",["photo","phone","dolphin","elephant","fish","fun"],["photo","phone","dolphin","elephant"],"🔤")],
      "ph makes the /f/ sound: photo, phone, dolphin, elephant. Phin the dolphin and Phil the elephant: in the end, Phil phones Phin from the pay phone.")]});

  // ───────── 33. Video "Sesame Street: Family Song" (Wellbeing) ─────────
  bonus({id:"bonus-video-family-song",subjectKey:"wellbeing",remember:["Family is the people you love: brothers, sisters, mom and dad, grandparents, aunts and uncles.","Near or far, they are still your family."],urls:["https://www.youtube.com/watch?v=ii_LtHrEiao"],title:"Family Song (Sesame Street)",source:"Video · Sesame Street: Family Song",
    cards:[card("Family","Listen to the song. Answer the questions.",[
      ch("q","What question does the girl ask in the song?",["What is a family?","Where is my dog?","What time is it?"],"What is a family?","❓"),
      multi("who","Who is in a family? Choose 4.",["brothers","sisters","mom and dad","grandpa","a car"],["brothers","sisters","mom and dad","grandpa"],"👪"),
      multi("animals","Which animal families are in the song? Choose 3.",["fish in the sea","monkeys in a tree","ducks in the mud","cars on the road"],["fish in the sea","monkeys in a tree","ducks in the mud"],"🐒"),
      ch("far","Family can live near or far. Are they still your family?",["Yes","No"],"Yes","🌍")],
      "A family can be brothers, sisters, mom and dad, grandparents, aunts and uncles. There are animal families too: fish in the sea, monkeys in a tree, ducks in the mud. Near or far, they are still your family.")]});
  // ───────── 34. Baamboozle 1091989 "Singular & Plural regular Nouns (s, es, ies, ves)" ─────────
  // Trang công khai không đánh dấu đáp án đúng → chọn theo ngữ pháp; bỏ 3 câu phụ thuộc hình (mango/key/book) và câu a/an; sửa lỗi chính tả của nguồn.
  const SP=[["There are many ___ in the classroom.",["boys","boy"],"boys"],["There is a ___ at the bus stop.",["bus","buses"],"bus"],["There are ___ in the tree.",["monkeys","monkeies"],"monkeys"],
    ["Maple ___ are falling on the ground.",["leaves","leaf"],"leaves"],["Don’t eat too many ___. You will have to see a dentist.",["candies","candys"],"candies"],["I am looking for ___ to cut paper.",["scissors","scissor"],"scissors"],
    ["A chef uses many ___ when making food.",["knives","knife"],"knives"],["I want to buy two ___ of bread. (loaf)",["loaves","loaf"],"loaves"],["The pianists are playing ___ on the stage.",["pianos","piano"],"pianos"],
    ["There are three ___ in my house.",["bedrooms","bedroom"],"bedrooms"],["Tony loves music, so he listens to the ___.",["radio","radioes"],"radio"],["The police caught two ___ who stole the diamond.",["thieves","thief"],"thieves"],
    ["Businessmen wear a shirt and ___ with a tie.",["trousers","a trouser"],"trousers"],["Most girls like cartoons about ___. (princess)",["princesses","princess"],"princesses"],
    ["There is ___ on the bed.",["a pillow","pillows"],"a pillow"],["There are five ___. (box)",["boxes","boxs","box"],"boxes"],["There are two ___. (cherry)",["cherries","cherrys","cherry"],"cherries"]];
  bonus({id:"bonus-singular-plural-game",remember:["Plural: add s (boys, monkeys) · add es (buses, boxes, princesses)","Some plurals change: leaf → leaves · knife → knives · cherry → cherries"],urls:["https://www.baamboozle.com/game/1091989"],title:"Singular & Plural Nouns Game",source:"Baamboozle · Singular & Plural regular Nouns (s, es, ies, ves)",
    cards:chunk(SP,6).map((rows,k)=>card("Singular and plural","Choose the right noun.",rows.map(([q,c,a],i)=>fixed(`p${k}${i}`,q,c,a)),rows.map(([q,,a])=>q.replace("___",a)).join(" · ")))});

  // ───────── 35. Video "Homes Around the World" (read-aloud, Kristen Hunter) ─────────
  bonus({id:"bonus-video-homes-around-world",remember:["People build homes to fit the place where they live.","Wood home on stilts (wet place) · clay home (hot place, keeps cool) · igloo of ice (cold place)"],urls:["https://www.youtube.com/watch?v=SESo805XIAg"],title:"Homes Around the World (read-aloud)",source:"Video · Homes Around the World (Wonders read-aloud)",
    cards:[card("Homes Around the World","Listen to the text. Answer the questions.",[
      ch("main","People build homes to ___.",["fit the place where they live","look the same everywhere","be very small"],"fit the place where they live","🌍"),
      sel("stilts","home on stilts",["wet place","hot place","cold place"],"wet place","🛖"),
      sel("clay","clay home",["wet place","hot place","cold place"],"hot place","☀️"),
      sel("igloo","igloo",["wet place","hot place","cold place"],"cold place","🧊"),
      ch("cool","What does the clay do for the home?",["It keeps the home cool inside.","It keeps the home wet.","It makes the home float."],"It keeps the home cool inside.","🏜️"),
      ch("ask","The text ends with a question. What is it?",["What is your home like?","Where is the igloo?","Who built the house?"],"What is your home like?","❓")],
      "People build homes to fit the place where they live: a wood home on stilts for a wet place, a clay home for a hot place (clay keeps it cool), an igloo of ice for a cold place. What is your home like?")]});

  // ───────── 36. Video "Contractions Rap Song" (Mr Spelling) ─────────
  const RAP=[["I am","I’m"],["you are","you’re"],["he is","he’s"],["it is","it’s"],["we are","we’re"],["they are","they’re"],["that is","that’s"],["there is","there’s"],["do not","don’t"],["would not","wouldn’t"]];
  bonus({id:"bonus-video-contractions-rap",remember:["Take two words, make them one. Take out some letters and put an apostrophe (’) where they were."],urls:["https://www.youtube.com/watch?v=XXjt8CLBHWw"],title:"Contractions Rap",source:"Video · Mr Spelling · Contractions Rap Song",
    cards:[card("Contractions","Take two words and make them one.",[
      ch("mark","Where the letters were taken out, we put ___.",["an apostrophe (’)","a comma (,)","a period (.)"],"an apostrophe (’)","✏️"),
      ch("they","they + have →",["they’ve","theyhave","they’s"],"they’ve","🔗")],
      "Take two words and make them one. Take out some letters and mark the place with an apostrophe: they + have → they’ve."),
      card("Contractions","Two words → one word.",RAP.map(([a,b],i)=>sel(`r${i}`,a,RAP.map(r=>r[1]),b)),RAP.map(([a,b])=>`${a} → ${b}`).join(" · "))]});

  // ───────── 37. Close Reading "The Crows and the Bear" (Little Fox) ─────────
  bonus({id:"bonus-close-reading-crows-bear",urls:["https://www.youtube.com/watch?v=-igkhaZFWSs"],title:"The Crows and the Bear (Close Reading)",source:"Video · Little Fox · The Crows and the Bear",
    cards:[card("The Crows","Retell the first story.",[
      ch("where","Where do the friends pick apples?",["in the apple orchard on the farm","in a shop","in the city"],"in the apple orchard on the farm","🍎"),
      ch("scare","What does the scarecrow do?",["It scares crows so they don’t eat the corn.","It picks apples.","It plays with Pig."],"It scares crows so they don’t eat the corn.","🌾"),
      ch("gone","The apples are gone. What do the friends think?",["Pig ate them.","Dog ate them.","The bear ate them."],"Pig ate them.","🐷"),
      ch("truth","What did Pig really do with the apples?",["He gave them to the hungry crows.","He ate them all.","He hid them in the barn."],"He gave them to the hungry crows.","🐦"),
      ch("lesson","What is the lesson?",["Share, be honest, and don’t blame before you know.","Keep all the apples for you.","Never help others."],"Share, be honest, and don’t blame before you know.","💡")],
      "The friends pick apples in the orchard. The scarecrow keeps crows from the corn, so the crows are hungry. The apples are gone and everyone blames Pig, but Pig gave them to the crows and picked more apples for his friends. “You are a good friend, Pig.”"),
      card("The Bear","Retell the second story.",[
        ch("ate","Something big and black ate Red Bird’s food. What was it?",["a bear","a monster","a cat"],"a bear","🐻"),
        ch("plan","What is Cow’s plan?",["Put blueberries on the path.","Build a big wall.","Run away from the farm."],"Put blueberries on the path.","🫐"),
        ch("end","How does the story end?",["The bear eats the blueberries and everyone is safe.","The bear eats Red Bird’s food again.","Dog runs away."],"The bear eats the blueberries and everyone is safe.","😊")],
        "Dog sees a big, black animal eat Red Bird’s food. Cow says it is just the bear. Her plan: pick blueberries and put them on the path. The bear follows Dog to the path and eats the blueberries. Everyone is safe.")]});
  // ───────── 38. Wordwall 26481293 "Rhyming Pictures" (quiz bằng hình → ghi tên + emoji) ─────────
  const RP=[["🪣 well",["☀️ sun","✏️ pencil","🔔 bell"],"🔔 bell"],["🧹 rake",["🐍 snake","🏃 run","🏠 house"],"🐍 snake"],["👑 crown",["🍳 pan","☹️ frown","🐭 mouse"],"☹️ frown"],
    ["🚪 door",["⬇️ floor","🦇 bat","🐞 ladybug"],"⬇️ floor"],["🐞 bug",["🍜 noodles","🟫 rug","🐱 cat"],"🟫 rug"],["😢 cry",["🪰 fly","🚌 bus","💍 ring"],"🪰 fly"],
    ["🏫 school",["🚗 car","☕ mug","🏊 pool"],"🏊 pool"],["🚗 car",["🫗 jug","⭐ star","🐸 frog"],"⭐ star"],["🦈 fin",["🌀 fan","🍳 pan","🗑️ bin"],"🗑️ bin"],
    ["🍲 pot",["🥵 hot","🐶 dog","🥒 pickle"],"🥵 hot"],["⚾ bat",["👶 baby","🍎 apple","🦇 bat"],"🦇 bat"],["🍔 bun",["🤡 clown","🌭 hot dog","🎉 fun"],"🎉 fun"]];
  bonus({id:"bonus-wordwall-rhyming-pictures",remember:["Rhyming words end with the same sounds: well – bell · rake – snake · bug – rug · car – star · bun – fun"],urls:["https://wordwall.net/resource/26481293/phonics/rhyming-pictures"],title:"Rhyming Pictures",source:"Wordwall · Rhyming Pictures (quiz)",
    cards:chunk(RP,6).map((rows,k)=>card("Rhyme","Which picture rhymes?",rows.map(([q,c,a],i)=>fixed(`r${k}${i}`,q,c,a)),rows.map(([q,,a])=>`${q.split(" ")[1]} – ${a.split(" ").slice(1).join(" ")}`).join(" · ")))});
  // ───────── 39. Baamboozle 3616560 "Contractions" (9 câu; trang không đánh dấu đáp án → chọn theo ngữ pháp, sửa lỗi chính tả nguồn) ─────────
  const CT=[["I am very tired today. (I am)",["I’m","I’am"],"I’m"],["He is bored because his work is boring. (He is)",["He’s","His"],"He’s"],["Let us go and see the chimpanzees! (Let us)",["Let’s","Le’ts"],"Let’s"],
    ["We are so excited to go to the party. (We are)",["We’re","W’ere"],"We’re"],["She is not going bowling. (is not)",["isn’t","is’nt"],"isn’t"],["I do not know when my dad will finish work. (do not)",["don’t","do’nt"],"don’t"],
    ["He did not go to school today because he was ill. (did not)",["didn’t","did’nt"],"didn’t"],["It is not time to go to swimming practice yet. (is not)",["it isn’t","it’s isn’t"],"it isn’t"],["She does not have enough money to buy ice cream. (does not)",["doesn’t","does’nt"],"doesn’t"]];
  bonus({id:"bonus-contractions-baamboozle-3616560",remember:["The apostrophe (’) goes where the letters are taken out: do not → don’t (not do’nt) · let us → let’s (not le’ts)"],urls:["https://www.baamboozle.com/game/3616560"],title:"Contractions Game",source:"Baamboozle · Contractions (ARCHER1875)",
    cards:chunk(CT,5).map((rows,k)=>card("Contractions","Choose the correct contraction.",rows.map(([q,c,a],i)=>fixed(`c${k}${i}`,q,c,a)),rows.map(([q,,a])=>`${q.match(/\(([^)]*)\)$/)[1]} → ${a}`).join(" · ")))});
  // ───────── 40. Video Alphablocks "Up (Short Vowel U)" ─────────
  bonus({id:"bonus-video-alphablocks-up",remember:["Short u words from Alphablocks: up · cup · pup · sum · mug · mud"],urls:["https://www.youtube.com/watch?v=LgLbumOrXMA"],title:"Alphablocks: Up (short u)",source:"Video · Alphablocks · Up (Short Vowel U)",
    cards:[card("Short u","Watch the video. Answer the questions.",[
      ch("sound","The letter U says the sound you hear in ___.",["up","ape","you"],"up","🎈"),
      sel("cup","c + u + p =",["cup","pup","mug","mud","sum"],"cup","☕"),
      sel("pup","p + u + p =",["cup","pup","mug","mud","sum"],"pup","🐶"),
      sel("mug","m + u + g =",["cup","pup","mug","mud","sum"],"mug","🍺"),
      sel("mud","m + u + d =",["cup","pup","mug","mud","sum"],"mud","🟤"),
      ch("pop","When o takes the place of u, pup becomes ___.",["pop","pip","pap"],"pop","🎈")],
      "U says /u/ as in up. Short u words in the video: up, cup, pup, sum, mug, mud. When o replaces u, pup becomes pop (short o).")]});

  // ───────── 41. Baamboozle 2385375 "regular plurals" (16 câu điền, thêm -s) ─────────
  const RPL=[["crayon","many","crayons"],["dog","two","dogs"],["apple","many","apples"],["chair","many","chairs"],["cat","two","cats"],["computer","many","computers"],["cup","many","cups"],["plate","many","plates"],
    ["bird","many","birds"],["shoe","two","shoes"],["house","many","houses"],["banana","many","bananas"],["coin","many","coins"],["hand","two","hands"],["eye","two","eyes"],["car","many","cars"]];
  bonus({id:"bonus-regular-plurals-game",remember:["Regular plurals: add -s → crayons · dogs · apples · shoes · houses · eyes"],urls:["https://www.baamboozle.com/game/2385375"],title:"Regular Plurals Game",source:"Baamboozle · regular plurals (Dipo)",
    cards:chunk(RPL,8).map((rows,k)=>card("Plural nouns","Write the plural noun.",rows.map(([w,q,a],i)=>({id:`p${k}${i}`,label:`one ${w}, ${q} ___`,type:"fill",answer:[a]})),rows.map(([w,q,a])=>`one ${w}, ${q} ${a}`).join(" · ")))});
  // ───────── 42. Wordwall 30459871 "Animals Offspring" (find the match; sửa chính tả "cayote" → coyote) ─────────
  const OFF=[["lion","cub"],["goat","kid"],["horse","foal"],["deer","fawn"],["cat","kitten"],["dog","puppy"],["coyote","whelp"],["bat","pup"],["cow","calf"],["zebra","colt"]];
  bonus({id:"bonus-wordwall-animals-offspring",subjectKey:"science",remember:["Baby animals: lion – cub · goat – kid · horse – foal · deer – fawn · cat – kitten · dog – puppy · bat – pup · cow – calf"],urls:["https://wordwall.net/resource/30459871/animals-offspring"],title:"Animals Offspring",source:"Wordwall · Animals Offspring (find the match)",
    cards:chunk(OFF,5).map((rows,k)=>card("Animals and their babies","Match the animal with its baby.",rows.map(([a,b],i)=>sel(`o${k}${i}`,a,OFF.map(r=>r[1]),b)),
      rows.map(([a,b])=>`${a} → ${b}`).join(" · ")+(k===1?" (In the game a baby coyote is a whelp and a baby zebra is a colt; they can also be called a pup and a foal.)":"")))});

  // ───────── 43. Video "Sesame Street: Celebrations | Elmo's World" (Wellbeing) ─────────
  bonus({id:"bonus-video-elmo-celebrations",subjectKey:"wellbeing",remember:["Celebrations are a fun way to enjoy special occasions, like birthdays. People celebrate all over the world."],urls:["https://www.youtube.com/watch?v=KYsoVzzG2cM"],title:"Elmo’s World: Celebrations",source:"Video · Sesame Street · Celebrations | Elmo’s World",
    cards:[card("Celebrations","Watch the video. Answer the questions.",[
      ch("what","Celebrations are a fun way to enjoy ___.",["special occasions","homework","rainy days"],"special occasions","🎉"),
      multi("holidays","Which holidays have celebrations in the video? Choose 3.",["4th of July","Halloween","Christmas","Monday"],["4th of July","Halloween","Christmas"],"🎃"),
      ch("clothes","At celebrations, people sometimes wear special clothes and make special ___.",["food","homework","cars"],"food","🍰"),
      ch("hats","Stripes, polka dots, stripes, polka dots, stripes, ___ — which hat comes next?",["polka dots","zigzag","stripes"],"polka dots","🥳"),
      ch("friends","What do Mr. Noodle and his dog celebrate?",["being friends","a big storm","a new car"],"being friends","🐶")],
      "Celebrations are a fun way to enjoy special occasions like birthdays or winning a big game. Holidays have celebrations too. People celebrate all over the world. Mr. Noodle and Schmoodle celebrate being friends.")]});

  // ───────── 44. Video "Where Plants and Animals Live" (NGScience) ─────────
  bonus({id:"bonus-video-where-animals-live",remember:["A habitat gives plants and animals what they need: plants – sunlight, water, air · animals – food, water, air","Habitats: desert · rainforest · under the water · grasslands"],urls:["https://www.youtube.com/watch?v=9_a68jGhJVc"],title:"Where Plants and Animals Live",source:"Video · Next Generation Science · Where Plants and Animals Live",
    cards:[card("Habitats","Watch the video. Answer the questions.",[
      ch("habitat","The places where plants and animals live are called ___.",["habitats","houses","schools"],"habitats","🏞️"),
      multi("animals","What do animals get from their habitat? Choose 3.",["food","water","air","toys"],["food","water","air"],"🦒"),
      sel("camel","camels and lizards",["desert","rainforest","under the water","grasslands"],"desert","🐫"),
      sel("bird","tall trees and colorful birds, lots of rain",["desert","rainforest","under the water","grasslands"],"rainforest","🦜"),
      sel("fish","fish, dolphins, octopuses, sea turtles",["desert","rainforest","under the water","grasslands"],"under the water","🐠"),
      sel("rabbit","rabbits, butterflies, grasshoppers",["desert","rainforest","under the water","grasslands"],"grasslands","🐇")],
      "Habitats give plants (sunlight, water, air) and animals (food, water, air) what they need. Desert: camels, lizards · Rainforest: tall trees, colorful birds · Under the water: fish, dolphins, octopuses, sea turtles · Grasslands: rabbits, butterflies, grasshoppers.")]});

  // ───────── 45. Video "ST Ending Consonant Blend" (Rock 'N Learn) ─────────
  const STW=["first","last","rest","test","list","lost","nest","dust"];
  bonus({id:"bonus-video-st-ending-blend",remember:["s + t at the end of a word make /st/: first · last · rest · test · nest · dust · must"],urls:["https://www.youtube.com/watch?v=30JDH6k-rsE"],title:"ST Ending Blend",source:"Video · Rock ’N Learn · ST Ending Consonant Blend",
    cards:[card("Ending blend st","Watch the video. Answer the questions.",[
      ch("sound","At the end of a word, s and t together make the sound ___.",["/st/","/sh/","/ts/"],"/st/","🔊"),
      ch("blend","In a blend, each letter ___.",["keeps its own sound","is silent","makes a new sound"],"keeps its own sound","🔤"),
      multi("words","Which words end with st? Choose 4.",["fast","nest","must","dust","fun","sink"],["fast","nest","must","dust"],"🪺")],
      "s says /s/, t says /t/; at the end of a word they blend to /st/ and each letter keeps its sound: first, last, rest, test, mast, gust, list, lost, chest, fast, best, nest, must, dust."),
      card("Ending blend st","Finish the word with st.",[
        sel("ne","🪺 ne__",["st","sk","nd"],"st","🪺"),sel("ve","🦺 ve__",["st","sk","nd"],"st","🦺"),sel("fi","✊ fi__",["st","sk","nd"],"st","✊"),sel("ma","🎭 ma__",["st","sk","nd"],"sk","🎭"),sel("ha","✋ ha__",["st","sk","nd"],"nd","✋")],
        "nest · vest · fist (st) · mask (sk) · hand (nd)")]});

  // ───────── 46. Video Close Reading 26/10 "Cat Falls In the Well | Fun in Snow" (Little Fox · Bat and Friends) ─────────
  bonus({id:"bonus-video-cat-falls-in-the-well",remember:["Characters: Dog, Cat, Pig, Cow (and Bat) · Setting: a farm","The Dark Well: Cat falls in the well → the friends help → they pull Cat up in a pail with a rope."],urls:["https://www.youtube.com/watch?v=ve8aXtEubx4"],title:"The Dark Well · Winter Fun",source:"Video · Little Fox · Bat and Friends: Cat Falls In the Well · Fun in Snow",
    cards:[card("The Dark Well","Listen and read along. Then answer.",[
      multi("chars","Who are the friends in the story? Choose 4.",["Dog","Cat","Pig","Cow","Lion","Fish"],["Dog","Cat","Pig","Cow"],"🐶"),
      ch("where","Where do the friends live?",["on a farm","in a city","in the ocean"],"on a farm","🏡"),
      ch("problem","What is the problem?",["Cat falls into the well.","Dog loses his newspaper.","Pig cannot find her hat."],"Cat falls into the well.","🕳️"),
      ch("well","The well is deep and very ___.",["dark","hot","small"],"dark","🌑"),
      ch("first","What does Dog do FIRST?",["He runs to Cow and Pig for help.","He jumps into the well.","He goes to sleep."],"He runs to Cow and Pig for help.","1️⃣"),
      ch("wish","Pig makes a wish. Does the wish get Cat out?",["No, it does not work.","Yes, Cat jumps out."],"No, it does not work.","🌟"),
      ch("legs","Pig and Cow hold Dog’s legs. Can Dog reach Cat?",["No, the well is too deep.","Yes, he gets Cat out."],"No, the well is too deep.","🦵"),
      ch("next","NEXT, Dog runs into the barn. What does he bring back?",["a rope and a pail","a sled","a ball"],"a rope and a pail","🪣"),
      ch("last","What happens LAST?",["Cat jumps into the pail and the friends pull her up.","Cat stays in the well.","Dog falls into the well too."],"Cat jumps into the pail and the friends pull her up.","🔚"),
      ch("came","At the end, Pig says: “My wish came ___!”",["true","back","down"],"true","✨")],
      "The Dark Well: Dog, Cat, Pig, and Cow live on a farm. Cat falls into the well. The well is deep and very dark. Dog runs to Cow and Pig. Pig makes a wish, but it does not work. Pig and Cow hold Dog’s legs, but the well is too deep. Dog gets a rope and a pail from the barn. Cat jumps into the pail and they pull her up. “My wish came true!”"),
      card("Winter Fun","The second story in the video.",[
        ch("snow","What falls outside the barn?",["snow","rain","leaves"],"snow","❄️"),
        ch("sled","Dog wants to slide down the hill. What do they use?",["a sled","a car","a boat"],"a sled","🛷"),
        ch("whee","What does Dog say when he goes down the hill?",["Whee!","Oh no!","Beep! Beep!"],"Whee!","🎢"),
        ch("cow","Does Cow want to ride the sled?",["No, thanks.","Yes, she goes first."],"No, thanks.","🐄"),
        ch("make","What do the friends make at the end?",["snow friends (snowmen)","a snow house","a cake"],"snow friends (snowmen)","☃️"),
        ch("bat","They make one more. What is it?",["a Snow Bat","a Snow Fox","a Snow Fish"],"a Snow Bat","🦇")],
        "Winter Fun: Snow falls. Dog finds a sled in the barn. Dog goes down the hill: “Whee!” Pig and Cat ride together and fall off. Cow says no thanks. They make Snow Cow, Snow Cat, Snow Dog, Snow Pig, and one more: a Snow Bat. They are all snow friends.")]});

  // ───────── 47. Video "Words that end in -ing" (English4abc) ─────────
  const INGV=[["drive","driving","🚗"],["fish","fishing","🎣"],["ride","riding","🫏"],["read","reading","📖"],["sing","singing","🎤"],["run","running","🏃"],["swim","swimming","🏊"],["skip","skipping","🪢"]];
  bonus({id:"bonus-video-words-end-in-ing",remember:["Add -ing to an action word: fish → fishing · read → reading · sing → singing","drive → driving · ride → riding (drop the e) · run → running · swim → swimming · skip → skipping (double the last letter)"],urls:["https://www.youtube.com/watch?v=Tgir2JRG5Q4"],title:"Words that end in -ing",source:"Video · English4abc · Words that end in “-ing”",
    cards:[card("Words that end in -ing","Watch the video. Which word ends in -ing?",INGV.map(([b,w,e])=>ch(b,`${e} ${b} → ___`,[w,b,`${b}s`],w,e)),
      "The video words: "+INGV.map(([b,w])=>`${b} → ${w}`).join(" · ")+". drive/ride: drop the e · run/swim/skip: double the last letter.")]});

  // ───────── 48. Baamboozle 1544210 "Base Words, Suffix -ing" (đáp án đúng có đánh dấu trên trang) ─────────
  const ING=[["sleep","sleeping",["sliping","sleepng"]],["clean","cleaning",["clining","clean ing"]],["cook","cooking",["cuking","cook ing"]],
    ["take a bath","taking a bath",["take a bathing","taking a bathing"]],["eat","eating",["eat ing","iting"]],["watch TV","watching TV",["watching TVing","watch TVing"]],
    ["talk","talking",["talk ing","tall king"]],["run","running",["run ning","raw ning"]],["drink","drinking",["drin king","dreanking"]],
    ["swim","swimming",["sweam ming","swim ming"]],["fly","flying",["fling","fly ing"]],["jump","jumping",["jump ping","jumming"]],
    ["read","reading",["read ding","riding"]],["write","writing",["write ing","wreting"]],["smell","smelling",["smiling","smell ing"]],
    ["cut","cutting",["cut ting","coating"]],["smile","smiling",["smileling","smile ling"]],["draw","drawing",["draw wing","drawwing"]],
    ["paint","painting",["paint ting","paing"]],["erase","erasing",["eraseing","erase sing"]],["sing","singing",["sininging","sing ging"]],
    ["think","thinking",["think king","thining"]],["walk","walking",["wall king","walling"]],["slide","sliding",["slide ding","slideing"]],["dance","dancing",["danceing","dance sing"]]];
  bonus({id:"bonus-baamboozle-suffix-ing",remember:["Add the suffix -ing to the base verb: sleep → sleeping · eat → eating · fly → flying","Drop the e: write → writing · smile → smiling · dance → dancing · Double the last letter: run → running · swim → swimming · cut → cutting"],urls:["https://www.baamboozle.com/game/1544210"],title:"Base Words, Suffix -ing",source:"Game · Baamboozle · Base Words, Suffix -ing",
    cards:chunk(ING,9).map((rows,k)=>card("Base words + -ing","Add the suffix -ing to the base verb.",rows.map(([b,w,x],i)=>ch(`g${k}${i}`,`${b} → ___`,[w,...x],w)),
      rows.map(([b,w])=>`${b} → ${w}`).join(" · ")))});

  // ───────── 49. Turtle Diary "Possessive Nouns" (Sling Sentence; đáp án theo dữ liệu game; chọn các câu hợp lớp 1) ─────────
  const TDP=[["The boy’s tooth is loose.","boy’s",["tooth","loose","is"]],["The cat’s tail swished back and forth.","cat’s",["tail","swished","back"]],
    ["The student’s answer was right.","student’s",["answer","was","right"]],["Jasmine’s aunt is visiting.","Jasmine’s",["is","visiting","aunt"]],
    ["My friend’s party was fun.","friend’s",["party","was","fun"]],["The turtle’s shell was brown and green.","turtle’s",["shell","brown","was"]],
    ["The pen’s ink is red.","pen’s",["ink","red","is"]],["The fireman’s truck is new.","fireman’s",["truck","new","is"]],
    ["The cow’s baby was born yesterday.","cow’s",["baby","yesterday","born"]],["The zoo’s monkeys were loud.","zoo’s",["monkeys","were","loud"]],
    ["The sun’s rays are bright.","sun’s",["rays","bright","are"]],["The boy’s shirt is red.","boy’s",["shirt","red","is"]],
    ["The children’s toys are on the shelf.","children’s",["toys","shelf","are"]],["The dog’s owner walked him to the park.","dog’s",["owner","park","him"]],
    ["My mother’s birthday is in November.","mother’s",["birthday","November","is"]],["The cat’s collar is missing.","cat’s",["collar","missing","is"]],
    ["The girls’ shoes are soiled with mud.","girls’",["shoes","mud","with"]],["The students’ desks are arranged in rows.","students’",["desks","rows","are"]],
    ["The birds’ nest was made of straw.","birds’",["nest","straw","made"]],["My sister’s name is Jenny.","sister’s",["name","Jenny","My"]],
    ["My aunt’s house is nearby.","aunt’s",["house","nearby","My"]],["We heard the coach’s whistle.","coach’s",["the","heard","We"]],
    ["I put milk in the baby’s bottle.","baby’s",["milk","bottle","put"]],["I respect my parents’ rules.","parents’",["my","respect","rules"]]];
  bonus({id:"bonus-turtlediary-possessive-nouns",remember:["Possessive nouns show who owns or has something. Look for the apostrophe: the boy’s shirt · the girls’ shoes"],urls:["https://www.turtlediary.com/game/possessive-nouns.html"],title:"Possessive Nouns",source:"Game · Turtle Diary · Possessive Nouns (Sling Sentence)",
    cards:chunk(TDP,8).map((rows,k)=>card("Find the possessive noun","Click on the possessive noun in the sentence.",rows.map(([q,a,x],i)=>ch(`t${k}${i}`,q,[a,...x],a)),
      rows.map(([q,a])=>`${q} → ${a}`).join(" · ")))});

  // ───────── 50. Wordwall 6822711 "Possessive and Plural nouns" (Quiz; đáp án có đánh dấu trong game) ─────────
  const WWP=[["My _____ toy is green.","cat’s",["cat","cats"],"🐱"],["The _____ desk is a mess.","girl’s",["girls","girl"],"👧"],["He has a lot of ____.","books",["book’s","book"],"📚"],
    ["Bill’s mom has two ___.","rings",["ring’s","ring"],"💍"],["____ mom has two rings.","Bill’s",["Bills","Bill"],"👦"],["He will sing two ___.","songs",["song","song’s"],"🎤"],
    ["The ___ door is red.","car’s",["cars","car"],"🚗"],["I see the ____ pen.","kid’s",["kid","kids"],"🖊️"],["The ____ are full.","bags",["bag’s","bag"],"🛍️"],
    ["The bat has ___.","fangs",["fang’s","fang"],"🦇"],["The ___ egg is blue.","bird’s",["birds","birdz"],"🥚"],["Can I see ____ hat?","Dan’s",["Dans","Dan"],"🎩"],
    ["I can put on her ____.","socks",["sock’s","sox"],"🧦"],["I toss two ___ in the net.","balls",["ball’s","ball"],"🏀"],["I put the ___ tank by my bed.","fish’s",["fish","fishes"],"🐠"],
    ["___ van is new.","Hank’s",["Hank","Hanks"],"🚐"],["(👑👑 two kings) The ___ can sing.","kings",["king’s","king"],"👑"],["Bess has the ___ tag.","pup’s",["pups","pup"],"🐶"],
    ["____ wish is to sing.","Val’s",["Vals","Val"],"🎶"],["The ____ web is big.","bug’s",["bugz","bugs"],"🕸️"]];
  bonus({id:"bonus-wordwall-possessive-plural-nouns",remember:["Plural noun = more than one: books · rings · socks","Possessive noun = who has something: the cat’s toy · Dan’s hat · the bug’s web"],urls:["https://wordwall.net/resource/6822711/english/possessive-and-plural-nouns"],title:"Possessive and Plural Nouns",source:"Game · Wordwall · Possessive and Plural nouns",
    cards:chunk(WWP,10).map((rows,k)=>card("Possessive or plural?","Choose the word that fits.",rows.map(([q,a,x,e],i)=>ch(`w${k}${i}`,q,[a,...x],a,e)),
      rows.map(([q,a])=>q.replace(/_+/,a)).join(" · ")))});

  // ───────── 51. Baamboozle 1017950 "Ending blends" (đáp án do người tạo ghi trên thẻ; "hand" kết thúc bằng nd) ─────────
  const EB=[["list","st","📝"],["fist","st","✊"],["rest","st","🏖️"],["nest","st","🪺"],["west","st","🧭"],["hand","nd","✋"],["left","ft","⬅️"],["craft","ft","🎨"],
    ["loft","ft","🏠"],["shift","ft","⌨️"],["land","nd","🌴"],["wind","nd","🌬️"],["pond","nd","🐟"],["bend","nd","🙇"],["bond","nd","🔗"],["bank","nk","🏦"],
    ["tank","nk","🛢️"],["pink","nk","🩷"],["think","nk","🤔"],["link","nk","⛓️"],["rank","nk","🏆"],["monk","nk","🧘"],["sand","nd","🏜️"]];
  bonus({id:"bonus-baamboozle-ending-blends",remember:["Ending blends: st (nest, list) · ft (left, craft) · nd (hand, sand) · nk (bank, pink)"],urls:["https://www.baamboozle.com/game/1017950"],title:"Ending Blends",source:"Game · Baamboozle · Ending blends",
    cards:chunk(EB,12).map((rows,k)=>card("Ending blends","Choose the correct ending blend of the word.",rows.map(([w,b,e],i)=>sel(`e${k}${i}`,`${e} ${w}`,["st","ft","nd","nk"],b,e)),
      rows.map(([w,b])=>`${w} (${b})`).join(" · ")))});
})();
