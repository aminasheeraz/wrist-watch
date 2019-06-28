     
        function digits() {
          var d = new Date();
          document.getElementById("time").innerHTML = d.toLocaleTimeString();
            
        }
          
         setInterval(digits, 1000); 
                