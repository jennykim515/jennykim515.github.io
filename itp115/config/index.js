import {semester, assignments, labs} from './config.js';
console.log("HELLO")

let semester_grab = document.querySelector("#semester");
semester_grab.innerHTML = semester;


function findNextAssignment(assignments) {
    const today = new Date();
    let prev = assignments["a1"]
    for(let assignment in assignments) {
        if( assignments[assignment] > today) {
            return assignment // return key
        }
        prev = assignment
    }
    return null;
}

let due_dates = document.querySelector("#due-dates");

// assignment due dates
let assignment_key = findNextAssignment(assignments);
if(assignment_key) {
    due_dates.innerHTML += assignment_key + " is due " + assignments[assignment_key].toDateString() + "<br>";
} else {
    due_dates.innerHTML = "No assignments are due for a while.<br>";
}

// lab due dates
let lab_key = findNextAssignment(labs);
if(lab_key) {
    due_dates.innerHTML += lab_key + " is due " + labs[lab_key].toDateString();
} else {
    due_dates.innerHTML = "No labs are due for a while.";
}
