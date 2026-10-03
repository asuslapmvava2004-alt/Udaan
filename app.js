const STORE = {
  content: "udaan_content_v1",
  quizzes: "udaan_quizzes_v1",
  user: "udaan_user_v1",
  bookmarks: "udaan_bookmarks_v1",
  progress: "udaan_progress_v1",
  settings: "udaan_settings_v1",
  auth: "udaan_auth_v1",
  access: "udaan_access_v1"
};

const classNames = Array.from({length:12},(_,i)=>String(i+1));
const seedContent = [
  {id:"r1",title:"Class 10 Mathematics: Surface Areas & Volumes",board:"NCERT",cls:"10",subject:"Mathematics",chapter:"Surface Areas and Volumes",type:"Solution",status:"published",desc:"Important formulas, solved examples and exam-focused practice.",body:"Surface area is the total area of the outer surfaces of a solid. Volume is the space occupied by the solid.\\n\\nKey formulas:\\n• Cuboid TSA = 2(lb + bh + hl)\\n• Cuboid Volume = lbh\\n• Cube TSA = 6a²\\n• Cube Volume = a³\\n\\nExam tip: write the given values first, substitute units carefully, and state the final unit.",views:1240,updated:"2026-10-01"},
  {id:"r2",title:"Class 10 Science: Light Reflection & Refraction",board:"CBSE",cls:"10",subject:"Science",chapter:"Light",type:"Notes",status:"published",desc:"Quick revision notes with laws, ray diagrams and numerical tips.",body:"Reflection follows two basic laws: the incident ray, reflected ray and normal lie in the same plane, and the angle of incidence equals the angle of reflection.\\n\\nFor spherical mirrors, remember the sign convention before using the mirror formula. Practice ray diagrams for concave and convex mirrors.",views:980,updated:"2026-09-29"},
  {id:"r3",title:"Class 9 Chemistry: Atoms and Molecules",board:"NCERT",cls:"9",subject:"Chemistry",chapter:"Atoms and Molecules",type:"Notes",status:"published",desc:"Definitions, laws of chemical combination and formula-writing basics.",body:"An atom is the smallest unit of an element that participates in chemical reactions. Molecules are groups of atoms held together by chemical bonds.\\n\\nRevise the law of conservation of mass and the law of constant proportions. Then practise writing formulae using valency.",views:780,updated:"2026-09-28"},
  {id:"r4",title:"Class 12 Physics: Semiconductor Electronics",board:"NCERT",cls:"12",subject:"Physics",chapter:"Electronic Devices",type:"Notes",status:"published",desc:"Intrinsic/extrinsic semiconductors, charge carriers and diode basics.",body:"A semiconductor has conductivity between that of a conductor and an insulator. Silicon is widely used in electronic devices.\\n\\nIntrinsic semiconductor: pure material. Extrinsic semiconductor: doped with donor or acceptor impurities. N-type has electrons as majority carriers; P-type has holes as majority carriers.",views:1125,updated:"2026-09-27"},
  {id:"r5",title:"Class 8 Science: Microorganisms",board:"NCERT",cls:"8",subject:"Science",chapter:"Microorganisms: Friend and Foe",type:"Video",status:"published",desc:"A concise lesson on useful and harmful microorganisms.",body:"Microorganisms include bacteria, fungi, protozoa and some algae. Some are useful in food production and medicine, while others cause diseases or spoil food.",video:"https://www.youtube.com/watch?v=example",views:640,updated:"2026-09-26"},
  {id:"r6",title:"Class 10 CBSE Practice Paper: Physics",board:"CBSE",cls:"10",subject:"Physics",chapter:"Sample Paper",type:"Question Paper",status:"review",desc:"Exam-style questions for reflection, refraction and numericals.",body:"Section A: MCQs\\nSection B: Short answer\\nSection C: Numerical problems\\nSection D: Case-based question\\n\\nTeacher review required before public release.",views:320,updated:"2026-09-25"},
  {id:"r7",title:"Class 6 Mathematics: Fractions",board:"NCERT",cls:"6",subject:"Mathematics",chapter:"Fractions",type:"Solution",status:"draft",desc:"Step-by-step examples for comparing and operating with fractions.",body:"Compare fractions using common denominators or cross multiplication. Add and subtract by finding a common denominator first.",views:55,updated:"2026-09-24"},
  {id:"r8",title:"Class 11 Physics: Units & Measurements",board:"NCERT",cls:"11",subject:"Physics",chapter:"Units and Measurements",type:"Notes",status:"published",desc:"SI units, dimensions, errors and significant figures.",body:"Use SI base units consistently. Dimensional analysis helps check equations and derive relationships. Significant figures communicate measurement precision.",views:510,updated:"2026-09-23"},
  {id:"r9",title:"Class 7 Maths Quiz: Integers",board:"NCERT",cls:"7",subject:"Mathematics",chapter:"Integers",type:"Quiz",status:"published",desc:"10 quick MCQs to practise integer operations.",body:"Take the linked quiz from the Practice section.",views:390,updated:"2026-09-22"},
  {id:"r10",title:"Class 3 English: Grammar Practice",board:"Other",cls:"3",subject:"English",chapter:"Grammar",type:"Notes",status:"published",desc:"Nouns, verbs and simple sentence-building activities.",body:"Nouns name people, places, animals or things. Verbs tell us about actions or states. Build short sentences and check subject–verb agreement.",views:260,updated:"2026-09-21"}
];

