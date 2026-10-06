StartupEvents.registry('item', event => {
  event.create('fireclay_ball').displayName('Fireclay Ball')
})

StartupEvents.registry('block', event => {
  event.create('fireclay')
    .displayName('Fireclay')
    .soundType('gravel')      // same sound as vanilla clay
    .hardness(0.6)            // same as clay
    .resistance(0.6)
    .tagBlock('minecraft:mineable/shovel')
    .requiresTool(false)
})