
ServerEvents.recipes(event => {
event.remove({id: 'oritech:crafting/plating'})
event.remove({id: 'oritech:assembler/plating'})
event.remove({id: 'oritech:crafting/alloy/steel'})
event.remove({id: 'oritech:steel_blockblockinv'})
event.remove({id: 'oritech:steel_ingot_from_smelting_steel_dust'})
event.remove({id: 'oritech:steel_ingot_from_blasting_steel_dust'})
event.remove({id: 'modern_industrialization:/materials/steel/smelting/dust_to_ingot_smelting_exported_mi_furnace'})
event.remove({id: 'oritech:pulverizer'})
// Copper Plating
event.shaped(
  Item.of('oritech:machine_plating_block', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'kubejs:copper_plate',
    B: 'kubejs:steel_ingot',  //arg 3: the mapping object
    C: 'kubejs:copper_gear'
  }
)
})

