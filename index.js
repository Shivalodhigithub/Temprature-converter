var cel=document.getElementById("cel");
var feh=document.getElementById("feh");

cel.addEventListener('input',function(){
 
    let c = document. querySelector('input'). value;
    let f = (c * 9/5) + 32;
//    for pervent ferhern morethan 4 digit 
   if(!Number.isInteger(f)){
    f = f.toFixed(4);
   }
    feh.value = f;
})

feh.addEventListener('input',function(){
    let f = document.querySelector('input').value;
    let c = (f - 32) * 5/9
    //    for pervent ferhern morethan 4 digit 
   if(!Number.isInteger(c)){
    c = c.toFixed(4);
   }
    cel.value = c;
})

// for the reset value of input field 
function clearInput(){
    var getValue= document.getElementsByClassName("input");
      if (cel.value !="" && feh.value !="") {
        //   getValue.value = "";
        cel.value = "";
        feh.value = "";
      }
}