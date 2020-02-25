const header = document.getElementsByClassName("header")[0];

function setup(){
    createCanvas(header.offsetWidth,windowHeight-header.offsetHeight-100)
    document.getElementsByClassName("page-content")[0].append(document.getElementById("defaultCanvas0"))
}

function draw(){
    background(255)
    stroke(0);
    strokeWeight(5)
    translate(width/2,height/2);
    point(0,0);

    dash();
}

function windowResized() {
    resizeCanvas(header.offsetWidth,windowHeight-header.offsetHeight-100);
}

function boat(){

}

function dash(){
    fill(120)
    stroke(1)
    rect(-width/2,height/2-100,width,100)
}