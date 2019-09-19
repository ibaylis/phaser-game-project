export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}
	preload() {
		this.load.image('star', '/assets/sprites/star.png');
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
		
	}
	create() {
        const keyboard = this.input.keyboard;

        this.dude = this.add.sprite(100, 200, 'dude');
        this.input.enabled = true;
        this.dKey = keyboard.addKey('D');
        this.aKey = keyboard.addKey('A');
        this.wKey = keyboard.addKey('W');
        this.sKey = keyboard.addKey('S');
        this.spacebarKey = keyboard.addKey('SPACE');
	}
	update(time, delta) {
        if(this.dKey.isDown) {
            this.dude.setX(this.dude.x + 5);
        }
        if(this.aKey.isDown) {
            this.dude.setX(this.dude.x - 5);
        }

        if(this.wKey.isDown) {
            this.dude.setY(this.dude.y - 5);
        }
        if(this.sKey.isDown) {
            this.dude.setY(this.dude.y + 5);
        }   
        if(Phaser.Input.Keyboard.JustDown(this.spacebarKey)) {
            this.dude.setY(this.dude.y - 50);
        }   
	}
}