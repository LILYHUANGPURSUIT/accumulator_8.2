const studentsArr = [
  {
    name: "Leanne Graham",
    GPA: 3.7,
    role: "Student",
  },
  {
    name: "Ervin Howell",
    GPA: 2.9,
    role: "Hall Monitor",
  },
  {
    name: "Clementine Bauch",
    GPA: 3.4,
    role: "Teacher's Assistant",
  },
  {
    name: "Patricia Lebsack",
    GPA: 4.0,
    role: "Student",
  },
  {
    name: "John Dietrich",
    GPA: 3.7,
    role: "Hall Monitor",
  },
  {
    name: "Dennis Schulist",
    GPA: 3.0,
    role: "Teacher's Assistant",
  },
];

/**
 * Returns the names of each student in the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String} A string containing the names of all the students from the `students` array.
 */
function stringNames(students) {
  let allNames = "";
  for (let i=0; i<students.length;i++) {
    allNames += studentsArr[i].name + ", "
  }
  return allNames;
}

console.log(stringNames(studentsArr));
// > "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"

/**
 * Returns the names of each student in the class in an array.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String[]} An array of the names of all the students from the `students` array.
 */
function arrayNames(students) {
  let newArr = [];
  for (let i=0; i<students.length;i++) {
      newArr.push(studentsArr[i].name);
  }
  return newArr;
}
console.log(arrayNames(studentsArr));
// > ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'John Dietrich', 'Dennis Schulist']

// /**
//  * Searches for a student by name.
//  * @param {Object[]} students - An array of objects, each representing a student.
//  * @param {String} name - The name of the student to find.
//  * @returns {Object} The student in the class whose name matches.
//  */
function findByName(students, name) {
  let findStudent = {};
  for (let i=0; i<students.length;i++) {
    let nameInArray = students[i].name;
    if (nameInArray === name) {
      findStudent = students[i];
    }
  }
  return findStudent;
}

console.log(findByName(studentsArr, "Clementine Bauch"));
// > { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }

// findByName(studentsArr, "John Dietrich");
// //> { "name": "John Dietrich", "GPA": 3.7, "role": "Hall Monitor" }

// /**
//  * Returns the average (also known as the mean average) GPA for the class.
//  * @param {Object[]} students - An array of objects, each representing a student.
//  * @returns {Number} The average GPA for the class.
//  */
function findAverageGPA(students) {
  let originalGpa = 0;
  let totalNumber = students.length;
  for (let i=0; i<students.length;i++) { 
    originalGpa += students[i].GPA;
    result = (originalGpa/totalNumber).toFixed(2);
  }
    return result;
}

console.log(findAverageGPA(studentsArr));
//> 3.45

// /**
//  * Returns the highest GPA for the class.
//  * @param {Object[]} students - An array of objects, each representing a student.
//  * @returns {Number} The highest GPA for the class.
//  */
function findHighestGPA(students) {
  let highestGpa = 0;
  for (let i=0; i<students.length;i++) { 
    let comparedGpa = students[i].GPA;
    if (comparedGpa > highestGpa) {
      highestGpa = comparedGpa;
    }
  }
  return highestGpa.toFixed(1);
}

console.log(findHighestGPA(studentsArr));
// //> 4.0

// /**
//  * Returns the lowest GPA for the class.
//  * @param {Object[]} students - An array of objects, each representing a student.
//  * @returns {Number} The lowest GPA for the class.
//  */
function findLowestGPA(students) {
  let lowestGpa = students[0].GPA;
  for (let i=1; i<students.length;i++) { 
    let numberInArrGpa = students[i].GPA;
    if (lowestGpa > numberInArrGpa) {
      lowestGpa = numberInArrGpa;
    }
  }
  return lowestGpa;
}

console.log(findLowestGPA(studentsArr));
//> 2.9

// /**
//  * Returns only the students who have a specific role.
//  * @param {Object[]} students - An array of objects, each representing a student.
//  * @param {String} role - The role of the desired students.
//  * @returns {Object[]} The students who have the role.
//  */
function filterByRole(students, role) {
  let outPutArr = [];
  for (let i=0; i<students.length;i++) { 
    let roleInArr = students[i].role;
    if (roleInArr === role) {
    outPutArr.push(students[i]);
    }
  }
  return outPutArr;
}

console.log(filterByRole(studentsArr, "Hall Monitor"));
//> [
//     {
//         "name": "Ervin Howell",
//         "GPA": 2.9,
//         "role": "Hall Monitor"
//     },
//     {
//         "name": "John Dietrich",
//         "GPA": 3.7,
//         "role": "Hall Monitor"
//     }
// ]

// console.log(filterByRole(studentsArr, "Teacher's Assistant"));
// //> [
// //     {
// //         "name": "Clementine Bauch",
// //         "GPA": 3.4,
// //         "role": "Teacher's Assistant",
// //     },
// //     {
// //         "name": "Dennis Schulist",
// //         "GPA": 3.0,
// //         "role": "Teacher's Assistant",
// //     }
// // ]
