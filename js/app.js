'use strict';
let score = 0;
alert('hello for test');

function q1(){
  let answer1 = prompt('do you think im progrmar?','yes , no');
  switch(answer1.toLowerCase()){
  case 'yes':
  case 'y':
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q1();

function q2(){
  let answer2 = prompt('do you think im a short person?','yes , no');
  switch(answer2.toLowerCase()){
  case 'yes':
  case 'y':
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q2();

function q3(){
  let answer3 = prompt('do you think im bad at programming?','yes , no');
  switch(answer3.toLowerCase()){
  case 'yes':
  case 'y':
    alert('what a shame, your answer is wrong');
    break;
  case 'no':
  case'n':
    alert('awsome, your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q3();

function q4(){
  let answer4 = prompt('do you think i work too hard?','yes , no');
  switch(answer4.toLowerCase()){
  case 'yes':
  case 'y':
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q4();

function q5 (){
  let answer5 = prompt('do you know me personally?','yes , no');
  switch(answer5.toLowerCase()){
  case 'yes':
  case 'y':
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q5();

function q6 (){
  let answer6=prompt('guess how tall i am in centimeters?');
  for(let i=0;i<4;i++){
    if(parseInt(answer6)<190){
      alert('no im taller than that, try again');
    }else if(parseInt(answer6)>190){
      alert('no im shorter than that, try again');
    }else if(parseInt(answer6)=== 190){
      alert('wow, well done');
      score+=1;
      break;
    }else{alert('please use numbers..');}
    if(i===3){
      alert('too bad, im 190 centimeters');
      break;
    }
    answer6=prompt('guess how tall i am in centimeters?');
  }
}
q6();

function q7 (){
    let color = ['red','black','blue','white','green','yallow','orange','mofe'];
    let answer7 = prompt('i have alot of favourite color, guess one of them?');
  
     for(let i=0;i<6;i++){
      for(let j=0;j<color.length;j++){
        if (answer7.toLowerCase() === color[j]){
          alert('wow you got me');
          score+=1;
       
          break;
        }
      }
      if(answer7.toLowerCase() === color[i]){
        break;
      }
      if(i===5){
        alert('oh you couldnt guess my color all of these were right answers: '+color);
        break;
      }
      answer7 = prompt('wrong answer, please try another guess?');
    }
}
    q7();
    alert('okey, your score is '+score+' out of 7');


