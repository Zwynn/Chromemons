import type { Move } from "./expo";

export const Moves: Record<string, Move> = {
    "Body Slam": {
        name: "Body Slam",
        type: "normal",
        pwr: 85,
        prio: false,
        acc: 100,
        category: "Phy"
    },
    "Belly Drum": {
        name: "Belly Drum",
        type: "sound",
        pwr: 90,
        prio: false,
        acc: 100,
        category: "Phy"
    },
    "Heavy Slam": {
        name: "Heavy Slam",
        type: "steel",
        pwr: 95,
        prio: false,
        acc: 100,
        category: "Phy"
    },
    "Giga Impact": {
        name: "Giga Impact",
        type: "normal",
        pwr: 150,
        prio: false,
        acc: 90,
        category: "Phy"
    },
    "Metronome": {
        name: "Metronome",
        type: "normal",
        pwr: 0,
        prio: false,
        acc: 100,
        category: "Sta"
    }
};