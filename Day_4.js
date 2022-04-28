// Egzersiz Level1 - 1
/*Get user input using prompt(“Enter your age:”). If user is 18 or older 
, give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.*/

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