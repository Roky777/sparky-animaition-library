import {SparkyRigPlayer} from './sparky/player.js?v=1';
import {makeZip} from './zip.js';
const $=id=>document.getElementById(id),selected=new Set(),players=new Map();
let entries=[],category='All',selectedOnly=false,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,busy=false;
let rig,manifest;
const groups=['All','Idle & looks','Movement','Expressions','Dialogue','Activities','Rest & interactions','Celebrations'];
const group=id=>entries.find(e=>e.id===id)?.category;
const title=name=>entries.find(e=>e.name===name)?.title??name;
const checkedFetch=async url=>{const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw Error(`Could not load ${url} (${r.status})`);return r;};
function visible(){const q=$('search').value.toLowerCase().trim();return entries.filter(e=>(category==='All'||group(e.id)===category)&&(!selectedOnly||selected.has(e.id))&&`${e.name} ${title(e.name)} ${group(e.id)}`.toLowerCase().includes(q));}
function updateSelection(){const n=selected.size;$('side-count').textContent=n;$('selection-count').textContent=`${n} animation${n===1?'':'s'} selected`;$('download').disabled=$('save-folder').disabled=!n||busy;$('clear').disabled=!n||busy;for(const [id,{card}] of players){card.classList.toggle('selected',selected.has(id));card.querySelector('input').checked=selected.has(id);}}
const observer=new IntersectionObserver(items=>{for(const item of items){const p=players.get(item.target.dataset.id);if(!p)continue;p.visible=item.isIntersecting;if(p.player){if(p.visible&&!paused&&!document.hidden)p.player.setVisible(true);else p.player.setVisible(false);}}},{rootMargin:'100px'});
function render(){
 for(const {player,card} of players.values()){player?.destroy();observer.unobserve(card);}players.clear();$('grid').replaceChildren();
 const list=visible();$('result-count').textContent=`${list.length} animation${list.length===1?'':'s'} · ${selectedOnly?'Your selection':category==='All'?'Sparky collection':category}`;$('empty').hidden=!!list.length;
 for(const e of list){
  const card=document.createElement('article');card.className='card';card.dataset.id=e.id;
  const preview=document.createElement('div');preview.className='preview';const canvas=document.createElement('canvas');canvas.setAttribute('aria-label',`${e.name} looping preview`);const inspect=document.createElement('a');inspect.className='preview-link';inspect.href=`sparky/preview.html?animation=${encodeURIComponent(e.id)}`;inspect.setAttribute('aria-label',`Open ${e.title} animator`);inspect.append(canvas);preview.append(inspect);
  const tag=document.createElement('span');tag.className='tag';tag.textContent=group(e.id);preview.append(tag);
  const pick=document.createElement('label');pick.className='pick';const input=document.createElement('input');input.type='checkbox';input.setAttribute('aria-label',`Select ${e.name}`);input.onchange=()=>{input.checked?selected.add(e.id):selected.delete(e.id);updateSelection();if(selectedOnly&&!input.checked)render();};pick.append(input);preview.append(pick);
  const info=document.createElement('div');info.className='card-info';const heading=document.createElement('h2');heading.className='card-title';const label=document.createElement('span');label.textContent=title(e.name);const open=document.createElement('a');open.href=`sparky/preview.html?animation=${encodeURIComponent(e.id)}`;open.textContent='↗';open.setAttribute('aria-label',`Inspect ${e.name}`);heading.append(label,open);
  const source=document.createElement('div');source.className='source-name';source.textContent=e.name;
  const meta=document.createElement('div');meta.className='card-meta';meta.textContent='Loading preview…';info.append(heading,source,meta);card.append(preview,info);$('grid').append(card);
  const state={card,player:null,visible:false};players.set(e.id,state);observer.observe(card);
  state.player=rig.add(canvas,e.name,{loop:e.duration>0});canvas.width=384;canvas.height=480;state.player.setVisible(state.visible);
  meta.replaceChildren();const repeat=document.createElement('span');repeat.innerHTML='<i class="loop-dot"></i>'+ (e.kind==='pose'?'Static pose':e.loop?'Loop':'One-shot · repeated preview');const duration=document.createElement('span');duration.textContent=e.kind==='pose'?'Pose':`${e.duration.toFixed(2)}s`;const format=document.createElement('span');format.className='format';format.textContent='RIG + PNG';meta.append(repeat,duration,format);
  const actions=document.createElement('div');actions.className='clip-actions';const install=document.createElement('button');install.className='outline';install.textContent='Download clip';install.setAttribute('aria-label',`Download ${e.title} and required resources`);install.onclick=()=>exportPack(false,[e]);const save=document.createElement('button');save.className='outline';save.textContent='Save to folder';save.setAttribute('aria-label',`Save ${e.title} resources to game folder`);save.onclick=()=>exportPack(true,[e]);actions.append(install,save);info.append(actions);

 }
 updateSelection();
}
function setCategory(next){category=next;selectedOnly=false;document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.dataset.category===next));$('browse').classList.toggle('active',next==='All');render();}
for(const g of groups.slice(1)){const b=document.createElement('button');b.className='nav';b.dataset.category=g;const icon=document.createElement('span');icon.textContent=g;const n=document.createElement('b');b.append(icon,n);$('categories').append(b);b.onclick=()=>setCategory(g);}
$('browse').onclick=()=>setCategory('All');$('selected-view').onclick=()=>{selectedOnly=true;category='All';document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.id==='selected-view'));render();};
$('search').oninput=render;$('select-all').onclick=()=>{visible().forEach(e=>selected.add(e.id));updateSelection();};$('clear').onclick=()=>{selected.clear();if(selectedOnly)render();else updateSelection();};
function playback(){rig?.setSpeed(Number($('speed').value));rig?.setPaused(paused);for(const p of players.values())p.player?.setVisible(p.visible&&!document.hidden);$('pause').textContent=paused?'▷ Play previews':'Ⅱ Pause previews';}
$('pause').onclick=()=>{paused=!paused;playback();};$('speed').onchange=playback;document.addEventListener('visibilitychange',playback);document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();$('search').focus();}});
async function packageFiles(chosen){
 const files=[],root='sparky-animations/';
 const resources=await(await checkedFetch('sparky/files.json')).json();
 for(let i=0;i<resources.length;i++){const name=resources[i];$('status').textContent=`Preparing shared resources ${i+1}/${resources.length}…`;files.push({name:root+name,data:name==='manifest.json'?JSON.stringify({...manifest,title:'Sparky selected animation pack',animations:chosen},null,2):await(await checkedFetch('sparky/'+name)).arrayBuffer()});}
 for(const clip of chosen)files.push({name:root+'clips/'+clip.id+'.json',data:JSON.stringify({...clip,manifest:'../manifest.json',runtime:'../player.js'},null,2)});
 files.push({name:root+'AGENT_INSTRUCTIONS.md',data:'# Integration instructions\n\nRead README.md and manifest.json. Use the exact animation names and loop flags. Keep all shared assets and the runtime/license in this package. Do not install dependencies or fetch a CDN. The full skeleton is shared by all selected clips; the manifest selects the requested actions. Static poses have duration zero. Keep a constant character scale/camera across actions. Open preview.html through a local HTTP server to inspect the pack.\n'});
 return files;
}
async function exportPack(folder=false,clips=null){
 const chosen=clips??entries.filter(e=>selected.has(e.id));if(busy||!chosen.length)return;let handle;
 try{
  if(folder){if(!window.showDirectoryPicker){$('status').textContent='Folder saving is unavailable in this browser. Download the ZIP and extract sparky-animations into your game folder.';return;}handle=await window.showDirectoryPicker({mode:'readwrite'});}
  busy=true;updateSelection();const files=await packageFiles(chosen);
  if(handle){const pack=await handle.getDirectoryHandle('sparky-animations',{create:true}),version=await pack.getDirectoryHandle('pack-'+new Date().toISOString().replace(/[:.]/g,'-'),{create:true});
   for(const file of files){const parts=file.name.split('/').slice(1);let dir=version;for(const segment of parts.slice(0,-1))dir=await dir.getDirectoryHandle(segment,{create:true});const target=await dir.getFileHandle(parts.at(-1),{create:true}),writer=await target.createWritable();await writer.write(file.data);await writer.close();}
   $('status').textContent=`Saved ${chosen.length} animations in ${handle.name}/sparky-animations/${version.name}/. Integration instructions are included.`;
  }else{const blob=makeZip(files),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`sparky-animations-${chosen.length===1?chosen[0].id:chosen.length+'-clips'}.zip`;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);$('status').textContent='ZIP ready. Extract sparky-animations into your game folder and give AGENT_INSTRUCTIONS.md to your AI agent.';}
 }catch(error){$('status').textContent=error.name==='AbortError'?'Folder selection cancelled.':`Export failed: ${error.message}`;}finally{busy=false;updateSelection();}
}
$('download').onclick=()=>exportPack();$('save-folder').onclick=()=>exportPack(true);
try{rig=await SparkyRigPlayer.load('./sparky/manifest.json');manifest=rig.manifest;entries=manifest.animations;$('browse').querySelector('b').textContent=entries.length;for(const b of $('categories').children)b.querySelector('b').textContent=entries.filter(e=>group(e.id)===b.dataset.category).length;render();playback();}catch(error){$('status').textContent=error.message;}
