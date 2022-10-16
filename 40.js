function make_album(x,y,z) {
    if(z==undefined){
        const singers_detail = {
            artist_name: x,
            album_title: y,
        }
        return singers_detail;
    } else if(z!=undefined){
        const singers_detail = {
            artist_name: x,
            album_title: y,
            tracts: z,
        }
        return singers_detail;
    }
    
}
console.log(make_album("Strings","Sajni"))
console.log(make_album("Atif","Jal Pari",5))
console.log(make_album("Fusion","Khamaj"))