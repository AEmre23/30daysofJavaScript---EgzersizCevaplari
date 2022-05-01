//Egzersiz Level1 - 1-12
/*  Print all the elements of array as shown below. */
function fullName (ilkad='em',ikinciad='ah',soyad='alt') {
    let boşluk=' '
    let tamad=ikinciad + boşluk + ilkad + boşluk + soyad
        return tamad }
fullName (ilkad='aasdva',ikinciad='xxx',soyad='xxxf')

/*  Declare a function addNumbers and it takes two two parameters and it returns sum. */
const addNumbers = (sayı1=0,sayı2=0) => {
    let toplam = sayı1 + sayı2
    return toplam }
addNumbers()
/*  An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle. */
function areaOfRectangle (length=0,width=0){
    let area=length*width
    return area}

/*  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle. */
const çevreuzunluğu = (kısakenar=0,uzunkenar=0) => {
    let çevre = 2*(kısakenar+uzunkenar)
        return çevre}

/*  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism. */
function prizmahacmi (uzunluk=0,genişlik=0,yükseklik=0){
    let hacim=uzunluk*genişlik*yükseklik
    return hacim}

/*  Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle */
const dairealanı =(yarıçap=0) => {
    let pi=Math.PI
        let alan=pi*yarıçap*yarıçap
        return alan }

/*  Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle */
function çemberçevre (r=0) {
    let pi=Math.PI
    let çevre=2*pi*r 
    return çevre }

/*  Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density. */
const yoğunluk = (kütle=0,hacim=1) =>{
    let yoğ= kütle/hacim
        return yoğ}

/*  Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. */
function hız (mesafe=0,zaman=1) {
    let hıza=mesafe/zaman
    return hıza }

/*  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. */
const ağırlık = (kütle=0,yerçekimi=9.81) =>{
    let ağl=yerçekimi*kütle
        return ağl }
    
/*  Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit. */
const oF =(oC=0) => {
    let a=oC*(9/5)+32
    return a }

//
//Egzersiz Level1 - 13
/*  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
1. Underweight: BMI is less than 18.5
2. Normal weight: BMI is 18.5 to 24.9
3. Overweight: BMI is 25 to 29.9
4. Obese: BMI is 30 or more */
function KitleHesapla (kilo=0,boy=0) {
    let BMI= kilo/(boy**2)
    if (BMI <= 18.5) { console.log('Zayıfsınız') }
    else if ( BMI >18.5 && BMI <= 24.9 ) { console.log('Normal Kilonuzdasınız') }
    else if ( BMI >24.9 && BMI <= 29.9 ) {console.log('Kilolusunuz') }
    else if (BMI > 30 ) {console.log('Obezsiniz') }
        else { console.log('Lütfen kilonuzu kg, boyunuzu ise m olarak giriniz') }
}
KitleHesapla(79,1.70)

//Egzersiz Level1 - 14
/* Write a function called checkSeason,
 it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.*/
 function mevsimbul (ay='ocak') {

    let a= ay.toLowerCase()
    
    if (a=='ocak' || a=='şubat' || a=='aralık')
    { console.log('Kış ayındasınız.') }
    
    else if (a=='mart' || a=='nisan' || a=='mayıs')
    {console.log('İlkbahar ayındasınız.') }
    
    else if (a=='haziran' || a=='temmuz' || a=='ağustos')
    {console.log('Yaz ayındasınız.')}
    
    else if (a=='eylül' || a=='ekim' || a=='kasım')
    {console.log('Sonbahar ayındasınız.')}
    
    else { console.log('Lütfen olduğunuz ayı büyük/küçük harf farketmezsizin giriniz!') }
    }
    
    console.log(mevsimbul())
    console.log(mevsimbul('nisan'))
    console.log(mevsimbul('AğusTOS'))

//Egzersiz Level1 - 15
/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.**
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */
function maksbul (a,b,c) {
    if (a>=b && a>=c) { console.log(a) }
    else if (b>a && b>c) { console.log(b) }
    else if (c>a && c>b) { console.log(c) }
    else { console.log('Lütfen 3 adet sayı giriniz!') }
}
maksbul(0,10,5)
maksbul(0,-10,-2)

