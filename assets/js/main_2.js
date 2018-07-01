console.log("============================================")
console.log("=      Play fair, don't cheat mate         =")
console.log("============================================")

////////////////////////////////////////////////////////////
                    //Object && Variable//

let clicker = document.querySelector('#clicker')
let display = document.querySelector('#display')
let displayImgBack = document.querySelector('#displayImgBack')
// let displayAnim = document.querySelector('#displayAnim')
// let stats = document.querySelector('#stats')
// let statsValue = document.querySelectorAll('.statsValue')

let dallas = null   
let hoxton = null
let chains = null // => Best one
let wolf = null

let wick = null
let houston = null

let transportBag = null
let ECM = null

let SwanSong = null
let Chameleon = null
//Stats

let Stats = new Stat();
window.onload = () => {


dallas = new Heister ('Dallas', '#crewDallas', 150, 300)
hoxton = new Heister ('Hoxton', '#crewHoxton', 3000, 500)
chains = new Heister ('Chains', '#crewChains', 900, 400) // => Best one
wolf = new Heister('Wolf', '#crewWolf', 9000, 600)

wick = new Heister ('John Wick', '#crewWick', 200000, 2000000)
houston = new Heister ('Houston', '#crewHouston', 40000, 5000)
// class Heister {
//     constructor(name, div, prix) {
//         this.name = name
//         this. div =document.querySelector(div)
//         this.prix = prix
//         this.level = 0
//         this.clickAuto = undefined
//     }
// }
// (name, price, div, cost,  CrimeMultiplier=true, buyMoneyMultiplier=true, crimeMultiplier=1, moneyMultiplier=0.5)



// //ITEM
// class Item {
//     constructor (name, div, prix) {
//         this.name = name
//         this.div = document.querySelector(div)
//         this.prix = prix
//         this.counter = 0
//         this.etat = 'lock'
//     }
// }

transportBag = new Item ('Transport Bag', '#itemTransportBag', 300, 10, 0.2)
ECM = new Item ('E.C.M', '#itemECM', 2000, 0, 1)



//CAPACITY
SwanSong = new Capacity('#capSwanSong', 6000, 60000, 2);
Chameleon = new Capacity('#capChameleon', 30000, 180000, 1.3);

// let capSwanSong = document.querySelector('#capSwanSong')
// let timerSwanSong = 'available'

// let capChameleon = document.querySelector('#capChameleon')
// let timerChameleon = 'available'


// //SCORE CRIME
// let crime = 0 // nombre de crime commis
// let crimeAdditioner = 1
// let crimeMultiplier = 1

// //SCORE MONEY
// let money = 0 //argent disponible
// let totalMoney = 0 //argent total récolté ( compte offshore)
// let moneyAdditioner = 0 //est définis au click
// let moneyMultiplier = 1


////////////////////////////////////////////////////////////
                //injection préliminaire//

dallas.div.innerText += ' : ' + dallas.price + ' $ \n Level : ' + dallas.level
chains.div.innerText += ' : ' + chains.price + ' $ \n Level : ' + chains.level
hoxton.div.innerText += ' : ' + hoxton.price + ' $ \n Level : ' + hoxton.level
wolf.div.innerText += ' : ' + wolf.prix + ' $ \n Level : ' + wolf.level

houston.div.innerText += 'Recruit ' + houston.name + ' : ' + houston.price + ' $ \n Level : ' + houston.level
wick.div.innerText += 'Recruit ' + wick.name + ' : ' + wick.price + ' $ \n Level : ' + wick.level

transportBag.div.innerText += ' : ' + transportBag.price + ' $'
ECM.div.innerText += ' : ' + ECM.price + ' $'

Stats.onDraw();

// statsValue[0].innerText = 'Crimes Commis : aucun'
// statsValue[1].innerText = 'Argent Récolté : 0 $'
// statsValue[2].innerText = 'Compte en banque : 0 $'
// statsValue[3].innerText = 'Multiplicateur (crime) : 1'
// statsValue[4].innerText = 'Multiplicateur (money) : 1'


////////////////////////////////////////////////////////////
                    //Auto Clickers//

// let autoClickBase = () => {
//     moneyAdditioner = Math.floor(Math.random() * 10) + 1

//     crime = crime + (crimeAdditioner * crimeMultiplier)
//     totalMoney = totalMoney + (moneyAdditioner * moneyMultiplier)
//     totalMoney = Math.round(totalMoney * 100) / 100 // correction bug js

//     money = money + (moneyAdditioner * moneyMultiplier)
//     money = Math.round(money * 100) / 100 

//     statsValue[0].innerText = 'Crimes Commis : ' + crime
//     statsValue[1].innerText = 'Argent Récolté : ' + totalMoney + ' $'
//     statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
//     statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
//     statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier


// }
    queueNewFrame();


}

/** - Timer Tick - */
let Tick = () =>{
    /** placer le code pour le timer ici */

    dallas.onTick();
    chains.onTick();
    hoxton.onTick();
    wolf.onTick();
    houston.onTick();
    wick.onTick();

    transportBag.onTick();
    ECM.onTick();

    SwanSong.onTick();
    Chameleon.onTick();

    eventTick();

    queueNewFrame();    
};
let tick = -1;
let queueNewFrame = () => {

    if (window.requestAnimationFrame)
        tick = window.requestAnimationFrame(Tick);
    else if (window.msRequestAnimationFrame)
        tick = window.msRequestAnimationFrame(Tick);
    else if (window.webkitRequestAnimationFrame)
        tick = window.webkitRequestAnimationFrame(Tick);
    else if (window.mozRequestAnimationFrame)
        tick = window.mozRequestAnimationFrame(Tick);
    else if (window.oRequestAnimationFrame)
        tick = window.oRequestAnimationFrame(Tick);
    else {
        queueNewFrame = function() { };
        tick = window.setInterval(Tick, 16.7);
    }
};
// queueNewFrame();