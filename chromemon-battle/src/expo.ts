export interface Move {
    name: string;           
    type: "fire"|"water"|"grass"|"electric"|"rock"|"psychic"|"steel"|"dark"|"fairy"|"ice"|"normal"|"fighting"|"flying"|"poison"|"ground"|"bug"|"ghost"|"dragon"|"sound";
    pwr: number;
    prio: boolean;
    acc: number;
    category: "Phy" | "Spe" | "Sta"; // physical, special, status
}

export interface Chromemon {
    name: string;
    hp: number;
    type: (
        "fire"|"water"|"grass"|"electric"|"rock"|"psychic"|"steel"|"dark"|"fairy"|"ice"|"normal"|"fighting"|"flying"|"poison"|"ground"|"bug"|"ghost"|"dragon"|"sound"
    )[];
    atk: number;            //attack    
    def: number;            //defense   
    spd: number;            //speed, determines who attacks first
    spAtk: number;          //special attack
    spDef: number;          //special defense
    moves: Move[];          //list of moves
}

