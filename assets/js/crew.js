const unlockHouston = () => {
    houston.div.style.visibility = 'visible'
}

const unlockWick = () => {
    wick.div.style.visibility = 'visible'
}

///////////////////////////////////CREW/////////////////////////////////

let recruitDallas = () => {

    if (money > dallas.prix) {

        if (dallas.level == 0) {

            crimeMultiplier = crimeMultiplier + 1
            moneyMultiplier = moneyMultiplier + 0.5

        }
        
        moneyMultiplier = moneyMultiplier + 0.5

        money = money - dallas.prix
        money = Math.round(money * 100) / 100 //(debug)

        dallas.prix = dallas.prix + 300
        dallas.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        dallas.div.innerText = `Upgrade ${dallas.name} : ${dallas.prix} $ \n Level : ${dallas.level}`
        dallas.div.title = 'Gain 50% more money'

    } else {
        alert('Solde insuffisant')
    }

}

let recruitChains = () => {

    if (money > chains.prix) {

        if (chains.level == 0) {

            crimeMultiplier = crimeMultiplier + 1
            moneyMultiplier = moneyMultiplier + 0.5

        }
        if (chains.clickAuto == undefined) {

            chains.clickAuto = window.setInterval(autoClickBase, 2000)

        }
        moneyMultiplier = moneyMultiplier + 0.5

        money = money - chains.prix
        money = Math.round(money * 100) / 100

        chains.prix = chains.prix + 400
        chains.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        chains.div.innerText = `Upgrade ${chains.name} : ${chains.prix} $ \n Level : ${chains.level}`
        chains.div.title = 'Gain 50% more money'
        

    } else {
        alert('Solde insuffisant')
    }

}

let recruitHoxton = () => {

    if (money > hoxton.prix) {

        if (hoxton.level == 0) {

            crimeMultiplier = crimeMultiplier + 1
            moneyMultiplier = moneyMultiplier + 0.5

        }
        if (hoxton.clickAuto == undefined) {

            hoxton.clickAuto = window.setInterval(autoClickBase, 1500)

        }
        moneyMultiplier = moneyMultiplier + 0.5

        money = money - hoxton.prix
        money = Math.round(money * 100) / 100

        hoxton.prix = hoxton.prix + 500
        hoxton.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        hoxton.div.innerText = `Upgrade ${hoxton.name} : ${hoxton.prix} $ \n Level : ${hoxton.level}`
        hoxton.div.title = 'Gain 50% more money'
        

    } else {
        alert('Solde insuffisant')
    }

}

let recruitWolf = () => {

    if (money > wolf.prix) {

        if (wolf.level == 0) {

            crimeMultiplier = crimeMultiplier + 1
            moneyMultiplier = moneyMultiplier + 0.5

        }
        if (wolf.clickAuto == undefined) {

            wolf.clickAuto = window.setInterval(autoClickBase, 1000)

        }
        moneyMultiplier = moneyMultiplier + 0.5

        money = money - wolf.prix
        money = Math.round(money * 100) / 100

        wolf.prix += 600
        wolf.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        wolf.div.innerText = `Upgrade ${wolf.name} : ${wolf.prix} $ \n Level : ${wolf.level}`
        wolf.div.title = 'Gain 50% more money'
        

    } else {
        alert('Solde insuffisant')
    }

}

let recruitHouston = () => {

    if (money > houston.prix) {

        if (houston.level == 0) {

            crimeMultiplier = crimeMultiplier + 1

        }
        
        moneyMultiplier = moneyMultiplier + 3

        money = money - houston.prix
        money = Math.round(money * 100) / 100

        houston.prix += 5000
        houston.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        houston.div.innerText = `Upgrade ${houston.name} : ${houston.prix} $ \n Level : ${houston.level}`
        houston.div.title = 'Gain 300% more money'
        

    } else {
        alert('Solde insuffisant')
    }

}

let recruitWick = () => {

    if (money > wick.prix) {

        if (wick.level == 0) {

            crimeMultiplier = crimeMultiplier + 1

        }

        moneyMultiplier = moneyMultiplier + (moneyMultiplier * 0.5)

        money = money - wick.prix
        money = Math.round(money * 100) / 100

        wick.prix += 100000
        wick.level++

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[3].innerText = 'Multiplicateur (crime) : ' + crimeMultiplier
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
        wick.div.innerText = `Upgrade ${wick.name} : ${wick.prix} $ \n Level : ${wick.level}`
        wick.div.title = 'Money Multiplier upped by 50%'

    } else {
        alert('Solde insuffisant')
    }

}

