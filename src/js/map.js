(function(){
  window.initMap=function(lat,lng,container){
    container.innerHTML="";
    var iframe=document.createElement("iframe");
    iframe.src="https://www.openstreetmap.org/export/embed.html?bbox="+(lng-0.05)+"%2C"+(lat-0.05)+"%2C"+(lng+0.05)+"%2C"+(lat+0.05)+"&layer=mapnik";
    iframe.style.border="0";
    iframe.style.width="100%";
    iframe.style.height="100%";
    container.appendChild(iframe);
  }
})();
