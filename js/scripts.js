
var transformPlus = 'skew(5deg,5deg)';
var transformNeg = 'skew(-5deg,-5deg)';
var transformNorm = 'skew(0,0)';

const mouseTarget0 = document.getElementById('navbar0');
const mouseTarget1 = document.getElementById('navbar1');
const mouseTarget2 = document.getElementById('navbar2');
const mouseTarget3 = document.getElementById('navbar3');
const mouseTarget4 = document.getElementById('navbar4');

const settingsMenu = document.getElementById('settings');

const unorderedList = document.getElementById('unorderList');

settingsMenu.addEventListener('mouseenter', e=>{
  settingsMenu.style.backgroundColor = "#121629";
})

mouseTarget0.addEventListener('mouseenter', e => {
  if(Math.random() == 0){
    mouseTarget0.style.transform = transformPlus;
  }
  else{
    mouseTarget0.style.transform = transformNeg;
  }
});

mouseTarget0.addEventListener('mouseleave', e => {
  mouseTarget0.style.transform = transformNorm;
});

mouseTarget1.addEventListener('mouseenter', e => {
    if(Math.random() == 1){
        mouseTarget1.style.transform = transformPlus;
      }
      else{
        mouseTarget1.style.transform = transformNeg;
      }
});
  
mouseTarget1.addEventListener('mouseleave', e => {
    mouseTarget1.style.transform = transformNorm;
});

mouseTarget2.addEventListener('mouseenter', e => {
    if(Math.random() == 1){
    mouseTarget2.style.transform = transformPlus;
  }
  else{
    mouseTarget2.style.transform = transformNeg;
  }
});

mouseTarget2.addEventListener('mouseleave', e => {
    mouseTarget2.style.transform = transformNorm;
});

mouseTarget3.addEventListener('mouseenter', e => {
    if(Math.random() == 0){
    mouseTarget3.style.transform = transformPlus;
  }
  else{
    mouseTarget3.style.transform = transformNeg;
  }
});
  
mouseTarget3.addEventListener('mouseleave', e => {
    mouseTarget3.style.transform = transformNorm;
});

mouseTarget4.addEventListener('mouseenter', e => {
    if(Math.random() == 1){
    mouseTarget4.style.transform = transformPlus;
  }
  else{
    mouseTarget4.style.transform = transformNeg;
  }
});
  
mouseTarget4.addEventListener('mouseleave', e => {
    mouseTarget4.style.transform = transformNorm;
});