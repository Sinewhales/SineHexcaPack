
ServerEvents.recipes(event => {
// Remove Inscriber Dusts
event.remove({ type: 'ae2:inscriber', output: '#c:dusts' })

AECharger(event,
        'ae2:printed_calculation_processor',
        '1x minecraft:dirt')
})

