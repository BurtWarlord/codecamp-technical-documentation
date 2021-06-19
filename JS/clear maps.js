function clearMaps() {

    let mapArr = ["humpback", "inkblot", "moray", "mussel", "port", "starfish",
    "sturgeon", "reef", "manta", "kelp", "snapper", "blackbelly",
    "mako", "walleye", "dorf", "mall", "joe", "pit", "camp",
    "wahoo", "hotel", "ancho", "skipper"];

    clearZonesMaps(mapArr);
    clearTowerMaps(mapArr);
    clearRainMaps(mapArr);
    clearClamMaps(mapArr);

}

function clearZonesMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-sz";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            checkbox.checked = false;

        }

    }

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

function clearRainMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-rm";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            checkbox.checked = false;

        }

    }

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