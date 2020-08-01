function menu(){
    var menu = document.getElementById('menu');
    menu.style.zIndex = 4;
}

function menuclose(){
    var menu = document.getElementById('menu');
    menu.style.zIndex = 0;
}

function goto1(){
    var section1 = document.getElementById("s1");
    menuclose()
    section1.scrollIntoView();
}

function goto2(){
    var section2 = document.getElementById("s2");
    menuclose()
    section2.scrollIntoView();
}

function goto3(){
    var section3 = document.getElementById("s3");
    menuclose()
    section3.scrollIntoView();
}

function goto4(){
    var section4 = document.getElementById("s4");
    menuclose()
    section4.scrollIntoView();
}

function fb(){
    window.location.href='https://fb.com';
}

function ig(){
    window.location.href='https://instagram.com';
}

function tt(){
    window.location.href='https://twitter.com';
}