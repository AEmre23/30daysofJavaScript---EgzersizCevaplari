//Egzersiz Level1 - 1,2,3,4
/*  Change skills array to JSON using JSON.stringify()
Stringify the age variable
Stringify the isMarried variable
Stringify the student object */

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'] //1
const obje = JSON.stringify(skills,undefined,2)
console.log(obje)

let age = 250; //2
const yaş=JSON.stringify(age,undefined,4)
console.log(yaş)


let isMarried = true//3
const medeni= JSON.stringify(isMarried,undefined,2)
console.log(medeni)

const student = { //4
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const öğrenci= JSON.stringify(student,undefined,2)
console.log(student)

//Egzersiz Level2 - 1
/*  Stringify the students object with only firstName, lastName and skills properties */

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
  
  const öğrencii= JSON.stringify(student,['firstName','lastName','skills'],4)
  console.log(öğrencii)


//Egzersiz Level3 - 1,2
/*  Parse the txt JSON to object.
Find the user who has many skills from the variable stored in txt. */

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const obje= JSON.parse(txt,undefined,4)
const son= Object.values(obje)

let dizi=[]
const say= son.map((x) => dizi.push(x.skills.length))
const ençok= Math.max(...dizi)
const yeri = dizi.indexOf(ençok)
console.log(`Dizide en yetenekli kişi: ${son[yeri].email}`)











