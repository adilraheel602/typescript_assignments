"use strict";
// My name is M. Adil Raheel Dated: 16th Feb 2023
// Cars: Write a function that stores information about a car in a Object. The 
// function should always receive a manufacturer and a model name. It should then
//  accept an arbitrary number of keyword arguments. Call the function with the
//   required information and two other name-value pairs, such as a color or an 
//   optional feature. Print the Object that’s returned to make sure all the information 
// was stored correctly.
const car1 = {
    manufacturer: "",
    model: "",
    color: "",
    no_Of_Cylinders: 0,
};
function objectDefining(obj, a, b, c, d) {
    obj = {
        manufacturer: a,
        model: b,
        color: c,
        no_Of_Cylinders: d,
    };
    return obj;
}
console.log(objectDefining(car1, "Honda", "Civic Reborn", "Blue", 4));
