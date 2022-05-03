//Egzersiz Level1 - 1,2,3
/*  Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
Destructure and assign the elements of countries array to fin, est, sw, den, nor
Destructure the rectangle object by its properties or keys.*/
const sabitler = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, vücutsıcaklık, sukaynamanoktası] = sabitler

console.log(e, pi, gravity, vücutsıcaklık, sukaynamanoktası)
//
const ülkeler = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, swe, den, nor] = ülkeler

console.log(fin, est, swe, den, nor)
//
const dikdörtgen = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {
width, height, area, perimeter    
} = dikdörtgen

console.log(width, height, area, perimeter)


//Egzersiz Level2 - 1
/*  Iterate through the users array and get all the keys of the object using destructuring */
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    
    for (const {name:isim,scores:puan,skills:yetenek,age:yaş} of users) console.log(isim, puan, yetenek, yaş)

//Egzersiz Level2 - 2
/*  Find the persons who have less than two skills */
const yeteneksizler = users.filter((yetenekler) => yetenekler.skills.length < 2)
const son= yeteneksizler.map((a)=> a.name)
console.log(son)

//Egzersiz Level3 - 1
/* Destructure the countries object print name, capital, population and languages of all countries */
for (const {name,capital,population,languages} of countries_data) {
    console.log(name,capital,population,languages) }

//Egzersiz Level3 - 2
/* A junior developer structure student name, skills and score in array of arrays which may not easy to read.
 Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. */
 const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

 let jsPuanı= student[2][2], reactPuanı=student[2][3] 
 
 let [isim,yetenekler, ] = student
 
 console.log(isim,yetenekler,jsPuanı,reactPuanı)

//Egzersiz Level3 - 3
/* Write a function called convertArrayToObject which can convert the array to a structure object. */
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function diziyiobjeyeçevir(dizi) {

let sondizi=[]

for (x=0;x<dizi.length;x++) {
let y=0 
sondizi.push
    (
    Object.assign
    ({isim:dizi[x][y],yetenekler:dizi[x][y+1],puan:dizi[x][y+2]})
    )  

}

return sondizi }

diziyiobjeyeçevir(students)

//Egzersiz Level3 - 4
/* Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets*/

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const yeniÖğrenci = Object.assign(student)

yeniÖğrenci.skills.frontEnd.push({skill: 'BootStrap',level: 8})

yeniÖğrenci.skills.backEnd.push({skill: 'Express',level: 9})

yeniÖğrenci.skills.dataBase.push({skill:'SQL',level:8})

yeniÖğrenci.skills.dataScience.push('SQL')

console.log(yeniÖğrenci)
