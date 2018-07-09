//Effects of capacity

class MultiplierMoneyMultiplier extends Capacity
{
    constructor(div, duration=0, reloading=0, moneyMultiplier=0){
        super(div, duration, reloading);
        this.moneyMultiplier = moneyMultiplier;
        this.total = 0;
    }

    onStart()
    {
        super.onStart();
        let moneymultiplier = Stats.MoneyMultiplier;
        this.total = moneymultiplier * this.moneyMultiplier - moneymultiplier 
        Stats.MoneyMultiplier = roundNumber(Stats.MoneyMultiplier + this.total);
    }
    onEnd()
    {
        super.onEnd();
        Stats.MoneyMultiplier = roundNumber(Stats.MoneyMultiplier - this.total);
        
        
    }
}

