let arr=["Vrindavan","Varanshi","Uttarkhand","Ujjain","Jammu and kashmir"]

// let val=arr.map((item)=>{
//     return item;
// })
// console.log(val)

let val=arr.map((item)=>item+1).map((item)=>item+" ke Prabhu")
// console.log(val);

//Practice map prototype on Object inside Array
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

  let result=books.map((item)=>item.genre)
  console.log(result) ///it is not possible in filter becz that print only truthy value