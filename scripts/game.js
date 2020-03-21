let map;
let terain;

function preload(){
	map = loadImage("/resources/images/maps/Naamloos.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	terain = new Terain(map);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(76, 160, 245);
	image(map,0,0);
}

function Terain(m){
	this.map=m;
	this.boeis = [];
	
	this.map.loadPixels();
	for (let x = 0; x < this.map.height; x++){
		for(let y = 0; y < this.map.width; y++){
			console.log(this.map.get(x,y));
			console.log(color(0))
			if(this.map.get(x,y) == [0,0,0,255]){
				console.log(x,y, "jeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey");
			}
		}
	}

	this.display = function(){

	}
}