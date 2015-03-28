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
