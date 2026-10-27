// Thư viện quiz: mỗi file trong quizzes/ gọi registerQuiz({...}) (xem quiz-registry.js và HUONG-DAN.md).
const registeredQuizzes=(window.quizRegistry||[]).filter(entry=>entry&&entry.id&&entry.subject&&Array.isArray(entry.subject.questions));
const $=selector=>document.querySelector(selector);
const mascotSets={
  academy:{label:"Elsa",path:"assets/mascot/academy",paths:["assets/mascot/academy","assets/mascot/personal"],gender:"girl",builtIn:true}
};
const characterKey="grade1-review-character-v1";
const historyKey="grade1-review-history-v1";
const usersKey="grade1-review-users-v1";
const validGenders=new Set(["girl","boy"]);
const isStoredAvatar=value=>typeof value==="string"&&/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value);

function fallbackAvatar(gender="girl"){
  const isBoy=gender==="boy";
  const background=isBoy?"%23dff5ff":"%23ffe0ec";
  const shirt=isBoy?"%2355bde9":"%23ff76aa";
  const hair=isBoy?"%23443a38":"%23633d35";
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' rx='34' fill='${background}'/%3E%3Ccircle cx='80' cy='63' r='34' fill='%23ffd2b5'/%3E%3Cpath d='M45 63c0-27 16-43 36-43 24 0 37 17 35 44-9-18-22-26-39-26-12 0-22 9-32 25z' fill='${hair}'/%3E%3Ccircle cx='68' cy='65' r='3.5' fill='%2331314d'/%3E%3Ccircle cx='93' cy='65' r='3.5' fill='%2331314d'/%3E%3Cpath d='M70 80q10 9 20 0' fill='none' stroke='%23a54f58' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M31 151c3-34 21-53 49-53s47 19 50 53' fill='${shirt}'/%3E%3C/svg%3E`;
}

function readCustomUsers(){
  try{
    const parsed=JSON.parse(localStorage.getItem(usersKey));
    if(!Array.isArray(parsed)) return [];
    const users=parsed.filter(user=>user&&typeof user.id==="string"&&user.id.startsWith("user-")&&typeof user.label==="string"&&user.label.trim()&&user.label.trim().toLowerCase()!=="test"&&validGenders.has(user.gender)).map(user=>({
      id:user.id,
      label:user.label.trim().slice(0,30),
      gender:user.gender,
      avatar:isStoredAvatar(user.avatar)?user.avatar:"",
      createdAt:typeof user.createdAt==="string"?user.createdAt:"",
      custom:true
    }));
    if(users.length!==parsed.length){try{localStorage.setItem(usersKey,JSON.stringify(users))}catch{}}
    return users;
  }catch{return []}
}

let customUsers=readCustomUsers();
const availableBuddies=()=>[
  ...Object.entries(mascotSets).map(([id,buddy])=>({id,...buddy})),
  ...customUsers
];
const getBuddy=id=>availableBuddies().find(buddy=>buddy.id===id);
const visibleBuddies=expanded=>expanded?availableBuddies():[getBuddy(chosenCharacter)||getBuddy("academy")];
let chosenCharacter="academy";
try{chosenCharacter=localStorage.getItem(characterKey)||"academy"}catch{}
if(!getBuddy(chosenCharacter)) chosenCharacter="academy";
const buddyAsset=(buddy,pose)=>buddy.custom?(buddy.avatar||fallbackAvatar(buddy.gender)):`${buddy.path}/${pose}.webp`;
const mascotAsset=pose=>buddyAsset(getBuddy(chosenCharacter)||getBuddy("academy"),pose);
function applyBuddyTheme(){document.body.dataset.buddyGender=(getBuddy(chosenCharacter)||getBuddy("academy")).gender}
applyBuddyTheme();
const subjectOrder=["close-reading","language","math","science","wellbeing"];
// Bài bonus (hidden) không hiện trong Danh sách; chỉ mở từ nút "Do the quiz here" trong thẻ Bonus.
const quizCatalog=registeredQuizzes.filter(entry=>!entry.hidden).map(({subject,...item})=>item);
let bonusReturnId=null;
const bonusQuizFor=url=>{const key=window.normalizeBonusUrl?window.normalizeBonusUrl(url):url;const id=(window.BONUS_QUIZ_BY_URL||{})[key];return id&&(quizLibrary[id]||quizLibrary[`${id}-p1`])?id:null};
const quizLibrary=Object.fromEntries(registeredQuizzes.map(entry=>[entry.id,entry]));
// Bài "Tổng hợp kiến thức tuần": uploadDate bắt đầu bằng "weekly" → nhóm riêng, đứng đầu Danh sách, không ghi ngày.
const isWeeklyKey=key=>String(key).startsWith("weekly");
const catalogKeyOrder=(a,b)=>(isWeeklyKey(b)-isWeeklyKey(a))||(isWeeklyKey(a)?a.localeCompare(b):b.localeCompare(a));
const uploadLabels=Object.fromEntries(quizCatalog.filter(item=>item.uploadLabel).map(item=>[item.uploadDate,item.uploadLabel]));
// Tab môn học trong màn làm bài trỏ tới bài mới nhất của từng môn.
const defaultQuizIds=Object.fromEntries(subjectOrder.map(subjectKey=>{
  const pick=list=>list.reduce((best,item)=>!best||item.uploadDate>=best.uploadDate?item:best,null);
  const ofSubject=quizCatalog.filter(item=>item.subjectKey===subjectKey);
  // Ưu tiên bài theo ngày mới nhất; môn chỉ còn bài tổng hợp tuần (vd. LA W1&2) thì mở bài tổng hợp đầu tiên.
  const latest=pick(ofSubject.filter(item=>!isWeeklyKey(item.uploadDate)))||ofSubject.find(item=>isWeeklyKey(item.uploadDate));
  return latest?[subjectKey,latest.id]:null;
}).filter(Boolean));
const resolveQuizId=key=>key;
const libraryEntry=key=>quizLibrary[resolveQuizId(key)];
const subjectFor=key=>libraryEntry(key)?.subject;
const groupsFor=key=>subjectFor(key).groups;
const sharedGroupDetail=group=>String(group.detail||group.subtitle||"").replace(/\s*·\s*(?:\d+ questions?|No additional questions in this part\.)\s*$/i,"").trim();
function mergeSharedContentGroups(groups){
  const merged=[];
  for(const group of groups){
    const previous=merged[merged.length-1];
    if(previous&&previous.start===group.start&&previous.end===group.end){
      previous.title=`${previous.title} / ${group.title}`;
      previous.details.push(sharedGroupDetail(group));
      const count=Math.max(0,previous.end-previous.start+1);
      previous.subtitle=`${previous.details.filter(Boolean).join(" / ")} · ${count?`${count} question${count===1?"":"s"}`:"No additional questions in this part."}`;
      continue;
    }
    merged.push({...group,details:[sharedGroupDetail(group)]});
  }
  return merged.map(({details,...group})=>group);
}
const displayGroupsFor=key=>mergeSharedContentGroups(groupsFor(key));

let active=null;
const memory={};
const storageKey=key=>`grade1-review-list-v4-${resolveQuizId(key)}`;
const escapeHtml=value=>String(value).replace(/[&<>"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));
const normalize=value=>String(value??"").trim().toLowerCase().replace(/[’]/g,"'").replace(/[.!?]/g,"").replace(/\s+/g," ");
const normalizeSentence=value=>String(value??"").trim().replace(/[’]/g,"'").replace(/\s+/g," ");
const normalizeChoice=value=>String(value??"").trim().toLowerCase().replace(/[’]/g,"'").replace(/\s+/g," ");
const semanticStopWords=new Set(["a","an","the","am","are","is","was","were","be","been","being","do","does","did","to","of","at","in","on","with","and","or","but","it","its","he","she","they","them","his","her","their","this","that"]);
const semanticWords=value=>normalize(value)
  .replace(/\beveryday\b/g,"every day")
  .replace(/\bcannot\b/g,"can not")
  .replace(/[^a-z0-9'\s-]/g," ")
  .split(/\s+/)
  .filter(word=>word&&!semanticStopWords.has(word));
const flexibleSentenceMatch=(given,answer)=>{
  const actual=semanticWords(given),expected=semanticWords(answer);
  if(actual.length<2||!expected.length) return false;
  const available=[...actual];
  return expected.every(word=>{
    const index=available.indexOf(word);
    if(index<0) return false;
    available.splice(index,1);
    return true;
  });
};
const multiChoiceCount=item=>item?.type==="multi-any"?Number(item.min)||0:Array.isArray(item?.answer)?item.answer.length:0;
const multiChoiceHint=item=>{
  const count=multiChoiceCount(item);
  return count?`Choose ${count} answer${count===1?"":"s"}.`:"Choose all correct answers.";
};

function greetingForHour(hour){
  if(hour>=5&&hour<12) return {title:"Good morning, little star!",wish:"Wishing you a bright and happy learning day."};
  if(hour>=12&&hour<18) return {title:"Good afternoon, super learner!",wish:"Keep smiling, thinking, and shining your brightest."};
  return {title:"Good evening, little star!",wish:"You did your best today — now enjoy one more learning adventure."};
}

function elsaWelcomeForHour(hour){
  if(hour>=5&&hour<12) return {title:"Good morning! My name is Elsa!",wish:"Welcome to my website. Let’s start a bright learning day together!",image:"assets/mascot/academy/welcome.webp"};
  if(hour>=12&&hour<18) return {title:"Good afternoon! I’m Elsa!",wish:"Welcome to my website. Let’s learn, smile, and do our best together!",image:"assets/mascot/personal/language.webp"};
  return {title:"Good evening! My name is Elsa!",wish:"Welcome to my website. You did wonderfully today — let’s enjoy one more learning adventure together!",image:"assets/mascot/academy/success.webp"};
}

function formatUploadDate(isoDate){
  if(uploadLabels[isoDate]) return uploadLabels[isoDate];
  if(isWeeklyKey(isoDate)) return "Tổng hợp kiến thức tuần";
  const [year,month,day]=isoDate.split("-");
  return `${day}/${month}/${year}`;
}

// Trong mỗi ngày: toàn bộ Language Arts trước, rồi Science, rồi các môn khác (giữ thứ tự Part 1, 2, 3…).
const catalogSubjectRank={language:0,science:1};
function catalogGroupsByUploadDate(items=quizCatalog){
  const groups=items.reduce((result,item)=>{
    (result[item.uploadDate]??=[]).push(item);
    return result;
  },{});
  Object.values(groups).forEach(list=>{
    const position=new Map(list.map((item,index)=>[item,index]));
    list.sort((a,b)=>((catalogSubjectRank[a.subjectKey]??2)-(catalogSubjectRank[b.subjectKey]??2))||position.get(a)-position.get(b));
  });
  return groups;
}

function setActiveTopTab(view){
  const tabMap={home:"homeBtn",catalog:"catalogBtn",history:"historyBtn",mindmap:"mindmapBtn"};
  const mindmapView=document.getElementById("mindmapView");
  if(mindmapView) mindmapView.hidden=view!=="mindmap";
  Object.entries(tabMap).forEach(([name,id])=>{
    const tab=$("#"+id),selected=name===view;
    if(!tab) return;
    tab.classList.toggle("active",selected);
    tab.setAttribute("aria-selected",String(selected));
  });
}

function wheelScrollAmount(deltaY){
  if(!Number.isFinite(deltaY)||deltaY===0) return 0;
  return Math.sign(deltaY)*Math.min(220,Math.max(36,Math.abs(deltaY)));
}

function handleWheelScroll(event){
  if(event.ctrlKey||event.defaultPrevented) return;
  const amount=wheelScrollAmount(event.deltaY);
  if(!amount||document.documentElement.scrollHeight<=window.innerHeight) return;
  const internalScroller=event.target.closest?.(".result-dialog-card,.add-user-card,.mm-stage");
  if(internalScroller&&internalScroller.scrollHeight>internalScroller.clientHeight) return;
  event.preventDefault();
  window.scrollBy({top:amount,left:0,behavior:"auto"});
}

function readState(key){
  const id=resolveQuizId(key);
  if(memory[id]) return memory[id];
  try{
    const parsed=JSON.parse(localStorage.getItem(storageKey(key)))||{answers:{},submitted:false};
    parsed.answers=parsed.answers||{};
    parsed.submitted=Boolean(parsed.submitted);
    memory[id]=parsed;
  }catch{
    memory[id]={answers:{},submitted:false};
  }
  return memory[id];
}

function writeState(key){
  const id=resolveQuizId(key);
  try{
    localStorage.setItem(storageKey(key),JSON.stringify(memory[id]));
    return true;
  }catch{
    return false;
  }
}

function saveGiven(key,index,given){
  const state=readState(key);
  state.submitted=false;
  state.answers[index]={given,checked:false,correct:false};
  return writeState(key);
}

function correctFor(item,given){
  if(item.type==="compound") return Boolean(given)&&item.fields.every(field=>fieldCorrect(field,given[field.id]));
  if(item.type==="multi"){
    const expected=item.answer.map(normalizeChoice).sort();
    const actual=(Array.isArray(given)?given:[]).map(normalizeChoice).sort();
    return expected.length===actual.length&&expected.every((value,index)=>value===actual[index]);
  }
  if(item.type==="fill"){const numeric=numericAnswerMatch(item.answer,given);if(numeric!==null) return numeric}
  if(item.type==="fill") return item.answer.some(answer=>normalize(answer)===normalize(given));
  return normalizeChoice(item.answer)===normalizeChoice(given);
}

function fieldHasAnswer(field,given){
  if(field.type==="multi"||field.type==="wordsearch") return Array.isArray(given)&&given.length>0;
  if(field.type==="multi-any") return Array.isArray(given)&&given.length>=field.min;
  if(field.type==="draw") return Boolean(given&&Array.isArray(given.strokes)&&given.strokes.some(stroke=>Array.isArray(stroke)&&stroke.length>1));
  return String(given??"").trim().length>0;
}

// Toán: đáp án là số → chấp nhận chỉ ghi số ("6", "6 birds") hoặc viết cả phép tính đúng ("2 + 4 = 6").
// Phép tính phải đúng (hai vế bằng nhau) và có chứa số đáp án. Trả về null nếu đáp án không phải số.
function evalArithmetic(expression){
  const clean=String(expression).replace(/[−–]/g,"-").replace(/×/g,"*").replace(/÷/g,"/").replace(/\s+/g,"");
  if(!clean||!/\d/.test(clean)||!/^[\d+\-*/().]+$/.test(clean)) return NaN;
  try{const value=Function(`"use strict";return (${clean});`)();return Number.isFinite(value)?value:NaN}catch{return NaN}
}
function numericAnswerMatch(answers,given){
  const numbers=(answers||[]).map(answer=>String(answer).trim()).filter(answer=>/^-?\d+(\.\d+)?$/.test(answer)).map(Number);
  if(!numbers.length) return null;
  const text=String(given??"").trim().replace(/[.!]$/,"");
  if(!text) return false;
  if(!text.includes("=")){
    const match=text.match(/^(-?\d+(?:\.\d+)?)(?:\s+[a-zA-Z][a-zA-Z\s]*)?$/);
    return Boolean(match)&&numbers.includes(Number(match[1]));
  }
  const sides=text.split("=").map(side=>side.replace(/[a-zA-Z]+/g,"").trim());
  const values=sides.map(evalArithmetic);
  if(values.length<2||values.some(Number.isNaN)||!values.every(value=>Math.abs(value-values[0])<1e-9)) return false;
  const used=(text.match(/\d+(?:\.\d+)?/g)||[]).map(Number);
  return numbers.some(number=>used.includes(number));
}

function fieldCorrect(field,given){
  if(field.type==="draw") return fieldHasAnswer(field,given);
  if(field.type==="text-any") return fieldHasAnswer(field,given);
  if(field.type==="choice-any") return field.choices.some(choice=>normalizeChoice(choice)===normalizeChoice(given));
  if(field.type==="multi-any") return Array.isArray(given)&&given.length===field.min&&given.every(value=>field.choices.includes(value));
  if(field.type==="multi"||field.type==="wordsearch"){
    const expected=field.answer.map(normalizeChoice).sort();
    const actual=(Array.isArray(given)?given:[]).map(normalizeChoice).sort();
    return expected.length===actual.length&&expected.every((value,index)=>value===actual[index]);
  }
  if(field.type==="fill"&&!field.strict&&!field.flexible){const numeric=numericAnswerMatch(field.answer,given);if(numeric!==null) return numeric}
  if(field.type==="fill") return field.answer.some(answer=>{
    if(field.flexible) return normalize(answer)===normalize(given)||flexibleSentenceMatch(given,answer);
    return (field.strict?normalizeSentence(answer):normalize(answer))===(field.strict?normalizeSentence(given):normalize(given));
  });
  return normalizeChoice(field.answer)===normalizeChoice(given);
}

function isExpectedChoice(item,choice){
  const expected=Array.isArray(item.answer)?item.answer:[item.answer];
  return expected.some(answer=>normalizeChoice(answer)===normalizeChoice(choice));
}

function expectedAnswerText(item){
  if(item.type==="compound") return item.fields.map(field=>{
    if(field.type==="draw") return `${field.label}: completed drawing`;
    if(field.type==="text-any") return `${field.label}: completed response`;
    if(field.type==="choice-any") return `${field.label}: any listed choice`;
    if(field.type==="multi-any") return `${field.label}: any ${field.min} listed needs`;
    const expected=field.type==="fill"?field.answer[0]:Array.isArray(field.answer)?field.answer.join(" • "):field.answer;
    return `${field.label}: ${expected}`;
  }).join(" | ");
  if(item.type==="multi") return item.answer.join(" • ");
  if(item.type==="fill") return item.answer[0];
  return item.answer;
}

function scorePercent(correct,total){
  return total?Math.round(correct/total*100):0;
}

function scoreBand(percent){
  if(percent>85) return "high";
  if(percent>=70) return "mid";
  return "low";
}

function resultMessage(percent){
  if(percent<70) return {
    title:"Keep going, little star!",
    message:"Keep trying — you will do even better next time!",
    icon:"🌱"
  };
  if(percent<=85) return {
    title:"Super! Great work!",
    message:"Great job! Keep learning and shining!",
    icon:"⭐"
  };
  return {
    title:"Excellent! Amazing!",
    message:"Congratulations — you did an amazing job!",
    icon:"🏆"
  };
}

function formatTestDate(date){
  const month=String(date.getMonth()+1).padStart(2,"0");
  const day=String(date.getDate()).padStart(2,"0");
  return `${month}/${day}/${date.getFullYear()}`;
}

function readHistory(){
  try{
    const parsed=JSON.parse(localStorage.getItem(historyKey));
    return Array.isArray(parsed)?parsed:[];
  }catch{
    return [];
  }
}

function persistJson(key,value){
  try{
    const serialized=JSON.stringify(value);
    localStorage.setItem(key,serialized);
    return localStorage.getItem(key)===serialized;
  }catch{return false}
}

// Tên bài cho History: tên bài + chủ đề lấy từ phụ đề (bỏ ngày và "Part x/y"), kèm môn · ngày · Part.
function quizLessonInfo(key){
  const entry=libraryEntry(key);if(!entry) return null;
  const subtitle=String(entry.subject.subtitle||"");
  const part=(subtitle.match(/Part (\d+\/\d+)/)||[])[1]||"";
  const topics=subtitle.split(/\s+·\s+/).filter(t=>t&&!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)&&!/^Part \d+\/\d+$/.test(t)&&!/^Class Diary/.test(t));
  const baseTitle=String(entry.title).replace(/\s*\((?:[^()]*·\s*)?Part \d+[a-z]?\)$/,"").replace(/\s*\(Part \d+[a-z]?:[^)]*\)$/,"");
  const generic=/^(Language Arts|Science|Math|Wellbeing|Close Reading)$/.test(baseTitle);
  const shortTitle=baseTitle.replace(/^(Language Arts|Science|Math|Wellbeing|Close Reading)\s+[–-]\s+/,"");
  const extra=topics.filter(t=>!shortTitle.toLowerCase().includes(t.toLowerCase())&&!t.toLowerCase().startsWith(shortTitle.toLowerCase().replace(/\s*\(.*$/,""))).slice(0,2);
  const lesson=generic?topics.slice(0,3).join(" · "):`${shortTitle}${extra.length?` — ${extra.join(" · ")}`:""}`;
  const date=formatUploadDate(entry.uploadDate);
  return {lesson:lesson||baseTitle,subject:entry.subject.name,date,part};
}

function recordHistory(key,result,date=new Date()){
  const buddy=getBuddy(chosenCharacter)||getBuddy("academy");
  const entryData=libraryEntry(key);
  const entry={
    id:`${date.getTime()}-${Math.random().toString(36).slice(2,8)}`,
    date:formatTestDate(date),
    character:buddy.label,
    subject:entryData.subject.name,
    quizTitle:entryData.title,
    quizId:resolveQuizId(key),
    ...(()=>{const info=quizLessonInfo(key)||{};return {lesson:info.lesson,lessonDate:info.date,part:info.part}})(),
    correct:result.correct,
    total:result.total,
    percent:scorePercent(result.correct,result.total)
  };
  const history=[entry,...readHistory()];
  const limits=[200,100,50,20,1];
  entry.saved=limits.some(limit=>persistJson(historyKey,history.slice(0,limit)));
  return entry;
}

function hasAnswer(item,given){
  if(item.type==="compound") return Boolean(given)&&item.fields.every(field=>fieldHasAnswer(field,given[field.id]));
  if(item.type==="multi") return Array.isArray(given)&&given.length>0;
  return String(given??"").trim().length>0;
}

function toggleChoice(item,given,choice){
  if(item.type!=="multi") return choice;
  const values=Array.isArray(given)?given:[];
  return values.includes(choice)?values.filter(value=>value!==choice):[...values,choice];
}

function questionUnitCount(subject,item){
  return subject.scoreByField&&item.type==="compound"?item.fields.length:1;
}

function questionUnitTotal(subject){
  return subject.questions.reduce((total,item)=>total+questionUnitCount(subject,item),0);
}

function counts(key){
  const state=readState(key),subject=subjectFor(key),items=subject.questions;
  let answered=0,graded=0,correct=0;
  items.forEach((item,index)=>{
    const record=state.answers[index];
    if(subject.scoreByField&&item.type==="compound"){
      item.fields.forEach(field=>{
        const given=record?.given?.[field.id];
        if(fieldHasAnswer(field,given)) answered++;
        if(record?.checked){
          graded++;
          if(fieldHasAnswer(field,given)&&fieldCorrect(field,given)) correct++;
        }
      });
      return;
    }
    if(record&&hasAnswer(item,record.given)) answered++;
    if(record?.checked){graded++;if(record.correct)correct++}
  });
  return {answered,graded,correct,total:questionUnitTotal(subject)};
}

function unansweredIndexes(key){
  const state=readState(key),items=subjectFor(key).questions;
  return items.map((item,index)=>({item,index})).filter(({item,index})=>!hasAnswer(item,state.answers[index]?.given)).map(({index})=>index);
}

function submitSubject(key){
  const missing=unansweredIndexes(key);
  const state=readState(key),items=subjectFor(key).questions;
  items.forEach((item,index)=>{
    const record=state.answers[index]||{given:item.type==="multi"?[]:item.type==="compound"?{}:"",checked:false,correct:false};
    record.correct=hasAnswer(item,record.given)&&correctFor(item,record.given);
    record.checked=true;
    state.answers[index]=record;
  });
  state.submitted=true;
  writeState(key);
  return {submitted:true,missing,...counts(key)};
}

function resetSubject(key){
  const id=resolveQuizId(key);
  memory[id]={answers:{},submitted:false};
  try{localStorage.removeItem(storageKey(key))}catch{}
  return memory[id];
}

function saveCustomUsers(){
  return persistJson(usersKey,customUsers);
}

function addCustomUser({name,gender,avatar=""}){
  const label=String(name||"").trim().replace(/\s+/g," ").slice(0,30);
  if(!label||!validGenders.has(gender)) return null;
  const user={id:`user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label,gender,avatar:isStoredAvatar(avatar)?avatar:"",createdAt:new Date().toISOString(),custom:true};
  customUsers.push(user);
  let saved=saveCustomUsers();
  if(!saved&&user.avatar){
    user.avatar="";
    user.avatarFallback=true;
    saved=saveCustomUsers();
  }
  if(!saved){customUsers.pop();return null}
  return user;
}

