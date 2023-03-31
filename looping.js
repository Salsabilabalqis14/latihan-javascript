// no 1
let user = 100

for(let i = 1; i <= user; i++){
    document.write(`User ke-${i} <br>`)
}


// no 2
let nilai = 0

for(let i = 1; i <= 10; i++){
    console.log(`Hasil penambahan ke-${i} adalah ${nilai += 2}`)
}


// no 3
for(let i = 0; i <= 20; i++){
    if (i === 0){
        console.log(`0 adalah bilangan netral`)
    } else if (i % 2 === 0){
        console.log(`${i} adalah bilangan genap`)
    } else {
        console.log(`${i} adalah bilangan ganjil`)
    }
}


// no 4
let looping = 0

while(confirm("Apakah anda mau mengulang?")){
    looping++
}

console.log(`Perulangan sudah dilakukan sebanyak ${looping}`)


// no 5

let correctAnswer = "Impact Byte"
let userAnswer

do{
    userAnswer = prompt("Sebutkan kepanjangan dari nama IB?")
} while(userAnswer !== correctAnswer)

alert('Selamat jawaban kamu benar')