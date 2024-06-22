$(document).ready(function(){
    init();

    $("#submit_button").click(function(){
        init();

        var roll_dice = $(".roll_dice");
        count = Number($("#count").val());
        createDice(roll_dice,count);

        dice_mean=updateMean(eyelist, count);
        dice_sd=updateSd(eyelist,dice_mean,count);
        


        addResult($("#mean_result"), dice_mean);
        addResult($("#sd_result"), dice_sd);
    });
});

var count; //횟수
var dice_mean //평균
var dice_sd //표준편차
var eyelist;

//초기화
function init(){
    count=0;
    dice_mean=0;
    dice_sd=0;
    eyelist=[0,0,0,0,0,0];
    $("#mean_result").text("평균 : ");
    $("#sd_result").text("표준편차 : ");
}

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



//리스트와 횟수를 받아서 평균을 반환
function updateMean(list, count){
    var mean=0;
    for(var i=1; i<=list.length; i++){
        mean += list[i-1]*i;
    }
    mean/=count;
    return mean;
}

//리스트, 횟수, 평균을 받아서 표준편차를 반환
function updateSd(list, mean, count){
    var sd=0;
    for(var i=1; i<=list.length; i++){
        sd += (list[i-1]-mean)*(list[i-1]-mean);
    }
    sd=Math.sqrt(sd);
    sd=sd/count;
    sd=sd.toFixed(4);
    return sd;
}



function addResult(container,value){
    container.append(value);
}