const seedQuizzes = [
  {id:"q1",title:"Class 10 Maths Quick Revision",cls:"10",subject:"Mathematics",desc:"5 MCQs on formulas and basic geometry.",questions:[
    {q:"The volume of a cube of side 5 cm is:",options:["25 cm³","75 cm³","125 cm³","150 cm³"],a:2,e:"Volume = a³ = 5³ = 125 cm³."},
    {q:"A cuboid has l=4 cm, b=3 cm, h=2 cm. Its volume is:",options:["9 cm³","24 cm³","18 cm³","12 cm³"],a:1,e:"V = lbh = 4×3×2 = 24 cm³."},
    {q:"Total surface area of a cube is:",options:["4a²","5a²","6a²","8a²"],a:2,e:"A cube has six equal square faces, so TSA = 6a²."},
    {q:"A unit of volume is:",options:["cm","cm²","cm³","kg"],a:2,e:"Volume measures three-dimensional space, so the unit is cubic."},
    {q:"The area of a rectangle is:",options:["l+b","2(l+b)","lb","l/b"],a:2,e:"Rectangle area = length × breadth."}
  ]},
  {id:"q2",title:"Class 9 Science: Atoms & Molecules",cls:"9",subject:"Chemistry",desc:"Concept check for key definitions and laws.",questions:[
    {q:"The smallest unit of an element taking part in a chemical reaction is:",options:["Molecule","Atom","Ion only","Cell"],a:1,e:"An atom is the basic unit of an element."},
    {q:"The law of conservation of mass says mass is:",options:["Created","Destroyed","Neither created nor destroyed","Always doubled"],a:2,e:"Total mass remains constant in a chemical reaction."},
    {q:"H₂O contains:",options:["2 H atoms and 1 O atom","1 H and 2 O","2 O and 1 H","3 O"],a:0,e:"The subscripts show two hydrogen atoms and one oxygen atom."},
    {q:"A molecule can contain:",options:["Only one atom","Two or more bonded atoms","Only metals","Only gases"],a:1,e:"A molecule consists of atoms held together by chemical bonds."},
    {q:"Valency helps us write:",options:["Only units","Chemical formulae","Only temperatures","Only graphs"],a:1,e:"Valency indicates combining capacity and supports formula writing."}
  ]}
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const get = (key, fallback) => { try { const v=localStorage.getItem(key); return v===null ? fallback : JSON.parse(v); } catch { return fallback; } };
const set = (key, val) => localStorage.setItem(key, JSON.stringify(val));
const uid = () => "id_"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
let state = {
  content: get(STORE.content, seedContent),
  quizzes: get(STORE.quizzes, seedQuizzes),
  auth: get(STORE.auth, null),
  bookmarks: get(STORE.bookmarks, []),
  progress: get(STORE.progress, {}),
  settings: get(STORE.settings, {portalName:"UDAAN Education Portal",tagline:"Learn clearly. Practice confidently.",email:"",phone:"",about:"Learning resources for Classes 1–12."}),
  access: get(STORE.access, {})
};
function saveAll(){set(STORE.content,state.content);set(STORE.quizzes,state.quizzes);set(STORE.bookmarks,state.bookmarks);set(STORE.progress,state.progress);set(STORE.settings,state.settings);}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function tone(subject){const s=(subject||"").toLowerCase(); if(s.includes("math")) return "tone-math"; if(s.includes("chem")) return "tone-chem"; if(s.includes("science")||s.includes("physics")) return "tone-science"; if(s.includes("exam")) return "tone-exam"; return "tone-general";}
function toast(msg){const t=$("#siteToast");t.textContent=msg;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),2200);}
function published(){return state.content.filter(x=>x.status==="published");}

