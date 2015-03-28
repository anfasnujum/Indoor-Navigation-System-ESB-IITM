function voice(id)
{
text=document.getElementById(id).innerHTML;
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
}
function gotopage(id)
{
location.href='data/'+id+'.html';
}
