class Heister extends Entity
{
    constructor(name, price, div, cost, buyCrimeMultiplier=true, buyMoneyMultiplier=true, crimeMultiplier=1, moneyMultiplier=0.5)
    {
        super(name, price, div)
        this.level = 0;
        this.clickAuto = false;
        this.clickAutoInterval = 0;

        this.cost = cost;
        this.buyCrimeMultiplier = crimeMultiplier;
        this.buyMoneyMultiplier = moneyMultiplier;
        this.crimeMultiplier = crimeMultiplier;
        this.moneyMultiplier = moneyMultiplier;
    }

    get Level()
    {
        return this.level;
    }

    set Level(value)
    {
        this.level = value;
    }

    get ClickAuto()
    {
        return this.clickAuto;
    }

    set clickAuto(value)
    {
        this.clickAuto = value;       
    }

    // get CrimeMultiplier(){return this.crimeMultiplier;}
    // set CrimeMultiplier(value){this.crimeMultiplier = value; this.div[3].innerText = 'Multiplicateur (crime) : ' + this.CrimeMultiplier}
    // get MoneyMultiplier(){return this.moneyMultiplier;}
    // set MoneyMultiplier(value){this.moneyMultiplier = value; [4].innerText = 'Multiplicateur (money) : ' + this.MoneyMultiplier;}


    /**Timer */
    onTick()
    {
        super.onTick();
        if(this.clickAuto && this.tick >= this.clickAutoInterval)
        {
                this.click -= this.clickAutoInterval;
                this.onAutoClick();
        }
    }
    /**draw div */
    onDraw()
    {
        this.div.innerText = `Upgrade ${this.name} : ${this.price} $ \n Level : ${this.level}`
        this.div.title = 'Gain 50% more money'
    }
    /**click sur l'élément */
    onClick()
    {
        if (Stats.Money > this.price)
        {
            if (this.level === 0)
            {
                if(this.buyCrimeMultiplier)
                    Stats.CrimeMultiplier = Stats.CrimeMultiplier + this.crimeMultiplier;
                if(this.buyMoneyMultiplier)
                    Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.moneyMultiplier;
            }
            if (chains.clickAuto === undefined) 
            {
                chains.clickAuto = window.setInterval(autoClickBase, 2000)
            }
            
            Stats.MoneyMultiplier = Stats.MoneyMultiplier + this.moneyMultiplier;

            let statsmoney = Stats.Money - this.price
            Stats.Money = Math.round(statsmoney * 100) / 100 //(debug)

            this.price = this.price + this.cost;
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