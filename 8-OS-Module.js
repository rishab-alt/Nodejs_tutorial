const os = require('os')

//info about and current user
const user = os.userInfo()
console.log(user);
//mothod returns the system uptim in seconds
console.log(`The system uptime is ${os.uptime()} Seconds`);

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);