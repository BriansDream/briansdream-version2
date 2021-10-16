// Use strict untuk menangani penulisan sintaks yang buruk / salah (memaksakan penulisan sintaks javascript yang aman)
"use strict";

// Pahami struktur DOM
// document, root (html), elemen (cabang), daun (isi / kontent element tersebut)

// Mendapatkan element (mengakses element melalui DOM)
// Menggunakan property dari object windows yaitu document
// Mengakses element secara spesifik harus menggunakan method yg disediakan pada objek document


// Tangkap element / classnya
const removeBTN = document.querySelector('.removeBTN');
const loadPopUp = document.getElementById("PopUp");


const loadPage = () => {
        loadPopUp.removeAttribute("hidden");
}


const removePopUpFunct = () => {
    removeBTN.addEventListener('click', function(event) {
        loadPopUp.remove();
    })
}

document.body.onload = loadPage;
removePopUpFunct();