//Egzersiz Level1 - 3
/* Iterate 0 to n using for loop*/
let y=prompt('n değeri giriniz:','n değeri')
let yy=parseInt(y)
for (let ax=0;ax<=yy;ax++)
{console.log(ax) }

//Egzersiz Level1 - 4
/* Write a loop that makes the following pattern using console.log()
     #
     ##
     ###
     ####
     #####
     ######
     ####### */
     const na= []
     for(ii=0;ii<7;ii++)
     {    na.push('#')
     console.log(na)}

//Egzersiz Level1 - 5
/* Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
for(i=0;i<=10;i++) {
    let a=i*i
    console.log(`${i}x${i}=${a}`)}

//Egzersiz Level1 - 6
/* Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000  */
 console.log(`i\ti^2\ti^3`)
for (i=0;i<=10;i++) {
let a=i, aa=i**2,aaa=i**3
console.log(`${a}\t${aa}\t${aaa}`)    }

//Egzersiz Level1 - 7,8,9,10
/* 7.Use for loop to iterate from 0 to 100 and print only even numbers */
for (i=0;i<=100;i++)    {
    if(i%2==0) {
    console.log(i) } else{} }
//8.Use for loop to iterate from 0 to 100 and print only odd numbers 
for (i=0;i<=100;i++)    {
    if(i%2==0) {
     } else{console.log(i)} }
//9.Use for loop to iterate from 0 to 100 and print only prime numbers
for(i=0;i<=100;i++)    {
    if(i==1) { continue
     } else if(i==2) {console.log(2)} 
    else if(i==3) {console.log(3)}
    else if(i==5) {console.log(5)}
    else if(i==7) {console.log(7)}
    else if(i==11) {console.log(11)}
      else if (i%2 != 0 && i%3 !=0 && i%5 !=0 && i%7!=0 && i%11 !=0) {console.log(i)} else {  } }
//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
sum=0
for (i=0;i<=100;i++) {
sum += i
 }
console.log(`1'den 100'e kadar olan sayıların toplamı ${sum}`)

//Egzersiz Level1 - 11,12
/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. */
sum=0
for (i=0;i<=100;i++) {
if(i%2==0) {
sum += i
 } else{} }

console.log(`0'dan 100'e olan çift sayıların toplamı: ${sum}`)

sum1=0
for (ii=0;ii<=100;ii++) {
if(ii%2==0) {
} else{sum1+=ii
} }
console.log(`0'dan 100'e kadar olan tek sayıların toplamı: ${sum1}`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.
let arr1=[]
sum=0
for (i=0;i<=100;i++) {
if(i%2==0) {
sum += i
 } else{} }

console.log(`0'dan 100'e olan çift sayıların toplamı: ${sum}`)

sum1=0
for (ii=0;ii<=100;ii++) {
if(ii%2==0) {
} else{sum1+=ii
} }
console.log(`0'dan 100'e kadar olan tek sayıların toplamı: ${sum1}`)

arr1.push(sum)
arr1.push(sum1)
console.log(arr1)

//Egzersiz Level1 - 13,14,15
/* Develop a small script which generate array of 5 random numbers */
const na=[ ]
na.fill(5)
console.log(na)

for (a=0;a<5;a++)    {
let rastgelenumara= Math.random()
let a= rastgelenumara*1000
na.push(a)    }
console.log(na)
/* Develop a small script which generate array of 5 random numbers and the numbers must be unique*/
const arr = [];
while(arr.length < 5){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) {arr.push(r)} else {};
}
console.log(arr);
// Develop a small script which generate a six characters random id:
let r = (Math.random() +).toString(36).substring(2,8);
console.log(r);
/* mathrandom ile 0.xxxxx bir sayı oluşturuyoruz.
toString(36) koduyla 0'dan sonraki basamakları harf rakam karıştırıyoruz
(36= a-z arası 26 harf(İng) ve 0-9 arası 10 rakam, toplayınca 36)
ve .substring(2,8) ile 0.xx sayının 2. basamağıyla 8. basamağı arasını (6 karakterli olması için) alıyoruz. */

//Egzersiz Level2 - 1,2,3
/* Develop a small script which generate any number of characters random id: */
let a=(Math.random()).toString(36).substring(2)
console.log(a)
/* Write a script which generates a random hexadecimal number. */
let a=(Math.random()).toString(16).substring(2)
console.log(a)
/*Write a script which generates a random rgb color number.
 rgb(240,180,80) */
 const ar= []
ar.fill(3)

for(rgbn=0;rgbn<3;rgbn++)   {
let rgbn= Math.floor(Math.random()*256)
ar.push(rgbn)    }
console.log(`rgb(${ar})`)

