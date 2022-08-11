// alert('hello');                             1. qo`shimcha oyna ko`rinishida chiqadi.
// document.write('<h2> hello</h2>  <hr>');    2. ekranga oddiy chiqarish.
// console.log('hello');                       3.  consoleni oynaga chiqarishimiz.
// confirm('uzbekistoning poytahti toshkent');  4. true yoki falseni qaytaradi.
// alert('Hello'); alert('World');

// var name1 = 'Shahriyor';

// var num = +prompt('birinchi sonni kiriting');
// var num2 = +prompt('ikkinchi sonni kiriting');

// document.write(num + num2);


// //Olma
// var olmaKg = 2;
// var olmaBirKgNarxi = 7000;
// var olmaHisob = olmaKg * olmaBirKgNarxi;

// // Nok
// var nokKg = 5;
// var nokBirKgNarxi = 8000;
// var nokHisob = nokKg * nokBirKgNarxi;

// // Gilos
// var glosKg = 3;
// var glosBirKgNarxi = 5000;
// var glosHisob = glosKg * glosBirKgNarxi;

// // hisob 
// var umumiyHisob = olmaHisob + nokHisob + glosHisob;

// document.write(umumiyHisob);

// var name = 'shahriyor';
// name = 'shahriyor Xudoyorov';

// document.write(name);

// const name = 'SHahriyor';
// // name = 'ism';

// console.log(name);

// var a = +prompt('birinchi raqamni yozing.'); // 3
// var b = +prompt('ikkinchi raqamni yozing.'); // 2
// var c = +prompt('ikkinchi raqamni yozing.'); // 2



// if( a > b ){
//     document.write(a + b);
// }else if(a == b){
//     document.write('sonlar teng')
// }else if( a < b){
//     document.write('a kichik b dan')
// }
// else{
//     document.write(a * b);
// }


// var age = +prompt('yoshingiz neccida');
// // var name = 'Shahriyor';

// if( age <= 15 ){
//     document.write('yoshingiz kichik');
// }
// else if(age <= 40){
//     document.write('yoshingiz kotta')
// }


// var ju = +prompt('2-jahon urushi qachon boshlanga');


// if(isNaN(ju)) {
//     document.write('harif emas son yozing')
// }
// else if( ju > 1941){
//     document.write('urush tugadi Gitler oldi')
// }else if( ju < 1941){
//     document.write('urush hali boshlanmadi')
// }else{
//     document.write('topdingiz')
// }


var a = +prompt('birinchi raqamni kiriting'); // 4
var b = +prompt('ikkinchi raqamni kiriting'); // 7
var c = +prompt('uchunchi raqamni kiriting'); // 2 
var res;

if(a > b &&  a > c){
    res = a + ' a bu eng kotta raqam'
}else if(b > a && b > c){
    res = b + ' b bu eng kotta raqam';
}else {
    res = c + ' c bu eng kotta raqam'
}

document.write(res);
