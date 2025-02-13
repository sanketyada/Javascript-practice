//for in looping

const myobj={
    name:"Radha Kishori ji",
    Address:"vrindavan",
    Qualification:"Supream Teacher"
}
//we know two methood for fatching Object Values ,Here it can--
//1.  myobj.name  -->Radha Kishori ji
//2.  myobj[name]  ->Radha Kishori ji

//for keys
for(let n in myobj){
    console.log(n)
}
//for value  (2nd methood appling here)
for(let n in myobj){
    console.log(myobj[n])
}