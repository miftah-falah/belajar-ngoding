//cara membuat variable
var a = "a";
let b = "b";
const c = "c";

//variable bila menampung tipe data string (text), integer/number, boolean, array, object.

let nama = "bryan"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5; //number namun ada koma

//oprator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, "pertambahan");
console.log(angka1 - angka2, "pengurangan");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 % angka2, "modulus");

let penampupngHasilOpratorAritmatika = angka1 + angka2;
console.log(penampupngHasilOpratorAritmatika); // 30

penampupngHasilOpratorAritmatika = angka1 - angka2;
console.log(penampupngHasilOpratorAritmatika); // -10

penampupngHasilOpratorAritmatika = angka1 / angka2;
console.log(penampupngHasilOpratorAritmatika); // 0.5

penampupngHasilOpratorAritmatika = angka1 * angka2;
console.log(penampupngHasilOpratorAritmatika); // 200

penampupngHasilOpratorAritmatika = angka1 % angka2;
console.log(penampupngHasilOpratorAritmatika); // 10

//string juga bisa ditambah namun string ga bisa dikurang dengan oprator aritmatika
let firstname = "Miftakhul";
let lastname = "Falah";
let fullname = firstname + " " + lastname;
console.log(fullname);
console.log(firstname + " " + lastname);

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10
number = true;
console.log(number + 10); //11
//pertanyaan? kenapa false + 10 tetap menjadi 10??? karena false = 0, dan true = 1.

//membaca error
//error itu jangan kalian takut, justru kalian harus takut kalau tidak ada yang namanya error dalam pemrograman
//karena dalam pekerjaadn suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programer rada
//muak buat mencari errornya atau letak kesalahannya

//contoh error
const hewan = "jerapah";
console.log(hewan);
hewan = "buaya";

//tipsnya adalah, selalu teliti, dan kalai error dibaca aja, dan beljar ngoding itu perlu kebiasaan
//karena ngoding itu adalah habit
