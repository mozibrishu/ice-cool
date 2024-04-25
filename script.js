// submitInteraction('slide',extraData)
// end interaction

let remoteClicked = false;
function beginning() {
  gsap.fromTo('.ppm_ac_close', { y: '-30dvh' }, { y: 0, opacity: 1, display: 'block' })
  gsap.fromTo('.ppm_remote', { y: '30dvh' }, { y: 0, opacity: 1, display: 'block' })
  gsap.fromTo('.ppm_tap_hand', { display:'none' }, {delay:.3, y: 0, opacity: 1, display: 'block',onComplete:()=>{gsap.to('.ppm_tap_hand',{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:true})} })
};

setTimeout(() => {
  // beginning()
}, 1000);

function remoteClick(){
  remoteClicked = true;
  gsap.to('.ppm_remote',{opacity:0,display:"none"})
  gsap.to('.ppm_tap_hand',{opacity:0,display:"none"})
  gsap.timeline()
  .to('.ppm_ac_open',{opacity:1,duration:1,display:'block'})
  .to('.ppm_ac_bg',{display:'block',opacity:.7,duration:1},'>-.3')
  .to(['.ppm_ac_open','.ppm_ac_close'],{display:'none',opacity:0},'>.5')
  .set('.last_imageBox',{display:'flex',opacity:1},'>')
  .fromTo('.ppm_part_1',{scale:.8},{scale:1,opacity:1,duration:.3},'>')
  .fromTo('.ppm_part_2',{scale:.8},{scale:1,opacity:1,duration:.3},'>-.1')
  .fromTo('.ppm_part_3',{scale:.8},{scale:1,opacity:1,duration:.3},'>-.1')
  .fromTo('.ppm_part_4',{scale:.8},{scale:1,opacity:1,duration:.3},'>-.1')
  // gsap.to('.ppm_ac_bg',{display:'block',opacity:1})
}

document.querySelector('.ppm_remote').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})
document.querySelector('.ppm_tap_hand').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})

setTimeout(() => {
  // remoteClick()
}, 3000);

document.querySelector('.ppm_closeBtn_takeover').addEventListener('click',(e)=>{
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
})