function setChosenCharacter(key){
  if(!getBuddy(key)) return false;
  try{
    localStorage.setItem(characterKey,key);
    if(localStorage.getItem(characterKey)!==key) return false;
  }catch{return false}
  chosenCharacter=key;
  applyBuddyTheme();
  return true;
}

let userListOpen=false;
function buildHome(){
  const greeting=elsaWelcomeForHour(new Date().getHours());
  $("#landingGreeting").textContent=greeting.title;
  $("#landingWish").textContent=greeting.wish;
  const mascot=$("#landingMascot");if(mascot) mascot.src=greeting.image;
}

function buildCatalogHeader(){
  $("#characterOptions").innerHTML=visibleBuddies(userListOpen).map(character=>`<button class="character-option ${character.gender} ${character.custom?"custom-user":""} ${character.id===chosenCharacter?"active":""}" data-character="${escapeHtml(character.id)}" type="button" aria-pressed="${character.id===chosenCharacter}"><img src="${buddyAsset(character,"welcome")}" alt="${escapeHtml(character.label)} avatar"><span>${escapeHtml(character.label)}</span><small>${character.id===chosenCharacter?"Selected ✓":character.custom?"User profile":"Choose me"}</small></button>`).join("");
  $("#userListBtn").setAttribute("aria-expanded",String(userListOpen));
  $("#userListBtn").classList.toggle("open",userListOpen);
  $("#userListBtn").querySelector("small").textContent=userListOpen?"Hide other profiles":"Show all profiles";
  $("#addUserBtn").hidden=!userListOpen;
  document.querySelectorAll(".character-option").forEach(button=>button.addEventListener("click",()=>chooseCharacter(button.dataset.character)));
}

