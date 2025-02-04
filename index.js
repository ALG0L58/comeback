"use strict"

let elem = document.querySelector('.input')
let display = document.querySelector('.input')


let firstNumber = ''
let secondNumber = ''
let operator = ''
let finish = false

const numbers = [1,2,3,4,5,6,7,8,9,0]
const actions = ['+', '-', '/', '*']



elem.addEventListener('keyup', (e) => {
    if(numbers.includes(Number(e.key))) {

        if(secondNumber == '' && operator == '') {
            firstNumber += e.key
        } else if (firstNumber !== '' && secondNumber !== '' && finish) {
            secondNumber += e.key 
            finish = false

        } else if (firstNumber !== '' && operator !== '') {
            secondNumber += e.key
        }

    } else if (actions.includes(e.key)) {
        display.value = e.key
        operator = e.key   
    } 

    if (e.key == "Enter") {
        switch (operator) {
            case '+':
                firstNumber = Number(firstNumber) + Number(secondNumber)
                break
            case '-':
                firstNumber = Number(firstNumber) - Number(secondNumber)
                break
            case '/':
                firstNumber = Number(firstNumber) / Number(secondNumber)
                break
            case '*':
                firstNumber = Number(firstNumber) * Number(secondNumber)
                break
        }
        display.value = firstNumber
        secondNumber = ''
        finish = true
    }
})