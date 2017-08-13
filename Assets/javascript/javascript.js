$(document).ready(function(){

  // Random number between 19 and 120 generated
  var random=Math.floor(Math.random()*101+19)

 // Random number between 1 and 12 for each jewel
  $('#randomNumber').text(random);
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

 // Variables for score
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//Resets game
function reset(){
      random=Math.floor(Math.random()*101+19);
      console.log(random)
      $('#randomNumber').text(random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

//Adds wins to userTotal
function win(){
alert("You win, Matey!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

//Adds losses userTotal
function lose(){
alert ("You lose, no booty for you!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//Click for jewels
//Jewel #one
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == random){
          win();
        }
        else if ( userTotal > random){
          lose();
        }   
  })  

//Jewel #two
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == random){
          win();
        }
        else if ( userTotal > random){
          lose();
        } 
  })  

  //Jewel #three
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
        if (userTotal == random){
          win();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  

  //Jewel #four
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == random){
          win();
        }
        else if ( userTotal > random){
          lose();
        }
  });   
}); 