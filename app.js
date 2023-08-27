const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('==========================')
console.log('Calculator Console by Arva')
console.log('==========================')

rl.question('Masukkan angka pertama : ', (number1) => {
   rl.question('Masukkan angka kedua : ', (number2) => {
    console.log('==========================')
    console.log('operasi : ')
    console.log('1. penjumlahan')
    console.log('2. pengurangan')
    console.log('3. perkalian')
    console.log('4. pembagian')
    console.log('==========================')
    rl.question('masukkan operasi : ', (operasi) => {
        console.log('==========================')
        if(operasi == 1){
            let hasil = parseInt(number1) + parseInt(number2)
            console.log(`${number1} + ${number2} = ${hasil}`)
        }else if(operasi == 2){
            let hasil = parseInt(number1) - parseInt(number2)
            console.log(`${number1} - ${number2} = ${hasil}`)
        }else if(operasi == 3){
            let hasil = parseInt(number1) * parseInt(number2)
            console.log(`${number1} x ${number2} = ${hasil}`)
        }else if(operasi == 4){
            let hasil = parseInt(number1) / parseInt(number2)
            console.log(`${number1} / ${number2} = ${hasil}`)
        }
        console.log('==========================')
        console.log('Thank you')
        rl.close()
    })
   })
})