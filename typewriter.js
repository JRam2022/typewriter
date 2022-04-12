const sentence = "Hello there from Vancouver!";

let eachChar = sentence.split('');
//console.log(eachChar)

for (let i = 0; i < eachChar.length; i++) {
  
  //prints out with 50ms delay
  setTimeout(() => {
    //if at the end of the loop remove %
    if (i === (eachChar.length - 1)) {
      
      eachChar[i] += '\n';
    }
    
    process.stdout.write(eachChar[i]);
    //increments each character by 50ms
  }, 50 * (i + 1));
}