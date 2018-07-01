<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Payday Clicker ALPHA v0.2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- - -->

    <!-- google font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <!-- - -->

    <link rel="stylesheet" type="text/css" media="screen" href="assets/css/style.css" />
</head>

<body>
    <div id="page">
        <div id="grid">
            <div id="col1">
                <div id="menu">
                    <div class="menu-title">
                        <h3>Upgrade :</h3>
                    </div>
                    
                    <h4>Crew</h4>
                    <div class="crew divMenu ">
                        <button type="button" id="crewDallas" onclick=dallas.onClick() title="Gain 100% more money">Recruit Dallas</button>
                        <button type="button" id="crewChains" onclick=chains.onClick() title="First autoClicker and Gain 100% more money">Recruit Chains</button>
                        <button type="button" id="crewHoxton" onclick=hoxton.onClick() title="New autoClicker and Gain 100% more money">Recruit Hoxton</button>
                        <button type="button" id="crewWolf" class="separator" onclick=wolf.onClick() title="New autoClicker and Gain 100% more money">Recruit Wolf</button>

                        <button type="button" id="crewHouston" onclick=houston.onClick() title="Gain 300% more money"></button>
                        <button type="button" id="crewWick" onclick=wick.onClick() title="Money Multiplier upped by 50%"></button>


                    </div>
                    <h4>Stuff</h4>
                    <div class="stuff divMenu">
                        <button type="button" id="itemTransportBag" onclick=transportBag.onClick()>Transport Bag</button>
                        <button type="button" id="itemECM" onclick=ECM.onClick()>E.C.M</button>

                    </div>
                </div>
            </div>

            <div id="col2">
                <div id="backGround">
                    <div id="crimeNet">
                        <!-- <h1>CrimeNet</h1> -->

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <h1>CrimeNet</h1>
                                </div>
                                <div class="carousel-item">
                                    <h1>Its payday fellas</h1>
                                    
                                </div>
                                <div class="carousel-item">
                                    <h1>Swan song power</h1>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <div id="display">
                        <div id="displayImgBack">
                            <div id="displayAnim" onclick=cursorClick()>
                                <div class="axe-x-y">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="paydayGangBoard">
                        <h2>Capacity :</h2>
                        <button type="button" id="capSwanSong" onclick=SwanSong.onClick() title="Money * 2 for 6s CD: 60s">Swan Song</button>
                        <button type="button" id="capChameleon" onclick=Chameleon.onClick() title="Money * 1.3 for 30s CD: 180s">Chameleon</button>

                    </div>
                </div>
            </div>

            <div id="col3">
                <div id="stats">
                    <div class="menu-title">
                        <h3>Stats :</h3>
                    </div>
                    <div id="allStats">
                        <p class="statsValue"></p>
                        <p class="statsValue"></p>
                        <p class="statsValue"></p>
                        <p class="statsValue"></p>
                        <p class="statsValue"></p>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <footer>
        Payday Clicker ALPHA v0.2.1
    </footer>

        <script src="assets/js/Stats.js"></script>
        <script src="assets/js/main_2.js"></script>
        <script src="assets/js/globalEvent_2.js"></script>
        <script src="assets/js/Capacity_2.js"></script>
        <script src="assets/js/Entity.js"></script>
        <script src="assets/js/Heister.js"></script>
        <script src="assets/js/Item.js"></script>

    <!-- <script src="assets/js/main.js"></script>
    <script src="assets/js/crew.js"></script>
    <script src="assets/js/stuff.js"></script>
    <script src="assets/js/capacity.js"></script>
    <script src="assets/js/globalEvent.js"></script> -->


</body>

</html>