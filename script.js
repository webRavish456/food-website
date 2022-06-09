var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register(){
 x.style.left="-400px";
 y.style.left="10px";
 z.style.left="110px";
}
function login(){
  x.style.left="10px";
  y.style.left="400px";
  z.style.left="0px";
  }
  
document.querySelector(".sbtn").onclick=function(){
  var pass = document.querySelector(".pass").value,
  confirmpassword = document.querySelector('.confirmpassword').value;
  if(pass==""){
      alert("Field cannot be empty ")
  }
  else if(pass!=confirmpassword){
      alert("Password didn't match try again");
      return false
  }
  else if(pass==confirmpassword)
  {
      alert("Password match");
  }
  return true
}
var state=false;
function toggle(){
  if(state){
      document.getElementById("password").setAttribute("type","password");
      
      state = false;
  }
  else{
    document.getElementById("password").setAttribute("type","text");
      state = true;
  }
}
var state1=false;
function toggle1(){
  if(state1){
      document.getElementById("pass1").setAttribute("type","password");
      
      state1 = false;
  }
  else{
    document.getElementById("pass1").setAttribute("type","text");
      state1 = true;
  }
}