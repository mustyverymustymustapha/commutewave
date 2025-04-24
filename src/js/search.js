(function(){
  var searchInput=document.getElementById("city-search");
  var select=document.getElementById("city-select");
  searchInput.addEventListener("keyup",function(){
    var filter=searchInput.value.toLowerCase();
    for(var i=0;i<select.options.length;i++){
      var option=select.options[i];
      var txt=option.text.toLowerCase();
      option.style.display=txt.indexOf(filter)>-1?"block":"none";
    }
  });
})();
