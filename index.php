<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Payday Clicker ALPHA v0.1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
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

                    <div class="crew">
                        <h4>Crew</h4>
                        <button type="button" id="crewDallas" onclick=recruitDallas()>Recruit Dallas</button>
                        <button type="button" id="crewChains" onclick=recruitChains()>Recruit Chains</button>
                        <button type="button" id="crewHoxton" onclick=recruitHoxton()>Recruit Hoxton</button>
                        <button type="button" id="crewWolf" class="separator" onclick=recruitWolf()>Recruit Wolf</button>

                        <button type="button" id="crewHouston" onclick=recruitHouston()></button>


                    </div>
                    <div class="stuff">
                        <h4>Stuff</h4>
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
                        <button type="button" id="capSwanSong" onclick=useSwanSong()>Swan Song</button>

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
                        <p class="statsValue"></p>
                        <p class="statsValue"></p>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <footer>
        Payday Clicker ALPHA v0.1
    </footer>


    <script src="assets/js/main.js"></script>
    <script src="assets/js/crew.js"></script>
    <script src="assets/js/stuff.js"></script>
    <script src="assets/js/capacity.js"></script>
    <script src="assets/js/globalEvent.js"></script>


</body>

</html>