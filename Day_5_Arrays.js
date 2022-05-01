//Egzersiz Level1 - 1
/* Get the first item, **the middle item** and the last item of the array*/
const a=[1,2,3,4,5,6,7,8,9,10,11,12,13]

let ab=a.length
console.log(`Dizi uzunluğu: ${ab}`)
if (ab % 2 == 0) {
let aba= a[(a.length)/2-1],ababa=a[(a.length)/2]
console.log(`${aba} ve ${ababa} ortadaki terimler.`) }
else { 
let abba= a[(a.length-1)/2]
console.log(`${abba} ortadaki terim.`) }
//Egzersiz Level1 - 21
/* Remove the middle IT company or companies from the array*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let a=itCompanies
let ab=a.length
console.log(`Dizi uzunluğu: ${ab}`)

if (ab % 2 == 0) {
let aba= a[(a.length)/2-1],ababa=a[(a.length)/2]
console.log(`${aba} ve ${ababa} ortadaki terimler.`) }

else { 
let abba= a[(a.length-1)/2]
console.log(`${abba} ortadaki terim.`)
let zxc= itCompanies.indexOf(abba)
let nit= itCompanies.splice(zxc,1)
console.log(itCompanies)                   }
//Egzersiz Level2 - 2
/* First remove all the punctuations and change the string to array and
 count the number of words in the array*/
 let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let a = text.replace(/[.\,\@\#\;\&]/gi,'') //Noktalama işaretlerini silme
console.log(a)

const ar= a.split(" ") //string'i arraya çevirme " " aralarında boşluk olan her bir kelimeyi dizi öğresi olarak aldı.
console.log(ar)

let ab=ar.length
console.log(`Dizideki kelime sayısı: ${ab}`)
//Egzersiz Level2 - 3
/* In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.indexOf('Meat') == -1)
{ let a='Meat'
shoppingCart.unshift(a)
console.log(shoppingCart) }
else {}

//add Sugar at the end of you shopping cart if it has not been already added**

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.indexOf('Sugar') == -1)
{ let b='Sugar'
shoppingCart.push(b)
console.log(shoppingCart) }
else {}

//remove 'Honey' if you are allergic to honey**

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let ae= prompt('Do you have allergy to HONEY? Please answer as \'yes\' or \'no\'.','yes or no')
if (ae == 'yes')
{ shoppingCart.pop()
console.log(shoppingCart) }
else {console.log(shoppingCart)}

//modify Tea to 'Green Tea'**

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[2]='Green Tea'
console.log(shoppingCart)

//Egzersiz Level2 - 4
/* In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
 If it does not exist add to the countries list.
*/
const countries = [
    'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'
  ]

  if (countries.indexOf('Ethiopia') == -1)
  { countries.push('Ethiopia')
  console.log(countries) }
  else { console.log('ETHIOPIA') }
//Egzersiz Level2 - 6
/* Concatenate the following two variables and store it in a fullStack variable.*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
//Egzersiz Level3 - 1
/* The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sırala= ages.sort()
console.log(sırala)
console.log(`Dizideki en küçük terim ${sırala[0]}`)
let eb = sırala.length-1
console.log(`Dizideki en büyük terim ${sırala[eb]}`)

//Find the median age(one middle item or two middle items divided by two)**

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let a=ages

let ab=a.length
console.log(`Dizi uzunluğu: ${ab}`)

if (ab % 2 == 0) {
let aba= a[(a.length)/2-1],ababa=a[(a.length)/2]
console.log(`${aba} ve ${ababa} ortadaki terimler.`) }

else { 
let abba= a[(a.length-1)/2]
console.log(`${abba} ortadaki terim.`) }

//Find the average age(all items divided by number of items)**

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let a=ages.length
console.log(`Dizi uzunluğu ${a}`)

let toplam=(ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/10
console.log(`Dizi ortalaması: ${toplam}`)

//Find the range of the ages(max minus min)**

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let min= Math.min(...ages)
console.log(min) 
let max= Math.max(...ages)
console.log(max) 

let range= max - min
console.log(`Dizi rangesi : ${range}`)

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten** 

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


let min= Math.min(...ages)
console.log(`Dizi min değeri : ${min}`) 

let max= Math.max(...ages)
console.log(`Dizi max değeri : ${max}`) 

let a=ages.length
console.log(`Dizi uzunluğu ${a}`)

let toplam=(ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/10
console.log(`Dizi ortalaması: ${toplam}`)

let com1 = min-toplam, com2=max-toplam
let comm=com2-com1
console.log(`Dizi min-ortalama değeri: ${com1}\nDizi max-ortalama değeri: ${com2}\nDizi (max-ortalama değeri)-(min-ortalama değeri): ${comm}`)
//Egzersiz Level3 - 2
/* 1.Slice the first ten countries from the countries array*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  let a= countries.slice(0,10)
  console.log(`İlk 10 ülke :\n${a}`)
  //2.Find the middle country(ies) in the countries array
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const a=countries
  
  let ab=a.length
  console.log(`Dizi uzunluğu: ${ab}`)
  
  if (ab % 2 == 0) {
  
  let aba= a[(a.length)/2-1],ababa=a[(a.length)/2]
  console.log(`${aba} ve ${ababa} ortadaki terimler.`) }
  
  else { 
  
  let abba= a[(a.length-1)/2]
  console.log(`${abba} ortadaki terim.`) }
//3.Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half. 
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const a=countries
  let ab=a.length
  
  if (ab % 2 == 0) {
  let abax= a[(a.length)/2-1],ababax=a[(a.length)/2]
  console.log(`${abax} ve ${ababax} ortadaki terimler.`)
  //dizi 2'ye tam bölünmediği için bu kısmı direk geçiyorum }
  
  else { 
  a.unshift('Turkey')
  let aba= a[(a.length)/2-1],ababa=a[(a.length)/2]
  console.log(`${aba} ve ${ababa} ortadaki terimler.`) 
  
  let b=countries.indexOf(ababa), ba=countries.indexOf(aba)
  let bb=countries.slice(0,b)
  
  let ax=countries.length-1
  let bbb=countries.slice(b,ax+1)
  console.log(`Dizinin ilk yarısındaki terimler:${bb}\n
  Dizinin ikinci yarısındaki terimler:${bbb}`)
  }