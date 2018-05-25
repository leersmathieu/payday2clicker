///////////////////////////////////CAPACITY/////////////////////////////////

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

        setTimeout(() => { resetSwanSong() }, 30000)

    } else if (timerSwanSong == 'unavailable') {
        alert('The capacity is reloading')
    }

}