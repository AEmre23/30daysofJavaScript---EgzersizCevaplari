//Egzersiz Level1 - 15
/* Use filter to filter out only prices with values.*/
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
  const fiyatlar= products.filter((x) => typeof(x.price) == 'number')
  console.log(fiyatlar)

//Egzersiz Level1 - 18
/* Use reduce to concatenate all the countries and to produce this sentence:
 Estonia, Finland, Sweden, Denmark, Norway, IceLand are north European countries*/
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

 const cümle = countries.reduce((x,y) => x+', '+ y )
 console.log(`${cümle} are north European countries.`)

//Egzersiz Level2 - 1
/* Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback))*/
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
  const filtre = products.filter((y) => typeof(y.price) === 'number')
  
  const son = filtre.map((a) => a.price)
  
  const toplam= son.reduce((x,y) =>x+y)
  
  console.log(toplam) //27

//Egzersiz Level2 - 3
/* Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
  const landlar= countries.filter(x => x.includes('land'))
  console.log(landlar)
  
  const ialar= countries.filter(x => x.includes('ia'))
  console.log(ialar)
  
  const islandlar= countries.filter(x => x.includes('island'))
  console.log(islandlar)
  
  const stanlar= countries.filter(x => x.includes('stan'))
  console.log(stanlar)
  
  const outhlar= countries.filter(x => x.includes('outh'))
  console.log(outhlar)

//Egzersiz Level2 - 4
/* Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.*/
//Üstteki "countries" dizisini kullan.
let dizi=[]
let obje={}
function başlayanharf(x) {
    const başla= countries.filter((a) => a.startsWith(x.toUpperCase()) == true)
    obje.harf=x.toUpperCase()
    obje.kaçdefa=başla.length
    dizi.push(obje)
    obje={}
    return dizi
 }

başlayanharf('u')
başlayanharf('A')

//Egzersiz Level2 - 5,6
/* Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array*/
/*Declare a getLastTenCountries function which which returns the last ten countries in the countries array. */
//Üstteki "countries" dizisini kullan.
function getFirstTenCountries () {
    const dizi= []
    for (x=0;x<10;x++) {
        dizi.push(countries[x]) }
        return dizi
    }
    
    console.log(getFirstTenCountries ())
    
    function getLastTenCountries () {
    const dizison= []
    for (y=countries.length-1;y>countries.length-11;y--) {
        dizison.push(countries[y]) }
        return dizison
    }
    
    console.log(getLastTenCountries ())

//Egzersiz Level2 - 7
/* Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)*/
let ar=[]
const harfler= countries.map((x) => x.charAt(0) )
ar.push(harfler)

const counts = [];
harfler.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });//İnternetten aldım.
console.log(counts)

//Egzersiz Level3 - 1
/* Use the countries information, in the data folder. Sort countries by name, by capital, by population*/
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries_data.js linkinden countries_data dizisini alabilirsin.
const f = countries_data.sort((a,b) => a.name.localeCompare(b.name))
console.log(f)

/*
countries_data.sort(nüfus);
function nüfus (a,b) {
    return a.population- b.population
}
console.log(countries_data) */
//Population öğesini yapamadım.

//Egzersiz Level3 - 3
/* Use countries_data.js file create a function which create the ten most populated countries*/
const sıralıülke = countries_data.sort((x,y) => {return y.population - x.population})
//console.log(sıralıülke)
function enkalabalıkülke (a) {
    let obje={}; dizi=[]
    for (b=0;b<a;b++) {
        
        obje.ülke= `${sıralıülke[b].name}`
        obje.nüfus=`${sıralıülke[b].population}`
        dizi.push(obje)
        obje={}
    }
    return dizi}
enkalabalıkülke(10)

//Egzersiz Level3 - 4
/* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
 In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
  You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.*/

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
