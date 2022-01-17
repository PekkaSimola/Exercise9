'use strict';

let bishBosh = function(bish, bosh, loopCount){
    let iBish;
    let iBosh;
    let bB = [];
    for (let i = 1; i <= loopCount; i++){
        iBish = i % bish;
        iBosh = i % bosh;
        if((iBish + iBosh) == 0){
            bB.push('Bish-Bosh');
        } else if (iBish == 0){
            bB.push('Bish');
        } else if (iBosh == 0){
            bB.push('Bosh');
        } else {
            bB.push(i.toString());
        }
    }
    return bB.join(', ');
}

console.log(bishBosh(3, 4, 100));

/*
    Webb-formulär för input av bish, bosh och loopCount;
    Inga negativa tal tillåts
    loopCount intervall: 100 till ca 1000; 
    bish bör vara mindre än bosh och båda definitivt mindre än loopCount!
    ● Ett webbaserat UI som innehåller:
        ○ Inputfält för ovanstående variabler
        ○ En header (Bish-Bosh 2.0)
        ○ En footer med ert namn och copyright
        ○ En text som förklarar ‘Bish-Bosh’ och i vilket syfte ni skapat sidan.
        ○ En presentation av talen
*/