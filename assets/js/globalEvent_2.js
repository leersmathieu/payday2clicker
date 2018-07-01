//////////////////////////BACKGROUND LEVEL///////////////////////////

let blockMap1 = 0

const backgroundLevel2 = () => {

    displayImgBack.style.backgroundImage = "url('assets/img/bank.jpg')"
    alert('New level Unlock !')

}

const backgroundLevel3 = () => {

    displayImgBack.style.backgroundImage = "url('assets/img/shadowRaid.jpg')"
    alert('New level Unlock !')
    blockMap1++
    

}

////////////////////////////////EVENT/////////////////////////////

let blockerEv1 = 0 // Bloqueur d'évènement
let blockerEv2 = 0
let blockerEv3 = 0
let blockerEv4 = 0



const globalEvent = () => {
    if (dallas.level >= 1 && chains.level >= 1 && hoxton.level >= 1 && wolf.level >= 1 && blockerEv1 == 0) {
        alert('Basic Payday gang recruited \n New character unlock')
        houston.onUnLock();
        Chameleon.onUnLock();
        blockerEv1++
    }
    if (dallas.level == 3 && blockerEv2 == 0) {
        SwanSong.onUnLock()
        blockerEv2++
    }
    
    if (houston.level >= 1 && blockerEv3 == 0){
        wick.onUnLock()
        blockerEv3++
    }
   
}

const newLevel = ()  => {
    if (ECM.etat == 'unlock' && dallas.level >= 3) {
        backgroundLevel2()
        ECM.etat = 'Finish'
    } else if (ECM.etat == 'Finish' && totalMoney >= 200000 && blockMap1 == 0){
        backgroundLevel3()
    }
} 

let globalEventTime = 400;
let globalEventTick = 0;
let newLevelTime = 400;
let newLevelTick = 0;
let lastTick = Date.now();
let currentTick = Date.now();

const eventTick = () => {
    this.currentTick += Date.now() - this.lastTick;
    this.lastTick = Date.now();

    globalEventTick += currentTick;
    if(globalEventTick >= globalEventTime)
        globalEvent();
    
    newLevelTick += currentTick;
    if(newLevelTick >= newLevelTime)
        newLevel();
}


////////////////////////////////////////////////////////////
                    //Fonction Clicker//

let cursorClick = () => {

    Stats.MoneyAdditioner = Math.floor(Math.random() * 10) + 1
    // console.log(moneyAdditioner)

    Stats.Crime = Stats.Crime + (Stats.CrimeAdditioner * Stats.CrimeMultiplier)
    let totalmoney = Stats.TotalMoney + (Stats.MoneyAdditioner * Stats.MoneyMultiplier)
    totalMoney = Math.round(totalmoney * 100) / 100 // correction bug js

    let moneyWin = (Stats.MoneyAdditioner * Stats.MoneyMultiplier)

    moneyWin = Math.round(moneyWin * 100 ) / 100

    let money = Stats.MoneyAdditioner * Stats.MoneyMultiplier
    money = Math.round(money * 100) / 100
    Stats.TotalMoney += money; 
    Stats.Money += money 

    // statsValue[0].innerText = 'Crimes Commis : ' + Stats.Crime
    // statsValue[1].innerText = 'Argent Récolté : ' + Stats.TotalMoney + ' $'
    // statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
    // statsValue[3].innerText = 'Multiplicateur (crime) : ' + Stats.CrimeMultiplier
    // statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier

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