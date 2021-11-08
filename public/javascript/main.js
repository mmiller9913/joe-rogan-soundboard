// event listeners for button
/*
document.getElementById('button-wow').addEventListener('click', playSound);
document.getElementById('button-jamie').addEventListener('click', playSound);
document.getElementById('button-fuck-you-money').addEventListener('click', playSound);
document.getElementById('button-motivational').addEventListener('click', playSound);
document.getElementById('button-DMT').addEventListener('click', playSound);
document.getElementById('button-MMM').addEventListener('click', playSound);
document.getElementById('button-kimchi-and-elk').addEventListener('click', playSound);
document.getElementById('button-when-chimps-attack').addEventListener('click', playSound);
document.getElementById('button-huge-balls').addEventListener('click', playSound); 
document.getElementById('button-lazy-pot-smokers').addEventListener('click', playSound); 
document.getElementById('button-too-high').addEventListener('click', playSound);
document.getElementById('button-savage-chickens').addEventListener('click', playSound);
document.getElementById('button-jesus-christ-jamie').addEventListener('click', playSound);
document.getElementById('button-heat-shock-proteins').addEventListener('click', playSound);
document.getElementById('button-sauna').addEventListener('click', playSound);
document.getElementById('button-immune-system').addEventListener('click', playSound);
document.getElementById('button-butthole').addEventListener('click', playSound);
document.getElementById('button-carnivore-diet').addEventListener('click', playSound);
document.getElementById('button-its-entirely-possible').addEventListener('click', playSound);
document.getElementById('button-throat-clear').addEventListener('click', playSound);
*/
var buttons = document.querySelectorAll(".btn").length;
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        playSound(event);
    });
}

function playSound(event) {
    const sound = event.target.id;
    if(sound === "button-wow") { 
        const audio = document.getElementById("sound-wow");
        audio.currentTime = 0; //this resets audio to t=0 (so you can keep hitting key over & over)
        audio.play(); //plays the audio element
    }
    if(sound === "button-jamie") {
        const audio = document.getElementById("sound-jamie");
        audio.currentTime = 0;
        audio.play(); 
    }
    if(sound === "button-fuck-you-money") {
        const audio = document.getElementById("sound-fuck-you-money");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-DMT") {
        const audio = document.getElementById("sound-DMT");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-MMM") {
        const audio = document.getElementById("sound-MMM");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-kimchi-and-elk") {
        const audio = document.getElementById("sound-kimchi-and-elk");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-when-chimps-attack") {
        const audio = document.getElementById("sound-when-chimps-attack");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-huge-balls") {
        const audio = document.getElementById("sound-huge-balls");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-lazy-pot-smokers") {
        const audio = document.getElementById("sound-lazy-pot-smokers");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-too-high") {
        const audio = document.getElementById("sound-too-high");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-jesus-christ-jamie") {
        const audio = document.getElementById("sound-jesus-christ-jamie");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-savage-chickens") {
        const audio = document.getElementById("sound-savage-chickens");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-heat-shock-proteins") {
        const audio = document.getElementById("sound-heat-shock-proteins");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-sauna") {
        const audio = document.getElementById("sound-sauna");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-immune-system") {
        const audio = document.getElementById("sound-immune-system");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-butthole") {
        const audio = document.getElementById("sound-butthole");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-carnivore-diet") {
        const audio = document.getElementById("sound-carnivore-diet");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-its-entirely-possible") {
        const audio = document.getElementById("sound-its-entirely-possible");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-throat-clear") {
        const audio = document.getElementById("sound-throat-clear");
        audio.currentTime = 0; 
        audio.play(); 
    }
    if(sound === "button-motivational") {
        var x = Math.floor(Math.random() * 10 + 1)
        if (x<=3) {
            const audio = document.getElementById("sound-you-are-not-your-past");
            audio.play(); 
            document.getElementById('button-motivational').removeEventListener('click', playSound);
        }
        if (x >3 && x <= 6) {
            const audio = document.getElementById("sound-go-fucking-do-something");
            audio.play(); 
            document.getElementById('button-motivational').removeEventListener('click', playSound);
        }
        if (x >6 && x <= 8) {
            const audio = document.getElementById("sound-light-darkness");
            audio.play();
            document.getElementById('button-motivational').removeEventListener('click', playSound);
        }
        if (x >8 && x <= 10) {
            const audio = document.getElementById("sound-struggle");
            audio.play();
            document.getElementById('button-motivational').removeEventListener('click', playSound);  
        }
    }
}

function reAddEventListener() {
    document.getElementById('button-motivational').addEventListener('click', playSound);
}