function showView(name){
  $$(".page-view").forEach(v=>v.hidden=true);
  const el=$("#view-"+name); if(el) el.hidden=false;
  window.scrollTo({top:0,behavior:"smooth"});
  if(name==="home") renderHome();
  if(name==="classes") renderClasses("all");
  if(name==="boards") renderBoards();
  if(name==="resources") renderResources();
  if(name==="quiz") renderQuizCatalog();
  if(name==="profile") renderProfile();
  if(name==="admin") renderAdmin();
}
function route(name){history.replaceState(null,"","#"+name);showView(name);}
window.addEventListener("popstate",()=>showView(location.hash.slice(1)||"home"));
document.addEventListener("click",e=>{
  const routeBtn=e.target.closest("[data-route]"); if(routeBtn){route(routeBtn.dataset.route);return;}
  const modalBtn=e.target.closest("[data-modal]"); if(modalBtn){openInfo(modalBtn.dataset.modal);return;}
});
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter") doSearch(e.target.value)});
$("#searchBtn").addEventListener("click",()=>doSearch($("#globalSearch").value));
$("#mobileMenuBtn").addEventListener("click",()=>{const n=$("#mobileNav"); n.hidden=!n.hidden});
function doSearch(q){$("#resourceSearch").value=q;route("resources");renderResources();}

