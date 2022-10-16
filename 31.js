let users = [/*"admin", "shoaib", "afreen"*/]
if(users.length<1)
    console.log("We need to find some new users")
let a = prompt("Please enter your user name!")
for(i=0;i<users.length;i++){
    if(a=="admin")
        console.log("Hello admin, would you like to see a status report?")
    else if(a=="shoaib"){
        console.log("Hello shoaib, thank you for logging in again")
    }
    else if(a=="afreen"){
        console.log("Hello afreen, thank you for logging in again")
    }
    else{}
}
