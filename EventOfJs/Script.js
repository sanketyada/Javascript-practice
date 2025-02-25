let nature=document.getElementById("nature")
nature.addEventListener('click',(e)=>{
    // console.log(e)
    // console.log(e.type)//click
    // console.log(e.timeStamp) 
    
    //mostly used Events are//
    //type.timestamp,defaultPrevented
    //target,toElement,srcElement,currentTarget
    //clientX.clientY ,screenX,screenY
    //altkey,ctrlkey,shiftkey,keycode
});


//Event Propagation//
// nature.addEventListener('click',(e)=>{
//     console.log(e)
// },false)

//Here we can pass 3rd variable true or false
//false for--->event Bubbleing  Default
//true for--->event Captureing

//Example
//select ul of images
// let ul=document.getElementById('ullist')
// ul.addEventListener('click',(e)=>{
//     console.log("Clicked inside ul")
// })

// //select a photo of ul list
// let car=document.getElementById('car')
// car.addEventListener('click',()=>{
//     console.log("Clicked on Car Photo")
// })

//Here we will see 
//1st Executed --> Clicked on Car Photo
//2nd Executed --> Clicked inside ul


// After Setting Ture 3rd parameter
// let ul2=document.getElementById('ullist')
// ul2.addEventListener('click',(e)=>{
//     console.log("Clicked inside ul")
// },true)

// //select a photo of ul list
// let car2=document.getElementById('car')
// car2.addEventListener('click',()=>{
//     console.log("Clicked on Car Photo")
// },true)

//1st Executed --> Clicked inside ul
//2nd Executed -->Clicked on Car Photo

//1st senarion prpagating toward outside img->li->ul->show on
//2nd senarion prpagating toward inside body->ul->li->img

//To stop propagation
// let ul3=document.getElementById('ullist')
// ul3.addEventListener('click',(e)=>{
//     console.log("Clicked inside ul")
   
// },false)

// //select a photo of ul list
// let car3=document.getElementById('car')
// car3.addEventListener('click',(e)=>{
//     console.log("Clicked on Car Photo")
//     e.stopPropagation()
// },false)


//preventDefault

let ullist=document.getElementById('ullist')
let ullist1=document.querySelector('#ullist')
ullist.addEventListener('click',(e)=>{
    console.log(e.target.parentNode)
})

let google=document.querySelector('#google')
console.log(google)
google.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Sanket")
})