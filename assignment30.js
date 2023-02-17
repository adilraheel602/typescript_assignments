"use strict";
// My name is M. Adil Raheel Dated: 15th Feb 2023
const users = ["John", "David", "admin", "Nasir", "Johanson"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again`);
    }
}
