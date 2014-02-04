var createGame = require('voxel-engine');
var game = createGame();
var container = document.body;

game.appendTo(container);

var createPlayer = require('voxel-player')(game);
var playr = createPlayer('player.png');
playr.possess();

playr.yaw.position.set(0, 100, 0);

