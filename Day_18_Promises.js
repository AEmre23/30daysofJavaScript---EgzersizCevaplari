//Egzersiz Level1 - 1
/*  Read the countries API using fetch and print the name of country, capital, languages, population and area. */
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(cevap => cevap.json())
.then(data => {
    const veri = data
    console.log(typeof(data)) //Çektiğimiz "data" değişkeninin türünün obje olduğundan emin olmak için.

    const veribilgi= Object.values(veri)
    const son = veribilgi.map((a) => {
    console.log(a.name)
    console.log(a.capital)
    console.log(a.languages)
    console.log(a.population)
    console.log(a.area) })
})
.catch(hata => console.error(hata)) 

//Egzersiz Level2 - 1
/*  Print out all the cat names in to catNames variable. */
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const bilgial = async () => {
    try {
        const link = await fetch(catsAPI)
        const kedibilgi = await link.json()
        
        //console.log(kedibilgi)
        
        const objeyap = Object.values(kedibilgi)
        const kediIsimleri = objeyap.map((x)=> x.name )

        console.log(kediIsimleri)
    } catch (hata) {
        console.error(hata) } }
bilgial()

//Egzersiz Level3 - 1
/*  Read the cats api and find the average weight of cat in metric unit. */
const bilgial = async () => {
    try {
        const link = await fetch(catsAPI)
        const kedibilgi = await link.json()
        
        //console.log(kedibilgi)
        
        const objeyap = Object.values(kedibilgi)
        const isim= objeyap.map((j)=> j.name) //kedi isimleri
        const kediler = objeyap.map((x)=> x.weight.metric )
        //console.log(kediler) //her kedinin ağırlıkları fakat string 
        const dön = kediler.map((a)=> a.match(/\d+/gi))
        //console.log(dön) // her kedinin ağırlıklarının numaralarını çektik
        const dön2= dön.map((b)=> b.map((c)=> parseInt(c)))
        //console.log(dön2) // her kedinin ağırlıklarını stringden integere çevirdik
        const dön3= dön2.map((d)=> {let toplam = d[0]+d[1]
                                    return toplam/2 })
        //console.log(dön3)  // çevirdiğimiz integer dizisinde her kedinin ağırlık ortalamasını bulduk.
        for(v=0;v<isim.length;v++) {
        console.log(`${isim[v]} kedisinin ortalama ağırlığı: ${dön3[v]}`) } //burada da her kedinin ismiyle ortalamasını for döngüsüyle eşleştirip yazdırdık.

        
    } catch (hata) {
        console.error(hata) } }
bilgial()

//Egzersiz Level3 - 2
/*  Read the countries api and find out the 10 largest countries */
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(cevap => cevap.json())
.then(data => {
    const veri = data
    //console.log(typeof(data)) //Çektiğimiz "data" değişkeninin türünün obje olduğundan emin olmak için.

    const veribilgi= Object.values(veri)
    const alan = veribilgi.map((x)=> x.area)
    const son = alan.sort((a,b) => b-a    )
        //console.log(son) 
    const alan10= son[9]

    const filtre = veribilgi.filter((c)=> c.area >= alan10)
        //console.log(filtre)
    const sorrt= filtre.sort((d,e)=> e.area - d.area)
        //console.log(sorrt)
    console.log('Ülke İsmi\tAlan')
    for (const {name,area} of sorrt) {
        console.log(name,area) }
  
})
.catch(hata => console.error(hata))

//Egzersiz Level3 - 3
/*  Read the countries api and count total number of languages in the world used as officials. */
//??