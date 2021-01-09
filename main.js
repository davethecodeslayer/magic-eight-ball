let userName = ''
userName? console.log('Hello, Jane!') : console.log('Hello!');

let userQuestion = 'Will I be POTUS?'
console.log(`${userName} asks ${userQuestion}`);

const randomNumber = Math.floor(Math.random() *8);

let eightBall = ''
switch (randomNumber) {
  case  0 :
  eightBall = 'Never in your wildest dreams';
  break;
  case  1 :
  eightBall = 'Not today';
  break;
  case  2 :
  eightBall = 'Of course!';
  break;
  case  3 :
  eightBall = 'It is certain';
  break;
  case  4 :
  eightBall = 'Cannot predict now';
  break;
  case  5 :
  eightBall = 'I am getting tired of this';
  break;
  case  6 :
  eightBall = 'Keep trying';
  break;
  case 7 :
  eightBall = 'Signs point to yes';
  break; 

}
console.log(eightBall)
/*let eightBall = ''
switch (randomNumber) {
  case  0 :
  console.log('Never in your wildest dreams');
  break;
  case  1 :
  console.log('Not today');
  break;
  case  2 :
  console.log('Of course!');
  break;
  case  3 :
  console.log('It is certain');
  break;
  case  4 :
  console.log('Cannot predict now');
  break;
  case  5 :
  console.log('I am getting tired of this');
  break;
  case  6 :
  console.log('Keep trying');
  break;
  case 7 :
  console.log('Signs point to yes');
  break; 
  
}*/