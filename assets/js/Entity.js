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

        /**temps écouler depuis le dernier tick */
        // this.lastTick = Date.now();         //dernier tick
        // this.currentTick = Date.now();      //milliSecond depuis le dernier click
        this.tick = 0;                      //total de tick depuis le dernier reset. (cf : resetTick() )
    
        /**fonction bonus */
        this.bonus = null; //this.bonus = new Bonus(this);
    }
    get Bonus(){ return this.bonus; }
    set Bonus(value){ this.bonus = value; }
    // get Name()
    // {
    //     return this.name;
    // }
    // set Name(value)
    // {
    //     this.name = value;
    // }

    // get Price()
    // {
    //     return this.price;
    // }    
    
    // set Price(value)
    // {
    //     this.price = value;
    // }

    // get Div()
    // {
    //     return this.div;
    // }

    // set Div(value)
    // {
    //     this.div = value;
    // }

    // get Tick()
    // {
    //     return this.tick;
    // }

    // get Active()
    // {
    //     return this.active;
    // }

    // set Active(value)
    // {
    //     this.active = value;
    // }
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
        // this.currentTick = Date.now() - this.lastTick;
        // this.lastTick = Date.now();
        // this.tick += this.currentTick;
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