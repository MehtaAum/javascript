//student is object and name : "aum" all are (key : value)
//object is collection of different variable
//to access obj key we use   1. student.name  OR  2. student["name"]
//as you can see it is CONST you can change const object keys (but can not change const variable)

const student = {

    name : "aum", //key : value
    age : 20,
    marks : 77.88,
    isPass : true 

}

console.log(student)
console.log(typeof student)
console.log(student.name , student.age , student.marks , student.isPass)

student["name"] = "rahul"
student["age"] = student["age"] + 5

console.log(student.name)
console.log(student.age)