//Egzersiz Level2 - 4,5,6
/* Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
 */
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
  let a=countries.toString()
  let ab= a.toUpperCase()
  let ax= ab.split(',')
  console.log(ax)
  // Using the above countries array, create an array for countries length'.
  // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
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
  const arx=[]
  let u=countries.length-1
  
  for(a=0;a<=u;a++)    {
  let x=countries[a].length
  arx.push(x)
  }
  console.log(arx)
  /*> Use the countries array to create the following array of arrays:
> 
>   [
>   ['Albania', 'ALB', 7],
>   ['Bolivia', 'BOL', 7],
>   ['Canada', 'CAN', 6],
>   ['Denmark', 'DEN', 7],
>   ['Ethiopia', 'ETH', 8],
>   ['Finland', 'FIN', 7],
>   ['Germany', 'GER', 7],
>   ['Hungary', 'HUN', 7],
>   ['Ireland', 'IRE', 7],
>   ['Iceland', 'ICE', 7],
>   ['Japan', 'JAP', 5],
>   ['Kenya', 'KEN', 5]
> ] */
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
    'Kenya']

  const ax=[]
  
  let x=countries.length-1
  for (don=0;don<=x;don++)    {
  
  let isim=countries[don].toString()
  let i31=countries[don].substring(0,3), i3=i31.toUpperCase()
  let uzunluk=countries[don].length
  let newa=[]
  newa.push(isim,i3,uzunluk)
  ax.push(newa)
  }
  console.log(ax)

//Egzersiz Level2 - 7,8
/* In above countries array,
 check if there is a country or countries containing the word 'land'.
  If there are countries containing 'land', print it as array.
   If there is no country containing the word 'land', print 'All these countries are without land'.
['Finland','Ireland', 'Iceland']*/
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
    'Kenya']
  let asd=[]
  let u=countries.length-1
  for(dng=0;dng<=u;dng++)    {
  
  if(countries[dng].includes('land')==true)    {
  asd.push(countries[dng])
      }else if(countries[dng].includes('land')==false)    { }
  else {}
  
  }
  if (asd.length==0)    {console.log('Hiçbir ülkede \'land\' harfleri yok!')}    else{console.log(asd)}

//Egzersiz Level2 - 9,10
/* Using the above countries array,
 find the country containing the biggest number of characters.*/
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
  
  const ax=[]
  const bx=[]
  let b=countries.length-1
  
  for (aa=0;aa<=b;aa++)    {
      bx.push(countries[aa].length)    }
  let maxd=Math.max(...bx)
  let max=bx.indexOf(maxd)
  let maxx=countries[max]
  console.log(`Dizideki en uzun terim: ${maxx}`)
// Using the above countries array, find the country containing only 5 characters.
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
  
  const bx=[]
  let b=countries.length-1
  
  for (aa=0;aa<=b;aa++)    {
  let bb=countries[aa].length
  
      if (bb == 5) {    
  let k55=countries[aa]
  bx.push(k55)   
          } 
  }
  console.log(bx)

//Egzersiz Level2 - 12
/* Use the webTechs array to create the following array of arrays:
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]*/
const arr=[]
let uz=webTechs.length-1

for (a=0;a<=uz;a++)    {
let isim=webTechs[a]
arr.push(isim)

let uzunluk=webTechs[a].length
arr.push(uzunluk)    
}
console.log(arr)

//Egzersiz Level2 - 13
/*An application created using MongoDB, Express, React and Node is called a MERN stack app.
 Create the acronym MERN by using the array mernStack */
 const mernStack = ['MongoDB', 'Express', 'React', 'Node']

 const ar=[]
 let uz=mernStack.length-1
 
 for (aa=0;aa<=uz;aa++)    { 
 let krktr1=mernStack[aa].substr(0,1)
 let krkb=krktr1.toUpperCase()
 ar.push(krkb)  }
 
 let xx=ar.toString()
 let xxx= xx.replace(/,/gi,'')
 console.log(xxx)

//Egzersiz Level2 - 15
/*  This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method. */
const fruit=  ['banana', 'orange', 'mango', 'lemon']

let ax=[]
let uzun=fruit.length-1
    for(b=uzun;b>=0;b--)    {
ax.push(fruit[b])
}
console.log(ax)

//Egzersiz Level2 - 16
/*  Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB*/
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

let bir=fullStack[0], iki=fullStack[1]

let uzunluk= bir.length-1
let uzunluk2= iki.length-1


for (a=0;a<=uzunluk;a++)    {

let b= bir[a], ba=b.toString(), baa=ba.toUpperCase()
console.log(`${baa}\n`)    
}

for (aa=0;aa<=uzunluk2;aa++)    {


let bb= iki[aa], baa=bb.toString(), baax=baa.toUpperCase()
console.log(`${baax}\n`)    
}






