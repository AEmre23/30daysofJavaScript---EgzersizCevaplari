//Egzersiz Level1 - 1
/*  Create a closure which has one inner function */
function uyku () {
    let uyut = 0
        function koyunekle () {
            uyut++
            return `${uyut} koyun sayıldı.`
        }
    return koyunekle
}
const uyutmaFonksiyonu = uyku()

console.log(uyutmaFonksiyonu())
console.log(uyutmaFonksiyonu())
console.log(uyutmaFonksiyonu())

//Egzersiz Level2 - 1
/*  Create a closure which has three inner functions */
function uyku () {
    let uyut=0;
        function koyunekle () {
            uyut++
            return `${uyut} koyun sayıldı.`
        }
        function sesçıkar() {
            uyut=0
            return 'Ses çıktığı içn tüm uykun kaçtı, dolayısıyla koyunlarda...'
        }
        function ilaçat() {
            uyut += 5
            return `Uyku ilacı attığın için ${uyut} koyun birden saydın!`
        }
    
    return {
        koyunekle:koyunekle(),
        sesçıkar:sesçıkar(),
        ilaçat:ilaçat(),
    }
}
const uyutmaFonksiyonu = uyku()

console.log(uyutmaFonksiyonu.koyunekle)
console.log(uyutmaFonksiyonu.sesçıkar)
console.log(uyutmaFonksiyonu.ilaçat)
//console.log(uyutmaFonksiyonu.koyunekle)
/*Bu sonuca tekrar bir koyunekle ya da diğer fonksyionlardan eklenince çalışmıyor,
nedenini anlamak için örneğe bakayım dedim meğer orada da çalışmıyormuş,
fonksiyonu obje içinde returnde çağırınca uyut değeri her seferinde 0'lanıyor.
Sebebini maalesef anlayamadım.*/

//Egzersiz Level3 - 1
/*  Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. */

