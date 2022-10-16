let car = [1,2,3,4,5];
for(i=0;i<car.length;i++){
    console.log("Is " + car[i] + " = " + car[i] + " ? I predict True.")
    console.log(car[i]==car[i])
}
for(i=0;i<car.length;i++){
    console.log("Is " + car[i] + " = " + car[i+1] + " ? I predict True.")
    console.log(car[i]==car[i+1])
}