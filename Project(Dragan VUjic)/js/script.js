const counters = document.querySelectorAll('.counter');
const startingNum = 0;
const speed = 50;


counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target/100;
        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter,1);
        } else {
            counter.innerText=target
        }
    };
    updateCounter();
});


function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    };
    
    requestAnimationFrame(animation); 
}




var pocetna = document.getElementById('pocetna');
var oNama= document.getElementById('oNama');
var portfolio = document.getElementById('portfolio');
var blog = document.getElementById('blog');
var kontakt = document.getElementById('kontakt');


pocetna.addEventListener('click', function(){
    smoothScroll('.section1', 2000);
});
oNama.addEventListener('click', function(){
    smoothScroll('.container_about', 2000);
});
portfolio.addEventListener('click', function() {
    smoothScroll('.portfolio', 2000);
})
blog.addEventListener('click', function () {
    smoothScroll('.blog', 2000)
});
kontakt.addEventListener('click', function(){
    smoothScroll('.div1', 2000);
})


