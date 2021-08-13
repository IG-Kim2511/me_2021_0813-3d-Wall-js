"use strict";

( function() {

    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');

    /* js 10 */
    let maxScrollValue;
    
    //🍀 resize, whenever we change the browser size
    window.addEventListener('resize',()=>{
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    });


    //🍀 scroll, z-moving
    window.addEventListener('scroll', function() {

    const scrollPer = pageYOffset/ maxScrollValue; /* js 10 */    

    const zMove = scrollPer * 980 -490;
 
    houseElem.style.transform = `translateZ(${zMove}vw)`; /* js 20 */

    // 🍀 js 30 progress bar
    barElem.style.width =`${scrollPer*100}%`;    
    });


    // 🍀 js 40 mousemove, and wall rotate    
    window.addEventListener('mousemove',(e)=>{
        // console.log(e.clientX)
        // console.log(e.clientY)       
   
        stageElem.style.transform = `rotateX(${(e.clientY/ window.innerWidth *5)+1 }deg) rotateY(${(e.clientX /  window.innerWidth *5)+1 }deg)`;
    });


})();

