var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
    },
    scene: [startgamescene, playgamescene, endgamescene,]
};
var game = new Phaser.Game(config);