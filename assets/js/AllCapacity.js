class MultiplierMoneyMultiplier extends Capacity
{
    constructor(div, duration=0, reloading=0, moneyMultiplier=0){
        super(div, duration, reloading);
        this.total = 0;
    }

    onStart()
    {
        let moneymultiplier = Stats.MoneyMultiplier;
        this.total = roundNumber( (moneymultiplier * this.moneyMultiplier)-moneymultiplier );
        Stats.MoneyMultiplier += this.total;
    }
    onEnd()
    {
        Stats.MoneyMultiplier -= this.total;
        // let moneymultiplier = (Stats.MoneyMultiplier / this.moneyMultiplier);
        // Stats.MoneyMultiplier = Math.round(moneymultiplier * 100) / 100;
    }
}