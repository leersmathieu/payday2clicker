class Item extends Entity
{
    constructor(name, price, div, maxCount, multiplier) {
        super(name, price, div)
        this.counter = 0;
        this.state = false;
        this.maxCount;
        this.multiplier;
    }
    
    get Counter()
    {
        return this.counter;
    }

    set Counter(value)
    {
        this.counter = value;                
    }

    get State()
    {
        return this.state;
    }

    set State(value)
    {
        this.state = value;
    }

    get MaxCount()
    {
        return this.MaxCount;
    }

    set MaxCount(value)
    {
        this.maxCount = value;
    }

    get Multiplier()
    {
        return this.multiplier;
    }

    set Multiplier(value)
    {
        this.multiplier = value;
    }

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
                Stats.moneyMultiplier = Stats.moneyMultiplier + this.multiplier;
                Stats.moneyMultiplier = Math.round(Stats.moneyMultiplier * 100) / 100;

                Stats.Money = Stats.Money - this.price;
                Stats.Money = Math.round(Stats.Money * 100) / 100;

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