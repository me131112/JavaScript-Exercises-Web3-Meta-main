mag_name = ["john","peter","luke"]
mag_name_copy = []
function show_magicians(mag_name){
    for(a in mag_name)
        console.log("Magician name: "+mag_name[a])
}
function make_great(mag_name,mag_name_copy){
    for(a in mag_name)
        mag_name_copy[a] = ("The great " + mag_name[a])
}
make_great(mag_name,mag_name_copy)
show_magicians(mag_name)
console.log(mag_name)
console.log(mag_name_copy)
show_magicians(mag_name_copy)