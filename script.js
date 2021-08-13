"use strict";

( function() {

    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');

    /* js 10 */
    let maxScrollValue = document.body.offsetHeight - window.innerHeight;
    console.log(maxScrollValue);


    //🍀 scroll, z-moving
    window.addEventListener('scroll', function() {

    const scrollPer = pageYOffset/ maxScrollValue; /* js 10 */    

    const zMove = scrollPer * 980 -490;
 
    houseElem.style.transform = `translateZ(${zMove}vw)`; /* js 20 */


    // 🍀 js 30 progress bar

    barElem.style.width =`${scrollPer*100}%`;
    
    });



})();

