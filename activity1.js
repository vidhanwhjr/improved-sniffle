var scor = 0;

function u(){
    scor = scor + 1;
    document.getElementById("score_label").innerHTML = "score:" + scor;
}

function s(){
    localStorage.setItem("point", scor);

}

function n(){
    window.location= "activity_2.html";
}
