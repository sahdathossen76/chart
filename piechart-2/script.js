var val1D = document.getElementById('donut-segment1')
var val2D = document.getElementById('donut-segment2')
var val3D = document.getElementById('donut-segment3')

startAnim()

function startAnim(){
  setTimeout(function(){
    val1D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val1D.style.strokeDasharray = "100 0";
    },20);
}

function calculate() {
  var val1 = parseInt(document.getElementById('val1').value);
  var val2 = parseInt(document.getElementById('val2').value);
  var val3 = parseInt(document.getElementById('val3').value);
  var totalValue = document.getElementById('totalValue')

  var total = val1+val2+val3;
  
  var per1 = val1/total*100;
  var per2 = val2/total*100;
  var per3 = val3/total*100;
  var offset = 25;
  
  totalValue.textContent = total;
  
  val1D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val1D.style.strokeDasharray = per1+" "+(100-per1);
  val1D.style.strokeDashoffset = offset;
  
  val2D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val2D.style.strokeDasharray = per2+" "+(100-per2);
  val2D.style.strokeDashoffset = 100-per1+offset;
  
  val3D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val3D.style.strokeDasharray = per3+" "+(100-per3);
  val3D.style.strokeDashoffset = 100-(per1+per2)+offset;
}

// line positioning: (100 - previous percent(s) + offset (25% in the opposite direction from 3:00 back to 12:00 to correct pie position)