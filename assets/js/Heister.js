// Heister class

class Heister extends Entity
{

    /**HEISTER PARAM
     * 
     * @param {String} name - name of the heister
     * @param {Selector} div 
     * @param {Int} price - basic price
     * @param {Int} clickAuto - autoclick speed ( in ms : 1000 = 1s )
     * @param {Int} priceUpgrade - added price (price = price + priceUpgrade)
     *
     * @param {Boolean} buyCrimeBonus  - if true : SET one BONUS crime (OnBuyCrimeBonus) 
     * @param {Boolean} buyMoneyMultiplier  - if true : SET one BONUS (OnBuyBonus)
     *
     **/

    constructor(name, div, price, priceUpgrade, clickAuto = 0, titleUpgrade = "Gain 50% more money", buyCrimeBonus = true, buyMoneyMultiplier = true)
    {
        super(name, div, price)

        this.level = 0;
        this.crimeMultiplier = 1;

        this.clickAutoInterval = clickAuto;
        this.priceUpgrade = priceUpgrade;
        this.titleUpgrade = titleUpgrade;

        this.buyCrimeBonus = buyCrimeBonus;
        this.buyMoneyMultiplier = buyMoneyMultiplier; 

    }



    /**Timer */
    onTick()
    {
        super.onTick();
        if(this.active && this.clickAutoInterval !== 0 && this.tick >= this.clickAutoInterval)
        {
            let nbrTick = Math.floor(this.tick / this.clickAutoInterval);
            console.log( "this.tick : " + this.tick + " nbrTick : " + nbrTick)
            this.tick -= this.clickAutoInterval * nbrTick;
            this.onAutoClick( nbrTick);
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
                this.tick = 0;
                this.active=true
            }

            this.bonus.onExecute();

            let statsmoney = Stats.Money - this.price
            Stats.Money = roundNumber(statsmoney);

            this.price = this.price + this.priceUpgrade;
            this.level++

            this.onDraw();

        } else {
            alert('Solde insuffisant')
        }
    }

    onAutoClick(nbrtick)
    {
        Stats.MoneyAdditioner = (Math.floor(Math.random() * 10) + 1) * nbrtick;

        Stats.Crime = (Stats.Crime + (Stats.CrimeAdditioner * Stats.CrimeMultiplier)) * nbrtick

        let totalmoney = (Stats.TotalMoney + (Stats.MoneyAdditioner * Stats.MoneyMultiplier)) * nbrtick
        Stats.TotalMoney = roundNumber(totalmoney) // correction bug js

        let money = (Stats.Money + (Stats.MoneyAdditioner * Stats.MoneyMultiplier)) * nbrtick;
        Stats.Money = roundNumber(money) 
    }
}