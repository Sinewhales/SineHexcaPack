const DUST_MATERIALS = {
  iron:   [0xd8d8d8, 0x8a8a8a],
  copper:   [0xe07a4a, 0xffb27d],
  gold:   [0xfcdf4d, 0xfff3a0],
  diamond: [0x4aedd9, 0xcffffa],  
  emerald: [0x17dd62, 0xa6f7c0],
  netherite: [0x5e5057, 0x9a7f86],
  lapis: [0x2a52be, 0x7fa0ff],
  amethyst: [0x9a5cc6, 0xd9b3ff]

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
  Object.keys(DUST_MATERIALS).forEach(material => {
    const color = DUST_MATERIALS[material]

    event.create(`${material}_dust`)
      .displayName(`${titleCase(material)} Dust`)
      .texture(DUST_TEXTURE)       
      .color(0, color[0])
      .color(1, color[1])
      .tag('c:dusts')              
      .tag(`c:dusts/${material}`)

   if (GEM.includes(material)) return
     event.create(`${material}_plate`)
      .displayName(`${titleCase(material)} Plate`)
      .texture(PLATE_TEXTURE)      
      .color(0, color[0])
      .color(1, color[1])
      .tag('c:plates')              
      .tag(`c:plates/${material}`)

     event.create(`${material}_rod`)
      .displayName(`${titleCase(material)} Rod`)
      .texture(ROD_TEXTURE)      
      .color(0, color[0])
      .tag('c:rods')              
      .tag(`c:rods/${material}`)

     event.create(`${material}_gear`)
      .displayName(`${titleCase(material)} Gear`)
      .texture(GEAR_TEXTURE)      
      .color(0, color[0])
      .color(1, color[1])
      .tag('c:gears')              
      .tag(`c:gears/${material}`)
  })
})