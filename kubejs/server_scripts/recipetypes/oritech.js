function OritechPulverizer(event, input, results, time) {
  // Ingredient: 'minecraft:nether_quartz_ore' -> {item}, '#c:ores/quartz' -> {tag}
  const toIngredient = (i) =>
    i.startsWith('#') ? { tag: i.substring(1) } : { item: i }

  const toResult = (r) => {
    const match = /^(\d+)x\s+(\S+)$/.exec(r.trim())
    return match
      ? { count: parseInt(match[1]), id: match[2] }
      : { count: 1, id: r.trim() }
  }


  const inputs = Array.isArray(input) ? input : [input]
  const outputs = Array.isArray(results) ? results : [results]

  event.custom({
    type: 'oritech:pulverizer',
    ingredients: inputs.map(toIngredient),
    results: outputs.map(toResult),
    time: time
  })
}