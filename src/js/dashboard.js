(function(){
  var select=document.getElementById("city-select");
  select.addEventListener("change",function(){
    var city=select.value;
    if(city){
      loadMap(city);
    }
  });
  window.loadMap=function(city){
    var mapContainer=document.getElementById("map");
    mapContainer.innerHTML="";
    var indicator=document.createElement("div");
    indicator.style.width="100%";
    indicator.style.height="100%";
    indicator.style.display="flex";
    indicator.style.alignItems="center";
    indicator.style.justifyContent="center";
    indicator.style.fontSize="24px";
    indicator.style.color="#000";
    indicator.innerText="Map for "+city;
    mapContainer.appendChild(indicator);
  }
})();
