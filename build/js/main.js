// snow fall animation on

function createSnow(){

    let container = document.querySelector('.container');
    let span = document.createElement('span'); 

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span);

    setTimeout(() =>{
        span.remove();
    },5000)

}

setInterval(createSnow, 100);

// snow fall animation off


// count down part on

let counteDate = new Date('December 31, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = counteDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown();
},1000)

// count down part off