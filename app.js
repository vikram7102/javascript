const buttun =document.querySelector('button')
const body =document.querySelector('body')

// console.log(buttun,element)
buttun.addEventListener('click',() =>{
    // console.log('you clicked me')
    body.classList.toggle('dark')
})