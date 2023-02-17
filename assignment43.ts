// My name is M. Adil Raheel Dated: 16th Feb 2023
const magiciansOriginalCopy = ["Alibaba", "Robbin", "Rockstar", "Goblin"];
function make_great1(adding: string[]){
    for ( var i =0; i<adding.length; i++){
        adding[i] = "The Great! Mr. "+ adding[i];
    }
    return adding
}

function show_magicianss(array: string[]){
    for ( var i =0; i<array.length; i++){
        console.log( array[i]);
    }
}

show_magicianss(magiciansOriginalCopy)
let result = make_great1(magiciansOriginalCopy);
show_magicianss(result);