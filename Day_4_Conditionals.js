// Egzersiz Level1 - 1
/*Get user input using prompt(“Enter your age:”). If user is 18 or older 
, give feedback:'You are old enough to drive' but if not 18 give another
 feedback stating to wait for the number of years he neds to turn 18.*/

let a=prompt('Lütfen yaşınızı giriniz')
let aa= parseInt(a)
switch(true) {
    case aa<18 :
console.log(`Henüz ehliyet almanıza ${18-aa} yaş var`)
break
    case aa>=18:
console.log('Ehliyet alabilirsiniz')
break
    default:
console.log('Lütfen yaşınızı giriniz!') }

// Egzersiz Level1 - 2
/*Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you).
 Use prompt(“Enter your age:”) to get the age as input.
*/
let a=prompt('Emre\'nin yaşını giriniz:'), b=prompt('Ahmet\'in yaşını giriniz:')
let aa=parseInt(a), bb=parseInt(b)

if (aa>bb) {
console.log(`Emre, Enes'ten ${aa-bb} yaş büyük.`)
} else if (aa<bb) { 
console.log(`Emre, Enes'ten ${bb-aa} yaş küçük.`)
} else if (aa==bb) {
console.log('Emre ile Enes yaşıt!')
} else {
console.log('Hatalı giriş yaptınız!')
}
// Egzersiz Level1 - 3
/* If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways
 - using if else
 - ternary operator.*/
let aa= prompt('İlk sayıyı giriniz'), bb=prompt('İkinci sayıyı giriniz')
let a=parseInt(aa), b=parseInt(bb)
if (a<b) {
console.log(`${b} sayısı, ${a} sayısından büyük!`)
} else if (a>b){
console.log(`${a} sayısı, ${b} sayısından büyük!`)
} else if (a==b) {
console.log(`${a} sayısı, ${b} sayısına EŞİT!!`)
}    else    {
console.log('Lütfen iki değerede \'SAYI\' giriniz!!') }
// Egzersiz Level1 - 4
/* Even numbers are divisible by 2 and the remainder is zero.
 How do you check, if a number is even or not using JavaScript?
*/
let aa=prompt('Bir sayı giriniz')
let a=parseInt(aa)
if (a % 2 == 0) {
console.log('Girdiğiniz sayı ÇİFT sayıdır!')
} else if (a % 2 !==0) {
console.log('Girdiğiniz sayı TEK sayıdır!')
} else { console.log('Lütfen SAYI giriniz!') }
// Egzersiz Level2 - 1
/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let aa=prompt('100 üzerinden notunuzu giriniz!'), a=parseInt(aa)
if (a>=80 && a<=100) {
console.log('Harf notunuz : A') }
else if (a>=69 && a<=79) {
console.log('Harf notunuz : B') }
else if (a>=59 && a<=69) {
console.log('Harf notunuz : C') }
else if (a>=50 && a<=59) {
console.log('Harf notunuz : D') }
else if (a>=0 && a<=49) {
console.log('Harf notunuz : F') }
else {
console.log('Lütfen 0 ila 100 arası bir sayı giriniz!!') }
// Egzersiz Level2 - 2
/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
aa=prompt('Olduğunuz ayı giriniz!')
let a= aa.toLowerCase()
if (a=='ocak' || a=='şubat' || a=='aralık')
{ console.log('Kış ayındasınız.') }
else if (a=='mart' || a=='nisan' || a=='mayıs')
{console.log('İlkbahar ayındasınız.') }
else if (a=='haziran' || a=='temmuz' || a=='ağustos')
{console.log('Yaz ayındasınız.')}
else if (a=='eylül' || a=='ekim' || a=='kasım')
{console.log('Sonbahar ayındasınız.')}
else { console.log('Lütfen olduğunuz ayı büyük/küçük harf farketmezsizin giriniz!') }
// Egzersiz Level2 - 3
/*Check if a day is weekend day or a working day. 
Your script will take day as an input.
*/
let aa=prompt('Haftanın gününü giriniz:'), a=aa.toLowerCase()
if (a=='pazartesi' || a=='salı' || a=='çarşamba' || a=='perşembe' || a=='cuma')
{ console.log('Haftaiçindesiniz! Çalışmaya devam edin :\\') }
else if (a=='cumartesi' || a=='pazar' )
 {console.log('Haftasonundasınız! İyi Tatiller!' ) }
else { console.log('Geçerli bir gün girmediniz!') }
// Egzersiz Level3 - 1
/*Write a program which tells the number of days in a month.*/
let aa=prompt('Hangi ayda olduğunuzu giriniz:'), a=aa.toLowerCase()
if (a=='nisan'||a=='haziran'||a=='eylül'||a=='kasım')
{console.log(`${a} ayı 30 güne sahiptir.`) }
else if (a=='ocak'||a=='mart'||a=='mayıs'||a=='temmuz'||a=='ağustos'||a=='ekim'||a=='aralık')
         {console.log(`${a} ayı 31 güne sahiptir.`) }
else if (a=='şubat')
{console.log('Şubat ayı 28 gündür.')}
else {console.log('Lütfen içinde bulunduğunuz ayı giriniz!') }