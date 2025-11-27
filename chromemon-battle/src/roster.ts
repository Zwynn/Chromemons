import { Chromemon } from "./expo";
import type { Move } from "./expo";
import { Moves } from './moves';

const fatlax: Chromemon = {  
    name: "Fatlax",
    hp: 160,
    type: ["normal","sound"],
    atk: 110,
    def: 65,
    spd: 30,
    spAtk: 65,
    spDef: 110,
    moves: [Moves["Body Slam"], Moves["Heavy Slam"], Moves["Belly Drum"], Moves["Metronome"]]

}

const chichaku: Chromemon = {
    name: "Chichaku",
    hp: 90,
    type: ["electric"],
    atk: 55,
    def: 40,
    spd: 90,
    spAtk: 50,
    spDef: 50,
    moves: [Moves["Swift"], Moves["Quick Attack"], Moves["Electro Ball"], Moves["Volt Switch"]]
}

const glurak: Chromemon = {
    name: "Glurak",
    hp: 120,
    type: ["fire","flying"],
    atk: 84,
    def: 78,
    spd: 100,
    spAtk: 109,
    spDef: 85,
    moves: [Moves["Dragon Pulse"], Moves["Flamethrower"], Moves["Fly"], Moves["Focus Blast"]]
}

const gregs: Chromemon = {
    name: "Suicune",
    hp: 100,
    type: ["water","sound"],
    atk: 75,
    def: 115,
    spd: 85,
    spAtk: 90,
    spDef: 115,
    moves: [Moves["Surf"], Moves["Ice Beam"], Moves["Calm Mind"], Moves["Acoustic Wave"]]
}

const zamazenta: Chromemon = {
    name: "Zamazenta",
    hp: 92,
    type: ["fighting","steel"],
    atk: 120,
    def: 115,
    spd: 85,
    spAtk: 80,
    spDef: 85,
    moves: [Moves["Close Combat"], Moves["Iron Head"], Moves["Crunch"], Moves["Body Slam"]]
}

const scherox: Chromemon = {
    name: "Scherox",
    hp: 70,
    type: ["bug","steel"],
    atk: 130,
    def: 100,
    spd: 65,
    spAtk: 55,
    spDef: 80,
    moves: [Moves["X-Scissor"], Moves["Bullet Punch"], Moves["Swords Dance"], Moves["Quick Attack"]]
}

const exploud: Chromemon = {
    name: "Exploud",
    hp: 104,
    type: ["normal","sound"],
    atk: 91,
    def: 63,   
    spd: 68,
    spAtk: 91,
    spDef: 73,
    moves: [Moves["Swift"], Moves["Boomburst"], Moves["Acoustic Wave"], Moves["Body Slam"]]
}

const legday: Chromemon = {
    name: "Legday",
    hp: 110,
    type: ["psychic"],
    atk: 110,
    def: 95,
    spd: 130,
    spAtk: 120,
    spDef: 85,
    moves: [Moves["Psychic"], Moves["Acoustic Wave"], Moves["Focus Blast"], Moves["Quick Attack"]]
}

const grimmsnarl: Chromemon = {
    name: "Grimmsnarl",
    hp: 95,
    type: ["dark","fairy"],
    atk: 120,
    def: 65,
    spd: 75,
    spAtk: 95,
    spDef: 75,
    moves: [Moves["Dark Pulse"], Moves["Play Rough"], Moves["Acoustic Wave"], Moves["Body Slam"]]
}

const rajang: Chromemon = {
    name: "Rajang",
    hp: 105,
    type: ["fighting","electric"],
    atk: 140,
    def: 80,
    spd: 100,
    spAtk: 80,
    spDef: 80,
    moves: [Moves["Close Combat"], Moves["Thunder Punch"], Moves["Volt Switch"], Moves["Quick Attack"]]
}

const agumon: Chromemon = {
    name: "Agumon",
    hp: 80,
    type: ["fire", "dragon"],
    atk: 70,
    def: 60,
    spd: 90,
    spAtk: 80,
    spDef: 60,
    moves: [Moves["Flamethrower"], Moves["Dragon Claw"], Moves["Quick Attack"], Moves["Focus Blast"]]
}

const gabumon: Chromemon = {
    name: "Gabumon",
    hp: 85,
    type: ["water", "rock"],
    atk: 75,
    def: 70,
    spd: 80,
    spAtk: 85,
    spDef: 70,
    moves: [Moves["Surf"], Moves["Rock Slide"], Moves["Ice Beam"], Moves["Body Slam"]]
}

const ifrit: Chromemon = {
    name: "Ifrit",
    hp: 95,
    type: ["fire", "ground"],
    atk: 130,
    def: 90,
    spd: 85,
    spAtk: 65,
    spDef: 90,
    moves: [Moves["Purgatory"], Moves["Earthquake"], Moves["Rock Slide"], Moves["Heavy Slam"]]
}

const bahamut: Chromemon = {
    name: "Bahamut",
    hp: 120,
    type: ["dragon", "steel"],
    atk: 60,
    def: 100,
    spd: 95,
    spAtk: 130,
    spDef: 100,
    moves: [Moves["Exaflare"], Moves["Dragon Pulse"], Moves["Focus Blast"], Moves["Acoustic Wave"]]
}

const megaArbok: Chromemon = {
    name: "Mega Arbok",
    hp: 80,
    type: ["poison", "dark"],
    atk: 150,
    def: 90,
    spd: 80,
    spAtk: 70,
    spDef: 80,
    moves: [Moves["Crunch"], Moves["Gunkshot"], Moves["Poison Jab"], Moves["Body Slam"]]
}

const libelle: Chromemon = {
    name: "Libelle",
    hp: 70,
    type: ["dragon", "sound"],
    atk: 100,
    def: 70,
    spd: 120,
    spAtk: 90,
    spDef: 70,
    moves: [Moves["Dragon Pulse"], Moves["Acoustic Wave"], Moves["Fly"], Moves["Quick Attack"]]
}

export const roster = {
     fatlax, chichaku, glurak, gregs, zamazenta, scherox, exploud, legday, grimmsnarl, rajang, agumon, gabumon, ifrit, bahamut, megaArbok, libelle 
    };

export function playerSelect() {
    let playerRoster = [];
    let givenRoster = Object.values(roster);
    while (playerRoster.length < 3) {
        alert("Select a Chromemon for your roster:\n" +
            Object.values(roster).map((mon, index) => `${index + 1}: ${mon.name}`).join('\n'));
        let selection: string | null = prompt("Enter the number of your choice:");
        playerRoster.push(givenRoster[parseInt(selection!) - 1]);        //parseIn braucht das !. In Zukunft muss etwas gegen NaN eingabaut werden

       
    }
};