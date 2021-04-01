player1= localStorage.getItem("player_1");
player2= localStorage.getItem("player_2");
console.log(player1);
console.log(player2);

score_player_1=0;
score_player_2=0;

document.getElementById("player1name").innerHTML=player1;
document.getElementById("player2name").innerHTML=player2;
console.log("testing");

document.getElementById("player_1_score").innerHTML=score_player_1;
document.getElementById("player_2_score").innerHTML=score_player_2;

document.getElementById("Question_turn").innerHTML="Question turn = "+player1;
document.getElementById("Answer_turn").innerHTML="Answer turn = "+player2;

function done(){
    number_1=document.getElementById("1").value;
    number_2=document.getElementById("2").value;
    console.log(number_1);
    console.log(number_2);

    question= number_1 + " X " +number_2;
    answer= number_1 * number_2;
    console.log(question);
    console.log(answer);

    question_word = "<h4 id='Q'>Q.  "+question+"</h4>";
    input_box = "<br>Answer = <input type='text' id='answer' placeholder-'Answer' class='form-control'> ";
    button = "<br><button onclick='Check()' class='btn btn-warning'>Check</button>";
    html= question_word + input_box + button;
    document.getElementById("output").innerHTML=html;
    document.getElementById("1").value="";
    document.getElementById("2").value="";
}

question_turn = "player_1";
answer_turn = "player_2"
function Check(){
   input = document.getElementById("answer").value;
   if(input == answer){
       if(answer_turn == "player_1"){
           score_player_1 = score_player_1 +1;
           document.getElementById("player_1_score").innerHTML=score_player_1;
       }
       else{
           score_player_2 = score_player_2+1;
           document.getElementById("player_2_score").innerHTML=score_player_2;
       }
       }
       if(question_turn == "player_1"){
           question_turn = "player_2";
           document.getElementById("Question_turn").innerHTML="Question Turn : "+player2;
       }
       else{
        question_turn = "player_1";
        document.getElementById("Question_turn").innerHTML="Question Turn : "+player1;
       }

       if(answer_turn == "player_1"){
           answer_turn = "player_2";
           document.getElementById("Answer_turn").innerHTML= "Answer Turn : "+player2;
       }
       else{
        answer_turn = "player_1";
        document.getElementById("Answer_turn").innerHTML= "Answer Turn : "+player1;
       }
    }
