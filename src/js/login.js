(function(){
    var output=document.getElementById("output");
    var input=document.getElementById("input");
    var step=0;
    function print(text){
      output.innerHTML+=text+"<br>";
      output.scrollTop=output.scrollHeight;
    }
    function getGreeting(hours, name){
      if(hours<12){return "Good morning, "+name+".";}
      if(hours<18){return "Good afternoon, "+name+".";}
      return "Good evening, "+name+".";
    }
    print("Enter your name");
    input.addEventListener("keydown",function(e){
      if(e.keyCode===13){
        var value=input.value.trim();
        input.value="";
        if(step===0 && value){
          print("Logging in...");
          setTimeout(function(){
            var d=new Date();
            print(getGreeting(d.getHours(),value));
            setTimeout(function(){
              window.location.href="../pages/dashboard.html";
            },1000);
          },1000);
          step++;
        }
      }
    });
  })();