//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
// Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
// untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
// tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here

// ---------------------------------------
console.log("Soal 1");
console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);
console.log(" ");

// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
// Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
// Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// tersebut!

let word1 = "wow JavaScript is so cool";
let exampleFirstWord = word1[0] + word1[1] + word1[2];
let exampleSecondWord =
  word1[3] +
  word1[4] +
  word1[5] +
  word1[6] +
  word1[7] +
  word1[8] +
  word1[9] +
  word1[10] +
  word1[11] +
  word1[12] +
  word1[13] +
  word1[14];
let exampleThirdWord = word1[15] + word1[16] + word1[17];
let exampleFourthWord = word1[18] + word1[19] + word1[20];
let exampleFifthWord = word1[21] + word1[22] + word1[23] + word1[24];

console.log("Soal 2");
console.log("First Word: " + exampleFirstWord);

// ---------------------------------------
console.log("Second word: " + exampleSecondWord);
console.log("Third word: " + exampleThirdWord);
console.log("Fourth word: " + exampleFourthWord);
console.log("Fifth word: " + exampleFifthWord);
console.log(
  exampleFirstWord +
    exampleSecondWord +
    exampleThirdWord +
    exampleFourthWord +
    exampleFifthWord
);
console.log(" ");
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord1 = word2.substring(0, 3);
let exampleSecondWord1 = word2.substring(4, 14);
let exampleThirdWord1 = word2.substring(15, 17);
let exampleFourthWord1 = word2.substring(18, 20);
let exampleFifthWord1 = word2.substring(21, 25);

console.log("Soal 3");
console.log("First Word: " + exampleFirstWord1);

// ---------------------------------------
console.log("Second word: " + exampleSecondWord1);
console.log("Third word: " + exampleThirdWord1);
console.log("Fourth word: " + exampleFourthWord1);
console.log("Fifth word: " + exampleFifthWord1);
console.log(
  exampleFirstWord1 +
    " " +
    exampleSecondWord1 +
    " " +
    exampleThirdWord1 +
    " " +
    exampleFourthWord1 +
    " " +
    exampleFifthWord1
);
console.log(" ");
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord2 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord2.length;

let exampleSecondWord2 = word4.substring(4, 14);

let secondWordLength = exampleSecondWord2.length;

let exampleThirdWord2 = word4.substring(15, 17);

let thirdWordLength = exampleThirdWord2.length;

let exampleFourthWord2 = word4.substring(18, 20);

let fourthWordLength = exampleFourthWord2.length;

let exampleFifthWord2 = word4.substring(21, 25);

let fifthWordLength = exampleFifthWord2.length;

console.log("Soal 4");
console.log(
  "First Word: " + exampleFirstWord + ", with length: " + firstWordLength
);

// ---------------------------------------
console.log(
  "Second word: " + exampleSecondWord1 + ", with length: " + secondWordLength
);
console.log(
  "Third word: " + exampleThirdWord1 + ", with length: " + thirdWordLength
);
console.log(
  "Fourth word: " + exampleFourthWord1 + ", with length: " + fourthWordLength
);
console.log(
  "Fifth word: " + exampleFifthWord1 + ", with length: " + fifthWordLength
);
console.log(
  exampleFirstWord1 +
    " " +
    exampleSecondWord1 +
    " " +
    exampleThirdWord1 +
    " " +
    exampleFourthWord1 +
    " " +
    exampleFifthWord1
);
// ---------------------------------------
