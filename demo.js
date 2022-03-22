const dotenv = require("dotenv");
dotenv.config();
// console.log("hey demo js updated new one two three");

// setTimeout(() => {
//     console.log("after 3s")
// }, 3000)
// process.exit(1)
function checkUser(user,pass) {
    if(user==process.env.USER_NAME && pass==process.env.USER_PASS) {
        return `authenticated  ${console.log(process.argv)}`
    } else {
        return "Unauthenticated"
    }
}
let user = {
    name: "Imran",
    age: 25,
    address:"mumbai"
}
exports.user=user;   //exporting as dynamic
console.log(checkUser("admin", "admin"));

//module.exports = user;  // exporting as default
console.log(module);

