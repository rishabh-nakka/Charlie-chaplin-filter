var head_x=""
var head_y=""
var clown_nose_x=""
var clown_nose_y=""
var nose_x="";
var nose_y="";
var cownboy_hat="";
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/BQS7sFT3/il-fullxfull-427975435-5v96-removebg-preview-1.png")
}
function setup(){
   canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("YAY IT'S WORKING")
}
function draw(){
    image(video,0,0,400,400)
    image(clown_nose,clown_nose_x,clown_nose_y,360,360)
    
}
function snap(){
    save("downloads.png");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x
        clown_nose_x=nose_x-170
        nose_y=result[0].pose.nose.y
        clown_nose_y=nose_y-160
        console.log(nose_x)
        console.log(nose_y)
    }
}
