var time=0;
var timer;
var ocont=document.getElementById("span2").innerHTML;
var cwords=0;


function starttimer(){
    time=time+1;


    document.getElementById("min").innerText=doubleDigit(Math.floor(time/60));
    document.getElementById("sec").innerText=doubleDigit(Math.floor(time%60));

    var cont = document.getElementById("content").value;
    document.getElementById("words").innerText=cont.split(" ").length-1;
    document.getElementById("ltrs").innerText=cont.length;

    matchWords(cont);

    timer= setTimeout("starttimer()",1000);

}

function doubleDigit(x){
    if(x<10){
        return "0"+x;
    }
    return x;
}

function stoptimer(){
    clearTimeout(timer);
}

function result(){
    var cont = document.getElementById("content").value;
    document.getElementById("words2").innerText=cwords;
    document.getElementById("ltrs2").innerText=cont.length;
    document.getElementById("titk").innerText=(time/60).toFixed(2) +" ("+Math.floor(time/60)+"m "+time%60+"s)";
    document.getElementById("speed").innerText=Math.floor(cwords*60/time);
}

function matchWords(cont){
    for(var i=0;i<cont.length;i++){
        if(cont.charAt(i)==ocont.charAt(i)){
            changeColor(i);
        }
        else
            break;
    }
    if(i==ocont.length && cont==ocont){
        console.log("congrats");
        stoptimer();
        document.getElementById("btnShowRes").click();
    }
}

function changeColor(x){
    document.getElementById("cwords").innerText=ocont.substring(0,x+1).split(" ").length-1;
    cwords=ocont.substring(0,x+1).split(" ").length-1;
    document.getElementById("span1").innerHTML=ocont.substring(0,x+1);
    document.getElementById("span2").innerHTML=ocont.substring(x+1);
}

function showInstruction(){
    document.getElementById("instsrBtn").click();
}