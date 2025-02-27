// //Example 1
// let Fatch=fetch('https://api.github.com/users/sanketyada')
// Fatch.then((res)=>{
    
// })
// .catch((err)=>{
//     console.log("Error")
// })

//Example 2
// fetch('https://api.github.com/users/sanketyada')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
//     console.log(data.login)
// })
// .catch((err)=>{
//     console.log("Error Found")
// })

//Example 3 (with async await)

async function ResolvePromise(){
    try{
        let response = await fetch('https://api.github.com/users/sanketyada')
        let data= await response.json()
        console.log(data)
    }
    catch(err){
        console.log("Error:"+err)
    }
}
ResolvePromise();