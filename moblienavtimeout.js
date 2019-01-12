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
    })