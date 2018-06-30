<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Payday Clicker ALPHA v0.2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
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
                    <div class="crew divMenu">
                        <button type="button" id="crewDallas" onclick=recruitDallas() title="Gain 100% more money">Recruit Dallas</button>
                        <button type="button" id="crewChains" onclick=recruitChains() title="First autoClicker and Gain 100% more money">Recruit Chains</button>
                        <button type="button" id="crewHoxton" onclick=recruitHoxton() title="New autoClicker and Gain 100% more money">Recruit Hoxton</button>
                        <button type="button" id="crewWolf" class="separator" onclick=recruitWolf() title="New autoClicker and Gain 100% more money">Recruit Wolf</button>

                        <button type="button" id="crewHouston" onclick=recruitHouston() title="Gain 300% more money"></button>
                        <button type="button" id="crewWick" onclick=recruitWick() title="Money Multiplier upped by 50%"></button>


                    </div>
                    <h4>Stuff</h4>
                    <div class="stuff divMenu">
                        <button type="button" id="itemTransportBag" onclick=buyTransportBag()>Transport Bag</button>
                        <button type="button" id="itemECM" onclick=buyECM()>E.C.M</button>

                    </div>
                </div>
            </div>

            <div id="col2">
                <div id="backGround">
                    <div id="crimeNet">
                        <h1>CrimeNet</h1>
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
                        <button type="button" id="capSwanSong" onclick=useSwanSong() title="Money * 2 for 6s CD: 60s">Swan Song</button>
                        <button type="button" id="capChameleon" onclick=useChameleon() title="Money * 1.3 for 30s CD: 180s">Chameleon</button>

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

    <!-- <script src="assets/js/State.js"></script>
        <script src="assets/js/Entity.js"></script>
        <script src="assets/js/Heister.js"></script>
        <script src="assets/js/Item.js"></script>
        <script src="assets/js/Capacity_2.js"></script> -->

    <script src="assets/js/main.js"></script>
    <script src="assets/js/crew.js"></script>
    <script src="assets/js/stuff.js"></script>
    <script src="assets/js/capacity.js"></script>
    <script src="assets/js/globalEvent.js"></script>


</body>

</html>