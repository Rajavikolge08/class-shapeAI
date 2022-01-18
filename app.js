
let array = ["GO to the gym", "Eat Breakfast", "Study to the exam"]

const body = document.querySelector('body')

array.forEach((e, i) => {
    const ele = document.createElement('div')
    const text = document.createTextNode(e)
    ele.append(text)
    console.log(ele)
    body.appendChild(ele)


})


let elements = document.getElementsByClassName('temp')
let elements = document.querySelectorAll('temp')

let arr = [1, 2, 3, 4, 5]

console.log(elements)
console.log(arr)


for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = `Element ${i}`

}

elements.forEach((ele, i) => {
    ele.innerHTML = Element ${i} 
});
const body = document.querySelector('body')
console.log(body.children)
{ const node = document.createElement("div")
const textNode = document.createTextNode('This is dynamic element')
body.appendChild(node)
console.log(ele)
console.log(textNode)
body.appendChild(ele)
}

{
const tasks = ['go to the gym','take breakfast','take medicine','eat','sleep']

const ol = document.createElement('ol')

tasks.forEach(task => {
    const li = document.createElement("li")
    const textNode = document.createTextNode(task)
    li.appendChild(textNode)
    
    ol.appendChild(li)
})
console.log(ol)
body.appendChild(ol)
}

const button = document.querySelector('button')
const 

button.addEventListener('click', eventHandler)
//click button

const button = document.querySelector('button')

const bmw = (e) => {
    const ele = e.target
    ele.style = "background:red"
}

button.addEventListener('click', bmw)

button.addEventListener('dblclick', e => {
    e.target.style = "background:orange"
})

button.addEventListener('mouseover', e => {
    e.target.style = "background:pink"

})