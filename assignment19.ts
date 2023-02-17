// My name is M. Adil Raheel Dated: 14th Feb 2023
const guestes = ["Mr. Saim", "Mr. Harry", "Mr. Farhan", "Mr. Feroze"];
//As we know Mr. Harry can't come so we are inviting Mr. Khalid instead
guestes[1] = "Mr. Khalid";
for(var i=0; i<guestes.length; i++){
    console.log(guestes[i]+" I would like to invite on a dinner at Ambassador Hotel on 10th February" );
}
console.log("Sorry to hear that Mr. Harry can't make to come at dinner");
console.log(`Total persons that are invited for dinner are ${guestes.length}`);
