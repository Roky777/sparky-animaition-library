/* Shared renderer: one WebGL context for any number of visible preview canvases. */
export class SparkyRigPlayer {
 static async load(manifestURL){
  const url=new URL(manifestURL,document.baseURI),response=await fetch(url,{cache:'no-store'});if(!response.ok)throw Error('Unable to load animation manifest');
  const manifest=await response.json();
  if(!window.spine)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=new URL('vendor/spine-webgl.min.js',url);script.onload=resolve;script.onerror=()=>reject(Error('Unable to load bundled Spine runtime'));document.head.append(script)});
  return new Promise((resolve,reject)=>new SparkyRigPlayer(manifest,url,resolve,reject));
 }
 constructor(manifest,url,resolve,reject){
  this.manifest=manifest;this.views=new Set();this.speed=1;this.paused=false;this.last=performance.now();this.time=0;
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=640;canvas.style.cssText='position:fixed;left:-10000px;width:512px;height:640px;pointer-events:none';canvas.setAttribute('aria-hidden','true');document.body.append(canvas);this.canvas=canvas;
  const resource=p=>new URL(p,url).href+'?v='+manifest.revision,skel=resource(manifest.skeleton),atlas=resource(manifest.atlas),texture=resource(manifest.texture);const self=this;
  this.instance=new spine.SpineCanvas(canvas,{webglConfig:{alpha:true,antialias:true,premultipliedAlpha:true,preserveDrawingBuffer:true},app:{
   loadAssets(c){c.assetManager.loadBinary(skel);c.assetManager.loadTextureAtlas(atlas,undefined,undefined,{[manifest.texture.split('/').at(-1)]:texture})},
   initialize(c){self.data=new spine.SkeletonBinary(new spine.AtlasAttachmentLoader(c.assetManager.get(atlas))).readSkeletonData(c.assetManager.get(skel));const m=manifest.camera;c.renderer.camera.position.set(m.x,m.y,0);c.renderer.camera.viewportWidth=m.width;c.renderer.camera.viewportHeight=m.height;c.renderer.camera.update();resolve(self)},
   update(){const now=performance.now(),dt=Math.min((now-self.last)/1000,.1);self.last=now;if(!self.paused&&!document.hidden)self.time+=dt*self.speed},
   render(c){if(!self.data||document.hidden)return;for(const v of self.views){if(!v.visible||(!v.dirty&&self.paused))continue;v.entry.trackTime=v.fixedTime??Math.max(0,self.time-v.start);v.skeleton.setToSetupPose();v.state.apply(v.skeleton);v.skeleton.updateWorldTransform(spine.Physics.none);c.clear(0,0,0,0);c.renderer.resize(spine.ResizeMode.Fit);c.renderer.begin();c.renderer.drawSkeleton(v.skeleton,true);c.renderer.end();v.context.clearRect(0,0,v.canvas.width,v.canvas.height);v.context.drawImage(canvas,0,0,v.canvas.width,v.canvas.height);v.dirty=false}},
   error(c,e){reject(Error('Rig load failed: '+JSON.stringify(e)))}
  }});
 }
 add(canvas,clip,{loop=true}={}){const skeleton=new spine.Skeleton(this.data),state=new spine.AnimationState(new spine.AnimationStateData(this.data));if(!this.data.findAnimation(clip))throw Error('Unknown clip: '+clip);canvas.width=512;canvas.height=640;const v={canvas,context:canvas.getContext('2d'),skeleton,state,entry:state.setAnimation(0,clip,loop),visible:true,dirty:true,start:this.time,fixedTime:null};this.views.add(v);return {setVisible:value=>{v.visible=value;v.dirty=true},seek:time=>{v.fixedTime=time;v.dirty=true},restart:()=>{v.fixedTime=null;v.start=this.time;v.dirty=true},destroy:()=>this.views.delete(v)}}
 setPaused(value){this.paused=value;for(const v of this.views)v.dirty=true}
 setSpeed(value){this.speed=value}
 destroy(){this.views.clear();this.instance.dispose();this.canvas.remove()}
}
