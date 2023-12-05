let addLK = document.querySelector('#add-1')
let addFlash = document.querySelector('#add-2')
let addDS = document.querySelector('#add-3')
let addOP = document.querySelector('#add-4')
let addTM = document.querySelector('#add-5')
let addTMK = document.querySelector('#add-6')
let addNaruto = document.querySelector('#add-7')
let addAOT = document.querySelector('#add-8')
let addYN = document.querySelector('#add-9')
let addBD = document.querySelector('#add-10')
let addED = document.querySelector('#add-11')
let addCRA = document.querySelector('#add-12')
let userInput = document.querySelector('#userInput')
let searchBtn = document.querySelector('#searchBtn')
let sortBtn = document.querySelector('#sortBtn')
let output = document.querySelector('#about-section')

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (userInput.value === 0) {
        alert('Results Not Found 😟')
    }
})

sortBtn.addEventListener("click", ()=>{
    movieList.forEach(function (index, item) {
        
    })
})