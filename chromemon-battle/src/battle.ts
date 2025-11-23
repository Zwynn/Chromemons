import { Chromemon } from './expo';
import {} from './roster';
import {} from './moves';

function turnOrder(a: Chromemon, b: Chromemon): Chromemon[] {
    //if (a.moves[0].prio && !b.moves[0].prio) {                !!!Später für Prio-Moves 
    //return [a, b];
    //}                                          
    if (a.spd > b.spd) {
        return [a, b];
    } 
    else if (b.spd > a.spd) {
        return [b, a];
    } 
    else {
        // Falls Geschwindigkeiten gleich sein sollten, wird die Reihenfolge zufällig bestimmt.
        //Zurzeit gibt es keinen nutzen dafür, weil kein Mon gleichen Spd hat
        return Math.random() < 0.5 ? [a, b] : [b, a];
    }
}
export { turnOrder };

function dmgCalc(attacker: Chromemon, defender: Chromemon, moveIndex: number) {
    const getMove = attacker.moves[moveIndex];
    let atkStat: number;    
    if (getMove.category === "Phy") {

        atkStat = attacker.atk;
        return; // Status-Moves verursachen keinen Schaden
    }
    else{
        atkStat = attacker.spAtk;
    }
    const potDmg = getMove.pwr;                                 //potenzieller Schaden
    const defStat = defender.def;
    const dmg = Math.floor(potDmg + atkStat - defStat);         //Schaden nach Abzug der Verteidigung
    defender.hp -=  dmg > 0 ? dmg : 1;                          // Minimum Schaden ist 1
}  

function battle(monA: Chromemon, monB: Chromemon) {
    let fighters = turnOrder(monA, monB); 
    while (monA.hp > 0 && monB.hp > 0) {
        dmgCalc(fighters[0], fighters[1], 0);                   //Erster Kämpfer greift an
        alert(`${fighters[0].name}' turn.\nSelect your move!
            ${fighters[0].moves[0].name}, ${fighters[0].moves[1].name}\n
            ${fighters[0].moves[2].name}, ${fighters[0].moves[3].name}`);
        prompt("");                                             //Hier soll die Move-Auswahl implementiert werden
        if (fighters[1].hp <= 0) {
            console.log(`${fighters[1].name} fainted! ${fighters[0].name} wins!`);
            break;
        }
        dmgCalc(fighters[1], fighters[0], 0);                   //Zweiter Kämpfer greift an
        alert(`${fighters[1].name}' turn.\nSelect your move!
            ${fighters[1].moves[0].name}, ${fighters[1].moves[1].name}\n
            ${fighters[1].moves[2].name}, ${fighters[1].moves[3].name}`);
        prompt("");                                             //Hier soll die Move-Auswahl implementiert werden
        if (fighters[0].hp <= 0) {
            console.log(`${fighters[0].name} fainted! ${fighters[1].name} wins!`);
            break;
        }
    }
}