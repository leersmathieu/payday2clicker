class Heister extends Entity
{

    /**
     * 
     * @param {String} name - name of the heister
     * @param {Selector} div 
     * @param {Int} price - basic price
     * @param {Int} clickAuto - autoclick speed ( in ms : 1000 = 1s )
     * @param {Int} priceUpgrade - added price (price = price + priceUpgrade)
     * @param {Int} moneyMultiplier - bonus money multiplier
     * @param {Boolean} buyCrimeMultiplier  - true = bonus crime for purchase only 
     * @param {Boolean} buyMoneyMultiplier  - true = bonus money for purchase only
     */



    constructor(name, div, price, priceUpgrade, clickAuto = 0, titleUpgrade = "Gain 50% more money", moneyMultiplier = 0.5, buyCrimeMultiplier = true, buyMoneyMultiplier = true)
    {
        super(name, div, price)

        this.level = 0;
        this.crimeMultiplier = 1;
    
        this.clickAutoInterval = clickAuto;
        this.priceUpgrade = priceUpgrade;
        this.titleUpgrade = titleUpgrade;
        this.moneyMultiplier = moneyMultiplier;
        this.buyCrimeMultiplier = buyCrimeMultiplier;
        this.buyMoneyMultiplier = buyMoneyMultiplier; 

    }
    
    get Level()
    {
        return this.level;
    }

    set Level(value)
    {
        this.level = value;
    }

 

    // get CrimeMultiplier(){return this.crimeMultiplier;}
    // set CrimeMultiplier(value){this.crimeMultiplier = value; this.div[3].innerText = 'Multiplicateur (crime) : ' + this.CrimeMultiplier}
    // get MoneyMultiplier(){return this.moneyMultiplier;}
    // set MoneyMultiplier(value){this.moneyMultiplier = value; [4].innerText = 'Multiplicateur (money) : ' + this.MoneyMultiplier;}


    /**Timer */
    onTick()
    {
        super.onTick();
        if(this.active && this.clickAutoInterval !== 0 && this.tick >= this.clickAutoInterval)
        {
                this.tick -= this.clickAutoInterval;
                this.onAutoClick();
        }
    }
    /**draw div */
    onDraw()
    {
        this.div.innerText = `Upgrade ${this.name} : ${this.price} $ \n Level : ${this.level}`
        this.div.title = this.titleUpgrade;
    }
    /**click sur l'élément */
    onClick()
    {
        if (Stats.Money > this.price)
        {
            if (this.level === 0)
            {
                this.bonus.firstClick();
                // if(this.buyCrimeMultiplier)
                //     Stats.CrimeMultiplier = Stats.CrimeMultiplier + this.crimeMultiplier;
                // if(this.buyMoneyMultiplier)
                //     Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.moneyMultiplier;
                this.tick = 0;
                this.active=true
            }
            // if (this.clickAuto === undefined) 
            // {
            //     this.clickAuto = window.setInterval(autoClickBase, 2000)
            // }
            
            // Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.moneyMultiplier;
            this.bonus.onExecute();

            let statsmoney = Stats.Money - this.price
            Stats.Money = roundNumber(statsmoney);
            // Stats.Money = Math.round(statsmoney * 100) / 100 //(debug)

            this.price = this.price + this.priceUpgrade;
            this.level++

            this.onDraw();
        } else {
            alert('Solde insuffisant')
        }
    }
    onAutoClick()
    {
        Stats.MoneyAdditioner = Math.floor(Math.random() * 10) + 1

        Stats.Crime = Stats.Crime + (Stats.CrimeAdditioner * Stats.CrimeMultiplier)

        let totalmoney = Stats.TotalMoney + (Stats.MoneyAdditioner * Stats.MoneyMultiplier)
        Stats.TotalMoney = Math.round(totalmoney * 100) / 100 // correction bug js

        let money = Stats.Money + (Stats.MoneyAdditioner * Stats.MoneyMultiplier)
        Stats.Money = Math.round(money * 100) / 100 
    }
}