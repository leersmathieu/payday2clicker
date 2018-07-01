//////////////////////////BACKGROUND LEVEL///////////////////////////
window.onload = () => {
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
        unlockHouston()
        unlockChameleon()
        blockerEv1++
    }
    if (dallas.level == 3 && blockerEv2 == 0) {
        unlockSwanSong()
        blockerEv2++
    }
    
    if (houston.level >= 1 && blockerEv3 == 0){
        unlockWick()
        blockerEv3++
    }
    // if ( money >= 3000000 && blockerEv4 == 0){ // alpha 0.2 win
    //     alert('You WIN the Alpha 0.2 of Payday Clickers \n Print Screen this alert and send it to Tamikara \n The very first winner win a prize')
    //     blockerEv4++
    // }
}

const newLevel = ()  => {
    if (ECM.etat == 'unlock' && dallas.level >= 3) {
        backgroundLevel2()
        ECM.etat = 'Finish'
    } else if (ECM.etat == 'Finish' && totalMoney >= 200000 && blockMap1 == 0){
        backgroundLevel3()
    }
} 

// window.setInterval(globalEvent, 400)
// window.setInterval(newLevel, 400)
}