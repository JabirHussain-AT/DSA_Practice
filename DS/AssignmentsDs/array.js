// const arr=[1,2,3]
// arr.foo = 'hello';
// // arr.push(4)
// // arr.unshift(3)
// // arr.pop()
// // arr.shift()
// for( const item of arr ){
//     console.log(item);
// }
// //map ,filter,reduce,concat,slice and splice

// // const obj={
// //     name:"anirudh",
// //     age:21
// // }
// // obj.hobby ="football"
// // delete obj.age
// // console.log(obj);
// // console.log(obj.name);

// // const set=new Set([1,2,3])
// // set.add(4)
// // set.delete(3)
// // console.log(set.size)
// // set.clear()
// // console.log(set.has(4))
// // for( const item of set){
// //     console.log(item);
// // }

// // 1. second largest element
// // arr = [2,4,5,3,7,2,10]

// // let largest = arr[0];
// // let secondLargest = arr[0];

// // for (let i = 1; i < arr.length; i++) {
// //   if (arr[i] > largest) {
// //     secondLargest = largest;
// //     largest = arr[i];
// //   } else if (arr[i] > secondLargest && arr[i] !== largest) {
// //     secondLargest = arr[i];
// //   }
// // }
// // console.log(secondLargest);

// // // 2. even number divisible by 3 and find average

// // let array = [2,3,4,6,8,11,12]
// // let avg = 0
// // let count = 0
// // let sum = 0
// // for ( i = 0 ; i < array.length ; i++){
// //     if(array[i]%2 == 0 && array[i]%3 == 0){
// //         count ++
// //         sum = sum + array[i]
// //     }
// // }
// //     avg = sum/count
// //     console.log(avg);

// // interchange even numbers and odd numbers

// // let nums = [1,2,3,4]

// //     for(let i = 0 ; i < nums.length-1 ; i++){
// //         for(let j = 0 ; j < nums.length ; j++){
// //             if( nums[i]%2 == 0 && nums[j]%2 == 0 || nums[i]%2 == 1 && nums[j]%2 == 1){
// //                 temp = nums[i]
// //                 nums[i] = nums[j]
// //                 nums[j] = temp
// //             }

// //     }
// // }
// // console.log(nums);

// // if the sum of array is even find the sum of all odd numbers in array and vice versa

// // let sum = 0
// // let array=[1,2,3,4,5,6,7]
// // countOfEven = 0
// // countOfOdd = 0
// // let sumOfEven = 0
// // let sumOfOdd = 0
// // function sumOfArray(array){
// //   for(i=0;i<array.length;i++){
// //     if(array[i]%2==0){
// //       countOfEven++
// //       sumOfEven = sumOfEven + array[i]
// //     }else{
// //       countOfOdd++
// //       sumOfOdd =sumOfOdd + array[i]
// //     }
// //     sum = sum + array[i]
// //   }
// //   avgOfEven = sumOfEven/countOfEven
// //   avgOfOdd = sumOfOdd/countOfOdd
// //   if(sum%2===0){
// //     return avgOfOdd
// //   }else{
// //     return avgOfEven
// //   }
// // }

// // console.log(sumOfArray(array));

// // let array1=[1,2,3,4,5,6]
// // let array2=[1,2,3,4,5,6]

// // for( i = 0 ; i < array1.length ; i++){
// //     for( j = 0 ; j< array2[array1.length-1-i] ; j++){
// //         console.log(array1[i]);
// //     }
// // }

// let largest = 0 ;
// let secondlargest=0;
// let position = 0;
// let m = 0
// let nums = [1,5,3,4,2]
// let flag = 0;

// for(let i = 0 ; i < nums.length ; i++){
//     if(nums[i] > largest) {
//         largest = nums[i];
//         position = i;
//     }
// }
// for(let i = 0; i < nums.length; i++) {
//     if(largest/2 <= nums[i]){
//         flag = 1;
//         break;
//     }
// }

// if(flag) {
//     console.log(position);
// }else {
//     console.log(-1);
// }

// let a = 10
// let b = 20
// let sum = a+b
// console.log(sum);
// const first = [1,2,3]
// const second = [4,5,6]
// const array = [...first,...second]
// console.log(array);

// const f1 = [
//   { fruit: "apple", quantity: 10, colors: ["red", "green"] },
//   { fruit: "orange", quantity: 12, colors: ["orange"]},
//   { fruit: "strawberry", quantity: 5, colors: ["yellow", "green"] },
//   { fruit: "guava", quantity: 8, colors: ["pink", "yellow"] }
// ];

// const f2 = [
//     { fruit: "grape", quantity: 10, colors: ["violet"] },
//     { fruit: "avocado", quantity: 12, colors: ["orange"]},
//     { fruit: "jackfruit", quantity: 5, colors: ["green"] }
//   ];
// const f3 = [...f1,...f2]
// console.log(f3);
// let colors
// let newArray = []
// let yellow = f3.forEach((data) => {
//     colors =  data.colors.filter((col) => {
//         if(col === "yellow") {
//             newArray.push(data)
//         }
//     }) 
//     // console.log(colors);
// })

// console.log(newArray);
// let green = f3.reduce((acc,item)=>{
//    item.colors.forEach((itm) => {
//     if(itm === "green") {
//         acc += item.quantity;
//     }
// })
// return acc
// },0)
// console.log(green);
// const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
// fruits.splice(1,3,5,'b','c')
// console.log(fruits);

