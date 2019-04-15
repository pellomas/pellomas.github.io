let encounterArray = [];
function setRandomEncounters(encounterAmount, encounterRate){
    for (i = 0; i < encounterAmount; i++){
        if (floor(random(0, encounterRate)) === 0){
            encounterArray.push('monster');
        }
        else{
            encounterArray.push('no encounter');
        }
    }
}