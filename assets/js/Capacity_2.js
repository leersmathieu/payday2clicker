class Capacity
{
    
    /**
     * 
     * @param {selector} div 
     * @param {int} duration  - duration of capacity is active
     * @param {int} reloading  - cooldown
     */
    
    constructor(div, duration=0, reloading=0)
    {
        this.div = document.querySelector(div);
        this.available = true;
        
        /**temps écouler depuis le dernier tick */
        // this.lastTick = Date.now();         //dernier tick
        // this.currentTick = Date.now();      //milliSecond depuis le dernier click
        
        //End
        this.activeEnd = false;
        this.tickEnd = 0;
        this.duration = duration;
        /**Reset */
        this.activeReset = false;
        this.tickReset = 0;
        this.reloading = reloading;

        this.effect = null;
    }

    /**Timer */
    onTick()
    {
        // this.currentTick = Date.now() - this.lastTick;
        // this.lastTick = Date.now();

        this.tickEnd += Stats.CurrentTick
        if(this.activeEnd && this.tickEnd >= this.duration)
        {
            this.tickEnd -= this.duration;
            this.activeEnd = false;
            this.onEnd();
        }
        this.tickReset += Stats.CurrentTick
        if(this.activeReset && this.tickReset >= this.reloading)
        {
            this.tickReset -= this.reloading;
            this.activeReset = false;
            this.onReset();
        }
    }

    /**draw div */
    onDraw(){}

    /**click sur l'élément */
    onClick()
    {
        if (this.available){
            this.available = false;
            this.div.style.opacity = 0.5
            this.div.style.backgroundColor = 'red'

            /** ajout du bonus  */
            this.onStart();
            /** lance le timer de la fonction onEnd() */
            this.activeEnd = true;
            this.tickEnd = 0;
            /** lance le timer de la fonction onReset() */
            this.activeReset = true;
            this.tickReset = 0;

        } else if (!this.available) {
            alert('The capacity is reloading')
        }
    }

    onUnLock()
    {
        this.div.style.visibility = 'visible';
    }

    onReset()
    {
        this.available = true;
        this.div.style.opacity = 1;
        this.div.style.backgroundColor = 'rgb(255, 255, 51)';
    }
    onStart(){}
    onEnd()
    {
        this.div.style.backgroundColor = 'gray';
    }
}