//Egzersiz Level2 - 2
/* Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.**
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
  */
function derece2denklem (a,b,c) {
    //ax2 + by + c = 0
    let koksay= b**2-4*a*c
    if (koksay == 0 ) {
        let coz= -b/(2*a)
     console.log(`Denklemin kökü ${coz}`)
    } 
    else if (koksay>0) {
        let kok1= (-b-Math.sqrt(koksay))/(2*a)
        let kok2= (-b+Math.sqrt(koksay))/(2*a)
        console.log(`Denklemin kökleri ${kok1} ve ${kok2}`)
    }
    else if (koksay<0) {
            console.log('Denklemin kökü yani sonucu yoktur.')
    }
    else { console.log('Lütfen sayı giriniz!') }
}

console.log(derece2denklem()) // {0}
console.log(derece2denklem(1, 4, 4)) // {-2}
console.log(derece2denklem(1, -1, -2)) // {2, -1}
console.log(derece2denklem(1, 7, 12)) // {-3, -4}
console.log(derece2denklem(1, 0, -4)) //{2, -2}
console.log(derece2denklem(1, -1, 0)) //{1, 0}

//Egzersiz Level2 - 3
/* Declare a function name printArray. It takes array as a parameter and it prints out each value of the array. */
function printArray() {
    for (let x=0;x<=arguments.length;x++) {
            console.log(`${arguments[x]}`) }
}
printArray(3,4,6,7,9,64,3,4,5,67,8,6,5,4,9,9)

//Egzersiz Level2 - 4
/* Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.**
showDateTime()
08/01/2020 04:08 */
function showDateTime () {
    const ay=new Date(), gün=new Date(), yıl=new Date(), saat=new Date(), dakika=new Date()
       let ay1=ay.getMonth(), gün1=gün.getDate(), yıl1=yıl.getFullYear(), saat1=saat.getHours(), dakika1=dakika.getMinutes()
    
    console.log(`${ay1+1}/${gün1}/${yıl1}\t${saat1}:${dakika1}`)
        
    }
    showDateTime()

//Egzersiz Level2 - 5
/* Declare a function name swapValues. This function swaps value of x to y.**

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4 */
function swapValues (x,y) {
    [x, y] = [y, x]
    console.log(`x=>${x}, y=>${y}`)
}
swapValues(3, 4) 
swapValues(4, 5) 

//Egzersiz Level2 - 6
/* Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).**
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']    */
function reverseArray (arr) {
    const ax=[]
        let y=arr.length-1
        for(x=y;x>=0;x--)    {
    ax.push(arr[x])
    }
    return ax
    }
    console.log(reverseArray([1, 2, 3, 4, 5]))
    console.log(reverseArray(['A', 'B', 'C']))

//Egzersiz Level2 - 9
/* Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item */
const a=[1,2,3,4,5,6,7,8,9,10]
function RemoveItem (x) {
    a.splice(x,1)
    return a
}
RemoveItem(5)

//Egzersiz Level2 - 10
/* Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. */
function sumOfNumbers (x) {
    sum=0
    for (a=0;a<=x;a++) {
        sum += a
    }
    return sum }
sumOfNumbers (2)

//Egzersiz Level2 - 13
/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number. */
function NumbersOfOddsEvens (x) {
    let çift=0, tek=0
    for (a=0;a<=x;a++) {
        if (a%2 == 0) {
            çift++
        }
        if (a%2 !=0) {
            tek++
        }
    }
    console.log(`Çift sayıların sayısı:${çift}\nTek sayıların sayısı:${tek}`)
}
NumbersOfOddsEvens(20)

//Egzersiz Level3 - 1
/* Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated. */
let x=prompt('ID\'niz kaç karakter olsun?'), y=prompt('Kaç adet ID istiyorsunuz?')
let aa=parseInt(x)
function IDoluştur(x,y) {
    for (a=0;a<y;a++) {
        let a=(Math.random()).toString(36).substring(2,aa+2)
console.log(a) }
}
IDoluştur(x,y)

//Egzersiz Level3 - 8
/* Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array */
function karistir (dizi) {
    for (var i=dizi.length-1;i>0;i--) {
        var j= Math.floor(Math.random()*(i+1))
        var temp=dizi[i]
        dizi[i]=dizi[j]
        dizi[j]=temp
    }
    return dizi
}
console.log(karistir(['a','b','c','d','e']))
console.log(karistir([1,2,3,4,5,6,7,8,9,10]))

