import {next_assignment_due, next_lab_due, semester} from './config.js';

let due_dates = document.querySelector("#due-dates");
due_dates.innerHTML = "Assignment " + next_assignment_due + " is due this Friday<br>Lab " + next_lab_due + " is due this Saturday";

let semester_grab = document.querySelector("#semester");
semester_grab.innerHTML = semester;