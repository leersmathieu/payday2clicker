class Capacity
{
    constructor(div, timeUse=0, timeReset=0, moneyMultiplier=0)
    {
        this.div = document.querySelector(div);
        this.available = true;
        this.moneyMultiplier = moneyMultiplier;
        
        /**temps écouler depuis le dernier tick */
        this.lastTick = Date.now();         //dernier tick
        this.currentTick = Date.now();      //milliSecond depuis le dernier click
        
        this.activeUse = false;
        this.tickUse = 0;
        this.timeUse = timeUse;
        /**reset */
        this.activeReset = false;
        this.tickReset = 0;
        this.timeReset = timeReset;
    }

    /**Timer */
    onTick()
    {
        this.currentTick = Date.now() - this.lastTick;
        this.lastTick = Date.now();
        this.tickUse += this.currentTick;

        this.tickUse += this.currentTick;
        if(this.activeUse && this.tickUse >= this.timeUse)
        {
            this.tickUse -= this.timeUse;
            this.onUse();
        }
        this.tickReset += this.currentTick;
        if(this.activeReset && this.tickReset >= this.timeReset)
        {
            this.tickReset -= this.timeReset;
            this.onReset();
        }
    }
    /**draw div */
    onDraw(){}
    /**click sur l'élément */
    onClick()
    {
        if (this.available){
            this.available = false;
            Stats.MoneyMultiplier *= this.moneyMultiplier;
            this.div.style.opacity = 0.5
            this.div.style.backgroundColor = 'red'

            /** lance le timer de la fonction onUse() */
            this.activeUse = true;
            this.tickUse = 0;
            /** lance le timer de la fonction onReset() */
            this.activeReset = true;
            this.tickReset = 0;

        } else if (!this.available) {
            alert('The capacity is reloading')
        }
    }

    onUse()
    {
        let moneymultiplier = (Stats.MoneyMultiplier / 1.30);
        Stats.MoneyMultiplier = Math.round(moneymultiplier * 100) / 100;
    }
    onReset()
    {
        this.available = true;
        this.div.style.opacity = 1;
        this.div.style.backgroundColor = 'rgb(255, 255, 51)';
        this.activeReset = false;
    }

    onUnLock()
    {
        this.div.style.visibility = 'visible';
    }

}