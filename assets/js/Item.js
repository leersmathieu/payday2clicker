class Item extends Entity
{
    /**
     * 
     * @param {string} name 
     * @param {selector} div 
     * @param {int} price - prix de l'item
     * @param {int} maxCount - number of item can we buy
     * @param {int} multiplier - bonus of item
     */
    constructor(name, div, price, maxCount, multiplier)
   { 
        super(name, div, price)
        this.counter = 0;
        this.state = false; // false = unlock; true = lock;
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

    get State()
    {
        return this.state;
    }

    set State(value)
    {
        this.state = value;
    }

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
        if (this.counter <= this.maxCount) {
            if (this.price <= Stats.Money) {
                this.state = true;
                let moneymultiplier = Stats.MoneyMultiplier + this.multiplier;
                Stats.MoneyMultiplier = roundNumber(moneymultiplier);

                let statsmoney = Stats.Money - this.price;
                Stats.Money = roundNumber(statsmoney);

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