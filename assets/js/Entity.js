class Entity 
{   
    /** Mother Class
     * 
     * @param {string} name - name of object
     * @param {selector} div 
     * @param {int} price 
     */
    constructor(name, div, price) {
        this.name = name;
        this.price = price;
        this.div = document.querySelector(div);
        this.active = false;

       
        this.tick = 0; //total de tick depuis le dernier reset. (cf : resetTick() )
    
        /**fonction bonus */
        this.bonus = null; //this.bonus = new Bonus(this);
    }
    get Bonus(){ return this.bonus; }
    set Bonus(value){ this.bonus = value; }
    
    /**reset le total de tick */
    resetTick()
    {
        this.tick = 0;
    }
    Visibility() {
        this.div.style.visibility = 'visible'
    }
    Hidden() {
        this.div.style.visibility = 'hidden'
    }

    /**Timer */
    onTick()
    {
        this.tick += Stats.CurrentTick
    }

    /**draw div */
    onDraw(){}

    /**click sur l'élément */
    onClick()
    {
        this.bonus();
    }

    onUnLock()
    {
        this.div.style.visibility = 'visible'
    }
}