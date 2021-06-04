add([
  sprite('player'),
  scale(0.5),
  pos(20,20),
  body()
])

addLevel([
  '      ',
  '   @  ',
  '      ',
  
  'xxxxxxxx',

], {
  width: 40,
  height: 40,
  'x': [sprite('ground'), solid()]
})