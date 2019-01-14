setTimeout(function () {
var timeout1 = document.querySelector('.timeout');
timeout1.classList.add('timeout2');
},2300);

var x=0;


document.addEventListener('scroll',function () {
    var timeout1 = document.querySelector('.timeout');
    if(window.scrollY>=x)
    {
        timeout1.classList.remove('timeout2');
    }
    else
    {
        timeout1.classList.add('timeout2');
    }
    x=window.scrollY;
    });

var login = document.querySelector('.login');
var login1 = document.querySelector('.login1');
var login2 = document.querySelector('.login2');
var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
login.addEventListener('click',function () {
    console.log('ada');
    login2.classList.toggle('login1add');
    login1.classList.toggle('login1add');
    p2.classList.toggle('padd');
    p1.classList.toggle('padd');
    login.classList.toggle('loginadd');
});