function chooseCharacter(key){
  if(!setChosenCharacter(key)) return;
  userListOpen=false;
  buildCatalogHeader();
}

function toggleUserList(){userListOpen=!userListOpen;buildCatalogHeader();return userListOpen}

function compressAvatar(file){
  if(!file) return Promise.resolve("");
  if(!file.type.startsWith("image/")) return Promise.reject(new Error("Please choose an image file • Vui lòng chọn một tệp ảnh."));
  if(file.size>8*1024*1024) return Promise.reject(new Error("Photo is too large (maximum 8 MB) • Ảnh quá lớn (tối đa 8 MB)."));
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error("Could not read this photo • Không thể đọc ảnh này."));
    reader.onload=()=>{
      const image=new Image();
      image.onerror=()=>reject(new Error("Could not open this photo • Không thể mở ảnh này."));
      image.onload=()=>{
        const size=240,canvas=document.createElement("canvas"),context=canvas.getContext("2d");
        canvas.width=size;canvas.height=size;
        const crop=Math.min(image.naturalWidth,image.naturalHeight);
        const sourceX=(image.naturalWidth-crop)/2,sourceY=(image.naturalHeight-crop)/2;
        context.drawImage(image,sourceX,sourceY,crop,crop,0,0,size,size);
        resolve(canvas.toDataURL("image/jpeg",.72));
      };
      image.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}

let pendingAvatar="";
function updateNewUserPreview(){
  const gender=document.querySelector('input[name="userGender"]:checked')?.value||"girl";
  $("#newUserPreview").src=pendingAvatar||fallbackAvatar(gender);
  $("#addUserDialog").dataset.gender=gender;
  document.querySelectorAll(".gender-option").forEach(option=>option.classList.toggle("selected",option.querySelector("input").checked));
}
function resetAddUserForm(){
  $("#addUserForm").reset();
  pendingAvatar="";
  $("#addUserError").hidden=true;
  $("#saveUserBtn").disabled=false;
  updateNewUserPreview();
}
function openAddUserDialog(){
  resetAddUserForm();
  $("#addUserDialog").showModal();
  requestAnimationFrame(()=>$("#newUserName").focus());
}
function closeAddUserDialog(){$("#addUserDialog").close();resetAddUserForm()}

async function handleAvatarChange(event){
  const error=$("#addUserError");
  error.hidden=true;
  try{pendingAvatar=await compressAvatar(event.currentTarget.files?.[0]);updateNewUserPreview()}
  catch(problem){pendingAvatar="";error.textContent=problem.message;error.hidden=false;event.currentTarget.value="";updateNewUserPreview()}
}

function handleAddUser(event){
  event.preventDefault();
  const error=$("#addUserError"),name=$("#newUserName").value,gender=document.querySelector('input[name="userGender"]:checked')?.value;
  const user=addCustomUser({name,gender,avatar:pendingAvatar});
  if(!user){error.textContent=name.trim()?"Could not save this user. Try a smaller photo • Không thể lưu. Hãy thử ảnh nhỏ hơn.":"Please enter a name • Vui lòng nhập tên của bé.";error.hidden=false;return}
  if(!setChosenCharacter(user.id)){
    customUsers=customUsers.filter(item=>item.id!==user.id);
    saveCustomUsers();
    error.textContent="Could not make this the active user • Không thể lưu hồ sơ này làm người dùng chính.";
    error.hidden=false;
    return;
  }
  userListOpen=false;
  $("#addUserDialog").close();
  resetAddUserForm();
  buildCatalogHeader();
}

// Thanh chuyển bài: mọi bài CÙNG NGÀY với bài đang mở, đúng thứ tự Danh sách
// (các Part của Language Arts liền nhau, hết Language Arts mới đến Science).
// Nhãn nút: "Language Arts · Part 2", hoặc phần sau dấu "–" của tiêu đề (vd. "Science · Lesson 2 Review").
const tabLabel=item=>{
  const part=/Part\s*(\d+[a-z]?)/i.exec(item.title);
  const dash=item.title.indexOf("–");
  const name=dash<0?"":item.title.slice(dash+1).replace(/\(.*?\)/g,"").trim();
  const extra=[name,part?`Part ${part[1]}`:""].filter(Boolean).join(" · ");
  return `${subjectFor(item.id).icon} ${subjectFor(item.id).name}${extra?` · ${extra}`:""}`;
};
function buildTabs(){
  const entry=libraryEntry(active);
  // Đang làm bài bonus: hiện nút quay lại bài trước + các bài cùng ngày của bài trước.
  const home=entry?.hidden?libraryEntry(bonusReturnId):entry;
  const sameDay=home?catalogGroupsByUploadDate()[home.uploadDate]||[]:[];
  const back=entry?.hidden&&home?`<button class="active" data-quiz="${escapeHtml(home.id)}" type="button">↩ Back to ${escapeHtml(tabLabel(home))}</button>`:"";
  $("#subjectTabs").innerHTML=back+sameDay.map(item=>`<button class="${item.id===entry.id?"active":""}" data-quiz="${escapeHtml(item.id)}" type="button">${escapeHtml(tabLabel(item))}</button>`).join("");
  document.querySelectorAll("#subjectTabs button").forEach(button=>button.addEventListener("click",()=>openSubject(button.dataset.quiz)));
}

