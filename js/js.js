var ull=document.getElementsByClassName("navul")[0];
var lis=ull.children;
//console.log(lis);
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		for(var j=0;j<lis.length;j++){
			lis[j].setAttribute("class","");
		}
		this.setAttribute("class","navli");
	}
}
