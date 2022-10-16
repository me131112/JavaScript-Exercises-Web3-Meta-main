mag_name = ["john","peter","luke"]
function show_magicians(mag_name){
    for(a in mag_name)
        console.log("Magician name: "+mag_name[a])
}
function make_great(mag_name){
    for(a in mag_name)
        mag_name[a] = ("The great " + mag_name[a])
}
make_great(mag_name)
show_magicians(mag_name)


