"use strict";

( function() {

    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');


    /* js 10 스크롤한 값 구하기*/
    /* 🦄 offsetHeight :브라우저 높이, 
     window.innerHeight ,     
    pageYOffset : 스크롤한 값     

    🍄 0~1의 값을 구하는 공식

    0. 0~1의 값을 구하는 공식 만들어서 그 값을 활용하기
    1. 계속 바뀌는 값 / 고정된 값 =  0~1의 값을 구해냄 
    2. 그 값을 translateZ, style.width에 사용함

    🚀드림코딩
    let homeHeight = home.getBoundingClientRect().height;
    homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;

    🚀1분코딩
    let maxScroll = document.body.offsetHeight - window.innerHeight;
    const scrollPer= pageYOffset/ maxScroll;


    <🚀> "gps io"
    (계속 바뀌는 값 / 고정된 값 =  0~1의 값)

    1. 계속 바뀌는 값
    getBoundingClientRect().top;
    pageYOffset
    window.scrollY

    2. 고정값
    innerHeight 
    offsetTop
    */
    let maxScrollValue = document.body.offsetHeight - window.innerHeight;
    console.log(maxScrollValue);


    //🍀 scroll, z-moving
    // 🦄 
    window.addEventListener('scroll', function() {

    const scrollPer = pageYOffset/ maxScrollValue; /* 🍄js 10 */    

    const zMove = scrollPer * 980 -490;
 
    houseElem.style.transform = `translateZ(${zMove}vw)`; /* js 20 */

    // 🍀 js 30 progress bar
    barElem.style.width =`${scrollPer*100}%`;    
    });


    // 🍀 js 40 mousemove, and wall rotate    
    /* 
    🚀암기공식 : 마우스 위치값잡는 계산식 (암기) 자주 쓰임 
    가운데 수치가 0으로 만드는게 포인트
    left, bottom일수록 -1,
    right,top일수록 +1로 설정됨        
    */

    
    let mousePosition={x:0,y:0};   // 🍀 js 40

    window.addEventListener('mousemove',(e)=>{    
   
        // console.log(mousePos.x)
        // 기본적으로 0 프린트됨, 밑의 공식 넣으면 바뀜

        mousePosition.x =(e.clientX /  window.innerWidth *5)-2.5;
        mousePosition.y =e.clientY/ window.innerWidth *5;
        

        stageElem.style.transform = `rotateX(${ mousePosition.y }deg) rotateY(${mousePosition.x}deg)`;
 
    });


    //🍀js 50. resize , innerWidth

    let maxSize;/* 50-10  */

    window.addEventListener("resize", resizeHandler);

    function resizeHandler() {
    maxSize = window.innerWidth;    /* 50-10   */      
    }
    resizeHandler();    /* 🦄첫 실행때 함수가 실행되도록... */
    console.log(maxSize);


})();


