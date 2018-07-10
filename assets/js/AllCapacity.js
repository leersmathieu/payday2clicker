//Effects of capacity

class MultiplierMoneyMultiplier extends Capacity
{
    /**
     * 
     * @param {selector} div 
     * @param {int} duration 
     * @param {int} reloading 
     * @param {int} bonusValue - value of THIS bonus
     */
    constructor(div, duration=0, reloading=0, bonusValue=0){
        super(div, duration, reloading);
        this.bonusValue = bonusValue;
        this.total = 0;
    }

    onStart()
    {
        super.onStart();
        let moneymultiplier = Stats.MoneyMultiplier;
        this.total = moneymultiplier * this.bonusValue - moneymultiplier 
        Stats.MoneyMultiplier = roundNumber(Stats.MoneyMultiplier + this.total);
    }
    onEnd()
    {
        super.onEnd();
        Stats.MoneyMultiplier = roundNumber(Stats.MoneyMultiplier - this.total);
        
        
    }
}

