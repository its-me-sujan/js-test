const QRCode = require('qrcode')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a string: ', (userInput) => {
    QRCode.toString(userInput, {type:'terminal'}, function (err, url){
        console.log(url)
    })
    rl.close();
});

 
 