let show=()=>{
    let name=document.getElementById("name");
    document.getElementById("display").innerHTML="May all your troubles last as long as your New Year's resolutions"+name;
    document.getElementById("img").src="images/2025.gif";
    document.getElementById("content").innerHTML="I hope your life is filled with surprises this year";
    document.getElementById("dis").style.color= "#ffffff";
}

document.getElementById("btn").addEventListener("click", show);