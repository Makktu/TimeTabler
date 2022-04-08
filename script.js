"use strict";

const displayArea = document.querySelector(".box");

const timeTable = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const timeBlocks = [
    "0800",
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100",
    "2200",
    "2300",
];

let html = "";

for (let day in timeTable) {
    html += `<div class=${timeTable[day]}><br>${timeTable[day]}<br><br></div>`;
    for (let time in timeBlocks) {
        html += `${timeBlocks[time]} `;
        if ((+time + 1) % 4 == 0) html += "<br><br>";
    }
}

displayArea.innerHTML = html;
