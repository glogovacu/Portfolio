var activeButton = null;

window.onload = function(){
    var projekti = new URLSearchParams(window.location.search);
    var projekat = projekti.get("projekat");
    if(projekat === "net"){
        changeStuffNET(document.getElementById("button2"));
    }
    else{
        changeStuffUnity(document.getElementById("button1"));
    }
}

function loadContent(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("projects-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function highlightButton(button) {
    if (activeButton) {
        activeButton.classList.remove("clicked");
    }

    button.classList.add("clicked");
    activeButton = button;
}

function buttonLogic(url,button){
    loadContent(url);
    highlightButton(button);
}



function changeStuffUnity(button){
    if(activeButton===button){
        return;
    }
    buttonLogic('unityProjects.html', button);
    var footer = document.querySelector("footer");
    var myImage = document.getElementById("project-image");
    var elements = document.querySelectorAll("p, li, h2,a");
    var buttons = document.querySelectorAll("button");

    footer.style.borderTop = "";
    footer.style.backgroundColor = "#1f1f1f"; 
    document.body.style.backgroundColor = "black";
    myImage.src = "images/Unity.jpg";

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "white"; 
    };
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.borderColor = "blue";
        buttons[i].style.backgroundColor = "white";
        buttons[i].classList.value = "resume-link unity"
        buttons[i].style.color = "black";
    };
    button.classList.add("clicked");
}
function changeStuffNET(button){
    if(activeButton===button){
        return;
    }
    buttonLogic('netProjects.html', button);
    var footer = document.querySelector("footer");
    var myImage = document.getElementById("project-image");
    var elements = document.querySelectorAll("li, a,  h2");
    var elements2 = document.querySelectorAll("p");
    var buttons = document.querySelectorAll("button");
    
    footer.style.borderTop = "";
    footer.style.backgroundColor = "#1f1f1f"; 
    document.body.style.backgroundColor = "#1f1f1f"; 
    myImage.src = "images/NetFramework.png";
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.color = "#6c429c"; 
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "white"; 
    };
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.value = "resume-link net"
        buttons[i].style.borderColor = "blue";
        buttons[i].style.backgroundColor = "#1f1f1f";
        buttons[i].style.color = "white";
    };
    button.classList.add("clicked");
}
function changeStuffAndroid(button){
    if(activeButton===button){
        return;
    }
    buttonLogic('androidProjects.html', button);
    var footer = document.querySelector("footer");
    var myImage = document.getElementById("project-image");
    var elements = document.querySelectorAll("li, a");
    var elements2 = document.querySelectorAll("p, h2");
    var buttons = document.querySelectorAll("button");
    
    footer.style.borderTop = "1px solid black";
    footer.style.backgroundColor = "white"; 
    document.body.style.backgroundColor = "white"; 
    myImage.src = "images/Android.png";
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.color = "black"; 
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "#073042"; 
    };
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.value = "resume-link android"
        buttons[i].style.borderColor = "#073042";
        buttons[i].style.backgroundColor = "#073042";
        buttons[i].style.color = "white";
    };
    button.classList.add("clicked");
}