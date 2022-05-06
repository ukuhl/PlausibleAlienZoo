"use strict";

import InfoScene from './infoScene.js';

window.entering_fullscreen = false;

// Reload everything when window size changes
window.addEventListener("resize", () => {
  if(!entering_fullscreen) {  // If browser is not going into fullscreen mode, reload everything
    window.location.href = window.location.href;
  }
});

window.onload = function(){
  // generate new Api instance
  var api = new AlienZooApi();
  var game = undefined;

  // start new game, log
  api.gameStart().then( async (success) => {
      if(success == false) {
          throw "Error while starting the game"
      }
      // log info returned from server after api.gameStart()
      console.log(api.userId);
      console.log(api.controlGroup);

      // set configuration for phaser game
      var config = {
        type: Phaser.AUTO,
            scale: {
              mode: Phaser.Scale.FIT,
              parent: "app",
              autoCenter: Phaser.Scale.CENTER_BOTH,
              fullscreenTarget: document.getElementById("app"),
            },
            dom: {
                createContainer: true
            },
            backgroundColor: '#ffffff',
            width: window.innerWidth,
            height: window.innerHeight,
            physics: {
              default: 'arcade',
              arcade: {
                gravity: { y: 300 },
                debug: false
              }
            }
          };



      // configure phaser game
      var game = new Phaser.Game(config);

      // *** set global variables ***
      // button container
      var buttonContainer;
      // variable for current scene
      var currScene;
      // plant counters
      let clickCountVar1 = 0;
      let clickCountVar2 = 0;
      let clickCountVar3 = 0;
      let clickCountVar4 = 0;
      let clickCountVar5 = 0;
      // plant counterfactual counters
      var cf_clickCountVar1;
      var cf_clickCountVar2;
      var cf_clickCountVar3;
      var cf_clickCountVar4;
      var cf_clickCountVar5;
      // min / max numbers of leaves to be fed
      let maxFeedingNo = 6;
      let minFeedingNo = 0;
      // numbers of Shubs
      let newNumber = 10;
      let oldNumber = newNumber;
      // button to start the Game
      var buttonStart;
      var buttonContinue;
      var btnContinueShowDelay = 10000; // Button "Continue" becomes visible after 10 seconds (= 10000ms)
      var btnStartShowDelay = 20000; // Button "Start!" becomes visible after 20 seconds (= 20000ms)
      var btnOkayShowDelay = 5000; // Button "Okay" becomes visible after 5 seconds (= 5000ms)

      // button to get feedback
      var buttonFeedback;
      // button to get feedback
      var buttonFeed;
      // trial and block counters
      let trialCount = 0;
      let blockCount = 1;
      let maxBlockCount = 7; // ATTENTION: insert desired blockNumber + 1 --> 7!
      let numTrialsPerBlock = 2;  // ATTENTION: Must be less or equal than 3!
      let attentionTrials = [3,7]; // define after which trials attention scenes are played
      // arrays for storing user input / counterfactual information for later feedback
      let in_array = [];
      let cf_array = [];
      let rand_array = [];
      let diff_array = [];
      let shubOldNo = [];
      let shubNewNo = [];
      // initialize and shuffle array of plant names
      var plants = ['static/leaf1.png', 'static/leaf2.png', 'static/leaf3.png', 'static/leaf4.png', 'static/leaf5.png'];
      // randomize plant colors for this participant:
      plants = shuffle(plants);

      // generate dict containing all data, that can be easily passed through the scenes
      const varObj = {
        "api": api,
        "plants": plants,
        "btnContinueShowDelay": btnContinueShowDelay,
        "btnOkayShowDelay": btnOkayShowDelay,
        "btnStartShowDelay": btnStartShowDelay,
        "trialCount": trialCount,
        "blockCount": blockCount,
        "maxBlockCount": maxBlockCount,
        "numTrialsPerBlock": numTrialsPerBlock,
        "attentionTrials": attentionTrials,
        "clickCountVar1": clickCountVar1,
        "clickCountVar2": clickCountVar2,
        "clickCountVar3": clickCountVar3,
        "clickCountVar4": clickCountVar4,
        "clickCountVar5": clickCountVar5,
        "oldNumber": oldNumber,
        "newNumber": newNumber,
        "maxFeedingNo": maxFeedingNo,
        "minFeedingNo": minFeedingNo,
        "in_array" : [],
        "cf_array" : [],
        "rand_array" : [],
        "shubOldNo" : [],
        "shubNewNo" : [],
        "feedback_flag" : false,
      }

      // define info scene with current data, and start the scene
      var infoScene = new InfoScene(varObj);
      game.scene.add('infoScene', infoScene);
      game.scene.start('infoScene');

      // auxilliary function to shuffle the plants-array right at the start
      function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
        }

        return array;
      }
  })
  .catch((error) => {
      console.log("Smth. went wrong :(");
      console.log(error);
  });
};