//Egzersiz Level3 - 9
/* Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number */
function faktöriyel (x) {
    let sum=1
    for (a=x;a>0;a--) {
        sum *= a}
        return sum}
    faktöriyel(5)

//Egzersiz Level3 - 11
/* Call your function sum, it takes any number of arguments and it returns the sum. */
function sumx(a) {
    topx = 0
 for (x=0;x<=a;x++) {
     topx +=x
 }
    return topx }
sumx(6)

//Egzersiz Level3 - 12,13
/* Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback. */
function sumOfArrayItems (arr) {
    toplam=0
    let b=arr.length
   
    for (x=0;x<b;x++) {
        if (typeof arr[x] !== 'number') {
            
                console.log('Elemanların hepsi/bazısı sayı değil!')
            break
            }
       
            else { toplam += arr[x] 
                 }
    }
return toplam       
}

console.log(sumOfArrayItems([1,2,3,4,5]))
console.log(sumOfArrayItems([1,2,3,'eee',5]))
//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average (arr) {
    toplam=0
    let b=arr.length
   
    for (x=0;x<b;x++) {
        if (typeof arr[x] !== 'number') {
            
                console.log('Elemanların hepsi/bazısı sayı değil!')
            break
            }
       
            else { toplam += arr[x] 
                 }
    }
    let sonuc= toplam/b
return sonuc     
}

console.log(average([1,2,3,4,5]))
console.log(average([1,2,3,'eee',5]))

//Egzersiz Level3 - 14
/* Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'. */
function modifyArray (arr) {
    let uzun=arr.length
    if (uzun>=5) {
        let x= arr[4].toUpperCase()
        arr[4]=x
    } else {console.log('item not found') }
    return arr }
console.log(modifyArray(['a','b','c','d','e','f']))
console.log(modifyArray(['a','b','c','d','e']))
console.log(modifyArray(['a','b','c','d']))

//Egzersiz Level3 - 15
/* Write a function called isPrime, which checks if a number is prime number. */
//Bu kodu ben yazmadım. stackoverflowdan buldum.
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
isPrime(2)  

//Egzersiz Level3 - 16
/* Write a functions which checks if all items are unique in the array. */
function bak(dizi) {
    let tekrar=0,ozgun=0

    for (x=0;x<=dizi.length;x++) {
        for (y=0;y<=dizi.length;y++) {

            if (dizi[x]==dizi[y]) { tekrar++}
        }
        if (tekrar>=2) {ozgun++}
        tekrar=0
    }
    if (ozgun==0)
        console.log('Dizi Özgündür. Tüm elemanları farklı!')
    else 
        console.log('Dizide tekrar eden elemanlar var!')
}
console.log(bak([1,2,3,4,5]))
console.log(bak([1,2,3,4,5,5]))
console.log(bak(['a','b','c','d','e']))
console.log(bak(['a','b','c','d','e','e']))

//Egzersiz Level3 - 17
/* Write a function which checks if all the items of the array are the same data type. */
function datatipkontrol (dizi) {
    let tekrar=0,ozgun=0

    for (x=0;x<dizi.length;x++) {
        for (y=0;y<dizi.length;y++) {

            if (typeof dizi[x] != typeof dizi[y])
                tekrar++
        }
        if (tekrar>=1)
            ozgun++
        tekrar=0
    }
    if (ozgun>=1)
        console.log('Tüm data tipleri aynı DEĞİL!')
    else 
        console.log('Tüm data tipleri aynı!')
}
console.log(datatipkontrol([1,2,3,4,5]))
console.log(datatipkontrol([1,'b',2,'a',4,5]))

//Egzersiz Level3 - 19
/* Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique. */
function sevenRandomNumbers() {
    let ax=[]
    let a=0
    while(a<7) {
        let b= Math.floor(Math.random()*10)
        if (ax.includes(b) == false) {
            ax.push(b)
            a++ }
    } 
return ax
}
sevenRandomNumbers()

//Egzersiz Level3 - 20
/* Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array */
reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries(); 