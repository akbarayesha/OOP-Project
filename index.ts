#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Student{
    name:string
constructor(n:string){
this.name=n
}
}
class Person{
    students:Student[]=[]
addStudent(obj:Student){
 this.students.push(obj)
}
}

const persons= new Person()
const startLine = async (persons:Person)=>{

while(true){ 
 console.log(chalk.green.bold ("WELCOME!!"))
 const ans = await inquirer.prompt([{
    name: "select",
    type:"list",
    message:" to whome you select?",
    choices:["Student","Managment","Exit"]
 }]);
 if ( ans.select== "Managment"){
    console.log("Thanks for choosing us! how can we help...")
 }
 else if(ans.select== "Student"){
const ans = await inquirer.prompt([{
    name: "student",
    type:"input",
    message:"Please enter the Student Name, which you like to interact",
    
}])
const student= persons.students.find(val => val.name== ans.student)
if(!student){
    const name = new Student(ans.student)
    persons.addStudent(name)
    console.log(`\n HELLO I AM ${name.name}. NICE TO MEET YOU.!`)
    console.log("NEW STUDENT ADD SUCCESSFULLY.")
    console.log("\n Current Student List:")
    console.log(persons.students)
    }
    else{console.log(`HELLO I AM ${Student.name}, PLEASURE TO SEE YOU AGAIN!!`);
        console.log("Existing Student List:");
        console.log(persons.students);
    }
 }
else if(ans.select=="Exit"){
console.log(chalk.green.bold("EXITING.."))
break;
}
}}
startLine(persons);