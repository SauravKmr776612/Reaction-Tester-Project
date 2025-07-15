var init = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // this function will randomly choose any charector from the string 
  // that concatinate it which will show us a new number every time
  return color;
}

function Move(){
    // this will change the dimensions of box and position and color
   var left;
   var top;
   var wh;
   left= Math.random()*500;
   top = Math.random()*250;
   wh= (Math.random()*400)  + 100;
   document.getElementById("Box").style.left= left +"px"; //change the item to pixels 
   document.getElementById("Box").style.top = top +"px";
   document.getElementById("Box").style.width = wh +"px";
   document.getElementById("Box").style.height = wh + "px";
   document.getElementById("Box").style.display = "block";
   document.getElementById("Box").style.backgroundColor = getRandomColor(); // change the color
   init = new Date().getTime();

}
Move();
document.getElementById("Box").onclick= function(){
    document.getElementById("Box").style.display="none";
    var now = new Date().getTime();
    var diff = now - init; // diff  is time differece between previously called init time
    diff= diff/1000;
    alert("You took "+ diff +" sec");
    Move();

}