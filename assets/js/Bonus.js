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
    /**
     * 
     * @param {*} entity 
     * @param {*} bonusValue - value of this bonus
     * @param {*} OnBuyCrimeBonus - when purchase crime bonus multiplier
     * @param {*} OnBuyBonus - when purchase bonus
     */
    constructor(entity, bonusValue, OnBuyCrimeBonus, OnBuyBonus) {
        super(entity)
        this.bonusValue = bonusValue
        this.OnBuyCrimeBonus = OnBuyCrimeBonus
        this.OnBuyBonus = OnBuyBonus;
    }
    firstClick(){
        if(this.entity.buyCrimeMultiplier)
            Stats.CrimeMultiplier = Stats.CrimeMultiplier + this.OnBuyCrimeBonus;
        if(this.entity.buyMoneyMultiplier)
            Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.OnBuyBonus;
    }
    onExecute(){
        Stats.MoneyMultiplier += this.bonusValue

        
    }
}

class MultiplyToMultiplier extends Bonus {
    constructor(entity, bonusValue, OnBuyCrimeBonus, OnBuyBonus) {
        super(entity)
        this.bonusValue = bonusValue
        this.OnBuyCrimeBonus = OnBuyCrimeBonus
        this.OnBuyBonus = OnBuyBonus;
    }
    firstClick() {
        if (this.entity.buyCrimeMultiplier)
            Stats.CrimeMultiplier = Stats.CrimeMultiplier + this.OnBuyCrimeBonus;
        if (this.entity.buyMoneyMultiplier)
            Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.OnBuyBonus;
    }
    onExecute() {
        Stats.MoneyMultiplier *= this.bonusValue


    }
}