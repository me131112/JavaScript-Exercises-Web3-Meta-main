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
console.log(guestlist)
for (i=0; i<guestlist.length; i++)
    console.log("Treat de raha hun! Kya yaad karogy " + guestlist[i]+ " bhai!")