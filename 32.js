let current_users = ["john","adam","lucy","bert","suzy"]
let new_users = ["shoaib","afreen","Lucy","John","barry"]

let x = 0
let z = 0
for (i=0;i<new_users.length;i++){
    for (y=0;y<new_users.length;y++){
        if(new_users[i].toLowerCase==current_users[y].toLowerCase)
            x+=1 
    }
    if(x>0){
        console.log(new_users[i]+", < this username has already been used, please enter different username!")
        x=0
    }    
    else{
        console.log(new_users[i]+", < this username is available!")
    }
}/*
for (var i = 0; i<new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(new_users[i]+", < this username has already been used, please enter different username!")
    } else {
        console.log(new_users[i]+", < this username is available!")
    }
}*/