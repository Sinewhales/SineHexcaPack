const MATERIALS = {
  iron:   {colors: [0xd8d8d8, 0x8a8a8a], flags: ['dust']},
  copper: {colors: [0xe07a4a, 0xffb27d], flags: ['dust', 'gear', 'nugget', 'plate', 'rod']},
  gold:   {colors:[0xfcdf4d, 0xfff3a0], flags: ['dust']},
  diamond: {colors:[0x4aedd9, 0xcffffa], flags: ['']},  
  emerald: {colors:[0x17dd62, 0xa6f7c0], flags: ['']},  
  netherite: {colors:[0x5e5057, 0x9a7f86], flags: ['']},  
  lapis: {colors:[0x2a52be, 0x7fa0ff], flags: ['']},  
  amethyst: {colors:[0x9a5cc6, 0xd9b3ff], flags: ['']},  
 ender_pearl: {colors:[0x1f6b5c, 0x7fe3c8], flags: ['dust']}, 
  nether_quartz: {colors:[0xe8e0d6, 0xffffff], flags: ['dust']},
  coal: {colors:[0x2b2b2b, 0x5a5a5a], flags: ['dust']},
  // Modded
  nickel: {colors:[0xbfc9a8, 0x8d9a73], flags: ['ingot', 'raw_ore', 'dust', 'nugget', 'metal_block']},
  platinum: {colors:[0xd9e2ea, 0xffffff], flags: ['ingot', 'raw_ore', 'dust', 'nugget', 'metal_block']},
  electrum: {colors:[0xe3d28a, 0xfff2b8], flags: ['ingot', 'dust', 'metal_block']},
  steel: {colors:[0x6e747d, 0xaab1bb], flags: ['ingot', 'dust', 'metal_block', 'plate', 'gear', 'nugget', 'rod']},
  uranium: {colors:[0x5f7a4a, 0x9dff4f], flags: ['ingot', 'raw_ore', 'dust', 'metal_block']},
  bronze: {colors:[0xb87333, 0xe0a458], flags: ['plate', 'gear', 'ingot', 'rod', 'dust']},
  tin: {colors:[0xb8c4cc, 0xeef4f8], flags: ['raw_ore', 'ingot', 'dust']},

  
  // Custom
  vibranium: {colors:[0x6b6f80, 0xa66bff], flags: ['ingot', 'metal_block', 'nugget', 'raw_ore', 'ore_end']}
}
// Rename raw ore so it's a prefix instead of a suffix
const FORMS = {
  dust:  { texture: 'kubejs:item/dust',  plural: 'dusts',  label: 'Dust',  layers: 2 },
  plate: { texture: 'kubejs:item/plate', plural: 'plates', label: 'Plate', layers: 2 },
  rod:   { texture: 'kubejs:item/rod',   plural: 'rods',   label: 'Rod',   layers: 1 },
  gear:  { texture: 'kubejs:item/gear',  plural: 'gears',  label: 'Gear',  layers: 2 },
  ingot:  { texture: 'kubejs:item/ingot',  plural: 'ingots',  label: 'Ingot',  layers: 1 },
  nugget:  { texture: 'kubejs:item/nugget',  plural: 'nuggets',  label: 'Nugget',  layers: 1 },
  raw_ore:  { texture: 'kubejs:item/raw_ore',  plural: 'raw_ores',  label: 'Raw Ore',  layers: 1 }
}

const BLOCK_FORMS = {
  metal_block: {suffix: 'block', label: 'Block', tag: 'c:storage_blocks', model: 'kubejs:block/metal_block', layers: 1},
  ore_end: {suffix: 'end_ore', label: 'Ore', tag: 'c:ores', model: 'kubejs:block/ore_end', layers: 1}
}

const DUST_TEXTURE = 'kubejs:item/dust'
const PLATE_TEXTURE = 'kubejs:item/plate'
const ROD_TEXTURE = 'kubejs:item/rod'
const GEAR_TEXTURE = 'kubejs:item/gear'
// Temp consts for exclusion
const GEM = ['diamond', 'emerald', 'lapis', 'amethyst']


function titleCase(str) {
  return str
    .split('_')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

StartupEvents.registry('item', event => {
  Object.keys(MATERIALS).forEach(material => {
   const { colors, flags } = MATERIALS[material]

       flags.forEach(flag => {
          if (BLOCK_FORMS[flag]) return
      const form = FORMS[flag]
      if (!form) {
        console.warn(`[materials] Unknown flag '${flag}' on material '${material}', skipping`)
        return
      }

     const item = event.create(`${material}_${flag}`)
        .displayName(`${titleCase(material)} ${form.label}`)
        .texture(form.texture)
        .tag(`c:${form.plural}`)
        .tag(`c:${form.plural}/${material}`)


      for (let i = 0; i < form.layers; i++) {
        item.color(i, colors[i])
      }
    })
  })
})
 
StartupEvents.registry('block', event => {
  Object.keys(MATERIALS).forEach(material => {
    const { colors, flags } = MATERIALS[material]

    flags.forEach(flag => {
      const form = BLOCK_FORMS[flag]
      if (!form) return

      const block = event.create(`${material}_${form.suffix}`)
        .displayName(`${titleCase(material)} ${form.label}`)
        .texture(form.model)
        .hardness(5)
        .resistance(6)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth(form.tag)
        .tagBoth(`${form.tag}/${material}`)

      for (let i = 0; i < form.layers; i++) {
        block.color(i, colors[i])
      }
      block.item(item => {
        for (let i = 0; i < form.layers; i++) {
          item.color(i, colors[i])
        }
      })
    })
  })
})