function renderHome(){
  const hc=$("#classHighlights");
  const selected=[1,2,3,4,5,6,7,8,9,10,11,12];
  hc.innerHTML=selected.slice(0,8).map(n=>classCard(n)).join("");
  $("#latestGrid").innerHTML=published().sort((a,b)=>(b.updated||"").localeCompare(a.updated||"")).slice(0,6).map(resourceCard).join("");
}
function classCard(n){
  const counts=published().filter(x=>x.cls===String(n)).length;
  const label=n<=5?"Primary":n<=8?"Middle School":n<=10?"Secondary":"Senior Secondary";
  return `<button class="class-card" data-open-class="${n}" onclick="openClass('${n}')"><span class="num">${n}</span><b>Class ${n}</b><span>${label} • ${counts} resources</span></button>`;
}
function openClass(n){
  route("resources");$("#classFilter").value=String(n);renderResources();
}
function renderClasses(group){
  const ok=n=>group==="all"|| (group==="primary"&&n<=5)||(group==="middle"&&n>=6&&n<=8)||(group==="secondary"&&n>=9&&n<=10)||(group==="senior"&&n>=11);
  $("#allClasses").innerHTML=classNames.filter(x=>ok(Number(x))).map(n=>classCard(n)).join("");
  $$("[data-class-filter]").forEach(b=>b.classList.toggle("active",b.dataset.classFilter===group));
}
function renderBoards(){
  $("#boardCards").innerHTML=[
    ["NCERT","NCERT textbooks, chapter resources and solutions.","Government curriculum resources. "],
    ["CBSE","CBSE-oriented practice, sample papers and revision material.","Board exam preparation section."],
    ["Other","Additional school and teacher-created content.","Use admin tags to add new sources."]
  ].map(([t,p,n])=>`<article class="board-card"><div class="board-icon">${t[0]}</div><h3>${t}</h3><p>${p}</p><p><small>${n}</small></p><button class="secondary-btn" onclick="filterBoard('${t}')">Browse ${t}</button></article>`).join("");
}
function filterBoard(b){route("resources");$("#boardFilter").value=b;renderResources();}
function populateFilters(){
  $("#classFilter").innerHTML='<option value="all">All classes</option>'+classNames.map(n=>`<option value="${n}">Class ${n}</option>`).join("");
  const subjects=[...new Set(state.content.map(x=>x.subject).filter(Boolean))].sort();
  $("#subjectFilter").innerHTML='<option value="all">All subjects</option>'+subjects.map(s=>`<option>${escapeHtml(s)}</option>`).join("");
}
function renderResources(){
  populateFilters();
  const q=($("#resourceSearch").value||"").trim().toLowerCase();
  const b=$("#boardFilter").value,c=$("#classFilter").value,s=$("#subjectFilter").value,t=$("#typeFilter").value;
  let list=published().filter(x=>(!q||`${x.title} ${x.subject} ${x.chapter} ${x.desc}`.toLowerCase().includes(q))&&(b==="all"||x.board===b)&&(c==="all"||x.cls===c)&&(s==="all"||x.subject===s)&&(t==="all"||x.type===t));
  $("#resourceGrid").innerHTML=list.map(resourceCard).join("");
  $("#resourceEmpty").hidden=list.length>0;
}
function resourceCard(r){
  const bookmarked=state.bookmarks.includes(r.id);
  return `<article class="resource-card">
    <div class="resource-thumb ${tone(r.subject)}"><span>${escapeHtml(r.type)}</span></div>
    <div class="resource-body">
      <div class="resource-meta"><span>${escapeHtml(r.board)}</span><span>Class ${escapeHtml(r.cls)}</span><span>${escapeHtml(r.subject)}</span></div>
      <h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.desc)}</p>
      <div class="resource-actions"><button class="tiny-btn primary" onclick="openResource('${r.id}')">Open</button><button class="tiny-btn ${bookmarked?"bookmarked":""}" onclick="toggleBookmark('${r.id}')">${bookmarked?"★ Saved":"☆ Save"}</button>${r.video?`<button class="tiny-btn" onclick="openResource('${r.id}')">Video</button>`:""}</div>
    </div>
  </article>`;
}
function toggleBookmark(id){if(state.bookmarks.includes(id)) state.bookmarks=state.bookmarks.filter(x=>x!==id);else state.bookmarks.push(id);saveAll();toast(state.bookmarks.includes(id)?"Saved to bookmarks":"Removed from bookmarks");renderResources();}

