var noseX=0;
var noseY=0;
var pulseRightX=0;
var pulseLeftX=0;
var diference=0;
function setup(){
  video = createCapture(VIDEO);
  video.size(550,500)
  canvas=createCanvas(550,450);
  canvas.position(560,100);
  poseNet=ml5.poseNet(video,modelLoad);
  poseNet.on("pose",gotPose);

}
function draw(){


    background("#808080");
    fill("#F90093");
    stroke("#F90093");
    square(noseX,noseY,diference);
    
}
function modelLoad(){
    console.log("modelo carregado")
}
function gotPose(results){
    if (results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            pulseRightX=results[0].pose.rightWrist.x;
            pulseLeftX=results[0].pose.leftWrist.x;
            diference=pulseLeftX-pulseRightX;
    }
}