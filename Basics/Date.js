let date = new Date()
console.log(typeof date)

// console.log(date)
// console.log(date.toDateString())
// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.getFullYear())
// console.log(date.toLocaleString())
// console.log(date.toJSON())

let g=date.toLocaleDateString('default',{
    day:'2-digit',
    weekday:'long',
    month:'long',
    year:'numeric'
})
console.log(g)

// Declaring own date // 0-->January
console.log("**************************************");
//(year,month,date,hour,minute)
let newdate = new Date('2023','0','12','5','34'); //here 0-->january
// console.log(newdate)
// console.log(newdate.toDateString())
// console.log(newdate.toString())
// console.log(newdate.toISOString())
// console.log(newdate.getFullYear())
// console.log(newdate.toLocaleString())
// console.log(newdate.toJSON())

let date2 = new Date('2023-1-12')  //here 1-->january
console.log(date2)
// console.log(newdate.toDateString())
// console.log(newdate.toString())
// console.log(newdate.toISOString())
// console.log(newdate.getFullYear())
// console.log(newdate.toLocaleString())
// console.log(newdate.toJSON())


/// Date.now() give value from  beginning of January 1, 1970,in millisecond.

let dates = Date.now()
console.log(dates) //give result in second from January 1, 1970 to today

console.log(newdate.getTime()) // from '2023-1-12' time in milisecond

//Change in Second
console.log(dates/1000) //1738821796.793 second
console.log(Math.floor(dates/1000)) //1738821848 Exact in second