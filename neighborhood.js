console.log(`Hello world!`)

const restButton = document.querySelector(`#rest-button`)

let restRec = [`Cheddar\'s`, `Chick-fil-A`, `Starbucks`]

let rec = () => {
    let recFormula = Math.floor(Math.random() * restRec.length)
    alert(`${restRec[recFormula]}`)
}

restButton.addEventListener(`click`, rec)