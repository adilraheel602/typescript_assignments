"use strict";
// My name is M. Adil Raheel Dated: 14th Feb 2023
let carName = "Honda";
let mode = "Sport";
let speeding = 100;
let colour = "blue";
let year = ["2022", "2021", "2020"];
const isCompany = carName == "Honda" ? true : false;
console.log(isCompany); //true
const isMode = mode == mode.toLowerCase() ? true : false;
console.log(isMode); //false
const isTheColour = colour == "blue" && colour.length == 4 ? true : false;
console.log(isTheColour); //true
const isSpeeding = speeding > 120 ? true : false;
console.log(isSpeeding);
const isYear = "2022" == year[0] ? true : false;
console.log(isYear); //true
const isMakePresent = "2023" == year[1] ? true : false;
console.log(isMakePresent); //true
