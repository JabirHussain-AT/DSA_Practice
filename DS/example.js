// // const users=[
// //     {firstname:"anirudh",lastname:"jagath",age:31 },
// //     {firstname:"abhi",lastname:"krishna",age:2 },
// //     {firstname:"saf",lastname:"mon",age:2 },
// //     {firstname:"appu",lastname:"home",age:35 },
// // ];
// // const output=users.map(x=>x.firstname+" "+x.lastname)
// // console.log(output);
// // const output=users.reduce(function(acc , curr){
// //     if (acc[curr.age]){
// //         acc[curr.age]++
// //     }
// //     else{
// //         acc[curr.age]=1
// //     }
// //     return acc
// // },{})
// // console.log(output);
// // const output=users.reduce(function(acc,curr){
// //     if(curr.age>30){
// //         acc.push(curr.firstname)
// //     }
// //     return acc
// // },[])
// // console.log(output);

// // const pr=new Promise((resolve,reject)=> resolve ("anirudh"))

// // pr.then(function(data){
// //     console.log(data);
// // })


// // const result=array.reduce(function(acc,curr){
//     //     acc=acc+curr
//     //     return acc
//     // },0)
//     // console.log(result);
// // let newArray=array.split('').reverse().join('')
// // console.log(newArray);
// //  const result=array.reduce(function(acc,curr){
// //     if (curr%2==0){
// //         acc=acc+curr
// //     }
// //     return acc
// //  })
// //  console.log(result);
// // const result=array.map(x=>x*2)
// // console.log(result);

// //  let array=[1,2,2,2,3,3,4,4,5,6,6,6,7,8,8]
// //  let array1=[];
// let k = 0
//  const array=[1,2,2,2,4,5,6,7,8]
//  var removeDuplicates = function(nums) {
//      for(i=0;i<nums.length;i++){
//          for(j=i ; j<nums.length ; j++){
//             if(i!=j){
//                  if(nums[i] === nums[j]){
//                 for(k = j; k < nums.length; k++){
//                     nums[k] = nums[k+1]
//                 }
//                 nums.length--;
//                 j--;
//             }
//         }
//     }
// }
// return nums.length
// };
// console.log(removeDuplicates(array))

function printNum(n){
    if(n > 0 ){
        console.log(n+" ");
        return printnum(n-1)
    }
    return ;
}

printNum(34)
