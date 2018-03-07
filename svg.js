var svg = document.getElementById("s");
var clear = document.getElementById("clear");
var x;
var y;

var createCircle = function(e){
    if (this.getAttribute("fill") == null){
	var x = e.offsetX;
	var y = e.offsetY;
	
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 15);
	c.setAttribute("fill", "black");
	svg.appendChild(c);

	c.addEventListener("click", color, true);
    }
    else{
	color();
    }
}

svg.addEventListener("click", createCircle);

var color = function(e){
    if (this.getAttribute("fill") == "black"){
	this.setAttribute("fill", "blue"); 
    }
    else{
	svg.removeChild(this);
	randCircle();
    }
}

var randCircle = function(){
    var x = Math.floor(Math.random() * svg.getAttribute('width'));
    var y = Math.floor(Math.random() * svg.getAttribute('height'));
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "black");
    svg.appendChild(c);

    c.addEventListener("click", color, true);
}

var erase = function(){
    svg.innerHTML = "";
}

clear.addEventListener("click", erase);
