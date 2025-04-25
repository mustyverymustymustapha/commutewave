(function(){
  var btn=document.getElementById("toggle-theme");
  btn.addEventListener("click",function(){
    if(document.body.classList.contains("light-mode")){
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  });
})();
