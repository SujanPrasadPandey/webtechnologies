document.getElementById("myBtn").onclick = function(){
    let username = document.getElementById("uname").value;
    document.getElementById("name").innerHTML = username;
    let age = document.getElementById("hello").value;
    if(age>=16){
        document.getElementById("page").innerHTML = age + "you are eligible for license";
    }else{
        document.getElementById("page").innerHTML = age + "you are not eligible for license";
    }
}
function changeParagraph(){
    var p = document.getElementsByTagName("p");
    var i;
   for(i=0;i<p.length;i++){
    p[i].style.color = "red";
   }
   }