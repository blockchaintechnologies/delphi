import io from 'socket.io-client';

const coincap = io.connect('http://socket.coincap.io/'); //open connection to CoinCap API
//Set initial values to 0, we have no data.
let LTC = 0;
let BTC = 0;
let ETH = 0;
let DASH = 0;
//Watch for 'trades'(ticker data) to come down the "line"
coincap.on('trades', function(tradeMsg){
  if(tradeMsg.message.coin === 'LTC' && BTC !== 0){

    //Parse and write ticker data to the DB
    LTC = tradeMsg.message.msg.price
    
  }

  else if(tradeMsg.message.coin === 'ETH' && BTC !== 0){
    ETH = tradeMsg.message.msg.price;
    
  }

  else if(tradeMsg.message.coin === 'DASH' && BTC !== 0){
    DASH = tradeMsg.message.msg.price;
    
  }
//We don't need to add BTC price to the DB it's just for conversion.
  else if(tradeMsg.message.coin === 'BTC'){
    BTC = tradeMsg.message.msg.price;}
//Print the latest combo of ticker prices to the console
  else if (BTC !==0 && LTC !==0 && ETH !==0 && DASH!==0){
    console.log(`Latest from CoinCap: \n  ETH/USD:${ETH} `)
  }
})


export default coincap;