function openResource(id){
  const r=state.content.find(x=>x.id===id); if(!r)return;
  state.progress[id]=Math.max(state.progress[id]||0, 20); saveAll();
  const video=r.video ? videoEmbed(r.video) : "";
  $("#chapterPage").innerHTML=`<div class="chapter-wrap">
    <div class="breadcrumbs">Home › Class ${escapeHtml(r.cls)} › ${escapeHtml(r.subject)} › ${escapeHtml(r.chapter||"Resource")}</div>
    <h1 class="chapter-title">${escapeHtml(r.title)}</h1>
    <div class="chapter-meta"><span class="tag">${escapeHtml(r.board)}</span><span class="tag">Class ${escapeHtml(r.cls)}</span><span class="tag">${escapeHtml(r.subject)}</span><span class="tag">${escapeHtml(r.type)}</span></div>
    <div class="chapter-layout">
      <div>
        ${video ? `<div class="side-card" style="margin-bottom:18px"><b>Video explanation</b>${video}</div>`:""}
        <div class="lesson-body">${formatBody(r.body)}</div>
        <div style="margin-top:22px"><button class="primary-btn" onclick="markComplete('${r.id}')">✓ Mark as studied</button> <button class="secondary-btn" onclick="window.print()">Print</button></div>
      </div>
      <aside class="chapter-side">
        <div class="side-card"><b>Learning progress</b><div class="progress-line"><span style="width:${state.progress[r.id]||0}%"></span></div><div class="muted" style="font-size:11px;margin-top:7px">${state.progress[r.id]||0}% completed</div></div>
        <div class="side-card"><b>Save this resource</b><button class="tiny-btn ${state.bookmarks.includes(r.id)?"bookmarked":""}" onclick="toggleBookmarkFromReader('${r.id}')">${state.bookmarks.includes(r.id)?"★ Saved":"☆ Add bookmark"}</button></div>
        <div class="side-card"><b>Related resources</b>${published().filter(x=>x.cls===r.cls&&x.subject===r.subject&&x.id!==r.id).slice(0,4).map(x=>`<button class="text-btn" style="display:block;margin:4px 0" onclick="openResource('${x.id}')">${escapeHtml(x.title)}</button>`).join("")||'<span class="muted">No related items yet.</span>'}</div>
      </aside>
    </div>
  </div>`;
  route("chapter");
}
function toggleBookmarkFromReader(id){toggleBookmark(id);openResource(id);}
function formatBody(body){
  const lines=String(body||"").split(/\n/); let out="", inList=false;
  for(const line of lines){
    if(line.startsWith("• ")){if(!inList){out+="<ul>";inList=true}out+=`<li>${escapeHtml(line.slice(2))}</li>`}
    else {if(inList){out+="</ul>";inList=false} if(!line.trim()){out+="<div style=\"height:10px\"></div>"}else if(line.endsWith(":")) out+=`<h3>${escapeHtml(line)}</h3>`;else out+=`<p>${escapeHtml(line)}</p>`}
  }
  if(inList)out+="</ul>"; return out;
}
function markComplete(id){state.progress[id]=100;saveAll();toast("Progress saved");openResource(id);}
function videoEmbed(url){
  const m=String(url).match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  if(!m)return `<div class="muted">Video URL saved. Open the original link to watch.</div>`;
  return `<iframe class="video-frame" src="https://www.youtube.com/embed/${m[1]}" title="Video explanation" allowfullscreen loading="lazy"></iframe>`;
}

function renderQuizCatalog(){
  $("#quizCatalog").innerHTML=state.quizzes.map(q=>`<article class="quiz-card"><span class="eyebrow">${escapeHtml(q.subject)} • Class ${escapeHtml(q.cls)}</span><h3>${escapeHtml(q.title)}</h3><p>${escapeHtml(q.desc)}</p><button class="primary-btn" onclick="startQuiz('${q.id}')">Start quiz →</button></article>`).join("");
}
function startQuiz(id){
  const q=state.quizzes.find(x=>x.id===id);if(!q)return;
  const d=document.createElement("dialog"); d.className="dialog quiz-dialog"; d.innerHTML=`<form class="modal-card" id="quizForm"><button type="button" class="modal-close" onclick="this.closest('dialog').close()">×</button><span class="eyebrow">Class ${q.cls} • ${q.subject}</span><h2>${escapeHtml(q.title)}</h2><div id="quizQuestions">${q.questions.map((x,i)=>`<div class="quiz-q"><h4>${i+1}. ${escapeHtml(x.q)}</h4><div class="options">${x.options.map((o,j)=>`<label><input type="radio" name="qq${i}" value="${j}"> ${escapeHtml(o)}</label>`).join("")}</div><div id="exp${i}" class="muted" style="margin-top:7px"></div></div>`).join("")}</div><button class="primary-btn wide" type="submit">Submit quiz</button><div id="quizResult" style="margin-top:13px"></div></form>`;
  document.body.appendChild(d);d.showModal();
  $("#quizForm",d).addEventListener("submit",e=>{e.preventDefault();let score=0;q.questions.forEach((x,i)=>{const chosen=d.querySelector(`input[name="qq${i}"]:checked`);const val=chosen?Number(chosen.value):-1;const box=d.querySelector(`#exp${i}`);if(val===x.a){score++;box.textContent="✓ Correct. "+x.e;box.className="correct";}else{box.textContent="✗ "+(chosen?"Not quite. ":"Not answered. ")+x.e;box.className="wrong";}});d.querySelector("#quizResult").innerHTML=`<div class="panel-card"><b>Score: ${score}/${q.questions.length}</b><p class="muted">Your attempt was completed in this browser.</p></div>`;setTimeout(()=>d.querySelector("#quizResult").scrollIntoView({behavior:"smooth"}),50);});
}
function renderProfile(){
  const attempts=get("udaan_attempts",[]);
  const saved=state.content.filter(x=>state.bookmarks.includes(x.id));
  $("#profileView").innerHTML=`<div class="profile-card"><div class="profile-avatar">S</div><h2>Student dashboard</h2><p class="muted">Local profile for this browser.</p><button class="secondary-btn" onclick="toast('Student account creation can be wired to Firebase/Auth0/Keycloak in production.')">Create account</button></div><div class="stats-card"><div class="panel-title"><b>My saved resources</b><span>${saved.length}</span></div>${saved.map(x=>`<div class="list-row"><span>${escapeHtml(x.title)}</span><button class="tiny-btn" onclick="openResource('${x.id}')">Open</button></div>`).join("")||'<p class="muted">No bookmarks yet.</p>'}</div>`;
}