function compoundFieldMarkup(field,value,index,showResult,disabled){
  const fieldId=escapeHtml(field.id),label=escapeHtml(field.label);
  // field.bigImg: ảnh minh hoạ to, nằm trên câu hỏi (ảnh chụp/hình hoạt động cần nhìn rõ).
  const visualClass=(field.img||field.icon?"":" no-field-visual")+(field.img&&field.bigImg?" big-field-visual":"");
  const typeClass=` ${escapeHtml(field.type)}-field`;
  const correct=showResult&&fieldCorrect(field,value);
  const result=showResult?`<small class="compound-field-result ${correct?"good":"try"}">${correct?"✓ Correct":"✕ Check this part"}</small>`:"";
  const fieldImage=field.img
    ? `<img class="compound-field-image" src="${escapeHtml(field.img)}" alt="Picture for ${label}" loading="lazy">`
    : field.icon?`<span class="compound-field-icon" aria-hidden="true">${escapeHtml(field.icon)}</span>`:"";
  if(field.type==="text-any"){
    return `<label class="compound-field open-response-field${visualClass}">${fieldImage}<span class="compound-field-content"><strong>${label}</strong><textarea class="compound-text" data-field="${fieldId}" rows="3" placeholder="Write your answer"${disabled}>${escapeHtml(value||"")}</textarea>${result}</span></label>`;
  }
  if(field.type==="fill"){
    return `<label class="compound-field${typeClass}${visualClass}">${fieldImage}<span class="compound-field-content"><strong>${label}</strong><input class="compound-fill" data-field="${fieldId}" type="text" value="${escapeHtml(value||"")}" placeholder="Type your answer"${disabled}>${result}</span></label>`;
  }
  if(field.type==="select"){
    return `<label class="compound-field${typeClass}${visualClass}">${fieldImage}<span class="compound-field-content"><strong>${label}</strong><select class="compound-select${value?" has-value":""}" data-field="${fieldId}" aria-label="${label}"${disabled}><option value="">${field.fromWordBank?"Select a word":"Choose an answer"}</option>${field.choices.map(choice=>`<option value="${escapeHtml(choice)}"${value===choice?" selected":""}>${escapeHtml(choice)}</option>`).join("")}</select>${result}</span></label>`;
  }
  if(field.type==="draw"){
    return `<div class="compound-field drawing-field" data-field="${fieldId}"><div class="drawing-label"><strong>${label}</strong><button class="clear-drawing" type="button"${disabled}>Clear drawing</button></div><canvas class="drawing-canvas" data-field="${fieldId}" width="720" height="260" aria-label="${label}"></canvas>${result}</div>`;
  }
  const isMulti=field.type==="multi"||field.type==="multi-any"||field.type==="wordsearch";
  const selected=isMulti?(Array.isArray(value)?value:[]):[value];
  const type=isMulti?"checkbox":"radio";
  const selectionHint=isMulti?`<small class="multi-select-hint">${multiChoiceHint(field)}</small>`:"";
  const wordGrid=field.type==="wordsearch"?`<div class="word-search-grid" role="img" aria-label="Letter grid with hidden Science words">${field.grid.map(row=>row.map(letter=>`<span>${escapeHtml(letter)}</span>`).join("")).join("")}</div>`:"";
  return `<fieldset class="compound-field compound-options${field.type==="wordsearch"?" word-search-field":""}${visualClass}" data-field="${fieldId}" aria-label="${label}">${fieldImage}<div class="compound-field-content"><strong>${label}</strong>${selectionHint}${wordGrid}<div class="choice-list">${field.choices.map(choice=>`<label class="answer-option${selected.includes(choice)?" selected":""}"><input class="compound-choice" data-field="${fieldId}" type="${type}" name="q-${active}-${index}-${fieldId}" value="${escapeHtml(choice)}"${selected.includes(choice)?" checked":""}${disabled}>${field.choiceImages?.[choice]?`<img class="compound-choice-image" src="${escapeHtml(field.choiceImages[choice])}" alt="" loading="lazy">`:""}<span>${escapeHtml(choice)}</span></label>`).join("")}</div>${result}</div></fieldset>`;
}

function questionMarkup(item,index){
  const state=readState(active),record=state.answers[index]||{};
  const isOverviewImage=String(item.img||"").includes("science-overview-full-");
  const given=record.given;
  const showResult=state.submitted&&record.checked;
  const answered=hasAnswer(item,given);
  const statusText=showResult?(record.correct?"Correct ✓":answered?"Incorrect ✕":"Not answered ✕"):answered?"Answered ✓":"Not answered";
  const feedback=showResult
    ? record.correct
      ? `<p class="item-feedback good"><strong>✓ Correct!</strong></p>`
      : `<div class="item-feedback try"><strong>Correct answer: ${escapeHtml(expectedAnswerText(item))}</strong><p>${escapeHtml(item.explain)}</p></div>`
    : "";
  let answers="";
  const disabled=state.submitted?" disabled":"";
  if(item.type==="compound"){
    const values=given&&typeof given==="object"?given:{};
    const dropdownBank=Boolean(item.wordBank)&&item.fields.every(field=>field.type==="select");
    const wordBank=item.wordBank
      ? dropdownBank
        ? `<aside class="activity-word-bank dropdown-word-bank" aria-label="Word Bank"><strong>Word Bank</strong><div>${item.wordBank.map(word=>`<span class="word-bank-chip">${escapeHtml(word)}</span>`).join("")}</div></aside>`
        : `<aside class="activity-word-bank" aria-label="Word Bank"><strong>Word Bank — tap a word to fill the next blank</strong><div>${item.wordBank.map(word=>`<button class="word-bank-choice" type="button" data-word="${escapeHtml(word)}"${disabled}>${escapeHtml(word)}</button>`).join("")}</div></aside>`
      : "";
    answers=`<div class="compound-activity${dropdownBank?" dropdown-bank-activity":""}">${wordBank}${item.fields.map(field=>compoundFieldMarkup(field,values[field.id],index,showResult,disabled)).join("")}</div>`;
  }else if(item.type==="fill"){
    const resultClass=showResult?(record.correct?" correct-answer":" wrong-answer"):"";
    const resultMark=showResult?`<span class="answer-result-mark ${record.correct?"correct-mark":"wrong-mark"}" aria-label="${record.correct?"Correct":"Incorrect"}">${record.correct?"✓":"✕"}</span>`:"";
    answers=`<div class="fill-result-row"><input class="fill-answer${resultClass}" type="text" value="${escapeHtml(given||"")}" placeholder="Type your answer" aria-label="Answer question ${index+1}"${disabled}>${resultMark}</div>`;
  }else{
    const values=item.type==="multi"?(Array.isArray(given)?given:[]):[given];
    const selectionHint=item.type==="multi"?`<small class="multi-select-hint">${multiChoiceHint(item)}</small>`:"";
    answers=`${selectionHint}<div class="choice-list">${item.choices.map(choice=>{
      const selected=values.includes(choice);
      const checked=selected?" checked":"";
      const type=item.type==="multi"?"checkbox":"radio";
      const expected=isExpectedChoice(item,choice);
      const resultClass=showResult?(expected?" correct-choice":selected?" wrong-choice":""):"";
      const resultMark=showResult&&expected?`<b class="answer-result-mark correct-mark" aria-label="Correct answer">✓</b>`:showResult&&selected?`<b class="answer-result-mark wrong-mark" aria-label="Incorrect choice">✕</b>`:"";
      return `<label class="answer-option${selected?" selected":""}${state.submitted?" locked":""}${resultClass}"><input type="${type}" name="q-${active}-${index}" value="${escapeHtml(choice)}"${checked}${disabled}><span>${escapeHtml(choice)}</span>${resultMark}</label>`;
    }).join("")}</div>`;
  }
  const layoutClass=({"visual-choice":" visual-choice-question","design-activity":" design-activity-question","word-search-activity":" word-search-question","source-activity":" source-activity-question","icon-activity":" icon-activity-question"}[item.layout]||"")+(subjectFor(active).textOnly?" full-review-text-question":"");
  const imageMarkup=item.layout==="icon-activity"||!item.img?"":item.crop
    ? `<div class="question-thumb question-detail-crop" role="img" aria-label="Picture detail for: ${escapeHtml(item.text)}" style="--crop-image:url('${escapeHtml(item.img)}');--crop-x:${Number(item.crop.x)||50}%;--crop-y:${Number(item.crop.y)||50}%;--crop-size:${Number(item.crop.size)||160}%"></div>`
    : `<img class="question-thumb${isOverviewImage?" overview-image":""}" src="${item.img}" alt="Picture for: ${escapeHtml(item.text)}" loading="lazy">`;
  return `<article class="list-question${isOverviewImage?" overview-question":""}${item.type==="compound"?" worksheet-question":""}${layoutClass}${showResult?(record.correct?" result-correct":" result-wrong"):""}" data-index="${index}">
    <div class="question-number">${index+1}</div>
    ${imageMarkup}
    <div class="question-body">
      <div class="question-meta"><span>${escapeHtml(item.section)}</span><small class="save-status">${statusText}</small></div>
      <h3>${escapeHtml(item.text)}</h3>
      ${item.hint?`<p class="item-hint">${escapeHtml(item.hint)}</p>`:""}
      ${answers}${feedback}
    </div>
  </article>`;
}

