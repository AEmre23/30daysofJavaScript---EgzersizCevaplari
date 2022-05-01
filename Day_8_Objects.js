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
    let x='woof woof'
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

//Egzersiz Level2 - 2
/* Count logged in users*/













































