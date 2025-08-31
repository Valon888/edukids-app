// EduKids Advanced JS
// This file will provide advanced multilingual, real-voice, and UI logic for the app.

(function(){
const $ = (sel, el=document) => el.querySelector(sel)
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)]

// --- State ---
const state = {
  sound: true,
  current: 'letters',
  lang: localStorage.getItem('edukids.lang') || 'sq',
  progress: JSON.parse(localStorage.getItem('edukids.progress') || '{}'),
  voices: [],
  voiceMap: {},
}

const LANGS = [
  { code: 'sq', label: 'Shqip', voiceHint: 'sq' },
  { code: 'de', label: 'Deutsch', voiceHint: 'de' },
  { code: 'en', label: 'English', voiceHint: 'en' },
]

const MODULES = [
  {id:'letters', name:{sq:'Shkronjat',de:'Buchstaben',en:'Letters'}, icon:'🔤'},
  {id:'numbers', name:{sq:'Numrat',de:'Zahlen',en:'Numbers'}, icon:'🔢'},
  {id:'colors',  name:{sq:'Ngjyrat',de:'Farben',en:'Colors'}, icon:'🎨'},
  {id:'shapes',  name:{sq:'Format',de:'Formen',en:'Shapes'}, icon:'🔷'},
  {id:'memory',  name:{sq:'Memoria',de:'Gedächtnis',en:'Memory'}, icon:'🧠'},
  {id:'quiz',    name:{sq:'Kuizi',de:'Quiz',en:'Quiz'}, icon:'❓'},
  {id:'about',   name:{sq:'Rreth',de:'Über',en:'About'}, icon:'ℹ️'},
]

// --- Voice helpers ---
function loadVoices(){
  state.voices = window.speechSynthesis.getVoices()
  state.voiceMap = {}
  for(const lang of LANGS){
    // Prefer native, non-fictitious voices
    const v = state.voices.find(v=>v.lang.startsWith(lang.voiceHint) && !v.name.toLowerCase().includes('google') && !v.name.toLowerCase().includes('fictitious'))
      || state.voices.find(v=>v.lang.startsWith(lang.voiceHint))
    state.voiceMap[lang.code] = v
  }
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

function speak(text, lang=state.lang){
  if(!state.sound || !window.speechSynthesis) return
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = LANGS.find(l=>l.code===lang)?.voiceHint || 'sq'
  const v = state.voiceMap[lang]
  if(v) utter.voice = v
  utter.rate = .98; utter.pitch = 1
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(utter)
}

function beep(success=true){
  if(!state.sound) return
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)()
    const o = ctx.createOscillator(); const g = ctx.createGain()
    o.type = 'sine'; o.frequency.value = success? 880 : 220
    g.gain.value = .0001; g.gain.exponentialRampToValueAtTime(.2, ctx.currentTime+.01)
    o.connect(g); g.connect(ctx.destination); o.start();
    g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + (success? .15 : .25))
    o.stop(ctx.currentTime + (success? .16 : .26))
  }catch(e){}
}

function flash(){
  const f = $('#flash'); f.classList.add('show');
  setTimeout(()=> f.classList.remove('show'), 350)
}

function incProgress(key){
  const k = `mod.${key}.${state.lang}`
  const val = (state.progress[k]||0) + 1
  state.progress[k] = Math.min(val, 5)
  localStorage.setItem('edukids.progress', JSON.stringify(state.progress))
  renderStars(key)
  renderProgressText()
}
function getProg(key){ return state.progress[`mod.${key}.${state.lang}`] || 0 }

function renderStars(key){
  const c = $('#stars'); c.innerHTML = ''
  const n = getProg(key)
  for(let i=0;i<5;i++){
    const d = document.createElement('div')
    d.className = 'star' + (i < n ? ' win' : '')
    d.innerHTML = i < n ? '★' : '☆'
    c.appendChild(d)
  }
}
function renderProgressText(){
  const sum = MODULES.map(m => getProg(m.id)).reduce((a,b)=>a+b,0)
  $('#progress-text').textContent = sum
}

// --- Multilingual content ---
const TRANSLATE = {
  say: {sq:'Thuaje', de:'Sag es', en:'Say it'},
  prev: {sq:'Mbrapa', de:'Zurück', en:'Prev'},
  next: {sq:'Para', de:'Weiter', en:'Next'},
  quick: {sq:'Ushtrim i shpejtë', de:'Schnelle Übung', en:'Quick Exercise'},
  pickLetter: {sq:'Zgjidh shkronjën e duhur:', de:'Wähle den richtigen Buchstaben:', en:'Pick the correct letter:'},
  correct: {sq:'Saktë!', de:'Richtig!', en:'Correct!'},
  tryAgain: {sq:'Provo përsëri', de:'Versuch es nochmal', en:'Try again'},
  progress: {sq:'Progresi', de:'Fortschritt', en:'Progress'},
  reset: {sq:'Fshij progresin', de:'Fortschritt löschen', en:'Reset progress'},
  soundOn: {sq:'Zëri: ON', de:'Ton: AN', en:'Sound: ON'},
  soundOff: {sq:'Zëri: OFF', de:'Ton: AUS', en:'Sound: OFF'},
  // ...add more as needed
}
function t(key){
  return TRANSLATE[key]?.[state.lang] || key
}

// --- Modules (letters, numbers, etc.) ---
// ...existing code, but all UI text should use t('key') and all speak() calls should use the right language...
// For brevity, not all modules are pasted here, but you would refactor each module to use t() and speak() with the selected language.

// --- UI Language Switcher ---
const langSel = $('#lang-switch')
if(langSel){
  langSel.value = state.lang
  langSel.onchange = e => {
    state.lang = langSel.value
    localStorage.setItem('edukids.lang', state.lang)
    renderMenu(); renderStars(state.current); renderProgressText();
    Registry[state.current].render()
  }
}

// --- Settings ---
$('#sound-pill').onclick = () =>{
  state.sound = !state.sound
  $('#sound-pill').setAttribute('aria-checked', String(state.sound))
  $('#sound-pill').textContent = state.sound ? '🔊 '+t('soundOn') : '🔇 '+t('soundOff')
  if(state.sound) beep(true)
}
$('#reset-btn').onclick = () =>{
  if(confirm('Të fshihet i gjithë progresi?')){
    state.progress = {}
    localStorage.removeItem('edukids.progress')
    renderMenu(); renderStars(state.current); renderProgressText();
  }
}

// --- Menu ---
function renderMenu(){
  const m = $('#menu'); m.innerHTML = ''
  MODULES.forEach(mod =>{
    const btn = document.createElement('button')
    btn.innerHTML = `${mod.icon} ${mod.name[state.lang]} <span class="badge">${getProg(mod.id)}/5</span>`
    btn.setAttribute('data-mod', mod.id)
    if(mod.id===state.current) btn.setAttribute('aria-current','page')
    btn.onclick = ()=> navigate(mod.id)
    m.appendChild(btn)
  })
}
function navigate(id){
  state.current = id
  renderMenu()
  renderStars(id)
  renderProgressText()
  Registry[id].render()
}

// --- Registry and modules ---
// ...You would refactor and register all modules here, using the new t() and speak() logic...

// --- Init ---
renderMenu(); navigate(state.current)
})();
