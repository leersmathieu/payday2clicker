class Entity
{
    constructor(name, price, div) {
        this.name = name;
        this.price = price;
        this.div = div;

        /**temps écouler depuis le dernier tick */
        this.lastTick = Date.now();         //dernier tick
        this.currentTick = Date.now();      //milliSecond depuis le dernier click
        this.tick = 0;                      //total de tick depuis le dernier reset. (cf : resetTick() )
    }
    get Name()
    {
        return name;
    }
    set Name(value)
    {
        name = value;
    }

    get Price()
    {
        return price;
    }    
    
    set Price(value)
    {
        price = value;
    }

    get Div()
    {
        return div;
    }

    set Div(value)
    {
        div = value;
    }

    get Tick()
    {
        return this.tick;
    }
    /**reset le total de tick */
    resetTick()
    {
        this.tick = 0;
    }
    Visibility = () =>{
        this.div.style.visibility = 'visible'
    }
    Hidden = () =>{
        this.div.style.visibility = 'hidden'
    }

    /**Timer */
    onTick()
    {
        this.currentTick = Date.now() - this.lastTick;
        this.lastTick = Date.now();
        this.tick += this.currentTick;
    }
    /**draw div */
    onDraw(){}
    /**click sur l'élément */
    onClick(){}
}