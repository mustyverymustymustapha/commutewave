(function(){
  var weatherWidget=document.getElementById("weather-widget");
  window.updateWeather=function(city){
    weatherWidget.innerHTML="Loading weather for "+city+"...";
    setTimeout(function(){
      var simulatedWeather="Sunny, 25°C";
      weatherWidget.innerHTML="Weather in "+city+": "+simulatedWeather;
    },1000);
  }
})();
