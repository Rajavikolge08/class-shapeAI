JSON
//literal notation to create an object
const obj = {
age: 18,
brand: 'mercedes',
greet: () => {console.log('hi') },
getBrand: () => {console.log(obj.brand) }
}

console.log(obj.brand)
console.log(obj.age)
obj.greet()

obj.getBrand()*/


console.log(this)
console.log(window)

//literal notation to create an object
const car = {
    age: 4,
    brand: 'mercedes',
    
    getBrand: function()  {console.log(this.brand) }
    }

car.getBrand()


console.log(window.innerWidth)
console.log(window.innerHeight)

window.alert('this is an alert')
window.prompt("This is your password")
console.log(`i'm console log`)
console.warn(`i'm console log`)
console.error(`i'm console log`)
console.log(typeof console)


//creatig an array
let arr = [1,2,3,4,'hii','hello',{age: 10},[4,5,6,7]]
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr[7])


for (let i =0; i < arr.length; i++)
{
    console.log(arr[i])
    
}
let j = 0
while ( j < arr.length; i++)
{
    console.log(arr[j])
    j++
    
}

let arr = [1,2,3,4,45,5,6]
let iter = 0
const callback = function (){
    iter++
console.log('you called me',iter)
}
arr.forEach(() => {
    console.log('you called me')
})


let arr = [1,2,3,4,45,5,6]

const callback = function ( iteration, element){
  
console.log(iteration, element )
}
arr.forEach(callback)

let arr = [1,2,3,4,45,5,6]
arr.forEach((e, i) => console.log(e, i))
console.log(arr.push(4)) // to add last(end) of the array
console.log(arr)
console.log(arr.length)
arr.unshift(9) // to add first element
console.log(arr.pop()) // to delete array element
console.log(arr.slice(3, 5)) // to write specific array range means (i.e 3 to 6)
const callback = (ele, i) => {
//return true
return ele * 12
}
console.log(arr.map(callback))
const new_arr = arr.map(callback)
console.log(arr.forEach(callback))
console.log(new_arr)




