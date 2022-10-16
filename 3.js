let a = prompt("What is your name?");
a = a.toUpperCase()
console.log(a)
a = a.toLowerCase()
console.log(a)
let a_split = a.split(' ')
console.log(a_split)
for(i = 0; i < a_split.length; i++){
    a1 = a_split[i];
    a_split[i] = a1.charAt(0).toUpperCase() + a1.slice(1,);
}
let name_title = a_split.join(" ");
console.log(name_title)