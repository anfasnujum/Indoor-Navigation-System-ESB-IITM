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