function openInfo(kind){
  const content = {
    about:`<span class="eyebrow">About UDAAN</span><h2>Education portal</h2><p>${escapeHtml(state.settings.about)}</p><p class="muted">The site structure is designed for Classes 1–12 with board, class, subject and chapter organization.</p>`,
    privacy:`<span class="eyebrow">Privacy</span><h2>Privacy notice</h2><p>This prototype stores preferences, bookmarks and demo admin data in your browser. A production portal should use a secure backend, consent flows, access controls, retention policies and an appropriate privacy notice before collecting student information.</p>`,
    license:`<span class="eyebrow">Content & attribution</span><h2>Source and rights</h2><p>Use official NCERT/CBSE sources where permitted, keep required attribution and link to the source. Do not assume third-party solutions or media are reusable simply because a textbook is publicly accessible. Review the applicable licence or terms before publishing.</p>`,
    contact:`<span class="eyebrow">Support</span><h2>Contact UDAAN</h2><p>Email: ${escapeHtml(state.settings.email||"Add your support email in Admin → Settings")}</p><p>Phone: ${escapeHtml(state.settings.phone||"Add your contact number in Admin → Settings")}</p>`
  }[kind]||"";
  $("#infoBody").innerHTML=content;$("#infoDialog").showModal();
}

$("#infoClose").onclick=()=>$("#infoDialog").close();
$("#accessBtn").onclick=()=>$("#accessDialog").showModal();
$("#accessClose").onclick=()=>$("#accessDialog").close();
$("#langBtn").onclick=()=>{
  const hindi=document.documentElement.lang!=="hi";
  document.documentElement.lang=hindi?"hi":"en";
  $("#langBtn").textContent=hindi?"English":"हिन्दी";
  if(hindi){$("#globalSearch").placeholder="कक्षा, विषय, अध्याय या टॉपिक खोजें…";toast("Hindi interface labels are enabled where available.");}
  else {$("#globalSearch").placeholder="Search class, subject, chapter or topic…";toast("English interface enabled.");}
};
$$("[data-access]").forEach(b=>b.addEventListener("click",()=>{
  const a=b.dataset.access;
  document.body.classList.remove("font-sm","font-lg");
  if(a==="font-sm")document.body.classList.add("font-sm");
  if(a==="font-lg")document.body.classList.add("font-lg");
  if(a==="contrast")document.body.classList.toggle("high-contrast");
  if(a==="dyslexia")document.body.classList.toggle("dyslexia");
  if(a==="reset"){document.body.className="";state.access={};set(STORE.access,{});}
  else {state.access={font:a};set(STORE.access,state.access);}
  if(a==="speak"){const txt=document.querySelector("main")?.innerText||"";speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(txt.slice(0,5000)));}
}));

