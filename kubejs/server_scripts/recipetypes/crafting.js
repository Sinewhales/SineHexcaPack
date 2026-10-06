function gearCrafting(event, material){
  event.shaped(
  Item.of(`kubejs:${material}_gear`, 1), // arg 1: output
  [
    'ABA',
    'B B', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: `kubejs:${material}_rod`,
    B: `kubejs:${material}_plate`  
  }
)}