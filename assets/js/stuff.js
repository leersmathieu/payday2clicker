//////////////////////////////STUFF/////////////////////////////////

let buyTransportBag = () => {
    if (transportBag.counter <= 10) {

        if (money > transportBag.prix) {
            moneyMultiplier = moneyMultiplier + 0.2
            moneyMultiplier = Math.round(moneyMultiplier * 100) / 100

            money = money - transportBag.prix
            money = Math.round(money * 100) / 100

            statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
            statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier
            transportBag.div.innerText = 'Plus de Transport Bag : ' + transportBag.prix + ' $'

            transportBag.counter++

        } else {
            alert('Solde insuffisant')
        }
        if (transportBag.counter == 10) {
            transportBag.div.style.visibility = 'hidden'

        }

    }
}

let buyECM = () => {
    if (money > ECM.prix){
        moneyMultiplier += 1
        moneyMultiplier = Math.round(moneyMultiplier * 100) / 100

        money = money - ECM.prix
        money = Math.round(money * 100) / 100

        statsValue[2].innerText = 'Compte en banque : ' + money + ' $'
        statsValue[4].innerText = 'Multiplicateur (money) : ' + moneyMultiplier

        ECM.etat = 'unlock'
        ECM.div.style.visibility='hidden'

    }
}