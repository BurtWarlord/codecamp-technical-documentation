function makeMapList() {

    let mapArr = ["humpback", "inkblot", "moray", "mussel", "port", "starfish",
    "sturgeon", "reef", "manta", "kelp", "snapper", "blackbelly",
    "mako", "walleye", "dorf", "mall", "joe", "pit", "camp",
    "wahoo", "hotel", "ancho", "skipper"];
    let finalMapArr = ["Humpback Pump Track", "Inkblot Art Academy",
    "Moray Towers", "Musselforge Fitness", "Port Mackerel",
    "Starfish Mainstage", "Sturgeon Shipyard", "The Reef",
    "Manta Maria", "Kelp Dome", "Snapper Canal",
    "Blackbelly Skatepark", "MakoMart", "Walleye Warehouse",
    "Shellendorf Institute", "Arowana Mall", "Goby Arena",
    "Piranha Pit", "Camp Triggerfish", "Wahoo World",
    "New Albacore Hotel", "Ancho-V Games", "Skipper Pavilion"];
    let modeArr = ["SZ", "TC", "RM", "CB"]

    let szArr = readZonesMaps(mapArr, finalMapArr);
    let tcArr = readTowerMaps(mapArr, finalMapArr);
    let rmArr = readRainMaps(mapArr, finalMapArr);
    let cbArr = readClamMaps(mapArr, finalMapArr);

    let modeOrderArr = getRandomModeOrder(modeArr);

    /*
    console.log(szArr);
    console.log(tcArr);
    console.log(rmArr);
    console.log(cbArr);
    */

    /*
    console.log("Random mode order: ");
    console.log(modeOrderArr);
    */

   let finalMapListArr = generateMapListArr(szArr, tcArr, rmArr, cbArr, modeOrderArr); 

   let mapListStr = generateMapListStr(finalMapListArr);

    document.getElementById("maplist").innerHTML = mapListStr;


}

function readZonesMaps(mapArr, finalMapArr) {

    let szArr = [];

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-sz";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            szArr.push("SZ " + finalMapArr[i]);

        }

    }

    return szArr;

}

function readTowerMaps(mapArr, finalMapArr) {

    let tcArr = [];

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-tc";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            tcArr.push("TC " + finalMapArr[i]);

        }

    }

    return tcArr;
    
}

function readRainMaps(mapArr, finalMapArr) {

    let rmArr = [];

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-rm";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            rmArr.push("RM " + finalMapArr[i]);

        }

    }

    return rmArr;
    
}

function readClamMaps(mapArr, finalMapArr) {

    let cbArr = [];

    for (let i = 0; i < mapArr.length; i++) {

        let str = mapArr[i] + "-cb";
        let checkbox = document.getElementById(str);

        if (checkbox.checked == true) {

            cbArr.push("CB " + finalMapArr[i]);

        }

    }

    return cbArr;
    
}

function getRandomModeOrder(modeArr) {
    
    let modeOrderArr = [];

    do {

        let randomModeIndex = Math.floor(getRandomFactor() * modeArr.length);
        modeOrderArr.push(modeArr[randomModeIndex]);
        modeArr.splice(randomModeIndex, 1);

    }

    while(modeOrderArr.length < 4);

    return modeOrderArr;

    }

function getRandomFactor() {

    return Math.random();

}

function generateMapListArr(szArr, tcArr, rmArr, cbArr, modeOrderArr) {

    let totalMaps = szArr.length + tcArr.length + rmArr.length + cbArr.length;
    let finalMapArr = [];
    let j = 0;

    for (let i = 0; i < totalMaps; i++) {

        let mode = j % 4;

        if(modeOrderArr[mode] == "SZ" && szArr.length > 0) {

            let randomMapIndex = Math.floor(getRandomFactor() * szArr.length);

            finalMapArr.push(szArr[randomMapIndex]);
            szArr.splice(randomMapIndex, 1);

            i++;

        }

        else if(modeOrderArr[mode] == "TC" && tcArr.length > 0) {

            let randomMapIndex = Math.floor(getRandomFactor() * tcArr.length);

            finalMapArr.push(tcArr[randomMapIndex]);
            tcArr.splice(randomMapIndex, 1);
            
            i++;

        }

        else if(modeOrderArr[mode] == "RM" && rmArr.length > 0) {

            let randomMapIndex = Math.floor(getRandomFactor() * rmArr.length);

            finalMapArr.push(rmArr[randomMapIndex]);
            rmArr.splice(randomMapIndex, 1);
            
            i++;

        }

        else if(modeOrderArr[mode] == "CB" && cbArr.length > 0) {

            let randomMapIndex = Math.floor(getRandomFactor() * cbArr.length);

            finalMapArr.push(cbArr[randomMapIndex]);
            cbArr.splice(randomMapIndex, 1);
            
            i++;

        }

        i--;
        j++;

    }

    return finalMapArr;

}

function generateMapListStr(finalMapListArr) {

    let finalMapListStr = "";

    for (let i = 0; i < finalMapListArr.length; i++) {

        let strToAdd = "";
        let mapNum = i + 1;

        if (mapNum == finalMapListArr.length) {

            let strToAdd =  mapNum + ") " + finalMapListArr[i];
            finalMapListStr = finalMapListStr.concat(strToAdd);
        }

        else {

            let strToAdd =  mapNum + ") " + finalMapListArr[i] + "<br>";
            finalMapListStr = finalMapListStr.concat(strToAdd);

        }
        
    }

    return finalMapListStr;

}