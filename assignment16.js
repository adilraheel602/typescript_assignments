"use strict";
// My name is Adil Raheel Dated: 14th Feb 2023
// This program perform operations on the array elements and then inset them in a string for 
//invitation purpose for dinner in a sequence.
const guest_list = ["Mr. Saim", "Mr. Harry", "Mr. Farhan", "Mr. Feroze"];
guest_list[1] = "Mr. Khalid";
guest_list.unshift("Mr. Kamal");
guest_list.splice(3, 0, "Ms. Jamal");
guest_list.push("Ms. Komal");
for (var i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i] + " I would like to invite on a dinner at Ambassador Hotel on 10th February.");
}
console.log("Sorry to hear that Mr. Harry can't make to come at dinner.");
console.log("We have arranged a bigger dinner table.");
