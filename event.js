/*var form=document.getElementById("register");
form.onsubmit=function(){
	alert("worked");
	return false
}*/


var form={
	register:document.getElementById("register"),
	email:document.getElementById("email"),
	pass1:document.getElementById("pass1"),
	pass2:document.getElementById("pass2"),
	strengh:document.getElementById("strengh")
};

form.register.addEventListener("submit",checkform);
form.pass1.addEventListener("keypress",nospace);
form.pass2.addEventListener("keypress",nospace);
form.pass1.addEventListener("keyup",passwordstrengh);

var reemail=/^[a-z0-9 .]+@+[a-z]+\.+[a-z]{2,4}$/;
function checkform(e){
	e.preventDefault();
	if(!reemail.test(form.email.value))
	{
		alert("no")
	}
	else
	{
		alert("yes")
	}
}



function nospace(e){
	if(e.charCode==32)
	{
		e.preventDefault();
	}
}


var strtext=["weak","medium","strong"];
var strcolor=["#f00","#cc0","#080"];
function passwordstrengh(e){
	var pass=form.pass1.value;
	var us=pass.match(/[A_Z]/g)
	us=(us&&us.length || 0)
	
	var nm=pass.match(/\d/g);
	nm=(nm&&nm.length || 0)
	
	var nw=pass.match(/w/g)
	nw=(nw&&nw.length || 0)
	
	var s=pass.length+us+(nm*2)+(nw*3);
	s=Math.min(Math.floor(s/10),2);
	
	form.strengh.textContent=strtext[s];
	form.strengh.style.color=strcolor[s];
}