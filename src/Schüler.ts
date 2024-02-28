
type grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "F" | undefined;
type Student = {
    name: string;
    firstName: string;
    age: number;
    grades: grades[];
};


function printStudent( student:Student): void{
//console.log(student);
    console.log(student.firstName + " " + student.name + " (" + student.age + ") \n" + "============================== \n" )
    let output = " ";
    for (let i = 0; i< student.grades.length; i++){
        if (student.grades[i]){
            output += student.grades[i] + ", "
        }
        else{
            output += "* "
        }

    }
    console.log("Noten:\n" + output)
}
//const printStudent2 = console.log;

const student: Student={
    firstName: "Johann",
    name: "Berger",
    age: 8,
    grades: [5,3,"A",2,3,4,"F", undefined]
};


const student1: Student={
    firstName: "Ulrike",
    name: "von Blauen",
    age: 6,
    grades: [5,6,"B",6,undefined,1,2,"A"]
};

const student2: Student={
    firstName: "Bert",
    name: "Ill",
    age: 12,
    grades: [2,"A",undefined,6,undefined,3,2,"D"]
};

const student3: Student={
    firstName: "Hans",
    name: "Spindle",
    age: 14,
    grades: ["F",2,"F",undefined,undefined,1,2,undefined,"D"]
};

const students = [student,student1, student2,student3];

students.forEach(printStudent);