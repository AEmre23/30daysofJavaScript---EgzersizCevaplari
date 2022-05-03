//Egzersiz Level1-1,2 Level2-1
/*  Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
Override the method you create in Animal class */

class Hayvan {
    constructor(isim,yaş,renk,kaçayak) {
        this.isim= isim
        this.yaş= yaş
        this.renk = renk
        this.kaçayak = kaçayak }
    
    get Yaşınıöğren() {
         return this.yaş }
    
    set YaşınaEkle(x) {
        this.yaş += x
    console.log(`${this.isim} yaşı ${x} kadar arttırıldı.`) }

    bilgial() {
        return `Hayvanın ismi ${this.isim}. Hayvan ${this.yaş} yaşındadır. Rengi ise ${this.renk}. Ayak sayısı ise ${this.kaçayak}.` }
}

class Kedi extends Hayvan {
    constructor(isim,yaş,renk,kaçayak,cins,kısırmı,cinsiyet) {
        super(isim,yaş,renk,kaçayak)
        this.cins= cins
        this.kısırmı=kısırmı
        this.cinsiyet=cinsiyet }

    bilgial() {
        let hitap = this.cinsiyet == 'erkek' ? 'Erkek kedi' : 'Dişi kedi'
        let kısırlık = this.kısırmı == 'evet' ? 'Kısır bir kedi' : 'Kısır değil'
        
        let bilgi= `${this.isim} isimli kedi bir ${this.cins} ${hitap}. O ${this.yaş} yaşında ve ${this.renk} renginde. O ${kısırlık}.`
    return bilgi}
}

class Köpek extends Hayvan {
    constructor(isim,yaş,renk,kaçayak,cins,kısırmı,cinsiyet) {
        super(isim,yaş,renk,kaçayak) //super kullanarak classı overrideledik.(E L2/1)
        this.cins= cins
        this.kısırmı=kısırmı
        this.cinsiyet=cinsiyet }

    bilgial() {
        let hitap = this.cinsiyet == 'erkek' ? 'Erkek köpek' : 'Dişi köpek'
        let kısırlık = this.kısırmı == 'evet' ? 'Kısır bir köpek' : 'Kısır değil'
        
        let bilgi= `${this.isim} isimli köpek bir ${this.cins} ${hitap}. O ${this.yaş} yaşında ve ${this.renk} renginde. O ${kısırlık}.` 
    return bilgi}
}


const hayvan1= new Hayvan ('Can',1,'turuncu',4)
const hayvan2= new Hayvan ('Minnoş',1,'gri',4)

const hayvan3 = new Kedi ('Kuyruk',3,'beyaz',4,'tekir','hayır','erkek')
const hayvan4 = new Köpek ('Fişek',2,'beyaz',2,'english pointer','evet','erkek')

console.log(hayvan1.Yaşınıöğren)
console.log(hayvan2.Yaşınıöğren)
hayvan1.YaşınaEkle = 1
hayvan2.YaşınaEkle = 4
console.log(hayvan1.bilgial())
console.log(hayvan2.bilgial())

console.log(hayvan3.bilgial())
console.log(hayvan4.bilgial())

console.log(hayvan3.Yaşınıöğren)
console.log(hayvan4.Yaşınıöğren)

//Egzersiz Level3 - 1
/*  Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
 In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below. */
 const istatistik = {
    sayı: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
    adet: function () {
        return `${this.sayı.length}` },

    toplam: function () {
        return `${this.sayı.reduce((x,y) => x+y)}` },

    max: function () {
        return `${Math.max(...this.sayı)}`},

    min: function () {
        return `${Math.min(...this.sayı)}` },

    aralık: function () {
        return `${Math.max(...this.sayı)}`-`${Math.min(...this.sayı)}`},

    ortalama: function () {
        return Math.ceil(`${this.toplam()}`/`${this.adet()}`)},

    varyans: function () {

    const bx= this.sayı.map((n)=>(n-this.ortalama())**2)

    const ax= bx.reduce((k,l) =>k+l)
         return Math.floor(ax/((this.adet())-1)) },
        
    mod: function () {

    if(this.sayı.length == 0)
        return null;
    var modeMap = {};
    var maxEl = this.sayı[0], maxCount = 1;
    for(var i = 0; i < this.sayı.length; i++)
    {
        var el = this.sayı[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl; },//Ben yazmadım.


    
    standartsapma: function () {
        return Math.sqrt(this.varyans()) },

    veri_istatistiği: function () {
        console.log(`adet: ${this.adet()}
toplam:${this.toplam()}
max:${this.max()}
min:${this.min()}
aralık:${this.aralık()}
ortalama:${this.ortalama()}
mod:${this.mod()}
varyans:${this.varyans()}
standart sapma:${this.standartsapma()}`) }
    
}

console.log(istatistik.veri_istatistiği())


//Egzersiz Level3 - 2
/*  Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
 Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.*/
 const Hesap = {
    firstName: 'Emre',
    lastName: 'ALTUNKAYA',
    incomes: 0,
    expenses:230,
    totalIncome: function() {
        return `${this.incomes}`-`${this.expenses}`
    },
    totalExpense: function() {
        return `${this.expenses}`-`${this.incomes}`
    },
    accountInfo: function() {
        return 'Hesap sahibinin ismi: '+ (`${this.firstName}`+' '+`${this.lastName}`)+', Toplam geliri ise:'+`${this.totalIncome()}`
    },
    addIncome: function(x) {
        this.incomes= this.incomes + x
        return 'Hesaba '+`${x}`+'₺ kadar para girişi olmuştur!!'
    },
    addExpense: function(y) {
        this.expenses= this.expenses + y
        return 'Hesaptan '+`${y}`+'₺ kadar para çekilmiştir.'
    }
}

console.log(Hesap.firstName)
console.log(Hesap.accountInfo())
console.log(Hesap.totalExpense())
console.log(Hesap.addIncome(5000))
console.log(Hesap.incomes)
console.log(Hesap.addExpense(250))
console.log(Hesap.expenses)
console.log(Hesap.accountInfo())





