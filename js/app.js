'use strict'; 

const username = prompt('whats your name ') .toLowerCase();
console.log( 'username var = ', username);

function printName(name) {
    let functionname = name ;

}

let classnumber = prompt('what do u do for living ');

switch (username) {
    case 'laith':
        alert(username);
        break;
    case 'fayiz' :
        alert (username);
    break;
    default:
        alert (' hello  ');
        break;
}
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
     