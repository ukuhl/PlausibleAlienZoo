import QuestionnaireScene4 from './questionnaireScene4.js';

class QuestionnaireScene3 extends Phaser.Scene {

	//constructor(plants, trialCount,this.varObj.clickCountVar1,this.varObj.clickCountVar2,this.varObj.clickCountVar3,this.varObj.clickCountVar4,this.varObj.clickCountVar5,oldNumber,newNumber,maxFeedingNo, minFeedingNo) {
	constructor(varObj) {
		super({key : 'questionnaireScene3'});
		this.varObj = varObj
	}

	init() { }

	preload() {
		// load button images
		//this.load.image('checkboxEmpty', 'static/CheckBoxEmpty.png');
		//this.load.image('checkboxClicked', 'static/CheckBoxClicked.png');
		this.load.spritesheet('checkbox', 'static/CheckBoxSprites.png', { frameWidth: 51, frameHeight: 50 });
	}

	create() {

		var item6Var1Checked = false;
		var item6Var2Checked = false;
		var item6Var3Checked = false;
		var item6Var4Checked = false;
		var item6Var5Checked = false;
		var item6Var6Checked = false;

		var item7Var1Checked = false;
		var item7Var2Checked = false;
		var item7Var3Checked = false;
		var item7Var4Checked = false;
		var item7Var5Checked = false;
		var item7Var6Checked = false;

		var item8Var1Checked = false;
		var item8Var2Checked = false;
		var item8Var3Checked = false;
		var item8Var4Checked = false;
		var item8Var5Checked = false;
		var item8Var6Checked = false;

		// clean slate:
    this.children.removeAll();

		var qIntro = [
			'To complete the study, please answer the following 9 questions.',
			'Please answer as truthfully and accurately as possible.',
			'These questions are designed to assess your personal impressions from the game. Therefore, there are no wrong answers.',
		]

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.05, qIntro, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		if(this.varObj.api.controlGroup) {
			var item6 = [
				"6. I was able to use the feedback based on what other users tried at that point in time in the game to increase the number of Shubs."
			];
		} else {
			var item6 = [
				"6. I was able to use the feedback on what choice would have led to a better result to increase the number of Shubs."
			];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.15, item6, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.2, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite1.on('pointerdown', function (pointer) {
			if (item6Var1Checked) {
				item6Sprite1.setFrame(0);
				item6Var1Checked = false;
			} else {
				item6Sprite1.setFrame(1);
				item6Var1Checked = true;

				item6Var2Checked = false;
				item6Var3Checked = false;
				item6Var4Checked = false;
				item6Var5Checked = false;
				item6Var6Checked = false;
				item6Sprite2.setFrame(0);
				item6Sprite3.setFrame(0);
				item6Sprite4.setFrame(0);
				item6Sprite5.setFrame(0);
				item6Sprite6.setFrame(0);

			}
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.2, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite2.on('pointerdown', function (pointer) {
			if (item6Var2Checked) {
				item6Sprite2.setFrame(0);
				item6Var2Checked = false;
			} else {
				item6Sprite2.setFrame(1);
				item6Var2Checked = true;

				item6Var1Checked = false;
				item6Var3Checked = false;
				item6Var4Checked = false;
				item6Var5Checked = false;
				item6Var6Checked = false;
				item6Sprite1.setFrame(0);
				item6Sprite3.setFrame(0);
				item6Sprite4.setFrame(0);
				item6Sprite5.setFrame(0);
				item6Sprite6.setFrame(0);

			}
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.2, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite3.on('pointerdown', function (pointer) {
			if (item6Var3Checked) {
				item6Sprite3.setFrame(0);
				item6Var3Checked = false;
			} else {
				item6Sprite3.setFrame(1);
				item6Var3Checked = true;

				item6Var1Checked = false;
				item6Var2Checked = false;
				item6Var4Checked = false;
				item6Var5Checked = false;
				item6Var6Checked = false;
				item6Sprite1.setFrame(0);
				item6Sprite2.setFrame(0);
				item6Sprite4.setFrame(0);
				item6Sprite5.setFrame(0);
				item6Sprite6.setFrame(0);

			}
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.2, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite4.on('pointerdown', function (pointer) {
			if (item6Var4Checked) {
				item6Sprite4.setFrame(0);
				item6Var4Checked = false;
			} else {
				item6Sprite4.setFrame(1);
				item6Var4Checked = true;

				item6Var1Checked = false;
				item6Var2Checked = false;
				item6Var3Checked = false;
				item6Var5Checked = false;
				item6Var6Checked = false;
				item6Sprite1.setFrame(0);
				item6Sprite2.setFrame(0);
				item6Sprite3.setFrame(0);
				item6Sprite5.setFrame(0);
				item6Sprite6.setFrame(0);

			}
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.2, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite5.on('pointerdown', function (pointer) {
			if (item6Var5Checked) {
				item6Sprite5.setFrame(0);
				item6Var5Checked = false;
			} else {
				item6Sprite5.setFrame(1);
				item6Var5Checked = true;

				item6Var1Checked = false;
				item6Var2Checked = false;
				item6Var3Checked = false;
				item6Var4Checked = false;
				item6Var6Checked = false;
				item6Sprite1.setFrame(0);
				item6Sprite2.setFrame(0);
				item6Sprite3.setFrame(0);
				item6Sprite4.setFrame(0);
				item6Sprite6.setFrame(0);

			}
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.2, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item6Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item6Sprite6.on('pointerdown', function (pointer) {
			if (item6Var6Checked) {
				item6Sprite6.setFrame(0);
				item6Var6Checked = false;
			} else {
				item6Sprite6.setFrame(1);
				item6Var6Checked = true;

				item6Var1Checked = false;
				item6Var2Checked = false;
				item6Var3Checked = false;
				item6Var4Checked = false;
				item6Var5Checked = false;
				item6Sprite1.setFrame(0);
				item6Sprite2.setFrame(0);
				item6Sprite3.setFrame(0);
				item6Sprite4.setFrame(0);
				item6Sprite5.setFrame(0);

			}
		});

		if(this.varObj.api.controlGroup) {
		  var item7 = [
		    "7. I did not find inconsistencies in the feedback based on what other users tried at that point in time in the game."
		  ];
		} else {
		  var item7 = [
		    "7. I did not find inconsistencies in the feedback on what choice would have led to a better result."
		  ];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.325, item7, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.375, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite1.on('pointerdown', function (pointer) {
		  if (item7Var1Checked) {
		    item7Sprite1.setFrame(0);
		    item7Var1Checked = false;
		  } else {
		    item7Sprite1.setFrame(1);
		    item7Var1Checked = true;

		    item7Var2Checked = false;
		    item7Var3Checked = false;
		    item7Var4Checked = false;
		    item7Var5Checked = false;
		    item7Var6Checked = false;
		    item7Sprite2.setFrame(0);
		    item7Sprite3.setFrame(0);
		    item7Sprite4.setFrame(0);
		    item7Sprite5.setFrame(0);
		    item7Sprite6.setFrame(0);

		  }
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.375, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite2.on('pointerdown', function (pointer) {
		  if (item7Var2Checked) {
		    item7Sprite2.setFrame(0);
		    item7Var2Checked = false;
		  } else {
		    item7Sprite2.setFrame(1);
		    item7Var2Checked = true;

		    item7Var1Checked = false;
		    item7Var3Checked = false;
		    item7Var4Checked = false;
		    item7Var5Checked = false;
		    item7Var6Checked = false;
		    item7Sprite1.setFrame(0);
		    item7Sprite3.setFrame(0);
		    item7Sprite4.setFrame(0);
		    item7Sprite5.setFrame(0);
		    item7Sprite6.setFrame(0);

		  }
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.375, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite3.on('pointerdown', function (pointer) {
		  if (item7Var3Checked) {
		    item7Sprite3.setFrame(0);
		    item7Var3Checked = false;
		  } else {
		    item7Sprite3.setFrame(1);
		    item7Var3Checked = true;

		    item7Var1Checked = false;
		    item7Var2Checked = false;
		    item7Var4Checked = false;
		    item7Var5Checked = false;
		    item7Var6Checked = false;
		    item7Sprite1.setFrame(0);
		    item7Sprite2.setFrame(0);
		    item7Sprite4.setFrame(0);
		    item7Sprite5.setFrame(0);
		    item7Sprite6.setFrame(0);

		  }
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.375, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite4.on('pointerdown', function (pointer) {
		  if (item7Var4Checked) {
		    item7Sprite4.setFrame(0);
		    item7Var4Checked = false;
		  } else {
		    item7Sprite4.setFrame(1);
		    item7Var4Checked = true;

		    item7Var1Checked = false;
		    item7Var2Checked = false;
		    item7Var3Checked = false;
		    item7Var5Checked = false;
		    item7Var6Checked = false;
		    item7Sprite1.setFrame(0);
		    item7Sprite2.setFrame(0);
		    item7Sprite3.setFrame(0);
		    item7Sprite5.setFrame(0);
		    item7Sprite6.setFrame(0);

		  }
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.375, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite5.on('pointerdown', function (pointer) {
		  if (item7Var5Checked) {
		    item7Sprite5.setFrame(0);
		    item7Var5Checked = false;
		  } else {
		    item7Sprite5.setFrame(1);
		    item7Var5Checked = true;

		    item7Var1Checked = false;
		    item7Var2Checked = false;
		    item7Var3Checked = false;
		    item7Var4Checked = false;
		    item7Var6Checked = false;
		    item7Sprite1.setFrame(0);
		    item7Sprite2.setFrame(0);
		    item7Sprite3.setFrame(0);
		    item7Sprite4.setFrame(0);
		    item7Sprite6.setFrame(0);

		  }
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.375, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item7Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item7Sprite6.on('pointerdown', function (pointer) {
		  if (item7Var6Checked) {
		    item7Sprite6.setFrame(0);
		    item7Var6Checked = false;
		  } else {
		    item7Sprite6.setFrame(1);
		    item7Var6Checked = true;

		    item7Var1Checked = false;
		    item7Var2Checked = false;
		    item7Var3Checked = false;
		    item7Var4Checked = false;
		    item7Var5Checked = false;
		    item7Sprite1.setFrame(0);
		    item7Sprite2.setFrame(0);
		    item7Sprite3.setFrame(0);
		    item7Sprite4.setFrame(0);
		    item7Sprite5.setFrame(0);

		  }
		});

		if(this.varObj.api.controlGroup) {
		  var item8 = [
		    "8. I think most people would learn to work with the feedback based on what other users tried at that point in time in the game very quickly."
		  ];
		} else {
		  var item8 = [
		    "8. I think most people would learn to work with the feedback on what choice would have led to a better result very quickly."
		  ];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.5, item8, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.55, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite1.on('pointerdown', function (pointer) {
		  if (item8Var1Checked) {
		    item8Sprite1.setFrame(0);
		    item8Var1Checked = false;
		  } else {
		    item8Sprite1.setFrame(1);
		    item8Var1Checked = true;

		    item8Var2Checked = false;
		    item8Var3Checked = false;
		    item8Var4Checked = false;
		    item8Var5Checked = false;
		    item8Var6Checked = false;
		    item8Sprite2.setFrame(0);
		    item8Sprite3.setFrame(0);
		    item8Sprite4.setFrame(0);
		    item8Sprite5.setFrame(0);
		    item8Sprite6.setFrame(0);

		  }
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.55, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite2.on('pointerdown', function (pointer) {
		  if (item8Var2Checked) {
		    item8Sprite2.setFrame(0);
		    item8Var2Checked = false;
		  } else {
		    item8Sprite2.setFrame(1);
		    item8Var2Checked = true;

		    item8Var1Checked = false;
		    item8Var3Checked = false;
		    item8Var4Checked = false;
		    item8Var5Checked = false;
		    item8Var6Checked = false;
		    item8Sprite1.setFrame(0);
		    item8Sprite3.setFrame(0);
		    item8Sprite4.setFrame(0);
		    item8Sprite5.setFrame(0);
		    item8Sprite6.setFrame(0);

		  }
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.55, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite3.on('pointerdown', function (pointer) {
		  if (item8Var3Checked) {
		    item8Sprite3.setFrame(0);
		    item8Var3Checked = false;
		  } else {
		    item8Sprite3.setFrame(1);
		    item8Var3Checked = true;

		    item8Var1Checked = false;
		    item8Var2Checked = false;
		    item8Var4Checked = false;
		    item8Var5Checked = false;
		    item8Var6Checked = false;
		    item8Sprite1.setFrame(0);
		    item8Sprite2.setFrame(0);
		    item8Sprite4.setFrame(0);
		    item8Sprite5.setFrame(0);
		    item8Sprite6.setFrame(0);

		  }
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.55, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite4.on('pointerdown', function (pointer) {
		  if (item8Var4Checked) {
		    item8Sprite4.setFrame(0);
		    item8Var4Checked = false;
		  } else {
		    item8Sprite4.setFrame(1);
		    item8Var4Checked = true;

		    item8Var1Checked = false;
		    item8Var2Checked = false;
		    item8Var3Checked = false;
		    item8Var5Checked = false;
		    item8Var6Checked = false;
		    item8Sprite1.setFrame(0);
		    item8Sprite2.setFrame(0);
		    item8Sprite3.setFrame(0);
		    item8Sprite5.setFrame(0);
		    item8Sprite6.setFrame(0);

		  }
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.55, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite5.on('pointerdown', function (pointer) {
		  if (item8Var5Checked) {
		    item8Sprite5.setFrame(0);
		    item8Var5Checked = false;
		  } else {
		    item8Sprite5.setFrame(1);
		    item8Var5Checked = true;

		    item8Var1Checked = false;
		    item8Var2Checked = false;
		    item8Var3Checked = false;
		    item8Var4Checked = false;
		    item8Var6Checked = false;
		    item8Sprite1.setFrame(0);
		    item8Sprite2.setFrame(0);
		    item8Sprite3.setFrame(0);
		    item8Sprite4.setFrame(0);
		    item8Sprite6.setFrame(0);

		  }
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.55, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item8Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item8Sprite6.on('pointerdown', function (pointer) {
		  if (item8Var6Checked) {
		    item8Sprite6.setFrame(0);
		    item8Var6Checked = false;
		  } else {
		    item8Sprite6.setFrame(1);
		    item8Var6Checked = true;

		    item8Var1Checked = false;
		    item8Var2Checked = false;
		    item8Var3Checked = false;
		    item8Var4Checked = false;
		    item8Var5Checked = false;
		    item8Sprite1.setFrame(0);
		    item8Sprite2.setFrame(0);
		    item8Sprite3.setFrame(0);
		    item8Sprite4.setFrame(0);
		    item8Sprite5.setFrame(0);

		  }
		});

		// instatiate and add new end scene with current data
		var questionnaireScene4 = undefined;

		// add button to request feedback
		var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
			.setInteractive()
			.on('pointerdown', () => questionnaireScene4 = new QuestionnaireScene4(this.varObj))
			.on('pointerdown', () => this.scene.remove('questionnaireScene4', questionnaireScene4))
			.on('pointerdown', () => this.scene.add('questionnaireScene4', questionnaireScene4))
			.on('pointerdown', () => this.scene.start('questionnaireScene4'));

		var textContinue = this.add.text(-50, -15, 'Continue!', { fontSize: '18px', color: '#000000' })
		var buttonContainer = this.add.container(window.innerWidth * 0.8, window.innerHeight * 0.70, [buttonContinue, textContinue])

	}

	update() { }

}

export default QuestionnaireScene3;