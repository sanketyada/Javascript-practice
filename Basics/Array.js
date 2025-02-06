let arr = new Array("Shaktiman","Ironman","rajkumar","Yakub")
//let arr = new Array["Shaktiman","Ironman","rajkumar"]
console.log(arr)

//Index
console.log(arr[1]);

arr.push("rajat");
console.log(`rajat pushed ${arr}`)
arr.pop()
console.log(`Rajat deleted ${arr}`)

arr.unshift("Rambachan");
console.log(`Rambachn added begining ${arr}`)

arr.shift()
console.log(`Rambachn deleted from begining ${arr}`)

console.log(arr.includes("rajkumar")) //-->true

console.log(arr.indexOf("rajkumar"));

let j=arr.join()
console.log(j)
console.log(typeof j)

console.log(arr.slice(0,2)) //ending index excluded

const k=arr.splice(0,2)
console.log(k) //ending index include

