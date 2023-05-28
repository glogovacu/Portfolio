document.getElementById("projectUnity").addEventListener("click", function() {
    window.location.href = "projects.html";
  });
document.getElementById("projectNET").addEventListener("click", function() {
    var projekat = "net";

    var url = "projects.html?projekat=" + encodeURIComponent(projekat);

    window.location.href = url;
  });