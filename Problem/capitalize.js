// A function which takes a string as argument and returns a string with the first letter of 
// each word capitalized. Make sure the rest of the word is in lower case.
const capitalize=(sentence)=>{
    const slength=sentence.length
    let cap=false
    let rstring=sentence[0].toUpperCase();
    for(i=1;i<slength;i++)
    {
        if(sentence[i]==" "){
            cap=true
            rstring+=sentence[i]
            continue
        }
        if(cap==true){
            rstring+=sentence[i].toUpperCase();
            cap=false
            continue
        }
        else{
            rstring+=sentence[i].toLowerCase();
        }

    }
    return rstring

}
console.log(capitalize("Hello thIs iS benUp gHIMIRE"))