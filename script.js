//my logic======>  (half working)
// const input = document.querySelector('#input')

// input.addEventListener('input', (e) => {
// let regEx = /^\d*$/;
//     if (!regEx.test(input.value)) {
//         input.value = input.value.replace(/\D/g, '')
//     } else {

//         let firstThreeNum = input.value.slice(0, 3)
//         if (input.value.length > 3) {
//             let final = `+ (${firstThreeNum}) - ` + `${input.value.slice(3, input.value.length)}`
//             input.value = final
//         } else {
//             // let remainingNum = 
//         }

//     }
// })


//Expert logic/code (procdr)====>
const input = document.querySelector('#input')


let prevValue = ''
let firstThreeNum = ''

let regEx = /\d+$/;
input.addEventListener('input', (e) => {
    let inputValue = e.target.value
    if (!regEx.test(inputValue)) {
        input.value = inputValue.replace(/\D/g, '')
    } else {
        if (inputValue.length === 4 && prevValue.length < inputValue.length) {
            firstThreeNum = inputValue.substring(0, 3) // here slice cam also work
            input.value = `+(${firstThreeNum}) - ${inputValue[inputValue.length - 1]}`
        } else if (inputValue.length === 9 && prevValue.length > inputValue.length) {
            input.value = firstThreeNum
        }
        prevValue = inputValue
        console.log(inputValue.length);
    }
})