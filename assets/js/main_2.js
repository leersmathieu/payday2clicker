console.log("============================================")
console.log("=      Play fair, don't cheat mate         =")
console.log("============================================")

////////////////////////////////////////////////////////////
//Object && Variable//

let clicker = document.querySelector('#clicker')
let display = document.querySelector('#display')
let displayImgBack = document.querySelector('#displayImgBack')
// let displayAnim = document.querySelector('#displayAnim')
// let stats = document.querySelector('#stats')
// let statsValue = document.querySelectorAll('.statsValue')

let dallas = null
let hoxton = null
let chains = null // => Best one
let wolf = null

let wick = null
let houston = null

let transportBag = null
let ECM = null

let SwanSong = null
let Chameleon = null
//Stats

let Stats = new Stat();
window.onload = () => {

    

    //HEISTER

    /**
     * 
     * @param {String} name - name of the heister
     * @param {Selector} div 
     * @param {Int} price - basic price
     * @param {Int} priceUpgrade - added price (price = price + priceUpgrade)
     * @param {Int} clickAuto - autoclick speed ( in ms : 1000 = 1s )
     * @param {string} titleUpgrade - description / default = "Gain 50% more money"
     * @param {Int} moneyMultiplier - bonus money multiplier
     * @param {Boolean} buyCrimeMultiplier  - true = bonus crime for purchase only / default = true
     * @param {Boolean} buyMoneyMultiplier  - true = bonus money for purchase only / default = true
     */

    dallas = new Heister('Dallas', '#crewDallas', 150, 300)
    dallas.Bonus = new AddToMultiplier(dallas, 5);
    chains = new Heister('Chains', '#crewChains', 900, 400, 3000) // => Best one
    hoxton = new Heister('Hoxton', '#crewHoxton', 3000, 500, 2500)
    wolf = new Heister('Wolf', '#crewWolf', 9000, 600, 2000)

    houston = new Heister('Houston', '#crewHouston', 40000, 5000, 0,"Gain 300% more money", 3 )
    wick = new Heister('John Wick', '#crewWick', 200000, 2000000, 0, "Money Multiplier upped by 50 %", 10)

    //ITEM

    /**
     * 
     * @param {string} name 
     * @param {selector} div 
     * @param {int} price - prix de l'item
     * @param {int} maxCount - number of item can we buy
     * @param {int} multiplier - bonus of item
     */

    transportBag = new Item('Transport Bag', '#itemTransportBag', 300, 10, 0.3)
    ECM = new Item('E.C.M', '#itemECM', 2000, 1, 1)



    //CAPACITY
    SwanSong = new MultiplierMoneyMultiplier('#capSwanSong', 6000, 60000, 2);
    Chameleon = new MultiplierMoneyMultiplier('#capChameleon', 30000, 180000, 1.3);

    ////////////////////////////////////////////////////////////
    //injection préliminaire//

    dallas.div.innerText += ' : ' + dallas.price + ' $ \n Level : ' + dallas.level
    chains.div.innerText += ' : ' + chains.price + ' $ \n Level : ' + chains.level
    hoxton.div.innerText += ' : ' + hoxton.price + ' $ \n Level : ' + hoxton.level
    wolf.div.innerText += ' : ' + wolf.price + ' $ \n Level : ' + wolf.level

    houston.div.innerText += 'Recruit ' + houston.name + ' : ' + houston.price + ' $ \n Level : ' + houston.level
    wick.div.innerText += 'Recruit ' + wick.name + ' : ' + wick.price + ' $ \n Level : ' + wick.level

    transportBag.div.innerText += ' : ' + transportBag.price + ' $'
    ECM.div.innerText += ' : ' + ECM.price + ' $'

    Stats.onDraw();

   
    queueNewFrame();

}


/** - Timer Tick - */
let Tick = () => {
    /** placer le code pour le timer ici */

    dallas.onTick();
    chains.onTick();
    hoxton.onTick();
    wolf.onTick();
    houston.onTick();
    wick.onTick();

    transportBag.onTick();
    ECM.onTick();

    SwanSong.onTick();
    Chameleon.onTick();

    /**fonction Tick() de globalEvent */
    eventTick();

    queueNewFrame();
};
let tick = -1;
let queueNewFrame = () => {

    if (window.requestAnimationFrame)
        tick = window.requestAnimationFrame(Tick);
    else if (window.msRequestAnimationFrame)
        tick = window.msRequestAnimationFrame(Tick);
    else if (window.webkitRequestAnimationFrame)
        tick = window.webkitRequestAnimationFrame(Tick);
    else if (window.mozRequestAnimationFrame)
        tick = window.mozRequestAnimationFrame(Tick);
    else if (window.oRequestAnimationFrame)
        tick = window.oRequestAnimationFrame(Tick);
    else {
        queueNewFrame = function () {};
        tick = window.setTimeout(Tick, 16.7);
    }
};
// queueNewFrame();

/**Arrondir 2 chiffres après la virgule */
const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}