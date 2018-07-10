console.log("============================================")
console.log("=      Play fair, don't cheat mate         =")
console.log("============================================")

////////////////////////////////////////////////////////////
//Object && Variable//

/* init var */
let dallas = null
let hoxton = null
let chains = null
let wolf = null

let wick = null
let houston = null

let transportBag = null
let ECM = null
let drill = null

let SwanSong = null
let Chameleon = null

//Stats
let Stats = new Stat();
/////////////////////////

window.onload = () => {


    /**HEISTER PARAM
     * 
     * @param {String} name - name of the heister
     * @param {Selector} div 
     * @param {Int} price - basic price
     * @param {Int} priceUpgrade - added price (price = price + priceUpgrade)
     * @param {Int} clickAuto - autoclick speed ( in ms : 1000 = 1s )
     * @param {string} titleUpgrade - description / default = "Gain 50% more money"
     * 
     * @param {Boolean} buyCrimeBonus  - if true : SET one BONUS crime (OnBuyCrimeBonus) / default = true
     * @param {Boolean} buyMoneyMultiplier  - if true : SET one BONUS (OnBuyBonus) / default = true
     *
     **BONUS PARAM
     * 
     * @param {*} entity 
     * @param {*} bonusValue - value of this bonus
     * 
     * @param {*} OnBuyCrimeBonus - when purchase crime bonus multiplier
     * @param {*} OnBuyBonus - when purchase bonus
     * 
     **/

    dallas = new Heister('Dallas', '#crewDallas', 150, 300)
    dallas.Bonus = new AddToMultiplier(dallas, 0.5, 1, 0.5)
    chains = new Heister('Chains', '#crewChains', 900, 400, 3000) 
    chains.Bonus = new AddToMultiplier(chains, 0.5, 1, 0.5)
    hoxton = new Heister('Hoxton', '#crewHoxton', 6000, 500, 2500)
    hoxton.Bonus = new AddToMultiplier(hoxton, 0.5, 1, 0.5)
    wolf = new Heister('Wolf', '#crewWolf', 17500, 600, 2000)
    wolf.Bonus = new AddToMultiplier(wolf, 0.5, 1, 0.5)
    
    houston = new Heister('Houston', '#crewHouston', 50000, 5500, 0,"Gain 300% more money" )
    houston.Bonus = new AddToMultiplier(houston, 3, 1, 0)
    wick = new Heister('John Wick', '#crewWick', 200000, 200000, 0, "Money Multiplier upped by 25 %")
    wick.Bonus = new MultiplyToMultiplier(wick, 1.25,1,0)
    clover = new Heister ('Clover', '#crewClover', 999999,777777,4000, "Upgrade autoclicker speed")
    clover.Bonus = new CloverBonus (clover, 1,1,0)



    /**ITEM PARAM
     * 
     * @param {string} name 
     * @param {selector} div 
     * @param {int} price - prix de l'item
     * @param {int} maxCount - number of item can we buy
     *
     ***BONUS PARAM
     * 
     * @param {*} entity 
     * @param {*} bonusValue - value of this bonus
     * 
     **/
    
    transportBag = new Item('Transport Bag', '#itemTransportBag', 300, 10)
    transportBag.Bonus = new AddToMultiplier (transportBag, 0.3)
    ECM = new Item('E.C.M', '#itemECM', 2000, 1, 1)
    ECM.Bonus = new AddToMultiplier(transportBag, 2)
    drill = new Item('Basic Drill' ,'#itemDrill', 10000 ,3)
    drill.Bonus = new AddToMultiplier(drill, 5)



    /**CAPACITY PARAM
     * 
     * @param {selector} div 
     * @param {int} duration - in ms
     * @param {int} reloading - in ms
     * @param {int} bonusValue - value of THIS bonus
     */

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
    clover.div.innerText += 'Recruit ' + clover.name + ' : ' + clover.price + ' $ \n Level : ' + clover.level

    transportBag.div.innerText += ' : ' + transportBag.price + ' $'
    ECM.div.innerText += ' : ' + ECM.price + ' $'
    drill.div.innerText += ' : ' + drill.price + ' $'

    Stats.onDraw();

    tick = window.setInterval(Tick, 16.7)// -1;


}


/** - Timer Tick - */
let Tick = () => {

    /**Tick des statistiques : calcul du temps écouler depuis le dernier tick */
    Stats.onTick()

    dallas.onTick();
    chains.onTick();
    hoxton.onTick();
    wolf.onTick();
    houston.onTick();
    wick.onTick();
    clover.onTick();

    transportBag.onTick();
    ECM.onTick();
    drill.onTick();

    SwanSong.onTick();
    Chameleon.onTick();

    /**fonction Tick() de globalEvent */
    eventTick();

};
let tick = -1;

/**Arrondir 2 chiffres après la virgule */
const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}