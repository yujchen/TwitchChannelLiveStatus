const UsherService = require('./usher.js');
let streamID1 = 'lck_korea';
while(true){
    if (UsherService.isChannelLive(streamID1) === true){
        console.log(`${streamID1} is online`);
    }
    else{
        console.log(`${streamID1} is offline`);
    }
}