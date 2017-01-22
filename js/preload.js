var preloadState = {

  //preload function where we load all assets in assets folder
  preload: function(){
    game.load.image('phaser', 'assets/sprites/phaser2.png');
    game.load.script('filterX', 'js/lib/filters/BlurX.js');
    game.load.script('filterY', 'js/lib/filters/BlurY.js');
    game.load.script('gray', 'js/lib/filters/Gray.js');

    game.load.image('background','assets/tests/debug-grid-1920x1920.png');
    game.load.image('npc','assets/sprites/sonic_havok_sanity.png');
    game.load.image('player','assets/sprites/phaser-dude.png');


    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.image('pic', 'assets/skies/underwater3.png');

    game.load.spritesheet('emptyButton', 'assets/buttons/flixel-button.png', 80, 20);
    game.load.image('turtle', 'assets/turtles/turtle_1.jpg');

  },

  //sends us to the main menu
  create: function(){
    game.state.start("GameTitle");
  }

}
