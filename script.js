$(document).ready(function(){
    $("#submit_button").click(function(){
        var roll_dice = $(".roll_dice");
        count = Number($("#count").val());
        createDice(roll_dice,count);
        updateResult(dice_mean, dice_sd);
        addResult($("#mean_result", dice_mean));
        addResult($("eye_result", dice_sd));
    });
});

var count; //횟수
var dice_mean=0 //평균
var dice_sd=0 //표준편차
var eyelist=[0,0,0,0,0,0];

//value를 받아서 container에 dice를 append함
function createDice(container,value){
    container.html("");
    for(var i=0; i<value; i++){
        var dice = $("<div />");
        var eye = parseInt(Math.random()*6)+1;
        eyelist[eye-1]++;
        console.log(eye);
        dice.addClass("dice");
        dice.html(eye);
        container.append(dice);
    }
}

function updateResult(mean, sd){
    mean=0;
    sd=0;
    for(var i=1; i<=eyelist.length; i++){
        mean = mean + eyelist[i-1]*i;
    }
    mean/=count;
    for(var i=1; i<=eyelist.length; i++){
        sd = sd +(eyelist[i-1]-mean)^2;
    }
    sd=Math.sqrt(sd);
}

function addResult(container,value){
    container.text(value);
}