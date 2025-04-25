(function(){
  var clockEl=document.getElementById("clock");
  function updateClock(){
    var now=new Date();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    clockEl.innerText=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds);
  }
  updateClock();
  setInterval(updateClock,1000);
})();
