function apendnumber(number){
  const display=document.getElementById('display');
  display.value += number;
}
function apendoperator(operator){
  const display=document.getElementById('display');
  display.value += operator;
}
function calculate(){
  const display=document.getElementById('display');
  try{
    display.value=eval(display.value);
  }
  catch(error){
    display.value="Syntax Error";
  }
}
function cleardisplay(){
  const display=document.getElementById('display');
  display.value="";
}