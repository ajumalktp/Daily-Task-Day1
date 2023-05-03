
function string_chop(str,size){
    var result=[];
    for(var i =0; i<str.length;i+=size){
        result.push(str.substr(i,size));
    }
    return result;
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));

    