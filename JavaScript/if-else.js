let nilai = 66;

// console.log(nilai >= 50); //tergantung si nilainya, hasilnya antara true atau false

if (nilai >= 50) {
  //true or false
  console.log("lulus");
} else if (nilai >= 40) {
  console.log("tidak lulus");
} else {
  console.log("tidak lulus ");
}

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai <= 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai <= 70) {
  nilai = "C";
} else {
  nilai = "D";
}

console.log(nilai);
nilai = 60;
//&& semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
//or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nil

let banding = nilai >= 80 && nilai <= 100; //antara true dan false
console.log(banding, "&&");
let banding1 = nilai >= 80 || nilai <= 100; //antara true dan false
console.log(banding1, "||");

//apa bedanya == dengan ===
let x = 50; //tipe data number
let y = "50"; //tipe data string

let banding2 = x == y;
console.log(banding2, "2");
let banding3 = x === y;
console.log(banding3, "3");

// if else ini bisa bikin bersarang loh
let number = 6;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil atau sama dengan dari 5 dan genap");
  } else {
    console.log("lebih kecil atau sama dengan dari 5 dan ganjil");
  }
}