$("#loginBtn").onclick=()=>{$("#loginDialog").showModal()};
$("#loginForm").addEventListener("submit",e=>{
  e.preventDefault(); const email=$("#loginEmail").value.trim(),pass=$("#loginPassword").value;
  if(email==="admin@udaan.local"&&pass==="Udaan@123"){state.auth={role:"Super Admin",email};set(STORE.auth,state.auth);$("#loginDialog").close();route("admin");toast("Welcome to the UDAAN admin panel");}
  else toast("Demo credentials do not match.");
});
$("#logoutBtn").onclick=()=>{state.auth=null;localStorage.removeItem(STORE.auth);route("home");toast("Logged out");};

function requireAuth(){if(!state.auth){toast("Please login as admin first.");$("#loginDialog").showModal();return false}return true;}
function renderAdmin(){
  if(!requireAuth())return;
  renderAdminOverview();renderContentTable();renderQuizAdmin();renderSettings();
}
function renderAdminOverview(){
  const total=state.content.length,pub=state.content.filter(x=>x.status==="published").length,drafts=state.content.filter(x=>x.status!=="published").length,views=state.content.reduce((a,b)=>a+(b.views||0),0);
  $("#adminStats").innerHTML=[["Total content",total],["Published",pub],["Review / draft",drafts],["Tracked views",views.toLocaleString()]].map(x=>`<div class="stat-card"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("");
  $("#popularList").innerHTML=[...state.content].sort((a,b)=>(b.views||0)-(a.views||0)).slice(0,6).map(x=>`<div class="list-row"><span>${escapeHtml(x.title)}</span><b>${(x.views||0).toLocaleString()}</b></div>`).join("");
  $("#queueList").innerHTML=state.content.filter(x=>x.status!=="published").slice(0,6).map(x=>`<div class="list-row"><span>${escapeHtml(x.title)}</span><span class="status ${x.status}">${x.status}</span></div>`).join("")||'<p class="muted">Queue is empty.</p>';
}
function renderContentTable(){
  $("#contentCount").textContent=state.content.length+" items";
  $("#contentTable").innerHTML=state.content.slice().sort((a,b)=>(b.updated||"").localeCompare(a.updated||"")).map(r=>`<tr><td><b>${escapeHtml(r.title)}</b><div class="muted">${escapeHtml(r.board)} • ${escapeHtml(r.chapter||"")}</div></td><td>${escapeHtml(r.cls)}</td><td>${escapeHtml(r.subject)}</td><td>${escapeHtml(r.type)}</td><td><span class="status ${r.status}">${r.status}</span></td><td><div class="table-actions"><button class="tiny-btn" onclick="editContent('${r.id}')">Edit</button><button class="tiny-btn" onclick="deleteContent('${r.id}')">Delete</button></div></td></tr>`).join("");
}
function renderQuizAdmin(){
  $("#quizAdminList").innerHTML=state.quizzes.map(q=>`<div class="list-row"><span><b>${escapeHtml(q.title)}</b><small class="muted"> • Class ${q.cls} • ${q.questions.length} questions</small></span><button class="tiny-btn" onclick="startQuiz('${q.id}')">Preview</button></div>`).join("");
}
function renderSettings(){
  const f=$("#settingsForm"); if(!f)return; f.portalName.value=state.settings.portalName;f.tagline.value=state.settings.tagline;f.email.value=state.settings.email;f.phone.value=state.settings.phone;f.about.value=state.settings.about;
}
$$("[data-admin-tab]").forEach(btn=>btn.addEventListener("click",()=>{
  if(!requireAuth())return;
  $$("[data-admin-tab]").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const tab=btn.dataset.adminTab;["overview","content","quizzes","users","settings"].forEach(x=>$("#admin-"+x).hidden=x!==tab);
  $("#adminTitle").textContent=tab[0].toUpperCase()+tab.slice(1);
}));
$("#newContentBtn").onclick=()=>openContentForm();
$("#cancelContent").onclick=()=>$("#contentDialog").close();
$("#contentClose").onclick=()=>$("#contentDialog").close();

function fillClassOptions(){ $("#fClass").innerHTML=classNames.map(n=>`<option value="${n}">${n}</option>`).join("");}
function openContentForm(id){
  if(!requireAuth())return;fillClassOptions();$("#contentForm").reset();$("#contentId").value=id||"";
  $("#contentFormTitle").textContent=id?"Edit resource":"Add resource";$("#uploadNote").textContent="File upload is stored locally in this prototype. Production storage should use object storage + CDN.";
  if(id){const r=state.content.find(x=>x.id===id);if(!r)return;$("#fTitle").value=r.title;$("#fBoard").value=r.board;$("#fClass").value=r.cls;$("#fSubject").value=r.subject;$("#fChapter").value=r.chapter||"";$("#fType").value=r.type;$("#fStatus").value=r.status;$("#fVideo").value=r.video||"";$("#fDesc").value=r.desc;$("#fBody").value=r.body;}
  $("#contentDialog").showModal();
}
function editContent(id){openContentForm(id);}
async function deleteContent(id){
  if(!requireAuth())return;
  const r=state.content.find(x=>x.id===id); if(!r)return;
  if(!confirm(`Delete "${r.title}"?`))return;
  state.content=state.content.filter(x=>x.id!==id);saveAll();renderAdmin();toast("Resource deleted");
}
$("#contentForm").addEventListener("submit",async e=>{
  e.preventDefault();if(!requireAuth())return;
  const id=$("#contentId").value||uid();const old=state.content.find(x=>x.id===id);
  const file=$("#fFile").files[0];
  if(file) {
    // Keep a small-document data URI for the local prototype.
    if(file.size<=2500000){
      const data=await fileToDataUrl(file);
      $("#uploadNote").textContent=`Attached ${file.name} locally (${Math.round(file.size/1024)} KB).`;
      state._tempFile={name:file.name,type:file.type,data};
    } else toast("Large files should be uploaded to cloud storage in production.");
  }
  const r={id,title:$("#fTitle").value.trim(),board:$("#fBoard").value,cls:$("#fClass").value,subject:$("#fSubject").value.trim(),chapter:$("#fChapter").value.trim(),type:$("#fType").value,status:$("#fStatus").value,video:$("#fVideo").value.trim(),desc:$("#fDesc").value.trim(),body:$("#fBody").value.trim(),views:old?.views||0,updated:new Date().toISOString().slice(0,10)};
  if(state._tempFile){r.file=state._tempFile;delete state._tempFile;}
  if(old){const idx=state.content.findIndex(x=>x.id===id);state.content[idx]=r;}else state.content.unshift(r);
  saveAll();$("#contentDialog").close();renderAdmin();toast(old?"Resource updated":"Resource published to the local content library");
});
function fileToDataUrl(file){return new Promise((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.onerror=reject;fr.readAsDataURL(file);});}

$$("[data-class-filter]").forEach(b=>b.addEventListener("click",()=>renderClasses(b.dataset.classFilter)));
["resourceSearch","boardFilter","classFilter","subjectFilter","typeFilter"].forEach(id=>$( "#"+id).addEventListener("input",renderResources));
$("#settingsForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget;state.settings={portalName:f.portalName.value,tagline:f.tagline.value,email:f.email.value,phone:f.phone.value,about:f.about.value};saveAll();toast("Settings saved");});

function hydrateAccess(){
  const a=state.access.font;if(a==="font-sm")document.body.classList.add("font-sm");if(a==="font-lg")document.body.classList.add("font-lg");
}
$("#footerYear").textContent=new Date().getFullYear();
hydrateAccess();
const start=(location.hash||"#home").slice(1);showView(["home","classes","boards","resources","chapter","quiz","profile","admin"].includes(start)?start:"home");
