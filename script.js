const htmlcodee=document.querySelector('.htmlcode textarea');
const csscode=document.querySelector('.csscode textarea');
const jscode=document.querySelector('.jscode textarea');
const resultt=document.querySelector('#result');

function run(){
    localStorage.setItem('htmlcodee', htmlcodee.value);
    localStorage.setItem('csscode',csscode.value);
    localStorage.setItem('jscode',jscode.value);
    resultt.contentDocument.body.innerHTML =`<style> ${localStorage.csscode} </style>`+ localStorage.htmlcodee;
    resultt.contentWindow.eval(localStorage.jscode);
    
}

htmlcodee.onkeyup = () => run();
csscode.onkeyup=()=>run();
jscode.onkeyup=()=>run();

htmlcodee.value=localStorage.htmlcodee;
csscode.value=localStorage.csscode;
jscode.value=localStorage.jscode;