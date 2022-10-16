const guestlist = ["Shahzad","Maaz","Rizwan"];
for (i=0; i<guestlist.length; i++)
    console.log("Treat de raha hun! Kya yaad karogy " + guestlist[i]+ " bhai!, Ajana apna kanjoos mu leky.")
console.log("Aby yr, "+ guestlist[2] + " ne topi karadi!");
guestlist[2] = "Usman";
console.log("Updated Guest List");
for (i=0; i<guestlist.length; i++)
    console.log("Treat de raha hun! Kya yaad karogy " + guestlist[i]+ " bhai!, Ajana apna kanjoos mu leky.")
console.log("Bhye Set up bara hogya ha treat ka!");
guestlist.push("Khubaib")
guestlist.splice(guestlist.length/2,0,"Adil")
guestlist.unshift("Zohaib")
for (i=0; i<guestlist.length; i++)
    console.log("Treat de raha hun! Kya yaad karogy " + guestlist[i]+ " bhai!")
console.log(guestlist)
console.log("Yr I can invite only two people!");

let x = guestlist.length;
let y = guestlist.length;
for (i=0;i<x-1; i++){
    guestlist.splice(x-i,x+i);
    if(guestlist.length==2)
        break;
    console.log("Sorry "+ guestlist[y-1] + " bhai you are uninvited due to some reasons.")
    y-=1
}
for (i=0;i<x;i++){
    console.log(guestlist[i] + " bhai, you are still invited!")
    if(i==1)
        break;
}
guestlist.length = 0;
console.log("Empty List")
console.log(guestlist)