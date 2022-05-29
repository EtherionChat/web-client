import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  //   network!: Phaser.Network;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  constructor() {
    super('game');
  }

  registerKeys() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    this.createEmitter();
  }

  createEmitter() {
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
