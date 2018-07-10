// Item class

class Item extends Entity
{
    /**
     * 
     * @param {string} name 
     * @param {selector} div 
     * @param {int} price - prix de l'item
     * @param {int} maxCount - number of item can we buy
     * 
     **/
    constructor(name, div, price, maxCount)
   { 
        super(name, div, price)
        this.counter = 0;
        this.state = false; // false = unlock; true = lock;
        this.maxCount = maxCount;
    }
    

    /**Timer */
    onTick()
    {
        super.onTick();
    }

    /**draw div */
    onDraw()
    {
        this.div.innerText = `Plus de ${this.name} : ${this.price}$`
    }

    /**click sur l'élément */
    onClick()
    {
        if (this.counter <= this.maxCount) {

            if (this.price <= Stats.Money) {

                this.state = true;

                if(this.bonus != null){
                    this.bonus.onExecute();
                }

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