const read=require('readline-sync')


var library = [ 
    {
        title:'The Road Ahead', 
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.map(obj =>{
    if(obj.readingStatus===true){
        console.log(`Already read ${obj.title} by ${obj.author}`);
    }
    else{
        console.log(`You still need to read ${obj.title} by ${obj.author}`);

    }

})
    



