let el=document.getElementByTagName("strong");
function highlight() {
    //Write your code here
	for(let i=0; i<el.length-1; i++)
		{
			el[i].style.color="green";
		}
}

function return_normal() {
    //Write your code here
	for(let i=0; i<el.length-1; i++)
		{
			el[i].style.color="black";
		}

    
}
