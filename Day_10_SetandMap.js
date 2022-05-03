//Egzersiz Level1 - 6
/* Create a map of countries and number of characters of a country*/

//const countries = [['Finland'], ['Sweden'],['Norway'],['Turkey']]
const ülke= new Map()

ülke.set('Finland','Finland'.length)
ülke.set('Sweden','Sweden'.length)
ülke.set('Norway','Norway'.length)
ülke.set('Turkey','Turkey'.length)

console.log(ülke)

/* Bu da diziye pushlanan versiyon

const countries = [['Finland'], ['Sweden'],['Norway'],['Turkey']]
const ülke= new Map(countries)
//console.log(ülke)
//

const dizi= []
for (const ax of ülke) {
    dizi.push({ülkeismi: ax[0], kaçharfli: ax[0].length}) }

console.log(dizi) 
*/



//Egzersiz Level2 - 1,2,3
/*   Find a union b

 Find a intersection b

 Find a with b */

 const a = [4, 5, 8, 9]
 const b = [3, 4, 5, 7]
 
 let A= new Set(a)
 let B= new Set(b)
 //
 let c= a.filter((x) => !B.has(x))
 let C= new Set(c)
 
 let birleşme = [...C,...B]
 console.log('birleşim kümesi:',birleşme)
 //
 let d= a.filter((y) => B.has(y))
 let kesişim= new Set(d)
 let kessişim=[]
 for (const abb of kesişim) kessişim.push(abb)
 
 console.log('kesişim kümesi:',kessişim)
 //
 let toplam= [...a,...b]
 console.log('toplam kümesi:',toplam)


// Egzersiz Level3 - Yapamadım.





































