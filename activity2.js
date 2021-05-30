function back(){
    window.location ="activity_1.html";
}

function GetScore(){
    var show_score = localStorage.getItem("point");
    document.getElementById("blank_div").innerHTML = "scor ="+ show_score;
}