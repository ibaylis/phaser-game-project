export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/img/Pink-Flowers.png');
		this.load.spritesheet('dude', '/assets/img/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
		this.load.atlas({
			key: 'char_sprites',
			textureURL: '/assets/img/atlas_sprites/sprites.png',
			atlasURL: '.assets/img/atlas_sprites/sprites.json'
		});
	}
	create() {

		this.square = this.add.rectangle(100, 200, 150, 150, 0xFF0000);
		this.square.setStrokeStyle(1, 0xff0000, 1);
	
		this.circle = this.add.circle(100, 200, 50, 0xff0000);
		this.circle.setStrokeStyle(0, 0xff0000, 1);
	
		this.gameTitle = this.add.text(150, 200, 'Hey this is my title');
	}
	
	update(time, delta) {}
// // image section

// 		this.star = this.add.image(100, 250, 'star');
// 		this.star.setScale(2, 2);
// 		this.star.setAlpha(1, 0.5, 0.5, 0.5);
// 		console.log(this.star.originY);

// // Sprite Section
// 		this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2, 2);
// 		this.anims.create({
// 			key: 'left',
// 			frames: this.anims.generateFrameNumbers(
// 				'dude', 
// 			{
// 				start: 0,
// 				end: 3
// 			}),
// 			frameRate: 5,
// 			repeat: -1
// 		});

// 		this.dude.anims.play('left', true);
// 		// Sprite Atlas

// 		this.fatboy = this.add
// 			.sprite(100, 250, 'char_sprites', 'jacen1.png')
// 			.setScale(2, 2);
// 		const frameNames = [
// 			{ key: 'char_sprites', frame: 'jacen2.png' },
// 			{ key: 'char_sprites', frame: 'jacen3.png' },
// 			{ key: 'char_sprites', frame: 'jacen4.png' },
// 			{ key: 'char_sprites', frame: 'jacen5.png' }
// 		];
// 		this.anims.create({
// 			key: 'right',
// 			frames: frameNames,
// 			frameRate: 10,
// 			repeat: -1
// 		});
// 		this.fatboy.flipX = true;
// 		this.fatboy.anims.play('right', true);

// 		console.log(this.star.originY);
// 	

}

		// this.add.image(400, 300, 'sky');
		// this.add.image(400, 300, 'star');
		// this.add.text = 'this is me';
		// this.load.image('sky', 'assets/sky.png');
		// this.load.image('ground', 'assets/platform.png');
		// this.load.image('star', 'assets/star.png');
		// this.load.image('bomb', 'assets/bomb.png');
		// this.load.spritesheet('dude', 
		// 	'assets/dude.png',
		// 	{ frameWidth: 32, frameHeight: 48 }
		// );
		
		// this.load.setPath('assets/')