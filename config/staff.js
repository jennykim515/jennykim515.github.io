import {oh_form_link, oh_queue_link} from './config.js';

let form_link = document.querySelector("#form_link");
form_link.innerHTML = oh_form_link;
form_link.setAttribute("href", oh_form_link);

let queue_link = document.querySelector("#queue_link");
queue_link.innerHTML = oh_queue_link;
queue_link.setAttribute("href", oh_queue_link);