export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/sprites/star.png');
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
		this.load.atlas({
			key: 'char_sprites',
			textureURL: '/assets/img/atlas_sprites/sprites.png',
			atlasURL: '.assets/img/atlas_sprites/sprites.json'
		});
		// google fonts
		this.load.script(
			'webfont',
			'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
		);

		this.load.image(
			'platform_tiles',
			'/assets/tiles/arcade_platformerV2-transparent.png'
		);
		this.load.titlemapTiledJSON(
			'map',
			'/assets/tiles/2dgame-new.json'
		);
	}
	create() {
		const map = this.make.tilemap({
			key: 'map',
			tileWidth: 16,
			tileHeight: 16
		});
		const tileset = map.addTilesetImage(
			'2dtileset',
			'platform_tiles'
		);

		const backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);
		const terrainLayer = map.createStaticLayer('terrain', tileset, 0, 0);
		const treesbgLayer = map.createStaticLayer('treesbg', tileset, 0, 0);
		const treesLayer = map.createStaticLayer('trees', tileset, 0, 0);
		const grassLayer = map.createStaticLayer('grass', tileset, 0, 0);

		terrainLayer.setCollisionByProperty({
			collides: true
		});
	}
	update(time, delta) {
		this.gameTitle.setText('Street Fighter ' + this.version);
		this.version += 1;
	}

}
	// create{
	 		// this.star1 = this.add
		// 	.sprite(0, 0, 'star')
		// 	.setScale(2, 2)
		// 	.setOrigin(0, 0);

		// this.star1.setX(100);

		// // Hidden Zone
		// this.endZone = this.add.zone(200, 200, 50, 50);
		// this.physics.world.enable(this.endZone);
		// this.endZone.body.setAllowGravity(false);

		// const scene = this.add;

		// this.square = this.add.rectangle(100, 200, 150, 150, 0xFF0000);
		// this.square.setStrokeStyle(1, 0xff0000, 1);
	
		// this.circle = this.add.circle(100, 200, 50, 0xffff00);
		// this.circle.setStrokeStyle(0, 0xff0000, 1);
	
		// this.gameTitle = this.add.text(150, 200, 'Super Mario',{
		// 	fontFamily: 'Arial',
		// 	fontSize: '40px',
		// 	fontStyle: '',
		// 	backgroundColor: null,
		// 	color: 'red',
		// 	stroke: '#fff',
		// 	strokeThickness: 0,
		// 	shadow: {
		// 		offsetX: 0,
		// 		offsetY: 0,
		// 		color: '#000',
		// 		blur: 0,
		// 		stroke: false,
		// 		fill: false
		// 	},
		// 	align: 'left',
		// 	maxLines: 0,
		// 	fixedWidth: 0,
		// 	fixedHeight: 0,
		// 	rtl: false,
		// 	testString: '|MEqgy',
		// 	wordWrap: {
		// 		width: null,
		// 		callback: null,
		// 		callbackScope: null,
		// 		useAdvancedWrap: false
		// 	}
		// 	// resolution: 1
		// });
		// 	WebFont.load({
		// 	google: {
		// 		families: ['Fredericka the Great']
		// 	},
		// 	active: () => {
		// 		this.add.text(150, 100, `GOOGLE FONT`, {
		// 				fontFamily: 'Fredericka the Great',
		// 				fontSize: 50,
		// 				color: '#ffffff'
		// 			})
		// 			.setShadow(2, 2, '#333333', 2, false, true);
		// 	}
		// });
		// this.gameTitle.setText('Street Fighter ' + 2);
		// this.version = 0;
		// this.stars = this.add.group({
		// 	key: 'star',
		// 	frame: [0,1,2,3],
		// 	setXY: {
		// 		x: 100,
		// 		y: 100,
		// 		stepX: 100,
		// 		stepY: 0
		// 	},
		// 	setScale: {
		// 		x: 1,
		// 		y: 1,
		// 		stepX: 1,
		// 		stepY: 1
		// 	}
		// })

		// this.allStars = this.add.container(10, 10);
		// var star1 = this.add.sprite(0, 0, 'star');
		// var star2 = this.add.sprite(50, 50, 'star');
		// var star3 = this.add.sprite(150, 150, 'star');

		// this.allStars.add(star1);
		// this.allStars.add(star2);
		// this.allStars.add(star3);

		// this.allStars.setX(20);
		// this.allStars.setY(20);
//			}
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