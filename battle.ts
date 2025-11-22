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
    const move = attacker.moves[moveIndex];
    let atkStat: number;    
    if (move.category === "Phy") {

        atkStat = attacker.atk;
        return; // Status-Moves verursachen keinen Schaden
    }
    else{
        atkStat = attacker.spAtk;
    }
    const potDmg = move.pwr;
    const defStat = defender.def;
    const dmg = Math.floor(potDmg + atkStat - defStat);
    defender.hp -=  dmg > 0 ? dmg : 1;                          // Minimum Schaden ist 1
}  