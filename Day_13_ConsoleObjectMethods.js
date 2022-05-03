//Egzersiz Level3
/*  Check the speed difference among the following loops: while, for, for of, forEach */
let a=0
let dizi=[]
//while döngüsü hızı
console.time('while döngüsü')
while (a<3) {
    dizi.push(a)
    a++}
console.log(dizi)
dizi=[]
console.timeEnd('while döngüsü')
//for döngüsü hızı
console.time('for döngüsü')
for (b=0;b<3;b++) {
    dizi.push(b) }
console.log(dizi)
console.timeEnd('for döngüsü')
//for of döngüsü hızı
console.time('for of döngüsü')
for (const b of dizi) {
    console.log(b) }
console.timeEnd('for of döngüsü')
//forEach döngüsü hızı
console.time('forEach döngüsü')
dizi.forEach((b)=> console.log(b))
console.timeEnd('forEach döngüsü')

//Diğerleri çok kolay diye ekleme gereği duymadım.