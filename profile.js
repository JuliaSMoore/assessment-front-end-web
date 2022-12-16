console.log(`Hello world!`)

let color = document.querySelector(`#color`)
let place = document.querySelector(`#place`)
let food = document.querySelector(`#food`)

color.addEventListener(`click`, () => {
    alert(`My favorite color is purple!`)
})

place.addEventListener(`click`, () => {
    alert(`My favorite place is Saint Petersburg!`)
})

food.addEventListener(`click`, () => {
    alert(`My favorite food is pizza!`)
})