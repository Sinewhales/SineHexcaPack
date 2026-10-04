function AEInscriber(event, mode, items, result) {
    let match = String(result).match(/^(\d+)x\s+(.+)$/)
    let count = match ? parseInt(match[1]) : 1
    let id = match ? match[2] : String(result)

    let ingredients = {
        top: { item: items[0] },
        middle: { item: items[1] }
    }

    // Bottom is optional: only add it if present
    if (items[2]) {
        ingredients.bottom = { item: items[2] }
    }

    event.custom({
        type: 'ae2:inscriber',
        ingredients: ingredients,
        mode: mode, // 'press' or 'inscribe'
        result: {
            count: count,
            id: id
        }
    })
}

function AECharger(event, item, result){
    let match = String(result).match(/^(\d+)x\s+(.+)$/)
    let count = match ? parseInt(match[1]) : 1
    let id = match ? match[2] : String(result)

    event.custom({
        type: 'ae2:charger',
        ingredient: {"item" : item},
        result: {
            count: count,
            id: id
        }
    })

}