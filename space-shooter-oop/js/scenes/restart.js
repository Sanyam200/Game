class restart extends Phaser.Scene {
    constructor(){
        super('play')
    }

preload() {
    
    this.load.image('start', 'assets/images/play-now.png')
}

create() {
    
    this.startbtn = this.add.image(100, 100, 'start')
    this.startbtn.setInteractive();
    this.startbtn.on('pointerdown', this.startGame, this)
}

startGame() {
    this.scene.start('Play');
}
}