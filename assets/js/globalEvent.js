//////////////////////////BACKGROUND LEVEL///////////////////////////

const backgroundLevel2 = () => {

    displayImgBack.style.backgroundImage = "url('assets/img/bank.jpg')"
    alert('New level Unlock !')

}

////////////////////////////////EVENT/////////////////////////////

let blockerEv1 = 0 // Bloqueur d'évènement
let blockerEv2 = 0
let blockerEv3 = 0


const globalEvent = () => {
    if (dallas.level >= 2 && chains.level >= 2 && hoxton.level >= 2 && wolf.level >= 2 && blockerEv1 == 0) {
        alert('Basic Payday gang recruited \n New character unlock')
        unlockHouston()
        blockerEv1++
    }
    if (dallas.level == 3 && blockerEv2 == 0) {
        unlockSwanSong()
        blockerEv2++
    }
    //Alpha Win
    if ( money >= 1000000 && blockerEv3 == 0){
        alert('You WIN the Alpha of Payday Clickers \n Print Screen this alert and send it to Tamikara \n The very first winner win a prize')
        blockerEv3++
    }
}

const newLevel = ()  => {
    if (ECM.etat == 'unlock' && dallas.level >= 3) {
        backgroundLevel2()
        ECM.etat = 'Finish'
    }
} 

window.setInterval(globalEvent, 100)
window.setInterval(newLevel, 100)


