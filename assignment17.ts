// My name is Adil Raheel Dated: 14th Feb 2023
// This program perform operations on the array elements 
const guest_list1 = ["Mr. Saim", "Mr. Harry", "Mr. Farhan", "Mr. Feroze"];
guest_list1[1] = "Mr. Khalid";
guest_list1.unshift("Mr. Kamal");
guest_list1.splice(3,0,"Ms. Jamal");
guest_list1.push("Ms. Komal");
for(var i=0; i<7; i++){
    if(guest_list1.length>2){
        let name= guest_list1.shift()
        console.log("Sad to inform you "+ name +" but we can't invite you." );
    }
    else{
        let name1= guest_list1.shift()
        console.log(name1+" I would like to invite on a dinner at Ambassador Hotel." );
    }
}
console.log(guest_list1);
console.log("Sorry to hear that Mr. Harry can't make to come at dinner.");
console.log("We have arranged a bigger dinner table.");
console.log("We can invite only two people for dinner.");
