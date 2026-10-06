function universalPulverizer(event, input, results, time){
OritechPulverizer(event, input, results, time)
    event.recipes.modern_industrialization.macerator(2, time)
        .itemIn(input)
        .itemOut(results)
}

ServerEvents.recipes(event => {
event.remove({type: 'oritech:pulverizer'})
event.remove({type: 'modern_industrialization:macerator'})

universalPulverizer(event, 'minecraft:raw_iron', '2x kubejs:iron_dust', 100)
universalPulverizer(event, 'minecraft:iron_ingot', 'kubejs:iron_dust', 50)

universalPulverizer(event, 'minecraft:raw_copper', '2x kubejs:copper_dust', 100)
universalPulverizer(event, 'minecraft:copper_ingot', 'kubejs:copper_dust', 50)

universalPulverizer(event, 'minecraft:raw_gold', '2x kubejs:gold_dust', 100)
universalPulverizer(event, 'minecraft:gold_ingot', 'kubejs:gold_dust', 50)

universalPulverizer(event, 'minecraft:ender_pearl', 'kubejs:ender_pearl_dust', 50)

universalPulverizer(event, 'minecraft:quartz', 'kubejs:nether_quartz_dust', 50)

universalPulverizer(event, 'minecraft:coal', 'kubejs:coal_dust', 50)

universalPulverizer(event, 'kubejs:nickel_raw_ore', '2x kubejs:nickel_dust', 100)
universalPulverizer(event, 'kubejs:nickel_ingot', 'kubejs:nickel_dust', 50)

universalPulverizer(event, 'kubejs:platinum_ingot', 'kubejs:platinum_dust', 50)

universalPulverizer(event, 'kubejs:electrum_ingot', 'kubejs:electrum_dust', 50)

universalPulverizer(event, 'kubejs:steel_ingot', 'kubejs:steel_dust', 50)

universalPulverizer(event, 'kubejs:uranium_raw_ore', '2x kubejs:uranium_dust', 100)
universalPulverizer(event, 'kubejs:uranium_ingot', 'kubejs:uranium_dust', 50)

universalPulverizer(event, 'kubejs:bronze_ingot', 'kubejs:bronze_dust', 50)

universalPulverizer(event, 'kubejs:tin_raw_ore', '2x kubejs:tin_dust', 100)
universalPulverizer(event, 'kubejs:tin_ingot', 'kubejs:tin_dust', 50)

universalPulverizer(event, 'ae2:sky_stone_block', 'ae2:sky_dust', 50)
universalPulverizer(event, 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 50)
universalPulverizer(event, 'ae2:fluix_crystal', 'ae2:fluix_dust', 50)

universalPulverizer(event, 'modern_industrialization:coke', 'modern_industrialization:coke_dust', 50)


gearCrafting(event, 'copper')
gearCrafting(event, 'bronze')


})
