"use strict";
//My name is M. Adil Raheel  Dated: 14th February 2023
//Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.
//This program stores a string in a variable and print in lower, upper and title case.
const names = "Hello Eric, would you like to learn some Python today?";
console.log(names.toLowerCase());
console.log(names.toUpperCase());
console.log(names.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '));
