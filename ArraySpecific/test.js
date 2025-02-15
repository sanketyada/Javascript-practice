let arr=["Rajat","Sanket","Tanuja","Sekhpal"];


//For Each Does not repeat value
let returnedVal=arr.forEach((item)=>{
    return item;
})
console.log(returnedVal)

//you can But probably not used
let sampleArr=[];
let returnval=arr.forEach((item)=>{
    if(item){
        sampleArr.push(item);
    }
})
console.log(sampleArr)  //[ 'Rajat', 'Sanket', 'Tanuja', 'Sekhpal' ]

//Note::for returning values we will use filter and map method of Array.