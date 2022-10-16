car = {}
function cars(x,y,...z){
    car = {
        manufacturer: x,
        model: y,
    }
    for (i in z){
        car[i]=z[i]
    }
    console.log(car)
}
cars("suzuki","mehran",2020,"white")