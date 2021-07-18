nose_x =0;
nose_y =0;
difference =0;
left_wrist_x  =0;
right_wrist_x  =0;

function preload()
{

}

function setup()
{
    video = createCapture(VIDEO);
    canvas = createCanvas(550,500);
    canvas.position(900,330);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model loaded successfully!");
}

function gotPoses(result)
{
    if(result.length>0)
    {
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        left_wrist_x = result[0].pose.leftWrist.x;
        right_wrist_x = result[0].pose.rightWrist.x;
        difference = floor(left_wrist_x-right_wrist_x);

    }
    else{
        console.log("error");
    }
}

function draw()
{
  background('green');
  document.getElementById("w_h").innerHTML = difference+"px";
  fill('blue');
  stroke('black');
  text('word', nose_x,nose_y,difference);
  textSize(left_wrist_x,right_wrist_x);

}
