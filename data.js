let guestsData;
if (typeof module !== 'undefined' && module.exports) {
    guestsData = [];
} else {
    guestsData = [];
}

guestsData = [
    {
        id: 1,
        name: "Charlie Cox",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Daredevil / Matt Murdock",
                franchise: "Marvel Cinematic Universe",
                type: "live-action",
                years: "2015-2018, 2022-2026",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "90", name: "Daredevil", variants: ["Standard", "Target Exclusive", "Hot Topic Exclusive"] },
                    { number: "119", name: "Daredevil (Masked Vigilante)", variants: [] },
                    { number: "120", name: "Daredevil", variants: [] },
                    { number: "121", name: "Matt Murdock", variants: [] },
                    { number: "214", name: "Daredevil", variants: [] },
                    { number: "1221", name: "Matt Murdock with Brick", variants: [] },
                    { number: "1301", name: "Daredevil (Yellow Mask) - She-Hulk", variants: [] },
                    { number: "1320", name: "I'm Not Daredevil Matt Murdock", variants: ["Hot Topic Exclusive"] },
                    { number: "1385", name: "Matt Murdock with Radar (Deluxe) - 60th Anniversary", variants: [] },
                    { number: "1543", name: "Daredevil with Nunchucks - Born Again", variants: [] },
                    { number: "1547", name: "Daredevil Unmasked - Born Again", variants: ["Entertainment Earth Exclusive"] },
                    { number: "1578", name: "Daredevil (Black Suit) - Born Again S2", variants: [] }
                ]
            },
            {
                title: "Tristan Thorn",
                franchise: "Stardust",
                type: "live-action",
                years: "2007",
                hasFunkoPop: false
            },
            {
                title: "Jonathan Hellyer Jones",
                franchise: "The Theory of Everything",
                type: "live-action",
                years: "2014",
                hasFunkoPop: false
            },
            {
                title: "Gustave (voice)",
                franchise: "Clair Obscur: Expedition 33",
                type: "video-games",
                years: "2025",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 2,
        name: "Deborah Ann Woll",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Karen Page",
                franchise: "Marvel Cinematic Universe - Daredevil",
                type: "live-action",
                years: "2015-2018, 2022, 2025-2026",
                hasFunkoPop: false
            },
            {
                title: "Jessica Hamby",
                franchise: "True Blood",
                type: "live-action",
                years: "2008-2014",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "139", name: "Jessica Hamby", variants: [] }
                ]
            },
            {
                title: "Amanda Harper",
                franchise: "Escape Room",
                type: "live-action",
                years: "2019, 2021",
                hasFunkoPop: false
            },
            {
                title: "Faye / Laufey (voice)",
                franchise: "God of War Ragnarök / God of War Laufey",
                type: "video-games",
                years: "2022, TBA",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 3,
        name: "Neil Newbon",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Astarion (voice)",
                franchise: "Baldur's Gate 3",
                type: "video-games",
                years: "2023",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1017", name: "Astarion", variants: ["Standard", "Chase - with Necromancy of Thay"] },
                    { number: "91829", name: "Astarion (Bloody)", variants: ["Funko Shop Exclusive"] },
                    { number: "1190", name: "Astarion (Shirtless)", variants: ["Amazon Exclusive"] }
                ]
            },
            {
                title: "Elijah Kamski / Gavin Reed (voice)",
                franchise: "Detroit: Become Human",
                type: "video-games",
                years: "2018",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1394", name: "Elijah Kamski", variants: [] }
                ]
            },
            {
                title: "Karl Heisenberg (voice)",
                franchise: "Resident Evil Village",
                type: "video-games",
                years: "2021",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1157", name: "Karl Heisenberg", variants: [] }
                ]
            },
            {
                title: "Nicholai Ginovaef (voice)",
                franchise: "Resident Evil 3",
                type: "video-games",
                years: "2020",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1154", name: "Nicholai", variants: [] }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Khary Payton",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "King Ezekiel",
                franchise: "The Walking Dead",
                type: "live-action",
                years: "2016-2022",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "574", name: "Ezekiel", variants: [] }
                ]
            },
            {
                title: "Cyborg / Victor Stone (voice)",
                franchise: "Teen Titans / Teen Titans Go!",
                type: "animation",
                years: "2003-2006, 2013-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "95", name: "Cyborg - DC Heroes", variants: ["Standard", "Silhouette GITD - Entertainment Earth"] },
                    { number: "110", name: "Cyborg - Teen Titans Go!", variants: ["Standard", "Camo - Walmart"] },
                    { number: "209", name: "Cyborg - Justice League", variants: [] },
                    { number: "212", name: "Cyborg with Mother Box - Justice League", variants: ["Walmart Exclusive"] },
                    { number: "338", name: "Cyborg as Green Lantern - Teen Titans Go!", variants: ["Toys R Us Exclusive"] },
                    { number: "605", name: "Cyborg - Teen Titans Go! Night Begins to Shine", variants: [] },
                    { number: "609", name: "Cyborg GITD - Teen Titans Go!", variants: ["Toys R Us Exclusive"] }
                ]
            },
            {
                title: "Aqualad / Kaldur'ahm (voice)",
                franchise: "Young Justice",
                type: "animation",
                years: "2010-2013, 2019-2022",
                hasFunkoPop: false
            },
            {
                title: "Wasabi (voice)",
                franchise: "Big Hero 6: The Series",
                type: "animation",
                years: "2017-2021",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 5,
        name: "Alex Jordan",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Rook (voice)",
                franchise: "Dragon Age: The Veilguard",
                type: "video-games",
                years: "2024",
                hasFunkoPop: false
            },
            {
                title: "Mr Hands (voice)",
                franchise: "Cyberpunk 2077: Phantom Liberty",
                type: "video-games",
                years: "2023",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1313", name: "Johnny Silverhand", variants: [] },
                    { number: "1314", name: "V-Male", variants: [] },
                    { number: "1315", name: "V-Female", variants: [] }
                ]
            },
            {
                title: "Various characters (voice)",
                franchise: "Wuthering Waves",
                type: "video-games",
                years: "2024",
                hasFunkoPop: false
            },
            {
                title: "I (voice)",
                franchise: "Natural Six D&D Series",
                type: "live-action",
                years: "2023-present",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 6,
        name: "Harry McEntire",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Æthelwold",
                franchise: "The Last Kingdom",
                type: "live-action",
                years: "2015-2020",
                hasFunkoPop: false
            },
            {
                title: "Noah (voice)",
                franchise: "Xenoblade Chronicles 3",
                type: "video-games",
                years: "2022",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1191", name: "Noah", variants: [] }
                ]
            },
            {
                title: "Eivor (voice)",
                franchise: "Assassin's Creed Valhalla",
                type: "video-games",
                years: "2020",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1157", name: "Eivor (Male)", variants: [] },
                    { number: "1158", name: "Eivor (Female)", variants: [] }
                ]
            },
            {
                title: "Dungeon Master",
                franchise: "Natural Six D&D Series",
                type: "live-action",
                years: "2023-present",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 7,
        name: "Patrick Gibson",
        days: ["saturday", "sunday"],
        credits: [
            {
                title: "Dexter Morgan (Young)",
                franchise: "Dexter: Original Sin",
                type: "live-action",
                years: "2024-2025",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "90", name: "Dexter Morgan", variants: [] },
                    { number: "344", name: "Dexter Morgan", variants: [] },
                    { number: "1591", name: "Dexter Morgan (Young) - Original Sin", variants: [] }
                ]
            },
            {
                title: "Nikolai Lantsov",
                franchise: "Shadow and Bone",
                type: "live-action",
                years: "2023",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1117", name: "Nikolai Lantsov", variants: [] }
                ]
            },
            {
                title: "Steve Winchell",
                franchise: "The OA",
                type: "live-action",
                years: "2016-2019",
                hasFunkoPop: false
            },
            {
                title: "James Bond (voice)",
                franchise: "007 First Light",
                type: "video-games",
                years: "2026",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "Various", name: "James Bond", variants: ["Multiple figures from different Bond films"] }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Anjali Bhimani",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Symmetra (voice)",
                franchise: "Overwatch / Overwatch 2",
                type: "video-games",
                years: "2016-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "181", name: "Symmetra", variants: [] }
                ]
            },
            {
                title: "Rampart (voice)",
                franchise: "Apex Legends",
                type: "video-games",
                years: "2019-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "549", name: "Rampart", variants: [] }
                ]
            },
            {
                title: "Commander Natara (voice)",
                franchise: "Starfield",
                type: "video-games",
                years: "2023",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1371", name: "Constellation Member", variants: [] }
                ]
            },
            {
                title: "Nina Patel",
                franchise: "Modern Family",
                type: "live-action",
                years: "2009-2020",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 9,
        name: "Britt Baron",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Tifa Lockhart (voice)",
                franchise: "Final Fantasy VII Remake / Rebirth",
                type: "video-games",
                years: "2020, 2024",
                hasFunkoPop: false,
                note: "Square Enix does not produce Funko Pops - they have their own collectible lines"
            },
            {
                title: "Justine Biagi",
                franchise: "GLOW",
                type: "live-action",
                years: "2017-2019",
                hasFunkoPop: false
            },
            {
                title: "Ada-1 (voice)",
                franchise: "Destiny 2",
                type: "video-games",
                years: "2018-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "Various", name: "Destiny 2 Characters", variants: ["Multiple Destiny characters available"] }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Bryce Papenbrook",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Eren Yeager (voice)",
                franchise: "Attack on Titan",
                type: "animation",
                years: "2013-2023",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "20", name: "Eren Jaeger", variants: ["Standard", "Black and White"] },
                    { number: "22", name: "Eren (Titan Form)", variants: ["Standard", "Rage - Hot Topic"] },
                    { number: "1165", name: "Eren Jaeger", variants: [] },
                    { number: "1174", name: "Eren Hardened (Deluxe)", variants: ["Hot Topic Exclusive"] },
                    { number: "1251", name: "Child Eren", variants: ["GameStop Exclusive"] },
                    { number: "1321", name: "Eren Jaeger", variants: ["Standard", "Metallic - Amazon", "Translucent"] },
                    { number: "1432", name: "Eren Meets Reiner (Pop! Moment)", variants: [] },
                    { number: "1460", name: "Eren & Zeke Jaeger (Pop! Moment)", variants: ["Exclusive"] }
                ]
            },
            {
                title: "Kirito / Kazuto Kirigaya (voice)",
                franchise: "Sword Art Online",
                type: "animation",
                years: "2012-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "82", name: "Kirito", variants: ["Standard", "Hot Topic Pre-Release", "Blue Swords - Hot Topic", "Underground Toys Exclusive"] },
                    { number: "990", name: "Kirito", variants: [] },
                    { number: "992", name: "Kirito with Two Swords", variants: ["FYE Exclusive"] }
                ]
            },
            {
                title: "Inosuke Hashibira (voice)",
                franchise: "Demon Slayer: Kimetsu no Yaiba",
                type: "animation",
                years: "2019-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "875", name: "Inosuke Hashibira", variants: [] },
                    { number: "1430", name: "Inosuke Hashibira", variants: [] }
                ]
            },
            {
                title: "Meliodas (voice)",
                franchise: "The Seven Deadly Sins",
                type: "animation",
                years: "2014-2021",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "569", name: "Meliodas", variants: [] }
                ]
            },
            {
                title: "Red / Adol Christin (voice)",
                franchise: "Pokémon Origins / Ys series",
                type: "animation",
                years: "2013-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "Various", name: "Red", variants: ["Multiple Pokémon figures available"] }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Cassandra Lee Morris",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Morgana (voice)",
                franchise: "Persona 5",
                type: "video-games",
                years: "2016-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "469", name: "Morgana", variants: [] }
                ]
            },
            {
                title: "Ritsu Tainaka (voice)",
                franchise: "K-On!",
                type: "animation",
                years: "2009-2011",
                hasFunkoPop: false
            },
            {
                title: "Leafa / Suguha Kirigaya (voice)",
                franchise: "Sword Art Online",
                type: "animation",
                years: "2012-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "991", name: "Leafa", variants: [] }
                ]
            },
            {
                title: "Kyubey (voice)",
                franchise: "Puella Magi Madoka Magica",
                type: "animation",
                years: "2011",
                hasFunkoPop: false
            },
            {
                title: "Taiga Aisaka (voice)",
                franchise: "Toradora!",
                type: "animation",
                years: "2008-2009",
                hasFunkoPop: false
            }
        ]
    },
    {
        id: 12,
        name: "John Eric Bentley",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Barret Wallace (voice)",
                franchise: "Final Fantasy VII Remake / Rebirth",
                type: "video-games",
                years: "2020, 2024",
                hasFunkoPop: false,
                note: "Square Enix does not produce Funko Pops - they have their own collectible lines"
            },
            {
                title: "Nick Fury (voice)",
                franchise: "Various Marvel Games",
                type: "video-games",
                years: "Various",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "Various", name: "Nick Fury", variants: ["Multiple variants from different Marvel lines"] }
                ]
            },
            {
                title: "LeBron James (voice)",
                franchise: "MultiVersus",
                type: "video-games",
                years: "2022",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1092", name: "LeBron James - MultiVersus", variants: [] }
                ]
            }
        ]
    },
    {
        id: 13,
        name: "Kirk Thornton",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Shadow the Hedgehog (voice)",
                franchise: "Sonic the Hedgehog",
                type: "video-games",
                years: "2010-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "20", name: "Shadow", variants: [] },
                    { number: "283", name: "Shadow with Chao", variants: ["Target Exclusive"] },
                    { number: "633", name: "Shadow", variants: [] },
                    { number: "970", name: "Shadow with Motorcycle", variants: ["GameStop Exclusive"] },
                    { number: "1575", name: "Shadow (Sonic x Shadow Generations)", variants: [] }
                ]
            },
            {
                title: "Kisame Hoshigaki / Shukaku (voice)",
                franchise: "Naruto / Naruto Shippuden",
                type: "animation",
                years: "2005-2009, 2009-2017",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "569", name: "Kisame", variants: [] },
                    { number: "1628", name: "Shukaku", variants: ["Funko Shop Exclusive"] }
                ]
            },
            {
                title: "Jin",
                franchise: "Samurai Champloo",
                type: "animation",
                years: "2004-2005",
                hasFunkoPop: false
            },
            {
                title: "Saïx (voice)",
                franchise: "Kingdom Hearts",
                type: "video-games",
                years: "Various",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "622", name: "Saïx", variants: [] }
                ]
            }
        ]
    },
    {
        id: 14,
        name: "Suzie Yeung",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Yuffie Kisaragi (voice)",
                franchise: "Final Fantasy VII Remake / Rebirth",
                type: "video-games",
                years: "2021, 2024",
                hasFunkoPop: false,
                note: "Square Enix does not produce Funko Pops - they have their own collectible lines"
            },
            {
                title: "Eula (voice)",
                franchise: "Genshin Impact",
                type: "video-games",
                years: "2021-present",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "940", name: "Eula", variants: [] }
                ]
            },
            {
                title: "Makima (voice)",
                franchise: "Chainsaw Man",
                type: "animation",
                years: "2022",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1309", name: "Makima", variants: [] }
                ]
            },
            {
                title: "Vladilena 'Lena' Milizé (voice)",
                franchise: "86",
                type: "animation",
                years: "2021",
                hasFunkoPop: false
            },
            {
                title: "Fuuka Yamagishi (voice)",
                franchise: "Persona 3 Reload",
                type: "video-games",
                years: "2024",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "1365", name: "Fuuka Yamagishi", variants: [] }
                ]
            }
        ]
    },
    {
        id: 15,
        name: "Todd Haberkorn",
        days: ["friday", "saturday", "sunday"],
        credits: [
            {
                title: "Natsu Dragneel (voice)",
                franchise: "Fairy Tail",
                type: "animation",
                years: "2011-2019",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "72", name: "Natsu", variants: [] },
                    { number: "1378", name: "Natsu (100 Years Quest)", variants: [] }
                ]
            },
            {
                title: "Death the Kid (voice)",
                franchise: "Soul Eater",
                type: "animation",
                years: "2008-2009",
                hasFunkoPop: true,
                funkoPops: [
                    { number: "277", name: "Death the Kid", variants: [] }
                ]
            },
            {
                title: "Italy (voice)",
                franchise: "Hetalia: Axis Powers",
                type: "animation",
                years: "2009-2015",
                hasFunkoPop: false
            },
            {
                title: "Allen Walker (voice)",
                franchise: "D.Gray-man",
                type: "animation",
                years: "2006-2008",
                hasFunkoPop: false
            },
            {
                title: "Tsukune Aono (voice)",
                franchise: "Rosario + Vampire",
                type: "animation",
                years: "2008",
                hasFunkoPop: false
            }
        ]
    }
];

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { guestsData };
}
