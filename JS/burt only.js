function burtOnly() {

    let radioButton = document.getElementById("burt");
    let burtSZArr = ["inkblot", "sturgeon", "reef", "snapper", "pit"];
    let burtTCArr = ["inkblot", "reef", "manta", "mako", "ancho"];
    let burtRMArr = ["humpback", "manta", "snapper", "blackbelly", "ancho"];
    let burtCBArr = ["humpback", "inkblot", "reef", "snapper", "pit"];
    let mapArr = ["humpback", "inkblot", "moray", "mussel", "port", "starfish",
    "sturgeon", "reef", "manta", "kelp", "snapper", "blackbelly",
    "mako", "walleye", "dorf", "mall", "joe", "pit", "camp",
    "wahoo", "hotel", "ancho", "skipper"];

    if (radioButton.checked == false) {

        unlockSZMaps(mapArr);
        unlockTCMaps(mapArr);
        unlockRMMaps(mapArr);
        unlockCBMaps(mapArr);

    }

    else {

        lockSZMaps(burtSZArr, mapArr); 
        lockTCMaps(burtTCArr, mapArr);
        lockRMMaps(burtRMArr, mapArr);
        lockCBMaps(burtCBArr, mapArr);

    }

}

function unlockSZMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-sz";
        let checkbox = document.getElementById(str);

        checkbox.disabled = false;

    }

}

function unlockTCMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-tc";
        let checkbox = document.getElementById(str);

        checkbox.disabled = false;

    }
    
}

function unlockRMMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-rm";
        let checkbox = document.getElementById(str);

        checkbox.disabled = false;

    }
    
}

function unlockCBMaps(mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-cb";
        let checkbox = document.getElementById(str);

        checkbox.disabled = false;

    }
    
}

function lockSZMaps(burtArr, mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let count = 0;
        let str = mapArr[i] + "-sz";
        let checkbox = document.getElementById(str);

        for (let j = 0; j < burtArr.length; j++) {

            if (mapArr[i] == burtArr[j]) {

                count++;

            }
        }

        if (count > 0) {

            checkbox.checked = true;
            checkbox.disabled = true;
            

        }

        else {

            checkbox.checked = false;
            checkbox.disabled = true;

        }

    }

}

function lockTCMaps(burtArr, mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let count = 0;
        let str = mapArr[i] + "-tc";
        let checkbox = document.getElementById(str);

        for (let j = 0; j < burtArr.length; j++) {

            if (mapArr[i] == burtArr[j]) {

                count++;

            }
        }

        if (count > 0) {

            checkbox.checked = true;
            checkbox.disabled = true;
            

        }

        else {

            checkbox.checked = false;
            checkbox.disabled = true;

        }

    }

}

function lockRMMaps(burtArr, mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let count = 0;
        let str = mapArr[i] + "-rm";
        let checkbox = document.getElementById(str);

        for (let j = 0; j < burtArr.length; j++) {

            if (mapArr[i] == burtArr[j]) {

                count++;

            }
        }

        if (count > 0) {

            checkbox.checked = true;
            checkbox.disabled = true;
            

        }

        else {

            checkbox.checked = false;
            checkbox.disabled = true;

        }

    }

}

function lockCBMaps(burtArr, mapArr) {

    for (let i = 0; i < mapArr.length; i++) {

        let count = 0;
        let str = mapArr[i] + "-cb";
        let checkbox = document.getElementById(str);

        for (let j = 0; j < burtArr.length; j++) {

            if (mapArr[i] == burtArr[j]) {

                count++;

            }
        }

        if (count > 0) {

            checkbox.checked = true;
            checkbox.disabled = true;
            

        }

        else {

            checkbox.checked = false;
            checkbox.disabled = true;

        }

    }

}