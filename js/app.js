'use strict'; 

const username = prompt('whats your name ') .toLowerCase();
console.log( 'username var = ', username);

function printName(name) {
   let functionname = name ;

}

let username = prompt('what my name');
function muName(username){
  switch (username) {
    case 'laith':
        alert('yes my name is '+username);
        break;
    case 'fayiz':
        alert ('no that not my name' + username);
    break;
    default:
        alert ('no that not my name');
        break;
}
}
muName(username)


function checkint(int) {
    if (int == 'yes') {
     return true;
    } else {
      return confirm('do u wanna take a look before u go?');
    }
  }
  
  let int = prompt('are interesting to read about me ?', 'yes');
  
  if ( checkint(int) ) {
    alert( 'you are welocme ' );
  } else {
   alert( 'maybe anther time  ' );
     }
     