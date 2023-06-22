const QRCode = require('qrcode')
QRCode.toString('sujan shrestha', {type:'terminal'}, function (err, url){
    console.log(url)
})