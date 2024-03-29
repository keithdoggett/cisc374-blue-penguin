// Constants
var wordDelay = 120;
var lineDelay = 400; // speed of going to next line


var DialogueBox = function(x, y, messageArray){ // dialogue box pops up with scrolling text
  this.x = game.camera.width / 2;
  this.y = game.camera.height / 2;
  this.content = messageArray;
  this.isShowing = false;
  this.line = [];
  this.wordIndex = 0;
  this.lineIndex = 0;



  this.createText = function(){
    console.log('crated dilogue boxe');

    // background overlay of text
    this.textBG = game.add.sprite(this.x, this.y, 'pic'); // uses sprite for background
    this.textBG.scale.setTo(.8, .4);
    this.textBG.x = this.textBG.x - this.textBG.width/2;
    this.textBG.y = game.camera.height / 2;
    this.textBG.alpha = .8;
    this.textBG.fixedToCamera = true;
    //this.text = null;
    this.text = game.add.text(this.x, this.y, ''); // initial text content is empty
    this.text.anchor.setTo(0.5, 0);
    this.text.y = game.camera.height/2; //this.textBG.y - this.textBG.height/2;
    this.text.font = 'Coming Soon';
    this.text.fontSize = 20;
    this.text.backgroundColor = '#ffff00';
    this.text.fill = '#FFFFFF';
    this.text.align = 'center';
    this.text.stroke = '#000000';
    this.text.strokeThickness = 2;
    this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
    this.text.wordWrap = true;
    this.text.wordWrapWidth = 500;
    this.text.fixedToCamera = true;

    this.nextLine(); //adds text

  }

  this.removeText = function() { //hides dialogue box
    this.textBG.alpha = 0;
    this.text.alpha = 0;
    this.wordIndex = 0;
    this.lineIndex = 0;
  }




// nextLin and nextWord borrowed from Phaser.io text example
  this.nextLine = function() {
    console.log(this.content.length);
      if (this.lineIndex === this.content.length)
      {
          return;
      }
      //  Split the current line on spaces, so one word per array element
      this.line = this.content[this.lineIndex].split(' '); //content
      //  Reset the word index to zero (the first word in the line)
      this.wordIndex = 0;
      //  Call the 'nextWord' function once for each word in the line (line.length)
      game.time.events.repeat(wordDelay, this.line.length, this.nextWord, this);
      //  Advance to the next line
      this.lineIndex++;
  }




  this.nextWord = function() {
      //  Add the next word onto the text string, followed by a space
      this.text.text = this.text.text.concat(this.line[this.wordIndex] + ' ');
      //  Advance the word index to the next word in the line
      this.wordIndex++;
      //  Last word?
      if (this.wordIndex === this.line.length)
      {
          //  Add a carriage return
          this.text.text = this.text.text.concat("\n");
          //  Get the next line after the lineDelay amount of ms has elapsed
          game.time.events.add(lineDelay, this.nextLine, this);
      }
  }

}