function readingCardMarkup(reading){
  if(!reading) return "";
  const images=(reading.images||[]).map((src,index)=>`<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(reading.title)} page ${index+1}" loading="${index===0?"eager":"lazy"}"></figure>`).join("");
  const transcript=escapeHtml(reading.text||"").replace(/\n/g,"<br>");
  // Thẻ REMEMBER: "1. Class Diary 13/10/2026" + nội dung, "2. Class Diary …" (days do quiz-registry.js tạo).
  const days=reading.mode==="notes"&&Array.isArray(reading.days)?reading.days:null;
  // Mỗi ngày: (1) định nghĩa "Term: …" và ghi chú → lưới 2 cột không viền, term in đậm;
  // (2) Science "X help(s)/protect(s)/keep(s) …" → bảng "Animal structure | Function";
  // (3) Science "A turtle has… / Bears use…" → bảng "Animal | What it has or does". Ý gộp bằng "·" được tách riêng.
  const science=reading.mode==="notes"&&libraryEntry(active)?.subjectKey==="science";
  const TERMS=/^(protection|structure|function|structures|functions)$/i;
  const trim=text=>String(text).trim().replace(/\.$/,"");
  const cap=text=>text.charAt(0).toUpperCase()+text.slice(1);
  const classify=part=>{
    let m;
    if(science&&(m=part.match(/^(\w+)\s+→\s+(.+)$/))) return {kind:"def",term:cap(m[1]),text:m[2]};
    if((m=part.match(/^([^:]{1,32}):\s+(.+)$/))&&m[1].split(" ").length<=4) return {kind:"def",term:m[1],text:m[2]};
    if(science&&(m=part.match(/^(.+?)\s+((?:helps?|protects?|keeps?)\s+.+)$/))&&m[1].split(" ").length<=5&&!TERMS.test(m[1])) return {kind:"sf",a:cap(trim(m[1]).replace(/^the\s+/i,"")),b:trim(m[2])};
    if(science&&(m=part.match(/^((?:A|An)\s+\w+|[A-Z][a-z]+s(?:\s+and\s+[a-z]+s)?)\s+((?:has|have|uses|use|sprays|blends|can blend)\s+.+)$/))) return {kind:"animal",a:cap(m[1].replace(/^(A|An)\s+/,"")),b:trim(m[2])};
    return {kind:"note",text:part};
  };
  const noteCells=item=>{
    const head=String(item).match(/^([^:·]{1,40}):\s+(.+)$/);
    if(head&&/\s[·•]\s/.test(head[2])&&!head[2].includes(":")) return [{kind:"def",term:head[1],chips:head[2].replace(/\.$/,"").split(/\s+[·•]\s+/)}];
    const parts=String(item).split(/\s+[·•]\s+/);
    // "Bears and crabs use claws. Frogs use their tongue." → tách câu nếu câu nào cũng là dạng con vật + hành động.
    const sentences=parts.length===1?parts[0].split(/(?<=\.)\s+(?=[A-Z])/):[];
    if(science&&sentences.length>1&&sentences.every(sentence=>classify(sentence).kind==="animal")) return sentences.map(classify);
    return parts.map(classify);
  };
  const tableMarkup=(rows,head)=>rows.length?`<table class="note-grid"><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${escapeHtml(row.a)}</td><td>${escapeHtml(row.b)}</td></tr>`).join("")}</tbody></table>`:"";
  const dayMarkup=items=>{
    const cells=items.flatMap(noteCells);
    const plain=cells.filter(cell=>cell.kind==="def"||cell.kind==="note");
    return `${plain.length?`<div class="note-table">${layoutCells(plain).map(cellMarkup).join("")}</div>`:""}${tableMarkup(cells.filter(cell=>cell.kind==="sf"),["Animal structure","Function"])}${tableMarkup(cells.filter(cell=>cell.kind==="animal"),["Animal","What it has or does"])}`;
  };
  // Ô dài/chip chiếm cả dòng; ô lẻ cuối hàng (không có ô bên cạnh) cũng kéo cả dòng để bảng không bị ô trống.
  const layoutCells=cells=>{
    const wide=cells.map(cell=>Boolean(cell.chips)||(cell.term||"").length+(cell.text||"").length>70);
    let col=0;
    return cells.map((cell,i)=>{
      if(wide[i]){col=0;return {...cell,wide:true}}
      if(col===0&&(i===cells.length-1||wide[i+1])) return {...cell,wide:true};
      col=1-col;return cell;
    });
  };
  // In đậm theo Class Diary: nhãn trước ":" là từ khoá (trừ nhãn chung như Example/Define/Writing Trait/Lesson n),
  // chữ diary in đậm (HFW, THURSDAY, Protection, Characters/Setting/Events, Genre: Fantasy), từ được Define.
  const PLAIN_LABEL=/^(example|define|writing trait|writing skill|homework check|lesson \d+)$/i;
  const DIARY_BOLD=[/^(Characters) are /,/^The (setting) is /,/^The (events) are /,/^(Protection) keeps /,/\b(THURSDAY)\b/,/^(Fantasy)\./,/^A (contraction) is /,/^A (singular noun) names /,/^A (plural noun) names /];
  const emph=(text,term)=>{
    let safe=escapeHtml(text);
    const rules=/^define$/i.test(term||"")?[/^(?:A |An )?(\w+) (?:is|are) /]:DIARY_BOLD;
    for(const rule of rules){const m=String(text).match(rule);if(m){const word=escapeHtml(m[1]);safe=safe.replace(word,`<b>${word}</b>`);break}}
    return safe;
  };
  const cellMarkup=cell=>{
    const label=cell.term?(PLAIN_LABEL.test(cell.term)?`<span class="note-label">${escapeHtml(cell.term)}</span>`:`<b>${escapeHtml(cell.term)}</b>`):"";
    const hfw=/high-frequency/i.test(cell.term||"");
    const body=cell.chips?`<span class="note-chips">${cell.chips.map(chip=>`<span>${hfw?`<b>${escapeHtml(chip)}</b>`:escapeHtml(chip)}</span>`).join("")}</span>`:`<span>${emph(cell.text,cell.term)}</span>`;
    return `<div class="note-cell${cell.wide?" wide":""}">${label}${body}</div>`;
  };
  // Link online (thẻ Bonus) có nội dung liên quan → thêm mục ghi nhớ, tiêu đề = tên link. Chỉ thêm ở thẻ REMEMBER đầu tiên.
  const subjectNow=days?subjectFor(active):null;
  const firstNotes=subjectNow?.readings?.find(entry=>entry.mode==="notes"&&Array.isArray(entry.days));
  const linkNotes=firstNotes===reading?[...new Map((subjectNow.readings||[]).filter(entry=>entry.mode==="bonus").flatMap(entry=>entry.links||[])
    .map(link=>[bonusQuizFor(link.url),link]).filter(([id])=>id&&(window.BONUS_REMEMBER||{})[id])).entries()].map(([id,link])=>({title:link.label,items:window.BONUS_REMEMBER[id]})):[];
  const daysMarkup=days?`<ol class="notes-days">${days.map(day=>`<li><h3>Class Diary ${escapeHtml(day.date)}</h3>${dayMarkup(day.items)}</li>`).join("")}${linkNotes.map(note=>`<li class="notes-link"><h3>${escapeHtml(note.title)}</h3>${dayMarkup(note.items)}</li>`).join("")}</ol>`:"";
  const listening=reading.mode==="listen";
  // "notes": khối Ghi nhớ quy tắc · "bonus": danh sách link luyện thêm (không tính điểm).
  const notes=reading.mode==="notes",bonus=reading.mode==="bonus";
  const reference=reading.mode==="reference"||notes||bonus;
  const sourceLink=reading.url?`<a class="reading-source-link" href="${escapeHtml(reading.url)}" target="_blank" rel="noopener noreferrer">▶ ${listening?"Listen to the story video":"Open the source"}</a>`:"";
  const extraLinks=(reading.links||[]).map(link=>{
    const quizId=bonusQuizFor(link.url);
    const inline=quizId&&quizId!==active;
    const open=inline&&bonusInlineState[quizId]?.open;
    const doHere=inline?`<button class="reading-source-link do-here" type="button" data-bonus-toggle="${escapeHtml(quizId)}" aria-expanded="${open?"true":"false"}">${open?"▲ Hide the quiz":"✏️ Do the quiz here"}</button>`:"";
    const panel=inline?`<div class="bonus-inline"${open?"":" hidden"}>${open?bonusInlineMarkup(quizId):""}</div>`:"";
    return `<div class="bonus-item"><span class="bonus-link"><b>${escapeHtml(link.label)}</b><a class="reading-source-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">▶ Open online</a>${doHere}</span>${panel}</div>`;
  }).join("");
  const instruction=notes?"Read these notes first.":bonus?"Extra practice from the class diary (not scored).":reference?"Use this source page for the questions in this section.":listening?"Listen to the complete story collection before answering its questions.":"Read this complete text before answering its questions.";
  const eyebrow=notes?"REMEMBER":bonus?"BONUS":reference?"LOOK AT THIS SOURCE PAGE":listening?"LISTEN TO THE WHOLE STORY FIRST":"READ THE WHOLE TEXT FIRST";
  return `<section class="reading-library${reference?" reading-reference":""}" id="reading-${escapeHtml(reading.id)}"><div class="reading-library-heading"><h2>${escapeHtml(reading.title)}</h2><p>${instruction}</p></div><article class="reading-card">
    <header><p class="eyebrow">${eyebrow}</p><p>${escapeHtml(reading.byline||"")}</p></header>
    ${sourceLink}${extraLinks?`<div class="reading-links">${extraLinks}</div>`:""}
    ${images?`${transcript?`<p class="reading-step">📖 Look at the book: <b>${escapeHtml(reading.title)}</b></p>`:""}<div class="reading-gallery">${images}</div>`:""}
    ${daysMarkup||(transcript?`${images?`<p class="reading-step">📝 Read the text</p>`:""}<div class="reading-transcript" aria-label="Full text of ${escapeHtml(reading.title)}">${transcript}</div>`:"")}
  </article></section>`;
}

// Bonus quiz làm ngay trong thẻ Bonus: bấm "Do the quiz here" → câu hỏi của link sổ ra bên dưới (không tính điểm bài chính).
const bonusInlineState={};
const bonusQuestions=id=>Object.keys(quizLibrary).filter(key=>key===id||key.startsWith(`${id}-p`)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).flatMap(key=>subjectFor(key).questions);
const bonusAnswerText=field=>Array.isArray(field.answer)?(field.type==="fill"?field.answer[0]:field.answer.join(", ")):field.answer;

function bonusInlineMarkup(id){
  const state=bonusInlineState[id]||(bonusInlineState[id]={open:false,values:{},checked:false});
  const cards=bonusQuestions(id);
  const total=cards.reduce((sum,card)=>sum+(card.fields?card.fields.length:1),0);
  const fieldsOf=card=>card.type==="compound"?card.fields:[{...card,id:"q",label:""}];
  let correct=0;
  const body=cards.map((card,ci)=>{
    let cardWrong=false;
    const fields=fieldsOf(card).map(field=>{
      const key=`${ci}:${field.id}`,value=state.values[key];
      const ok=state.checked&&fieldCorrect(field,value);
      if(state.checked){if(ok) correct++; else cardWrong=true}
      const name=`bq-${id}-${ci}-${field.id}`;
      let input;
      if(field.type==="select") input=`<select data-bq="${key}"${state.checked?" disabled":""}><option value="">Choose…</option>${field.choices.map(choice=>`<option value="${escapeHtml(choice)}"${value===choice?" selected":""}>${escapeHtml(choice)}</option>`).join("")}</select>`;
      else if(field.type==="fill") input=`<input type="text" data-bq="${key}" value="${escapeHtml(value||"")}" placeholder="Type your answer"${state.checked?" disabled":""}>`;
      else{
        const multi=field.type==="multi",picked=multi?(Array.isArray(value)?value:[]):[value];
        input=`<div class="bq-options">${field.choices.map(choice=>`<label class="bq-option${picked.includes(choice)?" picked":""}"><input type="${multi?"checkbox":"radio"}" name="${escapeHtml(name)}" data-bq="${key}" value="${escapeHtml(choice)}"${picked.includes(choice)?" checked":""}${state.checked?" disabled":""}><span>${escapeHtml(choice)}</span></label>`).join("")}</div>${multi?`<small class="bq-hint">Choose ${field.answer.length}.</small>`:""}`;
      }
      const mark=state.checked?(ok?`<span class="bq-mark good">✓</span>`:`<span class="bq-mark bad">✕ Answer: ${escapeHtml(bonusAnswerText(field))}</span>`):"";
      return `<div class="bq-field${state.checked?(ok?" right":" wrong"):""}">${field.label?`<p class="bq-label">${field.icon?`${escapeHtml(field.icon)} `:""}${escapeHtml(field.label)}</p>`:""}${input}${mark}</div>`;
    }).join("");
    const img=card.img&&!card.img.includes("assets/mascot/")?`<img class="bq-img" src="${escapeHtml(card.img)}" alt="" loading="lazy">`:"";
    const bank=card.wordBank?`<p class="bq-bank"><b>Word Bank:</b> ${card.wordBank.map(word=>`<span>${escapeHtml(word)}</span>`).join("")}</p>`:"";
    const explain=state.checked&&cardWrong&&card.explain?`<p class="bq-explain">💡 ${escapeHtml(card.explain)}</p>`:"";
    return `<section class="bq-card"><h4><span>${ci+1}</span>${escapeHtml(card.text)}</h4>${img}${bank}${fields}${explain}</section>`;
  }).join("");
  const answered=Object.values(state.values).filter(value=>Array.isArray(value)?value.length:String(value??"").trim()).length;
  const score=state.checked?`<b class="bq-score">⭐ ${correct} / ${total} correct</b>`:`<span class="bq-progress">${answered} / ${total} answered</span>`;
  return `<div class="bq" data-bq-quiz="${escapeHtml(id)}">${body}<div class="bq-actions">${state.checked?`<button type="button" class="bq-retry" data-bq-retry>↺ Try again</button>`:`<button type="button" class="bq-check" data-bq-check>✅ Check my answers</button>`}${score}</div></div>`;
}

function attachBonusInline(){
  document.querySelectorAll("[data-bonus-toggle]").forEach(button=>button.addEventListener("click",()=>{
    const id=button.dataset.bonusToggle,panel=button.closest(".bonus-item").querySelector(".bonus-inline");
    const state=bonusInlineState[id]||(bonusInlineState[id]={open:false,values:{},checked:false});
    state.open=!state.open;
    button.setAttribute("aria-expanded",String(state.open));
    button.textContent=state.open?"▲ Hide the quiz":"✏️ Do the quiz here";
    panel.hidden=!state.open;
    if(state.open){panel.innerHTML=bonusInlineMarkup(id);bindBonusPanel(panel,id)}
  }));
  document.querySelectorAll(".bonus-inline:not([hidden])").forEach(panel=>{const quiz=panel.querySelector("[data-bq-quiz]");if(quiz) bindBonusPanel(panel,quiz.dataset.bqQuiz)});
}

function bindBonusPanel(panel,id){
  const state=bonusInlineState[id];
  const redraw=scroll=>{panel.innerHTML=bonusInlineMarkup(id);bindBonusPanel(panel,id);if(scroll) panel.scrollIntoView({block:"start",behavior:"smooth"})};
  panel.querySelectorAll("[data-bq]").forEach(input=>input.addEventListener(input.tagName==="INPUT"&&input.type==="text"?"input":"change",()=>{
    const key=input.dataset.bq;
    if(input.type==="checkbox") state.values[key]=[...panel.querySelectorAll(`[data-bq="${CSS.escape(key)}"]:checked`)].map(box=>box.value);
    else state.values[key]=input.value;
    if(input.type==="radio"||input.type==="checkbox") input.closest(".bq-options").querySelectorAll(".bq-option").forEach(option=>option.classList.toggle("picked",option.querySelector("input").checked));
    const total=panel.querySelectorAll(".bq-field").length;
    const answered=Object.values(state.values).filter(value=>Array.isArray(value)?value.length:String(value??"").trim()).length;
    const progress=panel.querySelector(".bq-progress");if(progress) progress.textContent=`${answered} / ${total} answered`;
  }));
  panel.querySelector("[data-bq-check]")?.addEventListener("click",()=>{state.checked=true;redraw(true)});
  panel.querySelector("[data-bq-retry]")?.addEventListener("click",()=>{state.checked=false;state.values={};redraw(true)});
}

function readingLibraryMarkup(subject,position="start"){
  if(!Array.isArray(subject.readings)||!subject.readings.length) return "";
  const linked=new Set(subject.questions.map(item=>item.readingId).filter(Boolean));
  const atEnd=reading=>reading.mode==="bonus";
  return subject.readings.filter(reading=>!linked.has(reading.id)&&(position==="end")===atEnd(reading)).map(readingCardMarkup).join("");
}

function groupMarkup(group,groupIndex){
  const questions=[],subject=subjectFor(active),shownReadings=new Set();
  for(let index=group.start;index<=group.end;index++){
    const item=subject.questions[index];
    if(item.readingId&&!shownReadings.has(item.readingId)){
      questions.push(readingCardMarkup(subject.readings?.find(reading=>reading.id===item.readingId)));
      shownReadings.add(item.readingId);
    }
    questions.push(questionMarkup(item,index));
  }
  return `<section class="content-group" id="group-${groupIndex}">
    <header class="group-heading"><div><h2>${group.title}</h2><p>${group.subtitle}</p></div></header>
    <div class="question-list">${questions.join("")}</div>
  </section>`;
}

function renderSubject(scrollTarget){
  const subject=subjectFor(active),state=readState(active),count=counts(active),subjectKey=libraryEntry(active).subjectKey;
  const percent=scorePercent(count.correct,count.total);
  document.documentElement.style.setProperty("--accent",subject.accent);
  document.documentElement.style.setProperty("--accent-soft",subject.soft);
  $("#subjectMascot").src=mascotAsset(subjectKey==="wellbeing"?"success":subjectKey==="close-reading"?"language":subjectKey);
  $("#subjectMascot").alt=`Chibi learning buddy for ${subject.name}`;
  $("#summaryMascot").src=mascotAsset("success");
  $("#subjectTitle").textContent=subject.name;
  $("#subjectSubtitle").textContent=subject.subtitle;
  $("#answerCount").textContent=`${count.answered} of ${count.total} answered`;
  $("#scoreCount").textContent=state.submitted?`${count.correct}/${count.total} correct (~${percent}%)`:"Results appear after Submit test";
  $("#miniFill").style.width=`${Math.round(count.answered/count.total*100)}%`;
  $("#subjectLabel").textContent=subject.name;
  const displayGroups=displayGroupsFor(active);
  const firstReading=subject.readings?.[0];
  $("#sectionNav").innerHTML=`${firstReading?`<a href="#reading-${escapeHtml(firstReading.id)}">Readings</a>`:""}${displayGroups.map((group,index)=>`<a href="#group-${index}">${group.title.replace(/^\d+\.\s*/,"")}</a>`).join("")}`;
  $("#groupList").innerHTML=readingLibraryMarkup(subject)+displayGroups.map(groupMarkup).join("")+readingLibraryMarkup(subject,"end");
  $("#submitProgress").textContent=state.submitted?`Submitted · ${count.correct}/${count.total} (~${percent}%)`:`${count.answered} of ${count.total} answered`;
  $("#submitTitle").textContent=state.submitted?"Review your answers above, or clear the test to try again.":"Answer every question, then submit the whole test once.";
  $("#submitBtn").textContent=state.submitted?"Test submitted":"Submit test";
  $("#submitBtn").disabled=state.submitted;
  attachQuestionEvents();
  document.querySelectorAll("[data-open-quiz]").forEach(button=>button.addEventListener("click",()=>{if(!libraryEntry(active)?.hidden) bonusReturnId=active;openSubject(button.dataset.openQuiz)}));
  attachBonusInline();
  if(scrollTarget) requestAnimationFrame(()=>document.getElementById(scrollTarget)?.scrollIntoView({block:"start"}));
}

function paintDrawing(canvas,value){
  const context=canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  context.lineWidth=5;
  context.lineCap="round";
  context.lineJoin="round";
  context.strokeStyle="#245d46";
  const strokes=Array.isArray(value?.strokes)?value.strokes:[];
  strokes.forEach(stroke=>{
    if(!Array.isArray(stroke)||stroke.length<2) return;
    context.beginPath();
    stroke.forEach((point,index)=>{
      const x=point[0]*canvas.width,y=point[1]*canvas.height;
      if(index===0) context.moveTo(x,y); else context.lineTo(x,y);
    });
    context.stroke();
  });
}

function bindDrawingCanvas(canvas,fieldId,values,persist,disabled){
  paintDrawing(canvas,values[fieldId]);
  const wrapper=canvas.closest(".drawing-field");
  if(disabled) return;
  let stroke=null;
  const pointFor=event=>{
    const rect=canvas.getBoundingClientRect();
    return [Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width)),Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height))];
  };
  const finish=event=>{
    if(!stroke) return;
    if(event?.pointerId!==undefined&&canvas.hasPointerCapture?.(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if(stroke.length>1){
      const current=values[fieldId]?.strokes||[];
      values[fieldId]={strokes:[...current,stroke]};
      persist(values);
    }
    stroke=null;
  };
  canvas.addEventListener("pointerdown",event=>{
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    stroke=[pointFor(event)];
  });
  canvas.addEventListener("pointermove",event=>{
    if(!stroke) return;
    event.preventDefault();
    stroke.push(pointFor(event));
    paintDrawing(canvas,{strokes:[...(values[fieldId]?.strokes||[]),stroke]});
  });
  canvas.addEventListener("pointerup",finish);
  canvas.addEventListener("pointercancel",finish);
  wrapper.querySelector(".clear-drawing").addEventListener("click",()=>{
    values[fieldId]={strokes:[]};
    paintDrawing(canvas,values[fieldId]);
    persist(values);
  });
}

function attachQuestionEvents(){
  const currentState=readState(active);
  document.querySelectorAll(".list-question").forEach(card=>{
    const index=Number(card.dataset.index),given=currentState.answers[index]?.given;
    card.querySelectorAll(".drawing-canvas").forEach(canvas=>paintDrawing(canvas,given?.[canvas.dataset.field]));
  });
  if(currentState.submitted) return;
  document.querySelectorAll(".list-question").forEach(card=>{
    const index=Number(card.dataset.index),item=subjectFor(active).questions[index];
    const persist=given=>{
      const saved=saveGiven(active,index,given);
      const answered=hasAnswer(item,given);
      card.querySelector(".save-status").textContent=answered?(saved?"Answered ✓":"Answered for this visit"):"Not answered";
      card.classList.toggle("unanswered",!answered);
      $("#summaryMessage").hidden=true;
      updateSummary();
    };
    if(item.type==="compound"){
      const savedValue=readState(active).answers[index]?.given;
      const values=savedValue&&typeof savedValue==="object"?structuredClone(savedValue):{};
      let activeFill=null;
      const fillInputs=[...card.querySelectorAll(".compound-fill")];
      fillInputs.forEach(input=>{
        input.addEventListener("focus",()=>{activeFill=input});
        input.addEventListener("input",event=>{values[event.currentTarget.dataset.field]=event.currentTarget.value;persist(values)});
      });
      card.querySelectorAll(".compound-text").forEach(input=>input.addEventListener("input",event=>{values[event.currentTarget.dataset.field]=event.currentTarget.value;persist(values)}));
      card.querySelectorAll(".word-bank-choice").forEach(button=>button.addEventListener("click",()=>{
        const target=activeFill&&!activeFill.value.trim()?activeFill:fillInputs.find(input=>!input.value.trim())||activeFill||fillInputs[0];
        if(!target) return;
        target.value=button.dataset.word;
        target.dispatchEvent(new Event("input",{bubbles:true}));
        target.focus();
      }));
      card.querySelectorAll(".compound-select").forEach(select=>select.addEventListener("change",event=>{event.currentTarget.classList.toggle("has-value",Boolean(event.currentTarget.value));values[event.currentTarget.dataset.field]=event.currentTarget.value;persist(values)}));
      card.querySelectorAll(".compound-choice").forEach(input=>input.addEventListener("change",event=>{
        const fieldId=event.currentTarget.dataset.field,field=item.fields.find(entry=>entry.id===fieldId),container=event.currentTarget.closest(".compound-field");
        values[fieldId]=field.type==="multi"||field.type==="multi-any"||field.type==="wordsearch"
          ? [...container.querySelectorAll('input[type="checkbox"]:checked')].map(option=>option.value)
          : container.querySelector('input[type="radio"]:checked')?.value||"";
        container.querySelectorAll(".answer-option").forEach(option=>option.classList.toggle("selected",option.querySelector("input").checked));
        persist(values);
      }));
      card.querySelectorAll(".drawing-canvas").forEach(canvas=>bindDrawingCanvas(canvas,canvas.dataset.field,values,persist,false));
      return;
    }
    if(item.type==="fill"){
      card.querySelector(".fill-answer").addEventListener("input",event=>persist(event.currentTarget.value));
      return;
    }
    card.querySelectorAll(".answer-option input").forEach(input=>input.addEventListener("change",()=>{
      const given=item.type==="multi"
        ? [...card.querySelectorAll('input[type="checkbox"]:checked')].map(option=>option.value)
        : card.querySelector('input[type="radio"]:checked')?.value||"";
      card.querySelectorAll(".answer-option").forEach(option=>option.classList.toggle("selected",option.querySelector("input").checked));
      persist(given);
    }));
  });
}

function updateSummary(){
  const state=readState(active),count=counts(active);
  $("#answerCount").textContent=`${count.answered} of ${count.total} answered`;
  $("#scoreCount").textContent=state.submitted?`${count.correct} correct out of ${count.total}`:"Results appear after Submit test";
  $("#miniFill").style.width=`${Math.round(count.answered/count.total*100)}%`;
  $("#submitProgress").textContent=`${count.answered} of ${count.total} answered`;
}

let pendingSubmission=null;

function openResultDialog(key,result,historySaved=true){
  const percent=scorePercent(result.correct,result.total);
  const feedback=resultMessage(percent);
  pendingSubmission={key,result};
  $("#resultDialogMascot").src=mascotAsset("success");
  $("#resultDialogTitle").textContent=`${feedback.icon} ${feedback.title}`;
  $("#resultDialogScore").textContent=`${result.correct}/${result.total} (~${percent}%)`;
  $("#resultDialogMessage").textContent=historySaved?feedback.message:`${feedback.message} History could not be saved on this device.`;
  $("#resultDialog").className=`result-dialog ${scoreBand(percent)}`;
  $("#resultDialog").showModal();
}

function reviewSubmission(){
  if(!pendingSubmission) return;
  $("#resultDialog").close();
  const firstWrong=subjectFor(pendingSubmission.key).questions.findIndex((_,index)=>!readState(pendingSubmission.key).answers[index]?.correct);
  pendingSubmission=null;
  const target=firstWrong>=0?document.querySelector(`.list-question[data-index="${firstWrong}"]`):document.querySelector(".list-question");
  target?.scrollIntoView({block:"center",behavior:"smooth"});
}

function retrySubmission(){
  if(!pendingSubmission) return;
  const {key}=pendingSubmission;
  resetSubject(key);
  $("#resultDialog").close();
  pendingSubmission=null;
  renderSubject();
  window.scrollTo({top:0,behavior:"smooth"});
}

function submitTest(){
  if(!active||pendingSubmission) return;
  const key=active;
  const result=submitSubject(key);
  const historyEntry=recordHistory(key,result);
  renderSubject();
  openResultDialog(key,result,historyEntry.saved);
}

function renderHistory(){
  const history=readHistory();
  $("#historyEmpty").hidden=history.length>0;
  $("#historyList").innerHTML=history.map(entry=>`<article class="history-row">
    <time>${escapeHtml(entry.date)}</time>
    <span>${escapeHtml(entry.character)}</span>
    <strong class="history-lesson">${escapeHtml((entry.lesson||(entry.quizId&&quizLessonInfo(entry.quizId)?.lesson))||entry.quizTitle||entry.subject)}<small>${escapeHtml([entry.subject,entry.lessonDate||(entry.quizId&&quizLessonInfo(entry.quizId)?.date),entry.part?`Part ${entry.part}`:""].filter(Boolean).join(" · "))}</small></strong>
    <b class="history-score ${scoreBand(entry.percent)}">${entry.correct}/${entry.total} (~${entry.percent}%)</b>
  </article>`).join("");
}

const latestDateKey=groups=>Object.keys(groups).filter(key=>!isWeeklyKey(key)).sort((a,b)=>b.localeCompare(a))[0];

function catalogFilteredItems(subjectKey="all",uploadDate="all"){
  return quizCatalog.filter(item=>(subjectKey==="all"||item.subjectKey===subjectKey)&&(uploadDate==="all"||item.uploadDate===uploadDate));
}

function buildCatalogDateFilter(){
  const select=$("#catalogDateFilter"),selected=select.value||"all";
  const dates=[...new Set(quizCatalog.filter(item=>!isWeeklyKey(item.uploadDate)).map(item=>item.uploadDate))].sort(catalogKeyOrder);
  select.innerHTML='<option value="all">Tất cả ngày</option>'+dates.map(date=>`<option value="${date}">${formatUploadDate(date)}</option>`).join("");
  select.value=dates.includes(selected)?selected:"all";
}

// Danh sách chia 2 tab: "Quiz theo ngày" (bài theo ngày, có bộ lọc) và "Tổng hợp" (mỗi đợt tổng hợp một khối;
// bài nhiều Part gom thành MỘT hàng có ô chọn Part, số Part đã nộp và nút "Làm tiếp").
let catalogTab=(()=>{try{return localStorage.getItem("grade1-catalog-tab")||"daily"}catch{return "daily"}})();
function setCatalogTab(tab){if(tab==="summary") summaryOpen=null;catalogTab=tab;try{localStorage.setItem("grade1-catalog-tab",tab)}catch{}renderCatalog()}
const baseQuizId=id=>String(id).replace(/-p\d+$/,"");
// Một hàng trong Danh sách. Bài đã nộp (chưa reset) hiện điểm % của lần nộp gần nhất; bài chưa làm giữ nguyên.
function catalogCardMarkup(item){
  const subject=subjectFor(item.id),count=counts(item.id),state=readState(item.id);
  const submitted=Boolean(state.submitted);
  const percent=submitted?scorePercent(count.correct,count.total):0;
  const score=submitted?`<b class="catalog-score history-score ${scoreBand(percent)}" title="Điểm lần nộp gần nhất">⭐ ${percent}%<small>${count.correct}/${count.total}</small></b>`:"";
  return `<article class="catalog-card ${escapeHtml(item.subjectKey)}${submitted?" is-done":""}">
    <div class="catalog-subject-icon" aria-hidden="true">${subject.icon}</div>
    <div class="catalog-card-copy"><p class="catalog-version">QUIZ THEO MÔN HỌC</p><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(subject.subtitle)}</p><small>${submitted?`✅ Đã nộp · ${count.correct}/${count.total} câu đúng`:`${count.answered}/${count.total} ${subject.itemLabel||"câu"} đã trả lời`}</small></div>
    <div class="catalog-card-action">${score||`<strong>${questionUnitTotal(subject)} ${subject.itemLabel||"câu hỏi"}</strong>`}<button class="check-btn" type="button" data-quiz="${escapeHtml(item.id)}" aria-label="Mở bài ${escapeHtml(subject.name)}: ${escapeHtml(item.title)}">${submitted?"Xem lại ▸":"Mở bài ▸"}</button></div>
  </article>`;
}
// Tab "Tổng hợp": chia theo môn (LA / Science / Math…), môn có bài mới nhất lên đầu. Mỗi môn hiện tối đa 3 bộ tổng hợp mới nhất (nút "Xem thêm" nếu nhiều hơn).
// Bấm vào một bộ (ví dụ "Tổng hợp kiến thức tuần (W1&2)") → hiện toàn bộ danh sách quiz của bộ đó, có nút quay lại.
const SUMMARY_SUBJECTS=[["language","📖","Language Arts"],["science","🔬","Science"],["math","🧮","Math"]];
const SUMMARY_LIMIT=3;
let summaryOpen=null;const summaryExpanded=new Set();
function summaryCollections(){
  const map=new Map();
  quizCatalog.forEach((item,index)=>{
    if(!isWeeklyKey(item.uploadDate)) return;
    if(!map.has(item.uploadDate)) map.set(item.uploadDate,{key:item.uploadDate,subjectKey:item.subjectKey,order:index,items:[]});
    const entry=map.get(item.uploadDate);entry.items.push(item);entry.order=Math.max(entry.order,index);
  });
  map.forEach(entry=>entry.items.sort((x,y)=>{const bx=baseQuizId(x.id),by=baseQuizId(y.id);return bx===by?x.id.localeCompare(y.id,undefined,{numeric:true}):0}));
  return [...map.values()].sort((x,y)=>y.order-x.order);
}
function summaryStats(items){
  const done=items.filter(item=>readState(item.id).submitted);
  const questions=items.reduce((sum,item)=>sum+questionUnitTotal(subjectFor(item.id)),0);
  const scores=done.map(item=>{const c=counts(item.id);return scorePercent(c.correct,c.total)});
  return {done:done.length,total:items.length,questions,average:scores.length?Math.round(scores.reduce((x,y)=>x+y,0)/scores.length):null};
}
function summaryCollectionMarkup(entry){
  const stats=summaryStats(entry.items),percent=Math.round(stats.done/stats.total*100);
  const subtitle=String(subjectFor(entry.items[0].id).subtitle).replace(/\s*·\s*Part \d+\/\d+$/,"");
  const average=stats.average===null?"":`<b class="catalog-score history-score ${scoreBand(stats.average)}" title="Điểm trung bình các bài đã nộp">⭐ ${stats.average}%<small>trung bình</small></b>`;
  return `<article class="catalog-card summary-collection ${escapeHtml(entry.subjectKey)}${stats.done===stats.total?" is-done":""}">
    <div class="catalog-subject-icon" aria-hidden="true">📚</div>
    <div class="catalog-card-copy"><h2>${escapeHtml(formatUploadDate(entry.key))}</h2><p>${escapeHtml(subtitle)}</p>
      <small>${stats.total} bài quiz · ${stats.questions} câu · ✅ ${stats.done}/${stats.total} bài đã nộp</small>
      <div class="summary-progress" aria-hidden="true"><span style="width:${percent}%"></span></div></div>
    <div class="catalog-card-action">${average}<button class="check-btn" type="button" data-summary-key="${escapeHtml(entry.key)}">Xem danh sách ▸</button></div>
  </article>`;
}
function renderSummaryCatalog(){
  const collections=summaryCollections();
  $("#catalogEmpty").hidden=collections.length>0;
  $("#catalogEmpty").textContent="Chưa có bài tổng hợp nào.";
  const open=collections.find(entry=>entry.key===summaryOpen);
  if(open){
    const stats=summaryStats(open.items),meta=SUMMARY_SUBJECTS.find(([key])=>key===open.subjectKey);
    $("#catalogGroups").innerHTML=`<button class="summary-back" type="button" data-summary-back>◂ Tất cả bài tổng hợp</button>
      <section class="catalog-date-group weekly-group"><header class="catalog-date-heading"><div><small>TỔNG HỢP · ${escapeHtml(meta?meta[2]:subjectFor(open.items[0].id).name).toUpperCase()}</small><strong class="weekly-title">${escapeHtml(formatUploadDate(open.key))}</strong></div><span>✅ ${stats.done}/${stats.total} bài đã nộp</span></header>
      <div class="catalog-cards">${open.items.map(catalogCardMarkup).join("")}</div></section>`;
  }else{
    summaryOpen=null;
    const extra=[...new Set(collections.map(entry=>entry.subjectKey))].filter(key=>!SUMMARY_SUBJECTS.some(([k])=>k===key))
      .map(key=>{const first=collections.find(entry=>entry.subjectKey===key).items[0];return [key,subjectFor(first.id).icon,subjectFor(first.id).name]});
    // Môn có bộ tổng hợp upload mới nhất lên đầu; môn chưa có bộ nào xếp cuối (giữ thứ tự LA → Science → Math).
    const latest=key=>{const first=collections.find(entry=>entry.subjectKey===key);return first?first.order:-1};
    const subjects=[...SUMMARY_SUBJECTS,...extra].map((meta,index)=>({meta,index})).sort((x,y)=>(latest(y.meta[0])-latest(x.meta[0]))||(x.index-y.index)).map(({meta})=>meta);
    $("#catalogGroups").innerHTML=subjects.map(([key,icon,name])=>{
      const list=collections.filter(entry=>entry.subjectKey===key);
      const shown=summaryExpanded.has(key)?list:list.slice(0,SUMMARY_LIMIT);
      const more=list.length>SUMMARY_LIMIT?`<button class="summary-more" type="button" data-summary-more="${key}">${summaryExpanded.has(key)?"Thu gọn ▴":`Xem thêm ${list.length-SUMMARY_LIMIT} bộ tổng hợp ▾`}</button>`:"";
      return `<section class="summary-subject ${key}"><header class="summary-subject-heading"><span aria-hidden="true">${icon}</span><strong>${escapeHtml(name)}</strong><small>${list.length} bộ tổng hợp</small></header>
        ${list.length?`<div class="catalog-cards">${shown.map(summaryCollectionMarkup).join("")}</div>${more}`:'<p class="summary-none">Chưa có bài tổng hợp cho môn này.</p>'}</section>`;
    }).join("");
  }
  document.querySelectorAll("#catalogGroups [data-quiz]").forEach(button=>button.addEventListener("click",()=>openSubject(button.dataset.quiz)));
  document.querySelectorAll("#catalogGroups [data-summary-key]").forEach(button=>button.addEventListener("click",()=>{summaryOpen=button.dataset.summaryKey;renderSummaryCatalog();window.scrollTo({top:0,behavior:"smooth"})}));
  document.querySelectorAll("#catalogGroups [data-summary-more]").forEach(button=>button.addEventListener("click",()=>{const key=button.dataset.summaryMore;summaryExpanded.has(key)?summaryExpanded.delete(key):summaryExpanded.add(key);renderSummaryCatalog()}));
  document.querySelectorAll("#catalogGroups [data-summary-back]").forEach(button=>button.addEventListener("click",()=>{summaryOpen=null;renderSummaryCatalog()}));
}

function renderCatalog(){
  const dailyCount=quizCatalog.filter(item=>!isWeeklyKey(item.uploadDate)).length;
  const summaryCount=new Set(quizCatalog.filter(item=>isWeeklyKey(item.uploadDate)).map(item=>item.uploadDate)).size;
  if(catalogTab==="summary"&&!summaryCount) catalogTab="daily";
  $("#catalogCountDaily").textContent=dailyCount;$("#catalogCountSummary").textContent=summaryCount;
  document.querySelectorAll("[data-catalog-tab]").forEach(tab=>{const on=tab.dataset.catalogTab===catalogTab;tab.classList.toggle("active",on);tab.setAttribute("aria-selected",String(on))});
  $(".catalog-filters").hidden=catalogTab==="summary";
  if(catalogTab==="summary"){renderSummaryCatalog();return}
  const items=catalogFilteredItems($("#catalogSubjectFilter").value,$("#catalogDateFilter").value).filter(item=>!isWeeklyKey(item.uploadDate));
  const dateGroups=catalogGroupsByUploadDate(items);
  $("#catalogEmpty").hidden=items.length>0;
  $("#catalogEmpty").textContent=quizCatalog.length?"Không có bài quiz phù hợp với bộ lọc.":"Chưa có bài quiz nào. Thêm bài mới vào thư mục quizzes/.";
  $("#catalogGroups").innerHTML=Object.keys(dateGroups).sort(catalogKeyOrder).map(date=>`<section class="catalog-date-group${isWeeklyKey(date)?" weekly-group":""}">
    <header class="catalog-date-heading"><div><small>${isWeeklyKey(date)?"TỔNG HỢP":"NGÀY UPLOAD"}</small>${isWeeklyKey(date)?`<strong class="weekly-title">${escapeHtml(formatUploadDate(date))}</strong>`:`<time datetime="${date}">${formatUploadDate(date)}</time>`}</div>${date===latestDateKey(dateGroups)?'<span>Mới nhất</span>':""}</header>
    <div class="catalog-cards">${dateGroups[date].map(catalogCardMarkup).join("")}</div>
  </section>`).join("");
  document.querySelectorAll("#catalogGroups [data-quiz]").forEach(button=>button.addEventListener("click",()=>openSubject(button.dataset.quiz)));
}

function showCatalog(){
  active=null;
  setActiveTopTab("catalog");
  $("#homeView").hidden=true;
  $("#quizView").hidden=true;
  $("#historyView").hidden=true;
  $("#catalogView").hidden=false;
  $("#subjectLabel").textContent="Danh sách quiz";
  $("#miniFill").style.width="0";
  buildCatalogHeader();
  buildCatalogDateFilter();
  renderCatalog();
  window.scrollTo({top:0,behavior:"smooth"});
}

function showHistory(){
  active=null;
  setActiveTopTab("history");
  $("#homeView").hidden=true;
  $("#quizView").hidden=true;
  $("#catalogView").hidden=true;
  $("#historyView").hidden=false;
  $("#subjectLabel").textContent="History";
  $("#miniFill").style.width="0";
  renderHistory();
  window.scrollTo({top:0,behavior:"smooth"});
}

function openSubject(key){
  active=resolveQuizId(key);
  setActiveTopTab("catalog");
  $("#homeView").hidden=true;
  $("#catalogView").hidden=true;
  $("#historyView").hidden=true;
  $("#quizView").hidden=false;
  $("#summaryMessage").hidden=true;
  buildTabs();
  renderSubject();
  window.scrollTo({top:0,behavior:"smooth"});
}

function showHome(){
  active=null;
  setActiveTopTab("home");
  userListOpen=false;
  $("#homeView").hidden=false;
  $("#quizView").hidden=true;
  $("#catalogView").hidden=true;
  $("#historyView").hidden=true;
  $("#subjectLabel").textContent="Welcome";
  $("#miniFill").style.width="0";
  buildHome();
  window.scrollTo({top:0,behavior:"smooth"});
}

window.quizTestApi={bonusQuizFor,quizCatalog,quizLibrary,defaultQuizIds,resolveQuizId,libraryEntry,subjectFor,groupsFor,mergeSharedContentGroups,displayGroupsFor,readingCardMarkup,readingLibraryMarkup,mascotSets,greetingForHour,elsaWelcomeForHour,formatUploadDate,catalogGroupsByUploadDate,catalogFilteredItems,wheelScrollAmount,multiChoiceCount,multiChoiceHint,readState,writeState,saveGiven,correctFor,isExpectedChoice,expectedAnswerText,scorePercent,scoreBand,resultMessage,formatTestDate,readHistory,persistJson,recordHistory,hasAnswer,toggleChoice,questionUnitCount,questionUnitTotal,counts,unansweredIndexes,submitSubject,resetSubject,reviewSubmission,retrySubmission,storageKey,historyKey,usersKey,readCustomUsers,availableBuddies,visibleBuddies,getBuddy,numericAnswerMatch,addCustomUser,setChosenCharacter,fallbackAvatar};

if(!window.QUIZ_TEST_MODE){
  $("#homeBtn").addEventListener("click",showHome);
  $("#catalogBtn").addEventListener("click",showCatalog);
  $("#letsGoBtn").addEventListener("click",showCatalog);
  $("#catalogHomeBtn").addEventListener("click",showHome);
  $("#historyBtn").addEventListener("click",showHistory);
  $("#historyHomeBtn").addEventListener("click",showHome);
  $("#submitBtn").addEventListener("click",submitTest);
  $("#resultReviewBtn").addEventListener("click",reviewSubmission);
  $("#resultRetryBtn").addEventListener("click",retrySubmission);
  $("#resultDialog").addEventListener("cancel",event=>event.preventDefault());
  $("#addUserBtn").addEventListener("click",openAddUserDialog);
  $("#userListBtn").addEventListener("click",toggleUserList);
  $("#catalogSubjectFilter").addEventListener("change",renderCatalog);
  $("#catalogDateFilter").addEventListener("change",renderCatalog);
  document.querySelectorAll("[data-catalog-tab]").forEach(tab=>tab.addEventListener("click",()=>setCatalogTab(tab.dataset.catalogTab)));
  $("#cancelAddUserBtn").addEventListener("click",closeAddUserDialog);
  $("#cancelAddUserFooterBtn").addEventListener("click",closeAddUserDialog);
  $("#addUserDialog").addEventListener("cancel",event=>{event.preventDefault();closeAddUserDialog()});
  $("#addUserForm").addEventListener("submit",handleAddUser);
  $("#newUserAvatar").addEventListener("change",handleAvatarChange);
  document.querySelectorAll('input[name="userGender"]').forEach(input=>input.addEventListener("change",updateNewUserPreview));
  $("#clearBtn").addEventListener("click",()=>{
    if(!active||!confirm(`Clear all saved answers for ${subjectFor(active).name}?`)) return;
    resetSubject(active);
    renderSubject();
  });
  window.addEventListener("wheel",handleWheelScroll,{passive:false});
  buildHome();
}
