"use strict";
// My name is M. Adil Raheel Dated: 16th Feb 2023
const magicianns = ["Alibaba", "Robbin", "Rockstar", "Goblin"];
function make_great(adding) {
    for (var i = 0; i < adding.length; i++) {
        adding[i] = "The Great! Mr. " + adding[i];
    }
    show_magiciaans(adding);
}
function show_magiciaans(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
make_great(magicianns);
