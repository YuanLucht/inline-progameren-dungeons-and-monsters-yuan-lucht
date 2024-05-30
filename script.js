

let yourHealth = document.getElementById("yourHealth")
let zombieHealth = document.getElementById("zombieHealth")
let willekeurigGetal
let ridderHealth = 100
let enemyHealth = 100
const newEnemy = document.querySelector("#frog")
const oldEnemy = document.querySelector("#zomImg")
const enemyLabel = document.getElementById("enemyLabel")
const frogOverlay = document.getElementById("frogRed")
const overlayZombie = document.getElementById("zombieRed");
let currentEnemy = "zombie";
let lastEnemy = false


function gambleKnop() {
    btnUit()

    willekeurigGetal = Math.random() * 50;

    willekeurigGetal = Math.ceil(willekeurigGetal);

    const gamble = document.querySelector("h2");
    gamble.textContent = willekeurigGetal;

    const paragraaf = document.querySelector("p");

    if (willekeurigGetal > 25){
    paragraaf.textContent = "je hebt gewonnen"; 
    }
    else if (willekeurigGetal == 25){
    paragraaf.textContent = "Gelijk spel!";
    }

    else {
    paragraaf.textContent = "Je hebt verloren";
    }

}



const btn = document.getElementById('btn');
btn.addEventListener("click", gambleKnop);
btn.addEventListener("click", damage)

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById     Bron voor GetElement

console.log(Math.ceil(willekeurigGetal))



function btnUit(){
    btn.disabled = true
    setTimeout(btnAan, 1000)
}

function btnAan(){
    btn.disabled = false
}



function damage(){

    if(willekeurigGetal < 25){
        ridderHealth = ridderHealth - 10
        yourHealth.value = ridderHealth
        overlayDamage('knightRed')
    }

    else if(willekeurigGetal == 25){
        console.log("leeg")
    }

    else{
        enemyHealth = enemyHealth - 15
        zombieHealth.value = enemyHealth
        overlayDamage('zombieRed')
        if(enemyHealth <= 0){
            removeZombie()
            removeOverlay()
        }
    }
    
    verlorenGewonnen()
}
console.log(ridderHealth)


function verlorenGewonnen(){

    const verloren = document.querySelector("#gg");

    if (ridderHealth == 0) {
      verloren.textContent = "Verloren";
      verloren.style.display = "block";  //stlye.display = block geholpen door chatgpt
    } 
    else if (enemyHealth <= 0 && lastEnemy) {
      verloren.textContent = "Gewonnen";
      verloren.style.display = "block";  //stlye.display = block geholpen door chatgpt
    }
}

function overlayDamage(knightRed, zombieRed){ //chat gpt heeft geholpen met de overlay.style
    const overlay = document.getElementById(knightRed, zombieRed);
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 200);
}


//hulp van Thomas en Roan
function removeZombie(){
    const zomDiv = document.querySelector("#zomDiv")
    if(enemyHealth <= 0 && lastEnemy == false){ 
        enemyHealth = 100 
        zombieHealth.value = enemyHealth
        oldEnemy.src = "images/frog.png"
        enemyLabel.textContent = "Frog Health:";
        lastEnemy = true;
    }
}

function removeOverlay(){
    const overlay = document.getElementById("zombieRed");
    overlayZombie.src = "images/frog-red.png"
}
