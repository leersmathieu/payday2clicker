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
        this.counter = 0
        this.state = false // false = unlock true = lock
        this.maxCount = maxCount
    }
    

    /**Timer */
    onTick()
    {
        super.onTick()
    }

    /**draw div */
    onDraw()
    {
        this.div.innerText = `Uppgrade ${this.name} : ${this.price}$`

        let transportBagDiv = document.querySelector('#itemTransportBag')

        if (this.div == transportBagDiv) {
            this.div.innerText = `More ${this.name} : ${this.price}$`
        }
    }

    /**click sur l'élément */
    onClick()
    {
        if (this.counter <= this.maxCount) {

            if (this.price <= Stats.Money) {

                this.state = true

                if(this.bonus != null){
                    this.bonus.onExecute()
                }

                let statsmoney = Stats.Money - this.price
                Stats.Money = roundNumber(statsmoney)

                //EXCEPTION
                
                let drillDiv = document.querySelector('#itemDrill')
                
                if (this.div == drillDiv){
                    this.price *= 3
                }

                //////////////////

                this.counter++
                this.onDraw()

            } else {
                alert('Not enough money')
            }
            if (this.counter == this.maxCount) {
                this.Hidden()
            }
        }
    }
}