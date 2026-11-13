//primitive

//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scorevalue=188.9

const login= false
const outsidetemp=null




//Reference Type(Non Primitive)

//Array ,Objects,Functions

const heros=["superman","spiderman","batman"];

let myobj={
    name:"abhi",
    age:18,
}

const ufunction=  function(){
   console.log("hello world");
}
console.log(typeof heros)

// memory-------------------------
// Stack(use in Primitive type) and Heap(use in non-Primitive type)

let abhi="abhirajawatcom"

let anothername= abhi
anothername="NDA and IMA"
console.log(abhi)
console.log(anothername)


let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.upi="rajawat@ubl"

console.log(userone);
console.log(usertwo);

