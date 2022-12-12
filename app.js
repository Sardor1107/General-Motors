let form = document.querySelector('.form')
let btn = document.querySelector('.btn')
let rasm = document.querySelector('.rasm')
let nomi = document.querySelector('.nomi')
let narxi = document.querySelector('.narxi')
let rangi = document.querySelector('.rangi')
let box = document.querySelector('.box')
let canvas = document.querySelector('.canvas')


btn.addEventListener('click', ()=>{
    canvas.classList.toggle('hidden')
})
let cars = []
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    canvas.classList.toggle('hidden')
    let car = {
        id:Math.random(),
        img:rasm.value,
        name:nomi.value,
        price:narxi.value,
        color:rangi.value
    }
    cars.push(car)
    rasm.value = ''
    nomi.value = ''
    narxi.value = ''
    rangi.value = ''
    render(cars)    

    
})
function delet (id) {
    let newcars = cars.filter(item => {
        return item.id !== id
    })
    cars = newcars
    render(cars)
    
}


function render(cars){
    box.innerHTML = " "
    cars.forEach(mashina =>{
        let card = document.createElement("div")
    card.classList.add('wrap')
    card.innerHTML = `
    <img src="${mashina.img}" alt="car foto" width="300" height="200">
    <div class="card__body">
        <h4 class="card__title">${mashina.name}</h4>
        <p class="price">${mashina.price} $</p>
        <p class="color">${mashina.color}</p>
        <button class="delet__btn" onclick="delet(${mashina.id})">Delete</button>
    </div>
    `
    box.append(card)
    })
}   