/*
HEP AYNI OBJE OLAN 'USERS' OBJESİ KULLANILDIĞINDAN SADECE EGZERSİZ LEVEL 2 - 1 DE
YER VERDİM. ORADAN KOPYALAYABİLİRSİNİZ.
*/

//Egzersiz Level1 - 1
/* Set new properties the dog object: breed, getDogInfo*/
const dog={}

dog.name='karabaş'
dog.legs=4
dog.color='kara'
dog.age=10
dog.bark = function () {
    let x='HAV HAV'
    return x }

dog.getDogInfo= function(){
    return `Köpeğin adı ${this.name}, Köpke ${this.age} yaşında ve ${this.bark()} diye bağırır` }
console.log(dog.getDogInfo())

//Egzersiz Level2 - 1
/* Find the person who has many skills in the users object.*/
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  let userSkills = Object.values(users);
  let indSkillsLength = [];
  for (let i = 0; i < userSkills.length; i++) {
      indSkillsLength.push(userSkills[i].skills.length);
  }
  let max=Math.max(...indSkillsLength)
  let yer=indSkillsLength.indexOf(max)
  
  const isim= Object.keys(users)
  console.log(isim[yer])

//Egzersiz Level2 - 2
/* Count logged in users*/
let log = Object.values(users);
let logabak = [];
for (let i = 0; i < log.length; i++) {
    logabak.push(log[i].isLoggedIn);
}
let online=[]
for (a=0;a<=logabak.length;a++){
    if (logabak[a] == true) {
        online.push(logabak[a])
                    }
}
    console.log(`Users online sayısı: ${online.length}`)

/* Count users having greater than equal to 50 points from the following object. */
const entt= Object.values(users)
let ar=0
let aa=[]
for (a=0;a<entt.length;a++) {
    aa.push(entt[a].points) 
    } 

for (at=0;at<=entt.length;at++) {
if (aa[at] >=50) ar++ }

console.log(`Puanı 50'den yüksek olan user sayısı: ${ar}`)

//Egzersiz Level2 - 3
/* Find people who are MERN stack developer from the users object*/
const skil= Object.values(users)
const ax= Object.keys(users)

let x=[]
for (a=0;a<skil.length;a++) {

    if ( (skil[a].skills.includes('MongoDB') && skil[a].skills.includes('Express') && skil[a].skills.includes('React') && skil[a].skills.includes('Node')) == true ) {
        
        x.push(ax[a]) }
}
console.log(`MERN Stack Users: ${x}`)

//Egzersiz Level2 - 4
/* Set your name in the users object without modifying the original users object*/
let kullanıcı = Object.entries(users)
const emre = {
    email: 'emre@altu.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 23,
    isLoggedIn: false,
    points: 100
}
kullanıcı.push(emre)
console.log(kullanıcı)

//Egzersiz Level3 - 1
/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
 Incomes is a set of incomes and its description and expenses is a set of incomes and its description.*/
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

//Egzersiz Level3 - 2
/* Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection.
 If user exists, inform the user that he has already an account.*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
console.log(users)

function signUp (id='abcdef',name='default',mail='aaa@aaa.com',pword=123456,when='27/03/2022 00:00 AM',Isonline=false) {
    let a=users.length
    let say=0  
    
    for(z=0;z<a;z++) {
    if (id == users[z]['_id']) {
        say++
         } }
    for(e=0;e<a;e++) {
        if (say==1) {
            console.log('Zaten '+ id +' ID\'li kullanıcı mevcut.Lütfen giriş yapınız.' ) 
        break}
        else {
            
            users[a] = {
            _id:`${id}`,
            username:`${name}`,
            email:`${mail}`,
            password:`${pword}`,
            createdAt:`${when}`,
            isLoggedIn:`${Isonline}` }
            console.log('Kullanıcı kaydınız tamamlandı.')
            break
            } }

        say=0 
    
    return users
}

signUp('ae9823','emre','aemrea23@gmail.com','123987emre','27/03/2022 20:16 PM',true)
signUp('ghderc','emre','aemrea23@gmail.com','123987emre','27/03/2022 20:16 PM',true)

//Egzersiz Level3 - 2.b
/* Create a function called signIn which allows user to sign in to the application*/
//Üstteki "users" objesini kullan!!
function signIn(id,pword) {
    let a=users.length
    let sa=0
    for(x=0;x<a;x++){
        if(id == users[x]['_id'] && pword == users[x].password) sa++ 
    }
    if(sa==1) {
        console.log('Giriş Başarılı') }
    else {console.log('Kullanıcı adı veya şifre hatalı, lütfen tekrar giriş yapınız!') }
}
signIn('ghderc','123333')
signIn('aee','asdvsa')


//Egzersiz Level3 - 3.a
/* The products array has three elements and each of them has six properties.
 a. Create a function called rateProduct which rates the product*/
//2 üstteki "products" dizisini kullan
function rateProduct(Id,nme,raate) {
    let uz= products.length
    let xx= parseInt(raate)
    for (a=0;a<uz;a++) {
        if (products[a].name == nme) {
            let yeni = {userId: Id, rate: xx} 
            products[a].ratings.push(yeni)
            console.log(`${products[a].name}`+' ürününe yeni değerlendirme puanı eklendi!')
        }
    }
    return products
}
rateProduct('ae9823','Laptop',5)
rateProduct('ae9823','TV',5)
//Egzersiz Level3 - 3.b
/* The products array has three elements and each of them has six properties.
 Create a function called averageRating which calculate the average rating of a product*/
//3 üstteki "products" dizisini kullan
function OrtalamaDeğerlendirme(hangiÜrün) {
    
    let a=products[hangiÜrün].ratings.length
    if(a==0) { console.log(`"${products[hangiÜrün].name}" ürünününe ait bir değerlendirme yok!`) }
    else {
    for(x=0;x<a;x++) {

        var total = 0;
        for(var i = 0; i < a; i++) {
        total += products[hangiÜrün].ratings[i].rate;
            }
        var avg = total / a;
    }
    console.log(`"${products[hangiÜrün].name}" ürününün ortalama değerlendirme puanı: ${avg}`)
}
}
OrtalamaDeğerlendirme(0)
OrtalamaDeğerlendirme(1)
OrtalamaDeğerlendirme(2)

//Egzersiz Level3 - 4
/* Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.*/
//4 üstteki "products" dizisini kullan :)
function likeP (sıra,id) {
    let a= products[sıra].likes
    if(a.includes(id) == true) {
        console.log('Beğeniniz geri alındı!')
        a.pop() }
    else {
        console.log('Bu ürünü beğendiniz!')
        a.push(id) }
}
likeP(0,'ae9823')
likeP(1,'fg12cy')
likeP(2,'ae9823')
console.log(products[0].likes)
console.log(products[1].likes)
console.log(products[2].likes)

