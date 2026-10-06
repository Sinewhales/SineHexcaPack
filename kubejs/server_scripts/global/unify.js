const UNIFICATIONS = {
    ender_pearl_dust: {
        target: 'kubejs:ender_pearl_dust',
        source: ['ae2:ender_dust']
    },
    raw_nickel : {
        target: 'kubejs:nickel_raw_ore',
        source: ['oritech:raw_nickel']
    },
    nickel_ingot : {
        target: 'kubejs:nickel_ingot',
        source: ['oritech:nickel_ingot']
    },
    nickel_dust : {
        target: 'kubejs:nickel_dust',
        source: ['oritech:nickel_dust']
    }, 
    nickel_nugget : {
        target: 'kubejs:nickel_nugget',
        source: ['oritech:nickel_nugget']
    },    
    nickel_block : {
        target: 'kubejs:nickel_block',
        source: ['oritech:nickel_block']
    },
    raw_platinum : {
        target: 'kubejs:platinum_raw_ore',
        source: ['oritech:raw_platinum']
    },
    platinum_ingot : {
        target: 'kubejs:platinum_ingot',
        source: ['oritech:platinum_ingot']
    },
    platinum_dust : {
        target: 'kubejs:platinum_dust',
        source: ['oritech:platinum_dust']
    }, 
    platinum_nugget : {
        target: 'kubejs:platinum_nugget',
        source: ['oritech:platinum_nugget']
    },    
    platinum_block : {
        target: 'kubejs:platinum_block',
        source: ['oritech:platinum_block']
    },  
    electrum_ingot : {
        target: 'kubejs:electrum_ingot',
        source: ['oritech:electrum_ingot']
    },
    electrum_dust : {
        target: 'kubejs:electrum_dust',
        source: ['oritech:electrum_dust']
    }, 
    electrum_block : {
        target: 'kubejs:electrum_block',
        source: ['oritech:electrum_block']
    }, 
    steel_ingot : {
        target: 'kubejs:steel_ingot',
        source: ['oritech:steel_ingot', 'modern_industrialization:steel_ingot', 'hephaestus:steel_ingot']
    },
    steel_dust : {
        target: 'kubejs:steel_dust',
        source: ['oritech:steel_dust', 'modern_industrialization:steel_dust', 'hephaestus:steel_powder']
    }, 
    steel_block : {
        target: 'kubejs:steel_block',
        source: ['oritech:steel_block', 'modern_industrialization:steel_block', 'hephaestus:steel_block']
    }, 
    steel_plate : {
        target: 'kubejs:steel_plate',
        source: ['modern_industrialization:steel_plate']
    },
    steel_gear : {
        target: 'kubejs:steel_gear',
        source: ['modern_industrialization:steel_gear']
    },
    steel_nugget : {
        target: 'kubejs:steel_nugget',
        source: ['modern_industrialization:steel_nugget', 'hephaestus:steel_nugget']
    },
    steel_rod : {
        target: 'kubejs:steel_rod',
        source: ['modern_industrialization:steel_rod']
    },                  
    iron_dust : {
        target: 'kubejs:iron_dust',
        source: ['oritech:iron_dust', 'modern_industrialization:iron_dust']
    },
    raw_uranium : {
        target: 'kubejs:uranium_raw_ore',
        source: ['oritech:raw_uranium']
    },
    uranium_dust : {
        target: 'kubejs:uranium_dust',
        source: ['oritech:uranium_dust']
    }, 
    uranium_block : {
        target: 'kubejs:uranium_block',
        source: ['oritech:uranium_dust_block']
    },
    gold_dust : {
        target: 'kubejs:gold_dust',
        source: ['oritech:gold_dust']
    },
    copper_dust : {
        target: 'kubejs:copper_dust',
        source: ['oritech:copper_dust', 'modern_industrialization:copper_dust']
    },
    copper_gear : {
        target: 'kubejs:copper_gear',
        source: ['modern_industrialization:copper_gear']
    },
    copper_nugget : {
        target: 'kubejs:copper_nugget',
        source: ['modern_industrialization:copper_nugget']
    },
    copper_plate : {
        target: 'kubejs:copper_plate',
        source: ['modern_industrialization:copper_plate']
    },
    copper_gear : {
        target: 'kubejs:copper_gear',
        source: ['modern_industrialization:copper_gear']
    },
    copper_rod : {
        target: 'kubejs:copper_rod',
        source: ['modern_industrialization:copper_rod']
    },
    coal_dust : {
        target: 'kubejs:coal_dust',
        source: ['oritech:coal_dust', 'modern_industrialization:coal_dust']
    },
    quartz_dust : {
        target: 'kubejs:nether_quartz_dust',
        source: ['oritech:quartz_dust']
    },  
   bronze_plate : {
        target: 'kubejs:bronze_plate',
        source: ['modern_industrialization:bronze_plate']
    },
    bronze_gear : {
        target: 'kubejs:bronze_gear',
        source: ['modern_industrialization:bronze_gear']
    },
    bronze_rod : {
        target: 'kubejs:bronze_rod',
        source: ['modern_industrialization:bronze_rod']
    },    
    bronze_ingot : {
        target: 'kubejs:bronze_ingot',
        source: ['modern_industrialization:bronze_ingot']
    },
    bronze_dust : {
        target: 'kubejs:bronze_dust',
        source: ['modern_industrialization:bronze_dust']
    },    
    raw_tin : {
        target: 'kubejs:tin_raw_ore',
        source: ['modern_industrialization:raw_tin']
    },
    tin_ingot : {
        target: 'kubejs:tin_ingot',
        source: ['modern_industrialization:tin_ingot']
    },    
    tin_dust : {
        target: 'kubejs:tin_dust',
        source: ['modern_industrialization:tin_dust']
    },                                         
    
}

ServerEvents.recipes(event => {
    Object.keys(UNIFICATIONS).forEach(key => {
        const { target, source } = UNIFICATIONS[key]

        source.forEach(item => {
           event.replaceOutput({ output: item }, item, target)
           event.replaceInput({ input: item }, item, target)
           event.remove({ output: item})
        })
    })
})

ServerEvents.tags('item', event => {
Object.keys(UNIFICATIONS).forEach(key => {
        const { target, source } = UNIFICATIONS[key]

        source.forEach(item => {
              event.removeAllTagsFrom(source)
        })
    })
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    Object.keys(UNIFICATIONS).forEach(key => {
        const { target, source } = UNIFICATIONS[key]
        
        source.forEach(item => {
              event.remove(source)
        })
    })
})