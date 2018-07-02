class Item extends Entity
{
    constructor(name, div, price, maxCount, multiplier)
   { 
        super(name, div, price)
        this.counter = 0;
        this.state = false;
        this.maxCount = maxCount;
        this.multiplier = multiplier;
    }
    
    // get Counter()
    // {
    //     return this.counter;
    // }

    // set Counter(value)
    // {
    //     this.counter = value;                
    // }

    // get State()
    // {
    //     return this.state;
    // }

    // set State(value)
    // {
    //     this.state = value;
    // }

    // get MaxCount()
    // {
    //     return this.maxCount;
    // }

    // set MaxCount(value)
    // {
    //     this.maxCount = value;
    // }

    // get Multiplier()
    // {
    //     return this.multiplier;
    // }

    // set Multiplier(value)
    // {
    //     this.multiplier = value;
    // }

    /**Timer */
    onTick()
    {
        super.onTick();
        /**code here! */
    }
    /**draw div */
    onDraw()
    {
        this.div.innerText = `Plus de ${this.name} : ${this.price}$`
    }
    /**click sur l'élément */
    onClick()
    {
        this.onBuy();
    }
    /**Achat de l'item */
    onBuy()
    {
        if (this.counter <= this.MaxCount) {
            if (this.price <= Stats.Money) {
                this.state = true;
                let moneymultiplier = Stats.moneyMultiplier + this.multiplier;
                Stats.moneyMultiplier = Math.round(moneymultiplier * 100) / 100;

                let statsmoney = Stats.Money - this.price;
                Stats.Money = Math.round(statsmoney * 100) / 100;

                this.onDraw();

                this.counter++
            } else {
                alert('Not enough money');
            }
            if (this.counter == this.maxCount) {
                this.Hidden();
            }
        }
    }
}