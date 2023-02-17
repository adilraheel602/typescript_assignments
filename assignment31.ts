// My name is M. Adil Raheel Dated: 15th Feb 2023
let users_list = [ "John", "David","admin", "Nasir", "Johanson" ];
for(var a = 0; a<5; a++){
    users_list.pop()
}
if(users_list.length<1){
    console.log("We need to find some users!");
}
else{
    for(var i=0; i<users_list.length; i++){
        if(users_list[i] == "admin"){
            console.log("Hello admin, would you like to see a status report?");
        }
        else{
            console.log(`Hello ${users_list[i]}, thank you for logging in again`);
        }
    }
}
