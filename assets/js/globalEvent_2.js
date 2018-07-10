//////////////////////////BACKGROUND LEVEL///////////////////////////


const backgroundLevel2 = () => {

    displayImgBack.style.backgroundImage = "url('assets/img/bank.jpg')"
    alert('New level Unlock !')
}

const backgroundLevel3 = () => {

    displayImgBack.style.backgroundImage = "url('assets/img/shadowRaid.jpg')"
    alert('New level Unlock !')
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

let blockMap1 = 0

const newLevel = ()  => {
    if (ECM.state && dallas.level >= 3) {
        backgroundLevel2()
        ECM.state = false
    } else if (ECM.state == false && Stats.totalMoney >= 300000 && blockMap1 == 0){
        backgroundLevel3()
        blockMap1++
        
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

    moneyWin = roundNumber(moneyWin)

    let money = Stats.MoneyAdditioner * Stats.MoneyMultiplier
    money = roundNumber(money)
    Stats.TotalMoney += money; 
    Stats.Money += money 

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