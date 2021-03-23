player1=localStorage.getItem("player_1");
player2=localStorage.getItem("player_2");

score_player_1=0;
score_player_2=0;

document.getElementById("player_1_name").innerHTML=player1+" : ";
document.getElementById("playe_1_score").innerHTML=score_player_1;

document.getElementById("player_2_name").innerHTML=player2+" : ";
document.getElementById("playe_2_score").innerHTML=score_player_2;

document.getElementById("Question_turn").innerHTML="Question Turn = "+player1;
document.getElementById("Answer_turn").innerHTML="Answer Turn = "+player2;