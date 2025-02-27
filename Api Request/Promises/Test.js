// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let condition=true
//         if(condition){
//             resolve({name:'Sanket',age:21});
//         }else{
//             reject("Error: Something Went wrong");
//         }
        
//     },2000)
// })
//Using .then .catch and .finally  Type 1
// .then((user)=>{
//     console.log(user);
//     return user.name;
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("The Whole process get Compleated");
// })



//using async await method Type 2

// let myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let condition=false
//         if(condition){
//             resolve({name:'Sanket',age:21});
//         }else{
//             reject("Error: Something Went wrong");
//         }
        
//     },2000)
// })



// async function ResolvePromise(){
//     try{
//         let Resolve =await myPromise
//         console.log(Resolve)
//     }
//     catch(err){
//         console.log(err)
//     }

// }
// ResolvePromise();

fetch('https://api.github.com/users/sanketyada')