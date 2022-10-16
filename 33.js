let a = [1,2,3,4,5,6,7,8,9]
let b = []
for (i=0;i<a.length;i++){
    if(a[i]==1){
        b.push("1st")
    }
    else if(a[i]==2)
        b.push("2nd")
    else if(a[i]==3)
            b.push("3rd")
    else{
        b.push(a[i]+"th")
    }        
    console.log(b[i])
}