// no 1
let divisi = "HR"
let tugas

if (divisi == "HR"){
    tugas = "melakukan rekrutmen untuk calon pegawai baru"
} else if (divisi == "Software Engineer"){
    tugas = "merancang, mengembangkan, menguji, sampai debugging aplikasi perangkat lunak"
} else if (divisi == "Finance"){
    tugas = "mengelola uang dan investasi untuk individu, perusahaan, dan pemerintah"
}

console.log(`Divisi ${divisi} bertugas untuk ${tugas}`)

// no 2
let num1 = "angka"
let num2 = "mangga"

if (isNaN(num1) || isNaN(num2)){
    console.log(`Inputan anda harus angka`)
} else {
    if (num1 > num2){
        console.log(`${num1} lebih besar dari ${num2}`)
    } else if (num1 < num2){
        console.log(`${num1} lebih kecil dari ${num2}`)
    } else if (num1 === num2){
        console.log(`${num1} sama dengan ${num2}`)
    } else {
        console.log(`not valid`)
    }
}

// no 3
let x = 9
let hari

switch (x) {
    case 1 : {
        hari = "Minggu"
        break
    }
    case 2 : {
        hari = "Senin"
        break
    }
    case 3 : {
        hari = "Selasa"
        break
    }
    case 4 : {
        hari = "Rabu"
        break
    }
    case 5 : {
        hari = "Kamis"
        break
    }
    case 6 : {
        hari = "Jumat"
        break
    }
    case 7 : {
        hari = "Sabtu"
        break
    }
    default : {
        hari = "Tidak ditemukan"
        break
    }
}

console.log(`hari ini adalah hari ${hari}`)

// no 4
let arah = "UP"
let game

switch(arah.toUpperCase()){
    case "UP" : {
        game = "Karakter berjalan ke atas"
        break
    }
    case "RIGHT" : {
        game = "Karakter berjalan ke kanan"
        break
    }
    case "LEFT" : {
        game = "Karakter berjalan ke kiri"
        break
    }
    case "BOTTOM" : {
        game = "Karakter berjalan ke bawah"
        break
    }
    default : {
        game = "Invalid"
        break
    }
}

console.log(game)
