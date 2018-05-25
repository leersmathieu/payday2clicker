console.log("============================================")
console.log("=      Play fair, don't cheat mate         =")
console.log("============================================")

////////////////////////////////////////////////////////////
                    //Object && Variable//

let clicker = document.querySelector('#clicker')
let display = document.querySelector('#display')
let displayImgBack = document.querySelector('#displayImgBack')
let displayAnim = document.querySelector('#displayAnim')
let stats = document.querySelector('#stats')
let statsValue = document.querySelectorAll('.statsValue')

//CREW

class Heister {
    constructor(name, div, prix) {
        this.name = name
        this.div = document.querySelector(div)
        this.prix = prix
        this.level = 1
        this.clickAuto = undefined
    }
}

let dallas = new Heister ('Dallas', '#crewDallas', 150)
let chains = new Heister ('Chains', '#crewChains', 900)
let hoxton = new Heister ('Hoxton', '#crewHoxton', 3000)
let wolf = new Heister('Wolf', '#crewWolf', 9000)

let houston = new Heister ('Houston', '#crewHouston', 40000)



//ITEM
class Item {
    constructor (name, div, prix) {
        this.name = name
        this.div = document.querySelector(div)
        this.prix = prix
        this.counter = 0
        this.etat = 'lock'
    }
}

let transportBag = new Item ('Transport Bag', '#itemTransportBag', 300)
let ECM = new Item ('E.C.M', '#itemECM', 2000)



//CAPACITY
let capSwanSong = document.querySelector('#capSwanSong')
let timerSwanSong = 'available'


//SCORE CRIME
let crime = 0 // nombre de crime commis
let crimeAdditioner = 1
let crimeMultiplier = 1

//SCORE MONEY
let money = 0 //argent disponible
let totalMoney = 0 //argent total récolté ( compte offshore)
let moneyAdditioner = Math.random() * 10
let moneyMultiplier = 1


////////////////////////////////////////////////////////////
                //injection préliminaire//
dallas.div.innerText += ' : ' + dallas.prix + ' $ \n Level : ' + dallas.level
chains.div.innerText += ' : ' + chains.prix + ' $ \n Level : ' + chains.level
hoxton.div.innerText += ' : ' + hoxton.prix + ' $ \n Level : ' + hoxton.level
wolf.div.innerText += ' : ' + wolf.prix + ' $ \n Level : ' + wolf.level

houston.div.innerText +='Recruit ' + houston.name + ' : ' + houston.prix + ' $ \n Level : ' + houston.level

transportBag.div.innerText += ' : ' + transportBag.prix + ' $'
ECM.div.innerText += ' : ' + ECM.prix + ' $'

statsValue[0].innerText = 'Crimes Commis : aucun'
statsValue[1].innerText = 'Argent Récolté : 0 $'
statsValue[2].innerText = 'Compte en banque : 0 $'
statsValue[3].innerText = 'Multiplicateur (crime) : 1'
statsValue[4].innerText = 'Multiplicateur (money) : 1'

////////////////////////////////////////////////////////////
                    //Fonction Clicker//



let cursorClick = () => {

    let moneyAdditioner = Math.floor(Math.random() * 10) + 1
    console.log(moneyAdditioner)

    crime = crime + (crimeAdditioner * crimeMultiplier)
    totalMoney = totalMoney + (moneyAdditioner * moneyMultiplier)
    totalMoney = Math.round(totalMoney * 100) / 100

    let moneyWin = (moneyAdditioner * moneyMultiplier)

    moneyWin = Math.round(moneyWin * 100 ) / 100

    money = money + (moneyAdditioner * moneyMultiplier)
    money = Math.round(money * 100) / 100 // correction bug js

    statsValue[0].innerText = 'Crimes Commis : ' + crime
    statsValue[1].innerText = 'Argent Récolté : ' + totalMoney + ' $'
    statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
    statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
    statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier

    let displayMoneyWin = () => {
        let axeXy = document.querySelector('.axe-x-y')
        displayAnim.addEventListener('click', (ev) => {

            let x = ev.clientX
            let y = ev.clientY

            axeXy.style.position = "absolute";
            axeXy.style.left = x - 30 + 'px';
            axeXy.style.top = y - 60 + 'px';



        })
        axeXy.innerText = moneyWin + ' $'

    }
    displayMoneyWin()

}


////////////////////////////////////////////////////////////
                    //Auto Clickers//

let autoClickBase = () => {
    let moneyAdditioner = Math.floor(Math.random() * 10) + 1

    crime = crime + (crimeAdditioner * crimeMultiplier)
    totalMoney = totalMoney + (moneyAdditioner * moneyMultiplier)
    totalMoney = Math.round(totalMoney * 100) / 100 // correction bug js

    money = money + (moneyAdditioner * moneyMultiplier)
    money = Math.round(money * 100) / 100 

    statsValue[0].innerText = 'Crimes Commis : ' + crime
    statsValue[1].innerText = 'Argent Récolté : ' + totalMoney + ' $'
    statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
    statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
    statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier


}

