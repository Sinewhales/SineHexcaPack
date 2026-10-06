
ServerEvents.recipes(event => {
event.remove({id: 'modern_industrialization:materials/copper/craft/gear'})
event.remove({id: 'modern_industrialization:materials/bronze/craft/gear'})
event.remove({id: 'modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl'})
event.remove({output: 'modern_industrialization:fire_clay_brick'})
event.smelting('modern_industrialization:fire_clay_brick', 'kubejs:fireclay_ball')
event.blasting('modern_industrialization:fire_clay_brick', 'kubejs:fireclay_ball')
// Better Macerator recipe
event.remove({id: 'modern_industrialization:steam_age/bronze/macerator_asbl'})
event.shaped(
  Item.of('modern_industrialization:bronze_macerator', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:diamond',
    B: 'kubejs:copper_gear',  //arg 3: the mapping object
    C: 'modern_industrialization:bronze_machine_casing'
  }
)

// Steel Upgrade
event.remove({id: 'modern_industrialization:steam_age/steel/steel_upgrade_asbl'})
event.shaped(
  Item.of('modern_industrialization:steel_upgrade', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'modern_industrialization:fire_clay_bricks',
    B: 'kubejs:bronze_gear',  //arg 3: the mapping object
    C: 'modern_industrialization:steel_machine_casing'
  }
)
})

