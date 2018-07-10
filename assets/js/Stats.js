//Statistic class
class Stat
{   
    constructor()
    {
        this.crime = 0 // nombre de crime commis
        this.crimeAdditioner = 1 // nombre de crime ajouter à la fois
        this.crimeMultiplier = 1 // multiplicateur du nombre de crime

        //SCORE MONEY
        this.money = 0 //argent disponible
        this.totalMoney = 0 //argent total récolté ( compte offshore)
        this.moneyMultiplier = 1 // money multiplicator

        this.moneyAdditioner = 0 //est définis au click
 
        /**temps écouler depuis le dernier tick */
        this.lastTick = Date.now();                  // dernier tick
        this.currentTick = Date.now();               // milliSecond depuis le dernier click
 
        this.div = document.querySelectorAll('.statsValue')
    }

    /** Setter and getter **/
    get Crime(){return this.crime;}
    set Crime(value){this.crime = value; this.div[0].innerText = 'Crimes Commis : ' + this.Crime}
    get CrimeAdditioner(){return this.crimeAdditioner;}
    set CrimeAdditioner(value){this.crimeAdditioner = value;}
    get CrimeMultiplier(){return this.crimeMultiplier;}
    set CrimeMultiplier(value){this.crimeMultiplier = value; this.div[3].innerText = 'Multiplicateur (crime) : ' + this.CrimeMultiplier}

    get Money(){return this.money;}
    set Money(value){this.money = value; this.div[2].innerText = 'Compte en banque : ' + this.money + ' $'}
    get TotalMoney(){return this.totalMoney;}
    set TotalMoney(value){this.totalMoney = value; this.div[1].innerText = 'Argent Récolté : ' + this.totalMoney + ' $'}
    get MoneyAdditioner(){return this.moneyAdditioner;}
    set MoneyAdditioner(value){this.moneyAdditioner = value;}
    get MoneyMultiplier(){return this.moneyMultiplier;}
    set MoneyMultiplier(value){this.moneyMultiplier = value; this.div[4].innerText = 'Multiplicateur (money) : ' + this.MoneyMultiplier;}

    /** Timer **/
    onTick()
    {
        this.currentTick = Date.now() - this.lastTick;
        this.lastTick = Date.now();
    }

    /** draw div **/
    /** chaque Setter des propriétés rafraîchi modifie sa div **/
    onDraw()
    {
        /* update statistic */
        this.div[0].innerText = 'Crimes Commis : ' + this.Crime;
        this.div[1].innerText = 'Argent Récolté : ' + this.totalMoney + ' $';
        this.div[2].innerText = 'Compte en banque : ' + this.Money + ' $';
        this.div[3].innerText = 'Multiplicateur (crime) : ' + this.CrimeMultiplier;
        this.div[4].innerText = 'Multiplicateur (money) : ' + this.MoneyMultiplier;
    }
    /** click sur l'élément **/
    onClick(){}
}