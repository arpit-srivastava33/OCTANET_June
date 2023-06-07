
function random(){
let image=document.querySelector("img");
 let rnum=Math.floor((Math.random()*10)%5+1);
 let src="assets/interior"+rnum;
 if(rnum===2){
   src+=".jpeg";
 }
 else
  src+=".jpg";
 //console.log(src);
 image.setAttribute("src",src);
}
setInterval(random,2000);