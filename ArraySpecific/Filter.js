//since forEach does not return value so we will use filter and map method

// let arr=["Audi","Marcedes","Mahindara","Volvo","Innova"];

// // Explicit return
// let arr1=arr.filter((item)=>{
//     return item;
// })
// console.log(arr1)


// Implicit return
let array=[1,2,3,4,5,6]
let arr2=array.filter((val)=>val )
console.log(arr2)



//Practice On Filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//asking for all Book of history
let filt=books.filter((val)=>val.genre=="History") 
// console.log(filt)
//asking for all After 1990
let filt1=books.filter((val)=>val.publish>1990)
// console.log(filt1);

//*******************Note***************************/
//asking for all title of books
let booktitle=books.filter((bk)=>bk.title) //output----> nothing ,because filter shows only truthy value (matalb kucch 
//compair hokar true aaya ho jaise upar do me compair kia gya hai)