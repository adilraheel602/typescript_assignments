// My name is M. Adil Raheel Dated: 15th Feb 2023
const ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for( var i =0; i<ordinals.length; i++){
    if(ordinals[i] === 1){
        console.log(ordinals[i]+"st");
    }
    else if(ordinals[i] === 2){
        console.log(ordinals[i]+"nd");
    }
    else if(ordinals[i] === 3){
        console.log(ordinals[i]+"rd");
    }
    else{
        console.log(ordinals[i]+"th");
    }
}