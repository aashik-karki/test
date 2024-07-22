const os = require("os");
const user = os.userInfo();
console.log("this is a os", user);

console.log(`the system is run in the ${os.uptime}second`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  freeSpace: os.freemem(),
  totalSpace: os.totalmem(),
};

console.log("This is a currentos", currentOS);
