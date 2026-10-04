const UNIFICATIONS = {
    ender_pearl_dust: {
        target: 'kubejs:ender_pearl_dust',
        source: ['ae2:ender_dust']
    }
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