const player = add([
  sprite('player'),
  scale(0.5),
  pos(20,20),
  body()
])

const MOVE_SPEED = 200

keyDown('right', ()=>{
  player.move(MOVE_SPEED,0)
})

keyDown('left', ()=>{
  player.move(-MOVE_SPEED,0)
})

addLevel([
  '      ',
  '   @  ',
<<<<<<< HEAD
  '     ',
=======
  '      ',
>>>>>>> 53502addeeb6ce88a037a5ec9c3b016e452bf594
  
  'xxxxxxxx',

], {
  width: 40,
  height: 40,
<<<<<<< HEAD
  'x': [sprite('ground'), solid()],
  '@': [sprite('enemy'), scale(0.5)]

=======
  'x': [sprite('ground'), solid()]
>>>>>>> 53502addeeb6ce88a037a5ec9c3b016e452bf594
})