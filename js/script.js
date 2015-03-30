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
function gotoroom(id)
{
file_name=document.getElementById(id).value;
location.href=file_name+'.html';
}
function gotoroomno()
{
	file_name=document.getElementById('textbox').value;
location.href='ESB'+file_name+'.html';
}
function combo_1(id)
{
	gotopage(id);
	voice(id);
	
}
function combo_2(id)
{
	gotoroom(id);
	voice('go');
	
}

function Inputall(t)
{
document.getElementById("textbox").value=document.getElementById('textbox').value+t;
}
function ClearAll()
{
	document.getElementById("textbox").value='';
}
function ClearOne()
{
	l=document.getElementById("textbox").value.length;
	document.getElementById("textbox").value=document.getElementById("textbox").value.slice(0,l-1);
}

function combo_3(id)
{
	voice(id);
	Inputall(id);
}
function combo_4(id)
{
	voice_content(id);
	gotoroomno();
}
function combo_5(id)
{
	voice(id);
	ClearAll();
	}
function combo_6(id){
voice(id);
ClearOne();
}