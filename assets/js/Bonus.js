class Bonus
{
    constructor(entity){
        this.entity = entity
    }
   
    firstClick(){}
    onExecute(){}
}

class AddToMultiplier extends Bonus 
{
    constructor(entity, addNumber, crimeNumber, onBuyNumber) {
        super(entity)
        this.addNumber = addNumber
        this.crimeNumber = crimeNumber
        this.onBuyNumber = onBuyNumber;
    }
    firstClick(){
        if(this.buyCrimeMultiplier)
            Stats.CrimeMultiplier = Stats.CrimeMultiplier + this.crimeNumber;
        if(this.buyMoneyMultiplier)
            Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.onBuyNumber;
    }
    onExecute(){
        Stats.MoneyMultiplier += this.addNumber

        
    }
}