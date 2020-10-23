import QuestionnaireScene3 from './questionnaireScene3.js';

class QuestionnaireScene2 extends Phaser.Scene {

	//constructor(plants, trialCount,this.varObj.clickCountVar1,this.varObj.clickCountVar2,this.varObj.clickCountVar3,this.varObj.clickCountVar4,this.varObj.clickCountVar5,oldNumber,newNumber,maxFeedingNo, minFeedingNo) {
	constructor(varObj) {
		super({key : 'questionnaireScene2'});
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

		var item3Var1Checked = false;
		var item3Var2Checked = false;
		var item3Var3Checked = false;
		var item3Var4Checked = false;
		var item3Var5Checked = false;
		var item3Var6Checked = false;

		var item4Var1Checked = false;
		var item4Var2Checked = false;
		var item4Var3Checked = false;
		var item4Var4Checked = false;
		var item4Var5Checked = false;
		var item4Var6Checked = false;

		var item5Var1Checked = false;
		var item5Var2Checked = false;
		var item5Var3Checked = false;
		var item5Var4Checked = false;
		var item5Var5Checked = false;
		var item5Var6Checked = false;

		// clean slate:
    this.children.removeAll();

		var qIntro = [
			'To complete the study, please answer the following 9 questions.',
			'Please answer as truthfully and accurately as possible.',
			'These questions are designed to assess your personal impressions from the game. Therefore, there are no wrong answers.',
		]

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.05, qIntro, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		if(this.varObj.api.controlGroup) {
			var item3 = [
				"3. I understood the feedback based on what other users tried at that point in time in the game."
			];
		} else {
			var item3 = [
				"3. I understood the feedback on what choice would have led to a better result."
			];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.15, item3, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.2, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite1.on('pointerdown', function (pointer) {
			if (item3Var1Checked) {
				item3Sprite1.setFrame(0);
				item3Var1Checked = false;
			} else {
				item3Sprite1.setFrame(1);
				item3Var1Checked = true;

				item3Var2Checked = false;
				item3Var3Checked = false;
				item3Var4Checked = false;
				item3Var5Checked = false;
				item3Var6Checked = false;
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.2, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite2.on('pointerdown', function (pointer) {
			if (item3Var2Checked) {
				item3Sprite2.setFrame(0);
				item3Var2Checked = false;
			} else {
				item3Sprite2.setFrame(1);
				item3Var2Checked = true;

				item3Var1Checked = false;
				item3Var3Checked = false;
				item3Var4Checked = false;
				item3Var5Checked = false;
				item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.2, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite3.on('pointerdown', function (pointer) {
			if (item3Var3Checked) {
				item3Sprite3.setFrame(0);
				item3Var3Checked = false;
			} else {
				item3Sprite3.setFrame(1);
				item3Var3Checked = true;

				item3Var1Checked = false;
				item3Var2Checked = false;
				item3Var4Checked = false;
				item3Var5Checked = false;
				item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.2, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite4.on('pointerdown', function (pointer) {
			if (item3Var4Checked) {
				item3Sprite4.setFrame(0);
				item3Var4Checked = false;
			} else {
				item3Sprite4.setFrame(1);
				item3Var4Checked = true;

				item3Var1Checked = false;
				item3Var2Checked = false;
				item3Var3Checked = false;
				item3Var5Checked = false;
				item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.2, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite5.on('pointerdown', function (pointer) {
			if (item3Var5Checked) {
				item3Sprite5.setFrame(0);
				item3Var5Checked = false;
			} else {
				item3Sprite5.setFrame(1);
				item3Var5Checked = true;

				item3Var1Checked = false;
				item3Var2Checked = false;
				item3Var3Checked = false;
				item3Var4Checked = false;
				item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.2, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item3Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.25).setInteractive();

		item3Sprite6.on('pointerdown', function (pointer) {
			if (item3Var6Checked) {
				item3Sprite6.setFrame(0);
				item3Var6Checked = false;
			} else {
				item3Sprite6.setFrame(1);
				item3Var6Checked = true;

				item3Var1Checked = false;
				item3Var2Checked = false;
				item3Var3Checked = false;
				item3Var4Checked = false;
				item3Var5Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);

			}
		});

		if(this.varObj.api.controlGroup) {
		  var item4 = [
		    "4. I did not need support to understand the feedback based on what other users tried at that point in time in the game."
		  ];
		} else {
		  var item4 = [
		    "4. I did not need support to understand the feedback on what choice would have led to a better result."
		  ];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.325, item4, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.375, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite1.on('pointerdown', function (pointer) {
		  if (item4Var1Checked) {
		    item4Sprite1.setFrame(0);
		    item4Var1Checked = false;
		  } else {
		    item4Sprite1.setFrame(1);
		    item4Var1Checked = true;

		    item4Var2Checked = false;
		    item4Var3Checked = false;
		    item4Var4Checked = false;
		    item4Var5Checked = false;
		    item4Var6Checked = false;
		    item4Sprite2.setFrame(0);
		    item4Sprite3.setFrame(0);
		    item4Sprite4.setFrame(0);
		    item4Sprite5.setFrame(0);
		    item4Sprite6.setFrame(0);

		  }
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.375, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite2.on('pointerdown', function (pointer) {
		  if (item4Var2Checked) {
		    item4Sprite2.setFrame(0);
		    item4Var2Checked = false;
		  } else {
		    item4Sprite2.setFrame(1);
		    item4Var2Checked = true;

		    item4Var1Checked = false;
		    item4Var3Checked = false;
		    item4Var4Checked = false;
		    item4Var5Checked = false;
		    item4Var6Checked = false;
		    item4Sprite1.setFrame(0);
		    item4Sprite3.setFrame(0);
		    item4Sprite4.setFrame(0);
		    item4Sprite5.setFrame(0);
		    item4Sprite6.setFrame(0);

		  }
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.375, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite3.on('pointerdown', function (pointer) {
		  if (item4Var3Checked) {
		    item4Sprite3.setFrame(0);
		    item4Var3Checked = false;
		  } else {
		    item4Sprite3.setFrame(1);
		    item4Var3Checked = true;

		    item4Var1Checked = false;
		    item4Var2Checked = false;
		    item4Var4Checked = false;
		    item4Var5Checked = false;
		    item4Var6Checked = false;
		    item4Sprite1.setFrame(0);
		    item4Sprite2.setFrame(0);
		    item4Sprite4.setFrame(0);
		    item4Sprite5.setFrame(0);
		    item4Sprite6.setFrame(0);

		  }
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.375, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite4.on('pointerdown', function (pointer) {
		  if (item4Var4Checked) {
		    item4Sprite4.setFrame(0);
		    item4Var4Checked = false;
		  } else {
		    item4Sprite4.setFrame(1);
		    item4Var4Checked = true;

		    item4Var1Checked = false;
		    item4Var2Checked = false;
		    item4Var3Checked = false;
		    item4Var5Checked = false;
		    item4Var6Checked = false;
		    item4Sprite1.setFrame(0);
		    item4Sprite2.setFrame(0);
		    item4Sprite3.setFrame(0);
		    item4Sprite5.setFrame(0);
		    item4Sprite6.setFrame(0);

		  }
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.375, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite5.on('pointerdown', function (pointer) {
		  if (item4Var5Checked) {
		    item4Sprite5.setFrame(0);
		    item4Var5Checked = false;
		  } else {
		    item4Sprite5.setFrame(1);
		    item4Var5Checked = true;

		    item4Var1Checked = false;
		    item4Var2Checked = false;
		    item4Var3Checked = false;
		    item4Var4Checked = false;
		    item4Var6Checked = false;
		    item4Sprite1.setFrame(0);
		    item4Sprite2.setFrame(0);
		    item4Sprite3.setFrame(0);
		    item4Sprite4.setFrame(0);
		    item4Sprite6.setFrame(0);

		  }
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.375, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item4Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.25).setInteractive();

		item4Sprite6.on('pointerdown', function (pointer) {
		  if (item4Var6Checked) {
		    item4Sprite6.setFrame(0);
		    item4Var6Checked = false;
		  } else {
		    item4Sprite6.setFrame(1);
		    item4Var6Checked = true;

		    item4Var1Checked = false;
		    item4Var2Checked = false;
		    item4Var3Checked = false;
		    item4Var4Checked = false;
		    item4Var5Checked = false;
		    item4Sprite1.setFrame(0);
		    item4Sprite2.setFrame(0);
		    item4Sprite3.setFrame(0);
		    item4Sprite4.setFrame(0);
		    item4Sprite5.setFrame(0);

		  }
		});

		if(this.varObj.api.controlGroup) {
		  var item5 = [
		    "5. I found that the feedback based on what other users tried at that point in time in the game helped me to increase the number of Shubs."
		  ];
		} else {
		  var item5 = [
		    "5. I found that the feedback on what choice would have led to a better result helped me to increase the number of Shubs."
		  ];
		}

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.5, item5, { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.55, 'Strongly disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite1.on('pointerdown', function (pointer) {
		  if (item5Var1Checked) {
		    item5Sprite1.setFrame(0);
		    item5Var1Checked = false;
		  } else {
		    item5Sprite1.setFrame(1);
		    item5Var1Checked = true;

		    item5Var2Checked = false;
		    item5Var3Checked = false;
		    item5Var4Checked = false;
		    item5Var5Checked = false;
		    item5Var6Checked = false;
		    item5Sprite2.setFrame(0);
		    item5Sprite3.setFrame(0);
		    item5Sprite4.setFrame(0);
		    item5Sprite5.setFrame(0);
		    item5Sprite6.setFrame(0);

		  }
		});

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.55, 'Disagree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite2.on('pointerdown', function (pointer) {
		  if (item5Var2Checked) {
		    item5Sprite2.setFrame(0);
		    item5Var2Checked = false;
		  } else {
		    item5Sprite2.setFrame(1);
		    item5Var2Checked = true;

		    item5Var1Checked = false;
		    item5Var3Checked = false;
		    item5Var4Checked = false;
		    item5Var5Checked = false;
		    item5Var6Checked = false;
		    item5Sprite1.setFrame(0);
		    item5Sprite3.setFrame(0);
		    item5Sprite4.setFrame(0);
		    item5Sprite5.setFrame(0);
		    item5Sprite6.setFrame(0);

		  }
		});

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.55, 'Neutral', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite3.on('pointerdown', function (pointer) {
		  if (item5Var3Checked) {
		    item5Sprite3.setFrame(0);
		    item5Var3Checked = false;
		  } else {
		    item5Sprite3.setFrame(1);
		    item5Var3Checked = true;

		    item5Var1Checked = false;
		    item5Var2Checked = false;
		    item5Var4Checked = false;
		    item5Var5Checked = false;
		    item5Var6Checked = false;
		    item5Sprite1.setFrame(0);
		    item5Sprite2.setFrame(0);
		    item5Sprite4.setFrame(0);
		    item5Sprite5.setFrame(0);
		    item5Sprite6.setFrame(0);

		  }
		});

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.55, 'Agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite4.on('pointerdown', function (pointer) {
		  if (item5Var4Checked) {
		    item5Sprite4.setFrame(0);
		    item5Var4Checked = false;
		  } else {
		    item5Sprite4.setFrame(1);
		    item5Var4Checked = true;

		    item5Var1Checked = false;
		    item5Var2Checked = false;
		    item5Var3Checked = false;
		    item5Var5Checked = false;
		    item5Var6Checked = false;
		    item5Sprite1.setFrame(0);
		    item5Sprite2.setFrame(0);
		    item5Sprite3.setFrame(0);
		    item5Sprite5.setFrame(0);
		    item5Sprite6.setFrame(0);

		  }
		});

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.55, 'Strongly agree', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite5.on('pointerdown', function (pointer) {
		  if (item5Var5Checked) {
		    item5Sprite5.setFrame(0);
		    item5Var5Checked = false;
		  } else {
		    item5Sprite5.setFrame(1);
		    item5Var5Checked = true;

		    item5Var1Checked = false;
		    item5Var2Checked = false;
		    item5Var3Checked = false;
		    item5Var4Checked = false;
		    item5Var6Checked = false;
		    item5Sprite1.setFrame(0);
		    item5Sprite2.setFrame(0);
		    item5Sprite3.setFrame(0);
		    item5Sprite4.setFrame(0);
		    item5Sprite6.setFrame(0);

		  }
		});

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.55, 'I prefer not to answer.', { fontFamily: 'Arial', fontSize: '16px', color: '#000000' });

		var item5Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.625, 'checkbox', 0).setScale(0.25).setInteractive();

		item5Sprite6.on('pointerdown', function (pointer) {
		  if (item5Var6Checked) {
		    item5Sprite6.setFrame(0);
		    item5Var6Checked = false;
		  } else {
		    item5Sprite6.setFrame(1);
		    item5Var6Checked = true;

		    item5Var1Checked = false;
		    item5Var2Checked = false;
		    item5Var3Checked = false;
		    item5Var4Checked = false;
		    item5Var5Checked = false;
		    item5Sprite1.setFrame(0);
		    item5Sprite2.setFrame(0);
		    item5Sprite3.setFrame(0);
		    item5Sprite4.setFrame(0);
		    item5Sprite5.setFrame(0);

		  }
		});

		// instatiate and add new end scene with current data
		var questionnaireScene3 = undefined;

		// add button to request feedback
		var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
			.setInteractive()
			.on('pointerdown', () => questionnaireScene3 = new QuestionnaireScene3(this.varObj))
			.on('pointerdown', () => this.scene.remove('questionnaireScene3', questionnaireScene3))
			.on('pointerdown', () => this.scene.add('questionnaireScene3', questionnaireScene3))
			.on('pointerdown', () => this.scene.start('questionnaireScene3'));

		var textContinue = this.add.text(-50, -15, 'Continue!', { fontSize: '18px', color: '#000000' })
		var buttonContainer = this.add.container(window.innerWidth * 0.8, window.innerHeight * 0.70, [buttonContinue, textContinue])

	}

	update() { }

}

export default QuestionnaireScene2;