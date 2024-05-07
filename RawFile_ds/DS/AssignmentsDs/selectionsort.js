let array = [2,5,4,7,2,1,8]
let sm;
for(let i = 0 ; i < array.length-1 ; i++){
    sm = i
       for(let j = i+1 ; j < array.length ; j++){
        if(array[j]<array[sm]){
            sm = j
        }
    }
    let temp = array[i]
    array[i] = array[sm]
    array[sm] = temp

}
console.log(array);
