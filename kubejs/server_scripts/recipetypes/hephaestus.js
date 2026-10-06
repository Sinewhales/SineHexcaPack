function HephaestusGear(event, input, output ){
  event.custom({
  "type": "hephaestus:casting_table",
  "cast": { "item": "hephaestus:gear_cast" },
  "cast_consumed": false,
  "fluid": {
    "id": input,
    "amount": 360
  },
  "result":  output,
  "cooling_time": 200
})
}

function HephaestusPlate(event, input, output ){
  event.custom({
  "type": "hephaestus:casting_table",
  "cast": { "item": "hephaestus:plate_cast" },
  "cast_consumed": false,
  "fluid": {
    "id": input,
    "amount": 90
  },
  "result":  output,
  "cooling_time": 100
})
}

function HephaestusIngot(event, input, output ){
  event.custom({
  "type": "hephaestus:casting_table",
  "cast": { "item": "hephaestus:ingot_cast" },
  "cast_consumed": false,
  "fluid": {
    "id": input,
    "amount": 90
  },
  "result":  output,
  "cooling_time": 100
})
}

function HephaestusMelting(event, input, output){
event.custom({
  "type": "hephaestus:melting",
  "fuel": {
    "amount": 50,
    "id": "minecraft:lava"
  },
  "ingredient": {
    "item": input
  },
  "result": {
    "amount": 90,
    "id": output
  },
  "temperature": 900,
  "time": 150
})
}

