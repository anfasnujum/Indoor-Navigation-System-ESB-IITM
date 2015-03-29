function voice_content(text)
{
	var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
}
function voice(id)
{
text=document.getElementById(id).innerHTML;
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
}
function gotopage(id)
{
window.location.href='data/'+id+'.html';
}
