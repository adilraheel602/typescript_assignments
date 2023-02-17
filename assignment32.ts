// My name is M. Adil Raheel Dated: 15th Feb 2023
const website_usernames = ["Ali", "John", "David", "Senal", "Polo" ];
const new_users = ["Polo", "Arslan", "David", "Ronaldo", "Saim" ];
for (var i=0; i<new_users.length; i++){
    for (var j=0; j<website_usernames.length; j++){
        if(new_users[i]== website_usernames[j]){
            console.log(new_users[i]+ " Person is needed to enter a new username.");
            new_users.splice(i,1);
        }
    }
    console.log(new_users[i]+" This username is available");
}