// 1.Create a new array containing books written by 'George Orwell' using the filter() method.
//   const newArray = books.filter(item =>item.author == "George Orwell")
//   console.log(newArray);

// 2. Create a new array that contains the titles of all the books in uppercase using the map() method.
//   const newArray = books.map(items=>
//     items.title.toUpperCase())
//   console.log(newArray);

// 3. Calculate and display the average rating of all the books using the reduce() method.
//   const totalRating = books.reduce((acc,book) => acc + book.rating,0)
//   averageRating = totalRating/books.length
//   console.log(averageRating);

// 4. Find and display the book with the title 'To Kill a Mockingbird' using the find() method.

    // const value = books.find(book=>book.title === 'To Kill a Mockingbird')
    // console.log(value);

    // 5. Create a new array containing books published after the year 2000 using the filter() method.
    // const value = books.filter(book => book.year < 2000)
    // console.log(value);
    
    // 6. Sort the books by rating in descending order using the sort() method.
    //  const sortedArray = books.sort((a,b)=>b.rating-a.rating)
    //  console.log(sortedArray);
    
    // 7. Create a new array containing books with a rating greater than 4.5 using the filter() method.
        // const value = books.filter(book => book.rating > 4.5)
        // console.log(value);

// 8. Calculate and display the total number of pages of all the books in the list. Assume each book has 300 pages.
// const pages = books.length * 300
// console.log(pages);

// 9. Create an object where the keys are author names, and the values are arrays of books written by each author.
// let obj = {};
    // const names = books.map(book=>{
    //     if(!obj[book.author]){
    //         obj[book.author] = []
    //     }
    //     obj[book.author].push(book.title)
    // })
    // console.log(obj);
    
// 10. Find and display the book with the earliest publication year using the reduce() method.
// const publication = books.reduce((earliest,current)=>{
    //     if(current.year < earliest.year){
        //         return current
        //     }
        //     else{
            //         return earliest
    //     }

    // },books[0])
    
    // console.log(publication);

    // let multiply = function (x){
        //     return function(y){
    //         console.log(x*y);
    //     }
    // }
    
    // let multiplyByTwo = multiply(3)
    // multiplyByTwo(3)


    // function* hello(){
    //     yield "hello there"
    //     yield "hello ty"
    // }

    // const hi = hello()
    // console.log(hi.next());
    // console.log(hi.next());
    // console.log(hi.next());

    // const person = {
        //     name: 'Alice',
    //     address: {
        //       street: '123 Main St',
        //     },
        //   };
        
        //   const street = person.address?.street;
        //   const city = person.address?.city;
        //   if(city){
    //     console.log("truee");
    //   }else{
    //     console.log('false');
    //   }
    // function add(a, b) {
    //      a + b;
    //     a++
    //     return a+b
    //   }
    // function sum(a,b) {
        //     return (`${this.name} is from ${this.place} ${a+b}`)
    //   }
    
    //   const numbers = {name:"anirudh",place:"kzhkd"}
    
    //   const result = sum.apply(numbers,[3,4]); 
    //   console.log(result); 
    
    // const obj = { a: 1, b: 2, c: 3 };
    // const obj1 = [1,2,3] 
    
    // for (const key in obj) {
    //   console.log(obj[key]); // Outputs: 'a', 'b', 'c'
    // //   console.log(obj[key]); // Outputs: 1, 2, 3
    // }
    // Creating an object
    // const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     introduce: function() {
//         console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
//         return this; // Returning 'this' object to enable method chaining
//     },
//     celebrateBirthday: function() {
    //         this.age++;
    //         return this; // Returning 'this' object to enable method chaining
    //     }
// };

// // Using method chaining
// person.introduce().celebrateBirthday().introduce();
// const result = 5 << 3; // 0101 << 2 = 010100 (20 in decimal)
// console.log(result);
// const result = 5 >> 3; // 010100 >> 2 = 0001 (1 in decimal)
// console.log(result);

// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, rating: 4.2 },
//     { title: 'The Catcher', author: 'J.D. Salinger', year: 1951, rating: 4.2 },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, rating: 4.5 },
//     { title: '1984', author: 'George Orwell', year: 1949, rating: 4.7 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, rating: 4.3 },
//     { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, rating: 4.6 },
//   ];

// var value = 0
//  books.forEach(item=> value = value + item.rating)

// console.log(value);

  
// function fetchdata(callback){
//     setTimeout(()=>{
//         const data = { name:"anirudh",age:21}
//         callback(data)
//     },4000)
// }

// function printing(user){
//     console.log(`username:${user.name} ,age:${user.age}`);
// }

// fetchdata(printing)

// const myPromise = new Promise((resolve,reject)=>{
//     const data = "anirudh"
//     resolve(data)
// })


// myPromise
// .then((data)=>{
//     console.log(data);
// })
// const arr = [7, 4, 9, 2, 3, 6];

// for (const num of arr) {
//     for (let i = 0; i < num; i++) {
//         console.log(num[arr]);
//     }
// }

var maximum69Number  = function(num) {
    let val = String(num)
    let newVal = val.split('')
    for(let i = 0 ; i < newVal.length ; i++){
        if(newVal[i] === "9"){
            continue
        }
        else{
            console.log(i,"hr");
            newVal[i]=9
            break;
        }
    }

    let newString = newVal.join('')
    let newNumber = Number(newString)
    return newNumber

};

console.log(maximum69Number(9669))