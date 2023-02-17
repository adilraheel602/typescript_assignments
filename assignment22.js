"use strict";
// My name is M. Adil Raheel Dated: 14th Feb 2023
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so
//you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// This program invites the list of people at dinner and replace the person if someone cannot coming
const list = ["Mr. Saim", "Mr. Harry", "Mr. Farhan", "Mr. Feroze"];
//As we know Mr. Harry can't come so we are inviting Mr. Khalid instead
list[1] = "Mr. Khalid";
for (var i = 0; i < list.length; i++) {
    console.log(list[i] + " I would like to invite on a dinner at Ambassador Hotel on 10th February");
}
console.log("Sorry to hear that Mr. Harry can't make to come at dinner");
console.log(list[-6]);
