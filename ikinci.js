function add() {
let a =Number(document.getElementById('inputvalue2').value)
let button = document.getElementById('btn')
let paragraph = document.getElementById('div')
if(isNaN(a) || a < 0){
    paragraph.innerText ="input is not correct";
}
   else{
    paragraph.innerText =5+0.25*a;
   }    
 }
