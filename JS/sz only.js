function szOnly() {

    let mapArr = ["humpback", "inkblot", "moray", "mussel", "port", "starfish",
    "sturgeon", "reef", "manta", "kelp", "snapper", "blackbelly",
    "mako", "walleye", "dorf", "mall", "joe", "pit", "camp",
    "wahoo", "hotel", "ancho", "skipper"];
    let radioButton = document.getElementById("sz-only");
    
    if (radioButton.checked == true) {

        hideTower(mapArr);
        hideRain(mapArr);
        hideClam(mapArr);

    }
    
    else {

        showTower();
        showRain();
        showClam();

    }

}

function hideTower(mapArr) {

    clearTowerMaps(mapArr);

    let towerElement = document.getElementById("tower");

    towerElement.style.display = "none";

    

}

function clearTowerMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-tc";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            checkbox.checked = false;

        }

    }

}

function hideRain(mapArr) {

    clearRainMaps(mapArr);

    let rainElement = document.getElementById("rain");

    rainElement.style.display = "none";

}

function clearRainMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-rm";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            checkbox.checked = false;

        }

    }

}

function hideClam(mapArr) {

    clearClamMaps(mapArr);

    let clamElement = document.getElementById("clam");

    clamElement.style.display = "none";

    

}

function clearClamMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-cb";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            checkbox.checked = false;

        }

    }

}

function showTower() {

    let towerElement = document.getElementById("tower");

    towerElement.style.display = "block";
}

function showRain() {

    let rainElement = document.getElementById("rain");

    rainElement.style.display = "block";

}

function showClam() {

    let clamElement = document.getElementById("clam");

    clamElement.style.display = "block";
}
