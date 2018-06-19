///////////////////////////////////CAPACITY/////////////////////////////////

////SWAN SONG

const resetSwanSong = () => {

    timerSwanSong = 'available'
    capSwanSong.style.opacity = 1

}

let unlockSwanSong = () => {

    capSwanSong.style.visibility = 'visible'
}

let useSwanSong = () => {

    if (timerSwanSong == 'available') {

        moneyMultiplier = moneyMultiplier * 2
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        capSwanSong.style.opacity = 0.5
        capSwanSong.style.backgroundColor = 'red'

        timerSwanSong = 'unavailable'

        setTimeout(() => {

        moneyMultiplier = moneyMultiplier / 2,
        capSwanSong.style.backgroundColor = 'gray',
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier }, 6000)

        setTimeout(() => { 
            resetSwanSong() 
            capSwanSong.style.backgroundColor = 'rgb(255, 255, 51)'
            
        }, 60000)

    } else if (timerSwanSong == 'unavailable') {
        alert('The capacity is reloading')
    }

}


////CHAMELEON

const resetChameleon = () => {

    timerChameleon = 'available'
    capChameleon.style.opacity = 1

}

let unlockChameleon = () => {

    capChameleon.style.visibility = 'visible'
}

let useChameleon = () => {
    
    if (timerChameleon == 'available') {

        moneyMultiplier = (moneyMultiplier * 1.30)
        moneyMultiplier = Math.round(moneyMultiplier * 100) / 100, //debug js
        
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        capChameleon.style.opacity = 0.5
        capChameleon.style.backgroundColor = 'red'

        timerChameleon = 'unavailable'

        setTimeout(() => {
            moneyMultiplier = (moneyMultiplier / 1.30),
            moneyMultiplier = Math.round(moneyMultiplier * 100) / 100, //debug js
            
            capChameleon.style.backgroundColor = 'gray',
            statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        }, 30000)

        setTimeout(() => {
            resetChameleon()
        }, 180000)

    } else if (timerChameleon == 'unavailable') {
        alert('The capacity is reloading')
    }

}